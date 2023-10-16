import { Component } from "react";
import axios from 'axios';
import User from "./User";
import './Users.scss';

class Users extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      let users = res.data;
      this.props.loadUsers(users);
    })
  }
  render() {
    let usersElements = this.props.users.map(el => <User userInfo={el} key={el.id}></User>);
    return (
      <div className="users">
        <div className="users__list">{usersElements}</div>
      </div>
    );
  }
}
export default Users;
