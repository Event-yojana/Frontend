import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../../../src/app/app.settings';
import { Settings } from '../../../../src/app/app.settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings: Settings;
    constructor(public appSettings:AppSettings, private router:Router){
        this.settings = this.appSettings.settings;  
    }  
  title = 'Admin';
}
