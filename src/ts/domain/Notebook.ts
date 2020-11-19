import Buyable from './Buyable'

export default class Notebook implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly manufacturer: string,
    readonly model: string,
    readonly price: number,
  ) { }
};
