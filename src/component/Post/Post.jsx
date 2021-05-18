import React, {Fragment} from 'react';

const Post = (props) =>{
    return(
        <Fragment>
            <div className="post">
                <div className="content">
                    <p className="title">{props.data.body}</p>
                    <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                </div>
            </div>
        </Fragment>
    )
}

export default Post;