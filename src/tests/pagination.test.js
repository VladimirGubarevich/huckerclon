import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react'

import Pagination from '../components/Pagination/Pagination';

describe("Pagination component", () => {
    let renderResult;
    let setCurrentPage;

    beforeEach(() => {
        const pagination = {
            countOfPosts: 0,
            postsOnPage: 5,
            currentPage: 3,
        };
        const countOfPosts = 25;
        setCurrentPage = jest.fn();

        renderResult = render(
            <Pagination
                pagination={pagination}
                countOfPosts={countOfPosts}
                setCurrentPage={setCurrentPage}
            />);
    });

    afterEach(() => {
        cleanup();
    });

    test('Render pagination', () => {
        const { getByText } = renderResult;

        const expectedText = '3';
        expect(getByText(expectedText)).toBeDefined();
    });

    test("click on the button '>' ", () => {
        fireEvent.click(screen.getByText('>'));
        expect(setCurrentPage).toHaveBeenCalledWith(4);
    });

    test("click on the button '<' ", () => {
        fireEvent.click(screen.getByText('<'));
        expect(setCurrentPage).toHaveBeenCalledWith(2);
    });
});