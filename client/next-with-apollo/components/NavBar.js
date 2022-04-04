import styles from '../styles/Home.module.css'
import Image from 'next/image';
import HHlogo from '../assets/HelpfulHumanLogo.png';
import Search from '../components/Search';

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <nav className={styles.innerNav}> 
          <Image className={styles.logo} src={HHlogo} 
          alt="Helpful-Human-Logo" width={75} height={75}/>
          <Search/>
        </nav>
      </div>
  );
};


export default Navbar;