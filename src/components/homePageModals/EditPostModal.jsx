import React, {useEffect} from 'react';
import Modal from "../../UI/modal/Modal";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import {useDispatch, useSelector} from "react-redux";

const EditPostModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.posts.activePost)
    const posts = useSelector(state => state.posts.posts)
    const isEditPostActive = useSelector(state => state.posts.isEditPostActive)
    const post = posts.find(post => post.id === active)
    const title = useSelector(state => state.posts.title)
    const body = useSelector(state => state.posts.body)

    useEffect(() => {
        if (post) {
            dispatch({type: "SET_TITLE", payload: post.title})
            dispatch({type: "SET_BODY", payload: post.body})
        }
    }, [isEditPostActive])

    if (post === undefined) return null

    const handleEditArticle = (event) => {
        event.preventDefault()
        dispatch({
            type: "SET_POSTS", payload: posts.map(item => {
                if (item.id === post.id) {
                    item.title = title
                    item.body = body
                    return item
                } else return item
            })
        })
        dispatch({type: "SET_IS_EDIT_POST_ACTIVE", payload: false})
        dispatch({type: "SET_TITLE", payload: ""})
        dispatch({type: "SET_BODY", payload: ""})
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_EDIT_POST_ACTIVE", payload: false})
        dispatch({type: "SET_TITLE", payload: ""})
        dispatch({type: "SET_BODY", payload: ""})
    }

    return (
        <Modal
            active={isEditPostActive}
            onClose={handleCloseModal}
        >
            <h1>Edit Article</h1>
            <hr/>
            <form>
                <Input
                    value={title}
                    onChange={event => dispatch({type: "SET_TITLE", payload: event.target.value})}
                    placeholder='Enter title...'
                />
                <Input
                    value={body}
                    onChange={event => dispatch({type: "SET_BODY", payload: event.target.value})}
                    placeholder='Enter text...'
                />
                <Button
                    disabled={!(title && body)}
                    onClick={(event) => handleEditArticle(event)}
                >Update</Button>
            </form>
        </Modal>
    );
};

export default EditPostModal;