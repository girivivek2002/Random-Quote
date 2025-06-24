import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const quotes = [
  { text: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Whether you think you can, or you think you can’t – you’re right.", author: "Henry Ford" },

  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Try not to become a man of success but rather a man of value.", author: "Albert Einstein" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Learn as if you will live forever, live like you will die tomorrow.", author: "Mahatma Gandhi" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Limit your 'always' and your 'nevers.'", author: "Amy Poehler" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
  { text: "It is never too late to be what you might have been.", author: "George Eliot" },
  { text: "We become what we think about.", author: "Earl Nightingale" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" }


];

const colors = function colors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}



const RandomQuoteMachine = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [color, setColor] = useState(colors());

  const newQuote = () => {
    let newIndex, newColor;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === index);
    
    newColor = colors();
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
