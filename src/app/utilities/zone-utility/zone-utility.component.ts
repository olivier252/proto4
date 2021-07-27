import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { RayonService } from '../../services/rayon.service';

@Component({
  selector: 'app-zone-utility',
  templateUrl: './zone-utility.component.html',
  styleUrls: ['./zone-utility.component.scss']
})
export class ZoneUtilityComponent implements OnInit {

  @Input() isMobilePortrait: boolean;

  zoneFormGroup: FormGroup;
  itemsMenu: any[];
  itemsProduct = this.rayonService.items;
  itemProduct: Product;
  refBarCodePattern = "[0-9]{3}";

  constructor(
    private rayonService: RayonService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.itemsMenu = this.rayonService.itemsMenu;
    this.initZoneForm();
  }

  initZoneForm() {
    this.zoneFormGroup = this.formBuilder.group({
      barcode: ['', [Validators.required, Validators.pattern(this.refBarCodePattern)]]
    });
  }

  onSubmitZoneForm() {
    let currentItemCodeBar: string = this.zoneFormGroup.get('barcode').value;
    this.itemsProduct.find(item => {
      if (item.codeModele === currentItemCodeBar) {
        this.router.navigate(['/zone', item.codeModele]);
      }
    });
  }
}
