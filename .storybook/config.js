import {configure, addDecorator} from "@storybook/angular";
import {withA11y} from "@storybook/addon-a11y";

addDecorator(withA11y);

// automatically import all files ending in *.stories.ts
const req = require.context("../projects/component-library", true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
