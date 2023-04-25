import React from 'react'
import "aos/dist/aos.css";
import "animate.css";
import { Link } from 'react-router-dom';
import './navAndhome.css'

export default function Footer() {
  return (
    <>
      <footer  >
            <div className=" container-fluid" style={{backgroundColor:"rgb(154, 111, 3)"}} >
                <div className="container py-5">
                    <div className="row text-light">
                        <div className="col foot-col col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="row ">
                                <div className="col ts-col1 col-xl-4 col-lg-4 col-md-4 col-sm-3 "> <img src='images/logoScylla-W.png' width="100%" alt="" /></div>
                                <div className="col ts-col2 col-xl-8 col-lg-8 col-md-8 col-sm-8 mt-4 mt-xl-4 mt-lg-2 mt-md-2"><span style={{fontSize:"200%" , fontWeight:"600"}}> TEAM SCYLLA </span> <br /><p style={{fontSize:"2.5vh"}}> "Unified we Succeed"</p></div>
                            </div>
                        </div>
                        <div className="col foot-col col-xl-3 col-lg-3 col-md-3 col-sm-12 pt-4">
                            <ul style={{listStyle:"none"}}>
                                <li className='mx-0 my-0' > <Link className='nav-link ' aria-current="page" to="/"><h6 className='fs-5'> HOME</h6></Link></li>
                                <li className='mx-0 my-0' > <Link className='nav-link' aria-current="page" to="/Event"><h6 className='fs-5'> OUR JOURNEY</h6></Link></li>
                                <li className='mx-0 my-0' > <Link className="nav-link " aria-current="page" to="/Sponsors"><h6 className='fs-5'>SPONSORS</h6></Link></li>
                                <li className='mx-0 my-0' ><Link className="nav-link  " aria-current="page" to="/Gallery"><h6 className='fs-5'> GALLERY</h6></Link></li>
                                <li className='mx-0 my-0' ><Link className="nav-link  " aria-current="page" to="/Department"><h6 className='fs-5'> TEAM</h6></Link></li>
                            </ul>
                        </div>

                        <div className="col foot-col col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <div className="row">
                                <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-6" >
                                    <h2>Contact Us</h2>
                                    <div className="row">
                                    <div className="col col-1"><i className="fa-regular fa-envelope"></i></div> 
                                    <div className="col">teamscylla@nmiet.edu.in</div> 
                                    </div>
                                    <div className="row">
                                        <div className="col col-1"><i className="fa-solid fa-map-location-dot"></i></div>
                                        <div className="col"><p> Mechanical Workshop , Nutan Maharastra Institute of Engineering And Technology , Talegaon , Pune </p></div>
                                    </div>
                                </div>
                                <div className="col num col-xl-12 col-lg-12 col-md-12 col-sm-6">
                                    <div className="row w-100">
                                        <a href="/" className='text-light fs-5 phone' style={{textDecoration:"none"}} ><i className="fa-solid fa-phone px-0 list-inline"></i> +91 8669349120</a>
                                    </div>
                                    <div className="row">
                                        <div className="col i-col col-xl-1 col-lg-1 col-md-2 col-sm-2 "><a href='https://instagram.com/team_scylla?igshid=YmMyMTA2M2Y=' className="btn insta text-light " style={{borderRadius:"50%" ,padding:4 }}> <i  className="fa-brands fa-instagram fa-xl"></i> </a> </div>
                                        <div className="col i-col col-xl-1 col-lg-1 col-md-2 col-sm-2 "><a href="https://www.linkedin.com/in/team-scylla-926701251" className="btn linked text-light "style={{borderRadius:"50%" ,padding:4 }}><i  className="fa-brands fa-linkedin fa-xl"></i></a></div>
                                        <div className="col i-col col-xl-1 col-lg-1 col-md-2 col-sm-2 "><a href="https://www.youtube.com/channel/UC9BPDa8A0a8zau1ZfPfwzgA"className="btn youtube text-light "style={{borderRadius:"50%" ,padding:4 }}><i className="fa-brands fa-youtube fa-xl"></i></a></div>
                                        <div className="col i-col col-xl-1 col-lg-1 col-md-2 col-sm-2 "><a href="https://twitter.com/Team_Scylla1?t=_HLu39-P-G8D2G-Pnihugg&s=09"className="btn twitter text-light "style={{borderRadius:"50%" ,padding:4 }}><i className="fa-brands fa-twitter fa-xl"></i></a></div>
                                        <div className="col i-col col-xl-1 col-lg-1 col-md-2 col-sm-2 "><a href="/"className="btn facebook text-light "style={{borderRadius:"50%" ,padding:4 }}><i className="fa-brands fa-facebook fa-xl"></i></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

        </footer>
    </>
  )
}
