import './Post.css';
const Post = (props) => {
    return (
        <div className='post'>
            <div className='post__author'>
                <img src={require(`../../assets/users/avatars/${props.authorImage}.jpg`)} alt="" />
            </div>
            <div className="post__message">
                {props.message}
            </div>
        </div>
    )
}

export default Post;