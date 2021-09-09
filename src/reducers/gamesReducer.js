
const initialState = {
    upcoming: [],
    popular: [],
    newGames: [],
    searched: []
}

export const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "games/fetch":
            return { ...state, upcoming: action.payload.upcoming, popular: action.payload.popular, newGames: action.payload.new };
        case "games/search":
            return { ...state, searched: action.payload.searched }
        case "games/clearSearch":
            return { ...state, searched: [] }
        default:
            return { ...state };
    }
}