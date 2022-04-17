import { createContext, useReducer, useContext } from "react";
import { styleReducer, noteReducer } from "../reducer/ReducerFunc";

const noteContext = createContext();

const NoteProvider = ({children}) => {

    const [ note, dispatchNote ] = useReducer(noteReducer,{
        saveNote:[]
    });

    const [txtStyle, dispatchTxtStyle ] = useReducer(styleReducer,{
        byBold: false,
        byItalic: false,
        byStrike: false
    })

    return(
        <noteContext.Provider value={{ note, dispatchNote, txtStyle, dispatchTxtStyle}}>
            {children}
        </noteContext.Provider>
    );
};

const useNoteContext =() => useContext(noteContext);

export { useNoteContext, NoteProvider };