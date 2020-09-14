export class Product {
  private selected: boolean;
  public disponible: string[];
  constructor(public nombre: string, public u: string) {
    this.disponible = ['talla', 'colores'];
  }
  isSelected(): boolean {
    return this.selected;
  }
  setSelected(s: boolean): void {
    this.selected = s;
  }
}
