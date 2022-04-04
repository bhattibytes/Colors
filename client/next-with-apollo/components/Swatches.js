import styles from '../styles/Home.module.css'

const Swatches = ({ colors, handleClickedSwatch }) => {
  return (
    <div className={styles.swatchContainer}>
     { colors?.map(swatch => {
        return (
          <div key={swatch.id} className={styles.swatchImgContainer}>
            <img role="presentation" className={styles.swatchImg} width={200} height={200} style={{backgroundColor: swatch.hsl}}
            onClick={() => handleClickedSwatch(swatch)}/>
            <h2 className={styles.swatchDets}>HEX {swatch.hex}</h2>
            <h2 className={styles.swatchDets}>{swatch.rgb}</h2>
          </div>
        )
     })}
    </div>
  );
};

export default Swatches;