import React from "react";

import "./Characteristic.css";

function Characteristic(props) {
  return (
    <td className="characteristic">
      <table>
        <tr>
          <th>{props.text}</th>
          <td rowSpan="2">
            <input id="str" type="text" className="main-value" />
          </td>
          <tr>
            <input id="str" type="text" className="secondary-value" />
          </tr>
          <tr>
            <input id="str" type="text" className="secondary-value" />
          </tr>
        </tr>
      </table>
    </td>
  );
}

export default Characteristic;
