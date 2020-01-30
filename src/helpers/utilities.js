export const Translations = {
    CATEGORIES: {
        "holiday": 'Праздник',
        "event": 'Событие',
        "festival": 'Фестиваль'
    }
}

export function getUniqueArrayValues(array, field) {

    let uniqueValuesArray = new Set(
        array.map((item) => item[field])
            .reduce(function (pre, cur) {
                return pre.concat(cur);
            })
    );
    return Array.from(uniqueValuesArray);
}


export function getMaxAndMinValueFromArray(array, field) {
    return {
        max: Math.max(...array.map(item => item[field])),
        min: Math.min(...array.map(item => item[field]))
    }
}

function generatePaginateLinksArray(total_pages) {
    let paginateLinksArray = [];
    while (total_pages > 0){
        paginateLinksArray.push(total_pages);
        total_pages = total_pages - 1;
    }

    return paginateLinksArray.sort((a,b) => a > b);
}

export function Pagination(items, page, per_page) {
    let currentPage = page || 1;
    let pages = per_page || 6;
    let offset = (currentPage - 1) * pages;
    let paginatedItems = items.slice(offset).slice(0, pages);
    let total_pages = Math.ceil(items.length / pages);


    return {
        page: currentPage,
        per_page: pages,
        pre_page: currentPage - 1 ? currentPage - 1 : null,
        next_page: (total_pages > currentPage) ? currentPage + 1 : null,
        total: items.length,
        paginateLinksArray: generatePaginateLinksArray(total_pages),
        total_pages: total_pages,
        data: paginatedItems
    }
};
