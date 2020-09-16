import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className= "post">
            <div className= "post__header">
               <Avatar
                className="post__avatar"
                alt="Lee Sin"
                src="/static/images/avatar/1.jpg"
                />
            <h3>Username</h3> 
            </div>
            
            {/*header - avatar -username */}
            
            <img 
                className="post__image"
                src= "https://1.bp.blogspot.com/-wUE3l7EU5uc/X2ERlPjOcaI/AAAAAAABsRM/YGGVbtnmTa4WrgFgbKfQpTrlsecT9DIUwCLcBGAsYHQ/s640/64031.jpg"
                alt=""/>
            {/*image */}
            
            <h4 className= "post__text" ><strong>Lee Sin:</strong> New Skin!</h4>
            {/* username caption */}
        </div>
    )
}

export default Post
