import Ember from 'ember';
import layout from '../templates/components/step-nav';

const {
  Component,
  get,
  computed
} = Ember;

const { empty } = computed

export default Component.extend({
  classNames: ['ems-nav'],
  layout,
  notBegining: computed('step', function() {
    return get(this, 'step') != 1;
  }),
  notEnd: computed('step', function() {
    return get(this, 'step') != $('.ems-step').length;
  }),
  moveNext: empty('canAdvance.errors'),
  actions: {
    nextStep() {
      get(this, 'changeStep')(get(this, 'step') + 1); // DDAU
    },
    previousStep() {
      get(this, 'changeStep')(get(this, 'step') - 1); // DDAU
    }
  }
});
