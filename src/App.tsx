import React, { useEffect } from "react";
import OpenSeaDragon from "openseadragon";

function App() {
  useEffect(() => {
    const osd = OpenSeaDragon({
      id: "openseadragon1",
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      showNavigator: true,
      navigatorPosition: "TOP_LEFT",
      showNavigationControl: true,
      tileSources:
        "https://www.imgonline.com.ua/examples/rays-of-light-in-the-sky.jpg",
    });

    // osd.addSimpleImage(require("./images/insure-form.jpg"));
  }, []);

  return (
    <div id="openseadragon1" style={{ width: "800px", height: "600px" }}></div>
  );
}

export default App;
