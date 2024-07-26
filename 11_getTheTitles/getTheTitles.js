const getTheTitles = function(books) {
    let titles = []
    for (i in books) {
        titles.push(books[i].title)
    }

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;


//can also be done using map() method
//      const getTheTitles = function (array) {
//          return array.map((book) => book.title);
//      };