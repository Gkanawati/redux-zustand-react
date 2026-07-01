import ReactPlayer from 'react-player';
import { useAppSelector } from '../store';

export function Video() {
  const video = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;
    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ];

    return {
      title: currentLesson.title,
      duration: currentLesson.duration,
      videoUrl: `https://www.youtube.com/watch?v=${currentLesson.id}`,
    };
  });

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer width='100%' height='100%' controls src={video.videoUrl} />
    </div>
  );
}
