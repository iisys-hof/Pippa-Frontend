import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConfigHttpService} from '../../services/config-http.service';

@Component({
  selector: 'app-config-viewer',
  templateUrl: './config-viewer.component.html',
  styleUrls: ['./config-viewer.component.css']
})
export class ConfigViewerComponent implements OnInit {

  @Input() config: PropertyGroup[];

  @Output() notifyStore: EventEmitter<any> = new EventEmitter<any>();
  @Output() notifyReset: EventEmitter<any> = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }

  public storeConfig() {
    this.notifyStore.emit();
  }

  public resetConfig() {
    this.notifyReset.emit();
  }

}
