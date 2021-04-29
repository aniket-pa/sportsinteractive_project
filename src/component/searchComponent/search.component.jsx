import react from 'react';
import './search.component.css'

const SearchComponent = ({handleChange,placeholder})=>{
    return(
        <div className='search'>
            <input 
                onChange={handleChange}
                placeholder={placeholder}
            >
            </input>
        </div>
    )
}

export default SearchComponent;