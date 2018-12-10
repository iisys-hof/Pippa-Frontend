import {Component, OnInit} from '@angular/core';
import {ConfigHttpService} from '../../services/config-http.service';

@Component({
  selector: 'app-personal-data-manager',
  templateUrl: './main-config.component.html',
  styleUrls: ['./main-config.component.css'],
})
export class MainConfigComponent implements OnInit {

  constructor(private _configService: ConfigHttpService) {
  }

  public personalConfig: PropertyGroup[] = null;

  ngOnInit() {
    this.getConfig();
  }

  public getConfig() {
    this._configService.getPersonalDataJson()
      .subscribe((data: PropertyGroup[]) => {

        this.personalConfig = data;
      });
  }

  public storeConfig() {
    this._configService.setPersonalDataJson(this.personalConfig)
      .subscribe((data: any) => {

      });
  }
}
