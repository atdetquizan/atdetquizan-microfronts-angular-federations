import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotoModalBodyComponent } from './gallery-photo-modal-body.component';

describe('GalleryPhotoModalBodyComponent', () => {
  let component: GalleryPhotoModalBodyComponent;
  let fixture: ComponentFixture<GalleryPhotoModalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GalleryPhotoModalBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPhotoModalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
