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
    "At Trek Karo India, we bring you the perfect combination of adventure, culture, and relaxation with our Goa & Maharashtra tours. Whether you're drawn to the vibrant beaches of Goa,...";

  const fullText =
    " At Trek Karo India, we bring you the perfect combination of adventure, culture, and relaxation with our Goa & Maharashtra tours. Whether you're drawn to the vibrant beaches of Goa, the historic forts of Maharashtra, or the scenic western ghats, we curate experiences that truly stay with you. Our packages include transport, stays, guided tours, and much more to ensure a stress-free holiday experienceAt Trek Karo India, we bring you the perfect combination of adventure, culture, and relaxation with our Goa & Maharashtra tours. Whether you're drawn to the vibrant beaches of Goa, the historic forts of Maharashtra, or the scenic western ghats, we curate experiences that truly stay with you. Our packages include transport, stays, guided tours, and much more to ensure a stress-free holiday experienceAt Trek Karo India, we bring you the perfect combination of adventure, culture, and relaxation with our Goa & Maharashtra tours. Whether you're drawn to the vibrant beaches of Goa, the historic forts of Maharashtra, or the scenic western ghats, we curate experiences that truly stay with you. Our packages include transport, stays, guided tours, and much more to ensure a stress-free holiday experienceAt Trek Karo India, we bring you the perfect combination of adventure, culture, and relaxation with our Goa & Maharashtra tours. Whether you're drawn to the vibrant beaches of Goa, the historic forts of Maharashtra, or the scenic western ghats, we curate experiences that truly stay with you. Our packages include transport, stays, guided tours, and much more to ensure a stress-free holiday experienceAt Trek Karo India, we bring you the perfect combination of adventure, culture, and relaxation with our Goa & Maharashtra tours. Whether you're drawn to the vibrant beaches of Goa, the historic forts of Maharashtra, or the scenic western ghats, we curate experiences that truly stay with you. Our packages include transport, stays, guided tours, and much more to ensure a stress-free holiday experience.";

  return (
    <div className="max-container py-4 sm:py-6">

      <div className="">
      <div className="bg-[#F7F7F7] rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold  text-black mb-3">
          About Maharashtra
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
