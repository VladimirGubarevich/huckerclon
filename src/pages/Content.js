import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import PostList from '../components/PostList';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';
import NumberOfPages from '../components/NumberOfPages/NumberOfPages';

const Content = (props) => {
    const { posts, onLoad, onFilter, pagination, setCurrentPage } = props;

    const history = useHistory();

    const locationSearch = history.location.search.split('=');
    // const currentPage = +locationSearch[1] || pagination.currentPage;
    const currentPage = +locationSearch[1];

    const [countOfPosts, setCountOfPosts] = useState(currentPage);
    const [endPage, setEndPage] = useState(null);

    const filter = {
        ...props.filter
    };

    function search() {
        onFilter(filter);
    }

    function titleHandler(title) {
        filter.title = title;
    }

    function authorHandler(author) {
        filter.author = author
    }

    function dateHandler(date) {
        filter.date = date
    }

    useEffect(() => {
        posts.length || onLoad();
    }, []);

    useEffect(() => {
        history.push(`?page=${pagination.currentPage}`);
    }, [pagination.currentPage]);

    useEffect(() => {
        if (!endPage) return;
        if (currentPage > endPage) {
            setCurrentPage(endPage);
            return;
        }
        if (currentPage <= endPage) {
            setCurrentPage(currentPage);
        }
    }, [endPage]);

    return (
        <>
            <header>
                <Header />
                {props.isLoading ?
                    null
                    : <NumberOfPages
                        currentPage={pagination.currentPage}
                        countOfPosts={countOfPosts}
                        postsOnPage={pagination.postsOnPage}
                        endPage={setEndPage}
                    />
                }
            </header>
            <FilterBar
                titleHandler={titleHandler}
                authorHandler={authorHandler}
                dateHandler={dateHandler}
                search={search}
                filter={filter}
            />
            {props.isLoading ? <h4 className='loading'>Loading...</h4> :
                <>
                    <main>
                        <PostList
                            filter={props.filter}
                            posts={posts}
                            pagination={pagination}
                            setCountOfPosts={setCountOfPosts}
                        />
                    </main>

                    <div className='pagination'>
                        <Pagination
                            setCurrentPage={setCurrentPage}
                            pagination={pagination}
                            countOfPosts={countOfPosts}
                        />
                    </div>
                </>
            }
        </>
    )
}

export default Content;