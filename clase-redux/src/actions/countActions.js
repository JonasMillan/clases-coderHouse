

export const addAction = () => dispatch => {
    dispatch({
        type: 'ADD'
    })
}

export const subtractAction = () => dispatch => {
    dispatch({
        type: 'SUBTRACT'
    })
}
export const resetAction = () => dispatch => {
    dispatch({
        type: 'RESET',
        payload: 0
    })
}
