import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update User when prompt returns a value', () => {
    spyOn(window, 'prompt').and.returnValue('John');

    component.getUserInput();

    expect(component.User).toBe('John');
  });

  it('should NOT update User when prompt returns null', () => {
    component.User = 'Existing';  // initial value
    spyOn(window, 'prompt').and.returnValue(null);

    component.getUserInput();

    expect(component.User).toBe('Existing');
  });

  it('should display the username in the template', () => {
    spyOn(window, 'prompt').and.returnValue('Alice');

    component.getUserInput();
    fixture.detectChanges();

    const pEl = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(pEl.textContent).toContain('Alice');
  });
});
