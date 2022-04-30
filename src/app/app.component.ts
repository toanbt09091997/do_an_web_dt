import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SetTitleAppService} from "./service-common/setTitleApp.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-base';
  showFiller = false;
  currentLang = "en";
  constructor(private translate: TranslateService,
              private titleService: SetTitleAppService) {
    translate.addLangs(['en', 'vi']);
    const lang = localStorage.getItem("NG_TRANSLATE_LANG_KEY");
    if (!lang) {
      this.currentLang = "en";
      localStorage.setItem("NG_TRANSLATE_LANG_KEY", this.currentLang);
      this.translate.setDefaultLang("en");
    } else {
      this.currentLang = lang;
      this.translate.use(lang);
    }
  }

  toggleSidebar() {
    this.showFiller = !this.showFiller;
  }

  setTitle(newTitle: any) {
    this.titleService.setTitle(newTitle);
  }
}
