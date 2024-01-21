import React from 'react';
import "./content.css";
const content = (props) => {
  return (
    <main>
        <form onSubmit={props.handleSearch}>
        <input className='searchbar' placeholder='Enter anime...' value={props.search}
        onChange={e=>props.setSearch(e.target.value)}></input>
        </form>
        <div className='images'>
          {props.anime.map(anime =>{
            return(
            <div>
             <a href={anime.url} target='_blank' rel='noreferrer'> <img className='cards' src={anime.images.webp.large_image_url} alt='anime_cards' />
              <h3>{anime.title_english}</h3>
              </a>
              {console.log()}
            </div>
            )
          })}
        </div>
        <div id='recommendations' className='images'>
            {props.recommendations.map(recommend=>{
                return(
                    <div>
                    <a href={recommend.entry[0].url} target='_blank' rel='noreferrer'> <img className='cards' src={recommend.entry[0].images.webp.image_url} alt='anime_img'/>
                    <h3>{recommend.entry[0].title}</h3>
                    </a>
                    </div>   
                )
            })}
            
        </div>
    </main>
  )
}

export default content;
