const initialState = {
    images: {},
}

export const screenshotReducer = (state = initialState, action) => {
    switch (action.type) {
        case "game/screenshots":
            return { ...state, images: action.payload.data }
        default:
            return { ...state }
    }
}