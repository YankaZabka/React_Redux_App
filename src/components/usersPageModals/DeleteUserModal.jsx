import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";
import Button from "../../UI/button/Button";

const DeleteUserModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.users.activeUser)
    const users = useSelector(state => state.users.users)
    const user = users.find(user => user.id === active)
    const isDeleteUserActive = useSelector(state => state.users.isDeleteUserActive)

    const handleClick = (event) => {
        if (event.target.innerText === "Yes") dispatch({
            type: "SET_USERS", payload: users.filter(item => item.id !== user.id)
        })

        dispatch({type: "SET_IS_DELETE_USER_ACTIVE", payload: false})
    }

    return (
        <Modal
            active={isDeleteUserActive}
            onClose={() => dispatch({type: "SET_IS_DELETE_USER_ACTIVE", payload: false})}
        >
            <h2 style={{marginBottom: 6}}>Do you really want to delete this card?</h2>
            <Button onClick={(e) => handleClick(e)}>Yes</Button>
            <Button onClick={(e) => handleClick(e)}>No</Button>
        </Modal>
    );
};

export default DeleteUserModal;