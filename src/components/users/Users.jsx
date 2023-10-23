import { Component } from "react";
import User from "./User";
import './Users.scss';

class Users extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }
  paginate(page) {
    this.props.setCurrentPage(page);
    this.props.updateUsers();
  }
  render() {
    let usersElements = this.props.users.map(el => <User isUserAuth={this.props.isUserAuth} userInfo={el} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} key={el.id}></User>);
    let paginationElements = [];
    for (let i = 1; i <= this.props.pagesCount; i++) {
      let element = <button key={i} onClick={() => this.paginate(i)} className={this.props.currentPage === i ? 'active' : ''}>{i}</button>
      paginationElements.push(element)
    }
    return (
      <div className="users">
        <div className="users__list">{usersElements}</div>
        <div className="users__pagination">{paginationElements}</div>
      </div>
    );
  }
}
export default Users;
