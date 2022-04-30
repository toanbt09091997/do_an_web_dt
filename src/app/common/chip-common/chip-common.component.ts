import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {ToastrComponent} from "../../service-common/toast.service";
@Component({
  selector: 'app-chip-common',
  templateUrl: './chip-common.component.html',
  styleUrls: ['./chip-common.component.scss']
})
export class ChipCommonComponent implements OnInit {
  @Input() arrayChip: any[] = ['Lemon', 'Lime', 'Apple'];
  @Output() outPutArrayChip = new EventEmitter<any>();
  constructor(public toastr: ToastrComponent) { }

  ngOnInit(): void {
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      let array = this.arrayChip.filter(data => data.toUpperCase() === value.toUpperCase())
      if(array.length > 0) {
        this.toastr.showNoti("đã tồn tại!", "warning");
      } else {
        this.arrayChip.push(value);
      }
    }

    // Clear the input value
    event.chipInput!.clear();
    this.outPut();
  }

  remove(fruit: string): void {
    const index = this.arrayChip.indexOf(fruit);

    if (index >= 0) {
      this.arrayChip.splice(index, 1);
    }
    this.outPut();
  }

  outPut() {
    this.outPutArrayChip.emit(this.arrayChip);
  }

}
