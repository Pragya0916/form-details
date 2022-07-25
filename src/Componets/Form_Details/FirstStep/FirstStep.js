import { Input , Form, Button} from 'antd';
import { useState } from 'react';
import './FirstStep.css'

const { TextArea } = Input;

function FirstStep (){
    const [id , setId]  = useState('')
    const [name , setName]  = useState('')
    const [number , setNumber]  = useState('')
    const [email , setEmail]  = useState('')
    const [address , setAddress]  = useState('')


    function handleSubmit(e){
        e.preventDefault(); 
        console.log("First Page Details")
        console.log('Id  👉️', id);
    console.log('Name 👉️', name);
    console.log('Number 👉️', number);
    console.log('Email 👉️', email);
    console.log('Address 👉️', address);


    setId('')
    setName('')
    setNumber('')
    setEmail('')
    setAddress('')
    }
return(
    <>
    <div className='first_page'>

    <div>  
        <h1 className='heading'>Personal Details</h1>
        <p>A few clicks away from creating your profile</p>
    </div>
   <form onSubmit={handleSubmit} > 
    <div className='site-input-group-wrapper'>
    <Input className='input' placeholder="User Id" onChange={e=>setId(e.target.value)} value={id}/>
    <Input className='input' placeholder="Full-Name" onChange={e=>setName(e.target.value)} value={name} />
    </div>
    <div className='site-input-group-wrapper'>
    <Input className='input' placeholder="Phone Number " onChange={e=>setNumber(e.target.value)} value={number}/>
     <Input className='input' placeholder="Email Id"  onChange={e=>setEmail(e.target.value)} value={email}/>
    </div>
    <TextArea className='input text-area'
        placeholder="Address"
        autoSize={{ minRows: 3, maxRows: 4}} onChange={e=>setAddress(e.target.value)} value={address}></TextArea>
        <br/> <br/>
        <button className='btn first_btn' type="submit">Submit First Page</button>
    
        </form>
    </div>
  
    </>
)
}
export default FirstStep;