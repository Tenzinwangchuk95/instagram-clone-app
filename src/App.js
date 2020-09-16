import React, { useState } from 'react';
import './App.css';
import Post from './Post'

function App() {
  const [posts, setPosts] = useState( [
    {
      username: "Lee Sin",
      caption: "wow",
      imageUrl: "https://1.bp.blogspot.com/-wUE3l7EU5uc/X2ERlPjOcaI/AAAAAAABsRM/YGGVbtnmTa4WrgFgbKfQpTrlsecT9DIUwCLcBGAsYHQ/s640/64031.jpg"
    },
    {
      username: "Lee Sin",
      caption: "wow",
      imageUrl: "https://1.bp.blogspot.com/-wUE3l7EU5uc/X2ERlPjOcaI/AAAAAAABsRM/YGGVbtnmTa4WrgFgbKfQpTrlsecT9DIUwCLcBGAsYHQ/s640/64031.jpg"
    }
  ] )

  return (
    <div className="app">
      

      <div className="app__header">
        <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Welcome to the instagram clone</h1>

      {
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      {/* post */}
      {/* post */}

    </div>
  );
}

export default App;
