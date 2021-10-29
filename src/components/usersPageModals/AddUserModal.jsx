import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";
import Modal from "../../UI/modal/Modal";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

const AddUserModal = () => {
    const dispatch = useDispatch()
    const name = useSelector(state => state.users.name)
    const username = useSelector(state => state.users.username)
    const phone = useSelector(state => state.users.phone)
    const email = useSelector(state => state.users.email)
    const website = useSelector(state => state.users.website)
    const users = useSelector(state => state.users.users)
    const isAddUserActive = useSelector(state => state.users.isAddUserActive)

    const clearInputsData = () => {
        dispatch({type: "SET_NAME", payload: ""})
        dispatch({type: "SET_USERNAME", payload: ""})
        dispatch({type: "SET_PHONE", payload: ""})
        dispatch({type: "SET_EMAIL", payload: ""})
        dispatch({type: "SET_WEBSITE", payload: ""})
    }

    const handleCreateArticle = (event) => {
        event.preventDefault()
        dispatch({
            type: "SET_USERS", payload: [...users, {
                id: nanoid(),
                name: name,
                username: username,
                phone: phone,
                email: email,
                website: website,
                color: "#999999"
            }]
        })
        dispatch({type: "SET_IS_ADD_USER_ACTIVE", payload: false})
        clearInputsData()
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_ADD_USER_ACTIVE", payload: false})
        clearInputsData()
    }


    return (
        <Modal
            active={isAddUserActive}
            onClose={handleCloseModal}
        >
            <h1>Add Article</h1>
            <hr/>
            <form>
                <Input
                    value={name}
                    onChange={event => dispatch({type: "SET_NAME", payload: event.target.value})}
                    placeholder='Enter name...'
                />
                <Input
                    value={username}
                    onChange={event => dispatch({type: "SET_USERNAME", payload: event.target.value})}
                    placeholder='Enter username...'
                />
                <Input
                    value={phone}
                    onChange={event => dispatch({type: "SET_PHONE", payload: event.target.value})}
                    placeholder='Enter phone...'
                    type="tel"
                />
                <Input
                    value={email}
                    onChange={event => dispatch({type: "SET_EMAIL", payload: event.target.value})}
                    placeholder='Enter email...'
                    type="email"
                />
                <Input
                    value={website}
                    onChange={event => dispatch({type: "SET_WEBSITE", payload: event.target.value})}
                    placeholder='Enter website...'
                    type="url"
                />
                <Button
                    disabled={!(name && username && phone && email && website)}
                    onClick={(event) => handleCreateArticle(event)}
                >Create</Button>
            </form>
        </Modal>
    );
};

export default AddUserModal;