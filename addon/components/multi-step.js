import Component from '@ember/component';
import { set, get } from '@ember/object';
import $ from 'jquery';
import layout from '../templates/components/multi-step';

export default Component.extend({
  classNames: ['ems'],
  attributeBindings: ['step:data-step'],
  layout,
  init() {
    this._super(...arguments);
    if (!get(this, 'step')) {
      set(this, 'step', 1);
    }
  },
  actions: {
    /**
    * changes the current step to the specified step
    * @public
    * @param  {int} step number
    */
    changeStep(step) {
      let changeStep = get(this, 'changeStep');
      if (changeStep && typeof changeStep === 'function') {
        return changeStep(step);
      }
      // change the step if its greater than 0 and smaller than the last step
      if (step > 0 && step < $('.ems-step').length + 1) {
        set(this, 'step', step);
      }
    }
  }
});
