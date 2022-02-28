import React from "react";
import { connect } from "react-redux";
import { pickedLocation } from "../actions/facilityActions";


const LocationSelect = props => {
  // useEffect(() => {}, [props.locations, props.pickedLocation]);

    return (
      <div className="container">
        <nav className="location-select__container">
          <label className="location-select__label" htmlFor="location-selector">
            Change Facility Location
          </label>
          <select
            id="location-selector"
            className="location-select__select"
            onChange={(event) => props.pickedLocation(event.target.value)}
          >
            <option className="location-select__option" value="all" key='all'>
              View All
            </option>
            {props.locations.map(({ id, name }) => <option key={id} className="location-select__option" value={id}>
              {name}
            </option>)}

          </select>
        </nav>
      </div>
    );

};

const mapStateToProps = state => ({
  locations: state.facilities.list.locations? state.facilities.list.locations:[],
  pickedLocation: state.facilities.list.pickedLocation
});

// const mapDispatchToProps = (dispatch) => {
//   const dispatchFunction = (value) => dispatch(pickedLocation(value))
// return{
//   dispatchFunction: dispatchFunction
// }};

const mapDispatchToProps = (dispatch) => ({
  pickedLocation: (value) => dispatch(pickedLocation(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocationSelect);
