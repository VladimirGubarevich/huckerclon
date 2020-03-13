import React, { useEffect } from 'react';
import './NumberOfPages.css';

const NumberOfPages = ({ currentPage, countOfPosts, postsOnPage, endPage }) => {

    const countOfPages = Math.ceil(countOfPosts / postsOnPage);

    useEffect(() => {
        endPage(countOfPages)
    }, [countOfPages]);

    return (
        <>
            <div className='number-of-page-block'>
                <p>Page: {currentPage} of {countOfPages}</p>
            </div>
        </>
    )
}

export default NumberOfPages;