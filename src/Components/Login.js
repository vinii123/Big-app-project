import React, { Component } from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
  componentDidMount() {
    this.fetchApi();
  }
  fetchApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userData = response.data;
        this.setState({ userData });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userData } = this.state;

    return (
      <div className="log">
        <div className="search-container">
          <input type="search" placeholder="Search" className="loginput" />
        </div>
        <div className="table-container">
          <table>
            <tr>
              <th>FULL NAME</th>
              <th>PHONE</th>
              <th>USER NAME</th>
              <th>COMPANY NAME</th>
            </tr>
            {userData.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="bottom">
          <div className="custom-select">
            <div className="select-para">
              <p>Items</p>
            </div>
            <div className="select-down">
              <select>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
              </select>
            </div>
          </div>
          <div className="pagination">
            <a>&laquo;</a>
            <a >❮</a>
            <a  className="active">
              1
            </a>
            <a >❯</a>
            <a >&raquo;</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
