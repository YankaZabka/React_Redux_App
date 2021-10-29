import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";

const EditUserModal = () => {
    const dispatch = useDispatch()
    const active = useSelector(state => state.users.activeUser)
    const users = useSelector(state => state.users.users)
    const isEditUserActive = useSelector(state => state.users.isEditUserActive)
    const user = users.find(user => user.id === active)
    const name = useSelector(state => state.users.name)
    const username = useSelector(state => state.users.username)
    const phone = useSelector(state => state.users.phone)
    const email = useSelector(state => state.users.email)
    const website = useSelector(state => state.users.website)

    const clearInputsData = () => {
        dispatch({type: "SET_NAME", payload: ""})
        dispatch({type: "SET_USERNAME", payload: ""})
        dispatch({type: "SET_PHONE", payload: ""})
        dispatch({type: "SET_EMAIL", payload: ""})
        dispatch({type: "SET_WEBSITE", payload: ""})
    }

    useEffect(() => {
        if (user) {
            dispatch({type: "SET_NAME", payload: user.name})
            dispatch({type: "SET_USERNAME", payload: user.username})
            dispatch({type: "SET_PHONE", payload: user.phone})
            dispatch({type: "SET_EMAIL", payload: user.email})
            dispatch({type: "SET_WEBSITE", payload: user.website})
        }
    }, [isEditUserActive])

    if (user === undefined) return null

    const handleEditArticle = (event) => {
        event.preventDefault()
        dispatch({
            type: "SET_USERS", payload: users.map(item => {
                if (item.id === user.id) {
                    item.name = name
                    item.username = username
                    item.phone = phone
                    item.email = email
                    item.website = website
                    return item
                } else return item
            })
        })
        dispatch({type: "SET_IS_EDIT_USER_ACTIVE", payload: false})
        clearInputsData()
    }

    const handleCloseModal = () => {
        dispatch({type: "SET_IS_EDIT_USER_ACTIVE", payload: false})
        clearInputsData()
    }

    return (
        <Modal
            active={isEditUserActive}
            onClose={handleCloseModal}
        >
            <h1>Edit Article</h1>
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
                    onClick={(event) => handleEditArticle(event)}
                >Update</Button>
            </form>
        </Modal>
    );
};

export default EditUserModal;