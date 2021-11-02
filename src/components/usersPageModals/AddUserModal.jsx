import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal from "../../UI/modal/Modal";
import Input from "../../UI/input/Input";
import Button from "../../UI/button/Button";
import axios from "axios";

const AddUserModal = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const isAddUserActive = useSelector(state => state.users.isAddUserActive)

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")

    const clearInputsData = () => {
        setName('')
        setUsername("")
        setPhone("")
        setEmail("")
        setWebsite("")
    }

    const handleCreateArticle = async (event) => {
        event.preventDefault()
        const postData = {
            name: name,
            username: username,
            phone: phone,
            email: email,
            website: website,
            color: "#999999"
        }
        const response = await axios.post("https://jsonplaceholder.typicode.com/photos", postData)
        dispatch({type: 'SET_USERS', payload: [...users, response.data]})
        handleCloseModal()
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
                    onClick={(event) => handleCreateArticle(event)}
                >Create</Button>
            </form>
        </Modal>
    );
};

export default AddUserModal;