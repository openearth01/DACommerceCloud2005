import { Component,OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';
import { Product } from '@spartacus/core';

declare function getAssetId(SKU): any;
@Component({
  selector: 'app-threekit-image-comp',
  templateUrl: './threekit-image-comp.component.html',
  styleUrls: ['./threekit-image-comp.component.scss']
})
export class ThreekitImageCompComponent implements OnInit {
  product$: Observable<Product> = this.currentProductService.getProduct();
  constructor(private currentProductService: CurrentProductService) { }

  ngOnInit(): void {
    

    console.log("Executing");
   
    getAssetId("12345");
   
  }

}
