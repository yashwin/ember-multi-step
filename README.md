# ember-multi-step

This addon provides a multi step container similar to the ones used by multistep forms. This exposes a simple component structure that allows for breaking up something into steps or smaller parts.

It aims to work well with things like forms, applications, and provides a simple css structure that can be easily customized.

## Options

stepTotal - number of total steps desired

changeStep - optional custom changeStep actions

step - property defined on component/controller that allows observing the step property

## Example Usage

```
{{#multi-step step=step stepTotal=4 changeStep=(action 'changeStep')}}
  {{#single-step step=step num=1}}
    content 1
  {{/single-step}}
  {{#single-step step=step num=2}}
    content 2
  {{/single-step}}
  {{#single-step step=step num=3}}
    content 3
  {{/single-step}}
  {{#single-step step=step num=4}}
    content 4
  {{/single-step}}
{{/multi-step}}
```
## Installation

* `ember install ember-multi-step` - That's it

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
