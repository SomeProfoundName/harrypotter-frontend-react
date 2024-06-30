import Cards from './Card/Card'
import React, { useState } from 'react';

const characterArray = []

getCharacters()

function getCharacters() {
    fetch("https://aacw-harrypotter-backend-api.onrender.com/characters")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
       characterArray.push(...data)
    })
} 

function Characters() {

    

    const [wizards, setWizards] = useState(characterArray)
    
    return(
        <div className="characters-area">
            <div className='spacer layer1'>
                <img src="src/assets/map-back.webp" alt="canvas map background image" className='background-image' />
            </div>
            <div className="main">
                <h1>WIZARDS OF THE HARRY POTTER UNIVERSE</h1>
            <div className='character-container'>
            {wizards.map((wizard) => {
                console.log(wizard)
                return(
                <Cards key={wizard.id} 
                name={wizard.name}
                image={wizard.image} 
                alt={`this is an image of ${wizard.name}`}/>
                );
            })}  
            </div>
            </div>
        </div>
    )
}

export default Characters


