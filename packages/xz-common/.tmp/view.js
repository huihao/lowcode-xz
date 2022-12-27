

export { default } from '/Users/huihao/open/xz-widgets/packages/xz-common/src/index.tsx';

import * as componentInstances from '/Users/huihao/open/xz-widgets/packages/xz-common/src/index.tsx';

import '/Users/huihao/open/xz-widgets/packages/xz-common/src/index.scss'

export * from '/Users/huihao/open/xz-widgets/packages/xz-common/src/index.tsx';

const coveredComponents = {};

const library = 'BizComps';
const execCompile = !!true;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}