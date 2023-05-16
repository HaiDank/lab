import React, { Component } from 'react'
import './nav.css';

class Navigation extends Component {
    render() {
        return (
            <div className='navigation'>
                <nav>
                    <a className='active' href='#home'>Home</a>
                    <a href='#news'>News</a>
                    <a href='#about'>About</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </div>
        )
    }
}

export default Navigation
