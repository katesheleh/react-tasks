import React from 'react';
import JuniorAdvanced from './JuniorAdvanced';
import {action} from '@storybook/addon-actions';

export default {
	title: 'Junion +',
	component: JuniorAdvanced
}

export const SimpleExample = () => {
	return <JuniorAdvanced theme={'dark'} onChange={action('Radio option wants to change')}/>
}