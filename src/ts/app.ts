import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Notebook from './domain/Notebook';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'The Avengers', 500, 2012, 'США', 'Avengers Assemble!',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
console.log(cart.items);
console.log(cart.totalAmount());
console.log(cart.totalDiscountAmount(10));
cart.remove(0);
cart.remove(1008);
cart.remove(1000);
console.log(cart.items);
cart.add(new Notebook(1010, 'Acer', 'Acer', 'TX-100', 34900));
cart.add(new Notebook(1010, 'Acer', 'Acer', 'TX-100', 34900));
cart.add(new Notebook(1010, 'Acer', 'Acer', 'TX-100', 34900));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
console.log(cart.items);
console.log(cart.totalAmount());
console.log(cart.totalDiscountAmount(10));
