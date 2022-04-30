import {Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SetTitleAppService {
  constructor(
    private title: Title,
  ) { }

  setTitle(newTitle: any) {
    this.title.setTitle("PhoneStore - " + newTitle);
  }


}
