import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";
import Button from "../../UI/button/Button";

const DeletePhotoModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.photos.activePhoto)
    const photos = useSelector(state => state.photos.photos)
    const photo = photos.find(photo => photo.id === active)
    const isDeletePhotoActive = useSelector(state => state.photos.isDeletePhotoActive)

    const handleClick = (event) => {
        if (event.target.innerText === "Yes") dispatch({
            type: "SET_PHOTOS", payload: photos.filter(item => item.id !== photo.id)
        })

        dispatch({type: "SET_IS_DELETE_PHOTO_ACTIVE", payload: false})
    }

    return (
        <Modal
            active={isDeletePhotoActive}
            onClose={() => dispatch({type: "SET_IS_DELETE_PHOTO_ACTIVE", payload: false})}
        >
            <h2 style={{marginBottom: 6}}>Do you really want to delete this card?</h2>
            <Button onClick={(e) => handleClick(e)}>Yes</Button>
            <Button onClick={(e) => handleClick(e)}>No</Button>
        </Modal>
    );
};

export default DeletePhotoModal;