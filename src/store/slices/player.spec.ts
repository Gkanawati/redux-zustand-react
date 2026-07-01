import { describe, expect, it } from 'vitest';
import { next, play, player as reducer } from './player';

const exampleState = {
  course: {
    modules: [
      {
        id: '1',
        title: 'Desvendando o Redux',
        lessons: [{ id: 'JHL8BwUzNlI', title: 'Lesson 1', duration: '32:29' }],
      },
      {
        id: '2',
        title: 'Estruturando o Redux',
        lessons: [
          { id: 'JHL8BwUzNlI', title: 'Lesson 1', duration: '25:09' },
          { id: 'zx6lF1TL_xI', title: 'Lesson 2', duration: '03:12' },
        ],
      },
    ],
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

describe('player slice', () => {
  it('should be able to play a lesson', () => {
    const state = reducer(
      exampleState,
      play({ moduleIndex: 1, lessonIndex: 1 }),
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it('should be able to go to the next lesson', () => {
    const nextState = reducer(exampleState, next());

    expect(nextState.currentModuleIndex).toEqual(1);
    expect(nextState.currentLessonIndex).toEqual(0);
  });

  it('should be able to go to the next module', () => {
    const state = {
      ...exampleState,
      currentModuleIndex: 0,
      currentLessonIndex: 1,
    };

    const nextState = reducer(state, next());

    expect(nextState.currentModuleIndex).toEqual(1);
    expect(nextState.currentLessonIndex).toEqual(0);
  });

  it('should not go to the next module if there is no next lesson', () => {
    const state = {
      ...exampleState,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    };

    const nextState = reducer(state, next());

    expect(nextState.currentModuleIndex).toEqual(1);
    expect(nextState.currentLessonIndex).toEqual(1);
  });

  it('should not go to the next lesson if there is no next module', () => {
    const state = {
      ...exampleState,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    };

    const nextState = reducer(state, next());

    expect(nextState.currentModuleIndex).toEqual(1);
    expect(nextState.currentLessonIndex).toEqual(1);
  });
});
