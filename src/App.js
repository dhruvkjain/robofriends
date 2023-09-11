import React from "react";
// import { robots } from './robots.js';
// instead of importing we can also change robots.js we can 
// take  
import Cardlist from './components/Cardlist';
import Searchbox from './components/Searchbox';
import './App.css';
import Scroll from "./components/Scroll";

class App extends React.Component{
    constructor(){
        super()
        this.state = {robots : [] ,searchfield: ''}
        // here write robots : robots if robots is imported
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then (response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots:users})
        });
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value});
    }
    render (){
        // const filteredrobots = this.state.robots.filter(data=>{
        //     return data.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        // })

        const mappedrobots =this.state.robots.map(data=>{
            if(data.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
            {
                console.log(data);
                return data;
            }
            else {
                 return null;
            }
        })

        if(this.state.robots.length === 0){
            return (
            <div>
                <h1 className="loading">Loading</h1>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Space+Grotesk:wght@300&display=swap');
                </style>
                <div class="loader">
                    <div class="nor_loader">
                        <div class="loader1_outer">
                            <div class="loader1_inner"></div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        else{
            return(
                <div className="all">
                    <h1>Robofriends</h1>
                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Space+Grotesk:wght@300&display=swap');
                    </style>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robots={mappedrobots}/> 
                    </Scroll>
                    {/* <Cardlist robots={filteredrobots}/> 
                        write this if filteredrobots is used*/}
                </div>
            );
        }
    }
    
}

export default App;
