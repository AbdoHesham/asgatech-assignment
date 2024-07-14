import { Component } from '@angular/core';
import { NetworkService } from './shared/services/network.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { DirService } from './shared/services/dir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AWP_FE';
  currentLang: string;

  constructor(
    public networkService: NetworkService,
    public translate: TranslateService,
    public DirService : DirService
  ) {}

  ngOnInit() {
    this.initLang();
  }

  initLang() {
    localStorage.getItem('currentLang')
      ? localStorage.getItem('currentLang')
      : localStorage.setItem('currentLang', 'en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);
  }


}
