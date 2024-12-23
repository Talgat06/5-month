import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postsSlice";
import Post from "../../components/Post";


const PostsPage = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.postsReducer)

    const getPostsFunc = () => {
        dispatch(getPosts())
    }

    return (
        <div>
            <button onClick={getPostsFunc}>get posts</button>
            <button>delete all</button>

            {posts.map(post => <Post key={post.id} postInfo={post}

            />)}
        </div>
    )
}

export default PostsPage;
