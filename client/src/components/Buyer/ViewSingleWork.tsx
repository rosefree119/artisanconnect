import React, { useEffect, useState } from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../BaseApi/baseurl';
import { toast } from 'react-toastify';
function ViewSingleWork({url}) {
    const {id}=useParams()
    const[art,setArt]=useState({})
    const userid=localStorage.getItem("userid")

    useEffect(()=>{
        axiosInstance.post(`/viewArtworkById/${id}`)
        .then((res)=>{
            console.log(res);
            setArt(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    const cartfn=((artid,artistId)=>{
        axiosInstance.post(`addCart`, {
          userid: userid,
          artid: artid,
          artistId: artistId
        })
        .then((res)=>{
          console.log(res);
          if(res.data.status==200){
            toast.success("Cart added successfully")
          }
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
      })
    
    return (
        <>
            <NavMain url={url}/>
            <div className='user-orders'>
                <section className='Cover-img'>
                    <h1>Works</h1>
                </section>


                <div className='ViewSingleWork row' >
                    <div className='viewsingleworkimg col-6'>
                        <img src={`${url}/${art?.file?.filename}`} width="650px" height="300px" />

                    </div>

                    <div className='viewsinglework-details col-6'>
                        <h1>{art?.name}</h1>
                        <h2>₹{art?.price}</h2>

                        <div className='viewsingleworkbtn'>
                            <button
                                onClick={() => cartfn(art._id, art.artistId._id)}

                            > <Icon icon="ion:cart-outline" className="billingicon" /> ADD TO CART</button>

                        </div>
                        <div className='viewsingleworkbtn2'>
                            <Link to={`/payment/${art._id}`} ><button> <Icon icon="carbon:flash" className="billingicon" /> BUY NOW</button></Link>

                        </div>


                    </div>


                </div>



            </div>
            <Footer />
        </>
    )
}

export default ViewSingleWork