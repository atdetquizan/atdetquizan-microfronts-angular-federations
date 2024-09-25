import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusListComponent } from './user-status-list.component';

describe('UserStatusListComponent', () => {
  let component: UserStatusListComponent;
  let fixture: ComponentFixture<UserStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserStatusListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
