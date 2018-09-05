const { describe, it } = intern.getInterface('bdd');
import harness from '@dojo/framework/testing/harness';

import HelloWorld from '../../../src/widgets/HelloWorld';
import * as css from '../../../src/widgets/styles/helloWorld.m.css';
import { tsx } from '@dojo/framework/widget-core/tsx';

const logo = require('./../../../src/img/logo.svg');

describe('HelloWorld TSX', () => {
	it('should render widget', () => {
		const h = harness(() => <HelloWorld/>);
		h.expect(() =>
			(<div classes={css.root}>
				<img src={logo} classes={css.logo}/>
				<div classes={css.label}>
					Hello, Dojo World!
				</div>
			 </div>)
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
		const props = {};
		const h = harness(() => <HelloWorld {...props} theme={mockTheme}/>);
		h.expect(() =>
			(<div classes='theme-root'>
				<img src={logo} classes='theme-logo'/>
				<div classes='theme-label'>
					Hello, Dojo World!
				</div>
			 </div>)
		);
	});
});
