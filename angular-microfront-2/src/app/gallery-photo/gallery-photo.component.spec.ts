import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotoComponent } from './gallery-photo.component';

describe('GalleryPhotoComponent', () => {
  let component: GalleryPhotoComponent;
  let fixture: ComponentFixture<GalleryPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GalleryPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
