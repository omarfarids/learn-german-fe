import Nav from "components/Nav";
import Footer from "components/Footer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "routes/RoutesConfig";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouterConfig />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
