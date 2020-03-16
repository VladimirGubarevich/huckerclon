import React from 'react';
import { render, cleanup } from '@testing-library/react';

import PostList from '../components/PostList';

describe('PostList component', () => {
    let renderResult;
    const expectedText = 'Not found';
    let defaultProps;

    let pagination;
    let filter;
    let setCountOfPosts;
    const testPosts = [
        {
            title: 'testTitle_1',
            by: 'testBy_1',
            time: new Date(),
            id: 1
        },
        {
            title: 'testTitle_2',
            by: 'testBy_2',
            time: new Date(),
            id: 2
        }
    ]
    beforeEach(() => {
        pagination = {
            countOfPosts: 0,
            postsOnPage: 5,
            currentPage: 1,
        };
        filter = {
            title: '',
            author: '',
            date: ''
        };
        setCountOfPosts = jest.fn();

        defaultProps = {
            posts: testPosts,
            pagination: pagination,
            filter: filter,
            setCountOfPosts: setCountOfPosts
        }

        renderResult = render(<PostList {...defaultProps} />)
    });

    afterEach(() => {
        cleanup();
    });

    test('There must be a message "Not found" ', () => {
        const renderResult = render(<PostList {...defaultProps} posts={[]} />);

        expect(setCountOfPosts).toHaveBeenCalledWith(0);
        expect(renderResult.getAllByText(expectedText)).toBeDefined();
    });

    test('It should call setCountOfPosts with valid value', () => {
        expect(setCountOfPosts).toHaveBeenCalledWith(2);
    });

    test('It should call setCountOfPosts with valid value after change posts', () => {
        const posts = [
            {
                title: 'testTitle_1',
                by: 'testBy_1',
                time: new Date(),
                id: 3
            }
        ];
        const renderChangePosts = render(<PostList {...defaultProps} posts={posts} />);
        expect(setCountOfPosts).toHaveBeenCalledWith(1);
        expect(renderChangePosts.queryByText(expectedText)).toBeNull();
    });

    test('Search by nonexistent parameter. It should display "Not found" ', () => {
        filter = {
            title: 'uncorrect',
            author: '',
            date: ''
        }
        const renderRightSearch = render(<PostList {...defaultProps} filter={filter} />);
        expect(setCountOfPosts).toHaveBeenCalledWith(0);
        expect(renderRightSearch.getAllByText(expectedText)).toBeDefined();
    });

    test('Search by existent parameter. It should display found posts', () => {
        filter = {
            title: 'testTitle_1',
            author: '',
            date: ''
        }
        render(<PostList {...defaultProps} filter={filter} />);
        expect(setCountOfPosts).toHaveBeenCalledWith(1);
    });

});