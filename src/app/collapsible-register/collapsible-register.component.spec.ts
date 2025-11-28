import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleRegisterComponent } from './collapsible-register.component';

describe('CollapsibleRegisterComponent', () => {
  let component: CollapsibleRegisterComponent;
  let fixture: ComponentFixture<CollapsibleRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollapsibleRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsibleRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
