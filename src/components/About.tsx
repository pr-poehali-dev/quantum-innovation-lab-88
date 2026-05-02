export default function About() {
  return (
    <section className="min-h-screen bg-neutral-100 grid grid-cols-2 grid-rows-2">
      {/* Верх-лево: текст */}
      <div className="flex flex-col justify-center px-10 py-12 lg:px-16 lg:py-16 border-b border-r border-neutral-300">
        <span className="text-orange-500 uppercase text-xs tracking-widest mb-4">О нас</span>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
          Мастера своего дела
        </h2>
        <p className="text-neutral-600 text-base lg:text-lg leading-relaxed">
          Автосервис Акара — это команда опытных специалистов с многолетним стажем. Мы дорожим каждым клиентом и гарантируем прозрачность на всех этапах ремонта.
        </p>
      </div>

      {/* Верх-право: картинка */}
      <div className="border-b border-neutral-300 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/32c0bf19-ecd5-4fa2-b1c5-caae941c5d3c/bucket/6f962ebc-eee2-4fd7-ba9e-8eebd7f78ad6.jpg"
          alt="Механик за работой"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Низ-лево: картинка */}
      <div className="border-r border-neutral-300 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/32c0bf19-ecd5-4fa2-b1c5-caae941c5d3c/files/bf5a2a72-dd35-4fb7-9400-9bd0ccbf7062.jpg"
          alt="Автомобиль на подъёмнике"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Низ-право: текст */}
      <div className="flex flex-col justify-center px-10 py-12 lg:px-16 lg:py-16">
        <span className="text-orange-500 uppercase text-xs tracking-widest mb-4">Наш подход</span>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6">
          Честность и качество
        </h2>
        <p className="text-neutral-600 text-base lg:text-lg leading-relaxed">
          Никаких скрытых доплат и лишних работ. Только то, что действительно нужно вашему автомобилю — с гарантией на все виды услуг.
        </p>
      </div>
    </section>
  );
}