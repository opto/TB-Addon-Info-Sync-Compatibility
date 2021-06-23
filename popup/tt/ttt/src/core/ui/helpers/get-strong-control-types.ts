/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

import type {
	Buttons,
	Controls,
	IControlTypeStrong,
	IDictionary
} from '../../../types';
import { getControlType } from './get-control-type';
import { Config } from '../../../config';
import { isArray } from '../../helpers/checker';
import { ConfigProto, keys } from '../../helpers';

export function getStrongControlTypes(
	items: Buttons | IDictionary<string>,
	controls?: Controls
): IControlTypeStrong[] {
	const elements = isArray(items)
		? items
		: keys(items, false).map(key => {
				const value = items[key] || {};
				return ConfigProto({ name: key }, value) as IControlTypeStrong;
		  });

	return elements.map(item =>
		getControlType(item, controls || Config.defaultOptions.controls)
	);
}
