import initialState from './initialState'

const simpleReducer = (state = initialState.simple, action) => {
switch (action.type) {
    case 'SIMPLE_ACTION':
        return {
            ...state,
            data: action.payload
        }
    default:
        return state
}
}
export default simpleReducer