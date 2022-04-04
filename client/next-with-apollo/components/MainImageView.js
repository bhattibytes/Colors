import styles from '../styles/Home.module.css';
import Swatches from './Swatches';

const MainImageView = ({ colors, selectedSwatch, handleClickedSwatch }) => {
  return (
    <div className={styles.mainViewContainer}>
      <div className={styles.mainImgContainer}>
        <img role="presentation" className={styles.mainImg} width={"100%"} height={500} 
        style={{ backgroundColor: selectedSwatch ? selectedSwatch.hsl : colors ? colors[9]?.hsl : 'black' }}
        />
        <h2 className={styles.mainText}>{ selectedSwatch ?  selectedSwatch.name : colors[9]?.name }</h2>
        <h2 className={styles.mainText}>HEX { selectedSwatch ?  selectedSwatch.hex : colors[9]?.hex }</h2>
        <h2 className={styles.mainText}>{ selectedSwatch ?  selectedSwatch.rgb : colors[9]?.rgb }</h2>
      </div>
      <Swatches colors={colors} handleClickedSwatch={handleClickedSwatch} />
    </div>
  )
};

export default MainImageView;