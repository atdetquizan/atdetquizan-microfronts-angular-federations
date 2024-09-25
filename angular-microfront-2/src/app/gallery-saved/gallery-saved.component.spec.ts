import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySavedComponent } from './gallery-saved.component';

describe('GallerySavedComponent', () => {
  let component: GallerySavedComponent;
  let fixture: ComponentFixture<GallerySavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerySavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerySavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
