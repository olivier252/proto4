import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class RayonService {
  productItem: Product = new Product("GEL-KAYANO™ 27 PLATINUM black", "6656464654", -9, 12, 177, "lmkml", "black");
 
  items: Product[] = [
    {
      codeModele: "123",
      codeLibelle: "GEL-KAYANO™ 27 PLATINUM black",
      stock: 5,
      prixTTC: 545.2,
      prixSold: 140,
      couleur: "black",
      matiere: "laine de yack"
    },
    {
      codeModele: "789",
      codeLibelle: "MIZUNO Shadow Wave 3",
      stock: 32,
      prixTTC: 98,
      prixSold: 87,
      couleur: "blue",
      matiere: "shetland"
    }
  ];

  itemsMenu: any[] = [
    { index: 0, utilRoute: "zone", matIcon: "archive" },
    { index: 1, utilRoute: "price", matIcon: "euro" },
    { index: 2, utilRoute: "price-sold", matIcon: "payment" },
    { index: 3, utilRoute: "picture", matIcon: "add_a_photo" }
  ];

  constructor() { }
}
