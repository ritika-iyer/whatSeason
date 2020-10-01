import React from 'react';
import './seasonDisp.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach! In other words, AAYA MAUSAM THANDE THANDE DERMI COOL KA!",
    iconName: 'sun',
    name:'SUMMER'
    
  },
  spring : {
    text: "It's pretty nice outside but can y'all birdies keep it down, please?",
    iconName: 'pagelines' ,
    name:'SPRING'
    
  },
  winter: {
    text: "Burr, it's cold! BRB gotta go have my seventh cup of tea or I will PERISH.",
    iconName: 'snowflake outline',
    name:'WINTER'
  },
  fall: {
    text: "The leaves are falling, kinda like how my life is falling apart. My life's quicker at it though, haha!",
    iconName: 'leaf',
    name:'FALL'
  }
};

const findSeason = (lat, month) => {
    if (month>3 && month <7) {
    return lat>0 ? 'summer' : 'winter';
    }   
    else if (month>6 && month <10) {
      return lat>0 ? 'fall' : 'spring';
      }
    else if (month>9 && month <1) {
        return lat>0 ? 'winter' : 'summer';
        }   
    else{
    return lat>0 ? 'spring' : 'autumn';
    }    
    
}


const SeasonDisp = (props) => {
  const season = findSeason(props.lat,new Date().getMonth());
  const { text, iconName, name } = seasonConfig[season];

 
  return (
    
    <div className={`season-display ${season}`}>
    <i className={`icon-left massive  ${iconName} icon`} />
    <h1 style={{fontFamily: 'Times New Roman'}}>{text}</h1>
    <div>
      <h6 style={{fontFamily:'lucida console'}}>{name}</h6>
    </div>
    <i className={`icon-right massive ${iconName} icon`} />
    </div>
    
  );
  
};

export default SeasonDisp;