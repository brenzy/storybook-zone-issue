import { storiesOf } from '@storybook/angular';
import {ButtonComponent} from './button.component';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

storiesOf('button', module)
  .add('with text', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: ButtonComponent,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: ButtonComponent,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Addon|Links', module).add(
  'button with link to another story',
  () => ({
    component: ButtonComponent,
    props: {
      text: 'Link to Component Library Story',
      onClick: linkTo('Component Library')
    }
  })
);
