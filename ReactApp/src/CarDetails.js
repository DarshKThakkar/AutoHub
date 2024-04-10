import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./CarDeatils.css";

function CarDetails()
{
    const { id } = useParams();

    var [data, setData] = React.useState([]);
    var [features, setFeatures] = React.useState([]);
    var [carName, setCarName] = React.useState([]);

    React.useEffect(() => {
        fetchData(); // Fetch data when component mounts
    }, []);
    
    var fetchData = async () => {
        try
        {
            await axios.get('http://localhost:3001/car/' + id)
            .then(function (response) {
                // Handle successful response
                setData(response.data);
                fetchFeatures(`${response.data[0].CarName} ${response.data[0].Variants[0]}`);
                setCarName(response.data[0].CarName);
                // setVariants(response.data[0.Variants);
                // fetchFeatures(`${response.data[0].CarName} ${response.data[0].Variants[0]}`);       
            })
            .catch(function (error) {
                // Handle error
                console.error('Error fetching data:', error);
            });
        }
        catch (error)
        {
            console.error('Error fetching data:', error);
        }
    };

    var changeVariant = (e) => {

        var x = (carName + " " + e.target.value);
        fetchFeatures(x);


    };

    var fetchFeatures = async (x) => {

        try
        {
            x = x.replace(/\s/g, "%20");
            await axios.get('http://localhost:3001/features/' + x)
            .then(function (response) {
                // Handle successful response
                setFeatures(response.data);
            })
            .catch(function (error) {
                // Handle error
                console.error('Error fetching data:', error);
            });

        }
        catch (error)
        {
          console.error('Error fetching features:', error);
        }
    };

    var getColor = (x) => {

        var words = x.split(' ');
    
        // Get the last word
        var lastWord = words[words.length - 1];
        
        return lastWord;
    }

    return ( <>

    <div style={{margin: "50px 100px", display: "flex"}}>

        {data.map((record, index) => (

        <div style={{display: "flex", width: "100%"}} key={index}>

            <div style={{width: "55%"}}>
                <img src={"data:image/jpg;base64,"+record.Image} alt={record.CarName} style={{width: "90%"}}/>
            </div>
            <div style={{paddingTop: "50px", width: "45%"}}>
                <h3 style={{fontWeight: "700"}}>{record.Company} {record.CarName}</h3>
                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50" style={{position: "relative", height: "25px", width: "40%"}}>
                    <div className="progress-bar bg-warning" style={{width: String(record.Stars * 9.9) + "%"}}></div>
                    <img src="/stars.png" alt="" style={{position: "absolute", width: "100%", top: 0}}/>
                </div>
                <br/>
                <h5 style={{color: "#404040"}}>₹ {record.Price} Lakh</h5>
                
                <div className="dropdown" style={{marginTop: "30px"}}>
                    <p style={{color: "#404040"}}><b>Select Variant</b></p>
                    <select style={{width: "50%"}} onChange={changeVariant}>
                        {record.Variants.map((record, index) => (
                            <option key={index} value={record}>{record}</option>
                        ))}
                    </select>
                </div>

                <div style={{marginTop: "50px"}}>
                    <button className="btn btn-outline-danger"><h6 style={{margin: "0", padding: "5px"}}>Download Brochure</h6></button>
                </div>
            </div>

        </div>
        ))}
    </div>

    {features.map((feature, index) => (

        <div key={index} style={{margin: "0 100px 50px"}}>

            <div className="accordion" id="accordionPanelsStayOpenExample">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <span style={{fontSize: "18px"}}>Basic information</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">

                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <i className="fa-regular fa-credit-card"></i>&emsp;<b>Avg. Ex-Showroom Price:</b>&emsp;{feature["Basic Information"]["Avg. Ex-Showroom Price"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%", textAlign: "center"}}>
                                    <i className="fa-solid fa-car"></i>&emsp;<b>Car Type:</b>&emsp;{feature["Basic Information"]["Car Type"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%", textAlign: "end"}}>
                                    <i className="fa-solid fa-palette"></i>&emsp;<b>Colors:</b>&emsp;
                                    {feature["Basic Information"].Colors.map((color, index) => (
                                    <input key={index} className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled style={{backgroundColor: getColor(color), marginRight: "10px"}}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample2">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse2" aria-expanded="true" aria-controls="panelsStayOpen-collapse2">
                        <span style={{fontSize: "18px"}}>Engine</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse2" className="accordion-collapse collapse ">

                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "30%"}}>
                                    <img src="/Icons/speedometer.png" width="5%" alt=""/>&emsp;<b>Mileage:</b>&emsp;{feature["Engine"]["Mileage"]}
                                </div>
                                <div className="col-lg-4" style={{width: "40%"}}>
                                    <img src="/Icons/gearbox.png" width="5%" alt=""/>&emsp;<b>Transmission:</b>&emsp;{feature["Engine"]["Transmission"]}
                                </div>
                                <div className="col-lg-4" style={{width: "30%"}}>
                                    <img src="/Icons/pollution.png" width="5%" alt=""/>&emsp;<b>Emission Standard:</b>&emsp;{feature["Engine"]["Emission Standard"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "30%"}}>
                                    <img src="/Icons/engine.png" width="5%" alt=""/>&emsp;<b>Engine Type:</b>&emsp;{feature["Engine"]["Engine Type"]}
                                </div>
                                <div className="col-lg-4" style={{width: "40%"}}>
                                    <img src="/Icons/fuel.png" width="5%" alt=""/>&emsp;<b>Fuel Type:</b>&emsp;{feature["Engine"]["Fuel Type"]}
                                </div>
                                <div className="col-lg-4" style={{width: "30%"}}>
                                    <img src="/Icons/power.png" width="5%" alt=""/>&emsp;<b>Max Power</b>&emsp;{feature["Engine"]["Max Power"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "30%"}}>
                                    <img src="/Icons/torque.png" width="5%" alt=""/>&emsp;<b>Max Torque</b>&emsp;{feature["Engine"]["Max Torque"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample3">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="true" aria-controls="panelsStayOpen-collapse3">
                        <span style={{fontSize: "18px"}}>Dimensions</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse3" className="accordion-collapse collapse ">

                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/length.png" width="5%" alt=""/>&emsp;<b>Length:</b>&emsp;{feature["Dimensions"]["Length"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/width.png" width="5%" alt=""/>&emsp;<b>Width:</b>&emsp;{feature["Dimensions"]["Width"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/height.png" width="5%" alt=""/>&emsp;<b>Height:</b>&emsp;{feature["Dimensions"]["Height"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/suspension.png" width="5%" alt=""/>&emsp;<b>Wheelbase:</b>&emsp;{feature["Dimensions"]["Wheelbase"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/ground.png" width="5%" alt=""/>&emsp;<b>Ground Clearance:</b>&emsp;{feature["Dimensions"]["Ground Clearance"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample4">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="true" aria-controls="panelsStayOpen-collapse4">
                        <span style={{fontSize: "18px"}}>Capacity</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse4" className="accordion-collapse collapse">

                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/door.png" width="5%" alt=""/>&emsp;<b>Doors:</b>&emsp;{feature["Capacity"]["Doors"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/trunk.png" width="5%" alt=""/>&emsp;<b>Boot Space:</b>&emsp;{feature["Capacity"]["Boot Space"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/row.png" width="5%" alt=""/>&emsp;<b>Number of Rows:</b>&emsp;{feature["Capacity"]["Number of Rows"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/seat.png" width="5%" alt=""/>&emsp;<b>Seating Capacity:</b>&emsp;{feature["Capacity"]["Seating Capacity"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/oil.png" width="5%" alt=""/>&emsp;<b>Fuel Tank:</b>&emsp;{feature["Capacity"]["Fuel Tank"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample5">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="true" aria-controls="panelsStayOpen-collapse5">
                        <span style={{fontSize: "18px"}}>Safety</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse5" className="accordion-collapse collapse">

                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/airbag.png" width="5%" alt=""/>&emsp;<b>Airbags:</b>&emsp;{feature["Safety"]["Airbags"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/baby.png" width="5%" alt=""/>&emsp;<b>Child Seat Anchor Points:</b>&emsp;{feature["Safety"]["Child Seat Anchor Points"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/seat-belt.png" width="5%" alt=""/>&emsp;<b>Seat Belt Warning:</b>&emsp;{feature["Safety"]["Seat Belt Warning"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "50%"}}>
                                    <img src="/Icons/risk.png" width="5%" alt=""/>&emsp;<b>Overspeed Warning:</b>&emsp;{feature["Safety"]["Overspeed Warning"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample6">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse6" aria-expanded="true" aria-controls="panelsStayOpen-collapse6">
                        <span style={{fontSize: "18px"}}>Security</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse6" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/car-rental.png" width="5%" alt=""/>&emsp;<b>Central Locking:</b>&emsp;{feature["Security"]["Central Locking"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/protection.png" width="5%" alt=""/>&emsp;<b>Child Safety Lock:</b>&emsp;{feature["Security"]["Child Safety Lock"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/carkey.png" width="5%" alt=""/>&emsp;<b>Engine Immobiliser:</b>&emsp;{feature["Security"]["Engine Immobiliser"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/deadline.png" width="5%" alt=""/>&emsp;<b>Speed Sensing Door Lock:</b>&emsp;{feature["Security"]["Speed Sensing Door Lock"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="accordion" id="accordionPanelsStayOpenExample7">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse7" aria-expanded="true" aria-controls="panelsStayOpen-collapse7">
                        <span style={{fontSize: "18px"}}>Braking and Traction</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse7" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/disc-brake.png" width="5%" alt=""/>&emsp;<b>ABS:</b>&emsp;{feature["Braking Traction"]["ABS"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/disc.png" width="5%" alt=""/>&emsp;<b>EBD:</b>&emsp;{feature["Braking Traction"]["EBD"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/pedal.png" width="5%" alt=""/>&emsp;<b>Brake Assist:</b>&emsp;{feature["Braking Traction"]["BA"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/mountain.png" width="5%" alt=""/>&emsp;<b>Hill Hold Control:</b>&emsp;{feature["Braking Traction"]["Hill Hold Control"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/drifting.png" width="5%" alt=""/>&emsp;<b>Traction Control:</b>&emsp;{feature["Braking Traction"]["Traction Control"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample8">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse8" aria-expanded="true" aria-controls="panelsStayOpen-collapse8">
                        <span style={{fontSize: "18px"}}>Comfort and Convenience</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse8" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/ac.png" width="5%" alt=""/>&emsp;<b>Front AC:</b>&emsp;{feature["Comfort & Convenience"]["Front AC"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/ac.png" width="5%" alt=""/>&emsp;<b>Rear AC:</b>&emsp;{feature["Comfort & Convenience"]["Rear AC"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/rearmirror.png" width="5%" alt=""/>&emsp;<b>Anti-Glare Mirrors:</b>&emsp;{feature["Comfort & Convenience"]["Anti-Glare Mirrors"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/trunk.png" width="5%" alt=""/>&emsp;<b>Cabin Boot Access:</b>&emsp;{feature["Comfort & Convenience"]["Cabin Boot Access"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/sensor.png" width="5%" alt=""/>&emsp;<b>Parking Sensors:</b>&emsp;{feature["Comfort & Convenience"]["Parking Sensors"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/steering.png" width="5%" alt=""/>&emsp;<b>Steering Adjustments:</b>&emsp;{feature["Comfort & Convenience"]["Steering Adjustments"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/mirror.png" width="5%" alt=""/>&emsp;<b>Vanity Mirrors:</b>&emsp;{feature["Comfort & Convenience"]["Vanity Mirrors"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/outlet.png" width="5%" alt=""/>&emsp;<b>12V Power Outlets:</b>&emsp;{feature["Comfort & Convenience"]["12V Power Outlets"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="accordionPanelsStayOpenExample9">

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse9" aria-expanded="true" aria-controls="panelsStayOpen-collapse9">
                        <span style={{fontSize: "18px"}}>Suspensions, Brakes, Steering and Tyres</span>
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapse9" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/disc.png" width="5%" alt=""/>&emsp;<b>Front Brake Type:</b>&emsp;{feature["Suspensions, Brakes, Steering & Tyres"]["Front Brake Type"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/suspension.png" width="5%" alt=""/>&emsp;<b>Front Suspension:</b>&emsp;{feature["Suspensions, Brakes, Steering & Tyres"]["Front Suspension"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/wheel.png" width="5%" alt=""/>&emsp;<b>Front Tyres:</b>&emsp;{feature["Suspensions, Brakes, Steering & Tyres"]["Front Tyres"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/disc.png" width="5%" alt=""/>&emsp;<b>Rear Brake Type:</b>&emsp;{feature["Suspensions, Brakes, Steering & Tyres"]["Rear Brake Type"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/suspension.png" width="5%" alt=""/>&emsp;<b>Rear Suspension:</b>&emsp;{feature["Suspensions, Brakes, Steering & Tyres"]["Rear Suspension"]}
                                </div>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/wheel .png" width="5%" alt=""/>&emsp;<b>Rear Tyres:</b>&emsp;{feature["Suspensions, Brakes, Steering & Tyres"]["Rear Tyres"]}
                                </div>
                                <br/><br/><br/>
                                <div className="col-lg-4" style={{width: "33%"}}>
                                    <img src="/Icons/steering.png" width="5%" alt=""/>&emsp;<b>Steering Type:</b>&emsp;{feature["Suspensions, Brakes, Steering & Tyres"]["Steering Type"]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    ))}
    
    </> );
}

export default CarDetails;