import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';
import Notebook from '../domain/Notebook';

describe('Cart class', () => {
  test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  });

  test('totalAmount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1009, 'The Avengers', 500, 2012, 'США', 'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    expect(cart.totalAmount()).toEqual(2625);
  });

  test('totalDiscountAmount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1009, 'The Avengers', 500, 2012, 'США', 'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    expect(cart.totalDiscountAmount(5)).toEqual(2493);
  });

  test('remove', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1009, 'The Avengers', 500, 2012, 'США', 'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    cart.remove(1008);
    expect(cart.items.length).toEqual(2);
  });

  test('append the same book twice', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'The Avengers', 500, 2012, 'США', 'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    cart.add(new Movie(1009, 'The Avengers', 500, 2012, 'США', 'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    expect(cart.items.length).toEqual(1);
  })

  test('append the same notebook twice', () => {
    const cart = new Cart();
    cart.add(new Notebook(1010, 'Acer', 'Acer', 'TX-100', 34900));
    cart.add(new Notebook(1010, 'Acer', 'Acer', 'TX-100', 34900));
    expect(cart.items.length).toEqual(2);
  })

  test('decrease notebook in cart', () => {
    const cart = new Cart();
    cart.add(new Movie(1009, 'The Avengers', 500, 2012, 'США', 'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    cart.add(new Notebook(1010, 'Acer', 'Acer', 'TX-100', 34900));
    cart.add(new Notebook(1010, 'Acer', 'Acer', 'TX-100', 34900));
    cart.remove(1010);
    expect(cart.items.length).toEqual(2);
  })
});
