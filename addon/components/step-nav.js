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
  moveNext: empty('canAdvance.errors'),
  notBegining: computed('step', function() {
    return get(this, 'step') != 1;
  }),
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
