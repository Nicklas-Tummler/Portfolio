import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {

    return(
        <header>
            <div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
            <main className="main-content">
                <div className="div-main-content">
                    <h1> Nicklas PT Portfolio .</h1>
                </div>
            </main>
            <div className="main-button-container">
            <button className="main-button">  
            <FontAwesomeIcon icon={faArrowDown} size="xl" style={{ color: "#74C0FC" }} />
            </button>
            </div>
        </header>
    )
}
export default Portfolio;