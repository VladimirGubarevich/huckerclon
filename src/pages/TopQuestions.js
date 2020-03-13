import React from 'react';
import { connect } from 'react-redux';

import Content from './Content';
import { filterOfPost } from '../redux/actions/filterAction';
import { fetchTopQuestion, topQuestionsSetCurrentPage } from '../redux/actions/postsAction';



const TopQuestions = (props) => {
    const { posts, fetchTopQuestion, filterOfPost, topQuestionsSetCurrentPage } = props;

    return (
        <Content
            setCurrentPage={topQuestionsSetCurrentPage}
            onLoad={fetchTopQuestion}
            onFilter={filterOfPost}
            posts={posts}
            filter={props.filter}
            pagination={props.topQuestionsPagination}
            isLoading={props.isLoading}
        />
    )
}

function mapStateToProps(store) {
    return {
        posts: store.postsReducer.topQuestions,
        topQuestionsPagination: store.postsReducer.topQuestionsPagination,
        filter: store.filterReducer,
        isLoading: store.postsReducer.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTopQuestion: url => dispatch(fetchTopQuestion(url)),
        filterOfPost: value => dispatch(filterOfPost(value)),
        topQuestionsSetCurrentPage: page => dispatch(topQuestionsSetCurrentPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopQuestions);