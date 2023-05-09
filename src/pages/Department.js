import React,{useEffect } from 'react'
import './Department.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './Navbar';
import Footer from './Footer'


export default function Department() {


  useEffect(()=>{
    Aos.init ({duration:2000})
   },[]) 


       

  return (
    <>
      <Navbar/>

      <div className="container-fluid  ">
        <div className="row i-row  px-0"><img src="images/d-bg.jpg" className='px-0 mx-0' alt="" /></div>
        <div className="row d-ab justify-content-center w-100">
                <div className="row text-center "><h1>Team Members</h1></div>
                
              <div className="row" style={{backgroundColor:"rgb(34, 33, 25)"}}>
              <div className="col col-xl-12 px-0"  >

                  <div className="row text-light p-5 justify-content-center team-heads">
                        <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center p-0"><h2>Team Heads</h2></div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center">

                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/sohan2.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Sohan Patil </h5>
                              <p className="card-text"> Captain </p>
                              <a href="https://www.linkedin.com/in/sohankumar-patil-229a391b1" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                        </div>

                      </div>

                


                  <div className="row text-light p-5 justify-content-center team-heads">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h2>ENGINE</h2></div>
                  <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/yadnesh.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Yadnesh Khandagale </h5>
                              <p className="card-text"> Design Head </p>
                              <a href="https://www.linkedin.com/in/yadnesh-khandagale-6ab101236" className="btn btn-primary">follow + </a>
                            </div>
                          </div>
                  </div>
                  <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/mihir.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Mihir Salunke </h5>
                              <p className="card-text"> Engine </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>
                      </div>

                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ashu.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Ashutosh Pokharkar </h5>
                              <p className="card-text"> Engine & Transmission </p>
                              <a href="https://www.linkedin.com/in/ashutosh-pokharkar-%E3%82%A2%E3%82%B7%E3%83%A5%E3%83%88%E3%83%83%E3%82%B7%E3%83%A5-0032091b0" className="btn btn-primary">follow + </a>
                            </div>
                          </div>
                      </div>

                  </div>



                  <div className="row text-light p-5 justify-content-center team-heads">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h2>BRAKE</h2></div>
                  <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/putri.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Sanjana Goral </h5>
                              <p className="card-text"> Brake Head </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>

                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/om.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Om Dhanave </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>

                  </div>
                  <div className="row text-light p-5 justify-content-center team-heads">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h2>STEERING</h2></div>
                  <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center">

                            <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/putri.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Janhavi Ikhe </h5>
                              <p className="card-text"> Steering Head </p>
                              <a href="https://www.linkedin.com/in/janhavi-ikhe-b128a6241" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                        </div>

                        <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/sudarshan.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Sudarshan Gaikwad </h5>
                              <p className="card-text"> Steering </p>
                              <a href="https://www.linkedin.com/in/sudarshan-gaikwad-54085b236" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>

                  </div>



                  <div className="row text-light p-5 justify-content-center team-heads">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h2>SUSPENSION</h2></div>
                  <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/arshad.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Arshad Khan </h5>
                              <p className="card-text"> Suspension Head </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>

                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/mayur.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Mayur Aher </h5>
                              <p className="card-text"> Suspension </p>
                              <a href="https://www.linkedin.com/in/mayur-aher-925576251" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>

                    
                  </div>
                  <div className="row text-light p-5 justify-content-center team-heads">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h2>CHASIS</h2></div>
                                            
                  <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75 h-100" style={{width: "18rem" , border:"none"}}>
                            <img src="images/George.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Sahil Hazare </h5>
                              <p className="card-text"> Chassis Head </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/bagal.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Prathmesh Bagal </h5>
                              <p className="card-text"> CHASIS </p>
                              <a href="https://www.linkedin.com/in/prathamesh-bagal-a678811a7" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                  </div>




                  <div className="row text-light p-5 justify-content-center team-heads">
                  <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h2>MARKETING</h2></div>
                  <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6 text-center">
                            <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ketan.png" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Ketan Ghadage </h5>
                              <p className="card-text">MARKETING HEAD</p>
                              <a href="https://www.linkedin.com/in/ketan-ghadge-392013206" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                        </div>

                        <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/putri.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Vaishnavi Patil </h5>
                              <p className="card-text"> MARKETING </p>
                              <a href="https://www.linkedin.com/in/vaishnavi-patil-345876205" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>

                      
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto h-100" style={{width: "18rem" , border:"none"}}>
                            <img src="images/profile.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Yash Dekhne </h5>
                              <p className="card-text"> MARKETING </p>
                              <a href="https://www.linkedin.com/in/yash-dhekne" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>

                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/mithilesh.webp" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Mithilesh Jogale </h5>
                              <p className="card-text"> WEB DEVELOPER </p>
                              <a href="https://www.linkedin.com/in/mithilesh-jogale-5bb36620b" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                   

                  </div>



                  <div className="row text-light p-5 justify-content-center team-members">
                      <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center "><h2>Team Members</h2></div>
                      

                        

                      

                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                            <div className="card mx-auto" style={{width: "18rem" , border:"none"}}>
                                  <img src="images/bhavesh.png" className="card-img-top rounded-top" height={210} alt="..."/>
                                  <div className="card-body">
                                    <h5 className="card-title"> Bhavesh Nikum </h5>
                                    <p className="card-text"> Manager </p>
                                    <a href="some" className="btn btn-primary">follow + </a>
                                  </div>
                                </div>
                      </div>


                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Ajit Sonawane </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Ashutosh Malve </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Soham Desai </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Prathmesh Jankar </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Sheryash Pathak  </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Somnath Bodkar </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Rushikesh Bagal </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>

                      </div>
                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Naman </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
                          </div>
                      </div>

                      <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-6  text-center">
                          <div className="card mx-auto w-75" style={{width: "18rem" , border:"none"}}>
                            <img src="images/ajit.jpg" className="card-img-top rounded-top " alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title"> Sarang </h5>
                              <p className="card-text"> Member </p>
                              <a href="some" className="btn btn-primary">follow + </a>
                            </div>
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
    {/* </div> */}








</>

  
  )
}
