//const ExampleInjector = require('!!vue?inject!../../../src/components/example.vue')
const ExampleInjector = require('!!vue-loader?inject-loader!../../../src/components/example.vue')

describe('example component', () => {

  it('should render', () => {

    const ExampleWithMocks = ExampleInjector({
      // mock it
      '../service': {
        msg: 'Hello from a mocked service!'
      }
    })

    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ExampleWithMocks
      }
    }).$mount()
    expect(vm.$el.querySelector('.msg').textContent).toBe('Hello from a mocked service!')
  })
});
