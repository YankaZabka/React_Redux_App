import React from 'react';
import classes from './Page.module.css'
import Button from "../UI/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";
import {BeatLoader} from "react-spinners";
import Article from "./Article";
import {useFetching} from "../hooks/useFetching";

const Page = ({pageName, children}) => {

    const dispatch = useDispatch()
    const isItemsLoading = useSelector(state => state[`${pageName.toLowerCase()}s`][`is${pageName}sLoading`])
    const visibleItems = useSelector(state => state[`${pageName.toLowerCase()}s`][`visible${pageName}s`])
    const isItemsBig = useSelector(state => state[`${pageName.toLowerCase()}s`][`is${pageName}sBig`])
    const {items} = useFetching(pageName)
    const error = useSelector(state => state.general.error)


    const handleShowMore = () => {
        dispatch({type: `SET_VISIBLE_${pageName.toUpperCase()}S`, payload: visibleItems + 3})
    }

    const handleMakeBig = () => {
        dispatch({type: `SET_IS_${pageName.toUpperCase()}S_BIG`, payload: !isItemsBig})
    }

    return (
        <div className={classes.Home}>
            <div className={classes.topContainer}>
                <h1>{pageName}s list</h1>
                <div>
                    <Button onClick={handleMakeBig}>Make {isItemsBig ? 'small' : 'big'} cards</Button>
                    <Button
                        onClick={() => dispatch({type: `SET_IS_ADD_${pageName.toUpperCase()}_ACTIVE`, payload: true})}
                    >Add article</Button>
                </div>
            </div>
            <div className={classes.mainContainer}>
                {!isItemsLoading
                    ? items.filter((item, index) => index < visibleItems).map(item => {
                        return <Article
                            pageName={pageName}
                            item={item}
                            size={isItemsBig}
                            key={nanoid()}
                        />
                    })
                    : <BeatLoader loading color="#0066CC"/>
                }

                {error && <h1>ERROR! : {error}</h1>
                }

                {children}

            </div>
            {!isItemsLoading && visibleItems < items.length - 1
                ? <div className={classes.footerContainer}>
                    <Button onClick={handleShowMore}>Show More</Button>

                </div>
                : null
            }
        </div>
    );
};

export default Page