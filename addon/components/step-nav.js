import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/step-nav';

const { alias } = computed;

export default Component.extend({
  classNames: ['ems-nav'],
  layout,
  // is true if should display next button
  showNext: alias('notEnd'),
  // is true if should display back button
  showPrev: alias('notBeginning'),
  // is true if not on the first page
  notBeginning: computed('step', function() {
    return get(this, 'step') !== 1;
  }),
  // is true if not on the last page
  notEnd: computed('step', 'stepTotal', function() {
    return get(this, 'step') !== get(this, 'stepTotal');
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
