import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';
import axios from 'axios';

function App() {
  const [topAnime, setTopAnime] = useState([]);
  const[search,setSearch] = useState("");
  const[anime,setAnime] = useState([]);
  const [recommendations,setRecommendations] = useState([]);
  const topAnimes = async()=>{
    const data = await axios.get('https://api.jikan.moe/v4/top/anime');
    setTopAnime(data.data.data);
  };
  const fetchAnime = async(query)=>{
      const data = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by"title"`);
      setAnime(data.data.data);
    }
  const handleSearch = (e)=>{
    e.preventDefault();
    fetchAnime(search);
    document.getElementById("recommendations").style.display = "none"
  }
  const animePNG = async()=>{
    const data = await axios.get('https://api.jikan.moe/v4/recommendations/anime');
    setRecommendations(data.data.data);
  };
  useEffect(()=>{
    topAnimes();
    animePNG();
  },[]);
  return(
  <div>
    <Header/>
    <Sidebar key = 'mal_id' topAnime = {topAnime}/>
    <Content key = 'id'  anime = {anime} handleSearch = {handleSearch} search = {search} setSearch = {setSearch} recommendations = {recommendations}/>
  </div>
  );
}

export default App;
