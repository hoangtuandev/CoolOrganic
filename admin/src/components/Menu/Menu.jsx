import React from 'react';
import styles from './Menu.module.scss'
import MenuSearch from './MenuSearch'
import MenuControl from './MenuControl'

function Menu(props) {

    const { handleLogout } = props

    return (
        <div className={`${styles.menu}`}>
            <div className={`${styles.mainMenu}`}>
                <MenuSearch></MenuSearch>
                <MenuControl handleLogout={handleLogout}></MenuControl>
            </div>
            {/* <div className={`${styles.mainContents}`}>content</div> */}
        </div>
    );
}

export default Menu;