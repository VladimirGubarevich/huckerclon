import React from 'react';
import { connect } from 'react-redux';

import Content from './Content';
import { filterOfPost } from '../redux/actions/filterAction';
import { fetchNewStories, newStoriesSetCurrentPage } from '../redux/actions/postsAction';

const NewStories = (props) => {
    const { posts, fetchNewStories, filterOfPost, newStoriesSetCurrentPage } = props;

    return (
        <Content
            setCurrentPage={newStoriesSetCurrentPage}
            onLoad={fetchNewStories}
            onFilter={filterOfPost}
            posts={posts}
            filter={props.filter}
            pagination={props.newStoriesPagination}
            isLoading={props.isLoading}
        />
    )
}

function mapStateToProps(store) {
    return {
        posts: store.postsReducer.newStories,
        newStoriesPagination: store.postsReducer.newStoriesPagination,
        filter: store.filterReducer,
        isLoading: store.postsReducer.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNewStories: url => dispatch(fetchNewStories(url)),
        filterOfPost: value => dispatch(filterOfPost(value)),
        newStoriesSetCurrentPage: page => dispatch(newStoriesSetCurrentPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStories);