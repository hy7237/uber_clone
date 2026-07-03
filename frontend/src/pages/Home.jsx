import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';



const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination,setDestination] = useState('');
    const [panelOpen,setPanelOpen] = useState(false);
     const panelRef = useRef(null)//this is used to get the reference of the panel so that it can be animated using gsap
     const panelCloseRef = useRef(null)

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

    
    return (
        <div className='h-screen relative'>
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
                 }}
                 value={pickup} 
                 onChange={(e)=>{
                    setPickup(e.target.value)
                 }}
                 className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter your pickup location'/>
                <input
                    onClick={()=>{
                        setPanelOpen(true)
                    }}
                    value={destination}
                    onChange={(e)=>{
                        setDestination(e.target.value)
                    }}
                 className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your drop location'/>
            </form>
            </div>
            <div ref={panelRef} className='bg-white h-0'>
              <LocationSearchPanel/>
            </div>
           </div>
        </div>

    );
};

export default Home;