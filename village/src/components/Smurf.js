import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <div className="card">
        <span onClick={e => props.deleteSmurf(e, props.id)}>x</span>
      </div>

      <div className="info">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
