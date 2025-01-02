import React from 'react'

import ProgressSetup from './ProgressSetup'

import PersonalData from './PersonalData'
import AcademicInfo from './AcademicInfo'
import EmploymentInfo from './EmploymentInfo'
import  Registration from './Registration'

function Home (props) {

  return (
    <div>
      <ProgressSetup currentStep={props.currentStep} setCurrentStep={props.setCurrentStep}></ProgressSetup>

      {props.currentStep===1&&<PersonalData setCurrentStep={props.setCurrentStep}/>}
      {props.currentStep===2&&<AcademicInfo  setCurrentStep={props.setCurrentStep}/>}
      {props.currentStep===3&&<EmploymentInfo  setCurrentStep={props.setCurrentStep}/>}
      {props.currentStep===4&&<Registration  setCurrentStep={props.setCurrentStep}/>}
    </div>
  )
}
export default Home
