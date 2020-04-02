import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createPropsSelector} from 'reselect-immutable-helpers';
import * as actions from './../../../pages/TCAssignmentHome/actions'
import {getFormValues, getFormErrors} from './../../../pages/TCAssignmentHome/selectors';
import Form from '../common/Form';
import ruleFormFields from './../../../config/forms-meta/rule-form.json'
import './RuleContainer.component.scss';
import sampleResponse from './../../../temp/sampleResponse.json'

const RuleContainer = ({formErrors, formValues, history, dispatchResponse, updateFormErrors, updateFormValues}) => {

  const formSubmitAction = () => {
    const row = formValues['row']
    const column = formValues['column']

    // const baseURL = "http://truecallerassignment.herokuapp.com"
    const baseURL = "http://localhost:8080"
    const service = "findpath"
    const finalURL = `${baseURL}/${service}?row=${row}&column=${column}`

    fetch(finalURL)
      // {
      //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
      //   mode: 'no-cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: 'same-origin', // include, *same-origin, omit
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   redirect: 'follow', // manual, *follow, error
      //   referrerPolicy: 'no-referrer', // no-referrer, *client
      // })
      .then(resResolved => resResolved.json())
      .then(responseJson => {
        dispatchResponse(responseJson)
        history.push('/view/demo')
      })
      .catch(err => console.log(err))
    // dispatchResponse(sampleResponse)
  }
  
  return (
    <div className='c-RuleContainer'>
      <Form 
        metaData={ruleFormFields} 
        context="rule"
        updateFormValues={updateFormValues}
        updateFormErrors={updateFormErrors}
        formErrors={formErrors}
        formValues={formValues}
        formSubmitAction={formSubmitAction}
      />
    </div>
  );
};

RuleContainer.propTypes = {
  updateFormValues: PropTypes.func,
  updateFormErrors: PropTypes.func,
  formValues: PropTypes.object,
  formErrors: PropTypes.object,
  dispatchResponse: PropTypes.func
}

const mapStateToProps = createPropsSelector({
  formErrors: getFormErrors,
  formValues: getFormValues
})

const mapDispatchToProps = {
  updateFormErrors: actions.updateFormErrors,
  updateFormValues: actions.updateFormValues,
  dispatchResponse: actions.dispatchResponse
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RuleContainer));