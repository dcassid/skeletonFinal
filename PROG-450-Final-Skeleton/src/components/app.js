import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import HoverAliens from "./hover-aliens.js";
import HoverLegends from "./hover-legends.js";
import HoverGhosts from "./hover-ghosts.js";
import Name from "./name.js";
import FilterLocations from "./filter.js";

function App() {
  return (
    <>
      <Header />
      <InputTable />
      <FilterLocations />
      <Footer />
      <h2>
        Home page info to be moved
      </h2>
    </>
  );
}

export default App;
