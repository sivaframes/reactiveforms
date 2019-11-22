import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplecomponenetComponent } from './samplecomponenet.component';

describe('SamplecomponenetComponent', () => {
  let component: SamplecomponenetComponent;
  let fixture: ComponentFixture<SamplecomponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplecomponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplecomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
