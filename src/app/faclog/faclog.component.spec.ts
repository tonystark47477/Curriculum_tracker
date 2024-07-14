import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaclogComponent } from './faclog.component';

describe('FaclogComponent', () => {
  let component: FaclogComponent;
  let fixture: ComponentFixture<FaclogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaclogComponent]
    });
    fixture = TestBed.createComponent(FaclogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
