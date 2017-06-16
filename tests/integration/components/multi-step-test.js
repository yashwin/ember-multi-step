import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | multi step', function() {
  setupComponentTest('multi-step', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#multi-step}}
    //     template content
    //   {{/multi-step}}
    // `);

    this.render(hbs`{{multi-step}}`);
    expect(this.$()).to.have.length(1);
  });
});
