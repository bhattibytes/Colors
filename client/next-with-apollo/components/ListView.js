import styles from '../styles/Home.module.css';
import { useState } from 'react';

const ListView = ({ colors, handleClickedSwatch }) => {
  const [pageNumber , setPageNumber] = useState(1);
  const startIndex = (pageNumber - 1) * 12;
  const endIndex = pageNumber * 12;
  const slicedColors = colors?.slice(startIndex, endIndex);

  return (
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
      <div className={styles.paginationContainer}>
        <button className={styles.paginationButton} onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
        <button className={styles.paginationButton} onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
    </div>
  )
};

export default ListView;