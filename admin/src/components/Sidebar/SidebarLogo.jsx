import React from 'react';
import styles from './Sidebar.module.scss'
import LogoCoolOrganic from '../../images/logo_coolorganic.png'

function SidebarLogo() {
    return (
        <div className={`${styles.sidebarLogo}`}>
            <img src={LogoCoolOrganic} alt="Logo CoolOrganic" />
        </div>
    );
}

export default SidebarLogo;