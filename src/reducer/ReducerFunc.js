export const styleReducer = (state, action) => {
    switch (action.type) {
        case "bold":
            return { ...state, byBold: action.payload }
        case "italic":
            return { ...state, byItalic: action.payload }
        case "underline":
            return { ...state, byunderline: action.payload }
        case "strike":
            return { ...state, byStrike: action.payload }
        default:
            return state
    }
}

export const noteReducer = (state, action) => {
    switch (action.type) {
        case "AddNote":
            return {...state,saveNote:[...state.saveNote, {...action.payload}]}
    }
}