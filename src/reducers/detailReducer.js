const initialState = {
    data: {},
    loaded: false
}

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "game/details":
            return { ...state, data: action.payload.details, loaded: true };
        case "game/loading":
            return { ...state, loaded: false }
        default:
            return { ...state };
    }
}
