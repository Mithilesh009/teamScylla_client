import React, { useEffect } from 'react';
import Aos from "aos" ;
import "aos/dist/aos.css";
import "animate.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// import { Link } from 'react-router-dom';



export default function Home() {
    useEffect(() =>{
        Aos.init({duration:1500});
    } , []);


  return (
    // 
    <>
    <Navbar/>
     <div id="carouselExampleFade" className="carousel slide carousel-fade bg-dark" data-bs-ride="carousel">
                <div className="carousel-inner " style={{marginBottom:"-20px"}}>
                    <div className="carousel-item active" >
                        <img  src="images/team_scylla.jpeg" className="d-block w-100 opacity-25 image  "  alt="..." />
                        <div className="carousel-caption ">
                            <h1  className='animate__animated animate__bounceInLeft animate__delay-0.5s  ' ><span style={{fontSize:"160%"}} > TEAM SCYLLA RACING </span></h1>
                            <p className='animate__animated animate__bounceInRight animate__delay-1.5s fs-4 ' > " PERFORMANCE OVER EVERYTHING " </p>
                            {/* <Link className="btn animate__animated animate__bounceInLeft animate__delay-1.9s" to="/event">Learn More</Link> */}
                        </div>
                    </div>
                    {/* <div className="carousel-item" >
                        <img src="images/front2.jpeg" className="d-block w-100 opacity-25 image " alt="..." />
                        <div className="carousel-caption ">
                            <p className='animate__animated animate__bounceInUp animate__delay-0.5s'>New to Team Scylla</p>
                            <h1 className='animate__animated animate__bounceInUp animate__delay-1.5s' >Join Now</h1>
                            <Link to="" className='btn animate__animated animate__bounceInUp animate__delay-1.9s' data-bs-toggle="modal" data-bs-target="#register"> <h4>Sign Up</h4></Link>
                        </div>
                    </div> */}
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className=' container-fluid text-center p-3' style={{backgroundColor:"rgb(173, 125, 3)"}}>
                <div className="container">
                <div className="row pt-xl-3 pt-lg-3 pt-md-3 pt-sm-1 text-light " id='strip'>
                    <div className="col ">
                        <span className='text'> call : </span> 8669349120
                    </div>
                    <div className="col ">
                        visit : Mechanical Workshop , NMIET
                    </div>
                </div>
                </div>
            </div>


            <div className="container-fluid  "  style={{backgroundColor:"black"  }}>
                    <div className="row p-xl-5 p-lg-5 p-md-5 p-sm-3 paddingrow" style={{ backgroundImage:" linear-gradient(to bottom, black , rgb(173, 125, 3) 350% ) "}}>
                        <div className=" ab-col col col-xl-7 col-lg-7 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-1">
                            <div >
                                <h1 className="text-start" data-aos="fade-up" >About Us</h1>
                                <p data-aos="fade-up" data-aos-delay='200' className='abw lh-lg  '>
                                    Team Scylla is a group of undergraduate students from Nutan Maharastra Institute of Engineering & Technology, Pune. We design and develop an  All-Terrain Vehicle 
                                    participating in ISNEE Motorsports. Previously designing and manufacturing  ATVs, we have participated in events such as Quad Torc. We design, manufacture, test, 
                                    and race our ATV with only one aim in mind: <span><br /></span>  " The winner ain't the one with the fastest car , it's the one who refuse to lose "
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay ='100' className="  col col-xl-5 col-lg-5 col-md-12 col-sm-12 order-xl-2 order-lg-2 order-md-2 order-sm-2 text-center" id='abimg1'><img src="images/frontImg.jpeg" alt="" className='img-fluid ' /></div>
                    </div> 
                    

                    <div className="row p-xl-5 p-lg-5 p-md-5 p-sm-3 paddingrow" style={{backgroundImage:"linear-gradient(to bottom, black , #3E5151 200%)"}} >
                        <div className="col">
                            <h1 className='text-start' data-aos="fade-up" data-aos-delay='100' >Vision & Mission</h1>
                            <p data-aos="fade-up" data-aos-delay='200' className='abw lh-lg' > <br />
                            Our ATV racing team envisions becoming a dominant force in the world of motorsports, recognized for our exceptional skills, sportsmanship, and dedication to pushing the limits of performance. We aim to be the team of choice for aspiring racers and motorsports enthusiasts, setting new standards of excellence in ATV racing and making a positive impact on the racing community.
                           <br /> Our mission is to compete at the highest level of ATV racing, striving for victory in every race while upholding the values of integrity, teamwork, and passion. We are committed to fostering a culture of continuous improvement, investing in our team members' development, and maintaining cutting-edge equipment and technology. We aim to promote the sport of ATV racing, inspire others with our performances, and leave a lasting legacy in the racing world.
                            </p>
                        </div>
                    </div>
                    


                    <div className="row text-light text-start " >
                        <div className="col ">
                            <div className="row p-xl-5 p-lg-5 p-md-4 p-sm-3 paddingrow" style={{backgroundImage:"linear-gradient(to bottom, #3E5151 -100%, black)"}} >
                                <div className="text-center col col-xl-4 col-lg-4 col-md-5 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-2 opacity-75 quad-col1 pt-xl-0 pt-lg-0 pt-md-2 pt-sm-2 p-1" id="abimg3" ><img src="images/_MG_4215.jpg"  className="" width="100%" alt="..."/></div>
                                <div className="col col-xl-8 col-lg-8 col-md-7 col-sm-12 order-xl-2 order-lg-2 order-md-2 order-sm-1 pt-xl-5 pt-lg-5 pt-md-0 pt-sm-0 px-xl-5 px-lg-5 px-md-2 px-sm-2 quad-col">
                                    <h1 className='fs-1' data-aos='fade-up' data-aos-delay='100' style={{fontWeight:"bold"}}>Quad Torc</h1>
                                    <p className=' abw lh-lg' data-aos='fade-up' data-aos-delay='200' style={{}} >Quad Torc is an off road design challenge for engineering and Diploma undertaking students.  Quad is a four wheeled bike, an ATV (All-Terrain Vehicle) that was manufactured to use as 
                                     a vehicle for transportation in strenuous terrains.  The contest involves designing a Quad bike  following some quoted rules and regulations.  All the manufacturing process must be strictly  undertaken by the students without any direct or indirect involvement of professional help.</p>
                                    <Link className=" btn btn-outline-warning px-3 " data-aos='zoom-in-up' data-aos-delay='200' aria-current="page" to="/event"><h6> Know more</h6></Link>
                                </div>
                            </div>
                        </div>
                    </div>





            </div>

            <Footer/>

            




            
            
        

        


<div className="modal fade" id="register" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header ">
        <h1 className="modal-title fs-3 " id="staticBackdropLabel"> REGISTER  </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
        <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" name='Name' placeholder="name@example.com"/>
                <label htmlFor="name"> Name </label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" name='Email-address' placeholder="name@example.com"/>
                <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="mobile" name='Moble no.' placeholder="name@example.com"/>
                <label htmlFor="mobile"> Mobile no. </label>
            </div>
            <select className="form-select" name='Department ' aria-label="Default select example">
                <option selected>Choose Department</option>
                <option value="Chasis">Chasis</option>
                <option value="Steering">Steering</option>
                <option value="Transmission">Transmission</option>
                <option value="Engine">Engine</option>
                <option value="Brake">Brake</option>
                <option value="Suspention">Suspention</option>
                <option value="Electronic & Electrical">Electronic & Electrical</option>
                <option value="Marketing">Marketing</option>
                <option value="Web devlopment">Web Development</option>
            </select>
            <button type='submit' className='btn btn-primary my-4'>Submit</button>
        </form>
      </div>
      </div>
  </div>
</div>

    </>
  )
}
