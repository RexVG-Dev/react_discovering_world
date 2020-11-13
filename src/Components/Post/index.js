import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


const Post = ({ getPost, handleCommnets }) => {
    const initialState = {
        id:'',
        descrip:'',
        user: 'Joe Doe',
        date: '11/13/2020'
    }

    const history = useHistory();
    let { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState(initialState);

    useEffect(() => {
        const post = getPost(id)[0];
        setPost(post);
        setComments(post.comments);
        
    });

    useEffect( () => {
        if(comments) {
            setComment({
                ...comment,
                id: (comments.length + 1).toString()
            });
        }
    }, [comments]);

    const commentsTag = comments.map((comment, index) => {
        return (
            <div className="Comment" key={index}>
                <span><FontAwesomeIcon icon={faUserCircle} size="lg" className="mr-3" />{comment.user}</span>
                <p>{comment.date}</p>
                <p>{comment.descrip}</p>
            </div>
        )
    });

    const handleFormComment = (e) => {

        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
        
    }

    const sumbitComment= () => {
        handleCommnets(post.id, comment);

        setComment(initialState);
        // handleCommnets(post.id, commentMock);
    }

    const BgImgStyle = {
        background: `url(${post.urlImage}) no-repeat center`
    }
    return (
        <div>
            <div style={BgImgStyle} className="BgImgStyle">
                <div className="BgStyleSub Order-fx-col">
                    <span onClick={() => history.push('/')} className="Text-nav">
                        <FontAwesomeIcon icon={faChevronLeft} size="1x" />
                         View Posts
                    </span>
                    <span className='Text-Img'>{post.title}</span>
                </div>
            </div>
            <div className="Cont-descrip">
                <p>{post.description}</p>
            </div>
            <div className="Cont-comments">
                <h5>Comments</h5>
                {commentsTag}
            </div>
            <div className="Cont-form">
                <Form className="Form-comments">
                    <Form.Group controlId='comment'>
                        {/* <Form.Label>Title</Form.Label> */}
                        {/* <Form.Control
                            required
                            type="textarea"
                            placeholder="Add new comment"
                            name="comment"
                            row="3"
                            onChange={handleFormModal}
                        /> */}
                        <Form.Control
                            required
                            as="textarea"
                            placeholder="Add new comment"
                            name="descrip"
                            rows={6}
                            onChange={handleFormComment}
                            value={comment.descrip}
                        />
                    </Form.Group>
                </Form>
                <button type="button" onClick={sumbitComment} className="btn btn-secondary">Add</button>
            </div>
            

        </div>
    )
}

export default Post;