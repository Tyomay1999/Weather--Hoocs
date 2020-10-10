import React from 'react';
import headerModule from './header.module.css'

const Header = () => {
    return (
        <header className={headerModule.page_header}>
            <div></div>
            <div className={headerModule.searchBarMain}>
                <i className={`${headerModule.material_icons} ${headerModule.searchBarSearchIcon} ${headerModule.noUserSelect}`}>search</i>
                <input type="text" name="header-search"  id={headerModule.searchBarInput} placeholder="Country Name..." />
            </div>
            <nav></nav>
        </header>
    )
}
export default Header;