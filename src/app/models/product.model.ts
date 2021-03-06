import { v4 as uuid } from 'uuid';

export class Product {
  private selected: boolean;
  public disponible: string[];
  id = uuid();

  constructor(
    public nombre: string,
    public u: string,
    public votes: number = 0
  ) {
    this.disponible = ['talla', 'colores'];
  }
  isSelected(): boolean {
    return this.selected;
  }
  setSelected(s: boolean): void {
    console.log(s);
    this.selected = s;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }
}
