import React from "react";
import numeral from "numeral";

import "./Table.css";

export const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map(({ country, cases }, index) => (
        <tr>
          <td>{`${++index}. ${country}`}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
