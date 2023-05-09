import React,{useEffect} from 'react'
import './Sponsr.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Data from '../data.json'

export default function Sponsors() {

  
  useEffect(()=>{
   Aos.init ({duration:2000})
  },[])

  return (
    <>
    <Navbar/>

    <div className="container-fluid px-0">
      <div className="row position-relative px-0 mx-0 bg-dark" style={{filter:"blur(5px)" , marginTop:"-10%"}} ><img src={Data[0].sponsors[0].banner} className='px-0 mx-0 opacity-50' alt="" /></div>
      <div className="row position-absolute a-pa justify-content-center px-0 mx-0 " style={{marginTop:"-30%"}}>
        <div className="row w-100 text-center px-0 mx-0"><h1>Sponsors</h1></div>

        <div className="row px-5 py-5 align-items-center m-col text-light mx-0" style={{backgroundColor:"black" }}> 
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 quote text-white text-center"><h2 style={{fontSize:"2.5vw"}} > " EMPOWERED BY YOUR SUPPORT " </h2></div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 p-5  "><img src={Data[0].sponsors[0].crossHead} className='w-75' alt="" /></div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 p-5  "><img src={Data[0].sponsors[0].ansys} className='img-fluid' alt="" /></div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 p-5  "><img src={Data[0].sponsors[0].dassault} className='img-fluid' alt="" /></div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 p-5  "><img src={Data[0].sponsors[0].redBull} className='img-fluid' alt="" /></div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4   "><a href="https://in.linkedin.com/company/oshin-engineering-private-limited" style={{textDecoration:"none",color:"white"}}> <img src={Data[0].sponsors[0].oshin} alt="" className='w-75'  /><br /> <h4>OSHIN ENGINEERING PRIVATE LIMITED </h4> </a></div>
            <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 p-5  "><a href='http://rainbowgpl.com/' style={{textDecoration:"none",color:"white"}}> <h2> RAINBOW GARNISHER PRIVATE LIMITED </h2></a></div>
        </div>

        <div className="px-0">
        <Footer/>
        </div>
        
      
      </div>
    </div>










    </>
  )
}
