import React from 'react';
import Page from "../components/Page";
import AddUserModal from "../components/usersPageModals/AddUserModal";
import DeleteUserModal from "../components/usersPageModals/DeleteUserModal";
import EditUserModal from "../components/usersPageModals/EditUserModal";
import UserInfoModal from "../components/usersPageModals/UserInfoModal";

const Users = () => {
    return (
        <Page pageName="User">
            <AddUserModal/>
            <DeleteUserModal/>
            <EditUserModal/>
            <UserInfoModal/>
        </Page>
    );
};

export default Users;