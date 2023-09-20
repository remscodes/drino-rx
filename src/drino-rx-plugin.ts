import type { DrinoPlugin, PluginTools, RequestController } from 'drino';
import { from } from 'rxjs';
import './models/drino-rx.model';

const drinoRx: DrinoPlugin = {
  id: 'drino-rx',
  run: ({ reqCtrlPrototype }: PluginTools) => {
    Object.defineProperty(reqCtrlPrototype, 'toObservable', {
      value(this: RequestController<any>) {
        return from(this.consume());
      },
      configurable: true,
      enumerable: true
    });
  }
};

export default drinoRx;
