import {SERVER_URL} from "../../auth/Consts";
import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

const DeleteConfirmationModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const deleteField = (field_id) => {
        console.log(field_id);
        axios
            .delete(`${SERVER_URL}/renter/delete/${field_id}/`)
            .then((response) => {
                console.log('Field deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };

    const callFuns = () => {
        closeModal();
        deleteField(props.field_id);
        setTimeout(props.getf, 330)
    };

    return (
        <>
            <Button variant="outlined" onClick={openModal}>
                DELETE
            </Button>
            <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>DELETE FIELD</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h5>Are you sure you want to delete the field?</h5>
                    <Button className="mt-3" variant="outlined" onClick={() => callFuns()}>
                        DELETE
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default DeleteConfirmationModal;
