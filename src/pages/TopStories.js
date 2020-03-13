import React from 'react';
import { connect } from 'react-redux';

import Content from './Content';
import { filterOfPost } from '../redux/actions/filterAction';
import { fetchTopStories, topStoriesSetCurrentPage } from '../redux/actions/postsAction';

const TopStories = (props) => {
    const { posts, fetchTopStories, filterOfPost, topStoriesSetCurrentPage } = props;

    return (
        <Content
            setCurrentPage={topStoriesSetCurrentPage}
            onLoad={fetchTopStories}
            onFilter={filterOfPost}
            posts={posts}
            filter={props.filter}
            pagination={props.topStoriesPagination}
            isLoading={props.isLoading}
        />
    )
}

function mapStateToProps(store) {
    return {
        posts: store.postsReducer.topStories,
        topStoriesPagination: store.postsReducer.topStoriesPagination,
        filter: store.filterReducer,
        isLoading: store.postsReducer.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTopStories: url => dispatch(fetchTopStories(url)),
        filterOfPost: value => dispatch(filterOfPost(value)),
        topStoriesSetCurrentPage: page => dispatch(topStoriesSetCurrentPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStories);