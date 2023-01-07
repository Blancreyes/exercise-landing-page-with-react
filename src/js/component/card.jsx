import React from "react";


//style={{marginRight: spacing + 'em'}}

//create your first component
const Card = () => {
	return (
        <div className="card" style={{width: '14rem'}}>
            <img src="./rigo-baby.jpg" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        
	);
};

export default Card;