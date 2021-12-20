import styles from "./HeaderContainer.module.scss";

const HeaderContainer = () => {
    return (
        <div className={styles.body}>
            <h1>Book Finder</h1>
            <h2>Enter Search Term Below: </h2>
            <h4>Description of this project? </h4>
        </div>
    );
};

export default HeaderContainer;
