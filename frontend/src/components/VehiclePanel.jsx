import React from 'react';

const VehiclePanel = (props) => {
  return (
    <div>
       <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
                props.setVehiclePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
                   <h3 className='text-2xl font-semibold mb-5'>Choose a Ride</h3>
                  <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                  }} className='flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between'>
                    <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtoYgO1l_DEsuaPJm3a8WJ4vNfK-A-WnD7rgMyZc3I9fMuXnQzZzGtuUP&s=10" alt=""/>
                    <div className=' ml-2 w-1/2'>
                     <h4 className='font-medium text-base'>UberGo<span><i class="ri-user-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable and compact rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>Rs.{props.fare.car}</h2>
                  </div>
                   <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                  }} className='flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between'>
                    <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt=""/>
                    <div className='ml-2 w-1/2'>
                     <h4 className='font-medium text-base'>Moto<span><i class="ri-user-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable Motor Cycle rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>Rs.{props.fare.moto}</h2>
                  </div>
                   <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                  }} className='flex p-3 border-2 active:border-black mb-2 rounded-xl w-full items-center justify-between'>
                    <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn" alt=""/>
                    <div className='ml-2 w-1/2'>
                     <h4 className='font-medium text-base'>UberAuto<span><i class="ri-user-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
                    </div>
                    <h2 className='text-xl font-semibold'>Rs.{props.fare.auto}</h2>
                  </div>
    </div>
  );
};

export default VehiclePanel;