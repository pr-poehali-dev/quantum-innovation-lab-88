interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Логотип — шахматный паттерн Акара */}
          <svg width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="90" height="72" fill="#404040"/>
            {/* Ряд 1: _ W _ W _ (col 2,4) */}
            <rect x="18" y="0"  width="18" height="18" fill="white" />
            <rect x="54" y="0"  width="18" height="18" fill="white" />
            {/* Ряд 2: W O W _ _ */}
            <rect x="0"  y="24" width="18" height="18" fill="white" />
            <rect x="18" y="24" width="18" height="18" fill="#E06820" />
            <rect x="36" y="24" width="18" height="18" fill="white" />
            {/* Ряд 3: _ W _ O _ */}
            <rect x="18" y="48" width="18" height="18" fill="white" />
            <rect x="54" y="48" width="18" height="18" fill="#E06820" />
          </svg>
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