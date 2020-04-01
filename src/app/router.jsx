import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import PageLoader from './components/molecules/PageLoader'
import Loadable from 'react-loadable'

export const LoadableLogin = Loadable({
    loader: () => import('./pages/Login'),
    loading: PageLoader
})

export const LoadableTCAssignmentHome = Loadable({
    loader: () => import('./pages/TCAssignmentHome'),
    loading: PageLoader
})

class Router extends React.Component {

    render() {
        const {store} = this.props
        return (
            <Provider store={store}>
                <BrowserRouter basename="/adobeassignment">
                    <Route path="/login" component={LoadableLogin} />
                    <Route path="/view/plp" component={LoadableTCAssignmentHome} />
                </BrowserRouter>
            </Provider>
        )
    }
}

Router.propTypes = {
    store: PropTypes.object
}

export default Router
