import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotoModalFooterComponent } from './gallery-photo-modal-footer.component';

describe('GalleryPhotoModalFooterComponent', () => {
  let component: GalleryPhotoModalFooterComponent;
  let fixture: ComponentFixture<GalleryPhotoModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GalleryPhotoModalFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPhotoModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
