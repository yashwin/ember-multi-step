import Ember from 'ember';
import layout from '../templates/components/progress-nav';

const {
  Component,
  get
} = Ember;

export default Component.extend({
  classNames: ['ems-progress'],
  layout,
  actions: {
    changeStep() {
      this.sendAction('changeStep', get(this, 'step'));
    }
  }
});
