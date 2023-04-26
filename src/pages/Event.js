import React, { useEffect } from 'react'
import './Event.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Data from '../data.json'


export default function Event() {

  useEffect(()=>{
   Aos.init ({duration:2000})
  },[])

  console.log(Data)
  console.log(Data[0].event[0].banner)
  return (
    <>
    <Navbar/>

    <div className="container-fluid bg-dark">
        <div className="row img-row  "><img src={Data[0].event[0].banner} className='px-0 mx-0' alt="" /></div>
        <div className="row ab-row-2 justify-content-center w-100 ">
            <div className="col main-col-2 col-xl-12 ">
                <div className="row text-center py-4"><h1>OUR JOURNEY</h1></div>
                
            <div className="row card-row text-center p-5" >

            <div className="row justify-content-center">
                <div className="col col-xl-5 col-lg-5 col-md-5 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-2"><img src={Data[0].event[0].isnee_img} className='img-fluid' alt="" /></div>
                <div className="col col-xl-7 col-lg-7 col-md-7 col-sm-12 order-xl-2 order-lg-2 order-md-2 order-sm-1 text-start text-light p-xl-5 p-lg-4 p-md-3 p-sm-1">
                    <h2 style={{color:"rgb(211, 153, 7)"}} >ISNEE MOTORSPORTS</h2>
                    <h5 className='my-xl-5 my-lg-4 my-md-3 my-ms-1'>The journey of Team Scylla began way back in 2017 when a group of 25 undergraduates dared to do something different. They came up with an idea of forming a team which will build an All-Terrain Vehicle (ATV) to compete in the prestigious competition of Quad Torc.</h5></div>
            </div>

                <h1 className='my-5' >Previous Models</h1>

            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                                <div className="card w-75 mx-auto ">
                                <div className="card-body  " >
                                    <div className="card-title"><h2>SHADOW 3.0 (2021-22)</h2></div>
                                    <img src={Data[0].event[0]['shadow3.0']} className='card-img w-75 border rounded' alt="" />
                                    <p className="card-text w-75 mx-auto abw2">Team participated in 8th season of ISNEE Quad Torc Competition. This season held from the 27th -  31th july 2022 at SIT pullor, Tamil Nadu. Team clear the technical inspection and qualified  for main event. Team successfully participated in the event and completed all . </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="card w-75 mx-auto">
                                <div className="card-body  " >
                                    <div className="card-title"><h2>SHADOW 2.0 (2018-19)</h2></div>
                                    <img src={Data[0].event[0]['shadow2.0']} className='card-img w-75 border rounded' alt="" />
                                    <p className="card-text w-75 mx-auto abw2">Team participated in sixth season of ISNEE Quad Torc Competition. The sixth season held from the 7th -12th September 2019 at Garage1 Race Track chhachhri teep, Bijnor. Team clear the technical inspection and qualified  for main event. Team successfully participated all event.</p>
                                    </div>
                                </div>
                            </div>
                            
                
            <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="card  w-75 mx-auto ">
                                <div className="card-body  " >
                                    <div className="card-title"><h2>SHADOW 1.0 (2017-18)</h2></div>
                                    <img src={Data[0].event[0]['shadow1.0']} className='card-img border rounded' alt="" />
                                    <p className="card-text abw2"> Team participated in  fifth season of ISNEE Quad Torc Competition. The fifth season held from the 26th -30th September 2018 at Garage1 Race Track chhachhri teep, Bijnor. Team clear the technical inspection and qualified  for main event. Team successfully participated all event.  </p>
                                    </div>
                                </div>
                            </div>
                            
                
            </div>
            
            </div>
        <div className="px-0">
            <Footer/>
        </div>

        
        </div>
    </div>


    </>
  )
}
