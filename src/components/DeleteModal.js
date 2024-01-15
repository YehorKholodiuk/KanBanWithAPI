import React, {useState} from 'react';

const DeleteModal = ({modalActive, setModalActive, removeTask}) => {

    const [confirm, setConfirm] = useState('');

    const onDelete = () => {
        removeTask(modalActive.data._id)
        setModalActive({open: false, mode: null, data: null})
    }

    return (
        <div>
            <h3>Delete this task?</h3>
            Task name: <b>{modalActive.data.name}</b>
            <p style={{marginTop: '25px'}}>
                To confirm, type <b>{modalActive.data.name}</b> in the box below.
            </p>
            <div>
                <input type="text" value={confirm} onChange={e => setConfirm(e.target.value)}/>
            </div>
            <div className="modal-footer" style={{marginTop: '25px'}}>
                <button
                    type="button"
                    style={{margin: "5px"}}
                    className="btn btn-outline-info"
                    disabled={modalActive.data.name !== confirm}
                    onClick={onDelete}
                >Delete
                </button>
                <button
                    type="button"
                    style={{margin: "5px"}}
                    className="btn btn-outline-info"
                    onClick={() => setModalActive({open: false, mode: null, data: null})}
                >Cancel
                </button>
            </div>

        </div>
    );
};

export default DeleteModal;
