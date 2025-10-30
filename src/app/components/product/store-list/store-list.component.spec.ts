import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaListComponent } from './store-list.component';

describe('StoreListComponent', () => {
  let component: TiendaListComponent;
  let fixture: ComponentFixture<TiendaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
