import { Fretboard, FretboardPosition } from "./Types";

export function getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function shuffle<T>(array: T[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export function generateHalfToneSequenceOfNotes(startNote:string, currentOctave:number, amount:number, withSharps:boolean) {

    const notes = withSharps ? "A A# B C C# D D# E F F# G G#".split(' ') :
        "A Bb B C Db D Eb E F Gb G Ab".split(' ')

    const sequence = [];
    const noteIndex = notes.indexOf(startNote);
    const stopAt = noteIndex + amount;
    for (let i = noteIndex; i <= stopAt; i++) {
        const currNote = notes[i % notes.length];
        if (currNote === 'C') { currentOctave++ }
        sequence.push(currNote + currentOctave)
    }

    return sequence;
}

export function generateStandardTuning() {
    return [
        generateHalfToneSequenceOfNotes('E', 5, 12, true),
        generateHalfToneSequenceOfNotes('B', 4, 12, true),
        generateHalfToneSequenceOfNotes('G', 4, 12, true),
        generateHalfToneSequenceOfNotes('D', 4, 12, true),
        generateHalfToneSequenceOfNotes('A', 3, 12, true),
        generateHalfToneSequenceOfNotes('E', 3, 12, true)
    ]
}

export function generateStandardTuningFlats() {
    return [
        generateHalfToneSequenceOfNotes('E', 5, 12, false),
        generateHalfToneSequenceOfNotes('B', 4, 12, false),
        generateHalfToneSequenceOfNotes('G', 4, 12, false),
        generateHalfToneSequenceOfNotes('D', 4, 12, false),
        generateHalfToneSequenceOfNotes('A', 3, 12, false),
        generateHalfToneSequenceOfNotes('E', 3, 12, false)
    ]
}



/**
 * generates fretboard in standard tuning as a two dimensional array
 * notes with more than one name will be an array
 * @returns 
 */
export function generateFretboardWithFlatsAndSharps() : Fretboard {
    const withSharps = generateStandardTuning()
    const withFlats = generateStandardTuningFlats()
    const res : Fretboard = [] 

    for (let i = 0; i < withSharps.length; i++) {
        const string : FretboardPosition[] = [];
        for (let j = 0; j < withSharps[i].length; j++) {
            if(withSharps[i][j] !== withFlats[i][j]) {
                string.push(`${withSharps[i][j]}/${withFlats[i][j]}`)
            } else {
                string.push(withSharps[i][j])
            }
            
        }

        res.push(string)
        
    }

    return res


}