import React, {useEffect, useState} from 'react';
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

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setBody(post.body)
        }
    }, [isEditPostActive])

    if (post === undefined) return null

    const handleEditArticle = (event) => {
        event.preventDefault()
        dispatch({
            type: "SET_POSTS", payload: posts.map(item => {
                if (item.id === post.id) {
                    return {...item, title, body}
                } else return item
            })
        })
        dispatch({type: "SET_IS_EDIT_POST_ACTIVE", payload: false})
        setTitle(post.title)
        setBody(post.body)
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_EDIT_POST_ACTIVE", payload: false})
        setTitle(post.title)
        setBody(post.body)
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
                    onChange={event => setTitle(event.target.value)}
                    placeholder='Enter title...'
                />
                <Input
                    value={body}
                    onChange={event => setBody(event.target.value)}
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