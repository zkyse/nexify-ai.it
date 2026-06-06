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
      {/* Illustrazione Principale in alto 
        Usa una pulsazione nativa di Tailwind (animate-pulse) ma molto rallentata (8s)
      */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 animate-[pulse_8s_ease-in-out_infinite] will-change-[opacity]"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>

      {multiple && (
        <>
          {/* Primo Blob (Grigio)
            Animazione custom in linea: si sposta, ruota e pulsa in 14 secondi
          */}
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 animate-[spin_40s_linear_infinite] opacity-40 will-change-transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>

          {/* Secondo Blob (Colorato)
            Animazione custom in linea: gira al contrario rispetto al primo in 25 secondi 
            per creare l'effetto fluido incrociato (Liquid Glow)
          */}
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 animate-[spin_25s_linear_infinite_reverse] opacity-60 will-change-transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}
