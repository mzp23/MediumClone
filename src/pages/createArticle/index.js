import React from 'react';
import ArticleForm from '../../components/articleForm';

const CreateArticle = () => {
    const errors = {};
    const initialValues = {};
    const handleSubmit = data => {

    };
    return (
        <div>
            <ArticleForm errors={errors} initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
    )
};

export default CreateArticle;