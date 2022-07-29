const initialValue = {
    saveNote: [],
    saveArch: [],
    saveTrash: [],
    saveLabel: [],
    byPriority: []
}

const noteReducer = (state, action) => {
    
    switch (action.type) {
        case "SAVE":
            return (action.payload.Label !== "" ? { ...state, saveLabel: [...state.saveLabel, action.payload], saveNote: [...state.saveNote, action.payload] } : { ...state, saveNote: [...state.saveNote, action.payload] })
        case "DELETE_FROM_TRASH":
            const deleteArr = state.saveTrash.filter(item => item.id !== action.payload.id)
            return { ...state, saveTrash: deleteArr }
        case "Archieve":
            return { ...state, saveArch: [...state.saveArch, action.payload] };
        case "Trash":
            return { ...state, saveTrash: [...state.saveTrash, action.payload] };
        case "Remove_Data":
            const newArr = state.saveNote.filter(item => item.id !== action.payload.id)
            return { ...state, saveNote: newArr }
        case "Remove_From_Label":
            const updateLabelArr = state.saveLabel.filter(item => item.id !== action.payload.id);
            return { ...state, saveLabel: updateLabelArr }
        case "Remove_From_Trash":
            const updateTrashArr = state.saveTrash.filter(item => item.id !== action.payload.id);
            return { ...state, saveTrash: updateTrashArr }
        case "Remove_From_Archieve":
            const updateArch = state.saveArch.filter(item => item.id !== action.payload.id);
            return { ...state, saveArch: updateArch }
        case "Trash_Reverse":
            return { ...state, saveNote: [...state.saveNote, action.payload] };
        case "DELETE":
            const filteredData = state.saveNote.filter(item => item.id !== action.payload.id);
            return{...state, saveNote:filteredData};

    }
}

export { noteReducer, initialValue }