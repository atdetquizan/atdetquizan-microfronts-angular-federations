import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTaggedComponent } from './gallery-tagged.component';

describe('GalleryTaggedComponent', () => {
  let component: GalleryTaggedComponent;
  let fixture: ComponentFixture<GalleryTaggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTaggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryTaggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
