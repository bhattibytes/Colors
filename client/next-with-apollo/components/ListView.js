import styles from '../styles/Home.module.css';

const ListView = ({ colors, handleClickedSwatch }) => {
  return (
    <div className={styles.listViewContainer}>
     { colors?.map(swatch => {
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
  )
};

export default ListView;