import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { next } from '../store/slices/player';

export function Video() {
  const dispatch = useDispatch();
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

  function handleNextLesson() {
    dispatch(next());
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width='100%'
        height='100%'
        controls
        // playing = auto play video
        playing
        src={video.videoUrl}
        onEnded={() => handleNextLesson()}
      />
    </div>
  );
}
