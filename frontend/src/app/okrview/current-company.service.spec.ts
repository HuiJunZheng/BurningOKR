import { TestBed } from '@angular/core/testing';

import { CurrentCompanyService } from './current-company.service';
import { CompanyMapper } from '../shared/services/mapper/company.mapper';
import { CompanyUnit } from '../shared/model/ui/OrganizationalUnit/company-unit';
import { of } from 'rxjs';

const companyMapperMock: any = {
  getCompanyById$: jest.fn(),
  getParentCompanyOfOkrUnits$: jest.fn()
};
const testCompany: CompanyUnit = {
  id: 1,
  okrChildUnitIds: [],
  cycleId: 1,
  label: '',
  name: '',
  objectives: []
};
let service: CurrentCompanyService;

describe('CurrentCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: CompanyMapper, useValue: companyMapperMock}
    ]
  }));

  beforeEach(() => {
    service = TestBed.inject(CurrentCompanyService);
    companyMapperMock.getCompanyById$.mockReset();
    companyMapperMock.getCompanyById$.mockReturnValue(of(testCompany));
    companyMapperMock.getParentCompanyOfOkrUnits$.mockReturnValue(of(testCompany));
  });

  it('should be created', () => {
    expect(service)
      .toBeTruthy();
  });

  it('should set current company by company id', done => {
    service.setCurrentCompanyByCompanyId(testCompany.id);
    service.getCurrentCompany$()
      .subscribe(value => {
        expect(value)
          .toEqual(testCompany);
        done();
      });
  });

  it('setCurrentCompanyByCompanyId gets null as parameter', done => {
    companyMapperMock.getCompanyById$.mockReturnValue(of(null));
    service.setCurrentCompanyByCompanyId(testCompany.id);
    service.getCurrentCompany$()
      .subscribe(value => {
        expect(value)
          .toEqual(null);
        done();
      });
  });

  it('setCurrentCompanyByCompanyId gets undefined as parameter', done => {
    companyMapperMock.getCompanyById$.mockReturnValue(of(undefined));
    service.setCurrentCompanyByCompanyId(testCompany.id);
    service.getCurrentCompany$()
      .subscribe(value => {
        expect(value)
          .toEqual(undefined);
        done();
      });
  });

  it('should set current company by child okrChildUnit id', done => {
    service.setCurrentCompanyByChildDepartmentId(0);
    service.getCurrentCompany$()
      .subscribe(value => {
        expect(value)
          .toEqual(testCompany);
        done();
      });
  });

  it('setCurrentCompanyByChildDepartmentId gets null as parameter', done => {
    companyMapperMock.getParentCompanyOfOkrUnits$.mockReset();
    companyMapperMock.getParentCompanyOfOkrUnits$.mockReturnValue(of(null));
    service.setCurrentCompanyByChildDepartmentId(0);
    service.getCurrentCompany$()
      .subscribe(value => {
        expect(value)
          .toEqual(null);
        done();
      });
  });

  it('setCurrentCompanyByChildDepartmentId gets undefined as parameter', done => {
    companyMapperMock.getParentCompanyOfOkrUnits$.mockReset();
    companyMapperMock.getParentCompanyOfOkrUnits$.mockReturnValue(of(undefined));
    service.setCurrentCompanyByChildDepartmentId(0);
    service.getCurrentCompany$()
      .subscribe(value => {
        expect(value)
          .toEqual(undefined);
        done();
      });
  });
});
