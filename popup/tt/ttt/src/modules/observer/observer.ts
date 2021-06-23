/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import type { IJodit, SnapshotType } from '../../types';
import { Config } from '../../config';
import { ViewComponent } from '../../core/component';
import { Snapshot } from './snapshot';
import { Stack } from './stack';
import { Command } from './command';
import { debounce } from '../../core/decorators';

/**
 * @property {object} observer module settings {@link Observer|Observer}
 * @property {int} observer.timeout=100 Delay on every change
 * @property {int} observer.maxHistoryLength=Infinity Limit of history length
 */
declare module '../../config' {
	interface Config {
		observer: {
			maxHistoryLength: number;
			timeout: number;
		};
	}
}

Config.prototype.observer = {
	maxHistoryLength: Infinity,
	timeout: 100
};

/**
 * The module monitors the status of the editor and creates / deletes the required number of Undo / Redo shots .
 * To track changes in use {@link https://developer.mozilla.org/ru/docs/Web/API/MutationObserver|MutationObserver}
 *
 * @module Observer
 * @see {@link Snapshot|Snapshot}
 * @params {Jodit} parent Jodit main object
 */
export class Observer extends ViewComponent<IJodit> {
	/** @override */
	className(): string {
		return 'Observer';
	}

	private __startValue!: SnapshotType;

	get startValue(): SnapshotType {
		return this.__startValue;
	}

	set startValue(value: SnapshotType) {
		this.__startValue = value;
	}

	stack: Stack = new Stack(this.j.o.observer.maxHistoryLength);
	snapshot: Snapshot = new Snapshot(this.j);

	private updateTick: number = 0;

	upTick(): void {
		this.updateTick += 1;
	}

	/**
	 * Push new command in stack on some changes
	 */
	@debounce()
	private onChange(): void {
		if (this.snapshot.isBlocked) {
			return;
		}

		this.updateStack();
	}

	/**
	 * Update history stack
	 */
	private updateStack(replace: boolean = false): void {
		const newValue = this.snapshot.make();

		if (!Snapshot.equal(newValue, this.startValue)) {
			const newCommand = new Command(
				this.startValue,
				newValue,
				this,
				this.updateTick
			);

			if (replace) {
				const command = this.stack.current();

				if (command && this.updateTick === command.tick) {
					this.stack.replace(newCommand);
				}
			} else {
				this.stack.push(newCommand);
			}

			this.startValue = newValue;
			this.fireChangeStack();
		}
	}

	/**
	 * Return state of the WYSIWYG editor to step back
	 */
	redo(): void {
		if (this.stack.redo()) {
			this.startValue = this.snapshot.make();
			this.fireChangeStack();
		}
	}

	/**
	 * Return the state of the WYSIWYG editor to step forward
	 */
	undo(): void {
		if (this.stack.undo()) {
			this.startValue = this.snapshot.make();
			this.fireChangeStack();
		}
	}

	clear(): void {
		this.startValue = this.snapshot.make();
		this.stack.clear();
		this.fireChangeStack();
	}

	replaceSnapshot(): void {
		this.updateStack(true);
	}

	private fireChangeStack(): void {
		this.j && !this.j.isInDestruct && this.j.events?.fire('changeStack');
	}

	constructor(editor: IJodit) {
		super(editor);

		editor.e.on('afterAddPlace.observer', () => {
			if (this.isInDestruct) {
				return;
			}

			this.startValue = this.snapshot.make();

			editor.events
				// save selection
				.on('internalChange', () => {
					this.startValue = this.snapshot.make();
				})
				.on(
					editor.editor,
					[
						'changeSelection',
						'selectionstart',
						'selectionchange',
						'mousedown',
						'mouseup',
						'keydown',
						'keyup'
					]
						.map(f => f + '.observer')
						.join(' '),
					() => {
						if (
							this.startValue.html ===
							this.j.getNativeEditorValue()
						) {
							this.startValue = this.snapshot.make();
						}
					}
				)
				.on(this, 'change.observer', this.onChange);
		});
	}

	destruct(): void {
		if (this.j.events) {
			this.j.e.off('.observer');
		}

		this.snapshot.destruct();

		super.destruct();
	}
}
