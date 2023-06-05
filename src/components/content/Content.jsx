import React from 'react'
import { Films } from '../../shared/ListOfFilms'
import FilmPresentation from './FilmPresentation'
import './content.css'

function Content() {

    const films = Films

    return (
        <FilmPresentation films={films} />
    )
}

export default Content