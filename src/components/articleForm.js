import React, { useState, useEffect } from 'react';
import BackendErrorMessages from './backendErrorMessages';

const ArticleForm = ({ onSubmit, errors, initialValues }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [description, setDescription] = useState('');
    const [tagList, setTagList] = useState('');
    console.log(title)
    useEffect(() => {
        if (!initialValues) {
            return
        }
        const { title, description, body, tagList } = initialValues;
        setTitle(title);
        setDescription(description);
        setBody(body);
        setTagList(tagList.join(' '));
    }, [initialValues])

    const handleSubmit = event => {
        event.preventDefault();
        const article = {
            title,
            body,
            description,
            tagList
        }
        onSubmit(article)
    }

    return (
        <div className='editor-page'>
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1 col-xs-12'>
                        {errors && <BackendErrorMessages backendErrors={errors} />}
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg'
                                        placeholder='Article title'
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg'
                                        placeholder='What is article about'
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <textarea
                                        className='form-control'
                                        rows='8'
                                        placeholder='Write your article (in markdown)'
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                    >

                                    </textarea>
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg'
                                        placeholder='Enter tags'
                                        value={tagList}
                                        onChange={e => setTagList(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <button
                                        type='submit'
                                        className='btn btn-lg pull-xs-right btn-primary'>
                                        Publish article
                                            </button>
                                </fieldset>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ArticleForm;