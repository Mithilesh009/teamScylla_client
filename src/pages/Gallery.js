import React, { useEffect } from 'react'
import './Gallery.css'
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from './Navbar';
import Footer from './Footer';
import Data from '../data.json'

export default function Gallery() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


<<<<<<< HEAD
    return (
        <>

            <Navbar />
            <div className="container-fluid bg-dark">
                <div className="row img-row  "><img src="images/cm.jpg" className='px-0 mx-0' alt="" /></div>
                <div className="row ab-row justify-content-center w-100 ">
                    <div className="col  col-xl-12 ">
                        <div className="row text-center py-4"><h1>Gallery</h1></div>

                        <div className="row gal-row text-center" >
                            <div className="col col-xl-12 bor"  >
                                <div className="row text-light justify-content-center p-3">
                                    {Data[0].gallery.map((img)=> 
                                    <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src={img.img1} className='img-fluid' alt="" /></div>
                                    )}
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="px-0">
                        <Footer />
=======
  return (
    <>
    <Navbar/>
    <div className="container-fluid bg-dark">
        <div className="row img-row  "><img src="images/cm.jpg" className='px-0 mx-0' alt="" /></div>
        <div className="row ab-row justify-content-center w-100 ">
            <div className="col  col-xl-12 ">
                <div className="row text-center py-4"><h1>Gallery</h1></div>
                
            <div className="row gal-row text-center" >
                <div className="col col-xl-12 bor p-4"  >
                    <div className="row text-light justify-content-center">
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0093.jpg" className='img-fluid w-75 w-md-100' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0104.jpg" className='img-fluid w-75' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0097.jpg" className='img-fluid w-75' alt="" /></div>       
                    {/* </div> */}

                    {/* <div className="row text-light justify-content-center"> */}
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0102.jpg" className='img-fluid w-75' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0112.jpg" className='img-fluid w-75' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0113.jpg" className='img-fluid w-75' alt="" /></div>
                    {/* </div> */}

                    {/* <div className="row text-light justify-content-center">         */}
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0130.jpg" className='img-fluid w-75' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0131.jpg" className='img-fluid w-75' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0017.jpg" className='img-fluid w-75' alt="" /></div>
                    {/* </div> */}

                    {/* <div className="row text-light justify-content-center">         */}
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0020.jpg" className='img-fluid w-75' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/DSC_0128.jpg" className='img-fluid w-75 h-75' alt="" /></div>
                        <div data-aos="zoom-in-up" data-aos-delay="100" className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 py-4 f-col "><img src="images/front2.jpeg" className='img-fluid w-75 ' alt="" /></div>
>>>>>>> 05eb6d095d3ff8e56f72a2fbc1aaeb3d68d6cf65
                    </div>


                </div>
            </div>


        </>
    )
}
