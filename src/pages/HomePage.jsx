import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch("https://ih-countries-api.herokuapp.com/countries")
            const countriesAPI = await response.json();
            setCountries(countriesAPI);
        }
        getCountries();

    }, [])

    return (
        <>
            {countries.map((country) => (
                <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                    <li>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        {country.name.official}
                    </li>
                </Link>
            ))}
        </>
    )
}

export default HomePage;
