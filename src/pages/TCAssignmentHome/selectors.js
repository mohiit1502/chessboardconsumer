import {createSelector} from 'reselect'
import {createGetSelector} from 'reselect-immutable-helpers'

const getData = ({data}) => data

export const getHome = createSelector(
    getData,
    (dataState) => {
        return dataState.pages.home
    }
)

export const getFormValues = createGetSelector(getHome, 'formValues')
export const getFormErrors = createGetSelector(getHome, 'formErrors')
export const getRoute= createGetSelector(getHome, 'route')