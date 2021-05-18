import React, {Fragment} from 'react';

const Post = (props) =>{
    return(
        <Fragment>
            <div className="post">
                <div className="content">
                    <p className="title">{props.data.body}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Post;