import { of, Observable } from 'rxjs';

export class RouteMock {
  params: Observable<any> = of({});
}
