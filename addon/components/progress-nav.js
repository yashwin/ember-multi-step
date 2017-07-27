import Ember from 'ember';
import layout from '../templates/components/progress-nav';

const {
  Component,
  get,
  computed
} = Ember;

export default Component.extend({
  classNames: ['ems-progress'],
  layout,
  steps: computed('stepTotal', 'step', function() {
    let out = [];
    for (let i = 1; i < get(this, 'stepTotal') + 1; i++) {
      out.push({v: i, s: get(this, 'step') == i});
    }
    return out;
  }),
  actions: {
    changeStep() {
      get(this, 'changeStep')(get(this, 'step')); // DDAU
    }
  }
});
