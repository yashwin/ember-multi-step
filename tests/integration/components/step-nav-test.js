import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | step nav', function() {
  setupComponentTest('step-nav', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#step-nav}}
    //     template content
    //   {{/step-nav}}
    // `);

    this.render(hbs`{{step-nav}}`);
    expect(this.$()).to.have.length(1);
  });
});
