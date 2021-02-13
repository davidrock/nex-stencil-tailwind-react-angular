import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import tailwind from 'stencil-tailwind';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  plugins: [sass(), tailwind()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/design-system/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/design-system/www',
      serviceWorker: null,
    },
    reactOutputTarget({
      componentCorePackage: '@myworkspace/design-system',
      proxiesFile:
        '../../../libs/design-system-react/src/generated/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@myworkspace/design-system',
      directivesProxyFile:
        '../../../libs/design-system-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
};
