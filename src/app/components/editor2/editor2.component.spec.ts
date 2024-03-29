import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Editor2Component } from './editor2.component';

describe('Editor2Component', () => {
  let component: Editor2Component;
  let fixture: ComponentFixture<Editor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Editor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
