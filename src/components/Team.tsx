const team = [
  { name: "Александр", surname: "Кароль", position: "top-left" },
  { name: "Яна", surname: "Кароль", position: "top-right" },
  { name: "Александр", surname: "Филипенко", position: "mid-left" },
  { name: "Виктор", surname: "Мешков", position: "mid-right" },
  { name: "Виталий", surname: "", position: "bottom-center" },
];

export default function Team() {
  return (
    <section className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Левая часть — инфо */}
      <div className="flex-1 flex flex-col justify-center px-10 py-16 lg:px-20 border-r border-neutral-200">
        <span className="text-orange-500 uppercase text-xs tracking-widest mb-10">Информация</span>
        <div className="flex flex-col gap-10">
          <div className="border-b border-neutral-200 pb-8">
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Адрес</p>
            <p className="text-2xl lg:text-3xl font-bold text-neutral-900">Павлодарская, 12</p>
          </div>
          <div className="border-b border-neutral-200 pb-8">
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">График работы</p>
            <p className="text-2xl lg:text-3xl font-bold text-neutral-900">9:00 – 20:00</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Режим</p>
            <p className="text-2xl lg:text-3xl font-bold text-neutral-900">Ежедневно</p>
          </div>
        </div>
      </div>

      {/* Правая часть — команда */}
      <div className="flex-1 flex flex-col justify-center px-10 py-16 lg:px-20">
        <span className="text-orange-500 uppercase text-xs tracking-widest mb-10">Наша команда</span>
        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {/* Ряд 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-neutral-900" />
            <div className="text-center">
              <p className="font-semibold text-neutral-900">Александр</p>
              <p className="font-semibold text-neutral-900">Кароль</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-neutral-900" />
            <div className="text-center">
              <p className="font-semibold text-neutral-900">Яна</p>
              <p className="font-semibold text-neutral-900">Кароль</p>
            </div>
          </div>
          {/* Ряд 2 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-neutral-900" />
            <div className="text-center">
              <p className="font-semibold text-neutral-900">Александр</p>
              <p className="font-semibold text-neutral-900">Филипенко</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-neutral-900" />
            <div className="text-center">
              <p className="font-semibold text-neutral-900">Виктор</p>
              <p className="font-semibold text-neutral-900">Мешков</p>
            </div>
          </div>
          {/* Ряд 3 — по центру */}
          <div className="col-span-2 flex justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-full border-2 border-neutral-900" />
              <div className="text-center">
                <p className="font-semibold text-neutral-900">Виталий</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
