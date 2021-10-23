import React, {useEffect} from 'react';
import classes from './Home.module.css'
import MyButton from "../UI/button/MyButton";
import Article from "./Article";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios'
import {nanoid} from "nanoid";
import {BeatLoader} from "react-spinners";

const Home = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const isPostLoading = useSelector(state => state.isPostLoading)
    const visiblePosts = useSelector(state => state.visiblePosts)
    const isPostBig = useSelector(state => state.isPostBig)

    async function fetchPosts() {
        dispatch({type: "SET_IS_POST_LOADING", payload: true})
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        dispatch({type: "SET_POSTS", payload: response.data})
        dispatch({type: "SET_IS_POST_LOADING", payload: false})
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const handleShowMore = () => {
        dispatch({type: "SET_VISIBLE_POSTS", payload: visiblePosts + 3})
    }

    const handleMakeBig = () => {
        dispatch({type: "SET_IS_POST_BIG", payload: !isPostBig})
    }

    return (
        <div className={classes.Home}>
            <div className={classes.topContainer}>
                <h1>Article list</h1>
                <div className={classes.topBtns}>
                    <MyButton onClick={handleMakeBig}>Make {isPostBig ? 'small' : 'big'} cards</MyButton>
                    <MyButton>Add articles</MyButton>
                </div>
            </div>
            <div className={classes.mainContainer}>
                {!isPostLoading
                    ? posts.filter((post, index) => index < visiblePosts).map(post => {
                        return <Article
                            title={post.title}
                            body={post.body}
                            id={post.id}
                            size={isPostBig}
                            key={nanoid()}
                        />
                    })
                    : <BeatLoader loading color="#0066CC"/>
                }
            </div>
            {!isPostLoading && visiblePosts < posts.length - 1
                ? <div className={classes.footerContainer}>
                    <MyButton onClick={handleShowMore}>Show More</MyButton>
                </div>
                : null
            }
        </div>
    );
};

export default Home;