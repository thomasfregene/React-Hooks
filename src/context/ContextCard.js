import React from 'react'

 const ContextCard = (props) => {
    return (
        <div>
            <h3>Name:{props.profile.username}</h3>
            <h3>LastName:{props.profile.lastname}</h3>
            <h3>Age:{props.profile.age}</h3>
        </div>
    )
}

export default ContextCard;
