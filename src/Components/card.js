import React from "react";

const Card = ({name, image, email}) => {
    // const {name, image} = props; //Destructuring (also is/can be done within func parameters)

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={image} 
            width= "200px" height="200px" alt="California Flag" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p> 
                { // <p>{props.email}</p>  Not using Destructuring
                // CAN NOT use props unless its defined and added as a func parameter.
                }
            </div>
        </div>
    );
}

export default Card; 


