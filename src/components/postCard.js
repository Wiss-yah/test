import React from 'react'
export default function postCard(props) {
    return (
        <div>

                {+props.id===props.post.id && <div> <h4 className="postTitle">{props.post.title}</h4>
                 <h5 className="postBody">{props.post.body}</h5></div>}
                 
        </div>

    )
}
