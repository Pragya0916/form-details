import React, { useState } from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Button ,Modal} from 'antd';
import './SecondStep.css';

const SecondStep = () => {
const[] = useState()
const[isModalVisible, setIsModalVisible] = useState(false)


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("File Uploaded");
 
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log("File Upload Cancelled");
   
  };


  return (
   <>
   <div className='upload_page'> 
   <div>  
        <h1 className='heading'>Identity Records</h1>
        <p>A few clicks away from creating your profile</p>
    </div>

   
<div className='upload_box'><li className='list'>Passport</li><Button onClick={showModal} className='
   btn' icon={<CloudUploadOutlined />}> </Button></div> 

    <div className='upload_box'><li className='list'>Visa</li> <Button onClick={showModal} className='btn' icon= {<CloudUploadOutlined />}> </Button></div>

    <div className='upload_box'><li className='list'>Work Permit</li><Button onClick={showModal} className='btn' icon={<CloudUploadOutlined />}></Button></div>

    <div className='upload_box'><li className='list'>Driving License</li><Button onClick={showModal} className='btn' icon={<CloudUploadOutlined />}></Button></div>

    <div className='upload_box'><li className='list'>Address Proof</li><Button onClick={showModal}  className='btn' icon={<CloudUploadOutlined />}></Button></div>

    <div className='upload_box'><li className='list'>Upload certification as a single file</li><Button onClick={showModal} className='btn' icon={<CloudUploadOutlined />}></Button></div>
 
    </div>
   
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
   </>
  )
}

export default SecondStep