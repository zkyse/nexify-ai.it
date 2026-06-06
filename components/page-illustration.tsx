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
      {/* Blocco stili custom per animazioni avanzate dello sfondo */}
      <style jsx global>{`
        /* Pulsazione morbida per la griglia/illustrazione principale in alto */
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.85; transform: translate(-25%, 0) scale(1); }
          50% { opacity: 1; transform: translate(-25%, 2px) scale(1.02); }
        }

        /* Movimento orbitale e cambio di opacità per il primo blob (Grigio/Scuro) */
        @keyframes cosmic-float-1 {
          0%, 100% { 
            transform: translate(-100%, 0) scale(1) rotate(0deg); 
            opacity: 0.35; 
          }
          33% { 
            transform: translate(-96%, -20px) scale(1.08) rotate(3deg); 
            opacity: 0.55; 
          }
          66% { 
            transform: translate(-104%, 10px) scale(0.95) rotate(-2deg); 
            opacity: 0.4; 
          }
        }

        /* Movimento orbitale opposto e più lento per il secondo blob (Colorato/Neon) */
        @keyframes cosmic-float-2 {
          0%, 100% { 
            transform: translate(-33.333%, 0) scale(1) rotate(0deg); 
            opacity: 0.6; 
          }
          50% { 
            transform: translate(-38%, 25px) scale(1.12) rotate(-5deg); 
            opacity: 0.45; 
          }
        }

        .animate-bg-main {
          animation: subtle-pulse 8s ease-in-out infinite;
        }
        .animate-blob-cosmic-1 {
          animation: cosmic-float-1 14s ease-in-out infinite;
        }
        .animate-blob-cosmic-2 {
          animation: cosmic-float-2 18s ease-in-out infinite 1.5s;
        }
      `}</style>

      {/* Illustrazione Principale con pulsazione della luce */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 animate-bg-main will-change-transform"
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
          {/* Primo Blob (Grigio) - Fluttuazione asincrona 1 */}
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 animate-blob-cosmic-1 will-change-transform"
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

          {/* Secondo Blob (Colorato) - Fluttuazione asincrona 2 con delay */}
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 animate-blob-cosmic-2 will-change-transform"
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
}        /* Movimento orbitale opposto e più lento per il secondo blob (Colorato/Neon) */
        @keyframes cosmic-float-2 {
          0%, 100% { 
            transform: translate(-33.333%, 0) scale(1) rotate(0deg); 
            opacity: 0.6; 
          }
          50% { 
            transform: translate(-38%, 25px) scale(1.12) rotate(-5deg); 
            opacity: 0.45; 
          }
        }

        .animate-bg-main {
          animation: subtle-pulse 8s ease-in-out infinite;
        }
        .animate-blob-cosmic-1 {
          animation: cosmic-float-1 14s ease-in-out infinite;
        }
        .animate-blob-cosmic-2 {
          animation: cosmic-float-2 18s ease-in-out infinite 1.5s;
        }
      `}</style>

      {/* Illustrazione Principale con pulsazione della luce */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 animate-bg-main will-change-transform"
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
          {/* Primo Blob (Grigio) - Fluttuazione asincrona 1 */}
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 animate-blob-cosmic-1 will-change-transform"
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

          {/* Secondo Blob (Colorato) - Fluttuazione asincrona 2 con delay */}
          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 animate-blob-cosmic-2 will-change-transform"
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
