import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav__header'>
                <div className="nav__header__photo">
                    <img src={require(`../../assets/users/user_bg.jpg`)} alt="" />
                </div>
                <div className="nav__header__links">
                    <button className='nav__header__links__link'></button>
                    <button className='nav__header__links__link'></button>
                    <button className='nav__header__links__link'></button>
                </div>
            </div>
            <div className="nav__links">
                <div><NavLink to="/profile">Profile</NavLink></div>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/friends">Friends</NavLink>
            </div>
            <div className="nav__user-data">
                <div className="nav__user-data__photo">
                    <img src={require(`../../assets/users/avatars/user5.jpg`)} alt="" />
                </div>
                <div className="nav__user-data__fullname">James Spiegel</div>
                <div className="nav__user-data__address">San Francisco, CA</div>
            </div>
        </div>
    )
}

export default Navbar;