import DayState from "@/components/DayState"
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  const habits ={
    'beber água':{
      '2023-07-18': true,
      '2023-07-17': false,
      '2023-07-16': false,
    },
    'estudar programação':{
      '2023-07-18': false,
      '2023-07-17': true,
      '2023-07-16': false,
    },
  }

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const sortedWeekDays = weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1))


  return (
    <main className="container relative flex flex-col gap-8 pt-10 p-3">
    {habits === null || (Object.keys(habits).length === 0 && (
      <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
        Voce não tem habitos cadastrados</h1>
    ))}
     {
      habits !== null && Object.entries(habits).map(([habit, habitStreak]) => (
        <div key={habit} className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xl font-light text-white font-sans">{habit}
            </span>
            <button type="button" aria-label="button">
              <Image src="/images/lixeira.svg" width={20} height={20} alt="Icone de lixeira vermelha"
              />
            </button>
          </div>
          <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
            {sortedWeekDays.map((day) =>
            <div key={day} className="flex flex-col  last:font-bold">
             <span className="font-sans text-xs text-white text-center">
              {day}
             </span>
              <DayState day={true}/>
            </div>
            )}
          </section>
        </div>
      ))}

      <Link href="novo-habito" className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display font-regular text-2xl p-2 rounded-md"> Novo Hábito</Link>
    </main>
  )
}
