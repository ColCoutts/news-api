import makeHtmlTemplate from '../src/template-component.js';
// import testData from '../data/test-data.js';
import './paging-component.js';
import updateSearchTerm from '../src/search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchUrl from '../src/make-search-url.js';

// console.log(testData);
// makeHtmlTemplate(testData);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    console.log(query);
    const queryOptions = readFromQuery(query);
    console.log(queryOptions);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchUrl(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(body => {
            makeHtmlTemplate(body);
        });
});
