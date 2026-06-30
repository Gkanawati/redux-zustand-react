import { MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { Module } from '../components/Module';

export function Player() {
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
            <Module
              moduleIndex={0}
              title='Iniciando com Redux'
              amountOfLessons={2}
            />
            <Module
              moduleIndex={1}
              title='Estrutura do Redux'
              amountOfLessons={2}
            />
            <Module
              moduleIndex={2}
              title='Estrutura do Redux'
              amountOfLessons={2}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
