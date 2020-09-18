import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post'
import { db } from './firebase'

function App() {
  const [posts, setPosts] = useState( [] )

  // useEffect -> runs code based on a specific condition

  useEffect(() => {
    //this code will run
    db.collection('posts').onSnapshot(snapshot => {
      //everytime a new post is added run this code
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

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
