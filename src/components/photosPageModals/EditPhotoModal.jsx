import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

const EditPhotoModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.photos.activePhoto)
    const photos = useSelector(state => state.photos.photos)
    const isEditPhotoActive = useSelector(state => state.photos.isEditPhotoActive)
    const photo = photos.find(photo => photo.id === active)
    const title = useSelector(state => state.photos.photoTitle)
    const url = useSelector(state => state.photos.url)

    useEffect(() => {
        if (photo) {
            dispatch({type: "SET_PHOTO_TITLE", payload: photo.title})
            dispatch({type: "SET_URL", payload: photo.url})
        }
    }, [isEditPhotoActive])

    if (photo === undefined) return null

    const handleEditArticle = (event) => {
        event.preventDefault()
        dispatch({
            type: "SET_PHOTOS", payload: photos.map(item => {
                if (item.id === photo.id) {
                    item.title = title
                    item.url = url
                    return item
                } else return item
            })
        })
        dispatch({type: "SET_IS_EDIT_PHOTO_ACTIVE", payload: false})
        dispatch({type: "SET_PHOTO_TITLE", payload: ""})
        dispatch({type: "SET_URL", payload: ""})
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_EDIT_PHOTO_ACTIVE", payload: false})
        dispatch({type: "SET_PHOTO_TITLE", payload: ""})
        dispatch({type: "SET_URL", payload: ""})
    }

    return (
        <Modal
            active={isEditPhotoActive}
            onClose={handleCloseModal}
        >
            <h1>Edit Article</h1>
            <hr/>
            <form>
                <Input
                    value={title}
                    onChange={event => dispatch({type: "SET_PHOTO_TITLE", payload: event.target.value})}
                    placeholder='Enter title...'
                />
                <Input
                    value={url}
                    onChange={event => dispatch({type: "SET_URL", payload: event.target.value})}
                    placeholder='Enter url...'
                />
                <Button
                    disabled={!(title && url)}
                    onClick={(event) => handleEditArticle(event)}
                >Update</Button>
            </form>
        </Modal>
    );
};

export default EditPhotoModal;