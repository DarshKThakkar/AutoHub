import React, { useState, useEffect } from 'react';
import "./Home.css";
import Carousel from './Carousel';
import axios from 'axios';

function Home()
{
    var [data, setData] = useState([]);

    useEffect(() => {
        fetchData('featured'); // Fetch data when component mounts
    }, []);
    
    var fetchData = async (x) => {
        try
        {
          var response = await axios.get('http://localhost:3001/' + x);
          setData(response.data); // Assuming your API response is an array
        }
        catch (error)
        {
          console.error('Error fetching data:', error);
        }
    };

    return ( <>
    <div style={{position: "relative"}}>
        <img src="/homepage.jpg" alt="HomePage" style={{width: "100%", height: "350px"}}/>
        <div style={{position: "absolute", bottom: "15%", width: "100%", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <h2 style={{color: "white"}}>Browse Our Selection of Cars</h2>
            <div style={{display: "flex", width: "100%", justifyContent: "center", marginTop: "20px"}}>
                <input id="searchBar" className="form-control" placeholder='Type to search for cars in our inventory' style={{width: "40%"}}/>
                <button className="btn" style={{backgroundColor: "white", position: "relative", left: "-10px", borderRadius: "0 5px 5px 0", borderLeft: "1px solid rgb(200, 200, 200)"}}><i className="fa-solid fa-magnifying-glass" style={{color: "#082567"}}></i></button>
            </div>
        </div>
    </div>
    
    <div style={{padding: "50px"}}>

        <div id="feature">

            <h2 style={{fontFamily: "Montserrat"}}>Explore Vehicles</h2>
            
            <div className="ms-auto">

                <button id="featured" className="btn group" onClick={() => {
                    document.getElementById("featured").style.backgroundColor = "#e1e1e1";
                    document.getElementById("newArrival").style.backgroundColor = "white";
                    document.getElementById("bestSellers").style.backgroundColor = "white";
                    fetchData("featured");
                    }}>
                    Featured
                </button>

                <button id="newArrival" className="btn group" onClick={() => {
                    document.getElementById("newArrival").style.backgroundColor = "#e1e1e1";
                    document.getElementById("featured").style.backgroundColor = "white";
                    document.getElementById("bestSellers").style.backgroundColor = "white";
                    fetchData("newarrival");
                    }}>
                    New Arrival
                </button>

                <button id="bestSellers" className="btn group" onClick={() => {
                    document.getElementById("newArrival").style.backgroundColor = "white";
                    document.getElementById("featured").style.backgroundColor = "white";
                    document.getElementById("bestSellers").style.backgroundColor = "#e1e1e1";
                    fetchData("bestsellers");
                    }}>
                    Best Sellers
                </button>

            </div>
            
        </div>

        <div id="display" style={{marginTop: "30px"}}>
            <div className='row'>
                {data.map((record, index) => (
                    <div key={index} className='col-lg-3 col-md-4 col-sm-6 cars'>
                        <div className="card">
                            <img src={"data:image/jpg;base64," + record.image} className="card-img-top" alt="Img" height="100%" style={{borderRadius: "5px"}}/>
                            <div className="card-body">
                                <h5 className="card-text" style={{fontWeight: "500"}}>{record.company} {record.carName}</h5>
                            </div>
                        </div>
                    </div>
                 ))}
            </div>
        </div>

        <div style={{textAlign: "center", marginTop: "50px"}}>
            <a href='/cars'><button className="btn btn-outline-dark" style={{width: "200px"}}>All Vehicles</button></a>
        </div>

    </div>

    <div style={{width: "100%", padding: "0px 50px"}}>
        <div className='row'>
            <div id="compSuvContainer" className='col-lg-4 col-md-6 category' style={{position: "relative"}}>
                <img id="compSuvImg" src="/Category/compactSUV.jpg" alt="Img" width="100%" height="100%"/>
                <h1 id="compSuv" style={{margin: 0}}>Compact SUV</h1>
            </div>
            <div id="suvContainer" className='col-lg-4 col-md-6 category' style={{position: "relative"}}>
                <img id="suvImg" src="/Category/SUV.jpg" alt="Img" width="100%" height="100%"/>
                <h1 id="suv" style={{margin: 0}}>SUV</h1>
            </div>
            <div id="sedanContainer" className='col-lg-4 col-md-6 category' style={{position: "relative"}}>
                <img id="sedanImg" src="/Category/sedan.jpg" alt="Img" width="100%" height="100%"/>
                <h1 id="sedan" style={{margin: 0}}>Sedan</h1>
            </div>
        </div>
    </div>

    <Carousel/>

    </> );
}

export default Home;