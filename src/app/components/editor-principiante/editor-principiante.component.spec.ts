import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPrincipianteComponent } from './editor-principiante.component';

describe('EditorPrincipianteComponent', () => {
  let component: EditorPrincipianteComponent;
  let fixture: ComponentFixture<EditorPrincipianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPrincipianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPrincipianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
