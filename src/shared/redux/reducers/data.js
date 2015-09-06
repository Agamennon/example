
export default function data(state = {}, action = {}) {

    switch (action.type) {

        case 'SET_USER':

            return {
                ...state,
                user: action.user

            };


        case 'GO_TO':
            return {
                ...state,
                path: action.path

            };


        default:
            return {...state}
    }
}
