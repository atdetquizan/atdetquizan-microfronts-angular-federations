import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryReelsComponent } from './gallery-reels.component';

describe('GalleryReelsComponent', () => {
  let component: GalleryReelsComponent;
  let fixture: ComponentFixture<GalleryReelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryReelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
