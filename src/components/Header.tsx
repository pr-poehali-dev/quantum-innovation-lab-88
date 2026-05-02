interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <img
          src="https://cdn.poehali.dev/projects/32c0bf19-ecd5-4fa2-b1c5-caae941c5d3c/bucket/9a1301f5-1b21-4f95-9703-a823958fa9e0.jpg"
          alt="Автосервис Акара"
          className="h-16 w-auto object-contain rounded"
          style={{ mixBlendMode: "luminosity", filter: "brightness(1.1) contrast(1.1)", backgroundColor: "#525252" }}
        />
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-white hover:text-orange-400 transition-colors duration-300 uppercase text-sm"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="text-white hover:text-orange-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}