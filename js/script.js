var myQuotes = [{
    quote: "To err is human; to forgive, divine.",
    cite: "Alexander Pope",
}, {
    quote: "Reports of my death have been greatly exaggerated.",
    cite: "Mark Twain",
}, {
    quote: "A line of oversize watches that can offer many of the attributes of premium luxury watches at an affordable price.",
    cite: "Horozima",
}];

var randomQuote = Math.floor(Math.random() * myQuotes.length)

$('p', '#randomquote').text(myQuotes[randomQuote].quote);
$('cite', '#randomquote').attr('href', myQuotes[randomQuote].url).text("" + myQuotes[randomQuote].cite);
