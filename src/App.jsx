import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const quotes = [
  { text: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Whether you think you can, or you think you can’t – you’re right.", author: "Henry Ford" }
];

const colors = [
  "#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c",
  "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99",
  "#77B1A9", "#73A857"
];

const RandomQuoteMachine = () => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const newQuote = () => {
    let newIndex, newColor;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === index);

    newColor = colors[Math.floor(Math.random() * colors.length)];
    setIndex(newIndex);
    setColor(newColor);
  };

  const quote = quotes[index];

  return (
    <div className="flex items-center justify-center min-h-screen transition-all duration-700" style={{ backgroundColor: color }}>
      <div className="bg-white text-center p-10 rounded-md shadow-md transition-all duration-500" style={{ color: color }}>
        <p className="text-2xl mb-4">
          <FontAwesomeIcon icon={faQuoteLeft} className="mr-2" />
          {quote.text}
        </p>
        <p className="text-right mb-6 text-sm">- {quote.author}</p>
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer"
              className="bg-white border p-3  rounded hover:opacity-80"
              style={{ backgroundColor: color, color: "white" }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.tumblr.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-white border p-3  rounded hover:opacity-80"
              style={{ backgroundColor: color, color: "white" }}
            >
              <FontAwesomeIcon icon={faTumblr} />
            </a>
          </div>
          <button
            onClick={newQuote}
            className="px-4 py-2 text-sm rounded"
            style={{ backgroundColor: color, color: "white" }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuoteMachine;
