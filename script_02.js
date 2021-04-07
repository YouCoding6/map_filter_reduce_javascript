const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 },
];



const books_sorted = books.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
    }
    return 0
})

console.log(books_sorted)

////////////////////////////////////////////////////////////////////


const books_rented_at_least_once = books.some(book => {

    book.rent != 0

    if (true) {
        console.log("Oui")
    }
    else {
        console.log("Non")
    }
})

books_rented_at_least_once

////////////////////////////////////////////////////////////////////

const book_more_rented = books.reduce(
    (max, book) => (book.rented > max.rented ? book : max
    ), books[0])

console.log(book_more_rented)

////////////////////////////////////////////////////////////////////

const book_less_rented = books.reduce(
    (min, book) => (book.rented < min.rented ? book : min
    ), books[0]
)

console.log(book_less_rented)

////////////////////////////////////////////////////////////////////

const list_final_of_books = books.filter(book => book.id != 133712)

console.log(list_final_of_books)