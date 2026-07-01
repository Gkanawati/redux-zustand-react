import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { next, useCurrentLesson } from '../store/slices/player';

export function Video() {
  const dispatch = useDispatch();
  const { currentLesson } = useCurrentLesson();

  const video = {
    title: currentLesson.title,
    duration: currentLesson.duration,
    videoUrl: `https://www.youtube.com/watch?v=${currentLesson.id}`,
  };

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
        volume={0.01}
      />
    </div>
  );
}
