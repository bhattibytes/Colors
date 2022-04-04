import styles from '../styles/Home.module.css'

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={""}>
        <input type="text" placeholder="Color Search"/>
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Search;