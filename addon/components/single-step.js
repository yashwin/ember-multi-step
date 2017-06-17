import Ember from 'ember';
import layout from '../templates/components/single-step';

const {
  Component,
  get,
  getWithDefault,
  set,
  computed,
  $
} = Ember;

export default Component.extend({
  classNames: ['ems-step'],
  classNameBindings: ['stepClass'],
  layout,
  stepClass: computed('num', function() {
    return `ems-${getWithDefault(this, 'num', 'hidden')}`;
  }),
  showStep: computed('num', 'step', function() {
    return getWithDefault(this, 'step', 1) === get(this, 'num');
  })
});
