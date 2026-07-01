import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'Desvendando o Redux',
          lessons: [
            {
              id: 'JHL8BwUzNlI',
              title: 'O que é o Redux?',
              duration: '32:29',
            },
            {
              id: 'zx6lF1TL_xI',
              title: 'Por que utilizar o Redux?',
              duration: '14:06',
            }
          ]
        },
        {
          id: '2',
          title: 'Estruturando o Redux',
          lessons: [
            {
              id: 'JHL8BwUzNlI',
              title: 'Estrutura do Redux',
              duration: '25:09',
            },
            {
              id: 'zx6lF1TL_xI',
              title: 'Configurando o Redux',
              duration: '03:12',
            },
            {
              id: 'JHL8BwUzNlI',
              title: 'Estrutura de pastas',
              duration: '08:12',
            }
          ]
        }
      ]
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action) => {
      const { moduleIndex, lessonIndex } = action.payload;
      state.currentModuleIndex = moduleIndex;
      state.currentLessonIndex = lessonIndex;
    }
  },
})

export const player = playerSlice.reducer;

export const { play } = playerSlice.actions;
