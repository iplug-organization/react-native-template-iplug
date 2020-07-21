const initialState = {
    text: 'Texto Vazio',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'setText':
            return {...state, text: action.payload.text};

        default:
            return state;
    }
};
