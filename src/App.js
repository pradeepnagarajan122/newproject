import { useState } from 'react';

import './Css/App.css';
import { Route, Routes} from 'react-router-dom'


import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Components/Home';
import  TermsCon  from './Components/TermsCon';


function App () {

  const [currentStep, setCurrentStep] = useState(1);
 
  
  return (
    <div>
      <Header />

    <Routes>
       
        <Route path='/' element={
          <Home currentStep={currentStep} setCurrentStep={setCurrentStep}/>
        }></Route>
        <Route path='/TermsCon' element={
          <TermsCon setCurrentStep={setCurrentStep} />
        }></Route>
       
      </Routes> 
      <Footer />
    </div>
  );

}
export default App;
