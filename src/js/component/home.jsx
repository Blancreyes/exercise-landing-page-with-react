import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="container">

					<div className="col">
						<Jumbotrom/>

						<div className="row g-2" style={{marginTop:"1rem"}}>

							<div className="col">
									<Card/>
							</div>

							<div className="col">
									<Card/>
							</div>

							<div className="col">
									<Card/>
							</div>
							
							<div className="col">
									<Card/>
							</div>
							
							

						</div>
					
					</div>
			</div>

			<Footer/>
			
		</>
	);
};

export default Home;
