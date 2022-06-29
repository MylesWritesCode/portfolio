import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
interface ImageWithModalProps {
  href: string;
  className?: string;
  alt?: string;
}

export function ImageWithModal({ className, href, alt }: ImageWithModalProps) {
  const [modalClasses, setModalClasses] = useState(className || null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setModalClasses(
        [
          "fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center",
          "h-screen w-screen min-w-screen max-w-full min-h-screen max-h-full",
          "p-10 bg-[#000000aa]",
        ].join(" ")
      );
    } else {
      setModalClasses(className || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      className={["img-container", modalClasses].join(" ")}
      onClick={() => setIsOpen(!isOpen)}>
      <img
        className={[
          "h-full w-full",
          `${isOpen ? "object-contain" : "object-cover"}`,
        ].join(" ")}
        src={href}
        alt={alt || "image"}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}
