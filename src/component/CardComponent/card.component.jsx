//import react from 'react';
import './card.component.css';
import firstImage from '../../assests/63706.jpg'

function CardComponent({player}){
    
    return(
        <div className='card'>
            <div className='background-image'> 
            
                {/* <img src={`/assests/player-images/${player.Id}.jpg`}></img> */}
                <img src={firstImage}></img>
            </div>
            
            <div className="content">
               
                <p className='title'>Name:{player.PFName} </p>
                <p className='title'>Skills:{player.SkillDesc} </p>
                <p className='title'>$:{player.Value} </p>
                <p className='title'>UpcomingMatches:{player.UpComingMatchesList[0].CCode} Vs {player.UpComingMatchesList[0].VsCCode} </p>
                {console.log(player.MDate)}
                <p className='title'>Next Match:{player.UpComingMatchesList[0].MDate} </p>
            </div>
           
        </div>
        
    )
}

export default CardComponent;