interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Логотип — шахматный паттерн */}
          <svg width="72" height="60" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Ряд 1 */}
            <rect x="0"  y="0"  width="18" height="18" fill="white" />
            <rect x="18" y="0"  width="18" height="18" fill="#404040" />
            <rect x="36" y="0"  width="18" height="18" fill="white" />
            <rect x="54" y="0"  width="18" height="18" fill="#404040" />
            {/* Ряд 2 */}
            <rect x="0"  y="18" width="18" height="18" fill="#404040" />
            <rect x="18" y="18" width="18" height="18" fill="#E86A1A" />
            <rect x="36" y="18" width="18" height="18" fill="#404040" />
            <rect x="54" y="18" width="18" height="18" fill="white" />
            {/* Ряд 3 */}
            <rect x="0"  y="36" width="18" height="18" fill="white" />
            <rect x="18" y="36" width="18" height="18" fill="#404040" />
            <rect x="36" y="36" width="18" height="18" fill="#E86A1A" />
            <rect x="54" y="36" width="18" height="18" fill="#404040" />
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