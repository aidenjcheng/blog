"use client";

import type { ImageProps } from "next/image";

import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MotionImage = motion.create(Image);

interface MDXImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  caption?: string;
}

export default function MDXImage({
  caption,
  alt,
  src,
  ...props
}: MDXImageProps) {
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
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <motion.div
              layoutId={`image-preview-dialog${uniqueId}`}
              className="relative w-full cursor-pointer rounded-lg border border-border overflow-hidden"
              role="button"
              whileHover={{ scale: 0.975, opacity: 0.9 }}
            >
              <MotionImage
                layoutId={`image-preview${uniqueId}`}
                src={src}
                alt={alt}
                width={1000}
                height={1000}
                sizes="100vw"
                className="rounded-lg object-contain w-full h-auto"
                {...props}
              />
            </motion.div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <AnimatePresence initial={false} mode="sync">
              {isOpen && (
                <>
                  <Dialog.Overlay>
                    <motion.div
                      className="fixed inset-0 z-40 h-full w-full backdrop-blur-xs bg-black/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>
                  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <Dialog.Content className="w-[90vw] max-w-[720px]">
                      <VisuallyHidden>
                        <Dialog.Title>Image Preview</Dialog.Title>
                        <Dialog.Description>{alt}</Dialog.Description>
                      </VisuallyHidden>
                      <motion.div
                        layoutId={`image-preview-dialog${uniqueId}`}
                        className="relative w-full overflow-hidden rounded-2xl"
                      >
                        <MotionImage
                          layoutId={`image-preview${uniqueId}`}
                          src={src}
                          alt={alt}
                          width={1000}
                          height={1000}
                          sizes="100vw"
                          className="rounded-2xl object-contain select-none w-full h-auto"
                          {...props}
                        />
                        <Dialog.Close asChild>
                          <button
                            type="button"
                            role="button"
                            aria-label="Close dialog"
                            className="absolute top-3 right-3 z-10 h-fit w-fit rounded-full border border-white/20 bg-white/20 p-[6px] backdrop-blur hover:bg-white/50 focus-visible:outline-none"
                          >
                            <X size={20} color="white" />
                          </button>
                        </Dialog.Close>
                      </motion.div>
                    </Dialog.Content>
                  </div>
                </>
              )}
            </AnimatePresence>
          </Dialog.Portal>
        </Dialog.Root>
      </MotionConfig>
      {caption && <sub className="pt-2 text-center text-muted">{caption}</sub>}
    </div>
  );
}
