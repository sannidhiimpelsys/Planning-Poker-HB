import React from 'react'

function Cofee({onClick}) {
    return (
        <div>
            
            <button  aria-label="Coffee Break "  className="Coffee-button" onClick={onClick}> <i className="fa fa-coffee" aria-hidden="true"></i></button>
        </div>
    )
}

export default Cofee
