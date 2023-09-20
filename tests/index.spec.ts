/// <reference types="../typing/drino-rx" />

import { expect } from '@esm-bundle/chai';
import type { RequestController } from 'drino';
import drino from 'drino';
import { map, tap } from 'rxjs';
import type { SinonSandbox, SinonStub } from 'sinon';
import sinon from 'sinon';
import { drinoRx } from '../src';

describe('Drino RxJS plugin', () => {

  drino.use(drinoRx);

  const sandbox: SinonSandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should convert RequestController to Observable', (done: Mocha.Done) => {

    const reqCtrl: RequestController<any> = drino.get('/');

    (sandbox.stub(reqCtrl, 'consume') as SinonStub).withArgs().returns(Promise.resolve(1));

    reqCtrl.toObservable().pipe(
      tap({ next: (value: number) => expect(value).to.be.equal(1) }),
      map(() => 2)
    ).subscribe({
      next: (value: number) => {
        expect(value).to.be.equal(2);
        done();
      },
      error: done
    });
  });
});
