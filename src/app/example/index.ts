import { BaseModule } from "@toikit/core";

export default class ExampleModule extends BaseModule {
  name: string = 'example';

  build() {
    return [
      'echo "Building example module"',
    ];
  }

  prepare() {
    console.log('Preparing example module');
  }

  register() {
    console.log('Registering example module');
  }
  
  setup() {
    console.log('Setting up example module');
  }

  mounted() {
    console.log('Mounting example module');
  }
}