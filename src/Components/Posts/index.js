import './Posts.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faComments } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import FilterTab from '../Filter-tab';
import ModalForm from '../ModalForm';

const ContainerPosts = (props) => {
    const history = useHistory();
    // const [show, setShow] = useState(false);

    return props.characterData.map((post, index) => {

        const bgStyle = {
            background: `url(${post.urlImage}) no-repeat center`,
            backgroundSize: 'cover'
        };

        return (
            <div className="col-sm-12 col-md-6 BgStyle" style={bgStyle} key={index}
                onClick={() => history.push(`/post/${post.id}`)}>
                <div className='BgStyleSub'>
                    <span className="Text-comment">{post.comments.length} Comments <FontAwesomeIcon icon={faComments} size="lg" /></span>
                    <span className="Title-post">{post.title}</span>
                    <span className="Txt-descrip">{post.description}</span>
                    <div className="Cont-btns-post mt-2">
                        <span className="Txt-category">{post.category}</span>
                        <span className="Btns-post">
                            <div className="Btn-post"
                                onClick={(e)=> {
                                    e.stopPropagation();
                                    props.onHandleEdit(post)
                                }}><FontAwesomeIcon icon={faPen} size="lg"/>
                            </div>
                            <div className="Btn-post"
                                onClick = { (e) => {
                                    e.stopPropagation();
                                    props.removePost(post.id);
                                }}
                            ><FontAwesomeIcon icon={faTrash} size="lg" /></div>
                        </span>
                    </div>
                </div>
            </div>
        )
    });

}

const Posts = (props) => {
    const { characterData, getPost, categories, removePost,  handlePosts} = props;
    const [listPost, setListPost] = useState(characterData);
    const [show, setShow] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [ edit, setEdit] = useState(false);

    useEffect(()=> {
        setListPost(props.characterData);
    },[characterData])

    const handleFilterList = (selectedFilter) => {
        const filterList = characterData.filter(element => {
            if (selectedFilter === 'all') {
                return element.category !== selectedFilter
            } else { return element.category === selectedFilter; }
        });
        setListPost(filterList);
    }

    const onEditPost= (data) => {
        setSelectedPost(data);
        setShow(true);
        setEdit(true);
    }

    const onCloseModal = () => {
        setSelectedPost(null);
        setShow(false);
        setEdit(false);
        handleFilterList('all');
    }

    return (
        <div className="Container-main">
            <div className="col-12 Container-btn-edit">
                <div className="Circle-edit"  onClick={() => setShow(true)}>
                    <FontAwesomeIcon icon={faPen} size="2x" />
                </div>
            </div>
            <div className="col-12">
                <FilterTab className="col-12" categories={categories} handleFilterList={handleFilterList} />
            </div>
            <ContainerPosts characterData={listPost} getPost={getPost} removePost={removePost} onHandleEdit={(data)=> onEditPost(data)}/>
            <ModalForm show={show} onHide={onCloseModal} data={selectedPost} handlePosts={handlePosts} edit={edit}/>
        </div>

    )
}

export default Posts;
