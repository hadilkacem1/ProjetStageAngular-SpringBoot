import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailoffreComponent } from './detailoffre.component';

describe('DetailoffreComponent', () => {
  let component: DetailoffreComponent;
  let fixture: ComponentFixture<DetailoffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailoffreComponent]
    });
    fixture = TestBed.createComponent(DetailoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
