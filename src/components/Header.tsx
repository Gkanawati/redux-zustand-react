import { useAppSelector } from '../store';

export function Header() {
  const courseTitle = useAppSelector((state) => {
    const { currentModuleIndex } = state.player;
    return state.player.course.modules[currentModuleIndex].title;
  });
  const courseModule = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;
    return state.player.course.modules[currentModuleIndex].lessons[
      currentLessonIndex
    ].title;
  });

  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-2xl font-bold'>{courseTitle}</h1>
      <span className='text-sm text-zinc-400'>Módulo "{courseModule}"</span>
    </div>
  );
}
