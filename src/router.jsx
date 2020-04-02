import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import PageLoader from './components/molecules/PageLoader'
import Loadable from 'react-loadable'

export const LoadableTCAssignmentHome = Loadable({
    loader: () => import('./pages/TCAssignmentHome'),
    loading: PageLoader
})

export const LoadableTCAssignmentDemo = Loadable({
    loader: () => import('./pages/TCAssignmentDemo'),
    loading: PageLoader
})

class Router extends React.Component {

    render() {
        const {store} = this.props
        return (
            <Provider store={store}>
                <BrowserRouter basename={"/chessboardconsumer"}>
                    <Route exact path="/" component={LoadableTCAssignmentHome} />
                    <Route path="/view/home" component={LoadableTCAssignmentHome} />
                    <Route path="/view/demo" component={LoadableTCAssignmentDemo} />
                </BrowserRouter>
            </Provider>
        )
    }
}

Router.propTypes = {
    store: PropTypes.object
}

export default Router
