import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function UpdateModal({priorities}) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onSubmit = (event) => {
        //event.preventDefault()

        const newPost = {
            name: "new task",
            description: "new description",
            status: "todo",
            priority: "2",
        }
        toggle()
    }

    return (
        <div>
            <MyButton color="danger" onClick={toggle}>
                Update
            </MyButton>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>

                <ModalBody>
                    <MyInput
                        type='text'
                        placeholder='Название задачи'
                    />
                    <MyInput
                        type='text'
                        placeholder='Описание задачи'
                    />
                </ModalBody>
                <p style={{}}>Priority:</p>
                <MySelect
                    options={priorities.map(el => ({value: el, name: el}))}
                />

                <ModalFooter>
                    <MyButton onClick={onSubmit}>Создать</MyButton>
                    <MyButton onClick={toggle}>Cancel</MyButton>

                </ModalFooter>

            </Modal>
        </div>
    );
}

export default UpdateModal;
