import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCredentialsComponentComponent } from './user-credentials-component.component';

describe('UserCredentialsComponentComponent', () => {
  let component: UserCredentialsComponentComponent;
  let fixture: ComponentFixture<UserCredentialsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCredentialsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCredentialsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
