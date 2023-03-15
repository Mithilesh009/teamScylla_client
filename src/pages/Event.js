import React, { useEffect } from 'react'
import './Event.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Navbar';
import Footer from './Footer'

export default function Event() {

  useEffect(()=>{
   Aos.init ({duration:2000})
  },[])

  return (
    <>
    <Navbar/>

    <div className="container-fluid">
      <div className="row position-relative "><img src="images/event.jpg" className=' img-fluid p-0' alt="" /></div>
      <div className="row position-absolute w-100 "  >
        <div className="col main-col-1 mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h1>Events</h1></div>
        <div className="col main-col-2 col-xl-12 col-lg-12 col-md-12 col-sm-12" > 
          
          <div className="row isnee-ms p-sm-3 mt-xl-3 mt-sm-0">
            <div className="col img-col col-xl-5 col-lg-5 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-2 order-sm-2">
              <img src="images/Picture6.jpg" className='img-fluid'  alt="" />
            </div>
            <div className="col text-col col-xl-7 col-lg-7 col-md-12 col-sm-12 order-xl-2 order-lg-2 order-md-1 order-sm-1">
              <h3 className='fs-2'>ISNEE MotorSports</h3>
              <p className='fs-5'>
                Indian Society of New Era Engineering is build to bridging the gap between the Academy and Industry  by offering a series of design compitition and skill development progrms to the engineering students where they can learn and implement the knowledge gained while in the classroom 
                .ISNEE Motorsports is an organization that provides a platform to all the Engineering and Diploma pursuing candidates to steer their path towards Technical and Managerial expertise.
              </p>
              <h5 className='fs-4'>ISNEE's series of design challenge consist of :</h5>
              <ul style={{listStyleType:"disc"}}>
                <li>Go Kart Design Challenge</li>
                <li>Quad Torc</li>
                <li>Formula Green ISNEE</li>
                <li>Formula Off Road Mini Bajaj India</li>
              </ul>
            </div>
          </div> 

          <div className="row quad-torc p-5 mt-5">
            <div className="col col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className=" ">
                <h3 className=" fs-1"> Quad Torc </h3>
                <p className=" fs-5">Quad Torc is an off road design challenge for engineering and Diploma undertaking students. Quad is a four wheeled bike, an ATV (All-Terrain Vehicle) that was manufactured to use as a vehicle for transportation in strenuous terrains. The contest involves designing a Quad bike following some quoted rules and regulations. All the manufacturing process must be strictly undertaken by the students without any direct or indirect involvement of professional help.</p>
                <a href="https://isnee.in/QT/" className="btn btn-outline-warning w-50">Learn More</a>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 p-xl-4 p-sm-0">
              <img src="images/front2.jpeg" className=" img-fluid mt-lg-2 mt-md-3 mt-sm-3"  alt="..."/>
            </div>
          </div>



          <div className="row card-row p-5">

            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12  " >
              <div  className="card text-start p-4 m-2" >
                <div className="card-body">
                  <h3 className="card-title"> Go kart Design Challenge </h3>
                  <p className="card-text"> Go Kart Design Challenge formerly known as National Go Kart Championship is a competition initiated by ISNEE to offer teams the maximum design flexibility and the freedom to express their creativity and imaginations with very few restrictions on the overall kart design. The challenge to teams is to develop a kart (CV and EV) that can successfully compete in all the events described in the GKDC Rulebook.</p>
                  <a href="https://isnee.in/gkdc/" className="btn btn-outline-warning w-50">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
              <div  className="card text-start p-4 m-2" >
                <div className="card-body">
                  <h3 className="card-title"> Formula Green ISNEE </h3>
                  <p className="card-text"> "Indian Society of New Era Engineers", an associate member of The Federation of Motor Sports Clubs of India and Affiliate Sanctioning Body of SFI Foundation Inc, USA is an organization for students focusing on their technical and managerial development. It challenges the undergraduate and diploma engineers to research and develop innovative projects, inspires them to imagine, as imagination is more important than knowledge. </p>
                  <a href="https://isnee.in/fgi/" className="btn btn-outline-warning w-50">Learn More</a>
                </div>
              </div>
            </div>

            <div className="col col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
              <div  className="card text-start p-4 m-2" >
                <div className="card-body">
                  <h3 className="card-title"> Formula Off Road Mini Baja India </h3>
                  <p className="card-text"> 
                    Formula Off-road Mini Baja India also known as FOMBI is an off-road racing series for all the all-terrain vehicles falling under 305cc and 1000cc. FOMBI is formulated especially for those who have strong passion and desire to do remarkable in the field of motor sports. The competition consists of two categories-
                      <br/> &ensp; &ensp; &ensp; 1- FOMBI 305cc
                      <br/> &ensp; &ensp; &ensp; 2- FOMBI 1000cc
                  </p>
                  <a href="https://isnee.in/gkdc/" className="btn btn-outline-warning w-50">Learn More</a>
                </div>
              </div>
            </div>

          </div>

          <div className="row">
          
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
