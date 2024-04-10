import React from 'react';
import axios from 'axios';
import './Car.css';
import "./logo2.png";

function Car() {

    var [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetchData('featured'); // Fetch data when component mounts
    }, []);
    
    var fetchData = async () => {
        try
        {
          var response = await axios.get('http://localhost:3001/cars');
          setData(response.data); // Assuming your API response is an array
        }
        catch (error)
        {
          console.error('Error fetching data:', error);
        }
    };

    const formRef = React.useRef(null);

    const handleClearFilters = () => {
        // Reset form and clear all checkboxes and radio buttons

        formRef.current.reset();
    };

    const handleSubmit = async (event) => {

        console.log("Hi");
        
        const formData = new FormData(event.target);
        
        const filters = {
            category: formData.getAll('category'),
            priceRange: formData.get('priceRange'),
            colors: formData.getAll('color'),
            fuelTypes: formData.getAll('fuel'),
            brands: formData.getAll('brand')
        };

        alert(JSON.stringify(filters));

        formRef.current.reset();
    };

    return ( <>

    <div style={{display: "flex"}}>

        <form ref={formRef} style={{padding: "50px 30px", width: "20%"}} onSubmit={handleSubmit}>
            
            {/* Category */}
            <fieldset>
                <h5 style={{marginBottom: "15px"}}>Category</h5>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" id="suvCheckbox" value="SUV" name="category"/>
                    <label className="form-check-label" htmlFor="suvCheckbox">SUV</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" id="compactSuvCheckbox" value="Compact SUV" name="category"/>
                    <label className="form-check-label" htmlFor="compactSuvCheckbox">Compact SUV</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" id="sedanCheckbox" value="Sedan" name="category"/>
                    <label className="form-check-label" htmlFor="sedanCheckbox">Sedan</label>
                </div>
            </fieldset>

            {/* Price Range */}
            <fieldset>
                <h5 style={{margin: "30px 0 15px"}}>Price Range</h5>
                <div className="form-check">
                    <input className="form-check-input check" type="radio" id="priceRange1" name="priceRange" value="10" />
                    <label className="form-check-label" htmlFor="priceRange1">Less than 10 Lakh</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="radio" id="priceRange2" name="priceRange" value="10-20"/>
                    <label className="form-check-label" htmlFor="priceRange2">10 Lakh - 20 Lakh</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="radio" id="priceRange3" name="priceRange" value="20-30"/>
                    <label className="form-check-label" htmlFor="priceRange3">20 Lakh - 30 Lakh</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="radio" id="priceRange4" name="priceRange" value="30"/>
                    <label className="form-check-label" htmlFor="priceRange4">30 Lakh and Above</label>
                </div>
            </fieldset>

            {/* Color */}
            <fieldset>
                <h5 style={{margin: "30px 0 15px"}}>Color</h5>

                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="red" id="color1" style={{backgroundColor: "red"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="blue" id="color2" style={{backgroundColor: "blue"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="green" id="color3" style={{backgroundColor: "green"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="yellow" id="color4" style={{backgroundColor: "yellow"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="orange" id="color5" style={{backgroundColor: "orange"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="gray" id="color6" style={{backgroundColor: "gray"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="black" id="color7" style={{backgroundColor: "black"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input white" type="checkbox" value="white" id="color8" name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="silver" id="color9" style={{backgroundColor: "silver"}} name="color"/>
                </div>
                <div className="form-check-inline">
                    <input className="form-check-input" type="checkbox" value="gold" id="color10" style={{backgroundColor: "gold"}} name="color"/>
                </div>
            </fieldset>

            {/* Fuel Type */}
            <fieldset>
                <h5 style={{margin: "30px 0 15px"}}>Fuel Type</h5>
                <div className="form-check">
                <input className="form-check-input check" type="checkbox" name="fuel" id="fuel1" value="Petrol"/>
                <label className="form-check-label" htmlFor="fuel1">
                    Petrol
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input check" type="checkbox" name="fuel" id="fuel2" value="Diesel"/>
                <label className="form-check-label" htmlFor="fuel">
                    Diesel
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input check" type="checkbox" name="fuel" id="fuel3" value="Hybrid"/>
                <label className="form-check-label" htmlFor="fuel3">
                    Hybrid
                </label>
            </div>
            </fieldset>

            {/* Brands */}
            <fieldset>
                <h5 style={{margin: "30px 0 15px"}}>Company</h5>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" name="brand" id="brand1" value="Maruti Suzuki"/>
                    <label className="form-check-label" htmlFor="brand1">
                        Maruti Suzuki
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" name="brand" id="brand2" value="Tata"/>
                    <label className="form-check-label" htmlFor="brand2">
                        Tata
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" name="brand" id="brand3" value="Kia"/>
                    <label className="form-check-label" htmlFor="brand3">
                        Kia
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" name="brand" id="brand4" value="Toyota"/>
                    <label className="form-check-label" htmlFor="brand4">
                        Toyota
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input check" type="checkbox" name="brand" id="brand5" value="MG"/>
                    <label className="form-check-label" htmlFor="brand5">
                        MG
                    </label>
                </div>
            </fieldset>

            <div>
                <button type="submit" className="btn btn-outline-success button">Apply</button>
                <button type="button" className="btn btn-outline-danger button" onClick={handleClearFilters}>Clear</button>
            </div>

        </form>
        
        <div style={{padding: "50px", width: "100%"}}>
            <h2 style={{fontFamily: "Montserrat"}}>Explore Vehicles</h2>
            
            <div className="row">
            {data.map((record, index) => (
                <div key={index} className='col-lg-3 col-md-4 col-sm-6 carBox' style={{margin: "15px 0", cursor: "pointer"}}>

                    {/* Change was made here */}
                    
                    <a href={`/cars/${record.CarName}`} style={{textDecoration: "none"}}>
                        <div className="card">
                            <img src={"data:image/jpg;base64," + record.Image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-text" style={{fontWeight: "500"}}>{record.Company} {record.CarName}</h6>
                                <p className="card-text" style={{marginBottom: "5px"}}>₹ {record.Price} Lakh</p>
                                <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="50" style={{position: "relative", height: "25px"}}>
                                    <div className="progress-bar bg-warning" style={{width: String(record.Stars * 9.9) + "%"}}></div>
                                    <img src="/stars.png" alt="" style={{position: "absolute", width: "100%", top: 0}}/>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            ))}
            </div>

        </div>
    </div>

    </> );
}

export default Car;