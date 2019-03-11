import { writePageToQuery } from './hash-query.js';
const previousButtonNode = document.getElementById('previous-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');
const nextButtonNode = document.getElementById('next-button');

let currentPageNumber = 1;

// export function updatePagingInfo(pagingInfo){
//     currentPageNumber = pagingInfo.page;
//     currentPageNode.textContent = currentPageNumber;

// }

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

nextButtonNode.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

previousButtonNode.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});