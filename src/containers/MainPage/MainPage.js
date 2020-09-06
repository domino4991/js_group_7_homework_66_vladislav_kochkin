import React, {useCallback, useEffect, useState} from 'react';
import './MainPage.css';
import Grid from "@material-ui/core/Grid";
import withLoader from "../../hoc/withLoader";
import {axiosBase} from "../../axiosBase";
import Posts from "../../components/Posts/Posts";
import Form from "../../components/UI/Form/Form";

const MainPage = () => {
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState({
        title: '',
        description: ''
    });

    const fetchData = useCallback(async () => {
        const response = await axiosBase.get('/posts.json');
        const postsCopy = Object.keys(response.data).map(post => ({
            ...response.data[post],
            id: post
        }));
        setPosts(postsCopy);
    }, []);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [fetchData]);

    const onChangeNewPost = e => {
        const name = e.target.name;
        const value = e.target.value;
        setNewPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addNewPost = async e => {
        e.preventDefault();
        if(newPost.title === '' || newPost.description === '') return;
        const newPostCopy = {
            ...newPost,
            date: new Date()
        };
        try {
            await axiosBase.post('/posts.json', newPostCopy);
        } finally {
            setShowForm(false);
            setNewPost({
                title: '',
                description: ''
            });
            fetchData().catch(console.error);
        }
    };

    const onCloseForm = () => setShowForm(false);

    return (
        <Grid
            component="div"
        >
            <Form
                show={showForm}
                title={newPost.title}
                desc={newPost.description}
                submit={e => addNewPost(e)}
                changed={e => onChangeNewPost(e)}
                close={onCloseForm}
            />
            <Posts
                posts={posts}
                clicked={() => setShowForm(!showForm)}
            />
        </Grid>
    );
};

export default withLoader(MainPage, axiosBase);