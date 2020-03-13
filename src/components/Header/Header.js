import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <h1>Welcom to HackerNews clone!</h1>
            <div className='nav'>
                <NavLink to='/new-story' activeClassName="active">new story</NavLink>
                <NavLink to='/top-stories' activeClassName="active">top stories</NavLink>
                <NavLink to='/top-questions' activeClassName="active">top questions</NavLink>
            </div>
        </>
    )
}

export default Header;