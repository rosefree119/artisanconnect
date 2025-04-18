import React, { useEffect, useState } from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import axiosInstance from "../../BaseApi/Baseurl";

function Gallery({ url }) {
  const userid = localStorage.getItem("userid");
  // console.log("userid"+userid);

  const [art, setArt] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`viewArtworks`)
      .then((res) => {
        console.log(res);
        setArt(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const[cart,setCart]=useState({
  //   userid:userid,
  //   artid:"",
  //   artistId:""
  // })

  const cartfn = (artid, artistId) => {
    axiosInstance
      .post(`addCart`, {
        userid: userid,
        artid: artid,
        artistId: artistId,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.status == 200) {
          alert("Cart added successfully");
        }
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.post(
        `/searchartByName/${searchTerm}`
      );
      setSearchResults(response.data);
      setErrorMessage("");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setSearchResults([]);
        setErrorMessage("No services found with the given name.");
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

  return (
    <>
      <Navbar url={url} />

      <section className="Cover-img">
        <h1>Gallery</h1>
      </section>

      <div className="gallery">
        <h1>SEARCH</h1>

        <div className="gallery-search">
          <input
            type="text"
            placeholder="Work Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          {errorMessage && <p>{errorMessage}</p>}
          <div id="service-search">
            {searchResults.map((service) => (
              <div
                className=" viewservices_search"
                style={{ paddingLeft: "30px" }}
              >
                <Link
                  to={`/viewsinglework_art/${service._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className="ri-search-line">{service.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="explore-gallery">
          <h1>EXPLORE GALLERY</h1>
          <p>
            Dive into a vibrant ocean of creativity. <span>Museofire</span>,
            passionate artists meet art lovers seeking the extraordinary.
          </p>
          <div className="gallery-products">
            <div class="container text-center">
              <div class="row gallery-row">
                {art && art.length ? (
                  art.map((a) => {
                    return (
                      <div class="col-6 gallery-col">
                        <div class="card" style={{ width: "20rem" }}>
                          <Link to={`/viewsinglework_art/${a._id}`}>
                            <img
                              src={`${url}/${a.file?.filename}`}
                              class="card-img-top"
                              alt="..."
                              width="300px"
                              height="200px"
                            />
                          </Link>

                          <div class="artdesc">
                            <div className="productdet">
                              <h1
                                class="card-text1"
                                style={{
                                  width: "100px",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {a?.name}
                              </h1>
                              <h3 id="card-text2">
                                <button
                                  onClick={() => cartfn(a._id, a.artistId._id)}
                                >
                                  ADD TO CART
                                </button>
                              </h3>
                            </div>

                            <div className="product-pricetag">
                              <h1> ₹ {a?.price} </h1>
                            </div>

                            <Link to="/user_chat">
                              <div className="gallery-artistprofile">
                                <img
                                  src={`${url}/${a?.artistId?.image.filename}`}
                                  alt="artist"
                                />
                              </div>
                            </Link>
                            {/* Chat icon  */}
                            {/* <div className="gallery-chat-icon">
                              <Link to="/user_chat">
                                {" "}
                                <Icon
                                  icon="fluent:chat-32-filled"
                                  className="gallery-chat"
                                />{" "}
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div>No Works Available</div>
                )}

                {/*                 

                <div class="col-6 gallery-col">
                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>

                    <div class="artdesc">
                      <div className="productdet">
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>ADD TO CART</button>
                        </h3>
                      </div>

                      <div className="product-pricetag">
                        <h1> ₹ 500 </h1>
                      </div>

                      <Link to="/user_chat">
                        <div className="gallery-artistprofile">
                          <img src={artistimg} />
                        </div>
                      </Link>

                      <div className="gallery-chat-icon">
                        <Link to="/user_chat">
                          {" "}
                          <Icon
                            icon="fluent:chat-32-filled"
                            className="gallery-chat"
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 gallery-col">
                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>

                    <div class="artdesc">
                      <div className="productdet">
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>ADD TO CART</button>
                        </h3>
                      </div>

                      <div className="product-pricetag">
                        <h1> ₹ 500 </h1>
                      </div>

                      <Link to="/user_chat">
                        <div className="gallery-artistprofile">
                          <img src={artistimg} />
                        </div>
                      </Link>

                      <div className="gallery-chat-icon">
                        <Link to="/user_chat">
                          {" "}
                          <Icon
                            icon="fluent:chat-32-filled"
                            className="gallery-chat"
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 gallery-col">
                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>

                    <div class="artdesc">
                      <div className="productdet">
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>ADD TO CART</button>
                        </h3>
                      </div>

                      <div className="product-pricetag">
                        <h1> ₹ 500 </h1>
                      </div>

                      <Link to="/user_chat">
                        <div className="gallery-artistprofile">
                          <img src={artistimg} />
                        </div>
                      </Link>

                      <div className="gallery-chat-icon">
                        <Link to="/user_chat">
                          {" "}
                          <Icon
                            icon="fluent:chat-32-filled"
                            className="gallery-chat"
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 gallery-col">
                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>

                    <div class="artdesc">
                      <div className="productdet">
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>ADD TO CART</button>
                        </h3>
                      </div>

                      <div className="product-pricetag">
                        <h1> ₹ 500 </h1>
                      </div>

                      <Link to="/user_chat">
                        <div className="gallery-artistprofile">
                          <img src={artistimg} />
                        </div>
                      </Link>

                      <div className="gallery-chat-icon">
                        <Link to="/user_chat">
                          {" "}
                          <Icon
                            icon="fluent:chat-32-filled"
                            className="gallery-chat"
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 gallery-col">
                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>

                    <div class="artdesc">
                      <div className="productdet">
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>ADD TO CART</button>
                        </h3>
                      </div>

                      <div className="product-pricetag">
                        <h1> ₹ 500 </h1>
                      </div>

                      <Link to="/user_chat">
                        <div className="gallery-artistprofile">
                          <img src={artistimg} />
                        </div>
                      </Link>

                      <div className="gallery-chat-icon">
                        <Link to="/user_chat">
                          {" "}
                          <Icon
                            icon="fluent:chat-32-filled"
                            className="gallery-chat"
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 gallery-col">
                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>

                    <div class="artdesc">
                      <div className="productdet">
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>ADD TO CART</button>
                        </h3>
                      </div>

                      <div className="product-pricetag">
                        <h1> ₹ 500 </h1>
                      </div>

                      <Link to="/user_chat">
                        <div className="gallery-artistprofile">
                          <img src={artistimg} />
                        </div>
                      </Link>

                      <div className="gallery-chat-icon">
                        <Link to="/user_chat">
                          {" "}
                          <Icon
                            icon="fluent:chat-32-filled"
                            className="gallery-chat"
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 gallery-col">
                  <div class="card" style={{ width: "20rem" }}>
                    <Link to="/viewsinglework">
                      <img src={product} class="card-img-top" alt="..." />
                    </Link>

                    <div class="artdesc">
                      <div className="productdet">
                        <h1 class="card-text1">Lumiere</h1>
                        <h3 id="card-text2">
                          <button>ADD TO CART</button>
                        </h3>
                      </div>

                      <div className="product-pricetag">
                        <h1> ₹ 500 </h1>
                      </div>

                      <Link to="/user_chat">
                        <div className="gallery-artistprofile">
                          <img src={artistimg} />
                        </div>
                      </Link>

                      <div className="gallery-chat-icon">
                        <Link to="/user_chat">
                          {" "}
                          <Icon
                            icon="fluent:chat-32-filled"
                            className="gallery-chat"
                          />{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <section id="featured-artist">

<h1>Featured Artist</h1>
<h2>We provide the tools and support to help your artistic compass guide you.</h2>


<div className='featured-artist-details'>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
    <div className='featured-artistimg'>
        <img src={artistimg} alt='artist image' />

        <h1>Lumiere</h1>

    </div>
</div>


</section> */}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
