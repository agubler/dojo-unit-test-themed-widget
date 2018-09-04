import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import Themed, { theme } from '@dojo/framework/widget-core/mixins/Themed';

import * as css from './styles/helloWorld.m.css';

const logo = require('./../img/logo.svg');

@theme(css)
export class HelloWorld extends Themed(WidgetBase) {
	protected render() {
		return v('div', { classes: this.theme(css.root) }, [
			v('img', { src: logo, classes: this.theme(css.logo) }),
			v('div', { classes: this.theme(css.label) }, ['Hello, Dojo World!'])
		]);
	}
}

export default HelloWorld;
