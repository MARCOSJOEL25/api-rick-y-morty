import React from "react";

const Character = ({ characters }) => {
  return (
    
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col p-4">
            <div className="card" style={{ width: "180px" }}>
              <img src={item.image} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p>Location: {item.location.name}</p>
                <p>species: {item.species}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Character;
