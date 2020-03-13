import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';

import PostList from '../components/PostList';

describe('PostList component', () => {
    const mocMap = jest.fn()
    let renderResult;
    const expectedText = 'Not found';

    let pagination;
    let filter;
    let setCountOfPosts;
    let testPosts = [
        {
            title: 'testTitle_1',
            by: 'testBy_1',
            time: new Date()
        },
        {
            title: 'testTitle_2',
            by: 'testBy_2',
            time: new Date()
        }
    ]
    beforeEach(() => {
        pagination = {
            countOfPosts: 0,
            postsOnPage: 5,
            currentPage: 3,
        };
        filter = {
            title: '',
            author: '',
            date: ''
        };
        setCountOfPosts = jest.fn();

        renderResult = render(
            <PostList
                posts={testPosts}
                pagination={pagination}
                filter={filter}
                setCountOfPosts={setCountOfPosts}
            />
        )
    });

    afterEach(() => {
        cleanup();
    });

    test('There must be a message "Not found" ', () => {
        render(<PostList
            posts={[]}
            pagination={pagination}
            filter={filter}
            setCountOfPosts={setCountOfPosts}
        />);

        expect(setCountOfPosts).toHaveBeenCalledWith(0);
        expect(screen.getAllByText(expectedText)).toBeDefined();
    });

    test('It should call setCountOfPosts with args. posts.lenth', () => {
        expect(setCountOfPosts).toHaveBeenCalledWith(2);
    });

    test('It should call setCountOfPosts with args. posts.lenth after change posts', () => {
        let posts = [];
        render(<PostList
            posts={posts}
            pagination={pagination}
            filter={filter}
            setCountOfPosts={setCountOfPosts}
        />);
        expect(screen.getAllByText(expectedText)).toBeDefined();
        expect(setCountOfPosts).toHaveBeenCalledWith(0);
        posts = [
            {
                title: 'testTitle_1',
                by: 'testBy_1',
                time: new Date()
            }
        ];
        render(<PostList
            posts={posts}
            pagination={pagination}
            filter={filter}
            setCountOfPosts={setCountOfPosts}
        />);
        expect(setCountOfPosts).toHaveBeenCalledWith(1);
        expect(screen.getAllByText(expectedText)).not.toBe(expectedText);
    });

    test('Search by nonexistent parameter. It should call setCountOfPosts and show <expectedText> ', () => {
        const filter = {
            title: 'uncorrect',
            author: '',
            date: ''
        }
        render(<PostList
            posts={testPosts}
            pagination={pagination}
            filter={filter}
            setCountOfPosts={setCountOfPosts}
        />);
        expect(setCountOfPosts).toHaveBeenCalledWith(0);
        expect(screen.getAllByText(expectedText)).toBeDefined();
    });

    test('Search by existent parameter. It should call setCountOfPosts with correct length of array', () => {
        const filter = {
            title: 'testTitle_1',
            author: '',
            date: ''
        }
        render(<PostList
            posts={testPosts}
            pagination={pagination}
            filter={filter}
            setCountOfPosts={setCountOfPosts}
        />);
        expect(setCountOfPosts).toHaveBeenCalledWith(1);
    });

});