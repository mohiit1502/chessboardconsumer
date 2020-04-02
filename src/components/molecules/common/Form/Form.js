import React from 'react'
import PropTypes from 'prop-types'
import FormFieldContainer from '../FormFieldContainer';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            greeting: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this)
    }     
    
    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {formSubmitAction} = this.props
        formSubmitAction();
        // fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
        //     .then(response => response.json())
        //     .then(state => this.setState(state));

    }

    onFocusHandler() {
        console.log('Parent, on focus handler')
    }

    render() {
        const {
            context,
            fieldValues,
            formErrors,
            formValues,
            metaData,
            updateFormErrors,
            updateFormValues
        } = this.props
        // const jsonData = this.props && this.props.metaData
        const inputList = metaData && context ? Object.keys(metaData[context]) : []

        let inputListSection =
            inputList &&
            inputList.map((item, index) => {
                const formFieldObject = metaData[context][item]
                const formField = formFieldObject ? (
                    <FormFieldContainer
                        propsData={formFieldObject}
                        key={index}
                        onFocus={this.onFocusHandler}
                        value={fieldValues && fieldValues[item]}
                        formErrors={formErrors}
                        formValues={formValues}
                        updateFormErrors={updateFormErrors}
                        updateFormValues={updateFormValues}
                    />
                ) : null
                return formField
            })

        inputListSection = inputListSection.filter((formFieldObject) => {
            return formFieldObject !== null
        })

        return (
            <form className='c-Form' onSubmit={this.handleSubmit}>
                <fieldset>{inputListSection}</fieldset>
                <button type="submit" className="btn btn-primary btn-block" style={{marginTop: '15px', background: 'black'}}>Submit</button>
            </form>
        )
    }
}

Form.propTypes = {
    context: PropTypes.string,
    customBlurHandler: PropTypes.func,
    customBlurFormatter: PropTypes.func,
    metaData: PropTypes.object.isRequired,
    className: PropTypes.string,
    fieldValues: PropTypes.object,
    formErrors: PropTypes.object,
    formValues: PropTypes.object,
    formSubmitAction: PropTypes.func,
    updateFormErrors: PropTypes.func,
    updateFormValues: PropTypes.func
}

export default Form