import makeHtmlTemplate from '../src/template-component.js';
import testData from '../data/test-data.js';
import { readFromQuery } from './hash-query.js';

console.log(testData);
makeHtmlTemplate(testData);
