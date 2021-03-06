import React, {useState} from 'react';
import Modal from "../../UI/modal/Modal";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {uploadPost} from "../../store/thunk";

const AddPostModal = () => {
    const dispatch = useDispatch()
    const isAddPostActive = useSelector(state => state.posts.isAddPostActive)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleCreateArticle = async (event) => {
        event.preventDefault()
        const postData = {
            title: title,
            body: body,
            color: "#999999"
        }
        await dispatch(uploadPost(postData, "post"))
        handleCloseModal()
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_ADD_POST_ACTIVE", payload: false})
        setTitle('')
        setBody("")
    }


    return (
        <Modal
            active={isAddPostActive}
            onClose={handleCloseModal}
        >
            <h1>Add Article</h1>
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
                    onClick={(event) => handleCreateArticle(event)}
                >Create</Button>
            </form>
        </Modal>
    );
};

export default AddPostModal;