import {Component, OnInit} from '@angular/core';
import {ConfigHttpService} from '../../services/config-http.service';

@Component({
  selector: 'app-config-manager',
  templateUrl: './skill-config.component.html',
  styleUrls: ['./skill-config.component.css']
})
export class SkillConfigComponent implements OnInit {

  constructor(private _configService: ConfigHttpService) {
  }

  skills: Item[] = null;
  currentlySelected = null;
  currentConfig: PropertyGroup[] = null;

  ngOnInit() {
    this.getSkills();
  }

  private getSkills() {
    this._configService.getSkillsArray()
      .subscribe((data: Item[]) => {
        console.log(data);
        this.skills = data;
      });
  }

  public skillSelected($event) {

    this.setSkill();

  }

  private setSkill() {

    this.getConfig();

  }

  public getConfig() {
    this._configService.getSkillConfigJson(this.currentlySelected)
      .subscribe((data: PropertyGroup[]) => {

        this.currentConfig = data;
      });
  }

  public storeConfig() {
    this._configService.setSkillConfigJson(this.currentConfig, this.currentlySelected)
      .subscribe((data: any) => {

      });
  }

}
