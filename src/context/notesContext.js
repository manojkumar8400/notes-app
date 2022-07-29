import { createContext, useReducer, useContext } from "react";
import { noteReducer, initialValue } from "../reducers/NoteReducer";
import { filterReducer, filterInitialvalue } from "../reducers/filterReducer";


const noteContext = createContext();

const NoteProvider = ({ children }) => {

    const [note, dispatchNote] = useReducer(noteReducer, initialValue);
    const [filter, dispatchFilter] = useReducer(filterReducer, filterInitialvalue);

    return (
        <noteContext.Provider value={{ note, dispatchNote, filter, dispatchFilter }}>
            {children}
        </noteContext.Provider>
    );
};

const useNoteContext = () => useContext(noteContext);

export { useNoteContext, NoteProvider };