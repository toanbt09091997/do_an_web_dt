import { Component, OnInit } from '@angular/core';
import {ColorPickerService} from "ngx-color-picker";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  itemColorChipProduct = ['Blue','Red','While','Black']
  itemCapacityChipProduct = ['64GB','128GB','256GB','512GB','1TB']
  arrayColor: any = this.itemColorChipProduct;
  arrayCapacity: any = this.itemCapacityChipProduct;
  formAddProduct: any;

  arrayFormColor: any = [];
  arrayFormCapacity: any = [];

  public color2: string = '#e920e9';
  constructor(private cpService: ColorPickerService) { }

  ngOnInit(): void {
  }

  itemColorProduct(event: any) {
    this.arrayColor = event;
  }

  itemCapacityProduct(event: any) {
    this.arrayCapacity = event;
  }

  viewFormAdd() {
    this.arrayFormColor = [];
    this.arrayFormCapacity = [];
    this.arrayCapacity.forEach((data: any) => {
      let param = {
        capacity: data,
        quantity: 10
      }
      this.arrayFormCapacity.push(param)
    })
    this.arrayColor.forEach((dataItem: any) => {
      let paramItem = {
        color: dataItem,
        colorCode: '#000000',
        image: [],
        inForCapacity: this.arrayFormCapacity
      }
      this.arrayFormColor.push(paramItem);
    })
    this.formAddProduct = this.arrayFormColor;
    console.log('formAddProduct',this.formAddProduct)
  }

}
