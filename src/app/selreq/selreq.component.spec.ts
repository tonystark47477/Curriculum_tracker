import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelreqComponent } from './selreq.component';

describe('SelreqComponent', () => {
  let component: SelreqComponent;
  let fixture: ComponentFixture<SelreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelreqComponent]
    });
    fixture = TestBed.createComponent(SelreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
