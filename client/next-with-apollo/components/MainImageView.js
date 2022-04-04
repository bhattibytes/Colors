import styles from '../styles/Home.module.css';

const MainImageView = ({ colors }) => {
  return (
    <div className={styles.mainViewContainer}>
      <div className={styles.mainImgContainer}>
        <img role="presentation" className={styles.mainImg} width={"100%"} height={500} 
        style={{ backgroundColor: colors ? colors[9]?.hsl : 'black' }}
        />
        <h2 className={styles.mainText}>{ colors[9]?.name }</h2>
        <h2 className={styles.mainText}>HEX { colors[9]?.hex }</h2>
        <h2 className={styles.mainText}>{ colors[9]?.rgb }</h2>
      </div>
    </div>
  )
};

export default MainImageView;