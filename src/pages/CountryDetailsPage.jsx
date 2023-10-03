import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {  v4 as uuidv4 } from 'uuid'

function CountryDetails() {
    const [selectedCountry, setCountry] = useState(null);
    const { countryId } = useParams();

    useEffect(() => {
        const getCountry = async () => {
            const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
            const selectedCountryAPI = await response.json();
            setCountry(selectedCountryAPI);
        }
        getCountry();
  
    }, [countryId])

    console.log(selectedCountry)

    return (
        <div>
            {
                selectedCountry ?
                    (<>
                        <h1>
                            Name: {selectedCountry.name.official}
                        </h1>
                        <h1>
                            Capital: {selectedCountry.capital}
                        </h1>
                        <h1>
                            Capital: {selectedCountry.area} km²
                        </h1>
                        <ul>
                            {selectedCountry.borders.map((border) => (
                                <Link key={uuidv4()} to={`/${border}`} >
                                    <li >
                                        {border}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </>)
                    : (<h1>LOADING...</h1>)
            }
        </div>
    )
}

export default CountryDetails;
