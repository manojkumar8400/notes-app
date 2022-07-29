const filterInitialvalue = {
    byPriority: null,
    bySort: null
}

const filterReducer = ((state, action) => {
    switch (action.type) {
        case "LOW":
            return { ...state, byPriority: action.payload }
        case "MEDIUM":
            return { ...state, byPriority: action.payload }
        case "HIGH":
            return { ...state, byPriority: action.payload }
        case "SORT":
            return { ...state, bySort: action.payload }
        case "CLEAR":
            return { byPriority: null, bysort: null }
        default:
            return state
    }
})

export { filterInitialvalue, filterReducer }