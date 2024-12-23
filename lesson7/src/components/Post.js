import {useState} from "react";

const Post = ({postInfo}) => {
    const [showBody, setShowBody] = useState(false)

    return (
        <div>
            <h1>{postInfo.title}</h1>
            <button onClick={() => setShowBody(prevState => !prevState)}>more info</button>
            {showBody && <p>{postInfo.body}</p>}
            <p>-------------------</p>
        </div>
    )
}

export default Post;
