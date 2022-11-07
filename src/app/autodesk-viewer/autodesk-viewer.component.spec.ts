import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodeskViewerComponent } from './autodesk-viewer.component';

describe('AutodeskViewerComponent', () => {
  let component: AutodeskViewerComponent;
  let fixture: ComponentFixture<AutodeskViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutodeskViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutodeskViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
