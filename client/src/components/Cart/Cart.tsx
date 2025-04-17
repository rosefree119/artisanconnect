import React, { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../BaseApi/baseurl";

function Cart({ url }) {
  const navigate = useNavigate();

  const submitFn = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  const userid = localStorage.getItem("buyerid");
  console.log(userid);

  const [art, setArt] = useState([]);
  const [cartitems, setCartItems] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewCartByUserid/${userid}`)
      .then((res) => {
        console.log(res);
        setArt(res.data.data);
        const mappedCartItems = res.data.data.map((item) => ({
          userid: userid,
          artid: item.artid._id,
          artistId: item.artid.artistId, 
        }));
        setCartItems(mappedCartItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCheckout = () => {
    // Call your addOrderFromCart API with cartitems data
    axiosInstance
      .post("addOrderFromCart", { cartitems })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Order placed successfully");
          // navigate("/checkout");
        } else {
          alert("Failed to place order");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error occurred while placing order");
      });
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'relative',
    animation: 'blink 1s infinite', 
    transition: 'background-color 0.3s ease',
  };

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0;
      art?.forEach((a) => {
        sum += a?.artid?.price || 0; 
      });
      setTotalPrice(sum); 
    };

    calculateTotalPrice();
  }, [art]);


  const removecartfn=((itemid)=>{
    axiosInstance.post(`deleteCartById/${itemid}`)
    .then((res)=>{
      console.log(res);
      if(res.data.status==200){
        alert("Item removed successfully")
        window.location.reload()
      }
    })
    .catch=((err)=>{
      console.log(err);
    })
  })

  //order from cart


  return (
    <>
      <Navbar url={url} />
      <section className="Cover-img">
        <h1>Cart</h1>
      </section>

      <div className="Cart">
        <h1>CART</h1>
        <p>
          Dive into a vibrant ocean of creativity. Musefire, passionate artists
          meet art lovers seeking the extraordinary.
        </p>

        <div className="cart-items">
          <div className="delivery-schedule">
            <table width={"100%"} className="cart-table">
              <thead>
                <tr>
                  <th width={"90%"}>ITEM</th>
                  {/* <th width={"40%"}>QTY</th> */}
                  <th width={"30%"}>PRICE</th>
                  <th width={"30%"}></th>
                </tr>
              </thead>
              <tbody>
                {art && art.length ? (
                  art.map((a) => {
                    return (
                      <tr>
                        <td id="cartitemscolb">
                          <img
                            src={`${url}/${a?.artid?.file?.filename}`}
                            alt="item-img"
                          />
                          <h3>{a?.artid?.name}</h3>
                        </td>
                        <td id="bold">
                          <span>₹</span>
                          {a?.artid?.price}
                        </td>
                        <td id="bold">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            style={buttonStyle}
                            onClick={()=>{removecartfn(a._id)}}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div>No Works Available</div>
                )}

              </tbody>
            </table>

            <div className="cart-grandtotal">
              <h4>
                <span id="total">GRAND TOTAL</span> &nbsp;
                <span id="rupees">₹</span>{totalPrice}
              </h4>
            </div>
          </div>
        </div>

        <div className="itemdelivery">
          <input type="checkbox" />
          {/* <label>Need Delivery</label> */}
        </div>
        <div className="cart-btn">
              <button type="submit" onClick={handleCheckout}>CHECKOUT</button>
            </div>

      </div>
      <Footer />
    </>
  );
}

export default Cart;
