import React, {Component} from "react";
import CardList from "../Components/cardlist";
import {robots} from "../Components/robots"; // No import needed when fetching data
import SearchBox from "../Components/searchbox";
//import "./app.css" 
import Scroll from "../Components/scroll.js"





class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots, // used to be an empty array to accomidate componentDidMount() fetch code.
            searchfield: ``,
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}));
    // }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }
    render() {
        
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                
                <div className="tc">
                    <head>
                    <link href="https://fonts.googleapis.com/css?family=Erica+One|Libre+Baskerville:700" rel="stylesheet"/>                </head>
                    <h1 className="statesTitle">The States</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll> 
                </div>
            )
        }
    }
}


export default App;