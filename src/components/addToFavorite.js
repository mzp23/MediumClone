import React from 'react';
import classNames from 'classnames';

import useFetch from '../hooks/useFetch';

const AddToFavorite = ({ isFavorited, favoritesCount, articleSlug }) => {
    const apiUrl = `/articles/${articleSlug}/favorite`;
    const [{ response }, doFetch] = useFetch(apiUrl)
    const favoritesCountWithResponse =
        response
            ? response.article.favoritesCount
            : favoritesCount

    const isFavoritedWithResponse =
        response
            ? response.article.isFavorited
            : isFavorited

    const buttonClasses = classNames({
        btn: true,
        'btn-small': true,
        'btn-primary': isFavoritedWithResponse,
        'btn-outline-primary': !isFavoritedWithResponse
    })

    const handleLike = (event) => {
        event.preventDefalut();
        doFetch({
            method: isFavoritedWithResponse ? 'DELETE' : 'POST'
        })
    }

    return (
        <button className={buttonClasses} onClick={handleLike}>
            <i className='ion-heart'></i>
            <span>&nbsp; {favoritesCountWithResponse}</span>
        </button>
    );
};

export default AddToFavorite;