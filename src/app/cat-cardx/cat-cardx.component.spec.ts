import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCardxComponent } from './cat-cardx.component';

describe('CatCardxComponent', () => {
  let component: CatCardxComponent;
  let fixture: ComponentFixture<CatCardxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatCardxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCardxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
