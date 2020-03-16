import React from 'react';
import { render, cleanup } from '@testing-library/react'

import NumberOfPages from '../components/NumberOfPages/NumberOfPages';

describe("NumberOfPages component", () => {
    let renderResult;
    let onEndPage;

    beforeEach(() => {
        const currentPage = 2;
        const countOfPosts = 10;
        const postsOnPage = 3;
        onEndPage = jest.fn();
    
        renderResult = render(
            <NumberOfPages
                currentPage={currentPage}
                countOfPosts={countOfPosts}
                postsOnPage={postsOnPage}
                endPage={onEndPage}
            />);
    });

    afterEach(() => {
        cleanup();
    });

    test('Render number of page and count pages', () => {
        const { getByText } = renderResult;
        
        const expectedText = 'Page: 2 of 4';
        expect(getByText(expectedText)).toBeDefined();
    });

    test("It should call endPage with correct count of pages value", () => {
        expect(onEndPage).toHaveBeenCalled();
        expect(onEndPage).toHaveBeenCalledWith(4);
    });
});