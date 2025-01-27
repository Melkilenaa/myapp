import React from 'react';

const Mel = ({ninjas}) => {
    const ninjalist = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div> Name: {ninja.name} </div>
          <div> Age: {ninja.age} </div>
          <div> Religion / church: {ninja.religion} </div>   
        </div>)
        
    });
    return(
      <div className="ninja-list">
        {ninjalist}
      </div>
    )
  }


 export default Mel;