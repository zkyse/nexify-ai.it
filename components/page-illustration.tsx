import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      {/* Illustrazione Principale in alto (Griglia/Luce) */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 animate-[pulse_8s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-80"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>

      {multiple && (
        <>
          {/* Primo Blob (Grigio) - Ora più visibile e si muove su/giù */}
          <div
            className="pointer-events-none absolute left-1/4 top-[250px] -z-10 opacity-60 mix-blend-screen animate-[bounce_10s_infinite] will-change-transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={BlurredShapeGray}
              width={600}
              height={600}
              alt="Blurred shape"
            />
          </div>

          {/* Secondo Blob (Colorato/Neon) - Spostato più al centro, pulsa vistosamente */}
          <div
            className="pointer-events-none absolute right-1/4 top-[350px] -z-10 opacity-75 mix-blend-screen animate-[pulse_6s_infinite] scale-110 will-change-transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={BlurredShape}
              width={600}
              height={600}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}
