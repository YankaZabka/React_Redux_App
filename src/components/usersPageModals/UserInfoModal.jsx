import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";

const UserInfoModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.users.activeUser)
    const users = useSelector(state => state.users.users)
    const isUserInfoActive = useSelector(state => state.users.isUserInfoActive)
    const user = users.find(users => users.id === active)

    if (user === undefined) return null

    return (
        <Modal
            active={isUserInfoActive}
            onClose={() => dispatch({type: "SET_IS_USER_INFO_ACTIVE", payload: false})}
        >
            <h1>Article info</h1>
            <hr/>
            <h2>{user.username}</h2>
            <p style={{marginTop: 5}}><strong>Name: </strong>{user.name}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Phone: </strong>{user.phone}</p>
        </Modal>
    );
};

export default UserInfoModal;