import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FachomeComponent } from './fachome.component';

describe('FachomeComponent', () => {
  let component: FachomeComponent;
  let fixture: ComponentFixture<FachomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FachomeComponent]
    });
    fixture = TestBed.createComponent(FachomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
