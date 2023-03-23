import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiondataComponent } from './regiondata.component';

describe('RegiondataComponent', () => {
  let component: RegiondataComponent;
  let fixture: ComponentFixture<RegiondataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiondataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
