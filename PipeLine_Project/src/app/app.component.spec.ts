import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, HomeComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }); 

});
