/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import type {
	IDictionary,
	IUIElement,
	IViewBased,
	Nullable
} from '../../types';
import { ViewComponent } from '../component';
import { Dom } from '../dom';
import { Elms, Mods } from '../traits';
import { isString } from '../helpers';
import { Icon } from './icon';

export abstract class UIElement<T extends IViewBased = IViewBased>
	extends ViewComponent<T>
	implements IUIElement, Mods, Elms
{
	container!: HTMLElement;
	name: string = '';

	private __parentElement: Nullable<IUIElement> = null;

	get parentElement(): Nullable<IUIElement> {
		return this.__parentElement;
	}

	set parentElement(parentElement: Nullable<IUIElement>) {
		this.__parentElement = parentElement;

		if (parentElement) {
			parentElement.hookStatus('beforeDestruct', () => this.destruct());
		}

		this.updateParentElement(this);
	}

	bubble(callback: (parent: IUIElement) => void): this {
		let parent = this.parentElement;

		while (parent) {
			callback(parent);
			parent = parent.parentElement;
		}
		return this;
	}

	updateParentElement(target: IUIElement): this {
		this.__parentElement?.updateParentElement(target);
		return this;
	}

	/** @override */
	get<T>(chain: string, obj?: IDictionary): Nullable<T> {
		return super.get(chain, obj) || (this.getElm(chain) as unknown as T);
	}

	/**
	 * Find match parent
	 * @param type
	 */
	// tslint:disable-next-line:ban-types
	closest<T extends IUIElement>(type: Function | IUIElement): Nullable<T> {
		const c =
			typeof type === 'object'
				? (pe: IUIElement) => pe === type
				: (pe: IUIElement) => pe instanceof type;

		let pe = this.__parentElement;

		while (pe) {
			if (c(pe)) {
				return pe as T;
			}

			if (!pe.parentElement && pe.container.parentElement) {
				pe = UIElement.closestElement(
					pe.container.parentElement,
					UIElement
				);
			} else {
				pe = pe.parentElement;
			}
		}

		return null;
	}

	/**
	 * Find closest UIElement in DOM
	 * @param node
	 */
	static closestElement(node: Node, type: Function): Nullable<IUIElement> {
		const elm = Dom.up(node, node => {
			if (node) {
				const { component } = node as any;
				return component && component instanceof type;
			}

			return false;
		});

		return elm ? (elm?.component as IUIElement) : null;
	}

	readonly mods: IDictionary<string | boolean | null> = {};

	/** @see [[Mods.setMod]] */
	setMod(
		name: string,
		value: string | boolean | null,
		container: HTMLElement = this.container
	): this {
		Mods.setMod.call(this, name, value);
		return this;
	}

	/** @see [[Mods.getMod]] */
	getMod(name: string): string | boolean | null {
		return Mods.getMod.call(this, name);
	}

	/** @see [[Elms.getElm]]*/
	getElm(elementName: string): HTMLElement {
		return Elms.getElm.call(this, elementName);
	}

	/** @see [[Elms.getElms]]*/
	getElms(elementName: string): HTMLElement[] {
		return Elms.getElms.call(this, elementName);
	}

	/**
	 * Update UI from state
	 */
	update(): void {
		// empty
	}

	/**
	 * Append container to element
	 * @param element
	 */
	appendTo(element: HTMLElement): this {
		element.appendChild(this.container);
		return this;
	}

	/**
	 * Valid name only with valid chars
	 */
	protected clearName(name: string): string {
		return name.replace(/[^a-zA-Z0-9]/g, '_');
	}

	/**
	 * Method create only box
	 * @param options
	 */
	protected render(options?: IDictionary): HTMLElement | string {
		return this.j.c.div(this.componentName);
	}

	/**
	 * Create main HTML container
	 */
	protected createContainer(options?: IDictionary): HTMLElement {
		const result = this.render(options);

		if (isString(result)) {
			const elm = this.j.c.fromHTML(
				result
					.replace(/\*([^*]+?)\*/g, (_, name) => Icon.get(name) || '')
					.replace(/&__/g, this.componentName + '__')
					.replace(/~([^~]+?)~/g, (_, s) => this.i18n(s))
			);
			elm.classList.add(this.componentName);
			return elm;
		}

		return result;
	}

	/** @override */
	constructor(jodit: T, options?: IDictionary) {
		super(jodit);

		this.container = this.createContainer(options);

		Object.defineProperty(this.container, 'component', {
			value: this,
			configurable: true
		});
	}

	/** @override */
	destruct(): any {
		Dom.safeRemove(this.container);
		this.parentElement = null;
		return super.destruct();
	}
}
