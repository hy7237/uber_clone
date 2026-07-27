import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';




const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination,setDestination] = useState('');
    const [panelOpen,setPanelOpen] = useState(false);
    const vehiclePanelRef=useRef(null)//this is used to get the reference of the panel so that it can be animated using gsap
    const confirmRidePanelRef=useRef(null)//this is used to get the reference of the panel so that it can be animated using gsap
    const panelRef = useRef(null)//this is used to get the reference of the panel so that it can be animated using gsap
    const panelCloseRef = useRef(null)
    const vehicleFoundRef=useRef(null)
    const waitingForDriverRef=useRef(null)
    const [vehiclePanel,setVehiclePanel]=useState(false);
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [confirmRidePanel,setConfirmRidePanel]=useState(false);
    const [vehicleFound,setVehicleFound]=useState(false);
    const [waitingForDriver,setWaitingForDriver]=useState(false);
    const [ activeField, setActiveField ] = useState(null)
    const [fare,setFare]=useState({})
    
   //does the child only need to read the state than pass only the value like fare={fare}
   //does the child need to modify the state than pass the setter too




    const submitHandler=(e)=>
    {
        e.preventDefault();
         
    }

    useGSAP(() => {
        if(panelOpen)
        {
            gsap.to(panelRef.current, {
                height: '70%',
                padding:24
            })
            gsap.to(panelCloseRef.current,{
                opacity: 1
            })
        }
        else
        {
            gsap.to(panelRef.current, {
                height: '0%',
                padding:0
            })
            gsap.to(panelCloseRef.current,{
                opacity: 0
            })
        }
    }, [panelOpen]);

    const handlePickupChange=async(e)=>
    {
        setPickup(e.target.value)
        try{
             const response =await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
                {
                    params:{input:e.target.value},
                    headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
             )
             setPickupSuggestions(response.data);
        }
        catch{
               // handle error
        }
        
    }

    const handleDestinationChange=async(e)=>
    {
        setDestination(e.target.value)

        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
                 params:{input:e.target.value},
                 headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                 }
            }
          )
          setDestinationSuggestions(response.data);
        }
        catch
        {
            //handle error
        }
    }

    
  
    useGSAP(function() {
        if(vehiclePanel)
        {
           gsap.to(vehiclePanelRef.current, {
            transform:'translateY(0)'
           })
        }
        else
        {
             gsap.to(vehiclePanelRef.current, {
            transform:'translateY(100%)'
           })
        }
           
    },[vehiclePanel])

      useGSAP(function() {
        if(confirmRidePanel)
        {
           gsap.to(confirmRidePanelRef.current, {
            transform:'translateY(0)'
           })
        }
        else
        {
             gsap.to(confirmRidePanelRef.current, {
            transform:'translateY(100%)'
           })
        }
           
    },[confirmRidePanel])

     useGSAP(function() {
        if(vehicleFound)
        {
           gsap.to(vehicleFoundRef.current, {
            transform:'translateY(0)'
           })
        }
        else
        {
             gsap.to(vehicleFoundRef.current, {
            transform:'translateY(100%)'
           })
        }
           
    },[vehicleFound])

     useGSAP(function() {
        if(waitingForDriver)
        {
           gsap.to(waitingForDriverRef.current, {
            transform:'translateY(0)'
           })
        }
        else
        {
             gsap.to(waitingForDriverRef.current, {
            transform:'translateY(100%)'
           })
        }
           
    },[waitingForDriver])

    async function findTrip()
    {
         setVehiclePanel(true)
        setPanelOpen(false)

        const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
            params:{pickup,destination},
            headers:
            {
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })

        setFare(response.data)

    }





    
    return (
        <div className='h-screen relative overflow-hidden'>
           <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
           <div className='h-screen w-screen'>
            {/*image for temporary use*/}
            <img className='h-full w-full object-cover' src="https://acumengpstrack.com/wp-content/uploads/2020/10/41LXSSqXB5L.jpg" alt=""/>

           </div>
           <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
            <div className='h-[30%] bg-white p-6 relative'>
                <h5 ref={panelCloseRef} onClick={() => setPanelOpen(!panelOpen)}
                 className='absolute opacity-0 right-6 top-6 text-2xl'><i className="ri-arrow-down-wide-line"></i></h5>
                 <h4 className='text-2xl font-semibold'>Find a Trip</h4>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
                <input
                 onClick={()=>{
                    setPanelOpen(true)
                    setActiveField('pickup')
                 }}
                 value={pickup} 
                  onChange={handlePickupChange}
                 className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter your pickup location'/>
                <input
                    onClick={()=>{
                        setPanelOpen(true)
                         setActiveField('destination')
                    }}
                    value={destination}
                       onChange={handleDestinationChange}
                 className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your drop location'/>
            </form>
            <button
                onClick={findTrip}
                className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                    Find Trip
            </button>
            </div>
            <div ref={panelRef} className='bg-white h-0'>
              <LocationSearchPanel 
              suggestions={activeField==='pickup'?pickupSuggestions:destinationSuggestions}
              setPanelOpen={setPanelOpen}
               setVehiclePanel={setVehiclePanel}
               setPickup={setPickup}
               setDestination={setDestination}
               activeField={activeField}/>
            </div>
           </div>
           <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
               <VehiclePanel fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
           </div>
            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
               <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
           </div>
             <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <LookingForDriver setVehicleFound={setVehicleFound}/>
           </div>
           <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/> {/*but in the code section passed waitingfordriver not setwaitingfor driver check it in future*/}
           </div>
        </div>

    );
};

export default Home;