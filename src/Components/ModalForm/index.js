import './ModalForm.css';
import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

let TitleModal = '';

const RenderContent = (data) => {
    if(data) {
        TitleModal = 'Edit';

        return( <span>Edit post</span> )
    } else {
        TitleModal = 'Add';
        return ( <span>Add post</span> )
    }
}

const ModalForm = ({show, onHide, data, handlePosts, edit}) => {

    const [form, setForm] = useState({
        id: '',
        title:'',
        description:'',
        category: '',
        urlImage: '',
        comments: []
    });

    useEffect( ()=> {
        if (data) {
         setForm(data);
        }
    },[data]);

    const handleFormModal = (e) => {
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const submitForm = () =>{

        if( edit) {
            handlePosts(form);
        } else {
            handlePosts(form);
        }
        setForm({
            id: '',
            title:'',
            description:'',
            category: '',
            urlImage: '',
            comments: []
        });
        onHide();
    }
    
    return(
        <Modal
                show={show}
                onHide={onHide}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {RenderContent(data)}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=""
                                name="title"
                                value={form.title}
                                onChange={handleFormModal}
                            />
                        </Form.Group>
                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=""
                                name="description"
                                value={form.description}
                                onChange={handleFormModal}
                            />
                        </Form.Group>
                        <Form.Group controlId='category'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                required
                                type="text"
                                placeholder=""
                                name="category"
                                value={form.category}
                                onChange={handleFormModal}
                            >
                                <option value='' disabled>Choose one...</option>
                                <option value='travel'>Travel</option>
                                <option value='lifestyle'>Lifestyle</option>
                                <option value='Business'>Business</option>
                                <option value='food'>Food</option>
                                <option value='work'>Work</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='urlImage'>
                            <Form.Label>URL of the image</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=""
                                name="urlImage"
                                value={form.urlImage}
                                onChange={handleFormModal}
                            />
                        </Form.Group>
                        <div className="cont-btns-modal">
                            {/* <button onClick={(e) => {
                                e.stopPropagation();
                                onHide();
                            }} className="btn btn-secondary btn-modal">cancel</button> */}
                            <button type="button" onClick={submitForm} className="btn btn-primary btn-modal">save</button>
                            <button type="button" onClick={submitForm}>SaveTest</button>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal>
    )
}

export default ModalForm;