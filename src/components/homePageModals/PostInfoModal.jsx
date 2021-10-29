import React from 'react';
import Modal from "../../UI/modal/Modal";
import {useDispatch, useSelector} from "react-redux";

const PostInfoModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.posts.activePost)
    const posts = useSelector(state => state.posts.posts)
    const isPostInfoActive = useSelector(state => state.posts.isPostInfoActive)
    const post = posts.find(post => post.id === active)

    if (post === undefined) return null

    return (
        <Modal
            active={isPostInfoActive}
            onClose={() => dispatch({type: "SET_IS_POST_INFO_ACTIVE", payload: false})}
        >
            <h1>Article info</h1>
            <hr/>
            <h2 style={{margin: "4px 0 2px"}}>{post.title}</h2>
            <p>{post.body}</p>
        </Modal>
    );
};

export default PostInfoModal;