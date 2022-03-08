import React, { useState } from 'react';
import './Newtab.scss';

const Newtab = () => {

  const [value,setValue] = useState('')

  const engine = {
    baidu: 'https://www.baidu.com/s?wd=',
    google: 'https://www.google.com/search?q='
  }

  const handleSearch = (engineKey)=>{
    if(value == '') return false;
    window.location.href = `${engine[engineKey]}${value}`
  }

  const handleEnter = ({key})=>{
    if(key == "Enter") {
      handleSearch('google')
    }
  }

  return (
    <div className="App">
      <div className="search-wrap">
        <input className="search-input" autoFocus value={value} onChange={e=>setValue(e.target.value)} onKeyPress={handleEnter} />
        <button className="search-btn" onClick={()=>handleSearch('google')}>Google搜索</button>
        <button className="search-btn" onClick={()=>handleSearch('baidu')}>百度搜索</button>
      </div>
    </div>
  );
};

export default Newtab;
