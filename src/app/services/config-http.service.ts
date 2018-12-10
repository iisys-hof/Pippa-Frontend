import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ConfigHttpService {

  constructor(private http: HttpClient) {
  }

  public getPersonalDataJson() {
    return this.http.get('http://localhost:8000/api/mainConfig');
  }

  public setPersonalDataJson(config: PropertyGroup[]) {
    return this.http.post('http://localhost:8000/api/mainConfig', config, httpOptions);
  }

  public getSkillsArray() {
    return this.http.get('http://localhost:8000/api/skills');
  }

  public getSkillConfigJson(skill: String) {
    return this.http.get('http://localhost:8000/api/skills/' + skill);
  }

  public setSkillConfigJson(config: PropertyGroup[], skill: String) {
    return this.http.post('http://localhost:8000/api/skills/' + skill, config, httpOptions);
  }
}
