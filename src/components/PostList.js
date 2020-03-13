import React, { useState, useEffect, useMemo } from 'react';
import reactStringReplace from 'react-string-replace';

import Post from '../components/Post/Post';

const PostList = (props) => {
    const { posts, pagination, filter, setCountOfPosts } = props;
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const startIndex = pagination.currentPage * pagination.postsOnPage;
        const endIndex = startIndex + pagination.postsOnPage;
        const currentPagePosts = posts
            .filter(post => {
                const title = filter.title || post.title;
                const author = filter.author || post.by;
                const date = filter.date || post.time;

                return post.title.toLowerCase().includes(title.toLowerCase())
                    && post.by.toLowerCase().includes(author.toLowerCase())
                    && (Date.parse(post.time) === Date.parse(date) || Date.parse(post.time) > Date.parse(date));
            });
        setFilteredPosts(currentPagePosts.slice((startIndex - pagination.postsOnPage), (endIndex - pagination.postsOnPage)));
        setCountOfPosts(currentPagePosts.length);
    }, [posts, filter, pagination]);

    const postCollection = useMemo(() => {
        return filteredPosts.map((post) => (
            <Post
                score={post.score}
                title={filter.title ? reactStringReplace(post.title, filter.title, (match, i) => <mark key={i}>{match}</mark >) : post.title}
                user={filter.author ? reactStringReplace(post.by, filter.author, (match, i) => <mark key={i}>{match}</mark >) : post.by}
                link={post.url}
                date={post.time}
                key={post.id}
            />
        ))
    }, [filteredPosts, filter])

    return (
        <>
            {filteredPosts.length > 0 ? postCollection : <h4 className='not-found'>Not found</h4>}
        </>
    )
}

export default PostList;