import { Input, Select} from 'antd';
import { useState } from 'react';
import './FourthStep.css'

const { Option } = Select;

function FourthStep () { 
  const[select1 , setSelect1] =   useState()
  const[select2 , setSelect2] =   useState()
  const[number1 , setNumber1] =   useState('')
  const[email1 , setEmail1] =   useState('')

  function handleSubmit(e){

    e.preventDefault(); 
    console.log("Fourth Page Details")
    console.log(e);
   console.log(' Type1 👉️', select1);
    console.log('Type2  👉️', select2);
   console.log('Number  👉️', number1);
   console.log('Email 👉️', email1);

setNumber1('')
setEmail1('')

  }

return(
    <>
    <div className='first_page'>
    <div>  
        <h1 className='heading'>Personal Details</h1>
        <p>A few clicks away from creating your profile</p>
    </div>
   <form className='form' onSubmit={handleSubmit}> 
    <div className='site-input-group-wrapper'>

<Select value={select1} onChange={(e)=>setSelect1(e)}   className='input select' placeholder="Type">
<Option value="type1">Type1</Option>
<Option value="type2">Type2</Option>
<Option value="type3">Type3</Option>
</Select> 
<Select value={select2} onChange={(e)=>{
     console.log(e)}} className='input select' placeholder="Type">
<Option value="type4">Type4</Option>
<Option value="type5">Type5</Option>
<Option value="type6">Type6</Option>
</Select> 
    
    </div>
    <div className='site-input-group-wrapper'>
    <Input className='input input4' placeholder="Phone Number " value={number1}onChange={(e)=>setNumber1(e.target.value)}/>
     <Input className='input input4' placeholder="Email Id" value={email1} onChange={(e)=>setEmail1(e.target.value)}/>
    </div>
    <button className='btn first_btn' type="submit">Submit Last Page </button>   
    </form>

    </div>
    </>
)
}
  
export default FourthStep;