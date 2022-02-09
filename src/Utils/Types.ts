export type Note = string;
export type FretboardPosition = Note
export type Fretboard = FretboardPosition[][];
export type PointerPosition = [string:number,fret:number];


type NaturalNotes = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
type NoteType = `${NaturalNotes}#/${NaturalNotes}b`
