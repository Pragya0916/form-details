import React ,{ useState} from 'react';
import { CloudUploadOutlined , CheckOutlined } from '@ant-design/icons';
import { Button , Modal} from 'antd';
import './ThirdStep.css';

const ThirdStep = () => {
    const[isModalVisible, setIsModalVisible] = useState(false)


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    console.log("file Uploaded");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    console.log("file cancelled");
  };

  return (
   <>
   <div div className='upload_page'> 
   <div className='heading_box'>  
        <h1 className='heading'>Identity Records</h1>
        <p>A few clicks awa
            y from creating your profile</p>
    </div>

<div className='main_box'> 

   <div className='upload_box'>
    <li className='list3'>BDA Certificate</li><Button onClick={showModal}  className='
   btn' icon={<CloudUploadOutlined />}></Button>
   </div> 
   
<div className='upload_box'>
<li className='list3'>Ideminity Cover</li><Button onClick={showModal}  className='btn' icon={<CloudUploadOutlined />}></Button> </div>

</div>
   
<div className='main_box'> 
    <div className='upload_box'><li className='list3'>Proof of work history</li><Button onClick={showModal}  className='btn' icon={<CloudUploadOutlined />}></Button></div>

    <div className='upload_box'><li className='list3'>Occupational health check certificate</li><Button onClick={showModal}  className='btn' icon={<CloudUploadOutlined />}></Button></div>
    </div>


<div className='main_box'> 
    <div className='upload_box'><li className='list3'>DBS Certificate</li><Button onClick={showModal}  className='btn' icon={<CloudUploadOutlined />}></Button></div>

    <div className='upload_box'><li className='list3'>Heptatis B Vaccine Certificate</li><Button onClick={showModal}  className='btn' icon={<CloudUploadOutlined />}></Button></div>
 </div>

 <div className='main_box'> 
    <div className='upload_box'><li className='list3'>Heptatis C Vaccine Certificate</li><Button onClick={showModal}  className='btn' icon={<CloudUploadOutlined />}></Button></div>

    <div className='upload_box'><li className='list3'>HIV</li><Button onClick={showModal} className='btn' icon={<CloudUploadOutlined />}></Button></div>
</div>


<div className='main_box'> 
    <div className='upload_box'><li className='list3'>MMR</li><Button onClick={showModal} className='btn' icon={<CloudUploadOutlined />}></Button></div>
    </div>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       
      </Modal>
    </div>
   </>
  )
}

export default ThirdStep;