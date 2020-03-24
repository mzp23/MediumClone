import React, { useEffect, useState, useContext } from 'react';
import ArticleForm from '../../components/articleForm';
import useFetch from '../../hooks/useFetch';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/currentUser';


const CreateArticle = () => {
    const [currentUserState] = useContext(CurrentUserContext)
    const apiUrl = '/articles'
    const [{ response, error }, doFetch] = useFetch(apiUrl);
    const initialValues = {
        title: '',
        description: '',
        body: '',
        tagList: []
    };
    const [isSuccessfullSumbit, setIsSuccessfullSumbit] = useState(false);
    useEffect(() => {
        if (!response) {
            return
        }

        setIsSuccessfullSumbit(true);

    }, [response, isSuccessfullSumbit])
    if (currentUserState.isLoggedIn === false) {
        return <Redirect to='/' />
    }
    if (isSuccessfullSumbit) {
        return <Redirect to={`/articles/${response.article.slug}`} />
    }

    const handleSubmit = article => {
        doFetch({
            method: 'POST',
            data: {
                article
            }
        })
    };
    return (
        <div>
            <ArticleForm errors={(error && error.errors) || {}} initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
    )
};

export default CreateArticle;