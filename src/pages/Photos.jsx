import React from 'react';
import Page from "../components/Page";
import AddPhotoModal from "../components/photosPageModals/AddPhotoModal";
import DeletePhotoModal from "../components/photosPageModals/DeletePhotoModal";
import EditPhotoModal from "../components/photosPageModals/EditPhotoModal";
import PhotoInfoModal from "../components/photosPageModals/PhotoInfoModal";

const Photos = () => {
    return (
        <Page pageName="Photo">
            <AddPhotoModal/>
            <DeletePhotoModal/>
            <EditPhotoModal/>
            <PhotoInfoModal/>
        </Page>
    );
};

export default Photos;