import Car from '../src/Components/Cars';
import Nav from '../src/Components/Nav';
import bg1 from '../src/imgs/Desktop-Model3.jpeg';
import bg2 from '../src/imgs/Desktop-ModelX.jpeg';
import bg3 from '../src/imgs/Desktop-SolarPanels.jpeg';
import bg4 from '../src/imgs/Desktop-SolarRoof.jpeg';
import bg5 from '../src/imgs/Desktop-Accessories.jpg';
const model3 ={
  background:  `url(${bg1})`,
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  

}

const modelx ={
  background:  `url(${bg2})`,
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover"
}


const solarPanel ={
  background:  `url(${bg3})`,
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover"
}

const solarRoof={
  background:  `url(${bg4})`,
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover"
}

const teslaAccessories ={
  background:  `url(${bg5})`,
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover"

}
function App() {
  return (
    <div className="App">
     <Nav></Nav>
      <Car model3={model3} model3Title="Model S" model3info="Order Online for Touchless Delivery"></Car>
      <Car modelx={modelx} modelxTitle="Model X" modelxinfo="Order Online for Touchless Delivery"></Car>
      <Car solarPanel={solarPanel} solarPanelTitle="Solar Panels" solarpanelinfo="Lowest Cost Solar Panels in America"></Car>
      <Car solarRoof={solarRoof} solarRoofTitle="Solar Roof" solarroofinfo="Produce Clean Energy From Your Roof"></Car>
      <Car teslaAccessories={teslaAccessories} teslaAccessoriesTitle="Accessories" accessoriesinfo="Order Online for Touchless Delivery"></Car>

    </div>
  );
}

export default App;
