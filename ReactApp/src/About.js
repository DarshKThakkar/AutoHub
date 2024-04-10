import React from 'react';
import "./About.css";

function About() {

    return ( <>

    <div style={{position: "relative"}}>
        <img src="/aboutpage.jpg" alt="" width="100%" style={{height: "200px"}}/>
        <h2 className="gradient-text" style={{position: "absolute", color: "#ececec", bottom: "40%", left: "10%", fontFamily: "Montserrat"}}>Discover Our Automotive World</h2>
        <div style={{justifyContent: "center", display: "flex"}}>
            <hr style={{border: "1px solid #ffffff", width: "20%", position: "absolute", bottom: "30%", left: "13%"}}/>
        </div>
    </div>

    {/* <div>
        <h2>AUTOHUB</h2>
        <h6>Transforming Commutes into Adventures, Every Car, Every Time</h6>
    </div> */}

    <div style={{margin: "50px"}}>

        <div className='row'>

            <div className='col-lg-3 promote'>
                <img src="/Icons/choices.gif" alt="Img" width="20%"/>
                <h5 className="proTxt">Wide Selection</h5>
                <p>Explore a vast array of vehicles from leading manufacturers.</p>
            </div>
            <div className='col-lg-3 promote'>
                <img src="/Icons/compare.gif" alt="Img" width="20%"/>
                <h5 class="proTxt">Easy Comparison</h5>
                <p>Effortlessly compare cars side-by-side for features, specs, and pricing.</p>
            </div>

            <div className='col-lg-3 promote'>
                <img src="/Icons/search.gif" alt="Img" width="20%"/>
                <h5 class="proTxt">Fast Search</h5>
                <p>Find your dream car quickly with our intuitive search function.</p>
            </div>

            <div className='col-lg-3 promote'>
                <img src="/Icons/review.gif" alt="Img" width="20%"/>
                <h5 class="proTxt">User Reviews</h5>
                <p>Hear from real car owners with user-generated reviews and ratings.</p>
            </div>

        </div>

    </div>


    <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
        <h3>Read what our users say</h3>
    </div>
    <div style={{display: "flex", justifyContent: "center"}}>
        <hr style={{border: "2px solid black", width: "10%", marginTop: "10px"}}/>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide" style={{width: "100%", margin: "30px 0", height: "440px"}}>

        <div className="carousel-inner" style={{margin: "0 180px"}}>

            <div className="carousel-item active">

                <div style={{display: "flex"}}>
                    <div className="review">
                        <img src="/Icons/quotes.png" alt="" width="7%" style={{marginBottom: "20px"}}/>
                        <p>I stumbled upon this website while searching for my next ride, and boy, am I glad I did! It's like a candy store for car enthusiasts. The interface is clean and intuitive, making it a breeze to compare different vehicles side by side. Plus, the detailed specifications and user reviews helped me make an informed decision. Highly recommended!</p>                
                        <div style={{marginTop: "40px", display: "flex", height: "32px"}}>
                            <img src="/Icons/account.png" alt="" width="7%"/>
                            <p style={{lineHeight: "180%"}}>&emsp;Darsh K Thakkar</p>
                        </div>
                    </div>

                    <div className="review">
                        <img src="/Icons/quotes.png" alt="" width="7%" style={{marginBottom: "20px"}}/>
                        <p>As someone who's always on the lookout for the best deals on wheels, this car website has become my go-to destination. Whether I'm browsing for a family SUV or a sleek sports car, the extensive database and easy-to-use filters make it effortless to find exactly what I'm looking for. It's like having a personal car expert at my fingertips!</p>                
                        <div style={{marginTop: "40px", display: "flex", height: "32px"}}>
                            <img src="/Icons/account2.png" alt="" width="7%"/>
                            <p style={{lineHeight: "180%"}}>&emsp;Hemavarshini Akkireddy</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="carousel-item">

                <div style={{display: "flex"}}>
                    <div className="review">
                        <img src="/Icons/quotes.png" alt="" width="7%" style={{marginBottom: "20px"}}/>
                        <p>I've never been a car person, but this website has completely changed my perspective. It's so much more than just a place to compare vehicles – it's a treasure trove of information! From expert reviews to detailed pricing guides, I was able to educate myself and make a confident decision when purchasing my first car.</p>
                        <div style={{marginTop: "40px", display: "flex", height: "32px"}}>
                            <img src="/Icons/account.png" alt="" width="7%"/>
                            <p style={{lineHeight: "180%"}}>&emsp;Pal Patel</p>
                        </div>
                    </div>

                    <div className="review">
                        <img src="/Icons/quotes.png" alt="" width="7%" style={{marginBottom: "20px"}}/>
                        <p>I recently used this car website to research and compare different hybrid models, and I couldn't be happier with the results. Not only did I find the perfect eco-friendly vehicle for my needs, but the website also helped me understand the benefits of hybrid technology and calculate potential savings on fuel costs.</p>
                        <div style={{marginTop: "40px", display: "flex", height: "32px"}}>
                            <img src="/Icons/account.png" alt="" width="7%"/>
                            <p style={{lineHeight: "180%"}}>&emsp;Jay Oza</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ color: 'black' }}>
            <h1 aria-hidden="true" style={{ color: 'black'}}>&lt;</h1>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <h1 aria-hidden="true" style={{ color: 'black'}}>&gt;</h1>
        </button>
    </div>

    </> );
}

export default About;