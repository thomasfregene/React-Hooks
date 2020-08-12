import React, {useContext} from "react";
import MyContext from "../context/context";

const ContextCard = () => {
    const context = useContext(MyContext)
  return (
    <div>
         <>
            <h3>Name:{context.profile.username}</h3>
            <h3>LastName:{context.profile.lastname}</h3>
            <h3>Age:{context.profile.age}</h3>
            <button onClick={()=> context.hey()}>Alert</button>
            <button onClick={()=> context.incAge()}>Add age</button>
          </>

          
      {/* <MyContext.Consumer>
        {(context) => (
          <>
            <h3>Name:{context.profile.username}</h3>
            <h3>LastName:{context.profile.lastname}</h3>
            <h3>Age:{context.profile.age}</h3>
            <button onClick={()=> context.hey()}>Alert</button>
            <button onClick={()=> context.incAge()}>Add age</button>
          </>
        )}
      </MyContext.Consumer> */}
    </div>
  );
};

export default ContextCard;
