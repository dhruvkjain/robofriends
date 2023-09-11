import React from "react";
import Card from './Card';

const Cardlist=({robots})=>{
    return(
        <div>
            {
                robots.map((data,i)=>{
                    if(data != null)
                    return <Card key={i} name={data.name} email={data.email} id={data.id}/>
                })
            }
        </div>
    );
}

export default Cardlist ;
