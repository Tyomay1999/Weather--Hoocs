import React from 'react';
import headerModule from './header.module.css'

const Header = () => {
    return (
        <header className={headerModule.page_header}>
            <div className={headerModule.searchBarMain}>
                <i className={`${headerModule.material_icons} ${headerModule.searchBarSearchIcon} ${headerModule.noUserSelect}`}>search</i>
                <input
                    type="text"
                    className='input'
                    name="header-search"
                    placeholder="Country Name..."
                    id={headerModule.searchBarInput}
                    onKeyUp={e => {
                        if (e.key === 'Enter') {
                            console.log(document.querySelector('.input').value)
                        }
                    }
                    }
                />
            </div>
        </header>
    )
}
console.log("Header -> document.querySelector('.input').value", document.querySelector('.input'))

export default Header;