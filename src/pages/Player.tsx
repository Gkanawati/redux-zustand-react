import { MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Module } from '../components/Module';
import { useAppSelector } from '../store';

export function Player() {
  const modules = useAppSelector((state) => state.player.course.modules);

  return (
    <div className='h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center'>
      <div className='flex w-[1100px] flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Header />

          <button className='flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-semibold transition-colors text-white hover:bg-violet-600 '>
            <MessageCircle className='inline-block mr-2' size={20} />
            Deixar feedback
          </button>
        </div>

        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className='flex flex-1'>
            <Video />
          </div>
          <aside className='absolute right-0 top-0 h-full w-80 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 h-[600px] overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-700'>
            {modules.map((module, index) => (
              <Module
                key={module.id}
                moduleIndex={index}
                title={module.title}
                amountOfLessons={module.lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
