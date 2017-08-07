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
    let step = get(this, 'step');
    let stepTotal = get(this, 'stepTotal');
    let prev = step - 1;
    let next = step + 1;
    if (prev > 0) {
      out.push({ v: prev });
    }
    out.push({ v: get(this, 'step'), s: true });
    if (next - 1 < stepTotal) {
      out.push({ v: next });
    }
    return out;
  }),
  actions: {
    changeStep(step) {
      get(this, 'changeStep')(step); // DDAU
    }
  }
});
