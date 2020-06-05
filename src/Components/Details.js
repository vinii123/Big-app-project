import React, { Component } from 'react';
import "./Details.css";

export default class Details extends Component {
    render() {
        return (
          <div className="Deatils-full">
            <div class="icon-bar">
              <a href="#">
                <i>OmpraKash</i>
              </a>
            </div>
            <div className="search-bar">
              <div className="Input1">
                <input
                  type="text"
                  className="myInput1"
                  onkeyup="myFunction()"
                  placeholder="Search Permissions"
                  title="Type in a name"
                />
                <table className="myTable1">
                  <tr className="header1">
                    <th className="header11">Select All</th>
                  </tr>
                  <tr>
                    <td>Travel</td>
                  </tr>
                  <tr>
                    <td>Rule Class</td>
                  </tr>
                  <tr>
                    <td className="active">Travel Police</td>
                  </tr>
                  <tr>
                    <td>Police Violations Reason</td>
                  </tr>
                  <tr>
                    <td>Travel Rule</td>
                  </tr>
                  <tr>
                    <td>Travel Vender Exclusion</td>
                  </tr>
                  <tr>
                    <td>Travel Discount</td>
                  </tr>
                  <tr>
                    <td>Contracts</td>
                  </tr>
                </table>
                <div className="button">
                  <button className="button-active">❮</button>
                  <button className="button2">❯</button>
                </div>
              </div>
              <div className="Input2">
                <input
                  type="text"
                  className="myInput2"
                  onkeyup="myFunction()"
                  placeholder="Search Permissions"
                  title="Type in a name"
                />
                <table className="myTable2">
                  <tr className="header2">
                    <th className="header22">Select All</th>
                  </tr>
                  <tr>
                    <td className="active">Travel Police</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
    }
}
