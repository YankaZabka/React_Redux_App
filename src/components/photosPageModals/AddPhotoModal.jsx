import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import {uploadPost} from "../../store/thunk";

const AddPhotoModal = () => {
    const dispatch = useDispatch()
    const isAddPhotoActive = useSelector(state => state.photos.isAddPhotoActive)

    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")

    const handleCreateArticle = async (event) => {
        event.preventDefault()
        const postData = {
            title: title,
            url: url,
            color: "#999999"
        }
        await dispatch(uploadPost(postData, "photo"))
        handleCloseModal()
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_ADD_PHOTO_ACTIVE", payload: false})
        setTitle('')
        setUrl("")
    }


    return (
        <Modal
            active={isAddPhotoActive}
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
                    value={url}
                    onChange={event => setUrl(event.target.value)}
                    placeholder='Enter url...'
                    type="url"
                />
                <Button
                    disabled={!(title && url)}
                    onClick={(event) => handleCreateArticle(event)}
                >Create</Button>
            </form>
        </Modal>
    );
};

export default AddPhotoModal;