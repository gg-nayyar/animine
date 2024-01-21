import React from 'react';
import "./sidebar.css";

const sidebar = (props) => {
  return (
    <aside className='sidebox'>
      <h2>Top Anime</h2>
      {props.topAnime.map(anime =>{
        return[
          <a style={{textDecoration:'none'}} href={anime.url} target='_blank' rel='noreferrer'>
          <div className='navBar'>
            <h4 >{anime.title_english}</h4>
        </div>
        </a>
      ]})}
    </aside>
  )
}

export default sidebar
