import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizedExampleComponent } from './parametrized-example.component';

describe('ParametrizedExampleComponent', () => {
  let component: ParametrizedExampleComponent;
  let fixture: ComponentFixture<ParametrizedExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametrizedExampleComponent]
    });
    fixture = TestBed.createComponent(ParametrizedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
