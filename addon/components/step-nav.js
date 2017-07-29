import Ember from 'ember';
import layout from '../templates/components/step-nav';

const {
  Component,
  get,
  computed
} = Ember;

const { empty } = computed;

export default Component.extend({
  classNames: ['ems-nav'],
  layout,
  // is true if all validations are passing
  moveNext: empty('form.errors'),
  // is true if not on the first page
  notBegining: computed('step', function() {
    return get(this, 'step') != 1;
  }),
  // is true if not on the last page
  notEnd: computed('step', function() {
    return get(this, 'step') != $('.ems-step').length;
  }),
  actions: {
    nextStep() {
      get(this, 'changeStep')(get(this, 'step') + 1); // DDAU
    },
    previousStep() {
      get(this, 'changeStep')(get(this, 'step') - 1); // DDAU
    }
  }
});
