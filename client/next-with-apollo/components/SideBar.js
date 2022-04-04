import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import MainImageView from './MainImageView';

const Sidebar = () => {
  const [colors, setColors] = useState([]); // All Colors
  const [selectedColors, setSelectedColors] = useState([]); // Selected Colors Array

  useEffect(() => { // Fetch Colors 
    fetch('http://localhost:8080/api/colors') // fetch the data from the database
      .then(res => res.json()) 
      .then(data => { 
        const colorData = data[0]; // set to array of colors
        setColors(colorData)
        setSelectedColors(colorData.slice(0, 18)) // set the selectedcolor to one color initially (Red)
      })
      .catch(err => console.log(err));
  }, []);

  const handleClick = (clickedColor) => { 
    const colorsArr = [];

    colors.map(color => {
      if (color.name === clickedColor) {
       colorsArr.push(color);
      }
    });
    setSelectedColors(colorsArr);
  };

  return (
    <div className={styles.sidebarOuterContainer}>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <div className={styles.colorPick}>
          <h2 onClick={() => handleClick('Red')} 
          style={{backgroundColor: "hsl(0, 100%, 50%)"}}>Red</h2>
          <h2 onClick={() => handleClick('Orange ')} 
          style={{backgroundColor: "hsl(39, 100%, 50%)"}}>Orange</h2>
          <h2 onClick={() => handleClick('Yellow')} 
          style={{backgroundColor: "hsl(60, 100%, 50%)"}}>Yellow</h2>
          <h2 onClick={() => handleClick('Green')} 
          style={{backgroundColor: "hsl(147, 50%, 47%)"}}>Green</h2>
          <h2 onClick={() => handleClick('Blue')} 
          style={{backgroundColor: "hsl(240, 100%, 50%)"}}>Blue</h2>
          <h2 onClick={() => handleClick('Purple')} 
          style={{backgroundColor: "hsl(248, 53%, 58%)"}}>Purple</h2>
          <h2 onClick={() => handleClick('Brown')} 
          style={{backgroundColor: "hsl(16, 100%, 27%)"}}>Brown</h2>
          <h2 onClick={() => handleClick('Grey')} 
          style={{backgroundColor: "hsl(0, 0%, 50%)"}}>Grey</h2>
          </div>
        </div>
      </div>
        <MainImageView colors={selectedColors} />
    </div>
  );
};

export default Sidebar;