interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/32c0bf19-ecd5-4fa2-b1c5-caae941c5d3c/bucket/6e2f30b2-890d-4985-8d50-70a681d44426.png"
            alt="Автосервис Акара"
            className="h-32 w-auto object-contain"
          />
        </div>
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