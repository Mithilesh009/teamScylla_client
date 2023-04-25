import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './navAndhome.css'
import axios from 'axios'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Navbar() {


  const [navbar , setNavbar] = useState(false)

    const changebg = ()=>{
        if(window.scrollY >= 100){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    } 

    window.addEventListener('scroll' , changebg);


    const [userName, setName] = useState("")
    const [userEmail, setEmail] = useState("")
    const [userPhone, setPhone] = useState("")
    const [userMessage, setMessage] = useState("")

    const refresh =()=> window.location.reload(true)
    // const norefresh =()=> window.location.reload(false)
    const notify_name =()=> toast("Enter your Name")
    const notify_email =()=> toast("Enter Valid Email")
    const notify_Message =()=> toast("Write your Query/ Comment")
    const notify_Phone =()=> toast("Enter Valid Mobile Number")
    const notify_formSubmission =()=> toast("Do Not refresh window or close Contact form \n form Submission in Process")
    const notify = ()=> toast("Form Submited Successfully")



    const addData = async()=>{

      if(userName === "" ){
        notify_name();
      }
      else if(userEmail === ""  ){
        notify_email();
      }
      else if(userMessage === ""){
        notify_Message();
      }
      else if(userPhone ==="" || userPhone.length>10 || userPhone.length<10 ){
        notify_Phone();
      }
      else{
        notify_formSubmission();
         axios.post("https://teamscyllaserver-30mr.onrender.com/create",{
          userName:userName,
          userEmail:userEmail,
          userPhone:userPhone,
          userMessage:userMessage,
      }).then((()=>{
        notify();
        refresh()
      }))
      }

      
  }



  return (
    <>


<nav className={navbar ? "navbar d-none d-lg-block scroll fixed-top py-0" : " navbar d-none d-lg-block fixed-top py-0 "}>
  <div className="container-fluid py-0 my-0 ">
    <img className="navbar-brand py-0" src='images/logoScylla-W.png' width="55vw" alt=''></img>
    <Link aria-current="page" to="/" style={{textDecoration:"none"}}><h2 className='fs-2'>TEAM <span> SCYLLA </span> </h2></Link>
    
      <ul className="list-inline ms-auto py-0">
  
        <li className="list-inline-item  ">
            <Link className="nav-link m-xl-2 p-lg-2 pt-lg-4 " aria-current="page" to="/event"><h5>OUR JOURNEY </h5></Link>
        </li>
        <li className="list-inline-item  ">
            <Link className="nav-link m-xl-2 p-lg-2 pt-lg-4 " aria-current="page" to="/sponsors"><h5> SPONSOR </h5></Link>
        </li>
        <li className="list-inline-item  ">
            <Link className="nav-link m-xl-2 p-lg-2 pt-lg-4 " aria-current="page" to="/gallery"><h5> GALLERY </h5></Link>
        </li>
        <li className="list-inline-item  ">
            <Link className="nav-link m-xl-2 p-lg-2 pt-lg-4 " aria-current="page" to="/department"><h5> TEAM </h5></Link>
        </li>
        <li className="list-inline-item  ">
            <Link className="nav-link btn m-xl-2 pt-lg-2 px-lg-2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop2" ><h5> CONTACT US </h5></Link>
        </li>

      </ul>

  </div>
</nav>


<div className={navbar ? "navbar nav-sm-screen d-lg-none scroll fixed-top p-2 m-0" : "navbar nav-sm-screen d-lg-none fixed-top p-2 m-0"}>

<ul className="list-inline w-100 py-1 my-0">
  <li className="list-inline-item"><img className="" src='images/logoScylla-W.png' width="55vw" alt=''></img></li>
  <li className="list-inline-item"><Link aria-current="page"  id='teamscylla' to="/" ><h2 className='fs-1'>TEAM <span id='teamscylla_span'> SCYLLA</span></h2></Link></li>
  <li className="list-inline-item float-end mt-2" ><button className=" px-2 py-1 " id='sm-btn'   type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" title='bars'> <i className="fa-solid fa-bars fa-xl "></i> </button></li>
</ul>

</div>

<div className="offcanvas-lg offcanvas-start bg-dark d-lg-none p-0 m-0" tabIndex="-1" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div className="offcanvas-header container-fluid p-0 m-0">
    <div className="offcanvas-title row w-100 m-0 p-0" id="offcanvasResponsiveLabel">
      <ul className="list-inline col col-12 p-2 " >
        <li className="list-inline-item"><img className="" src='images/logoScylla-W.png' width="55vw" alt=''></img></li>
        <li className="list-inline-item"><Link aria-current="page" to="/" style={{textDecoration:'none'}}><h2>TEAM <span> SCYLLA </span></h2></Link></li>
        <li className="list-inline-item float-end  text-light" ><button className="btn fs-4" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"><i className="fa-solid fa-x"></i></button></li>
      </ul>
    </div> 
  </div>
  <div className="offcanvas-body">
  <ul className="navbar-nav ms-auto text-start text-light">
        
        <li className="nav-item">
            <Link className="nav-link mx-2  py-1 " aria-current="page" to="/event"><h4> OUR JOURNEY</h4></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mx-2  py-1  " aria-current="page" to="/sponsors"><h4>SPONSORS</h4></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mx-2  py-1  " aria-current="page" to="/gallery"><h4>GALLERY</h4></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mx-2  py-1  " aria-current="page" to="/department"><h4>TEAM</h4></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link btn py-1 " data-bs-toggle="modal" data-bs-target="#staticBackdrop2" to="/"><h4>CONTACT US</h4></Link>
        </li>
      </ul>
  </div>
</div>










<div  className="modal fade " id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div  className="modal-dialog modal-dialog-centered">
    <div  className="modal-content " style={{border:"none"}}>
      <div  className="modal-header text-light bg-warning border border-5 border-warning rounded-top">
        <h1  className="modal-title fs-5 " id="staticBackdropLabel"> CONTACT US </h1>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div  className="modal-body text-light bg-dark border border-5 border-dark rounded-bottom ">
        <div  className='row g-4 justify-content-center '  >
            <div  className=" col-12 form-floating">
                <input type="text"  className="form-control border border-2 border-secondary  text-bg-dark " id="name" name='UserName'  required placeholder="name"  onChange={(event)=>{setName(event.target.value)}} />
                <label htmlFor="name" className='px-4' >Name</label>
            </div>

            <div  className=" col-12 form-floating">
                <input type="email"  className="form-control border border-2 border-secondary  text-bg-dark" id="email" name='Email address' required placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}} />
                <label htmlFor="email" className='px-4' >Email address</label>
            </div>
            
            <div  className=" col-12 form-floating">
                <input type="tel"  className="form-control border border-2 border-secondary  text-bg-dark" id="phone" name='Mobile No.' placeholder="name@example.com" onChange={(event)=>{setPhone(event.target.value)}} />
                <label htmlFor="phone" className='px-4' >Mobile no.</label>
            </div>
            
            <div  className=" col-12 form-floating">
                <textarea  className="form-control border border-2 border-secondary  text-bg-dark" placeholder="Leave a comment here" name='Message ' id="message" onChange={(event)=>{setMessage(event.target.value)}}  ></textarea>
                <label htmlFor="message" className='px-4' >Comments</label>
            </div>
            <div className="col-12">
            <button  type='submit' onClick={addData} className="btn btn-warning text-light w-50 fs-5 fw-bold"  >Submit</button>
            <ToastContainer/>
            </div>
            
        </div>
      </div>
      </div>
  </div>
</div>


         
                
    </>
  )
}
