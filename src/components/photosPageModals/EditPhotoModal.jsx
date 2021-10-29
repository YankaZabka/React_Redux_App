import React, {useEffect, useState} from 'react';
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

    const [title, setTitle] = useState()
    const [url, setUrl] = useState()

    useEffect(() => {
        if (photo) {
            setTitle(photo.title)
            setUrl(photo.url)
        }
    }, [isEditPhotoActive])

    if (photo === undefined) return null

    const handleEditArticle = (event) => {
        event.preventDefault()
        dispatch({
            type: "SET_PHOTOS", payload: photos.map(item => {
                if (item.id === photo.id) {
                    return {...item, title, url}
                } else return item
            })
        })
        dispatch({type: "SET_IS_EDIT_PHOTO_ACTIVE", payload: false})
        setTitle('')
        setUrl("")
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_EDIT_PHOTO_ACTIVE", payload: false})
        setTitle('')
        setUrl("")
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
                    onChange={event => setTitle(event.target.value)}
                    placeholder='Enter title...'
                />
                <Input
                    value={url}
                    onChange={event => setUrl(event.target.value)}
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