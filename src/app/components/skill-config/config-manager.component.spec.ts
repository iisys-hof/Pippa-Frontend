import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillConfigComponent } from './skill-config.component';

describe('SkillConfigComponent', () => {
  let component: SkillConfigComponent;
  let fixture: ComponentFixture<SkillConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
