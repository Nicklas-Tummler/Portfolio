import React from "react";
//Logos
import toDoList from "../Pictures/ToDoList.png"
import countryTing from "../Pictures/CountryTHing.png"
import movieData from "../Pictures/MovieData.png"

const Projects = () => {

    return(
        <header id="project">
            <main className="main-projects">

            <h1 className="project-header-text">Projects</h1>

                <div className="div-projects">

                    <div className="project-1">
                        <img className="logo" src={toDoList}></img>
                        <h5>Todo-List</h5>
                        <p>This is a Todo-list I have created by myself. I have added two buttons on each list-item
                            Delete Button and a Higlight Button.
                        </p>

                        <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        </ul>

                        <a href="https://nicklas-tummler.github.io/To-do-list/" target="_blank">
                            <button>Demo</button>
                        </a>
                    </div>

                    <div className="project-2">
                        <img className="logo" src={countryTing}></img>
                        <h5>Country/city API</h5>
                        <p>This was a fun little project I made. You type in a country and the magic will happen. 
                            Just got a city/country API where depending on the country, just get the information about it.
                        </p>

                        <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>API</li>
                        </ul>
                        
                        <a href="https://nicklas-tummler.github.io/City-app/" target="_blank">
                            <button>Demo</button>
                        </a>
                    </div>

                    <div className="project-3">
                        <img className="logo" src={movieData}></img>
                        <h5>Movie Data Website</h5>
                        <p>This is a movie-data app. Where you get all the different movies depending on your choice. 
                            This is a free movie API I got. I did get a little help with some of the syntax, but mostly did it by myself.
                        </p>
                        
                        <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>API</li>
                        </ul>

                        <a href="https://nicklas-tummler.github.io/Movie-Data/" target="_blank">
                            <button>Demo</button>
                        </a>
                    </div>

                    
                </div>
            </main>
        </header>
    )
}
export default Projects;