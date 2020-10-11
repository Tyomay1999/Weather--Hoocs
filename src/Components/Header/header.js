import React from 'react';
import headerModule from './header.module.css'

    const Header = ({getCountryName}) => {
    return (
        <header className={headerModule.page_header}>
            <div className={headerModule.searchBarMain}>
                <input
                    type="text"
                    className='input'
                    name="header-search"
                    placeholder="Country Name..."
                    id={headerModule.searchBarInput}
                    onKeyUp={e => {
                        if (e.key === 'Enter') {
                            getCountryName(document.querySelector('.input').value)
                        }
                    }
                    }
                />
            </div>
        </header>
    )
}

export default Header;