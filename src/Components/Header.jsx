import React, { useState, useEffect } from 'react';
import './Header.component.css'; // Import the CSS file

function Header() {
    const [quoteData, setQuoteData] = useState({ quote: '', author: '', category: '' });

    const fetchQuote = () => {
        const options = {
            method: "GET",
            headers: { 'x-api-key': "E9hJ3bk9D9ysEYiEv7exdw==0duuLNKqauGCadpa" }
        };
        const url = "https://api.api-ninjas.com/v1/quotes";
        
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setQuoteData({
                        quote: data[0].quote,
                        author: data[0].author,
                        category: data[0].category
                    });
                }
            })
            .catch(err => {
                console.error(`Error: ${err}`);
            });
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quote-container">
            <h2 className="heading">Quote Generator</h2>
            <p id="quote-text" className="quote-text">{quoteData.quote}</p>
            <p id="author-text" className="author-text">- {quoteData.author}</p>
            <p id="category-text" className="category-text">Category: {quoteData.category}</p>
            <button className="quote-button" onClick={fetchQuote}>Generate New Quote</button>
        </div>
    );
}

export default Header;