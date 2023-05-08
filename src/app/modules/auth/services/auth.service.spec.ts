import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as mockRaw from '../../../data/user.json';
import { of } from 'rxjs';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Prueba del sendCredentials
  it('Debe de retornar un objecto con "data" y "tokenSession"',
    (done: DoneFn) => {

      // Arrange
      const user: any = mockUser.userOk
      const mockResponse = {
        data: {},
        tokenSession: '0x0x0x'
      }

      httpClientSpy.post.and.returnValue(
        of(mockResponse) // Ya es observable
      )

      // Act
      service.sendCredentials(user.email, user.password)
        .subscribe(responseApi => {// ['data','tokenSession']
          const getProperties = Object.keys(responseApi)
          expect(getProperties).toContain('data')
          expect(getProperties).toContain('tokenSession')
          done()
        })
    })

  it('TEST de suma de 2 + 3', () => {
    const a = 2
    const b = 3
    const c = service.suma(a, b)

    expect(c).toEqual(5)
  })

});
