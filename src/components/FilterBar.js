import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import CustomDatePicker from './CustomDatePicker';

const FilterBar = (props) => {
    const { titleHandler, authorHandler, dateHandler, search, filter} = props;
    const [title, setTitle] = useState(filter.title);
    const [author, setAuthor] = useState(filter.author);

    function searchFilter() {
        titleHandler(title);
        authorHandler(author);
        search();
    }

    useEffect(() => {
        if (filter.title) {
            setTitle(title);
        }
    }, [filter.title]);

    useEffect(() => {
        if (filter.author) {
            setAuthor(author);
        }
    }, [filter.author]);

    return (
        <div className='filter-bar'>
            <Input
                value={title}
                inputHandler={setTitle}
                classes={'filter title-filtrer'}
                placeholder={'Title'}
                type={'text'}
            />
            <Input
                value={author}
                inputHandler={setAuthor}
                classes={'filter author-filtrer'}
                placeholder={'Author'}
                type={'text'}
            />
            <CustomDatePicker
                dateHandler={dateHandler}
            />

            <Button
                classes={'search-button'}
                title={'Search'}
                buttonHandler={searchFilter}
            />
        </div>
    )
}

export default FilterBar;