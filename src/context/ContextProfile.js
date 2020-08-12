import React from 'react';
import ContextCard from './ContextCard'

 const ContextProfile = (props)=> {
    return (
        <div>
            Profile
            <hr/>
            <ContextCard profile={props.profile}/>
        </div>
    )
}

export default ContextProfile;
