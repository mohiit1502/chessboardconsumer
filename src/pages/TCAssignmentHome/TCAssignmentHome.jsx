import React from 'react';
import Jumbotron from '../../components/molecules/common/Jumbotron';
import RuleContainer from './../../components/molecules/RuleContainer'
import './TCAssignmentHome.module.scss';

const TCAssignmentHome = props => {

  return (
    <div className="c-TCAssignmentHome container">
      <div className="row">
          <div className="col-12 col-lg-8">
              <Jumbotron
                  jumboText="Welcome to Chess Board Demo"
                  subText="This demo will show path of a chess piece as per defined rules"
                  jumboDescription="This app is built using React JS."
                  link2Text="Head To Demo"
                  renderLink1="false"
                  renderLink2="true"
              />
          </div>
          <div className="col-12 col-lg-4">
              <div className="rulesContainer">
                <p className="c-rule-intimation">Let's  specify the rules for this demo!</p>
                <RuleContainer />
              </div>
          </div>
      </div>
    </div>
  );
};

TCAssignmentHome.defaultProps = {

};

TCAssignmentHome.propTypes = {

};

export default TCAssignmentHome;