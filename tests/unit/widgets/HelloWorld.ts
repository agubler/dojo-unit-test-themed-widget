const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/framework/testing/harness';

import { v, w } from '@dojo/framework/widget-core/d';

import HelloWorld from '../../../src/widgets/HelloWorld';
import * as css from '../../../src/widgets/styles/helloWorld.m.css';

const logo = require('./../../../src/img/logo.svg');

describe('HelloWorld', () => {
	it('should render widget', () => {
		const h = harness(() => w(HelloWorld, {}));
		h.expect(() =>
			v('div', { classes: css.root }, [
				v('img', { src: logo, classes: css.logo }),
				v('div', { classes: css.label }, ['Hello, Dojo World!'])
			])
		);
	});

	it('should render with a theme', () => {
		const key: any = undefined;
		const mockTheme: any = {
			'themed-unit-tests/helloWorld': {
				root: 'theme-root',
				logo: 'theme-logo',
				label: 'theme-label',
			},
			[key]: {
				root: 'theme-root',
				logo: 'theme-logo',
				label: 'theme-label',
			}
		};
		const h = harness(() => w(HelloWorld, { theme: mockTheme }));
		h.expect(() =>
			v('div', { classes: 'theme-root' }, [
				v('img', { src: logo, classes: 'theme-logo' }),
				v('div', { classes: 'theme-label' }, ['Hello, Dojo World!'])
			])
		);
	});
});
