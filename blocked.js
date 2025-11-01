// List of 50 motivational quotes
const motivationalQuotes = [
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Your limitation—it's only your imagination.", author: "Unknown" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  { text: "Success doesn't just find you. You have to go out and get it.", author: "Unknown" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "Dream bigger. Do bigger.", author: "Unknown" },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Unknown" },
  { text: "Little things make big things happen.", author: "John Wooden" },
  { text: "It's going to be hard, but hard does not mean impossible.", author: "Unknown" },
  { text: "Don't wait for opportunity. Create it.", author: "Unknown" },
  { text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { text: "The key to success is to focus our conscious mind on things we desire, not things we fear.", author: "Brian Tracy" },
  { text: "Dreams don't work unless you do.", author: "John C. Maxwell" },
  { text: "Go the extra mile. It's never crowded.", author: "Unknown" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "If you want something you've never had, you must be willing to do something you've never done.", author: "Thomas Jefferson" },
  { text: "Great things take time.", author: "Unknown" },
  { text: "If your dreams don't scare you, they aren't big enough.", author: "Unknown" },
  { text: "Every accomplishment starts with the decision to try.", author: "Unknown" },
  { text: "Your potential is endless. Go do what you were created to do.", author: "Unknown" },
  { text: "Be so good they can't ignore you.", author: "Steve Martin" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Focus on where you want to go, not on what you fear.", author: "Tony Robbins" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "You don't have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Only I can change my life. No one can do it for me.", author: "Carol Burnett" },
  { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
  { text: "To live is the rarest thing in the world. Most people just exist.", author: "Oscar Wilde" },
  { text: "Nothing is impossible. The word itself says 'I'm possible!'", author: "Audrey Hepburn" },
  { text: "You've got to get up every morning with determination if you're going to go to bed with satisfaction.", author: "George Lorimer" },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  { text: "Wherever you are, be all there.", author: "Jim Elliot" },
  { text: "Your life only gets better when you get better.", author: "Brian Tracy" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" }
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
}

// Display a random quote when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const quote = getRandomQuote();
  const quoteTextElement = document.getElementById('quoteText');
  const quoteAuthorElement = document.getElementById('quoteAuthor');
  
  if (quoteTextElement) {
    quoteTextElement.textContent = quote.text;
  }
  
  if (quoteAuthorElement && quote.author) {
    quoteAuthorElement.textContent = `— ${quote.author}`;
  }
});

