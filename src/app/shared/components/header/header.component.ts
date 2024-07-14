import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  formGroup!: FormGroup;
  stateOptions: any[] = [
    {
      label: 'ar',
      value: 'ar',
      flag: '../../../assets/images/flags/saudi-arabia-flag-icon.svg',
    },
    {
      label: 'en',
      value: 'en',
      flag: '../../../assets/images/flags/united.svg',
    },
  ];

  constructor(
    private router: Router,
    private AuthService: AuthService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    const storedLang = localStorage.getItem('currentLang');
    console.log(storedLang);
    
    this.formGroup = new FormGroup({
      currentLang: new FormControl(storedLang == 'ar' ? false : true),
    });
  }
  logout() {
    localStorage.clear();
    this.AuthService.login();
  }
  changeCurrentLang(lang: any) {
    console.log(lang);
   lang = lang === true ? 'en' : 'ar' ;
    const storedLang = localStorage.getItem('currentLang');
    if (storedLang == lang) {
      return;
    } else {
      this.translate.use(lang);
      localStorage.setItem('currentLang', lang);
      location.reload();
    }
  }
}
