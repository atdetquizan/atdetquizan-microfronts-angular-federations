import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotoModalHeaderComponent } from './gallery-photo-modal-header.component';

describe('GalleryPhotoModalHeaderComponent', () => {
  let component: GalleryPhotoModalHeaderComponent;
  let fixture: ComponentFixture<GalleryPhotoModalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GalleryPhotoModalHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPhotoModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
