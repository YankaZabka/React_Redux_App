import React from 'react';
import classes from "./MyModal.module.css"

const MyModal = ({active, func, children}) => {
    return (
        <div
            className={active ? classes.MyModal + ' ' + classes.active : classes.MyModal}
            onClick={() => func()}
        >
            <div
                className={active ? classes.MyModal__content + ' ' + classes.active : classes.MyModal__content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;