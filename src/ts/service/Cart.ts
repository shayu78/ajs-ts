import Buyable from '../domain/Buyable';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (this.items.some((value: Buyable) => value.id === item.id)
            && ((item instanceof Book) || (item instanceof Movie) || (item instanceof MusicAlbum))) return;
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalAmount(): number {
        return this.items.reduce((total: number, value: Buyable) => total + value.price, 0);
    }

    totalDiscountAmount(discount: number): number {
        const totalAmount: number = this.totalAmount();
        return Math.floor(totalAmount - totalAmount * (discount / 100));
    }

    remove(id: number): void {
        const index = this.items.findIndex((value: Buyable) => value.id === id);
        if (index !== -1) this._items.splice(index, 1);
    }
}
