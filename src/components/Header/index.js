import React from 'react'

// CSS
import './Header.css'

export default function Header({title, summary}) {
    return (
        <div className="Header">
          <h1>{title}</h1>
          { summary ? (
            <p>{summary}</p>
          ) : null }
        </div>
    )
}