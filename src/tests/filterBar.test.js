import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';

import FilterBar from '../components/FilterBar';

describe('FilterBar component', () => {
    let renderResult;

    let titleHandler;
    let authorHandler;
    let dateHandler;
    let search;

    beforeEach(() => {
        titleHandler = jest.fn();
        authorHandler = jest.fn();
        dateHandler = jest.fn();
        search = jest.fn();
        const filter = {
            title: '',
            author: '',
            date: ''
        };

        renderResult = render(
            <FilterBar
                titleHandler={titleHandler}
                authorHandler={authorHandler}
                dateHandler={dateHandler}
                search={search}
                filter={filter}
            />
        )
    });

    afterEach(() => {
        cleanup();
    });

    test('get value from input <Tile>', () => {
        const inputTitle = screen.getByPlaceholderText('Title');
        fireEvent.change(inputTitle, {
            target: { value: 'testTitle' }
        });
        expect(inputTitle.value).toBe('testTitle');
    });

    test('get value from input <Author>', () => {
        const inputAuthor = screen.getByPlaceholderText('Author');
        fireEvent.change(inputAuthor, {
            target: { value: 'testAuthor' }
        });
        expect(inputAuthor.value).toBe('testAuthor');
    });

    test("send values from inputs by pressing 'Search' ", () => {
        const inputTitle = screen.getByPlaceholderText('Title');
        fireEvent.change(inputTitle, {
            target: { value: 'testTitle' }
        });

        const inputAuthor = screen.getByPlaceholderText('Author');
        fireEvent.change(inputAuthor, {
            target: { value: 'testAuthor' }
        });

        fireEvent.click(screen.getByText('Search'));
        expect(titleHandler).toHaveBeenCalledWith('testTitle');
        expect(authorHandler).toHaveBeenCalledWith('testAuthor');
        expect(search).toHaveBeenCalled();
    });
});