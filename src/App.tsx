import React, { useEffect, useState } from 'react';
import OpenSeaDragon, { Point } from 'openseadragon';
import { Button } from '@mui/material';

function App() {
  const [sea, setSea] = useState<any>();
  useEffect(() => {
    console.log('test');
    const _sea = OpenSeaDragon({
      id: 'view',
      prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
      // showNavigator: true,
      // navigatorPosition: 'TOP_LEFT',
      // showNavigationControl: true,
      tileSources: {
        type: 'image',
        url: require('./images/insure-form.jpg'),
        // buildPyramid: false,
      },
    });

    setSea(_sea);

    // osd.addSimpleImage(require("./images/insure-form.jpg"));
  }, []);

  const targetX = 0.1; // X-coordinate (horizontal position between 0 and 1)
  const targetY = 0.35; // Y-coordinate (vertical position between 0 and 1)

  const zoomToCoordinates = (x = 0, y = 0, zoom = 0) => {
    sea.viewport.goHome(); //reset
    const viewport = sea.viewport;
    const zoomLevel = viewport.getZoom();

    const newZoomLevel = zoomLevel * zoom;
    const newCenter = new Point(x, y);

    viewport.zoomTo(newZoomLevel, null, true);
    viewport.panTo(newCenter, true, { springStiffness: 5, animationTime: 7 });
  };

  return (
    <>
      <div id='view' style={{ width: '800px', height: '600px' }}></div>

      <div style={{ marginTop: '100px' }}>
        <Button onClick={() => zoomToCoordinates(0.1, 0.35, 3)}>Name</Button>
        <Button onClick={() => zoomToCoordinates(0.1, 0.39, 9)}>Sex</Button>
      </div>
    </>
  );
}

export default App;
