import {combineReducers} from 'redux'

import homeReducer from './pages/TCAssignmentHome/reducer'
import demoReducer from './pages/TCAssignmentDemo/reducer'

export default combineReducers({
    data: combineReducers({
        pages: combineReducers({
            home: homeReducer,
            demo: demoReducer
        })
    })
})
