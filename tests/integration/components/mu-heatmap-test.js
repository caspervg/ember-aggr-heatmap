import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mu-heatmap', 'Integration | Component | mu heatmap', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mu-heatmap}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mu-heatmap}}
      template block text
    {{/mu-heatmap}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
