import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, FretboardPosition } from "../Utils/Types";
import { RootState } from "./store";



export interface AppState {
  gameStarted:boolean,
  practiceMode:boolean,
  hideCircles:boolean,
  fretboardRotationX:number;
  fretboardRotationCenter:number;
  pointers: FretboardPosition[];
  wrongClickedCrosses: FretboardPosition[]; 
  correctAnswer:string;
  noteButtonValues:[Note,Note,Note,Note],
  wrongClickedButtons:[boolean,boolean,boolean,boolean],
  totalAnswered: number;
  correctAnswered: number;
  findNodeMode: {
    stringNumber:number,
    correctFret:number
  }
}

const initialState: AppState = {
  gameStarted:false,
  hideCircles:false,
  practiceMode:false,
  fretboardRotationX:0,
  fretboardRotationCenter:0,
  pointers: [],
  wrongClickedCrosses:[],
  correctAnswer:"",
  noteButtonValues:["","","",""],
  wrongClickedButtons:[false,false,false,false],
  totalAnswered: 0,
  correctAnswered: 0,
  findNodeMode : {
    stringNumber:0,
    correctFret:0
  }
};



export const guessNoteSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setFretboardRotationX(state,action: PayloadAction<number>) {
      state.fretboardRotationX = action.payload
    },
    setFretboardRotationCenter(state,action: PayloadAction<number>) {
      state.fretboardRotationCenter = action.payload
    },
    setHideFretboardCircles(state,action: PayloadAction<boolean>) {
      state.hideCircles = action.payload
    },
    setPointers(state,action: PayloadAction<[number,number][]>) {
      state.pointers = action.payload
    },
    setWrongClickedCrosses(state,action: PayloadAction<[number,number][]>) {
      state.wrongClickedCrosses = action.payload
    },
    setGameStarted(state,action: PayloadAction<boolean>) {
      state.gameStarted = action.payload
    },
    setNoteButtonValues(state,action: PayloadAction<[Note,Note,Note,Note]>) {
      state.noteButtonValues = action.payload
    },
    setCorrectAnswer(state,action: PayloadAction<string>) {
      state.correctAnswer = action.payload
    },
    setPracticemode(state,action: PayloadAction<boolean>) {
      state.practiceMode = action.payload
    },
    setWrongClickedButtons(state,action: PayloadAction<[boolean,boolean,boolean,boolean]>) {
      state.wrongClickedButtons = action.payload
    },
    incrementTotalAnswered(state) {
      state.totalAnswered++;
    },
    incrementCorrectAnswered(state) {
      state.correctAnswered++;
    },
    resetCorrectAndTotalAnswers(state) {
      state.correctAnswered = 0;
      state.totalAnswered = 0;
    },
    findNodeSetString(state,action: PayloadAction<number>) {
      state.findNodeMode.stringNumber = action.payload
    },
    findNodeSetCorrectFret(state,action: PayloadAction<number>) {
      state.findNodeMode.correctFret = action.payload
    },
    
  },
});

export const {
  setFretboardRotationX,
  setFretboardRotationCenter,
  setHideFretboardCircles,
  setPointers,
  setGameStarted,
  setNoteButtonValues,
  setCorrectAnswer,
  setPracticemode,
  setWrongClickedCrosses,
  incrementTotalAnswered,
  resetCorrectAndTotalAnswers,
  setWrongClickedButtons,
  findNodeSetString,
  findNodeSetCorrectFret,
  incrementCorrectAnswered } = guessNoteSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHideFretboardCircles = (state: RootState) => state.app.hideCircles;
export const selectPracticeMode = (state: RootState) => state.app.practiceMode;
export const selectFretboardRotationX = (state: RootState) => state.app.fretboardRotationX;
export const selectFretboardRotationCenter = (state: RootState) => state.app.fretboardRotationCenter;
export const selectPointers = (state: RootState) => state.app.pointers;
export const selectWrongClickedCrosses = (state: RootState) => state.app.wrongClickedCrosses;
export const selectGameStarted = (state: RootState) => state.app.gameStarted;
export const selectNoteButtons = (state: RootState) => state.app.noteButtonValues;
export const selectTotalandCorrectAnswered = (state: RootState) => [state.app.totalAnswered, state.app.correctAnswered];
export const selectCorrectAnswer = (state: RootState) => state.app.correctAnswer;
export const selectFindNodeString = (state: RootState) => state.app.findNodeMode.stringNumber;
export const selectWrongClickedButtons = (state: RootState) => state.app.wrongClickedButtons;
export const selectFindNodeCorrectFret = (state: RootState) => state.app.findNodeMode.correctFret;



export default guessNoteSlice.reducer;
