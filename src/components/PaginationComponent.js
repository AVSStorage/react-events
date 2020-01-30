import * as React from 'react';
export default function PaginationComponent({paginateLinksArray, currentPage, paginate}) {
    return (
        <ul className="uk-width-1-1@l uk-pagination uk-flex-center">
            {paginateLinksArray.map((link) => <li className={link === currentPage ? "uk-active" : ''}>
                <button className={"uk-button uk-button-default"} onClick={() => {
                    paginate(link)
                }
                }>{link}</button>
            </li>)}
        </ul>
    )
}