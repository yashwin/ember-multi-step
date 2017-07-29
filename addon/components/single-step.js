import Ember from 'ember';
import layout from '../templates/components/single-step';

const {
  Component,
  get,
  getWithDefault,
  computed
} = Ember;

export default Component.extend({
  classNames: ['ems-step'],
  classNameBindings: ['stepClass'],
  attributeBindings: ['num:data-step-num'],
  layout,
  stepClass: computed('num', function() {
    return `ems-${getWithDefault(this, 'num', 'hidden')}`;
  }),
  // checks if on correct step, if so show form
  // also performs validation so the arrow in the step-nav component knows when to hide
  showStep: computed('num', 'step', function() {
    if (getWithDefault(this, 'step', 1) === get(this, 'num')) {
      if (get(this, 'stepKey') && get(this, 'canAdvance')) {
        get(this, 'canAdvance').validate(get(this, 'stepKey'));
      }
      return true;
    }
    return false;
  })
});
