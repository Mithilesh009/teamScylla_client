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
                    </div>


                </div>
            </div>


        </>
    )
}
