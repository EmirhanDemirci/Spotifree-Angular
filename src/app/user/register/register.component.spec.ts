import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot({
          timeOut: 800,
          progressBar: true,
          onActivateTick: true,
          enableHtml: true,
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the register component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 3 controls', () => {
    expect(component.service.formModel.contains('username')).toBeTruthy();
    expect(component.service.formModel.contains('passwords')).toBeTruthy();
  });

  it('should make the username control required', () => {
    const controlRequired = component.service.formModel.get('username');
    controlRequired.setValue('');
    const controlMaxCharacters = component.service.formModel.get('username');
    controlMaxCharacters.setValue('');

    expect(controlRequired.valid).toBeFalsy();
    expect(controlMaxCharacters.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    const controlRequired = component.service.formModel.get(
      'passwords.password'
    );
    controlRequired.setValue('');
    const controlMaxCharacters = component.service.formModel.get(
      'passwords.password'
    );
    controlMaxCharacters.setValue('');

    expect(controlRequired.valid).toBeFalsy();
    expect(controlMaxCharacters.valid).toBeFalsy();
  });
});
