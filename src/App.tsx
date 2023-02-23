import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts/Posts";
import { PostApi } from "./utils/PostApi";
import { PostsData } from "./interfaces/PostsData";
import { CommentsData } from "./interfaces/CommentsData";
import { CommentsApi } from "./utils/CommentsApi";
import Comments from "./components/Comments/Comments";

function App() {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [comments, setComments] = useState<CommentsData[]>([]);

  useEffect(() => {
    PostApi().then((res) => {
      setPosts(res);
    });
    CommentsApi().then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <div className='App'>
      <div className='container d-flex flex-wrap'>
        {posts.map((post) => {
          return <Posts key={post.id} post={post} />;
        })}

        {/* <div>
          {comments.map((comment) => {
            return <Comments key={comment.id} comment={comment} />;
          })}
        </div> */}
      </div>
    </div>
  );
}

export default App;
