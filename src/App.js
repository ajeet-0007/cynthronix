
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import OurWork from "./Components/OurWork/OurWork"
import Service from "./Components/Services/Service";
import Company from "./Components/Company/Company";
import Career from "./Components/Career/Career";
import ContactUs from "./Components/ContactUs/ContactUs";
import ResNavbar from "./Components/Navbar/ResNavbar";




function App() {
  return (
      <>
          
          <div className="App">
              
                  <Routes>
                      <Route path="/" element={<SharedLayout></SharedLayout>}>
                          <Route index element={<OurWork></OurWork>}></Route>
                          <Route
                              path="services"
                              element={<Service></Service>}
                          ></Route>
                          <Route
                              path="company"
                              element={<Company></Company>}
                          ></Route>
                          <Route
                              path="career"
                              element={<Career></Career>}
                          ></Route>
                          <Route
                              path="contact-us"
                              element={<ContactUs></ContactUs>}
                          ></Route>
                      </Route>
                  </Routes>
             
          </div>
      </>
  );
}

export default App;
