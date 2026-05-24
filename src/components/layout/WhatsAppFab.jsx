"use client";

const PHONE = "919555472161";
const MESSAGE = "Hi! I'd like to know more about HIOS courses.";

export function WhatsAppFab() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-xl shadow-green-900/40 hover:shadow-green-500/50 transition-all hover:scale-110"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />

      {/* Official WhatsApp glyph */}
      <svg
        viewBox="0 0 32 32"
        className="relative w-7 h-7 md:w-8 md:h-8 text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.04 1.398-1.04 2.353 0 1.448 1.04 2.81 1.84 3.825 1.733 2.21 3.825 4.21 6.495 5.18.99.36 2.146.616 3.265.616 1.275 0 2.435-.345 3.45-.86.515-.272.945-.66 1.275-1.117.358-.502.515-1.117.515-1.733 0-.43-.273-.92-.616-1.117-.43-.244-.86-.487-1.275-.745-.43-.244-.83-.487-1.275-.66-.43-.172-.745-.244-.998-.244zM16.43 31.043c-2.464 0-4.812-.66-6.86-1.89l-7.6 1.99 2.033-7.41a13.97 13.97 0 0 1-1.99-7.213c0-7.74 6.305-14.05 14.05-14.05 7.745 0 14.05 6.31 14.05 14.05 0 7.74-6.305 14.05-14.05 14.05zm0-25.766c-6.46 0-11.717 5.255-11.717 11.717 0 2.563.825 4.94 2.235 6.876l-1.18 4.31 4.43-1.16a11.658 11.658 0 0 0 6.232 1.79c6.46 0 11.717-5.257 11.717-11.718 0-6.462-5.256-11.717-11.717-11.717z" />
      </svg>

      {/* Tooltip on hover (desktop) */}
      <span className="hidden md:block pointer-events-none absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-slate-950/90 text-amber-100 text-sm font-medium whitespace-nowrap border border-amber-500/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us
      </span>
    </a>
  );
}
