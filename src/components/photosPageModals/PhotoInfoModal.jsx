import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";

const PhotoInfoModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.photos.activePhoto)
    const photos = useSelector(state => state.photos.photos)
    const isPhotoInfoActive = useSelector(state => state.photos.isPhotoInfoActive)
    const photo = photos.find(photo => photo.id === active)

    if (photo === undefined) return null

    return (
        <Modal
            active={isPhotoInfoActive}
            onClose={() => dispatch({type: "SET_IS_PHOTO_INFO_ACTIVE", payload: false})}
        >
            <h1>Article info</h1>
            <hr/>
            <h2 style={{margin: "4px 0 2px"}}>{photo.title}</h2>
            <p>{photo.url}</p>
            {/*TODO: overflow is need to be fixed*/}
        </Modal>
    );
};

export default PhotoInfoModal