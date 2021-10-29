import React from 'react';
import Page from "../components/Page";
import PostInfoModal from "../components/homePageModals/PostInfoModal";
import AddPostModal from "../components/homePageModals/AddPostModal";
import EditPostModal from "../components/homePageModals/EditPostModal";
import DeletePostModal from "../components/homePageModals/DeletePostModal";

const Home = () => {
    return (
        <Page pageName="Post">
            <PostInfoModal/>
            <AddPostModal/>
            <EditPostModal/>
            <DeletePostModal/>
        </Page>
    )
};

export default Home;