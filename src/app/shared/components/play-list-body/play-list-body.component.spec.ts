import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterListPipe } from '@shared/pipe/filter-list.pipe';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

import { PlayListBodyComponent } from './play-list-body.component';

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PlayListBodyComponent,
        OrderListPipe,
        FilterListPipe
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
