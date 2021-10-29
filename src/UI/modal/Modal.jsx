import React from 'react';
import classes from "./Modal.module.css"

const Modal = ({active, onClose, children}) => {
    return (
        <div
            className={active ? classes.MyModal + ' ' + classes.active : classes.MyModal}
            onClick={onClose}
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

export default Modal;