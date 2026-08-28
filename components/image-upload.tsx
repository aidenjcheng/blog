"use client";

import MDXImage from "@/components/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { ImagePlus } from "lucide-react";
import { useRef, useState } from "react";

export function ImageUpload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file?.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileExplorer = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger render={<Button variant="ghost" size="icon" />}>
          <ImagePlus className="size-4" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Image</DialogTitle>
            <DialogDescription>Choose an image file to upload and display in your post.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
            <button
              type="button"
              className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed bg-muted p-8 transition-colors hover:bg-muted/80"
              onClick={openFileExplorer}
            >
              <ImagePlus className="mb-2 size-8 text-muted-foreground" />
              <span className="text-muted-foreground text-sm">Click to select an image</span>
              <span className="mt-1 text-muted-foreground text-xs">PNG, JPG, GIF up to 10MB</span>
            </button>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {uploadedImage && <MDXImage src={uploadedImage} alt="Uploaded image" />}
    </>
  );
}
