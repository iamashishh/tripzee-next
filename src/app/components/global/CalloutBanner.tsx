"use client";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

export function CalloutBanner() {
  const previewText =
    "Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and tradition.....";

  const fullText =
    " Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and traditionEmbark on a journey through Dubai’s stunning landscapes and vibrant cityscapes. From the iconic Burj Khalifa to the bustling souks, e stop offers a unique blend of luxury and tradition.";

  return (
    <div className="max-container py-4 sm:py-6">

      <div className="">
      <div className="bg-[#F7F7F7] rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold  text-black mb-3">
          About Himachal Tour Package
        </h2>

        <p className="text-gray-700 text-[15px] leading-relaxed">
          {previewText}
          <Drawer>
            <DrawerTrigger className="font-semibold  cursor-pointer text-black ml-1">
              Read More
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-black">
                  About Maharashtra
                </DrawerTitle>
                <DrawerDescription className="text-black leading-relaxed text-[15px] mt-3">
                  {fullText}
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </p>
      </div>
      </div>
    </div>
  );
}
