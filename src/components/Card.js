import React from 'react' ;
import './Card.css' ;

const Card=({name,email,id})=>{
    return (
        <div class="flex">
            <div class="card">
                <img alt="mudit" src={"https://robohash.org/"+id} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card ;
