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
      this.sendAction('changeStep', get(this, 'step') + 1);
    },
    previousStep() {
      this.sendAction('changeStep', get(this, 'step') - 1);
    }
  }
});
