import { PlayCircle, Video } from 'lucide-react';

interface LessonProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Lesson({
  title,
  duration,
  isCurrent,
  onPlay,
}: Readonly<LessonProps>) {
  function handlePlayLesson() {
    onPlay();
  }

  return (
    <button
      onClick={handlePlayLesson}
      data-active={isCurrent}
      className={`flex items-center gap-3 text-sm transition-colors cursor-pointer text-zinc-400 data-[active=true]:text-violet-400 hover:text-zinc-100`}
    >
      {isCurrent ? (
        <PlayCircle
          data-active={isCurrent}
          className='w-4 h-4 text-violet-400'
        />
      ) : (
        <Video data-active={isCurrent} className='w-4 h-4' />
      )}
      <span>{title}</span>
      <span className='ml-auto font-mono text-xs text-zinc-400'>
        {duration}
      </span>
    </button>
  );
}
