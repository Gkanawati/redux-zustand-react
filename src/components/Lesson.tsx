import { Video } from 'lucide-react';

interface LessonProps {
  title: string;
  duration: string;
  onPlay: () => void;
}

export function Lesson({ title, duration, onPlay }: Readonly<LessonProps>) {
  function handlePlayLesson() {
    onPlay();
  }

  return (
    <button
      onClick={handlePlayLesson}
      className='flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-50 transition-colors cursor-pointer'
    >
      <Video className='w-4 h-4 text-zinc-500' />
      <span>{title}</span>
      <span className='ml-auto font-mono text-xs text-zinc-400'>
        {duration}
      </span>
    </button>
  );
}
