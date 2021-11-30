import React from 'react';
import classes from "./Article.module.css"
import Button from "../UI/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getNextColor} from "../data/colors";

const Article = ({item, size, pageName}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state[`${pageName.toLowerCase()}s`][`${pageName.toLowerCase()}s`])

    const handleChangeColor = () => {
        dispatch({
            type: `SET_${pageName.toUpperCase()}S`, payload: items.map(i => {
                if (i.id === item.id) {
                    i.color = getNextColor(item)
                    return i
                } else return i
            })
        })
    }

    const handleViewMore = () => {
        dispatch({type: `SET_IS_${pageName.toUpperCase()}_INFO_ACTIVE`, payload: true})
        dispatch({type: `SET_ACTIVE_${pageName.toUpperCase()}`, payload: item.id})
    }

    const handleEdit = () => {
        dispatch({type: `SET_IS_EDIT_${pageName.toUpperCase()}_ACTIVE`, payload: true})
        dispatch({type: `SET_ACTIVE_${pageName.toUpperCase()}`, payload: item.id})
    }

    const handleDelete = () => {
        dispatch({type: `SET_IS_DELETE_${pageName.toUpperCase()}_ACTIVE`, payload: true})
        dispatch({type: `SET_ACTIVE_${pageName.toUpperCase()}`, payload: item.id})
    }

    return (
        <div>
            <div className={classes.Article} style={{
                width: size ? '550px' : '400px',
                backgroundColor: item.color,
            }}>

                {pageName === 'Post'
                    ? <div>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                    : pageName === "User"
                        ? <div>
                            <h1>{item.username}</h1>
                            <hr/>
                            <p style={{marginTop: 5}}><strong>Name: </strong>{item.name}</p>
                            <p><strong>Email: </strong>{item.email}</p>
                            <p><strong>Phone: </strong>{item.phone}</p>
                        </div>
                        : pageName === "Photo"
                            ? <div>
                                <h1>{item.title}</h1>
                                <hr style={{marginBottom: 10}}/>
                                <div style={{display: "flex"}}>
                                    <p style={{marginRight: 5}}><strong>image:</strong></p>
                                    <div style={{width: 100, height: 100, border: "3px solid black"}}>
                                        <img src={item.url} alt="404" width={100} height={100}/>
                                    </div>
                                </div>
                            </div>
                            : null
                }
                <div>
                    <Button onClick={handleViewMore}>View More</Button>
                    <Button onClick={handleChangeColor}>Change color</Button>
                    <Button onClick={handleEdit}>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default Article;