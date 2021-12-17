import { TestBed } from '@angular/core/testing';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { ChangePasswordDialogComponent } from './change-password-dialog.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { i18nMock } from '../../../../shared/mocks/i18n-mock';
import { FormBuilder } from '@angular/forms';
import { PasswordService } from '../password-service/password.service';
import { CurrentUserService } from '../../../services/current-user.service';
import { NGXLogger } from 'ngx-logger';
import { MaterialTestingModule } from '../../../../testing/material-testing.module';

describe('ChangePasswordDialogComponent', () => {
  let component: any;
  let fixture: any;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordDialogComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      imports: [MaterialTestingModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: FormBuilder, useValue: formBuilder},
        {provide: PasswordService, useValue: {}},
        {provide: CurrentUserService, useValue: {}},
        {provide: I18n, useValue: i18nMock},
        {provide: NGXLogger, useValue: {}},
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ChangePasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
      .toBeTruthy();
  });
});
