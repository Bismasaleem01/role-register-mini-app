import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRegisteredUsersComponent } from './view-all-registered-users.component';

describe('ViewAllRegisteredUsersComponent', () => {
  let component: ViewAllRegisteredUsersComponent;
  let fixture: ComponentFixture<ViewAllRegisteredUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllRegisteredUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllRegisteredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
