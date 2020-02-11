import ConstructStyleSheet, {updatePrototype} from './ConstructStyleSheet';
import {initAdoptedStyleSheets, initPolyfill} from './init';
import {isDocumentLoading} from './utils';

const OldCSSStyleSheet = window.CSSStyleSheet;
updatePrototype(OldCSSStyleSheet.prototype);

window.CSSStyleSheet = ConstructStyleSheet;

initAdoptedStyleSheets();

if (isDocumentLoading()) {
  document.addEventListener('DOMContentLoaded', initPolyfill);
} else {
  initPolyfill();
}
