const theQuotes = [
 { 
   quote:'Java is to JavaScript, <br> like Boter is to Boterham',
   from: 'M. Auerbach, &copy; 2021'
}, 
 {
   quote:'Als je er geen zin in hebt, doe een dutje',
   from: '-Estailin Alejandro'
   },
    
 { 
   quote:'Life is either a great adventure or nothing',
   from: '-Helen Keller'
   },
];

const quoteEl = document.querySelector('.quote');
const fromEl = document.querySelector('.credits');
const reloadEl = document.querySelector('.reload');


function showQuote() {
   const getQuoteNo = Math.floor(Math.random() *theQuotes.length);
   const useQuote = theQuotes[getQuoteNo];
   quoteEl.innerHTML = useQuote.quote;
   fromEl.innerHTML = useQuote.from;
}

reloadEl.addEventListener('click', showQuote);

showQuote();