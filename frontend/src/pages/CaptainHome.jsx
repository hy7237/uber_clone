import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
    return (
      <div className='h-screen'>
                 <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                    <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.pn" alt=""/>
                      <Link to='/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                      <i className="text-lg font-medium ri-logout-box-r-line"></i>
                  </Link>
                 </div>
                  <div className='h-1/2'>
                   <img className='h-full w-full object-cover' src="https://acumengpstrack.com/wp-content/uploads/2020/10/41LXSSqXB5L.jpg" alt=""/>
                </div>
                <div className='h-1/2 p-4'>
                       <div>
                        <div>
                            <img src="" alt="" />
                            <h4>Himanshu Yadav</h4>
                        </div>
                        <div>
                            <h4>Rs 2312.20</h4>
                            <p>Earned</p>
                        </div>
                       </div>
                       <div>
                        <div className='text-center'>
                            <i className="text-2xl font-thin ri-time-line"></i>
                            <h5 className='text-lg font-medium'>10.3</h5>
                            <p className='text-sm text-gray-600'>Hours Online</p>
                        </div>
                        <div className='text-center'>
                            <i className="text-2xl font-thin ri-speed-up-fill"></i>
                             <h5 className='text-lg font-medium'>10.3</h5>
                            <p className='text-sm text-gray-600'>Hours Online</p>
                        </div>
                        <div className='text-center'>
                            <i className="text-2xl font-thin ri-booklet-line"></i>
                             <h5 className='text-lg font-medium'>10.3</h5>
                            <p className='text-sm text-gray-600'>Hours Online</p>
                        </div>
                       </div>
                 </div>
           </div>
    )
}

export default CaptainHome