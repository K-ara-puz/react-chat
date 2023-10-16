import { Component } from "react";
import axios from 'axios';
import User from "./User";
import './Users.scss';
import PreloaderContainer from "../preloader/PreloaderContainer";

class Users extends Component {
  componentDidMount() {
    this.loadUsers(true);
  }
  loadUsers(isAtFirst) {
    let queryStringAtFirst = `https://social-network.samuraijs.com/api/1.0/users`;
    let queryStringWithParams = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.elemsOnPage}&page=${this.props.currentPage}`;
    let resStr = isAtFirst === true ? queryStringAtFirst : queryStringWithParams;
    if (isAtFirst) {
      this.props.setIsFetching(true)
      axios.get(`${resStr}`, {headers: {'API-KEY': '7ad0e3af-5c84-49d8-a35d-4a430857aed1'}, withCredentials: true}).then(res => {
        let elemsCount = res.data.items.length;
        let pagesCount = elemsCount / this.props.elemsOnPage;
        let users = [...res.data.items];
        users = users.slice(0, this.props.elemsOnPage);
        this.props.loadUsers(users);
        this.props.setPagesCount(pagesCount);
        setTimeout(() => {
          this.props.setIsFetching(false);
        }, 2000)
      })
    } else {
      this.props.setIsFetching(true);
      axios.get(`${resStr}`, {headers: {'API-KEY': '7ad0e3af-5c84-49d8-a35d-4a430857aed1'}, withCredentials: true}).then(res => {
        let users = [...res.data.items];
        this.props.loadUsers(users);
        this.props.setIsFetching(false);
      })
    }
  }
  async paginate(page) {
    await this.props.setCurrentPage(page);
    this.loadUsers();
  }
  followUser = async (action) => {
      await this.props.followUser(action);
      this.loadUsers(false)
  }
  unfollowUser = async (action) => {
      await this.props.followUser(action);
      this.loadUsers(false)
  }
  render() {
    let usersElements = this.props.users.map(el => <User userInfo={el} followUser={this.followUser} unfollowUser={this.unfollowUser} key={el.id}></User>);
    let paginationElements = [];
    for (let i = 1; i <= this.props.pagesCount; i++) {
      let element = <button key={i} onClick={() => this.paginate(i)} className={this.props.currentPage === i ? 'active' : ''}>{i}</button>
      paginationElements.push(element)
    }
    return (
      <div className="users">
        {this.props.isFetching === true ? <PreloaderContainer></PreloaderContainer> : null}
        <div className="users__list">{usersElements}</div>
        <div className="users__pagination">{paginationElements}</div>
      </div>
    );
  }
}
export default Users;
