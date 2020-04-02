export const DISPATCH_RESPONSE = 'DISPATCH_RESPONSE'
export const UPDATE_FORM_VALUES = 'UPDATE_BILLING_FORM_VALUES'
export const UPDATE_FORM_ERRORS = 'UPDATE_BILLING_FORM_ERRORS'

export const initializeLogin = () => (dispatch) => {
    // return Promise.all([
    //     dispatch(initializeApp())
    // ])
    // .then(() => ({statusCode: 200}))
    // .catch((err) => ({statusCode: err.statusCode || 500}))
}

export const dispatchResponse = (response) => {
    return {
        type: DISPATCH_RESPONSE,
        payload: {route: response}
    }
}

export const updateFormValues = (formValues) => {
    return {
        type: UPDATE_FORM_VALUES,
        payload: formValues
    }
}

export const updateFormErrors = (formErrors) => {
    return {
        type: UPDATE_FORM_ERRORS,
        payload: formErrors
    }
}
    