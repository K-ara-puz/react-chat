import Post from "./Post";
import './Posts.scss';
import { useSelector } from "react-redux";

const Posts = () => {
    let posts = useSelector((state) => state.posts);
    console.log(posts)
    let postDivs = posts.map( el => {
        return <Post key={el.message} authorImage={el.authorAvatar} message={el.message}></Post>
    })
    return (
        <div className="posts">
            <div className="posts__add-form">
                <div className="posts__add-form__title">Add Post</div>
                <textarea type="text" className="posts__add-form__input" />
                <button className="posts__add-form__btn">ADD</button>
            </div>
            <div>{postDivs}</div>
        </div>
    )
}

export default Posts;