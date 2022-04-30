import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ToastrComponent} from "../service-common/toast.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public translate: TranslateService,public toastr: ToastrComponent,) { }

  ngOnInit(): void {
  }

  login() {
    this.toastr.createSuccess();
    this.toastr.deleteSuccess();
    this.toastr.updateSuccess();
    this.toastr.showNoti("bui duc toan", "warning");
    this.toastr.showNoti("bui duc toan", "success");
    this.toastr.showNoti("bui duc toan", "error");
    this.toastr.showNoti("bui duc toan", "info");
    this.toastr.createSuccess();
  }

}
