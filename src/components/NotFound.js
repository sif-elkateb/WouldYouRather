import React from 'react';
import notFoundGIF from '../utils/assests/notfound.gif';

export default function NotFound() {
  return (
    <div className="not-found container">
      <header>
        <h2>Would you Rather ?!</h2>
      </header>
      <img src={notFoundGIF} alt=""/>
      <h3>The Resource Your Looking For is Not Found</h3>
    </div>
  )
}
