import styles from '../styles/Home.module.css';
import { useState } from 'react';

const ListView = ({ colors, handleClickedSwatch }) => {
  const [pageNumber , setPageNumber] = useState(1);
  const startIndex = (pageNumber - 1) * 12;
  const endIndex = pageNumber * 12;
  const slicedColors = colors?.slice(startIndex, endIndex);

  return (
    <div>
      <div className={styles.listViewContainer}>
      { slicedColors?.map(swatch => {
          return (
            <div key={swatch.id} className={styles.listViewSwatches}>
              <img role="presentation" className={styles.swatchImg} width={200} height={200} style={{backgroundColor: swatch.hsl}}
              onClick={() => handleClickedSwatch(swatch)}/>
              <h2 className={styles.swatchDets}>HEX {swatch.hex}</h2>
              <h2 className={styles.swatchDets}>{swatch.rgb}</h2>
            </div>
          )
      })}
        
      </div>
    <div className={styles.paginationContainer}>
      <h3 onClick={() => setPageNumber(1)}>1</h3>
      <h3 onClick={() => setPageNumber(2)}>2</h3>
      <h3 onClick={() => setPageNumber(3)}>3</h3>
      <h3 onClick={() => setPageNumber(4)}>4</h3>
      <h3 onClick={() => setPageNumber(3)}>3</h3>
      <h3 onClick={() => setPageNumber(6)}>6</h3>
      <h3 onClick={() => setPageNumber(7)}>7</h3>
      <h3 onClick={() => setPageNumber(8)}>8</h3>
      <h3 onClick={() => setPageNumber(9)}>9</h3>
      <h3 onClick={() => setPageNumber(10)}>10</h3>
      <h3 onClick={() => setPageNumber(11)}>11</h3>
      <h3 onClick={() => setPageNumber(12)}>12</h3>
      <h3 onClick={() => setPageNumber(13)}>13</h3>
    </div>
  </div>
  )
};

export default ListView;