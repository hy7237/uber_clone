import React from 'react';

const LocationSearchPanel = (props) => {
  //sample array for location search panel
  const locations=[
    "77g,kamleshpuram near MMM university, Gorakhpur",
    "133,kamleshpuram near MMM university, Gorakhpur",
    "122,kamleshpuram near MMM university, Gorakhpur",
    "121,kamleshpuram near MMM university, Gorakhpur",
    "140,kamleshpuram near MMM university, Gorakhpur",
    "152,kamleshpuram near MMM university, Gorakhpur",
    "166,kamleshpuram near MMM university, Gorakhpur"
  ]
return(
<div>
  {/*this is just sample data*/}
  {
    locations.map(function(location, index){
      return <div key={index} onClick={()=>{
        props.setVehiclePanel(true);
        props.setPanelOpen(false);
      }} className='flex gap-4 border-2 p-3 active:border-black items-center my-4 justify-start'>
     <h2 className='bg-[#eee] h-8 flex  items-center justify-center w-12 rounded-full'><i class="ri-map-pin-line"></i></h2>
     <h4 className='font-medium'>{location}</h4>
  </div>
    })
  }
    
</div>
  

  

  
  
  
  )
}
export default LocationSearchPanel