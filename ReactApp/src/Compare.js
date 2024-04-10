import React from 'react';
import axios from 'axios';

function Compare()
{

    var [data, setData] = React.useState([]);
    var [car1Deatils, setCar1] = React.useState([]);
    var [car1BI, setCar1BI] = React.useState([]);
    var [car1Eng, setCar1Eng] = React.useState([]);
    var [car1Dim, setCar1Dim] = React.useState([]);
    var [car1Cap, setCar1Cap] = React.useState([]);
    var [car1Saf, setCar1Saf] = React.useState([]);
    var [car1Sec, setCar1Sec] = React.useState([]);
    var [car1BT, setCar1BT] = React.useState([]);
    var [car1CC, setCar1CC] = React.useState([]);
    var [car1SBST, setCar1SBST] = React.useState([]);     
    

    // var [car1Deatils, setCar1] = React.useState([]);

    var [car2Deatils, setCar2] = React.useState([]);
    var [car2BI, setCar2BI] = React.useState([]);
    var [car2Eng, setCar2Eng] = React.useState([]);
    var [car2Dim, setCar2Dim] = React.useState([]);
    var [car2Cap, setCar2Cap] = React.useState([]);
    var [car2Saf, setCar2Saf] = React.useState([]);
    var [car2Sec, setCar2Sec] = React.useState([]);
    var [car2BT, setCar2BT] = React.useState([]);
    var [car2CC, setCar2CC] = React.useState([]);
    var [car2SBST, setCar2SBST] = React.useState([]);    

    React.useEffect(() => {
        fetchData(); // Fetch data when component mounts
        compare();
    },[]);

    const fetchData = async () => {

        var response = await axios.get('http://localhost:3001/cars');
        setData(response.data);
    };

    const compare = async () => {
        var car1Name = document.getElementById('car1').value;
        var car2Name = document.getElementById('car2').value;

        if(car1Name === "" && car2Name === "")
        {
            car1Name = "Grand Vitara Delta Smart Hybrid AT";
            car2Name = "Grand Vitara Delta Smart Hybrid AT";
        }

        try
        {
            var car1 = await axios.get('http://localhost:3001/features/' + car1Name);
            setCar1(car1.data[0]);
            setCar1BI(car1.data[0]["Basic Information"]);
            setCar1Eng(car1.data[0]["Engine"]);
            setCar1Dim(car1.data[0]["Dimensions"]);
            setCar1Cap(car1.data[0]["Capacity"]);
            setCar1Saf(car1.data[0]["Safety"]);
            setCar1Sec(car1.data[0]["Security"]);
            setCar1BT(car1.data[0]["Braking Traction"]);
            setCar1CC(car1.data[0]["Comfort & Convenience"]);
            setCar1SBST(car1.data[0]["Suspensions, Brakes, Steering & Tyres"]);

            var car2 = await axios.get('http://localhost:3001/features/' + car2Name);
            setCar2(car2.data[0]);
            setCar2BI(car2.data[0]["Basic Information"]);
            setCar2Eng(car2.data[0]["Engine"]);
            setCar2Dim(car2.data[0]["Dimensions"]);
            setCar2Cap(car2.data[0]["Capacity"]);
            setCar2Saf(car2.data[0]["Safety"]);
            setCar2Sec(car2.data[0]["Security"]);
            setCar2BT(car2.data[0]["Braking Traction"]);
            setCar2CC(car2.data[0]["Comfort & Convenience"]);
            setCar2SBST(car2.data[0]["Suspensions, Brakes, Steering & Tyres"]);
        }
        catch(e)
        {
            console.log(e);
        }
    };

    return ( <>
    
        <div style={{padding: "50px 80px"}}>
            <h2 style={{fontFamily: "Montserrat"}}>Compare Cars</h2>

            <br/>

            <label htmlFor="car1" className="form-label">Select 1st Car</label>
            <select className="form-select" aria-label="Default select example" id="car1">

                {data.map((record,index) => (

                    <>
                    <option value={`${record.CarName} ${record.Variants[0]}`}>{record.CarName} {record.Variants[0]}</option>
                    <option value={`${record.CarName} ${record.Variants[1]}`}>{record.CarName} {record.Variants[1]}</option>
                    </>

                ))}

            </select>
            
            <br/>

            <label htmlFor="car2" className="form-label">Select 2nd Car</label>
            <select className="form-select" aria-label="Default select example" id="car2">

                {data.map((record,index) => (

                    <>
                    <option value={`${record.CarName} ${record.Variants[0]}`}>{record.CarName} {record.Variants[0]}</option>
                    <option value={`${record.CarName} ${record.Variants[1]}`}>{record.CarName} {record.Variants[1]}</option>
                    </>

                ))}

            </select>

            <div style={{marginTop: "30px", textAlign: "end"}}>
                <button className="btn btn-outline-secondary" style={{pading: "5px", fontSize: "13px"}} onClick={compare}>Compare</button>
            </div>

            <div className="row" style={{marginTop: "30px"}}>

                <div className="col-lg-6" style={{padding: "20px"}}>

                    <div style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
                        <img src="./carCompare2.jpg" alt="" width="70%"></img>
                    </div>

                    <p><b>Model Name:</b> {car1Deatils["Model Name"]}</p>
                    <p><b>Car Type:</b> {car1BI["Car Type"]}</p>
                    <p><b>Avg. Ex-Showroom Price:</b> {car1BI["Avg. Ex-Showroom Price"]}</p>

                    <div className="accordion" id="accordionPanelsStayOpenExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <span style={{fontSize: "18px"}}>Engine</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Mileage:</b> {car1Eng["Mileage"]}</p>
                                    <p><b>Transmission:</b> {car1Eng["Transmission"]}</p>
                                    <p><b>Emission Standard:</b> {car1Eng["Emission Standard"]}</p>
                                    <p><b>Engine Type:</b> {car1Eng["Engine Type"]}</p>
                                    <p><b>Fuel Type:</b> {car1Eng["Fuel Type"]}</p>
                                    <p><b>Max Power:</b> {car1Eng["Max Power"]}</p>
                                    <p><b>Max Torque:</b> {car1Eng["Max Power"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion2">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne2">
                                <span style={{fontSize: "18px"}}>Dimensions</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne2" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Length:</b> {car1Dim["Length"]}</p>
                                    <p><b>Width:</b> {car1Dim["Width"]}</p>
                                    <p><b>Height:</b> {car1Dim["Height"]}</p>
                                    <p><b>Wheelbase:</b> {car1Dim["Wheelbase"]}</p>
                                    <p><b>Ground Clearance:</b> {car1Dim["Ground Clearance"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion3">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne3" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne3">
                                <span style={{fontSize: "18px"}}>Capacity</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne3" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Doors:</b> {car1Cap["Doors"]}</p>
                                    <p><b>Boot Space:</b> {car1Cap["Boot Space"]}</p>
                                    <p><b>Fuel Tank:</b> {car1Cap["Fuel Tank"]}</p>
                                    <p><b>Number of Rows:</b> {car1Cap["Number of Rows"]}</p>
                                    <p><b>Seating Capacity:</b> {car1Cap["Seating Capacity"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion4">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne4 ">
                                <span style={{fontSize: "18px"}}>Safety</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne4" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Airbags:</b> {car1Saf["Airbags"]}</p>
                                    <p><b>Child Seat Anchor Points:</b> {car1Saf["Child Seat Anchor Points"]}</p>
                                    <p><b>Overspeed Warning:</b> {car1Saf["Overspeed Warning"]}</p>
                                    <p><b>Seat Belt Warning:</b> {car1Saf["Seat Belt Warning"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion5">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne5" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne5">
                                <span style={{fontSize: "18px"}}>Security</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne5" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Central Locking:</b> {car1Sec["Central Locking"]}</p>
                                    <p><b>Child Safety Lock:</b> {car1Sec["Child Safety Lock"]}</p>
                                    <p><b>Engine Immobiliser:</b> {car1Sec["Engine Immobiliser"]}</p>
                                    <p><b>Speed Sensing Door Lock:</b> {car1Sec["Speed Sensing Door Lock"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion6">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne6" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne6">
                                <span style={{fontSize: "18px"}}>Bracking and Traction</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne6" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>ABS:</b> {car1BT["ABS"]}</p>
                                    <p><b>EBD:</b> {car1BT["EBD"]}</p>
                                    <p><b>BA:</b> {car1BT["BA"]}</p>
                                    <p><b>Hill Hold Control:</b> {car1BT["Hill Hold Control"]}</p>
                                    <p><b>Traction Control:</b> {car1BT["Traction Control"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion7">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne7" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne7">
                                <span style={{fontSize: "18px"}}>Comfort and Convenience</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne7" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>12V Power Outlets:</b> {car1CC["12V Power Outlets"]}</p>
                                    <p><b>Anti-Glare Mirrors:</b> {car1CC["Anti-Glare Mirrors"]}</p>
                                    <p><b>Cabin Boot Access:</b> {car1CC["Cabin Boot Access"]}</p>
                                    <p><b>Front AC:</b> {car1CC["Front AC"]}</p>
                                    <p><b>Parking Sensors:</b> {car1CC["Parking Sensors"]}</p>
                                    <p><b>Rear AC:</b> {car1CC["Rear AC"]}</p>
                                    <p><b>Steering Adjustments:</b> {car1CC["Steering Adjustments"]}</p>
                                    <p><b>Vanity Mirrors:</b> {car1CC["Vanity Mirrors"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion8">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne8" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne8">
                                <span style={{fontSize: "18px"}}>Suspensions, Brakes, Steering and Tyres</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne8" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Front Brake Type:</b> {car1SBST["Front Brake Type"]}</p>
                                    <p><b>Front Suspension:</b> {car1SBST["Front Suspension"]}</p>
                                    <p><b>Front Tyres:</b> {car1SBST["Front Tyres"]}</p>
                                    <p><b>Rear Brake Type:</b> {car1SBST["Rear Brake Type"]}</p>
                                    <p><b>Rear Suspension:</b> {car1SBST["Rear Suspension"]}</p>
                                    <p><b>Rear Tyres:</b> {car1SBST["Rear Tyres"]}</p>
                                    <p><b>Steering Type:</b> {car1SBST["Steering Type"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6" style={{padding: "20px"}}>

                    <div style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
                        <img src="./carCompare1.jpg" alt="" width="70%"></img>
                    </div>

                    <p><b>Model Name:</b> {car2Deatils["Model Name"]}</p>
                    <p><b>Car Type:</b> {car2BI["Car Type"]}</p>
                    <p><b>Avg. Ex-Showroom Price:</b> {car2BI["Avg. Ex-Showroom Price"]}</p>

                    <div className="accordion" id="accordionPanelsStayOpenExample">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <span style={{fontSize: "18px"}}>Engine</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Mileage:</b> {car2Eng["Mileage"]}</p>
                                    <p><b>Transmission:</b> {car2Eng["Transmission"]}</p>
                                    <p><b>Emission Standard:</b> {car2Eng["Emission Standard"]}</p>
                                    <p><b>Engine Type:</b> {car2Eng["Engine Type"]}</p>
                                    <p><b>Fuel Type:</b> {car2Eng["Fuel Type"]}</p>
                                    <p><b>Max Power:</b> {car2Eng["Max Power"]}</p>
                                    <p><b>Max Torque:</b> {car2Eng["Max Power"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion2">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne2">
                                <span style={{fontSize: "18px"}}>Dimensions</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne2" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Length:</b> {car2Dim["Length"]}</p>
                                    <p><b>Width:</b> {car2Dim["Width"]}</p>
                                    <p><b>Height:</b> {car2Dim["Height"]}</p>
                                    <p><b>Wheelbase:</b> {car2Dim["Wheelbase"]}</p>
                                    <p><b>Ground Clearance:</b> {car2Dim["Ground Clearance"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion3">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne3" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne3">
                                <span style={{fontSize: "18px"}}>Capacity</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne3" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Doors:</b> {car2Cap["Doors"]}</p>
                                    <p><b>Boot Space:</b> {car2Cap["Boot Space"]}</p>
                                    <p><b>Fuel Tank:</b> {car2Cap["Fuel Tank"]}</p>
                                    <p><b>Number of Rows:</b> {car2Cap["Number of Rows"]}</p>
                                    <p><b>Seating Capacity:</b> {car2Cap["Seating Capacity"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion4">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne4 ">
                                <span style={{fontSize: "18px"}}>Safety</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne4" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Airbags:</b> {car2Saf["Airbags"]}</p>
                                    <p><b>Child Seat Anchor Points:</b> {car2Saf["Child Seat Anchor Points"]}</p>
                                    <p><b>Overspeed Warning:</b> {car2Saf["Overspeed Warning"]}</p>
                                    <p><b>Seat Belt Warning:</b> {car2Saf["Seat Belt Warning"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion5">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne5" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne5">
                                <span style={{fontSize: "18px"}}>Security</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne5" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Central Locking:</b> {car2Sec["Central Locking"]}</p>
                                    <p><b>Child Safety Lock:</b> {car2Sec["Child Safety Lock"]}</p>
                                    <p><b>Engine Immobiliser:</b> {car2Sec["Engine Immobiliser"]}</p>
                                    <p><b>Speed Sensing Door Lock:</b> {car2Sec["Speed Sensing Door Lock"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion6">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne6" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne6">
                                <span style={{fontSize: "18px"}}>Security</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne6" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>ABS:</b> {car2BT["ABS"]}</p>
                                    <p><b>EBD:</b> {car2BT["EBD"]}</p>
                                    <p><b>BA:</b> {car2BT["BA"]}</p>
                                    <p><b>Hill Hold Control:</b> {car2BT["Hill Hold Control"]}</p>
                                    <p><b>Traction Control:</b> {car2BT["Traction Control"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion7">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne7" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne7">
                                <span style={{fontSize: "18px"}}>Comfort and Convenience</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne7" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>12V Power Outlets:</b> {car2CC["12V Power Outlets"]}</p>
                                    <p><b>Anti-Glare Mirrors:</b> {car2CC["Anti-Glare Mirrors"]}</p>
                                    <p><b>Cabin Boot Access:</b> {car2CC["Cabin Boot Access"]}</p>
                                    <p><b>Front AC:</b> {car2CC["Front AC"]}</p>
                                    <p><b>Parking Sensors:</b> {car2CC["Parking Sensors"]}</p>
                                    <p><b>Rear AC:</b> {car2CC["Rear AC"]}</p>
                                    <p><b>Steering Adjustments:</b> {car2CC["Steering Adjustments"]}</p>
                                    <p><b>Vanity Mirrors:</b> {car2CC["Vanity Mirrors"]}</p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion" id="accordion8">

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button style={{backgroundColor: "#f1f1f1", color: "black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne8" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne8">
                                <span style={{fontSize: "18px"}}>Suspensions, Brakes, Steering and Tyres</span>
                            </button>
                            </h2>
                            
                            <div id="panelsStayOpen-collapseOne8" className="accordion-collapse collapse">

                                <div className="accordion-body">
                                    <p><b>Front Brake Type:</b> {car2SBST["Front Brake Type"]}</p>
                                    <p><b>Front Suspension:</b> {car2SBST["Front Suspension"]}</p>
                                    <p><b>Front Tyres:</b> {car2SBST["Front Tyres"]}</p>
                                    <p><b>Rear Brake Type:</b> {car2SBST["Rear Brake Type"]}</p>
                                    <p><b>Rear Suspension:</b> {car2SBST["Rear Suspension"]}</p>
                                    <p><b>Rear Tyres:</b> {car2SBST["Rear Tyres"]}</p>
                                    <p><b>Steering Type:</b> {car2SBST["Steering Type"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>

            </div>
        </div>

    </> );
}

export default Compare;