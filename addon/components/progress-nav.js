import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/progress-nav';

export default Component.extend({
  classNames: ['ems-progress'],
  layout,
  steps: computed('stepTotal', 'step', function() {
    let out = [];
    let step = get(this, 'step');
    let stepTotal = get(this, 'stepTotal');
    for (let i = 1; i < stepTotal + 1; i++) {
      if (i === step) {
        out[i - 1] = { v: i, s: true };
      }      else {
        out[i - 1] = { v: i };
      }
    }
    return out;
  }),
  actions: {
    changeStep(step) {
      get(this, 'changeStep')(step); // DDAU
    }
  }
});
