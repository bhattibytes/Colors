import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import MainImageView from './MainImageView';
import ListView from './ListView';

const Sidebar = () => {
  const [colors, setColors] = useState([]); // All Colors
  const [selectedColors, setSelectedColors] = useState([]); // Selected Colors Array
  const [selectedSwatch, setSelectedSwatch] = useState(''); // Selected Swatch - intial false value
  const [pageView, setPageView] = useState('list'); // List or Image View

  useEffect(() => { // Fetch Colors 
    if (process.env.NODE_ENV === 'development') {
    fetch('http://localhost:8080/api/colors')
    .then(res => res.json()) 
      .then(data => { 
        const colorData = data[0]; // set to array of colors
        setColors(colorData)
        setSelectedColors(colorData.slice(0, 18)) // set the selectedcolor to one color initially (Red)
      })
      .catch(err => console.log(err));
    } else {
    fetch('http://'+ process.env.NEXT_PUBLIC_serverhost + '/api/colors') // fetch the data from the database
      .then(res => res.json()) 
      .then(data => { 
        const colorData = data[0]; // set to array of colors
        setColors(colorData)
        setSelectedColors(colorData.slice(0, 18)) // set the selectedcolor to one color initially (Red)
      })
      .catch(err => console.log(err));
    }
  }, []);

  const handleClick = (clickedColor) => { 
    setSelectedSwatch('');

    if (pageView === 'list') {
      setPageView('main');
    }
    const colorsArr = [];

    colors.map(color => {
      if (color.name === clickedColor) {
       colorsArr.push(color);
      }
    });
    setSelectedColors(colorsArr);
  };

  const handleClickRandom = () => {
    setSelectedSwatch('');
    
    if (pageView === 'list') {
      setPageView('main');
    }

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomSelectedColor = colors[randomColorIndex].name;
   
    const colorsArr = [];

    colors.map(color => {
      if (color.name === randomSelectedColor) {
       colorsArr.push(color);
      }
    });
    setSelectedColors(colorsArr);
  }

  const handleClickedSwatch = (clickedSwatch) => {
    const selectColorsArray = [];
    colors.map(color => {
      if (color.name === clickedSwatch.name) {
        selectColorsArray.push(color);
      }
    });
    setSelectedColors(selectColorsArray);

    setPageView('main');
    setSelectedSwatch(clickedSwatch);
  }

  const handleSwitchView = () => {
    if (pageView === 'list') {
      setPageView('main');
    } else {
      setPageView('list');
    }
  }

  return (
    <div className={styles.sidebarOuterContainer}>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          <button className={styles.rando} 
          onClick={() => handleClickRandom()}>Random Color</button>
          <div className={styles.colorPick}>
          <h2 className={styles.picks} onClick={() => handleClick('Red')} 
          style={{backgroundColor: "hsl(0, 100%, 50%)"}}>Red</h2>
          <h2 className={styles.picks} onClick={() => handleClick('Orange ')} 
          style={{backgroundColor: "hsl(39, 100%, 50%)"}}>Orange</h2>
          <h2 className={styles.picks} onClick={() => handleClick('Yellow')} 
          style={{backgroundColor: "hsl(60, 100%, 50%)"}}>Yellow</h2>
          <h2 className={styles.picks} onClick={() => handleClick('Green')} 
          style={{backgroundColor: "hsl(147, 50%, 47%)"}}>Green</h2>
          <h2 className={styles.picks} onClick={() => handleClick('Blue')} 
          style={{backgroundColor: "hsl(240, 100%, 50%)"}}>Blue</h2>
          <h2 className={styles.picks} onClick={() => handleClick('Purple')} 
          style={{backgroundColor: "hsl(248, 53%, 58%)"}}>Purple</h2>
          <h2 className={styles.picks} onClick={() => handleClick('Brown')} 
          style={{backgroundColor: "hsl(16, 100%, 27%)"}}>Brown</h2>
          <h2 className={styles.picks} onClick={() => handleClick('Grey')} 
          style={{backgroundColor: "hsl(0, 0%, 50%)"}}>Grey</h2>
          </div>
          <button className={styles.rando} 
          onClick={() => handleSwitchView()}>Switch View</button>
        </div>
      </div>
      { pageView === 'main' ? <MainImageView colors={selectedColors} 
      handleClickedSwatch={handleClickedSwatch} selectedSwatch={selectedSwatch} /> : null }
      { pageView === 'list'? <ListView colors={colors} handleClickedSwatch={handleClickedSwatch}/> : null }
    </div>
  );
};

export default Sidebar;