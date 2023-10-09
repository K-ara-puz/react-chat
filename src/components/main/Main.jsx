import Post from '../posts/Post';
import './Main.css';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__text'>This is Main div</div>
            <Post name='testPost'></Post>
            <Post name='testPost2'></Post>
            <Post name='testPost3'></Post>
            <Post name='testPost4'></Post>
        </div>
    )
}

export default Main;