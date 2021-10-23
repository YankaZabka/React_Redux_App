import React from 'react';
import classes from "./Article.module.css"
import MyButton from "../UI/button/MyButton";

const Article = ({title, body, size}) => {
    return (
        <div>
            <div className={classes.Article} style={{width: size ? '550px' : '350px'}}>
                <div>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
                <div>
                    <MyButton>View More</MyButton>
                    <MyButton>Change color</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Article;