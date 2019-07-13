import initialState from './initialState'

const countReducer = (state = initialState.count, action) => {

    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                number: state.number + 1
            }
        case 'SUBTRACT':
        return {
            ...state,
            number: state.number - 1
        }
        case 'RESET':
            return {
            ...state,
            number: action.payload
        }
        default:
            return state
}
}
export default countReducer