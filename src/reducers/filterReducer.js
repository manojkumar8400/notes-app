const filterInitialvalue = {
    byPriority: null,
    Priority: true,
    bySort: ""
}

const filterReducer = ((state, action) => {
    switch (action.type) {
        case "LOW":
            return { ...state, byPriority: action.payload }
        case "MEDIUM":
            return { ...state, byPriority: action.payload }
        case "HIGH":
            return { ...state, byPriority: action.payload }
        case "PRIORITY":
            return { ...state, byPriority: action.payload }
        case "SORT":
            return { ...state, byPriority: action.payload }
        case "CLEAR":
            return { byPriority: null }
        default:
            return state
    }
})

export { filterInitialvalue, filterReducer}