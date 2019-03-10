import testData from '../data/test-data.js';
import makeHtmlTemplate from '../src/template-component.js';
const test = QUnit.test;

QUnit.module('template literal for news articles');

test('set up basic template literal', function(assert) {
    //arrange
    //act
    const expected = /*html*/`
        <li>
            <h2>Coinbase users can now withdraw Bitcoin SV following BCH fork</h2>
            <h3>Author: Romain Dillet</h3>
            <h4>Published: 2019-02-15T14:53:40Z</h4>
            <img src="https://techcrunch.com/wp-content/uploads/2017/08/bitcoin-split-2017a.jpg?w=711">
            <p>If you’re a Coinbase user, you may have seen some new tokens on your account. The Bitcoin Cash chain split into two different chains back in November. It means that if you held Bitcoin Cash on November 15, you became the lucky owner of Bitcoin SV and Bitcoin …</p>
            <a href="http://techcrunch.com/2019/02/15/coinbase-users-can-now-withdraw-bitcoin-sv-following-bch-fork/">Read More</a>
        </li>
        `;

    const result = makeHtmlTemplate(testData);

    //assert
    assert.htmlEqual(result, expected);
});

