import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SetTitleAppService} from "../../service-common/setTitleApp.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.scss']
})
export class AppSideNavComponent implements OnInit {
  @Input() showFiller = false;
  @Output() toggleSidebar = new EventEmitter();
  sidenavWidth = 4;
  public ngStyle: string = '';

  constructor(private titleService: SetTitleAppService) { }

  ngOnInit(): void {
  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

  toggle() {
    this.toggleSidebar.emit();
  }

  toggleFiller() {
    this.showFiller = !this.showFiller;
  }

  setTitle(newTitle: any) {
    this.titleService.setTitle(newTitle);
  }
}
