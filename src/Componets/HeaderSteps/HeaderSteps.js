import { Button, message, Steps}  from 'antd' ;
import './HeaderStpes.css';
import React, { useState } from 'react';
import FirstStep from '../Form_Details/FirstStep/FirstStep';
import SecondStep from '../Form_Details/SecondStep/SecondStep';
import ThirdStep from '../Form_Details/ThirdStep/ThirdStep';
import FourthStep from '../Form_Details/FourthStep.js/FourthStep';

const { Step } = Steps;

const steps = [
  {
    content: <FirstStep /> , 
    // data= {data}
  },
  {
    content: <SecondStep/>,
  },
  {

    content: <ThirdStep/>,
  },
  {
   
    content: <FourthStep/>,
  },
];


function HeaderSteps() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
 <div className='outer_container'>


     <Steps className='steps' current={current}>
        {steps.map(item => (
          <Step />
       
        ))}
      </Steps>
      
      <div className="steps-content">{steps[current].content}</div>
      
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button className='btn_next' type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button  type="primary" onClick={() => message.success('Processing complete!')}>
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button className='btn_back' style={{ margin: '0 8px' }} onClick={() => prev()}>
           Back
          </Button>
        )}
      </div>
      </div>
    </>
  );
}

export default HeaderSteps;
