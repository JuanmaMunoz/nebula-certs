import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'nebula-cert',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nebula-cert';
  private subscription = new Subscription();
  public languageSelected: string = localStorage.getItem('nebulaLanguage') || 'en';

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void{
    this.subscription.add(
      fromEvent(window,'externalChangeLanguage').subscribe((data:Partial<CustomEvent>)=>{
        this.translate.use(data.detail.language);
      })
    );
    this.translate.setDefaultLang('es');
    this.useLanguage();
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  changeLanguage(): void {
    this.languageSelected = this.languageSelected === 'en' ? 'es' : 'en';
    this.useLanguage();
  }

  useLanguage():void{
    this.translate.use(this.languageSelected);
    localStorage.setItem('nebulaLanguage', this.languageSelected);
  }
}
