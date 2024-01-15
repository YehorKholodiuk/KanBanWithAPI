import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({modalActive, setModalActive, children}) => {

    return (
        <div className={modalActive.open ? classes.modal + ' ' + classes.modal_active : classes.modal}
             onClick={() => setModalActive(false)}
        >
            <div className={modalActive.open ? classes.content + ' ' + classes.content_active : classes.content}
                 onClick={e => e.stopPropagation()}
            >
                {
                    modalActive.mode ===  'create' && children[0]
                }
                {
                    modalActive.mode ===  'delete' && children[1]
                }
            </div>
        </div>
    );
};

export default MyModal;
