import React from 'react';
import Modal from "../../UI/modal/Modal";
import Button from "../../UI/button/Button";
import {useDispatch, useSelector} from "react-redux";

const DeletePostModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.posts.activePost)
    const posts = useSelector(state => state.posts.posts)
    const post = posts.find(post => post.id === active)
    const isDeletePostActive = useSelector(state => state.posts.isDeletePostActive)

    const handleClick = (event) => {
        if (event.target.innerText === "Yes") dispatch({
            type: "SET_POSTS", payload: posts.filter(item => item.id !== post.id)
        })

        dispatch({type: "SET_IS_DELETE_POST_ACTIVE", payload: false})
    }

    return (
        <Modal
            active={isDeletePostActive}
            onClose={() => dispatch({type: "SET_IS_DELETE_POST_ACTIVE", payload: false})}
        >
            <h2 style={{marginBottom: 6}}>Do you really want to delete this card?</h2>
            <Button onClick={(e) => handleClick(e)}>Yes</Button>
            <Button onClick={(e) => handleClick(e)}>No</Button>
        </Modal>
    );
};

export default DeletePostModal;