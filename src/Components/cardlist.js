import React from "react";
//import {robots} from "./robots.js";  <-- CardList doesnt need this import since index.js ..
//... defined robot and since robots was destructured and added as a parameter here.
// Otherwise neither would be needed and an import statement would suffice.
import Card from "./card.js";



const CardList = ({robots}) => {
    // When you loop you need to give it a unique key property. As shown above with 'key={i}'
    // The key property should hav something that doesnt change. For ex, index (i) could change if array items get moved..
    // ..So a better key in this case would be something unique like id. 'key=robots[i].id'
    // This helps react and the dom keep track of whats supposed to appear and whats not or whats changed. 
    // cardComponent iterates/maps through robots and returns each index value.
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card 
                    key={robots[i].id} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}  
                    image={robots[i].image} 
                    />
                })
            }
            {// Curley braces tells javascript to evaluate the vairiable.
            }
        </div>
    );
}

export default CardList;