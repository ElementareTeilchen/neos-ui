import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs, text} from '@kadira/storybook-addon-knobs';
import {StoryWrapper} from './../_lib/storyUtils.js';
import Tooltip from './index.js';

storiesOf('Tooltip', module)
    .addDecorator(withKnobs)
    .addWithInfo(
        'default',
        () => (
            <StoryWrapper>
                <Tooltip>{text('Tooltip', 'Test tooltip')}</Tooltip>
            </StoryWrapper>
        ),
        {inline: true}
    );
