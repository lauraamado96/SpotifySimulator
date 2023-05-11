import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AuthPageComponent } from './auth-page.component';
import { FormControl } from '@angular/forms';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthPageComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🔴 Deberia de retornar "invalido" el formulario', () => {

    // Arrange
    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '1111111111111111111111111'
    }

    const emailForm: FormControl = component.formLogin.get('email') as FormControl
    const passwordForm: FormControl = component.formLogin.get('password') as FormControl

    // Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    // Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('✔✔ Deberia de retornar "valido" el formulario', () => {

    // Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: FormControl = component.formLogin.get('email') as FormControl
    const passwordForm: FormControl = component.formLogin.get('password') as FormControl

    // Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    // Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('👍 El boton deberia de tener la palabra "Iniciar sesión"', () => {

    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')

  })

});
