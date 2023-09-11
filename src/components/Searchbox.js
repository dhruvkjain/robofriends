import React from "react";
import './Searchbox.css';

const Searchbox =({ searchfield , searchChange})=>{
   return (
    <div>
        <input type="search" onChange={searchChange} placeholder="Search Robofriends"></input>
    </div>
   );
}

export default Searchbox;