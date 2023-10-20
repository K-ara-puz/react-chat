import Post from "./Post";
import './Posts.scss';
import { useSelector } from "react-redux";
import AddPostForm from "../forms/AddPostForm";

const Posts = () => {
    let posts = useSelector((state) => state.posts);

    let postDivs = posts.map( el => {
        return <Post key={el.message} authorImage={el.authorAvatar} message={el.message}></Post>
    })

    return (
        <div className="posts">
            <AddPostForm></AddPostForm>
            <div className="posts__list">{postDivs}</div>
        </div>
    )
}

export default Posts;