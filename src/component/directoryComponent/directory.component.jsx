//import react from 'react';
import CardComponent from '../CardComponent/card.component';
import './directory.component.css';

function DirectoryComponent ({playerList}){
    return(
        
        <div className='directory-menu' >
            {playerList.map( player => 
                 (
                    <CardComponent key={player.Id} player={player}/>
                )
            )}
        </div>
    )
}

export default DirectoryComponent;