import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { RayonService } from 'src/app/services/rayon.service';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.scss']
})
export class ZoneDetailComponent implements OnInit {
  codeBar: any;
  itemProduct: Product;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, 
    private rayonService: RayonService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.codeBar = params.get('id');
      let products = this.rayonService.items;
      this.itemProduct = products.find(p =>(p.codeModele === this.codeBar));
    });
  }
}
