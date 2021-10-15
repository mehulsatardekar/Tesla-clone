import "../../src/css/cars.css";

const car = (props) => {
  return (
    <>
      <section style={props.model3}>
        <span className="d-flex justify-content-center ft-big-size">
          {props.model3Title}
        </span>
        <span className="d-flex justify-content-center ft-low-size">
          {props.model3info}
        </span>
        <div class="position-absolute top-100 start-50 translate-middle">
          <div class="container">
            <div class="row ">
              <div class="col-12 col-md-6  col-sm-12 col-lg-6 my-3">
              <button type="button" className="btn btn-secondary btn-lg bts">Book now</button>
              </div>
              <div class="col-12 col-md-6  col-sm-12  col-lg-6 my-3">
              <button type="button" className="btn btn-white btn-lg bts">Inventory</button>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section style={props.modelx}>
        <span className="d-flex justify-content-center ft-big-size">
          {props.modelxTitle}
        </span>
        <span className="d-flex justify-content-center ft-low-size">
          {props.modelxinfo}
        </span>
        
        
      </section>

      <section style={props.solarPanel}>
        <span className="d-flex justify-content-center ft-big-size">
          {props.solarPanelTitle}
        </span>
        <span className="d-flex justify-content-center ft-low-size">
          {props.solarpanelinfo}
        </span>
      </section>

      <section style={props.solarRoof}>
        <span className="d-flex justify-content-center ft-big-size">
          {props.solarRoofTitle}
        </span>
        <span className="d-flex justify-content-center ft-low-size">
          {props.solarroofinfo}
        </span>
      </section>

      <section style={props.teslaAccessories}>
        <span className="d-flex justify-content-center ft-big-size">
          {props.teslaAccessoriesTitle}
        </span>
        <span className="d-flex justify-content-center ft-low-size">
          {props.accessoriesinfo}
        </span>
      </section>
    </>
  );
};

export default car;
