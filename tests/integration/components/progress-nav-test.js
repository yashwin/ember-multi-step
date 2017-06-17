import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | progress nav', function() {
  setupComponentTest('progress-nav', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#progress-nav}}
    //     template content
    //   {{/progress-nav}}
    // `);

    this.render(hbs`{{progress-nav}}`);
    expect(this.$()).to.have.length(1);
  });
});
