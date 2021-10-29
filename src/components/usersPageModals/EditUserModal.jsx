import React, {useEffect, useState} from 'react';
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

    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [website, setWebsite] = useState()

    const clearInputsData = () => {
        setName('')
        setUsername("")
        setPhone("")
        setEmail("")
        setWebsite("")
    }

    useEffect(() => {
        if (user) {
            setName(user.name)
            setUsername(user.username)
            setPhone(user.phone)
            setEmail(user.email)
            setWebsite(user.website)
        }
    }, [isEditUserActive])

    if (user === undefined) return null

    const handleEditArticle = (event) => {
        event.preventDefault()
        dispatch({
            type: "SET_USERS", payload: users.map(item => {
                if (item.id === user.id) {
                    return {...item, name, username, phone, email, website}
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
                    onChange={event => setName(event.target.value)}
                    placeholder='Enter name...'
                />
                <Input
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder='Enter username...'
                />
                <Input
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    placeholder='Enter phone...'
                    type="tel"
                />
                <Input
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder='Enter email...'
                    type="email"
                />
                <Input
                    value={website}
                    onChange={event => setWebsite(event.target.value)}
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