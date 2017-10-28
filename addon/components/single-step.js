import Component from '@ember/component';
import { computed, getWithDefault, get } from '@ember/object';
import layout from '../templates/components/single-step';

export default Component.extend({
  classNames: ['ems-step'],
  classNameBindings: ['stepClass'],
  attributeBindings: ['num:data-step-num'],
  layout,
  stepClass: computed('num', function() {
    return `ems-${getWithDefault(this, 'num', 'hidden')}`;
  }),
  /**
   * checks if on correct step, if so show form
   * @public
   * @return {boolean}   to show or not to show
   */
  showStep: computed('num', 'step', function() {
    if (getWithDefault(this, 'step', 1) === get(this, 'num')) {
      return false;
    }
    return true;
  })
});
