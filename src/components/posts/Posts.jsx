import { addPost } from "../../store/features/posts";
import Post from "./Post";
import './Posts.scss';
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";

const Posts = () => {
    let posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    let postDivs = posts.map( el => {
        return <Post key={el.message} authorImage={el.authorAvatar} message={el.message}></Post>
    })
    const inputRef = useRef();

    return (
        <div className="posts">
            <div className="posts__add-form">
                <div className="posts__add-form__title">Add Post</div>
                <textarea type="text" ref={inputRef} className="posts__add-form__input" />
                <button onClick={() => dispatch(addPost(inputRef.current.value))} className="posts__add-form__btn">ADD</button>
            </div>
            <div className="posts__list">{postDivs}</div>
        </div>
    )
}

export default Posts;