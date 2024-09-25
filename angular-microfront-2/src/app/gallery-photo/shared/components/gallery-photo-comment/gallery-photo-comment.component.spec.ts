import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotoCommentComponent } from './gallery-photo-comment.component';

describe('GalleryPhotoCommentComponent', () => {
  let component: GalleryPhotoCommentComponent;
  let fixture: ComponentFixture<GalleryPhotoCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GalleryPhotoCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPhotoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
