import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
     <Navbar/>
     <div className='flex flex-col justify-center items-center bg-[rgb(255,249,246)] py-5 mt-2 '>
     <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_frame_1000001686.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T173359Z&X-Amz-Expires=25200&X-Amz-Signature=1fb452672d365bc31fd024555896c659669e87e52ef3c93e8e759cdb1913e49e&X-Amz-SignedHeaders=host" alt="" width={465} height={480}/>
     <div className='text-2xl font-bold py-5'>Something wrong!</div>
     <Link to={"/"}>
     <button className='py-5 px-7 border-2 border-gray rounded-md flex items-center font-bold'>
    
      Home Page
      <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/65e761bba4ac8c001827440a/65e762f64ae1a1001b6be032/65e762f64ae1a1001b6be03c/appSource/images/img_icon_16px_arrow_right.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWP5YW2GMK2%2F20240306%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T174011Z&X-Amz-Expires=25200&X-Amz-Signature=12f86fcfe701a3620eaff43d5a955eed4789c71a7399458c7e19460f7cec56ea&X-Amz-SignedHeaders=host" alt="" />
     </button>
     </Link>
     </div>
    </div>
  )
}

export default Error
