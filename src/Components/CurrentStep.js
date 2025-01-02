
import PersonalData from './Components/PersonalData'
import AcademicInfo from './Components/AcademicInfo'
import EmploymentInfo from './Components/EmploymentInfo'
import  Registration from './Components/Registration'
import ProgressSetup from './Components/ProgressSetup';
import CurrentStep from './Components/CurrentStep';
import TermsCon from './Components/TermsCon';
import React from 'react'

export default function CurrentStep () {

    const [currentStep, setCurrentStep] = useState(1);
    console.log('currenttt: ',currentStep)
    
    
    <ProgressSetup; currentStep={currentStepurrentStep}; setCurrentStep={setCurrentStep}><ProgressSetup/>
    
    
    {currentStepurrentStep===1&&<PersonalData setCurrentStep={setCurrentStep}/>}
    {currentStepurrentStep===2&&<AcademicInfo  setCurrentStep={setCurrentStep}/>}
    {currentStepurrentStep===3&&<EmploymentInfo  setCurrentStep={setCurrentStep}/>}
    {currentStepurrentStep===4&&<Registration  setCurrentStep={setCurrentStep}/>}
    {currentStepurrentStep===5&&<TermsCon  setCurrentStep={setCurrentStep}/>}
  return (
    <div>

 
      
    </div>
  )
}
