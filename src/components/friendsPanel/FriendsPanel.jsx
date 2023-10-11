import { useSelector } from 'react-redux'
import './FriendsPanel.scss';
const FriendsPanel = () => {
    const friends = useSelector(state => state.friendsPanel);
    const friendsElements = friends.friends.map(el => {
        return (
            <div key={el.userId} className="friends__user">
                <img src={require(`../../assets/users/avatars/${el.avatar}.jpg`)} alt="" />
            </div>
        )
    });
    return (
        <div className="friends">
            {friendsElements}
        </div>
    )
}

export default FriendsPanel;