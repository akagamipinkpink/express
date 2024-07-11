import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const books = [
        {
            judul: 'The Princeton Companion to Mathematics',
            penulis: 'Timothy Gowers',
            terbit: '2008',
            sampul: 'https://m.media-amazon.com/images/I/51qSt4Rwr2L._SX352_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Flatland: A Romance of Many Dimensions',
            penulis: 'Edwin A. Abbott',
            terbit: '1884',
            sampul: 'https://m.media-amazon.com/images/I/41SbPgEX2UL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'The Man Who Knew Infinity: A Life of the Genius Ramanujan',
            penulis: 'Robert Kanigel',
            terbit: '1991',
            sampul: 'https://m.media-amazon.com/images/I/51EbR5-wzSL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Gödel, Escher, Bach: An Eternal Golden Braid',
            penulis: 'Douglas R. Hofstadter',
            terbit: '1979',
            sampul: 'https://m.media-amazon.com/images/I/41ld7EMMKYL._SX352_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'A Beautiful Mind',
            penulis: 'Sylvia Nasar',
            terbit: '1998',
            sampul: 'https://m.media-amazon.com/images/I/51Hd8olB+hL._SX329_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Prime Obsession: Bernhard Riemann and the Greatest Unsolved Problem in Mathematics',
            penulis: 'John Derbyshire',
            terbit: '2003',
            sampul: 'https://m.media-amazon.com/images/I/51yB-g-1MkL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'In Pursuit of the Unknown: 17 Equations That Changed the World',
            penulis: 'Ian Stewart',
            terbit: '2012',
            sampul: 'https://m.media-amazon.com/images/I/51bxDQk9WpL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Fermat’s Enigma: The Epic Quest to Solve the World’s Greatest Mathematical Problem',
            penulis: 'Simon Singh',
            terbit: '1997',
            sampul: 'https://m.media-amazon.com/images/I/51zB2zjli6L._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'The Joy of x: A Guided Tour of Math, from One to Infinity',
            penulis: 'Steven Strogatz',
            terbit: '2012',
            sampul: 'https://m.media-amazon.com/images/I/41AR5fXKNEL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'How Not to Be Wrong: The Power of Mathematical Thinking',
            penulis: 'Jordan Ellenberg',
            terbit: '2014',
            sampul: 'https://m.media-amazon.com/images/I/51O8mt4frFL._SX329_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Mathematics: Its Content, Methods and Meaning',
            penulis: 'A. D. Aleksandrov',
            terbit: '1963',
            sampul: 'https://m.media-amazon.com/images/I/51kWuXcvY0L._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'The Colossal Book of Mathematics',
            penulis: 'Martin Gardner',
            terbit: '2001',
            sampul: 'https://m.media-amazon.com/images/I/51O1oPGG-AL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Zero: The Biography of a Dangerous Idea',
            penulis: 'Charles Seife',
            terbit: '2000',
            sampul: 'https://m.media-amazon.com/images/I/51XkMAi0+sL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'A Mathematician’s Apology',
            penulis: 'G. H. Hardy',
            terbit: '1940',
            sampul: 'https://m.media-amazon.com/images/I/41PRFcb19EL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'The Math Book: From Pythagoras to the 57th Dimension, 250 Milestones in the History of Mathematics',
            penulis: 'Clifford A. Pickover',
            terbit: '2009',
            sampul: 'https://m.media-amazon.com/images/I/51NWmcp1ZSL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'The Art of Statistics: How to Learn from Data',
            penulis: 'David Spiegelhalter',
            terbit: '2019',
            sampul: 'https://m.media-amazon.com/images/I/41UdKvdXmML._SX324_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Algorithms to Live By: The Computer Science of Human Decisions',
            penulis: 'Brian Christian',
            terbit: '2016',
            sampul: 'https://m.media-amazon.com/images/I/41kcbNml7kL._SX329_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Love and Math: The Heart of Hidden Reality',
            penulis: 'Edward Frenkel',
            terbit: '2013',
            sampul: 'https://m.media-amazon.com/images/I/41-9IFL0KHL._SX329_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'The Signal and the Noise: Why So Many Predictions Fail—but Some Don’t',
            penulis: 'Nate Silver',
            terbit: '2012',
            sampul: 'https://m.media-amazon.com/images/I/41Bpfwi+5NL._SX327_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        },
        {
            judul: 'Mathematics for the Nonmathematician',
            penulis: 'Morris Kline',
            terbit: '1967',
            sampul: 'https://m.media-amazon.com/images/I/51m-K4sPZSL._SX331_BO1,204,203,200_.jpg',
            kategori: 'matematika'
        }
    ];

    for (const book of books) {
        await prisma.buku.create({
            data: {
                judul: book.judul,
                penulis: book.penulis,
                terbit: book.terbit,
                status: false, // default value
                sampul: book.sampul,
                kategori: book.kategori
            },
        });
    }
}



main()
    .then(() => console.log('Data inserted successfully'))
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
