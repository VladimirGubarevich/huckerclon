import React from 'react';
import './Pagination.css';
import Button from '../Button';

const Pagination = (props) => {
    const { pagination, setCurrentPage, countOfPosts } = props;

    const countOfPages = Math.ceil(countOfPosts / pagination.postsOnPage);

    const nextPage = () => {
        const page = pagination.currentPage === countOfPages ? pagination.currentPage : pagination.currentPage + 1;
        setCurrentPage(page);
    }

    const previousPage = () => {
        const page = pagination.currentPage > 1 ? pagination.currentPage - 1 : pagination.currentPage;
        setCurrentPage(page);
    }


    return (
        <>
            <Button
                buttonHandler={previousPage}
                classes={'previos-button'}
                title={'<'}
            />
            <span className='numbrer-of-page'>{pagination.currentPage}</span>
            <Button
                buttonHandler={nextPage}
                classes={'next-button'}
                title={'>'}
            />
        </>
    )
}

export default Pagination;