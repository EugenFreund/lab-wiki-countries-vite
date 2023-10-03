import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:countryId" element={<CountryDetails/>}/>

        <Route path="*" element={<><h1>404 Page not found</h1></>}/>

      </Routes>
    </div>
  );
}

export default App;
