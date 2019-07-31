import createReducer from '../reducers/create-reducer'
import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from '../ui/actions'

const initialState = {
    isRegisterVideoFormOpened: false
}

const ui = createReducer(initialState, {
    [OPEN_REGISTER_VIDEO]: (state) => ({
        ...state,
        isRegisterVideoFormOpened: true
    }),
    [CLOSE_REGISTER_VIDEO]: (state) => ({
        ...state,
        isRegisterVideoFormOpened: false
    })
})

export default ui