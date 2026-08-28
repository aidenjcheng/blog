"use client";

import type { ImageProps } from "next/image";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { X } from "lucide-react";
import { MotionConfig, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

// Create a motion wrapper for Next.js Image to avoid type conflicts
const MotionImage = motion.div;

interface MDXImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  caption?: string;
}

export default function MDXImage({ caption, alt, src, ...props }: MDXImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = src.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <div className="my-6 flex flex-col justify-end gap-2">
      <MotionConfig
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 1,
          duration: 0.3,
        }}
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger
            render={
              <motion.button
                type="button"
                aria-label={`Open image preview: ${alt}`}
                layoutId={`image-preview-dialog${uniqueId}`}
                className="relative w-full cursor-pointer overflow-hidden rounded-lg border border-border"
                whileHover={{ scale: 0.975, opacity: 0.9 }}
              />
            }
          >
            <MotionImage layoutId={`image-preview${uniqueId}`} className="h-auto w-full overflow-hidden rounded-lg">
              <Image src={src} alt={alt} width={1000} height={1000} sizes="100vw" className="h-auto w-full object-contain" {...props} />
            </MotionImage>
          </DialogTrigger>
          <DialogContent className="w-[90vw] max-w-[720px] p-0" showCloseButton={false}>
            <DialogTitle className="sr-only">Image Preview</DialogTitle>
            <DialogDescription className="sr-only">{alt}</DialogDescription>
            <motion.div layoutId={`image-preview-dialog${uniqueId}`} className="relative w-full overflow-hidden rounded-2xl">
              <MotionImage layoutId={`image-preview${uniqueId}`} className="h-auto w-full select-none overflow-hidden rounded-2xl">
                <Image src={src} alt={alt} width={1000} height={1000} sizes="100vw" className="h-auto w-full object-contain" {...props} />
              </MotionImage>
              <DialogClose
                render={
                  <button
                    type="button"
                    aria-label="Close dialog"
                    className="absolute top-3 right-3 z-10 h-fit w-fit rounded-full border border-white/20 bg-white/20 p-[6px] backdrop-blur hover:bg-white/50 focus-visible:outline-none"
                  />
                }
              >
                <X size={20} color="white" />
              </DialogClose>
            </motion.div>
          </DialogContent>
        </Dialog>
      </MotionConfig>
      {caption && <sub className="pt-2 text-center text-muted">{caption}</sub>}
    </div>
  );
}
