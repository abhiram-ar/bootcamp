type Book = {
    title: string;
    author: string;
    readingStatus: boolean;
};

const library: Book[] = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

function displayReadingStatus(library: Book[]): void {
    library.forEach((book) => {
        if (book.readingStatus) {
            console.log(`Already read '${book.title}' by ${book.author}.`);
        } else {
            console.log(`You still need to read '${book.title}' by ${book.author}.`);
        }
    });
}

displayReadingStatus(library);
