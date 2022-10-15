function generate() {
    var quotes = {
        "-Nelson Mandela" : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "-Walt Disney" : '"The way to get started is to quit talking and begin doing."',
        "-Steve Jobs" : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    }
    var authors = Object.keys(quotes);
    // console.log(authors);
    var author = authors [Math.floor(Math.random() * authors.length)];
    var quote = quotes[author]

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    
 
    // console.log(author);
}