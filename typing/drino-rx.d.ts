import type { Observable } from 'rxjs';

declare module 'drino' {

  declare class RequestController<Resource> {
    /**
     * Convert Drino RequestController to RxJS Observable.
     */
    toObservable(): Observable<Resource>;
  }
}

export {};
