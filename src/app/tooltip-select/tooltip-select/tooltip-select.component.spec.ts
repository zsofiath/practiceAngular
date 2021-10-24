import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TooltipSelectComponent } from './tooltip-select.component';

describe('TooltipSelectComponent', () => {
  let component: TooltipSelectComponent;
  let fixture: ComponentFixture<TooltipSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a button with given text as input', () => {
    component.defaultText = 'Default text';
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.innerText).toBe('Default text');
  });
});
