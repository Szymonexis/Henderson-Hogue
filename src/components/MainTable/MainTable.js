import React from "react";

import Characteristic from "../Characteristic/Characteristic";

import image from "../../images/federal_agent_noir.png";
import "./MainTable.css";

const MainTable = () => {
  return (
    <React.Fragment>
      <div className="root">
        <div className="characteristics">
          <h2>Characteristics</h2>
          <table className="main-table">
            <tr>
              <Characteristic text="STR" />
              <Characteristic text="CON" />
              <Characteristic text="SIZ" />
            </tr>
            <tr>
              <Characteristic text="DEX" />
              <Characteristic text="APP" />
              <Characteristic text="INT" />
            </tr>
            <tr>
              <Characteristic text="POW" />
              <Characteristic text="EDU" />
              <Characteristic text="MOV" />
            </tr>
          </table>
        </div>
        <div className="agent-image">
          <img src={image} alt="henderson hogue" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainTable;
