import Ember from 'ember';
import layout from '../templates/components/step-nav';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  classNames: ['ems-nav'],
  layout,
  actions: {
    nextStep() {
      get(this, 'changeStep')(get(this, 'step') + 1); // DDAU
    },
    previousStep() {
      get(this, 'changeStep')(get(this, 'step') - 1); // DDAU
    }
  }
});
