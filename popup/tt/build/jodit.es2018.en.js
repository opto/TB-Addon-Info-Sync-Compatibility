/*!
 * jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 * Version: v3.6.18
 * Url: https://xdsoft.net/jodit/
 * License(s): MIT
 */
	
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Config)
/* harmony export */ });
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Config {
    constructor() {
        this.namespace = '';
        this.iframe = false;
        this.license = '';
        this.preset = 'custom';
        this.presets = {
            inline: {
                inline: true,
                toolbar: false,
                toolbarInline: true,
                toolbarInlineForSelection: true,
                showXPathInStatusbar: false,
                showCharsCounter: false,
                showWordsCounter: false,
                showPlaceholder: false
            }
        };
        this.ownerDocument = (typeof document !== 'undefined'
            ? document
            : null);
        this.ownerWindow = (typeof window !== 'undefined'
            ? window
            : null);
        this.shadowRoot = null;
        this.zIndex = 0;
        this.readonly = false;
        this.disabled = false;
        this.activeButtonsInReadOnly = [
            'source',
            'fullsize',
            'print',
            'about',
            'dots',
            'selectall'
        ];
        this.toolbarButtonSize = 'middle';
        this.allowTabNavigation = false;
        this.inline = false;
        this.theme = 'default';
        this.saveModeInStorage = false;
        this.spellcheck = true;
        this.editorCssClass = false;
        this.style = false;
        this.triggerChangeEvent = true;
        this.direction = '';
        this.language = 'auto';
        this.debugLanguage = false;
        this.i18n = false;
        this.tabIndex = -1;
        this.toolbar = true;
        this.statusbar = true;
        this.showTooltip = true;
        this.showTooltipDelay = 1000;
        this.useNativeTooltip = false;
        this.enter = _core_constants__WEBPACK_IMPORTED_MODULE_0__.PARAGRAPH;
        this.enterBlock = this.enter !== 'br' ? this.enter : _core_constants__WEBPACK_IMPORTED_MODULE_0__.PARAGRAPH;
        this.defaultMode = _core_constants__WEBPACK_IMPORTED_MODULE_0__.MODE_WYSIWYG;
        this.useSplitMode = false;
        this.colors = {
            greyscale: [
                '#000000',
                '#434343',
                '#666666',
                '#999999',
                '#B7B7B7',
                '#CCCCCC',
                '#D9D9D9',
                '#EFEFEF',
                '#F3F3F3',
                '#FFFFFF'
            ],
            palette: [
                '#980000',
                '#FF0000',
                '#FF9900',
                '#FFFF00',
                '#00F0F0',
                '#00FFFF',
                '#4A86E8',
                '#0000FF',
                '#9900FF',
                '#FF00FF'
            ],
            full: [
                '#E6B8AF',
                '#F4CCCC',
                '#FCE5CD',
                '#FFF2CC',
                '#D9EAD3',
                '#D0E0E3',
                '#C9DAF8',
                '#CFE2F3',
                '#D9D2E9',
                '#EAD1DC',
                '#DD7E6B',
                '#EA9999',
                '#F9CB9C',
                '#FFE599',
                '#B6D7A8',
                '#A2C4C9',
                '#A4C2F4',
                '#9FC5E8',
                '#B4A7D6',
                '#D5A6BD',
                '#CC4125',
                '#E06666',
                '#F6B26B',
                '#FFD966',
                '#93C47D',
                '#76A5AF',
                '#6D9EEB',
                '#6FA8DC',
                '#8E7CC3',
                '#C27BA0',
                '#A61C00',
                '#CC0000',
                '#E69138',
                '#F1C232',
                '#6AA84F',
                '#45818E',
                '#3C78D8',
                '#3D85C6',
                '#674EA7',
                '#A64D79',
                '#85200C',
                '#990000',
                '#B45F06',
                '#BF9000',
                '#38761D',
                '#134F5C',
                '#1155CC',
                '#0B5394',
                '#351C75',
                '#733554',
                '#5B0F00',
                '#660000',
                '#783F04',
                '#7F6000',
                '#274E13',
                '#0C343D',
                '#1C4587',
                '#073763',
                '#20124D',
                '#4C1130'
            ]
        };
        this.colorPickerDefaultTab = 'background';
        this.imageDefaultWidth = 300;
        this.removeButtons = [];
        this.disablePlugins = [];
        this.extraPlugins = [];
        this.extraButtons = [];
        this.extraIcons = {};
        this.createAttributes = {};
        this.sizeLG = 900;
        this.sizeMD = 700;
        this.sizeSM = 400;
        this.buttons = [
            {
                group: 'source',
                buttons: []
            },
            {
                group: 'font-style',
                buttons: []
            },
            {
                group: 'script',
                buttons: []
            },
            {
                group: 'list',
                buttons: ['ul', 'ol']
            },
            {
                group: 'indent',
                buttons: []
            },
            {
                group: 'font',
                buttons: []
            },
            {
                group: 'color',
                buttons: []
            },
            {
                group: 'media',
                buttons: []
            },
            '\n',
            {
                group: 'state',
                buttons: []
            },
            {
                group: 'clipboard',
                buttons: []
            },
            {
                group: 'insert',
                buttons: []
            },
            {
                group: 'form',
                buttons: []
            },
            {
                group: 'history',
                buttons: []
            },
            {
                group: 'search',
                buttons: []
            },
            {
                group: 'other',
                buttons: []
            },
            {
                group: 'info',
                buttons: []
            }
        ];
        this.buttonsMD = [
            'source',
            '|',
            'bold',
            'italic',
            '|',
            'ul',
            'ol',
            'eraser',
            '|',
            'font',
            'fontsize',
            'brush',
            'paragraph',
            '|',
            'image',
            'table',
            'link',
            '|',
            'align',
            '\n',
            'undo',
            'redo',
            '|',
            'hr',
            'copyformat',
            'fullsize',
            'dots'
        ];
        this.buttonsSM = [
            'source',
            '|',
            'bold',
            'italic',
            '|',
            'ul',
            'ol',
            'eraser',
            '|',
            'fontsize',
            'brush',
            'paragraph',
            '|',
            'image',
            'table',
            '\n',
            'link',
            '|',
            'align',
            '|',
            'undo',
            'redo',
            '|',
            'copyformat',
            'fullsize',
            'dots'
        ];
        this.buttonsXS = [
            'bold',
            'image',
            '|',
            'brush',
            'paragraph',
            'eraser',
            '\n',
            'align',
            '|',
            'undo',
            'redo',
            '|',
            'dots'
        ];
        this.events = {};
        this.textIcons = false;
        this.showBrowserColorPicker = true;
    }
    static get defaultOptions() {
        if (!Config.__defaultOptions) {
            Config.__defaultOptions = new Config();
        }
        return Config.__defaultOptions;
    }
}
Config.prototype.controls = {};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INVISIBLE_SPACE": () => (/* binding */ INVISIBLE_SPACE),
/* harmony export */   "NBSP_SPACE": () => (/* binding */ NBSP_SPACE),
/* harmony export */   "INVISIBLE_SPACE_REG_EXP": () => (/* binding */ INVISIBLE_SPACE_REG_EXP),
/* harmony export */   "INVISIBLE_SPACE_REG_EXP_END": () => (/* binding */ INVISIBLE_SPACE_REG_EXP_END),
/* harmony export */   "INVISIBLE_SPACE_REG_EXP_START": () => (/* binding */ INVISIBLE_SPACE_REG_EXP_START),
/* harmony export */   "SPACE_REG_EXP": () => (/* binding */ SPACE_REG_EXP),
/* harmony export */   "SPACE_REG_EXP_START": () => (/* binding */ SPACE_REG_EXP_START),
/* harmony export */   "SPACE_REG_EXP_END": () => (/* binding */ SPACE_REG_EXP_END),
/* harmony export */   "IS_BLOCK": () => (/* binding */ IS_BLOCK),
/* harmony export */   "IS_INLINE": () => (/* binding */ IS_INLINE),
/* harmony export */   "INSEPARABLE_TAGS": () => (/* binding */ INSEPARABLE_TAGS),
/* harmony export */   "MAY_BE_REMOVED_WITH_KEY": () => (/* binding */ MAY_BE_REMOVED_WITH_KEY),
/* harmony export */   "KEY_BACKSPACE": () => (/* binding */ KEY_BACKSPACE),
/* harmony export */   "KEY_TAB": () => (/* binding */ KEY_TAB),
/* harmony export */   "KEY_ENTER": () => (/* binding */ KEY_ENTER),
/* harmony export */   "KEY_ESC": () => (/* binding */ KEY_ESC),
/* harmony export */   "KEY_LEFT": () => (/* binding */ KEY_LEFT),
/* harmony export */   "KEY_UP": () => (/* binding */ KEY_UP),
/* harmony export */   "KEY_RIGHT": () => (/* binding */ KEY_RIGHT),
/* harmony export */   "KEY_DOWN": () => (/* binding */ KEY_DOWN),
/* harmony export */   "KEY_SPACE": () => (/* binding */ KEY_SPACE),
/* harmony export */   "KEY_DELETE": () => (/* binding */ KEY_DELETE),
/* harmony export */   "KEY_F3": () => (/* binding */ KEY_F3),
/* harmony export */   "NEARBY": () => (/* binding */ NEARBY),
/* harmony export */   "ACCURACY": () => (/* binding */ ACCURACY),
/* harmony export */   "COMMAND_KEYS": () => (/* binding */ COMMAND_KEYS),
/* harmony export */   "BR": () => (/* binding */ BR),
/* harmony export */   "PARAGRAPH": () => (/* binding */ PARAGRAPH),
/* harmony export */   "MODE_WYSIWYG": () => (/* binding */ MODE_WYSIWYG),
/* harmony export */   "MODE_SOURCE": () => (/* binding */ MODE_SOURCE),
/* harmony export */   "MODE_SPLIT": () => (/* binding */ MODE_SPLIT),
/* harmony export */   "IS_IE": () => (/* binding */ IS_IE),
/* harmony export */   "TEXT_PLAIN": () => (/* binding */ TEXT_PLAIN),
/* harmony export */   "TEXT_HTML": () => (/* binding */ TEXT_HTML),
/* harmony export */   "MARKER_CLASS": () => (/* binding */ MARKER_CLASS),
/* harmony export */   "EMULATE_DBLCLICK_TIMEOUT": () => (/* binding */ EMULATE_DBLCLICK_TIMEOUT),
/* harmony export */   "INSERT_AS_HTML": () => (/* binding */ INSERT_AS_HTML),
/* harmony export */   "INSERT_CLEAR_HTML": () => (/* binding */ INSERT_CLEAR_HTML),
/* harmony export */   "INSERT_AS_TEXT": () => (/* binding */ INSERT_AS_TEXT),
/* harmony export */   "INSERT_ONLY_TEXT": () => (/* binding */ INSERT_ONLY_TEXT),
/* harmony export */   "SAFE_COUNT_CHANGE_CALL": () => (/* binding */ SAFE_COUNT_CHANGE_CALL),
/* harmony export */   "IS_MAC": () => (/* binding */ IS_MAC),
/* harmony export */   "KEY_ALIASES": () => (/* binding */ KEY_ALIASES),
/* harmony export */   "BASE_PATH": () => (/* binding */ BASE_PATH)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const INVISIBLE_SPACE = '\uFEFF';
const NBSP_SPACE = '\u00A0';
const INVISIBLE_SPACE_REG_EXP = () => /[\uFEFF]/g;
const INVISIBLE_SPACE_REG_EXP_END = () => /[\uFEFF]+$/g;
const INVISIBLE_SPACE_REG_EXP_START = () => /^[\uFEFF]+/g;
const SPACE_REG_EXP = () => /[\s\n\t\r\uFEFF\u200b]+/g;
const SPACE_REG_EXP_START = () => /^[\s\n\t\r\uFEFF\u200b]+/g;
const SPACE_REG_EXP_END = () => /[\s\n\t\r\uFEFF\u200b]+$/g;
const IS_BLOCK = /^(ARTICLE|SCRIPT|STYLE|OBJECT|FOOTER|HEADER|NAV|SECTION|IFRAME|JODIT|JODIT-MEDIA|PRE|DIV|P|LI|UL|OL|H[1-6]|BLOCKQUOTE|TR|TD|TH|TBODY|THEAD|TABLE|BODY|HTML|FIGCAPTION|FIGURE|DT|DD|DL|DFN)$/i;
const IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB)$/i;
const INSEPARABLE_TAGS = [
    'img',
    'br',
    'video',
    'iframe',
    'script',
    'input',
    'textarea',
    'hr',
    'link',
    'jodit',
    'jodit-media'
];
const MAY_BE_REMOVED_WITH_KEY = RegExp(`^${INSEPARABLE_TAGS.join('|')}$`, 'i');
const KEY_BACKSPACE = 'Backspace';
const KEY_TAB = 'Tab';
const KEY_ENTER = 'Enter';
const KEY_ESC = 'Escape';
const KEY_LEFT = 'ArrowLeft';
const KEY_UP = 'ArrowUp';
const KEY_RIGHT = 'ArrowRight';
const KEY_DOWN = 'ArrowDown';
const KEY_SPACE = 'Space';
const KEY_DELETE = 'Delete';
const KEY_F3 = 'F3';
const NEARBY = 5;
const ACCURACY = 10;
const COMMAND_KEYS = [
    KEY_BACKSPACE,
    KEY_DELETE,
    KEY_UP,
    KEY_DOWN,
    KEY_RIGHT,
    KEY_LEFT,
    KEY_ENTER,
    KEY_ESC,
    KEY_F3,
    KEY_TAB
];
const BR = 'br';
const PARAGRAPH = 'p';
const MODE_WYSIWYG = 1;
const MODE_SOURCE = 2;
const MODE_SPLIT = 3;
const IS_IE = typeof navigator !== 'undefined' &&
    (navigator.userAgent.indexOf('MSIE') !== -1 ||
        /rv:11.0/i.test(navigator.userAgent));
const TEXT_PLAIN = IS_IE ? 'text' : 'text/plain';
const TEXT_HTML = IS_IE ? 'html' : 'text/html';
const MARKER_CLASS = 'jodit-selection_marker';
const EMULATE_DBLCLICK_TIMEOUT = 300;
const INSERT_AS_HTML = 'insert_as_html';
const INSERT_CLEAR_HTML = 'insert_clear_html';
const INSERT_AS_TEXT = 'insert_as_text';
const INSERT_ONLY_TEXT = 'insert_only_text';
const SAFE_COUNT_CHANGE_CALL = 10;
const IS_MAC = typeof window !== 'undefined' &&
    /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
const KEY_ALIASES = {
    add: '+',
    break: 'pause',
    cmd: 'meta',
    command: 'meta',
    ctl: 'control',
    ctrl: 'control',
    del: 'delete',
    down: 'arrowdown',
    esc: 'escape',
    ins: 'insert',
    left: 'arrowleft',
    mod: IS_MAC ? 'meta' : 'control',
    opt: 'alt',
    option: 'alt',
    return: 'enter',
    right: 'arrowright',
    space: ' ',
    spacebar: ' ',
    up: 'arrowup',
    win: 'meta',
    windows: 'meta'
};
const BASE_PATH = (() => {
    if (typeof document === 'undefined') {
        return '';
    }
    const script = document.currentScript, removeScriptName = (s) => s.replace(/\/[^/]+.js$/, '/');
    if (script) {
        return removeScriptName(script.src);
    }
    const scripts = document.querySelectorAll('script[src]');
    if (scripts && scripts.length) {
        return removeScriptName(scripts[scripts.length - 1].src);
    }
    return window.location.href;
})();


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DG": () => (/* reexport */ EventHandlersStore),
  "ng": () => (/* reexport */ EventsNative),
  "P5": () => (/* reexport */ ObserveObject),
  "rO": () => (/* reexport */ defaultNameSpace)
});

;// CONCATENATED MODULE: ./src/core/events/store.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const defaultNameSpace = 'JoditEventDefaultNamespace';
class EventHandlersStore {
    constructor() {
        this.__store = {};
    }
    get(event, namespace) {
        if (this.__store[namespace] !== undefined) {
            return this.__store[namespace][event];
        }
    }
    indexOf(event, namespace, originalCallback) {
        const blocks = this.get(event, namespace);
        if (blocks) {
            for (let i = 0; i < blocks.length; i += 1) {
                if (blocks[i].originalCallback === originalCallback) {
                    return i;
                }
            }
        }
        return false;
    }
    namespaces(withoutDefault = false) {
        const nss = Object.keys(this.__store);
        return withoutDefault ? nss.filter(ns => ns !== defaultNameSpace) : nss;
    }
    events(namespace) {
        return this.__store[namespace]
            ? Object.keys(this.__store[namespace])
            : [];
    }
    set(event, namespace, data, onTop = false) {
        if (this.__store[namespace] === undefined) {
            this.__store[namespace] = {};
        }
        if (this.__store[namespace][event] === undefined) {
            this.__store[namespace][event] = [];
        }
        if (!onTop) {
            this.__store[namespace][event].push(data);
        }
        else {
            this.__store[namespace][event].unshift(data);
        }
    }
    clear() {
        this.__store = {};
    }
}

// EXTERNAL MODULE: ./src/core/helpers/checker/is-string.ts
var is_string = __webpack_require__(5);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-function.ts
var is_function = __webpack_require__(6);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-array.ts
var is_array = __webpack_require__(7);
// EXTERNAL MODULE: ./src/core/helpers/type.ts
var type = __webpack_require__(4);
;// CONCATENATED MODULE: ./src/core/events/events-native.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class EventsNative {
    constructor(doc) {
        this.__key = '__JoditEventsNativeNamespaces';
        this.doc = document;
        this.prepareEvent = (event) => {
            if (event.cancelBubble) {
                return;
            }
            if (event.type.match(/^touch/) &&
                event.changedTouches &&
                event.changedTouches.length) {
                ['clientX', 'clientY', 'pageX', 'pageY'].forEach((key) => {
                    Object.defineProperty(event, key, {
                        value: event.changedTouches[0][key],
                        configurable: true,
                        enumerable: true
                    });
                });
            }
            if (!event.originalEvent) {
                event.originalEvent = event;
            }
            if (event.type === 'paste' &&
                event.clipboardData === undefined &&
                this.doc.defaultView.clipboardData) {
                Object.defineProperty(event, 'clipboardData', {
                    get: () => {
                        return this.doc.defaultView.clipboardData;
                    },
                    configurable: true,
                    enumerable: true
                });
            }
        };
        this.currents = [];
        this.__stopped = [];
        this.isDestructed = false;
        if (doc) {
            this.doc = doc;
        }
        this.__key += new Date().getTime();
    }
    eachEvent(events, callback) {
        const eventParts = events.split(/[\s,]+/);
        eventParts.forEach((eventNameSpace) => {
            const eventAndNameSpace = eventNameSpace.split('.');
            const namespace = eventAndNameSpace[1] || defaultNameSpace;
            callback.call(this, eventAndNameSpace[0], namespace);
        });
    }
    getStore(subject) {
        if (!subject) {
            throw (0,type/* error */.vU)('Need subject');
        }
        if (subject[this.__key] === undefined) {
            const store = new EventHandlersStore();
            Object.defineProperty(subject, this.__key, {
                enumerable: false,
                configurable: true,
                value: store
            });
        }
        return subject[this.__key];
    }
    clearStore(subject) {
        if (subject[this.__key] !== undefined) {
            delete subject[this.__key];
        }
    }
    triggerNativeEvent(element, event) {
        const evt = this.doc.createEvent('HTMLEvents');
        if (typeof event === 'string') {
            evt.initEvent(event, true, true);
        }
        else {
            evt.initEvent(event.type, event.bubbles, event.cancelable);
            [
                'screenX',
                'screenY',
                'clientX',
                'clientY',
                'target',
                'srcElement',
                'currentTarget',
                'timeStamp',
                'which',
                'keyCode'
            ].forEach(property => {
                Object.defineProperty(evt, property, {
                    value: event[property],
                    enumerable: true
                });
            });
            Object.defineProperty(evt, 'originalEvent', {
                value: event,
                enumerable: true
            });
        }
        element.dispatchEvent(evt);
    }
    get current() {
        return this.currents[this.currents.length - 1];
    }
    on(subjectOrEvents, eventsOrCallback, handlerOrSelector, onTop = false) {
        const subject = (0,is_string/* isString */.H)(subjectOrEvents) ? this : subjectOrEvents;
        const events = (0,is_string/* isString */.H)(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        let callback = handlerOrSelector;
        if (callback === undefined && (0,is_function/* isFunction */.m)(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const store = this.getStore(subject);
        if (!(0,is_string/* isString */.H)(events) || events === '') {
            throw (0,type/* error */.vU)('Need events names');
        }
        if (!(0,is_function/* isFunction */.m)(callback)) {
            throw (0,type/* error */.vU)('Need event handler');
        }
        if ((0,is_array/* isArray */.k)(subject)) {
            subject.forEach((subj) => {
                this.on(subj, events, callback, onTop);
            });
            return this;
        }
        const isDOMElement = (0,is_function/* isFunction */.m)(subject.addEventListener), self = this;
        let syntheticCallback = function (event, ...args) {
            return callback && callback.call(this, event, ...args);
        };
        if (isDOMElement) {
            syntheticCallback = function (event) {
                self.prepareEvent(event);
                if (callback && callback.call(this, event) === false) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return false;
                }
                return;
            };
        }
        this.eachEvent(events, (event, namespace) => {
            if (event === '') {
                throw (0,type/* error */.vU)('Need event name');
            }
            if (store.indexOf(event, namespace, callback) === false) {
                const block = {
                    event,
                    originalCallback: callback,
                    syntheticCallback
                };
                store.set(event, namespace, block, onTop);
                if (isDOMElement) {
                    const options = [
                        'touchstart',
                        'touchend',
                        'scroll',
                        'mousewheel',
                        'mousemove',
                        'touchmove'
                    ].includes(event)
                        ? {
                            passive: true
                        }
                        : false;
                    subject.addEventListener(event, syntheticCallback, options);
                }
            }
        });
        return this;
    }
    one(subjectOrEvents, eventsOrCallback, handlerOrSelector, onTop = false) {
        const subject = (0,is_string/* isString */.H)(subjectOrEvents) ? this : subjectOrEvents;
        const events = (0,is_string/* isString */.H)(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        let callback = handlerOrSelector;
        if (callback === undefined && (0,is_function/* isFunction */.m)(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const newCallback = (...args) => {
            this.off(subject, events, newCallback);
            callback(...args);
        };
        this.on(subject, events, newCallback, onTop);
        return this;
    }
    off(subjectOrEvents, eventsOrCallback, handler) {
        const subject = (0,is_string/* isString */.H)(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = (0,is_string/* isString */.H)(eventsOrCallback)
            ? eventsOrCallback
            : subjectOrEvents;
        const store = this.getStore(subject);
        let callback = handler;
        if (!(0,is_string/* isString */.H)(events) || !events) {
            store.namespaces().forEach((namespace) => {
                this.off(subject, '.' + namespace);
            });
            this.clearStore(subject);
            return this;
        }
        if (callback === undefined && (0,is_function/* isFunction */.m)(eventsOrCallback)) {
            callback = eventsOrCallback;
        }
        const isDOMElement = (0,is_function/* isFunction */.m)(subject.removeEventListener), removeEventListener = (block) => {
            if (isDOMElement) {
                subject.removeEventListener(block.event, block.syntheticCallback, false);
            }
        }, removeCallbackFromNameSpace = (event, namespace) => {
            if (event !== '') {
                const blocks = store.get(event, namespace);
                if (blocks && blocks.length) {
                    if (!(0,is_function/* isFunction */.m)(callback)) {
                        blocks.forEach(removeEventListener);
                        blocks.length = 0;
                    }
                    else {
                        const index = store.indexOf(event, namespace, callback);
                        if (index !== false) {
                            removeEventListener(blocks[index]);
                            blocks.splice(index, 1);
                        }
                    }
                }
            }
            else {
                store.events(namespace).forEach((eventName) => {
                    if (eventName !== '') {
                        removeCallbackFromNameSpace(eventName, namespace);
                    }
                });
            }
        };
        this.eachEvent(events, (event, namespace) => {
            if (namespace === defaultNameSpace) {
                store.namespaces().forEach((name) => {
                    removeCallbackFromNameSpace(event, name);
                });
            }
            else {
                removeCallbackFromNameSpace(event, namespace);
            }
        });
        return this;
    }
    stopPropagation(subjectOrEvents, eventsList) {
        const subject = (0,is_string/* isString */.H)(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = (0,is_string/* isString */.H)(subjectOrEvents)
            ? subjectOrEvents
            : eventsList;
        if (typeof events !== 'string') {
            throw (0,type/* error */.vU)('Need event names');
        }
        const store = this.getStore(subject);
        this.eachEvent(events, (event, namespace) => {
            const blocks = store.get(event, namespace);
            if (blocks) {
                this.__stopped.push(blocks);
            }
            if (namespace === defaultNameSpace) {
                store
                    .namespaces(true)
                    .forEach(ns => this.stopPropagation(subject, event + '.' + ns));
            }
        });
    }
    removeStop(currentBlocks) {
        if (currentBlocks) {
            const index = this.__stopped.indexOf(currentBlocks);
            index !== -1 && this.__stopped.splice(0, index + 1);
        }
    }
    isStopped(currentBlocks) {
        return (currentBlocks !== undefined &&
            this.__stopped.indexOf(currentBlocks) !== -1);
    }
    fire(subjectOrEvents, eventsList, ...args) {
        let result, result_value;
        const subject = (0,is_string/* isString */.H)(subjectOrEvents)
            ? this
            : subjectOrEvents;
        const events = (0,is_string/* isString */.H)(subjectOrEvents)
            ? subjectOrEvents
            : eventsList;
        const argumentsList = (0,is_string/* isString */.H)(subjectOrEvents)
            ? [eventsList, ...args]
            : args;
        const isDOMElement = (0,is_function/* isFunction */.m)(subject.dispatchEvent);
        if (!isDOMElement && !(0,is_string/* isString */.H)(events)) {
            throw (0,type/* error */.vU)('Need events names');
        }
        const store = this.getStore(subject);
        if (!(0,is_string/* isString */.H)(events) && isDOMElement) {
            this.triggerNativeEvent(subject, eventsList);
        }
        else {
            this.eachEvent(events, (event, namespace) => {
                if (isDOMElement) {
                    this.triggerNativeEvent(subject, event);
                }
                else {
                    const blocks = store.get(event, namespace);
                    if (blocks) {
                        try {
                            [...blocks].every((block) => {
                                if (this.isStopped(blocks)) {
                                    return false;
                                }
                                this.currents.push(event);
                                result_value =
                                    block.syntheticCallback.apply(subject, argumentsList);
                                this.currents.pop();
                                if (result_value !== undefined) {
                                    result = result_value;
                                }
                                return true;
                            });
                        }
                        finally {
                            this.removeStop(blocks);
                        }
                    }
                    if (namespace === defaultNameSpace && !isDOMElement) {
                        store
                            .namespaces()
                            .filter(ns => ns !== namespace)
                            .forEach((ns) => {
                            const result_second = this.fire.apply(this, [
                                subject,
                                event + '.' + ns,
                                ...argumentsList
                            ]);
                            if (result_second !== undefined) {
                                result = result_second;
                            }
                        });
                    }
                }
            });
        }
        return result;
    }
    destruct() {
        if (!this.isDestructed) {
            return;
        }
        this.isDestructed = true;
        this.off(this);
        this.getStore(this).clear();
        delete this[this.__key];
    }
}

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(36);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 8 modules
var decorators = __webpack_require__(33);
;// CONCATENATED MODULE: ./src/core/events/observe-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class ObserveObject {
    constructor(data, prefix = [], onEvents = {}) {
        this.__lockEvent = {};
        this.__data = data;
        this.__prefix = prefix;
        this.__onEvents = onEvents;
        Object.keys(data).forEach(key => {
            const prefix = this.__prefix.concat(key).filter(a => a.length);
            Object.defineProperty(this, key, {
                set: (value) => {
                    var _a;
                    const oldValue = data[key];
                    if (!(0,helpers.isFastEqual)(oldValue, value)) {
                        this.fire([
                            'beforeChange',
                            `beforeChange.${prefix.join('.')}`
                        ], key, value);
                        if ((0,helpers.isPlainObject)(value)) {
                            value = new ObserveObject(value, prefix, this.__onEvents);
                        }
                        data[key] = value;
                        const sum = [];
                        this.fire([
                            'change',
                            ...prefix.reduce((rs, p) => {
                                sum.push(p);
                                rs.push(`change.${sum.join('.')}`);
                                return rs;
                            }, [])
                        ], prefix.join('.'), oldValue, ((_a = value) === null || _a === void 0 ? void 0 : _a.valueOf)
                            ? value.valueOf()
                            : value);
                    }
                },
                get: () => {
                    return data[key];
                },
                enumerable: true,
                configurable: true
            });
            if ((0,helpers.isPlainObject)(data[key])) {
                data[key] = new ObserveObject(data[key], prefix, this.__onEvents);
            }
        });
    }
    valueOf() {
        return this.__data;
    }
    toString() {
        return JSON.stringify(this.valueOf());
    }
    on(event, callback) {
        if ((0,helpers.isArray)(event)) {
            event.map(e => this.on(e, callback));
            return this;
        }
        if (!this.__onEvents[event]) {
            this.__onEvents[event] = [];
        }
        this.__onEvents[event].push(callback);
        return this;
    }
    fire(event, ...attr) {
        if ((0,helpers.isArray)(event)) {
            event.map(e => this.fire(e, ...attr));
            return;
        }
        try {
            if (!this.__lockEvent[event] && this.__onEvents[event]) {
                this.__lockEvent[event] = true;
                this.__onEvents[event].forEach(clb => clb.call(this, ...attr));
            }
        }
        finally {
            this.__lockEvent[event] = false;
        }
    }
    static create(data, prefix = []) {
        if (data instanceof ObserveObject) {
            return data;
        }
        return new ObserveObject(data, prefix);
    }
}
(0,tslib_es6.__decorate)([
    decorators.nonenumerable
], ObserveObject.prototype, "__data", void 0);
(0,tslib_es6.__decorate)([
    decorators.nonenumerable
], ObserveObject.prototype, "__prefix", void 0);
(0,tslib_es6.__decorate)([
    decorators.nonenumerable
], ObserveObject.prototype, "__onEvents", void 0);
(0,tslib_es6.__decorate)([
    decorators.nonenumerable
], ObserveObject.prototype, "__lockEvent", void 0);

;// CONCATENATED MODULE: ./src/core/events/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RI": () => (/* binding */ hasOwn),
/* harmony export */   "dt": () => (/* binding */ type),
/* harmony export */   "vU": () => (/* binding */ error)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const class2type = {};
const toString = class2type.toString;
const hasOwn = class2type.hasOwnProperty;
[
    'Boolean',
    'Number',
    'String',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Object',
    'Error',
    'Symbol',
    'HTMLDocument',
    'Window',
    'HTMLElement',
    'HTMLBodyElement',
    'Text',
    'DocumentFragment',
    'DOMStringList',
    'HTMLCollection'
].forEach(name => {
    class2type['[object ' + name + ']'] = name.toLowerCase();
});
const type = (obj) => {
    if (obj === null) {
        return 'null';
    }
    return typeof obj === 'object' || typeof obj === 'function'
        ? class2type[toString.call(obj)] || 'object'
        : typeof obj;
};
function error(message) {
    return new TypeError(message);
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ isString)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isString(value) {
    return typeof value === 'string';
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ isFunction)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isFunction(value) {
    return typeof value === 'function';
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ isArray)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isArray(elm) {
    return Array.isArray(elm);
}


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$$": () => (/* reexport */ $$),
  "ConfigFlatten": () => (/* reexport */ ConfigFlatten),
  "ConfigProto": () => (/* reexport */ ConfigProto),
  "LimitedStack": () => (/* reexport */ utils/* LimitedStack */.lI),
  "appendScript": () => (/* reexport */ appendScript),
  "appendScriptAsync": () => (/* reexport */ appendScriptAsync),
  "appendStyleAsync": () => (/* reexport */ appendStyleAsync),
  "applyStyles": () => (/* reexport */ applyStyles),
  "asArray": () => (/* reexport */ asArray),
  "attr": () => (/* reexport */ utils/* attr */.Lj),
  "browser": () => (/* reexport */ browser),
  "buildQuery": () => (/* reexport */ buildQuery),
  "call": () => (/* reexport */ utils/* call */.RE),
  "callPromise": () => (/* reexport */ utils/* callPromise */.C6),
  "camelCase": () => (/* reexport */ string/* camelCase */.eV),
  "cleanFromWord": () => (/* reexport */ cleanFromWord),
  "clearCenterAlign": () => (/* reexport */ css/* clearCenterAlign */.b),
  "clearTimeout": () => (/* reexport */ set_timeout_clearTimeout),
  "cns": () => (/* reexport */ utils/* cns */.H5),
  "colorToHex": () => (/* reexport */ color_to_hex/* colorToHex */.h),
  "completeUrl": () => (/* reexport */ completeUrl),
  "convertMediaUrlToVideoEmbed": () => (/* reexport */ convertMediaUrlToVideoEmbed),
  "css": () => (/* reexport */ css/* css */.i),
  "cssPath": () => (/* reexport */ cssPath),
  "ctrlKey": () => (/* reexport */ ctrlKey),
  "dataBind": () => (/* reexport */ data_bind/* dataBind */.q),
  "defaultLanguage": () => (/* reexport */ default_language/* defaultLanguage */.X),
  "each": () => (/* reexport */ each),
  "error": () => (/* reexport */ type/* error */.vU),
  "fastClone": () => (/* reexport */ fastClone),
  "get": () => (/* reexport */ utils/* get */.U2),
  "getClassName": () => (/* reexport */ utils/* getClassName */.gj),
  "getContentWidth": () => (/* reexport */ getContentWidth),
  "getXPathByElement": () => (/* reexport */ getXPathByElement),
  "hasBrowserColorPicker": () => (/* reexport */ checker/* hasBrowserColorPicker */.EO),
  "hasContainer": () => (/* reexport */ checker/* hasContainer */.Zt),
  "hasOwn": () => (/* reexport */ type/* hasOwn */.RI),
  "htmlspecialchars": () => (/* reexport */ htmlspecialchars),
  "humanSizeToBytes": () => (/* reexport */ humanSizeToBytes),
  "i18n": () => (/* reexport */ string/* i18n */.ag),
  "inView": () => (/* reexport */ inView),
  "innerWidth": () => (/* reexport */ inner_width_innerWidth),
  "isArray": () => (/* reexport */ checker/* isArray */.kJ),
  "isAtom": () => (/* reexport */ isAtom),
  "isBoolean": () => (/* reexport */ checker/* isBoolean */.jn),
  "isDestructable": () => (/* reexport */ checker/* isDestructable */.Z$),
  "isEqual": () => (/* reexport */ checker/* isEqual */.Xy),
  "isFastEqual": () => (/* reexport */ checker/* isFastEqual */.LP),
  "isFunction": () => (/* reexport */ checker/* isFunction */.mf),
  "isHTML": () => (/* reexport */ checker/* isHTML */.FP),
  "isHtmlFromWord": () => (/* reexport */ checker/* isHtmlFromWord */.I4),
  "isInitable": () => (/* reexport */ checker/* isInitable */.Gu),
  "isInt": () => (/* reexport */ checker/* isInt */.GN),
  "isJoditObject": () => (/* reexport */ checker/* isJoditObject */.Zu),
  "isLicense": () => (/* reexport */ checker/* isLicense */.A1),
  "isNativeFunction": () => (/* reexport */ checker/* isNativeFunction */.QC),
  "isNumber": () => (/* reexport */ checker/* isNumber */.hj),
  "isNumeric": () => (/* reexport */ checker/* isNumeric */.kE),
  "isPlainObject": () => (/* reexport */ checker/* isPlainObject */.PO),
  "isPromise": () => (/* reexport */ checker/* isPromise */.tI),
  "isString": () => (/* reexport */ checker/* isString */.HD),
  "isURL": () => (/* reexport */ checker/* isURL */.PX),
  "isValidName": () => (/* reexport */ checker/* isValidName */.r1),
  "isViewObject": () => (/* reexport */ checker/* isViewObject */.f2),
  "isVoid": () => (/* reexport */ checker/* isVoid */.nj),
  "isWindow": () => (/* reexport */ checker/* isWindow */.FJ),
  "kebabCase": () => (/* reexport */ string/* kebabCase */.GL),
  "keepNames": () => (/* reexport */ utils/* keepNames */.kc),
  "keys": () => (/* reexport */ utils/* keys */.XP),
  "loadImage": () => (/* reexport */ utils/* loadImage */.po),
  "loadNext": () => (/* reexport */ loadNext),
  "markAsAtomic": () => (/* reexport */ markAsAtomic),
  "markDeprecated": () => (/* reexport */ utils/* markDeprecated */.Q8),
  "markOwner": () => (/* reexport */ utils/* markOwner */.MN),
  "memorizeExec": () => (/* reexport */ utils/* memorizeExec */.u3),
  "nl2br": () => (/* reexport */ nl2br),
  "normalizeColor": () => (/* reexport */ normalize/* normalizeColor */.ut),
  "normalizeCssValue": () => (/* reexport */ normalize/* normalizeCssValue */.Zh),
  "normalizeKeyAliases": () => (/* reexport */ normalize/* normalizeKeyAliases */.T2),
  "normalizeLicense": () => (/* reexport */ normalize/* normalizeLicense */.Pd),
  "normalizeNode": () => (/* reexport */ normalize/* normalizeNode */.Tz),
  "normalizePath": () => (/* reexport */ normalize/* normalizePath */.AH),
  "normalizeRelativePath": () => (/* reexport */ normalize/* normalizeRelativePath */.Jf),
  "normalizeSize": () => (/* reexport */ normalize/* normalizeSize */.aC),
  "normalizeUrl": () => (/* reexport */ normalize/* normalizeUrl */.D5),
  "offset": () => (/* reexport */ offset),
  "parseQuery": () => (/* reexport */ parseQuery),
  "position": () => (/* reexport */ position),
  "refs": () => (/* reexport */ refs),
  "reset": () => (/* reexport */ utils/* reset */.mc),
  "resolveElement": () => (/* reexport */ resolveElement),
  "scrollIntoViewIfNeeded": () => (/* reexport */ scrollIntoViewIfNeeded),
  "set": () => (/* reexport */ utils/* set */.t8),
  "setTimeout": () => (/* reexport */ set_timeout_setTimeout),
  "splitArray": () => (/* reexport */ splitArray),
  "sprintf": () => (/* reexport */ string/* sprintf */.gB),
  "stringify": () => (/* reexport */ string/* stringify */.Pz),
  "stripTags": () => (/* reexport */ stripTags),
  "toArray": () => (/* reexport */ toArray),
  "trim": () => (/* reexport */ string/* trim */.fy),
  "trimInv": () => (/* reexport */ string/* trimInv */.as),
  "type": () => (/* reexport */ type/* type */.dt),
  "ucfirst": () => (/* reexport */ string/* ucfirst */.Ps),
  "val": () => (/* reexport */ val)
});

// EXTERNAL MODULE: ./src/core/helpers/utils/index.ts + 6 modules
var utils = __webpack_require__(9);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-array.ts
var is_array = __webpack_require__(7);
;// CONCATENATED MODULE: ./src/core/helpers/array/as-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const asArray = (a) => ((0,is_array/* isArray */.k)(a) ? a : [a]);

// EXTERNAL MODULE: ./src/core/helpers/checker/is-string.ts
var is_string = __webpack_require__(5);
;// CONCATENATED MODULE: ./src/core/helpers/array/split-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function splitArray(a) {
    return (0,is_string/* isString */.H)(a) ? a.split(/[,\s]+/) : a;
}

// EXTERNAL MODULE: ./src/core/helpers/checker/is-native-function.ts
var is_native_function = __webpack_require__(19);
;// CONCATENATED MODULE: ./src/core/helpers/array/to-array.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const toArray = function toArray(...args) {
    var _a;
    const func = (0,is_native_function/* isNativeFunction */.Q)(Array.from)
        ? Array.from
        : (_a = (0,utils/* reset */.mc)('Array.from')) !== null && _a !== void 0 ? _a : Array.from;
    return func.apply(Array, args);
};

;// CONCATENATED MODULE: ./src/core/helpers/array/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/core/helpers/async/set-timeout.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function set_timeout_setTimeout(callback, timeout, ...args) {
    if (!timeout) {
        callback.call(null, ...args);
    }
    else {
        return window.setTimeout(callback, timeout, ...args);
    }
    return 0;
}
function set_timeout_clearTimeout(timer) {
    window.clearTimeout(timer);
}

;// CONCATENATED MODULE: ./src/core/helpers/async/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


// EXTERNAL MODULE: ./src/core/helpers/string/stringify.ts
var stringify = __webpack_require__(16);
;// CONCATENATED MODULE: ./src/core/helpers/extend.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isAtom(obj) {
    return obj && obj.isAtom;
}
function markAsAtomic(obj) {
    Object.defineProperty(obj, 'isAtom', {
        enumerable: false,
        value: true,
        configurable: false
    });
    return obj;
}
function fastClone(object) {
    return JSON.parse((0,stringify/* stringify */.P)(object));
}

// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 14 modules
var checker = __webpack_require__(15);
// EXTERNAL MODULE: ./src/core/helpers/color/color-to-hex.ts
var color_to_hex = __webpack_require__(21);
;// CONCATENATED MODULE: ./src/core/helpers/color/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/core/helpers/config-proto.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function ConfigProto(options, proto, deep = 0) {
    if (Object.getPrototypeOf(options) !== Object.prototype) {
        return options;
    }
    const def = config/* Config.defaultOptions */.D.defaultOptions;
    if ((0,checker/* isString */.HD)(options.preset)) {
        if (def.presets[options.preset] !== undefined) {
            const preset = def.presets[options.preset];
            Object.keys(preset).forEach(subKey => {
                if ((0,checker/* isVoid */.nj)(options[subKey])) {
                    options[subKey] = preset[subKey];
                }
            });
        }
        delete options.preset;
    }
    const newOpt = {};
    Object.keys(options).forEach(key => {
        const opt = options[key], protoKey = proto ? proto[key] : null;
        if ((0,checker/* isPlainObject */.PO)(opt) && (0,checker/* isPlainObject */.PO)(protoKey) && !isAtom(opt)) {
            newOpt[key] = ConfigProto(opt, protoKey, deep + 1);
            return;
        }
        if (deep !== 0 && (0,checker/* isArray */.kJ)(opt) && !isAtom(opt) && (0,checker/* isArray */.kJ)(protoKey)) {
            newOpt[key] = [...opt, ...protoKey.slice(opt.length)];
            return;
        }
        newOpt[key] = opt;
    });
    Object.setPrototypeOf(newOpt, proto);
    return newOpt;
}
function ConfigFlatten(obj) {
    return (0,utils/* keys */.XP)(obj, false).reduce((app, key) => {
        app[key] = obj[key];
        return app;
    }, {});
}

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);
// EXTERNAL MODULE: ./src/core/helpers/type.ts
var type = __webpack_require__(4);
// EXTERNAL MODULE: ./src/core/helpers/string/index.ts + 5 modules
var string = __webpack_require__(22);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 1 modules
var ui = __webpack_require__(24);
;// CONCATENATED MODULE: ./src/core/helpers/selector.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








let temp = 1;
const $$temp = () => {
    temp++;
    return temp;
};
function $$(selector, root) {
    let result;
    if (false) {}
    else {
        result = root.querySelectorAll(selector);
    }
    return [].slice.call(result);
}
const getXPathByElement = (element, root) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
        return '';
    }
    if (!element.parentNode || root === element) {
        return '';
    }
    if (element.id) {
        return "//*[@id='" + element.id + "']";
    }
    const sames = [].filter.call(element.parentNode.childNodes, (x) => x.nodeName === element.nodeName);
    return (getXPathByElement(element.parentNode, root) +
        '/' +
        element.nodeName.toLowerCase() +
        (sames.length > 1
            ? '[' + (toArray(sames).indexOf(element) + 1) + ']'
            : ''));
};
const refs = (root) => {
    if (root instanceof ui/* UIElement */.u1) {
        root = root.container;
    }
    return $$('[ref],[data-ref]', root).reduce((def, child) => {
        const key = (0,utils/* attr */.Lj)(child, '-ref');
        if (key && (0,checker/* isString */.HD)(key)) {
            def[(0,string/* camelCase */.eV)(key)] = child;
            def[key] = child;
        }
        return def;
    }, {});
};
const cssPath = (el) => {
    if (!dom/* Dom.isElement */.i.isElement(el)) {
        return null;
    }
    const path = [];
    let start = el;
    while (start && start.nodeType === Node.ELEMENT_NODE) {
        let selector = start.nodeName.toLowerCase();
        if (start.id) {
            selector += '#' + start.id;
            path.unshift(selector);
            break;
        }
        else {
            let sib = start, nth = 1;
            do {
                sib = sib.previousElementSibling;
                if (sib && sib.nodeName.toLowerCase() === selector) {
                    nth++;
                }
            } while (sib);
            selector += ':nth-of-type(' + nth + ')';
        }
        path.unshift(selector);
        start = start.parentNode;
    }
    return path.join(' > ');
};
function resolveElement(element, od) {
    let resolved = element;
    if ((0,checker/* isString */.HD)(element)) {
        try {
            resolved = od.querySelector(element);
        }
        catch (_a) {
            throw (0,type/* error */.vU)('String "' + element + '" should be valid HTML selector');
        }
    }
    if (!resolved ||
        typeof resolved !== 'object' ||
        !dom/* Dom.isElement */.i.isElement(resolved) ||
        !resolved.cloneNode) {
        throw (0,type/* error */.vU)('Element "' + element + '" should be string or HTMLElement instance');
    }
    return resolved;
}

;// CONCATENATED MODULE: ./src/core/helpers/html/apply-styles.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function normalizeCSS(s) {
    return s
        .replace(/mso-[a-z-]+:[\s]*[^;]+;/gi, '')
        .replace(/mso-[a-z-]+:[\s]*[^";]+$/gi, '')
        .replace(/border[a-z-]*:[\s]*[^;]+;/gi, '')
        .replace(/([0-9.]+)(pt|cm)/gi, (match, units, metrics) => {
        switch (metrics.toLowerCase()) {
            case 'pt':
                return (parseFloat(units) * 1.328).toFixed(0) + 'px';
            case 'cm':
                return (parseFloat(units) * 0.02645833).toFixed(0) + 'px';
        }
        return match;
    });
}
function applyStyles(html) {
    if (html.indexOf('<html ') === -1) {
        return html;
    }
    html = html.substring(html.indexOf('<html '), html.length);
    html = html.substring(0, html.lastIndexOf('</html>') + '</html>'.length);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    let convertedString = '', collection = [], rules = [];
    try {
        const iframeDoc = iframe.contentDocument ||
            (iframe.contentWindow ? iframe.contentWindow.document : null);
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(html);
            iframeDoc.close();
            if (iframeDoc.styleSheets.length) {
                rules = iframeDoc.styleSheets[iframeDoc.styleSheets.length - 1].cssRules;
            }
            for (let idx = 0; idx < rules.length; idx += 1) {
                if (rules[idx].selectorText === '') {
                    continue;
                }
                collection = $$(rules[idx].selectorText, iframeDoc.body);
                collection.forEach((elm) => {
                    elm.style.cssText = normalizeCSS(rules[idx].style.cssText + ';' + elm.style.cssText);
                });
            }
            dom/* Dom.each */.i.each(iframeDoc.body, node => {
                if (dom/* Dom.isElement */.i.isElement(node)) {
                    const elm = node;
                    const css = elm.style.cssText;
                    if (css) {
                        elm.style.cssText = normalizeCSS(css);
                    }
                    if (elm.hasAttribute('lang')) {
                        elm.removeAttribute('lang');
                    }
                }
            });
            convertedString = iframeDoc.firstChild
                ? (0,string/* trim */.fy)(iframeDoc.body.innerHTML)
                : '';
        }
    }
    catch (_a) {
    }
    finally {
        dom/* Dom.safeRemove */.i.safeRemove(iframe);
    }
    if (convertedString) {
        html = convertedString;
    }
    return (0,string/* trim */.fy)(html
        .replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, '')
        .replace(/<!--[^>]*>/g, ''));
}

;// CONCATENATED MODULE: ./src/core/helpers/html/clean-from-word.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function cleanFromWord(html) {
    if (html.indexOf('<html ') !== -1) {
        html = html.substring(html.indexOf('<html '), html.length);
        html = html.substring(0, html.lastIndexOf('</html>') + '</html>'.length);
    }
    let convertedString = '';
    try {
        const div = document.createElement('div');
        div.innerHTML = html;
        const marks = [];
        if (div.firstChild) {
            dom/* Dom.all */.i.all(div, node => {
                if (!node) {
                    return;
                }
                switch (node.nodeType) {
                    case Node.ELEMENT_NODE:
                        switch (node.nodeName) {
                            case 'STYLE':
                            case 'LINK':
                            case 'META':
                                marks.push(node);
                                break;
                            case 'W:SDT':
                            case 'W:SDTPR':
                            case 'FONT':
                                dom/* Dom.unwrap */.i.unwrap(node);
                                break;
                            default:
                                toArray(node.attributes).forEach((attr) => {
                                    if ([
                                        'src',
                                        'href',
                                        'rel',
                                        'content'
                                    ].indexOf(attr.name.toLowerCase()) === -1) {
                                        node.removeAttribute(attr.name);
                                    }
                                });
                        }
                        break;
                    case Node.TEXT_NODE:
                        break;
                    default:
                        marks.push(node);
                }
            });
        }
        marks.forEach(dom/* Dom.safeRemove */.i.safeRemove);
        convertedString = div.innerHTML;
    }
    catch (e) { }
    if (convertedString) {
        html = convertedString;
    }
    html = html.split(/(\n)/).filter(string/* trim */.fy).join('\n');
    return html
        .replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, '')
        .replace(/<!--[^>]*>/g, '');
}

;// CONCATENATED MODULE: ./src/core/helpers/html/htmlspecialchars.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function htmlspecialchars(html) {
    const tmp = document.createElement('div');
    tmp.textContent = html;
    return tmp.innerHTML;
}

;// CONCATENATED MODULE: ./src/core/helpers/html/strip-tags.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function stripTags(html, doc = document) {
    const tmp = doc.createElement('div');
    if ((0,checker/* isString */.HD)(html)) {
        tmp.innerHTML = html;
    }
    else {
        tmp.appendChild(html);
    }
    $$('DIV, P, BR, H1, H2, H3, H4, H5, H6, HR', tmp).forEach(p => {
        const pr = p.parentNode;
        if (!pr) {
            return;
        }
        const nx = p.nextSibling;
        if (dom/* Dom.isText */.i.isText(nx) && /^\s/.test(nx.nodeValue || '')) {
            return;
        }
        if (nx) {
            pr.insertBefore(doc.createTextNode(' '), nx);
        }
    });
    return (0,string/* trim */.fy)(tmp.innerText) || '';
}

;// CONCATENATED MODULE: ./src/core/helpers/html/nl2br.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function nl2br(html) {
    return html.replace(/([^>])([\n\r]+)/g, '$1<br/>$2');
}

;// CONCATENATED MODULE: ./src/core/helpers/html/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






// EXTERNAL MODULE: ./src/core/helpers/normalize/index.ts + 9 modules
var normalize = __webpack_require__(29);
;// CONCATENATED MODULE: ./src/core/helpers/size/get-content-width.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const getContentWidth = (element, win) => {
    const pi = (value) => parseInt(value, 10), style = win.getComputedStyle(element), width = element.offsetWidth, paddingLeft = pi(style.getPropertyValue('padding-left') || '0'), paddingRight = pi(style.getPropertyValue('padding-right') || '0');
    return width - paddingLeft - paddingRight;
};

;// CONCATENATED MODULE: ./src/core/helpers/size/inner-width.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const inner_width_innerWidth = (element, win) => {
    const computedStyle = win.getComputedStyle(element);
    let elementWidth = element.clientWidth;
    elementWidth -=
        parseFloat(computedStyle.paddingLeft || '0') +
            parseFloat(computedStyle.paddingRight || '0');
    return elementWidth;
};

;// CONCATENATED MODULE: ./src/core/helpers/size/offset.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const offset = (elm, jodit, doc, recurse = false) => {
    let rect;
    try {
        rect = elm.getBoundingClientRect();
    }
    catch (e) {
        rect = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    const body = doc.body, docElem = doc.documentElement || {
        clientTop: 0,
        clientLeft: 0,
        scrollTop: 0,
        scrollLeft: 0
    }, win = doc.defaultView || doc.parentWindow, scrollTop = win.pageYOffset || docElem.scrollTop || body.scrollTop, scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0;
    let topValue, leftValue;
    const iframe = jodit.iframe;
    if (!recurse && jodit && jodit.options && jodit.o.iframe && iframe) {
        const { top, left } = offset(iframe, jodit, jodit.od, true);
        topValue = rect.top + top;
        leftValue = rect.left + left;
    }
    else {
        topValue = rect.top + scrollTop - clientTop;
        leftValue = rect.left + scrollLeft - clientLeft;
    }
    return {
        top: Math.round(topValue),
        left: Math.round(leftValue),
        width: rect.width,
        height: rect.height
    };
};

;// CONCATENATED MODULE: ./src/core/helpers/size/position.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function position(elm, jodit, recurse = false) {
    const rect = elm.getBoundingClientRect();
    let xPos = rect.left, yPos = rect.top;
    if ((0,checker/* isJoditObject */.Zu)(jodit) && jodit.iframe && !recurse) {
        const { left, top } = position(jodit.iframe, jodit, true);
        xPos += left;
        yPos += top;
    }
    return {
        left: Math.round(xPos),
        top: Math.round(yPos),
        width: Math.round(elm.offsetWidth),
        height: Math.round(elm.offsetHeight)
    };
}

;// CONCATENATED MODULE: ./src/core/helpers/size/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





;// CONCATENATED MODULE: ./src/core/helpers/complete-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const completeUrl = (url) => {
    if (window.location.protocol === 'file:' && /^\/\//.test(url)) {
        url = 'https:' + url;
    }
    return url;
};

;// CONCATENATED MODULE: ./src/core/helpers/append-script.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const alreadyLoadedList = new Map();
const cacheLoaders = (loader) => {
    return async (jodit, url) => {
        if (alreadyLoadedList.has(url)) {
            return alreadyLoadedList.get(url);
        }
        const promise = loader(jodit, url);
        alreadyLoadedList.set(url, promise);
        return promise;
    };
};
const appendScript = (jodit, url, callback) => {
    const script = jodit.c.element('script');
    script.type = 'text/javascript';
    script.async = true;
    if ((0,checker/* isFunction */.mf)(callback) && !jodit.isInDestruct) {
        jodit.e.on(script, 'load', callback);
    }
    if (!script.src) {
        script.src = completeUrl(url);
    }
    jodit.od.body.appendChild(script);
    return {
        callback,
        element: script
    };
};
const appendScriptAsync = cacheLoaders((jodit, url) => {
    return new Promise((resolve, reject) => {
        const { element } = appendScript(jodit, url, resolve);
        !jodit.isInDestruct && jodit.e.on(element, 'error', reject);
    });
});
const appendStyleAsync = cacheLoaders((jodit, url) => {
    return new Promise((resolve, reject) => {
        const link = jodit.c.element('link');
        link.rel = 'stylesheet';
        link.media = 'all';
        link.crossOrigin = 'anonymous';
        const callback = () => resolve(link);
        !jodit.isInDestruct &&
            jodit.e.on(link, 'load', callback).on(link, 'error', reject);
        link.href = completeUrl(url);
        if (jodit.o.shadowRoot) {
            jodit.o.shadowRoot.appendChild(link);
        }
        else {
            jodit.od.body.appendChild(link);
        }
    });
});
const loadNext = (jodit, urls, i = 0) => {
    if (!(0,checker/* isString */.HD)(urls[i])) {
        return Promise.resolve();
    }
    return appendScriptAsync(jodit, urls[i]).then(() => loadNext(jodit, urls, i + 1));
};

;// CONCATENATED MODULE: ./src/core/helpers/browser.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const browser = (browser) => {
    const ua = navigator.userAgent.toLowerCase(), match = /(firefox)[\s/]([\w.]+)/.exec(ua) ||
        /(chrome)[\s/]([\w.]+)/.exec(ua) ||
        /(webkit)[\s/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version)[\s/]([\w.]+)/.exec(ua) ||
        /(msie)[\s]([\w.]+)/.exec(ua) ||
        /(trident)\/([\w.]+)/.exec(ua) ||
        ua.indexOf('compatible') < 0 ||
        [];
    if (browser === 'version') {
        return match[2];
    }
    if (browser === 'webkit') {
        return match[1] === 'chrome' || match[1] === 'webkit';
    }
    if (browser === 'ff') {
        return match[1] === 'firefox';
    }
    if (browser === 'msie') {
        return match[1] === 'trident' || match[1] === 'msie';
    }
    return match[1] === browser;
};

;// CONCATENATED MODULE: ./src/core/helpers/parse-query.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const parseQuery = (queryString) => {
    const query = {}, a = queryString.substr(1).split('&');
    for (let i = 0; i < a.length; i += 1) {
        const keyValue = a[i].split('=');
        query[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1] || '');
    }
    return query;
};

;// CONCATENATED MODULE: ./src/core/helpers/convert-media-url-to-video-embed.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const convertMediaUrlToVideoEmbed = (url, width = 400, height = 345) => {
    if (!(0,checker/* isURL */.PX)(url)) {
        return url;
    }
    const parser = document.createElement('a'), pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
    parser.href = url;
    if (!width) {
        width = 400;
    }
    if (!height) {
        height = 345;
    }
    const protocol = parser.protocol || '';
    switch (parser.hostname) {
        case 'www.vimeo.com':
        case 'vimeo.com':
            return pattern1.test(url)
                ? url.replace(pattern1, '<iframe width="' +
                    width +
                    '" height="' +
                    height +
                    '" src="' +
                    protocol +
                    '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>')
                : url;
        case 'youtube.com':
        case 'www.youtube.com':
        case 'youtu.be':
        case 'www.youtu.be': {
            const query = parser.search
                ? parseQuery(parser.search)
                : { v: parser.pathname.substr(1) };
            return query.v
                ? '<iframe width="' +
                    width +
                    '" height="' +
                    height +
                    '" src="' +
                    protocol +
                    '//www.youtube.com/embed/' +
                    query.v +
                    '" frameborder="0" allowfullscreen></iframe>'
                : url;
        }
    }
    return url;
};

// EXTERNAL MODULE: ./src/core/helpers/css.ts
var css = __webpack_require__(28);
;// CONCATENATED MODULE: ./src/core/helpers/ctrl-key.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ctrlKey = (e) => {
    if (typeof navigator !== 'undefined' &&
        navigator.userAgent.indexOf('Mac OS X') !== -1) {
        if (e.metaKey && !e.altKey) {
            return true;
        }
    }
    else if (e.ctrlKey && !e.altKey) {
        return true;
    }
    return false;
};

// EXTERNAL MODULE: ./src/core/helpers/data-bind.ts
var data_bind = __webpack_require__(10);
// EXTERNAL MODULE: ./src/core/helpers/default-language.ts
var default_language = __webpack_require__(23);
;// CONCATENATED MODULE: ./src/core/helpers/each.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function each(obj, callback) {
    let length, keys, i;
    if ((0,checker/* isArray */.kJ)(obj)) {
        length = obj.length;
        for (i = 0; i < length; i += 1) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                return false;
            }
        }
    }
    else {
        keys = Object.keys(obj);
        for (i = 0; i < keys.length; i += 1) {
            if (callback.call(obj[keys[i]], keys[i], obj[keys[i]]) === false) {
                return false;
            }
        }
    }
    return true;
}

;// CONCATENATED MODULE: ./src/core/helpers/human-size-to-bytes.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const humanSizeToBytes = (human) => {
    if (/^[0-9.]+$/.test(human.toString())) {
        return parseFloat(human);
    }
    const format = human.substr(-2, 2).toUpperCase(), formats = ['KB', 'MB', 'GB', 'TB'], number = parseFloat(human.substr(0, human.length - 2));
    return formats.indexOf(format) !== -1
        ? number * Math.pow(1024, formats.indexOf(format) + 1)
        : parseInt(human, 10);
};

;// CONCATENATED MODULE: ./src/core/helpers/build-query.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const buildQuery = (data, prefix) => {
    const str = [];
    const enc = encodeURIComponent;
    for (const dataKey in data) {
        if (Object.prototype.hasOwnProperty.call(data, dataKey)) {
            const k = prefix ? prefix + '[' + dataKey + ']' : dataKey;
            const v = data[dataKey];
            str.push((0,checker/* isPlainObject */.PO)(v) ? buildQuery(v, k) : enc(k) + '=' + enc(v));
        }
    }
    return str.join('&');
};

;// CONCATENATED MODULE: ./src/core/helpers/scroll-into-view.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const inView = (elm, root, doc) => {
    let rect = elm.getBoundingClientRect(), el = elm;
    const top = rect.top, height = rect.height;
    do {
        if (el && el.parentNode) {
            el = el.parentNode;
            rect = el.getBoundingClientRect();
            if (!(top <= rect.bottom)) {
                return false;
            }
            if (top + height <= rect.top) {
                return false;
            }
        }
    } while (el && el !== root && el.parentNode);
    return (top <= ((doc.documentElement && doc.documentElement.clientHeight) || 0));
};
const scrollIntoViewIfNeeded = (elm, root, doc) => {
    if (!inView(elm, root, doc)) {
        if (root.clientHeight !== root.scrollHeight) {
            root.scrollTop = elm.offsetTop;
        }
        if (!inView(elm, root, doc)) {
            elm.scrollIntoView();
        }
    }
};

;// CONCATENATED MODULE: ./src/core/helpers/val.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const val = (elm, selector, value) => {
    const child = elm.querySelector(selector);
    if (!child) {
        return '';
    }
    if (value) {
        child.value = value;
    }
    return child.value;
};

;// CONCATENATED MODULE: ./src/core/helpers/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





























/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lI": () => (/* reexport */ LimitedStack),
  "Lj": () => (/* reexport */ attr),
  "RE": () => (/* reexport */ call),
  "C6": () => (/* reexport */ callPromise),
  "H5": () => (/* reexport */ cns),
  "U2": () => (/* reexport */ get),
  "gj": () => (/* reexport */ getClassName),
  "kc": () => (/* reexport */ keepNames),
  "XP": () => (/* reexport */ keys),
  "po": () => (/* reexport */ loadImage),
  "Q8": () => (/* reexport */ markDeprecated),
  "MN": () => (/* reexport */ markOwner),
  "u3": () => (/* reexport */ memorizeExec),
  "mc": () => (/* reexport */ utils_reset),
  "t8": () => (/* reexport */ set)
});

;// CONCATENATED MODULE: ./src/core/helpers/utils/mark-deprecated.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const cns = console;
function markDeprecated(method, names = [''], ctx = null) {
    return (...args) => {
        cns.warn(`Method "${names[0]}" deprecated.` +
            (names[1] ? ` Use "${names[1]}" instead` : ''));
        return method.call(ctx, ...args);
    };
}

// EXTERNAL MODULE: ./src/core/helpers/checker/is-function.ts
var is_function = __webpack_require__(6);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-promise.ts
var is_promise = __webpack_require__(20);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-string.ts
var is_string = __webpack_require__(5);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-void.ts
var is_void = __webpack_require__(17);
;// CONCATENATED MODULE: ./src/core/helpers/utils/get.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function get(chain, obj) {
    if (!(0,is_string/* isString */.H)(chain) || !chain.length) {
        return null;
    }
    const parts = chain.split('.');
    let result = obj;
    for (const part of parts) {
        if ((0,is_void/* isVoid */.n)(result[part])) {
            return null;
        }
        result = result[part];
    }
    if ((0,is_void/* isVoid */.n)(result)) {
        return null;
    }
    return result;
}

// EXTERNAL MODULE: ./src/core/helpers/data-bind.ts
var data_bind = __webpack_require__(10);
// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 14 modules
var checker = __webpack_require__(15);
;// CONCATENATED MODULE: ./src/core/helpers/utils/utils.ts





function call(func, ...args) {
    return func(...args);
}
function attr(elm, key, value) {
    if (!elm || !(0,is_function/* isFunction */.m)(elm.getAttribute)) {
        return null;
    }
    if (/^-/.test(key)) {
        const res = attr(elm, `data${key}`);
        if (res) {
            return res;
        }
        key = key.substr(1);
    }
    if (value !== undefined) {
        if (value == null) {
            elm.hasAttribute(key) && elm.removeAttribute(key);
        }
        else {
            elm.setAttribute(key, value.toString());
            return value.toString();
        }
    }
    return elm.getAttribute(key);
}
function markOwner(jodit, elm) {
    attr(elm, 'data-editor_id', jodit.id);
    !elm.component &&
        Object.defineProperty(elm, 'jodit', {
            value: jodit
        });
}
function callPromise(condition, callback) {
    if ((0,is_promise/* isPromise */.t)(condition)) {
        return condition.finally(callback);
    }
    else {
        return callback();
    }
}
const map = {};
const utils_reset = function (key) {
    var _a, _b;
    if (!(key in map)) {
        const iframe = document.createElement('iframe');
        try {
            iframe.src = 'about:blank';
            document.body.appendChild(iframe);
            if (!iframe.contentWindow) {
                return null;
            }
            const func = get(key, iframe.contentWindow), bind = get(key.split('.').slice(0, -1).join('.'), iframe.contentWindow);
            if ((0,is_function/* isFunction */.m)(func)) {
                map[key] = func.bind(bind);
            }
        }
        catch (e) {
            if (false) {}
        }
        finally {
            (_a = iframe.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(iframe);
        }
    }
    return (_b = map[key]) !== null && _b !== void 0 ? _b : null;
};
const loadImage = (src, jodit) => jodit.async.promise((res, rej) => {
    const image = new Image(), onError = () => {
        jodit.e.off(image);
        rej === null || rej === void 0 ? void 0 : rej();
    }, onSuccess = () => {
        jodit.e.off(image);
        res(image);
    };
    jodit.e
        .one(image, 'load', onSuccess)
        .one(image, 'error', onError)
        .one(image, 'abort', onError);
    image.src = src;
    if (image.complete) {
        onSuccess();
    }
});
const keys = (obj, own = true) => {
    if (own) {
        return Object.keys(obj);
    }
    const props = [];
    for (const key in obj) {
        props.push(key);
    }
    return props;
};
const memorizeExec = (editor, _, { control }, preProcessValue) => {
    const key = `button${control.command}`;
    let value = (control.args && control.args[0]) || (0,data_bind/* dataBind */.q)(editor, key);
    if ((0,checker/* isVoid */.nj)(value)) {
        return false;
    }
    (0,data_bind/* dataBind */.q)(editor, key, value);
    if (preProcessValue) {
        value = preProcessValue(value);
    }
    editor.execCommand(control.command, false, value || undefined);
};

// EXTERNAL MODULE: ./src/core/helpers/checker/is-numeric.ts
var is_numeric = __webpack_require__(18);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-array.ts
var is_array = __webpack_require__(7);
;// CONCATENATED MODULE: ./src/core/helpers/utils/set.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function set(chain, value, obj) {
    if (!(0,is_string/* isString */.H)(chain) || !chain.length) {
        return;
    }
    const parts = chain.split('.');
    let result = obj, key = parts[0];
    for (let i = 0; i < parts.length - 1; i += 1) {
        key = parts[i];
        if (!(0,is_array/* isArray */.k)(result[key]) && !(0,checker/* isPlainObject */.PO)(result[key])) {
            result[key] = (0,is_numeric/* isNumeric */.k)(parts[i + 1]) ? [] : {};
        }
        result = result[key];
    }
    if (result) {
        result[parts[parts.length - 1]] = value;
    }
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/get-class-name.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const keepNames = new Map();
const getClassName = (obj) => {
    var _a;
    if ((0,is_function/* isFunction */.m)(obj.className)) {
        return obj.className();
    }
    const constructor = ((_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.originalConstructor) || obj.constructor;
    if (keepNames.has(constructor)) {
        return keepNames.get(constructor);
    }
    if (constructor.name) {
        return constructor.name;
    }
    const regex = new RegExp(/^\s*function\s*(\S*)\s*\(/);
    const res = constructor.toString().match(regex);
    return res ? res[1] : '';
};

;// CONCATENATED MODULE: ./src/core/helpers/utils/stack.ts
class LimitedStack {
    constructor(limit) {
        this.limit = limit;
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
        if (this.stack.length > this.limit) {
            this.stack.shift();
        }
        return this;
    }
    pop() {
        return this.stack.pop();
    }
    find(clb) {
        return this.stack.find(clb);
    }
}

;// CONCATENATED MODULE: ./src/core/helpers/utils/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ dataBind)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _checker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const store = new WeakMap();
const dataBind = (elm, key, value) => {
    let itemStore = store.get(elm);
    if (!itemStore) {
        itemStore = {};
        store.set(elm, itemStore);
        let e = null;
        if (elm instanceof _component__WEBPACK_IMPORTED_MODULE_0__/* .ViewComponent */ .Hr) {
            e = elm.j.e;
        }
        if ((0,_checker__WEBPACK_IMPORTED_MODULE_1__/* .isViewObject */ .f2)(elm)) {
            e = elm.e;
        }
        e &&
            e.on('beforeDestruct', () => {
                store.delete(elm);
            });
    }
    if (value === undefined) {
        return itemStore[key];
    }
    itemStore[key] = value;
    return value;
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wA": () => (/* reexport */ Component),
  "n$": () => (/* reexport */ STATUSES),
  "Hr": () => (/* reexport */ ViewComponent)
});

;// CONCATENATED MODULE: ./src/core/component/statuses.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var STATUSES;
(function (STATUSES) {
    STATUSES["beforeInit"] = "beforeInit";
    STATUSES["ready"] = "ready";
    STATUSES["beforeDestruct"] = "beforeDestruct";
    STATUSES["destructed"] = "destructed";
})(STATUSES || (STATUSES = {}));

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(12);
;// CONCATENATED MODULE: ./src/core/component/component.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const StatusListHandlers = new Map();
class Component {
    constructor() {
        this.ownerWindow = window;
        this.__componentStatus = STATUSES.beforeInit;
        this.componentName =
            'jodit-' + (0,helpers.kebabCase)(this.className() || (0,helpers.getClassName)(this));
        this.uid = 'jodit-uid-' + (0,global/* uniqueUid */.fe)();
    }
    getFullElName(elementName, mod, modValue) {
        const result = [this.componentName];
        if (elementName) {
            elementName = elementName.replace(/[^a-z0-9-]/gi, '-');
            result.push(`__${elementName}`);
        }
        if (mod) {
            result.push('_', mod);
            result.push('_', (0,helpers.isVoid)(modValue) ? 'true' : modValue.toString());
        }
        return result.join('');
    }
    get ownerDocument() {
        return this.ow.document;
    }
    get od() {
        return this.ownerDocument;
    }
    get ow() {
        return this.ownerWindow;
    }
    get(chain, obj) {
        return (0,helpers.get)(chain, obj || this);
    }
    get isReady() {
        return this.componentStatus === STATUSES.ready;
    }
    get isDestructed() {
        return this.componentStatus === STATUSES.destructed;
    }
    get isInDestruct() {
        return (STATUSES.beforeDestruct === this.componentStatus ||
            STATUSES.destructed === this.componentStatus);
    }
    bindDestruct(jodit) {
        const destructMe = () => {
            !this.isInDestruct && this.destruct();
        };
        jodit.e && jodit.e.on(STATUSES.beforeDestruct, destructMe);
        this.hookStatus(STATUSES.beforeDestruct, () => {
            jodit.e && jodit.e.off(STATUSES.beforeDestruct, destructMe);
        });
        return this;
    }
    destruct() {
        this.setStatus(STATUSES.destructed);
        if (StatusListHandlers.get(this)) {
            StatusListHandlers.delete(this);
        }
    }
    get componentStatus() {
        return this.__componentStatus;
    }
    set componentStatus(componentStatus) {
        this.setStatus(componentStatus);
    }
    setStatus(componentStatus) {
        return this.setStatusComponent(componentStatus, this);
    }
    setStatusComponent(componentStatus, component) {
        if (componentStatus === this.__componentStatus) {
            return;
        }
        const proto = Object.getPrototypeOf(this);
        if (proto && (0,helpers.isFunction)(proto.setStatusComponent)) {
            proto.setStatusComponent(componentStatus, component);
        }
        const statuses = StatusListHandlers.get(this), list = statuses === null || statuses === void 0 ? void 0 : statuses[componentStatus];
        if (list && list.length) {
            list.forEach(cb => cb(component));
        }
        if (component === this) {
            this.__componentStatus = componentStatus;
        }
    }
    hookStatus(status, callback) {
        let list = StatusListHandlers.get(this);
        if (!list) {
            list = {};
            StatusListHandlers.set(this, list);
        }
        if (!list[status]) {
            list[status] = [];
        }
        list[status].push(callback);
    }
}
Component.STATUSES = STATUSES;

;// CONCATENATED MODULE: ./src/core/component/view-component.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class ViewComponent extends Component {
    constructor(jodit) {
        super();
        this.setParentView(jodit);
    }
    get defaultTimeout() {
        return this.j.defaultTimeout;
    }
    get j() {
        return this.jodit;
    }
    i18n(text, ...params) {
        return this.j.i18n(text, ...params);
    }
    setParentView(jodit) {
        this.jodit = jodit;
        jodit.components.add(this);
        return this;
    }
    destruct() {
        this.j.components.delete(this);
        return super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/core/component/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "as": () => (/* binding */ instances),
/* harmony export */   "fe": () => (/* binding */ uniqueUid),
/* harmony export */   "pw": () => (/* binding */ pluginSystem),
/* harmony export */   "qz": () => (/* binding */ modules),
/* harmony export */   "KQ": () => (/* binding */ lang),
/* harmony export */   "ZO": () => (/* binding */ getContainer),
/* harmony export */   "TB": () => (/* binding */ eventEmitter)
/* harmony export */ });
/* unused harmony export extendLang */
/* harmony import */ var _plugin_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _helpers___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const instances = {};
let counter = 1;
function uniqueUid() {
    counter += 10 * (Math.random() + 1);
    return Math.round(counter).toString(16);
}
const pluginSystem = new _plugin_system__WEBPACK_IMPORTED_MODULE_0__/* .PluginSystem */ .h();
const modules = {};
const lang = {};
const extendLang = (langs) => {
    Object.keys(langs).forEach(key => {
        if (lang[key]) {
            Object.assign(lang[key], langs[key]);
        }
        else {
            lang[key] = langs[key];
        }
    });
};
const boxes = new WeakMap();
function getContainer(jodit, classFunc, tag = 'div', inside = false) {
    const name = (0,_helpers___WEBPACK_IMPORTED_MODULE_2__.getClassName)(classFunc.prototype);
    const data = boxes.get(jodit) || {}, key = name + tag;
    const view = (0,_helpers___WEBPACK_IMPORTED_MODULE_2__.isViewObject)(jodit) ? jodit : jodit.j;
    if (!data[key]) {
        let c = view.c, body = jodit.od.body;
        if (inside && (0,_helpers___WEBPACK_IMPORTED_MODULE_2__.isJoditObject)(jodit) && jodit.od !== jodit.ed) {
            c = jodit.createInside;
            body = tag === 'style' ? jodit.ed.head : jodit.ed.body;
        }
        const box = c.element(tag, {
            className: `jodit jodit-${(0,_helpers___WEBPACK_IMPORTED_MODULE_2__.kebabCase)(name)}-container jodit-box`
        });
        box.classList.add(`jodit_theme_${view.o.theme || 'default'}`);
        body.appendChild(box);
        data[key] = box;
        jodit.hookStatus('beforeDestruct', () => {
            _dom__WEBPACK_IMPORTED_MODULE_1__/* .Dom.safeRemove */ .i.safeRemove(box);
            delete data[key];
            if (Object.keys(data).length) {
                boxes.delete(jodit);
            }
        });
        boxes.set(jodit, data);
    }
    data[key].classList.remove('jodit_theme_default', 'jodit_theme_dark');
    data[key].classList.add(`jodit_theme_${view.o.theme || 'default'}`);
    return data[key];
}
const eventEmitter = new _events__WEBPACK_IMPORTED_MODULE_3__/* .EventsNative */ .ng();


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ PluginSystem)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class PluginSystem {
    constructor() {
        this.items = new Map();
    }
    normalizeName(name) {
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name).toLowerCase();
    }
    add(name, plugin) {
        this.items.set(this.normalizeName(name), plugin);
    }
    get(name) {
        return this.items.get(this.normalizeName(name));
    }
    remove(name) {
        this.items.delete(this.normalizeName(name));
    }
    init(jodit) {
        const extrasList = jodit.o.extraPlugins.map(s => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(s) ? { name: s } : s), disableList = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitArray)(jodit.o.disablePlugins).map(s => this.normalizeName(s)), doneList = [], promiseList = {}, plugins = [], pluginsMap = {}, makeAndInit = (plugin, name) => {
            var _a;
            if (disableList.includes(name) ||
                doneList.includes(name) ||
                promiseList[name]) {
                return;
            }
            const requires = (_a = plugin) === null || _a === void 0 ? void 0 : _a.requires;
            if (requires &&
                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isArray)(requires) &&
                this.hasDisabledRequires(disableList, requires)) {
                return;
            }
            const instance = PluginSystem.makePluginInstance(jodit, plugin);
            this.initOrWait(jodit, name, instance, doneList, promiseList);
            plugins.push(instance);
            pluginsMap[name] = instance;
        };
        const resultLoadExtras = this.loadExtras(jodit, extrasList);
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.callPromise)(resultLoadExtras, () => {
            if (jodit.isInDestruct) {
                return;
            }
            this.items.forEach(makeAndInit);
            this.addListenerOnBeforeDestruct(jodit, plugins);
            jodit.__plugins = pluginsMap;
        });
    }
    hasDisabledRequires(disableList, requires) {
        return Boolean((requires === null || requires === void 0 ? void 0 : requires.length) &&
            disableList.some(disabled => requires.includes(disabled)));
    }
    static makePluginInstance(jodit, plugin) {
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isFunction)(plugin) ? new plugin(jodit) : plugin;
    }
    initOrWait(jodit, pluginName, instance, doneList, promiseList) {
        const initPlugin = (name, plugin) => {
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isInitable)(plugin)) {
                const req = plugin.requires;
                if (!(req === null || req === void 0 ? void 0 : req.length) ||
                    req.every(name => doneList.includes(name))) {
                    plugin.init(jodit);
                    doneList.push(name);
                }
                else {
                    promiseList[name] = plugin;
                    return false;
                }
            }
            else {
                doneList.push(name);
            }
            if (plugin.hasStyle) {
                PluginSystem.loadStyle(jodit, name);
            }
            return true;
        };
        initPlugin(pluginName, instance);
        Object.keys(promiseList).forEach(name => {
            const plugin = promiseList[name];
            if (!plugin) {
                return;
            }
            if (initPlugin(name, plugin)) {
                promiseList[name] = undefined;
                delete promiseList[name];
            }
        });
    }
    addListenerOnBeforeDestruct(jodit, plugins) {
        jodit.e.on('beforeDestruct', () => {
            plugins.forEach(instance => {
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isDestructable)(instance)) {
                    instance.destruct(jodit);
                }
            });
            plugins.length = 0;
            delete jodit.__plugins;
        });
    }
    load(jodit, pluginList) {
        const reflect = (p) => p.then((v) => ({ v, status: 'fulfilled' }), (e) => ({ e, status: 'rejected' }));
        return Promise.all(pluginList.map(extra => {
            const url = extra.url ||
                PluginSystem.getFullUrl(jodit, extra.name, true);
            return reflect((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendScriptAsync)(jodit, url));
        }));
    }
    static async loadStyle(jodit, pluginName) {
        const url = PluginSystem.getFullUrl(jodit, pluginName, false);
        if (this.styles.has(url)) {
            return;
        }
        this.styles.add(url);
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.appendStyleAsync)(jodit, url);
    }
    static getFullUrl(jodit, name, js) {
        name = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name);
        return (jodit.basePath +
            'plugins/' +
            name +
            '/' +
            name +
            '.' +
            (js ? 'js' : 'css'));
    }
    loadExtras(jodit, extrasList) {
        if (extrasList && extrasList.length) {
            try {
                const needLoadExtras = extrasList.filter(extra => !this.items.has(this.normalizeName(extra.name)));
                if (needLoadExtras.length) {
                    return this.load(jodit, needLoadExtras);
                }
            }
            catch (e) {
                if (false) {}
            }
        }
    }
}
PluginSystem.styles = new Set();


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Dom)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class Dom {
    static detach(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
    static wrapInline(current, tag, editor) {
        let tmp, first = current, last = current;
        editor.s.save();
        let needFindNext = false;
        do {
            needFindNext = false;
            tmp = first.previousSibling;
            if (tmp && !Dom.isBlock(tmp, editor.ew)) {
                needFindNext = true;
                first = tmp;
            }
        } while (needFindNext);
        do {
            needFindNext = false;
            tmp = last.nextSibling;
            if (tmp && !Dom.isBlock(tmp, editor.ew)) {
                needFindNext = true;
                last = tmp;
            }
        } while (needFindNext);
        const wrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(tag) ? editor.createInside.element(tag) : tag;
        if (first.parentNode) {
            first.parentNode.insertBefore(wrapper, first);
        }
        let next = first;
        while (next) {
            next = first.nextSibling;
            wrapper.appendChild(first);
            if (first === last || !next) {
                break;
            }
            first = next;
        }
        editor.s.restore();
        return wrapper;
    }
    static wrap(current, tag, create) {
        const wrapper = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(tag) ? create.element(tag) : tag;
        if (!current.parentNode) {
            return null;
        }
        current.parentNode.insertBefore(wrapper, current);
        wrapper.appendChild(current);
        return wrapper;
    }
    static unwrap(node) {
        const parent = node.parentNode;
        if (parent) {
            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node);
            }
            Dom.safeRemove(node);
        }
    }
    static each(elm, callback) {
        let node = elm.firstChild;
        if (node) {
            while (node) {
                const next = Dom.next(node, Boolean, elm);
                if (callback(node) === false) {
                    return false;
                }
                if (node.parentNode && !Dom.each(node, callback)) {
                    return false;
                }
                node = next;
            }
        }
        return true;
    }
    static between(start, end, callback) {
        let next = start;
        while (next && next !== end) {
            if (start !== next && callback(next)) {
                break;
            }
            let step = next.firstChild || next.nextSibling;
            if (!step) {
                while (next && !next.nextSibling) {
                    next = next.parentNode;
                }
                step = next === null || next === void 0 ? void 0 : next.nextSibling;
            }
            next = step;
        }
    }
    static replace(elm, newTagName, create, withAttributes = false, notMoveContent = false) {
        const tag = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(newTagName)
            ? create.element(newTagName)
            : newTagName;
        if (!notMoveContent) {
            while (elm.firstChild) {
                tag.appendChild(elm.firstChild);
            }
        }
        if (withAttributes) {
            (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toArray)(elm.attributes).forEach(attr => {
                tag.setAttribute(attr.name, attr.value);
            });
        }
        if (elm.parentNode) {
            elm.parentNode.replaceChild(tag, elm);
        }
        return tag;
    }
    static isEmptyTextNode(node) {
        return (Dom.isText(node) &&
            (!node.nodeValue ||
                node.nodeValue.replace(_constants__WEBPACK_IMPORTED_MODULE_0__.INVISIBLE_SPACE_REG_EXP(), '')
                    .length === 0));
    }
    static isEmpty(node, condNoEmptyElement = /^(img|svg|canvas|input|textarea|form)$/) {
        if (!node) {
            return true;
        }
        if (Dom.isText(node)) {
            return node.nodeValue == null || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.trim)(node.nodeValue).length === 0;
        }
        return (!condNoEmptyElement.test(node.nodeName.toLowerCase()) &&
            Dom.each(node, (elm) => {
                if ((Dom.isText(elm) &&
                    elm.nodeValue != null &&
                    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.trim)(elm.nodeValue).length !== 0) ||
                    (Dom.isElement(elm) &&
                        condNoEmptyElement.test(elm.nodeName.toLowerCase()))) {
                    return false;
                }
            }));
    }
    static isNode(object, win) {
        if (!object) {
            return false;
        }
        if (typeof win === 'object' &&
            win &&
            (typeof win.Node === 'function' ||
                typeof win.Node === 'object')) {
            return object instanceof win.Node;
        }
        return false;
    }
    static isCell(elm, win) {
        return Dom.isNode(elm, win) && /^(td|th)$/i.test(elm.nodeName);
    }
    static isImage(elm, win) {
        return (Dom.isNode(elm, win) &&
            /^(img|svg|picture|canvas)$/i.test(elm.nodeName));
    }
    static isBlock(node, win) {
        return (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isVoid)(node) &&
            typeof node === 'object' &&
            Dom.isNode(node, win) &&
            _constants__WEBPACK_IMPORTED_MODULE_0__.IS_BLOCK.test(node.nodeName));
    }
    static isText(node) {
        return Boolean(node && node.nodeType === Node.TEXT_NODE);
    }
    static isElement(node) {
        return Boolean(node && node.nodeType === Node.ELEMENT_NODE);
    }
    static isHTMLElement(node, win) {
        return (Dom.isNode(node, win) && node instanceof win.HTMLElement);
    }
    static isInlineBlock(node) {
        return (Dom.isElement(node) &&
            !/^(BR|HR)$/i.test(node.tagName) &&
            ['inline', 'inline-block'].indexOf((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(node, 'display').toString()) !== -1);
    }
    static canSplitBlock(node, win) {
        return (!(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isVoid)(node) &&
            node instanceof win.HTMLElement &&
            Dom.isBlock(node, win) &&
            !/^(TD|TH|CAPTION|FORM)$/.test(node.nodeName) &&
            node.style !== undefined &&
            !/^(fixed|absolute)/i.test(node.style.position));
    }
    static last(root, condition) {
        let last = root === null || root === void 0 ? void 0 : root.lastChild;
        if (!last) {
            return null;
        }
        do {
            if (condition(last)) {
                return last;
            }
            let next = last.lastChild;
            if (!next) {
                next = last.previousSibling;
            }
            if (!next && last.parentNode !== root) {
                do {
                    last = last.parentNode;
                } while (last &&
                    !(last === null || last === void 0 ? void 0 : last.previousSibling) &&
                    last.parentNode !== root);
                next = last === null || last === void 0 ? void 0 : last.previousSibling;
            }
            last = next;
        } while (last);
        return null;
    }
    static prev(node, condition, root, withChild = true) {
        return Dom.find(node, condition, root, false, 'previousSibling', withChild ? 'lastChild' : false);
    }
    static next(node, condition, root, withChild = true) {
        return Dom.find(node, condition, root, undefined, undefined, withChild ? 'firstChild' : false);
    }
    static prevWithClass(node, className) {
        return Dom.prev(node, node => {
            return (Dom.isElement(node) && node.classList.contains(className));
        }, node.parentNode);
    }
    static nextWithClass(node, className) {
        return Dom.next(node, elm => Dom.isElement(elm) && elm.classList.contains(className), node.parentNode);
    }
    static find(node, condition, root, recurse = false, sibling = 'nextSibling', child = 'firstChild') {
        if (recurse && condition(node)) {
            return node;
        }
        let start = node, next;
        do {
            next = start[sibling];
            if (condition(next)) {
                return next ? next : null;
            }
            if (child && next && next[child]) {
                const nextOne = Dom.find(next[child], condition, next, true, sibling, child);
                if (nextOne) {
                    return nextOne;
                }
            }
            if (!next) {
                next = start.parentNode;
            }
            start = next;
        } while (start && start !== root);
        return null;
    }
    static findWithCurrent(node, condition, root, sibling = 'nextSibling', child = 'firstChild') {
        let next = node;
        do {
            if (condition(next)) {
                return next || null;
            }
            if (child && next && next[child]) {
                const nextOne = Dom.findWithCurrent(next[child], condition, next, sibling, child);
                if (nextOne) {
                    return nextOne;
                }
            }
            while (next && !next[sibling] && next !== root) {
                next = next.parentNode;
            }
            if (next && next[sibling] && next !== root) {
                next = next[sibling];
            }
        } while (next && next !== root);
        return null;
    }
    static findSibling(node, left = true, cond = (n) => !Dom.isEmptyTextNode(n)) {
        const getSibling = (node) => {
            return left ? node.previousSibling : node.nextSibling;
        };
        let start = getSibling(node);
        while (start && !cond(start)) {
            start = getSibling(start);
        }
        return start && cond(start) ? start : null;
    }
    static up(node, condition, root, checkRoot = false) {
        let start = node;
        if (!start) {
            return null;
        }
        do {
            if (condition(start)) {
                return start;
            }
            if (start === root || !start.parentNode) {
                break;
            }
            start = start.parentNode;
        } while (start && start !== root);
        if (start === root && checkRoot && condition(start)) {
            return start;
        }
        return null;
    }
    static closest(node, tagsOrCondition, root) {
        let condition;
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(tagsOrCondition)) {
            condition = tagsOrCondition;
        }
        else if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(tagsOrCondition)) {
            condition = (tag) => tag &&
                tagsOrCondition.includes(tag.nodeName.toLowerCase());
        }
        else {
            condition = (tag) => tag && tagsOrCondition === tag.nodeName.toLowerCase();
        }
        return Dom.up(node, condition, root);
    }
    static furthest(node, condition, root) {
        let matchedParent = null, current = node === null || node === void 0 ? void 0 : node.parentElement;
        while (current && current !== root && condition(current)) {
            matchedParent = current;
            current = current === null || current === void 0 ? void 0 : current.parentElement;
        }
        return matchedParent;
    }
    static appendChildFirst(root, newElement) {
        const child = root.firstChild;
        if (child) {
            if (child !== newElement) {
                root.insertBefore(newElement, child);
            }
        }
        else {
            root.appendChild(newElement);
        }
    }
    static after(elm, newElement) {
        const { parentNode } = elm;
        if (!parentNode) {
            return;
        }
        if (parentNode.lastChild === elm) {
            parentNode.appendChild(newElement);
        }
        else {
            parentNode.insertBefore(newElement, elm.nextSibling);
        }
    }
    static before(elm, newElement) {
        const { parentNode } = elm;
        if (!parentNode) {
            return;
        }
        parentNode.insertBefore(newElement, elm);
    }
    static prepend(root, newElement) {
        root.insertBefore(newElement, root.firstChild);
    }
    static append(root, newElement) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(newElement)) {
            newElement.forEach(node => {
                this.append(root, node);
            });
        }
        else {
            root.appendChild(newElement);
        }
    }
    static moveContent(from, to, inStart = false) {
        const fragment = (from.ownerDocument || document).createDocumentFragment();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toArray)(from.childNodes).forEach((node) => {
            fragment.appendChild(node);
        });
        if (!inStart || !to.firstChild) {
            to.appendChild(fragment);
        }
        else {
            to.insertBefore(fragment, to.firstChild);
        }
    }
    static all(node, condition, prev = false) {
        let nodes = node.childNodes ? (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toArray)(node.childNodes) : [];
        if (condition(node)) {
            return node;
        }
        if (prev) {
            nodes = nodes.reverse();
        }
        nodes.forEach(child => {
            Dom.all(child, condition, prev);
        });
        return null;
    }
    static isOrContains(root, child, onlyContains = false) {
        if (root === child) {
            return !onlyContains;
        }
        return Boolean(child && root && this.up(child, nd => nd === root, root, true));
    }
    static safeRemove(node) {
        node && node.parentNode && node.parentNode.removeChild(node);
    }
    static hide(node) {
        if (!node) {
            return;
        }
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dataBind)(node, '__old_display', node.style.display);
        node.style.display = 'none';
    }
    static show(node) {
        if (!node) {
            return;
        }
        const display = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.dataBind)(node, '__old_display');
        if (node.style.display === 'none') {
            node.style.display = display || '';
        }
    }
    static isTag(node, tagNames) {
        const tags = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.asArray)(tagNames).map(String);
        for (let i = 0; i < tags.length; i += 1) {
            if (this.isElement(node) &&
                node.tagName.toLowerCase() === tags[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EO": () => (/* reexport */ hasBrowserColorPicker),
  "Zt": () => (/* reexport */ hasContainer),
  "kJ": () => (/* reexport */ is_array/* isArray */.k),
  "jn": () => (/* reexport */ isBoolean),
  "Z$": () => (/* reexport */ isDestructable),
  "Xy": () => (/* reexport */ isEqual),
  "LP": () => (/* reexport */ isFastEqual),
  "mf": () => (/* reexport */ is_function/* isFunction */.m),
  "FP": () => (/* reexport */ isHTML),
  "I4": () => (/* reexport */ isHtmlFromWord),
  "Gu": () => (/* reexport */ isInitable),
  "GN": () => (/* reexport */ isInt),
  "Zu": () => (/* reexport */ isJoditObject),
  "A1": () => (/* reexport */ isLicense),
  "QC": () => (/* reexport */ is_native_function/* isNativeFunction */.Q),
  "hj": () => (/* reexport */ isNumber),
  "kE": () => (/* reexport */ is_numeric/* isNumeric */.k),
  "PO": () => (/* reexport */ isPlainObject),
  "tI": () => (/* reexport */ is_promise/* isPromise */.t),
  "HD": () => (/* reexport */ is_string/* isString */.H),
  "PX": () => (/* reexport */ isURL),
  "r1": () => (/* reexport */ isValidName),
  "f2": () => (/* reexport */ isViewObject),
  "nj": () => (/* reexport */ is_void/* isVoid */.n),
  "FJ": () => (/* reexport */ isWindow)
});

;// CONCATENATED MODULE: ./src/core/helpers/checker/has-browser-color-picker.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function hasBrowserColorPicker() {
    let supportsColor = true;
    try {
        const a = document.createElement('input');
        a.type = 'color';
        supportsColor =
            a.type === 'color' && typeof a.selectionStart !== 'number';
    }
    catch (e) {
        supportsColor = false;
    }
    return supportsColor;
}

// EXTERNAL MODULE: ./src/core/helpers/checker/is-array.ts
var is_array = __webpack_require__(7);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-boolean.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isBoolean(elm) {
    return typeof elm === 'boolean';
}

// EXTERNAL MODULE: ./src/core/helpers/string/stringify.ts
var stringify = __webpack_require__(16);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-equal.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isEqual(a, b) {
    return a === b || (0,stringify/* stringify */.P)(a) === (0,stringify/* stringify */.P)(b);
}
function isFastEqual(a, b) {
    return a === b;
}

// EXTERNAL MODULE: ./src/core/helpers/checker/is-function.ts
var is_function = __webpack_require__(6);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-string.ts
var is_string = __webpack_require__(5);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-html.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const isHTML = (str) => (0,is_string/* isString */.H)(str) &&
    /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(str.replace(/[\r\n]/g, ''));

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-html-from-word.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isHtmlFromWord(data) {
    return (data.search(/<meta.*?Microsoft Excel\s[\d].*?>/) !== -1 ||
        data.search(/<meta.*?Microsoft Word\s[\d].*?>/) !== -1 ||
        (data.search(/style="[^"]*mso-/) !== -1 && data.search(/<font/) !== -1));
}

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
// EXTERNAL MODULE: ./src/core/helpers/checker/is-void.ts
var is_void = __webpack_require__(17);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-imp-interface.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function isInitable(value) {
    return !(0,is_void/* isVoid */.n)(value) && (0,is_function/* isFunction */.m)(value.init);
}
function isDestructable(value) {
    return !(0,is_void/* isVoid */.n)(value) && (0,is_function/* isFunction */.m)(value.destruct);
}
function hasContainer(value) {
    return !(0,is_void/* isVoid */.n)(value) && dom/* Dom.isElement */.i.isElement(value.container);
}

// EXTERNAL MODULE: ./src/core/helpers/checker/is-numeric.ts
var is_numeric = __webpack_require__(18);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-int.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function isInt(value) {
    if ((0,is_string/* isString */.H)(value) && (0,is_numeric/* isNumeric */.k)(value)) {
        value = parseFloat(value);
    }
    return typeof value === 'number' && Number.isFinite(value) && !(value % 1);
}

// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(12);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-jodit-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function isJoditObject(jodit) {
    return Boolean(jodit &&
        jodit instanceof Object &&
        (0,is_function/* isFunction */.m)(jodit.constructor) &&
        ((typeof Jodit !== 'undefined' && jodit instanceof Jodit) ||
            jodit.isJodit));
}
function isViewObject(jodit) {
    return Boolean(jodit &&
        jodit instanceof Object &&
        (0,is_function/* isFunction */.m)(jodit.constructor) &&
        (jodit instanceof global/* modules.View */.qz.View || jodit.isView));
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-license.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const isLicense = (license) => {
    return ((0,is_string/* isString */.H)(license) &&
        license.length === 23 &&
        /^[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}$/i.test(license));
};

// EXTERNAL MODULE: ./src/core/helpers/checker/is-native-function.ts
var is_native_function = __webpack_require__(19);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-number.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-window.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isWindow(obj) {
    return obj != null && obj === obj.window;
}

// EXTERNAL MODULE: ./src/core/helpers/type.ts
var type = __webpack_require__(4);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-plain-object.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function isPlainObject(obj) {
    if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
        return false;
    }
    return !(obj.constructor &&
        !type/* hasOwn.call */.RI.call(obj.constructor.prototype, 'isPrototypeOf'));
}

// EXTERNAL MODULE: ./src/core/helpers/checker/is-promise.ts
var is_promise = __webpack_require__(20);
;// CONCATENATED MODULE: ./src/core/helpers/checker/is-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isURL(str) {
    if (str.includes(' ')) {
        return false;
    }
    if (typeof URL !== 'undefined') {
        try {
            const url = new URL(str);
            return ['https:', 'http:', 'ftp:', 'file:', 'rtmp:'].includes(url.protocol);
        }
        catch (e) {
            return false;
        }
    }
    const a = document.createElement('a');
    a.href = str;
    return Boolean(a.hostname);
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/is-valid-name.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isValidName(name) {
    if (!name.length) {
        return false;
    }
    if (/[^0-9A-Za-zа-яА-ЯЁё\w\-_.]/.test(name)) {
        return false;
    }
    return true;
}

;// CONCATENATED MODULE: ./src/core/helpers/checker/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */























/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ stringify)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function stringify(value, options = {}) {
    if (typeof value !== 'object') {
        return value.toString ? value.toString() : value;
    }
    const excludeKeys = new Set(options.excludeKeys);
    const map = new WeakMap();
    const r = (k, v) => {
        if (excludeKeys.has(k)) {
            return;
        }
        if (typeof v === 'object' && v != null) {
            if (map.get(v)) {
                return '[refObject]';
            }
            map.set(v, true);
        }
        return v;
    };
    return JSON.stringify(value, r, options.prettify);
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ isVoid)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isVoid(value) {
    return value === undefined || value === null;
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function isNumeric(value) {
    if ((0,_is_string__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .H)(value)) {
        if (!value.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/)) {
            return false;
        }
        value = parseFloat(value);
    }
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ isNativeFunction)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isNativeFunction(f) {
    return (Boolean(f) &&
        (typeof f).toLowerCase() === 'function' &&
        (f === Function.prototype ||
            /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(f))));
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ isPromise)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function isPromise(val) {
    return val && typeof val.then === 'function';
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ colorToHex)
/* harmony export */ });
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const colorToHex = (color) => {
    if (color === 'rgba(0, 0, 0, 0)' || color === '') {
        return false;
    }
    if (!color) {
        return '#000000';
    }
    if (color.substr(0, 1) === '#') {
        return color;
    }
    const digits = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color) ||
        /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(color);
    if (!digits) {
        return '#000000';
    }
    const red = parseInt(digits[2], 10), green = parseInt(digits[3], 10), blue = parseInt(digits[4], 10), rgb = blue | (green << 8) | (red << 16);
    let hex = rgb.toString(16).toUpperCase();
    while (hex.length < 6) {
        hex = '0' + hex;
    }
    return digits[1] + '#' + hex;
};


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eV": () => (/* reexport */ camelCase),
  "ag": () => (/* reexport */ i18n),
  "GL": () => (/* reexport */ kebabCase),
  "gB": () => (/* reexport */ sprintf),
  "Pz": () => (/* reexport */ stringify/* stringify */.P),
  "fy": () => (/* reexport */ trim),
  "as": () => (/* reexport */ trimInv),
  "Ps": () => (/* reexport */ ucfirst)
});

;// CONCATENATED MODULE: ./src/core/helpers/string/camel-case.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const camelCase = (key) => {
    return key.replace(/([-_])(.)/g, (m, code, letter) => {
        return letter.toUpperCase();
    });
};

// EXTERNAL MODULE: ./src/core/helpers/string/stringify.ts
var stringify = __webpack_require__(16);
;// CONCATENATED MODULE: ./src/core/helpers/string/kebab-case.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const kebabCase = (key) => {
    return key
        .replace(/([A-Z])([A-Z])([a-z])/g, '$1-$2$3')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
};

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);
;// CONCATENATED MODULE: ./src/core/helpers/string/trim.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function trim(value) {
    return value
        .replace((0,constants.SPACE_REG_EXP_END)(), '')
        .replace((0,constants.SPACE_REG_EXP_START)(), '');
}
function trimInv(value) {
    return value
        .replace((0,constants.INVISIBLE_SPACE_REG_EXP_END)(), '')
        .replace((0,constants.INVISIBLE_SPACE_REG_EXP_START)(), '');
}

;// CONCATENATED MODULE: ./src/core/helpers/string/ucfirst.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ucfirst = (value) => {
    if (!value.length) {
        return '';
    }
    return value[0].toUpperCase() + value.substr(1);
};

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);
// EXTERNAL MODULE: ./src/core/helpers/default-language.ts
var default_language = __webpack_require__(23);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(12);
;// CONCATENATED MODULE: ./src/core/helpers/string/i18n.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const sprintf = (str, args) => {
    if (!args || !args.length) {
        return str;
    }
    const reg = /%([sd])/g;
    let fnd = reg.exec(str);
    let res = str, i = 0;
    while (fnd && args[i] !== undefined) {
        res = res.replace(fnd[0], args[i].toString());
        i += 1;
        fnd = reg.exec(str);
    }
    return res;
};
const i18n = (key, params, options) => {
    if (!(0,helpers.isString)(key)) {
        throw (0,helpers.error)('i18n: Need string in first argument');
    }
    if (!key.length) {
        return key;
    }
    const debug = Boolean(options !== undefined && options.debugLanguage);
    let store;
    const parse = (value) => params && params.length ? sprintf(value, params) : value, defaultLanguage = (0,default_language/* defaultLanguage */.X)(config/* Config.defaultOptions.language */.D.defaultOptions.language, config/* Config.defaultOptions.language */.D.defaultOptions.language), language = (0,default_language/* defaultLanguage */.X)(options === null || options === void 0 ? void 0 : options.language, defaultLanguage), tryGet = (store) => {
        if (!store) {
            return;
        }
        if ((0,helpers.isString)(store[key])) {
            return parse(store[key]);
        }
        const lcKey = key.toLowerCase();
        if ((0,helpers.isString)(store[lcKey])) {
            return parse(store[lcKey]);
        }
        const ucfKey = (0,helpers.ucfirst)(key);
        if ((0,helpers.isString)(store[ucfKey])) {
            return parse(store[ucfKey]);
        }
        return;
    };
    if (global/* lang */.KQ[language] !== undefined) {
        store = global/* lang */.KQ[language];
    }
    else {
        if (global/* lang */.KQ[defaultLanguage] !== undefined) {
            store = global/* lang */.KQ[defaultLanguage];
        }
        else {
            store = global/* lang.en */.KQ.en;
        }
    }
    const i18nOvr = options === null || options === void 0 ? void 0 : options.i18n;
    if (i18nOvr && i18nOvr[language]) {
        const result = tryGet(i18nOvr[language]);
        if (result) {
            return result;
        }
    }
    const result = tryGet(store);
    if (result) {
        return result;
    }
    if (global/* lang.en */.KQ.en && (0,helpers.isString)(global/* lang.en */.KQ.en[key]) && global/* lang.en */.KQ.en[key]) {
        return parse(global/* lang.en */.KQ.en[key]);
    }
    if (debug) {
        return '{' + key + '}';
    }
    if (false) {}
    return parse(key);
};

;// CONCATENATED MODULE: ./src/core/helpers/string/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ defaultLanguage)
/* harmony export */ });
/* harmony import */ var _checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const defaultLanguage = (language, defaultLanguage = 'en') => {
    if (language !== 'auto' && (0,_checker__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(language)) {
        return language;
    }
    if (document.documentElement && document.documentElement.lang) {
        return document.documentElement.lang;
    }
    if (navigator.language) {
        return navigator.language.substr(0, 2);
    }
    return defaultLanguage;
};


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ ui_button/* Button */.zx),
  "JO": () => (/* reexport */ icon/* Icon */.J),
  "GI": () => (/* reexport */ popup/* Popup */.G),
  "ko": () => (/* reexport */ ProgressBar),
  "eC": () => (/* reexport */ ui_form/* UIBlock */.eC),
  "y3": () => (/* reexport */ ui_button/* UIButton */.y3),
  "mA": () => (/* reexport */ ui_form/* UICheckbox */.mA),
  "u1": () => (/* reexport */ ui_element/* UIElement */.u),
  "Z": () => (/* reexport */ ui_form/* UIFileInput */.Z),
  "x4": () => (/* reexport */ ui_form/* UIForm */.x4),
  "qe": () => (/* reexport */ group/* UIGroup */.q),
  "u3": () => (/* reexport */ ui_form/* UIInput */.u3),
  "bz": () => (/* reexport */ list/* UIList */.b),
  "lU": () => (/* reexport */ separator/* UISeparator */.l),
  "GJ": () => (/* reexport */ ui_form/* UITextArea */.GJ)
});

// UNUSED EXPORTS: UIButtonGroup, UIButtonState, UISelect

// EXTERNAL MODULE: ./src/core/ui/element.ts
var ui_element = __webpack_require__(25);
// EXTERNAL MODULE: ./src/core/ui/button/index.ts + 2 modules
var ui_button = __webpack_require__(30);
// EXTERNAL MODULE: ./src/core/ui/popup/index.ts + 1 modules
var popup = __webpack_require__(39);
// EXTERNAL MODULE: ./src/core/ui/separator.ts
var separator = __webpack_require__(37);
// EXTERNAL MODULE: ./src/core/ui/list/group.ts
var group = __webpack_require__(35);
// EXTERNAL MODULE: ./src/core/ui/list/list.ts + 1 modules
var list = __webpack_require__(31);
// EXTERNAL MODULE: ./src/core/ui/form/index.ts + 11 modules
var ui_form = __webpack_require__(40);
// EXTERNAL MODULE: ./src/core/ui/icon.ts
var icon = __webpack_require__(27);
// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
;// CONCATENATED MODULE: ./src/core/ui/progress-bar/progress-bar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class ProgressBar extends ui_element/* UIElement */.u {
    className() {
        return 'ProgressBar';
    }
    render() {
        return '<div><div></div></div>';
    }
    show() {
        const container = this.j.workplace || this.j.container;
        container.appendChild(this.container);
        return this;
    }
    hide() {
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
        return this;
    }
    progress(percentage) {
        this.container.style.width = percentage.toFixed(2) + '%';
        return this;
    }
    destruct() {
        this.hide();
        return super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/core/ui/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ UIElement)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _traits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class UIElement extends _component__WEBPACK_IMPORTED_MODULE_0__/* .ViewComponent */ .Hr {
    constructor(jodit, options) {
        super(jodit);
        this.name = '';
        this.__parentElement = null;
        this.mods = {};
        this.container = this.createContainer(options);
        Object.defineProperty(this.container, 'component', {
            value: this,
            configurable: true
        });
    }
    get parentElement() {
        return this.__parentElement;
    }
    set parentElement(parentElement) {
        this.__parentElement = parentElement;
        if (parentElement) {
            parentElement.hookStatus('beforeDestruct', () => this.destruct());
        }
        this.updateParentElement(this);
    }
    bubble(callback) {
        let parent = this.parentElement;
        while (parent) {
            callback(parent);
            parent = parent.parentElement;
        }
        return this;
    }
    updateParentElement(target) {
        var _a;
        (_a = this.__parentElement) === null || _a === void 0 ? void 0 : _a.updateParentElement(target);
        return this;
    }
    get(chain, obj) {
        return super.get(chain, obj) || this.getElm(chain);
    }
    closest(type) {
        const c = typeof type === 'object'
            ? (pe) => pe === type
            : (pe) => pe instanceof type;
        let pe = this.__parentElement;
        while (pe) {
            if (c(pe)) {
                return pe;
            }
            if (!pe.parentElement && pe.container.parentElement) {
                pe = UIElement.closestElement(pe.container.parentElement, UIElement);
            }
            else {
                pe = pe.parentElement;
            }
        }
        return null;
    }
    static closestElement(node, type) {
        const elm = _dom__WEBPACK_IMPORTED_MODULE_1__/* .Dom.up */ .i.up(node, node => {
            if (node) {
                const { component } = node;
                return component && component instanceof type;
            }
            return false;
        });
        return elm ? elm === null || elm === void 0 ? void 0 : elm.component : null;
    }
    setMod(name, value, container = this.container) {
        _traits__WEBPACK_IMPORTED_MODULE_2__/* .Mods.setMod.call */ .$.setMod.call(this, name, value);
        return this;
    }
    getMod(name) {
        return _traits__WEBPACK_IMPORTED_MODULE_2__/* .Mods.getMod.call */ .$.getMod.call(this, name);
    }
    getElm(elementName) {
        return _traits__WEBPACK_IMPORTED_MODULE_2__/* .Elms.getElm.call */ .F.getElm.call(this, elementName);
    }
    getElms(elementName) {
        return _traits__WEBPACK_IMPORTED_MODULE_2__/* .Elms.getElms.call */ .F.getElms.call(this, elementName);
    }
    update() {
    }
    appendTo(element) {
        element.appendChild(this.container);
        return this;
    }
    clearName(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '_');
    }
    render(options) {
        return this.j.c.div(this.componentName);
    }
    createContainer(options) {
        const result = this.render(options);
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isString)(result)) {
            const elm = this.j.c.fromHTML(result
                .replace(/\*([^*]+?)\*/g, (_, name) => _icon__WEBPACK_IMPORTED_MODULE_4__/* .Icon.get */ .J.get(name) || '')
                .replace(/&__/g, this.componentName + '__')
                .replace(/~([^~]+?)~/g, (_, s) => this.i18n(s)));
            elm.classList.add(this.componentName);
            return elm;
        }
        return result;
    }
    destruct() {
        _dom__WEBPACK_IMPORTED_MODULE_1__/* .Dom.safeRemove */ .i.safeRemove(this.container);
        this.parentElement = null;
        return super.destruct();
    }
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ Elms),
  "$": () => (/* reexport */ Mods)
});

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
;// CONCATENATED MODULE: ./src/core/traits/elms.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Elms {
    static getElm(elementName) {
        return this.container.querySelector(`.${this.getFullElName(elementName)}`);
    }
    static getElms(elementName) {
        return (0,helpers.toArray)(this.container.querySelectorAll(`.${this.getFullElName(elementName)}`));
    }
}

;// CONCATENATED MODULE: ./src/core/traits/mods.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Mods {
    static setMod(name, value, container) {
        name = name.toLowerCase();
        if (this.mods[name] === value) {
            return;
        }
        const mod = `${this.componentName}_${name}`, cl = (container || this.container).classList;
        (0,helpers.toArray)(cl).forEach(className => {
            if (className.indexOf(mod) === 0) {
                cl.remove(className);
            }
        });
        value != null &&
            value !== '' &&
            cl.add(`${mod}_${value.toString().toLowerCase()}`);
        this.mods[name] = value;
    }
    static getMod(name) {
        var _a;
        return (_a = this.mods[name]) !== null && _a !== void 0 ? _a : null;
    }
}

;// CONCATENATED MODULE: ./src/core/traits/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _helpers_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Icon {
    static getIcon(name) {
        if (/^<svg/i.test(name)) {
            return name;
        }
        return (Icon.icons[name] ||
            Icon.icons[name.replace(/-/g, '_')] ||
            Icon.icons[name.toLowerCase()]);
    }
    static exists(name) {
        return this.getIcon(name) !== undefined;
    }
    static get(name, defaultValue = '<span></span>') {
        return this.getIcon(name) || defaultValue;
    }
    static set(name, value) {
        this.icons[name.replace('_', '-')] = value;
    }
    static makeIcon(jodit, icon) {
        var _a;
        let iconElement;
        if (icon) {
            const clearName = icon.name.replace(/[^a-zA-Z0-9]/g, '_');
            if (icon.iconURL) {
                iconElement = jodit.c.span();
                (0,_helpers_css__WEBPACK_IMPORTED_MODULE_0__/* .css */ .i)(iconElement, 'backgroundImage', 'url(' +
                    icon.iconURL.replace('{basePath}', (jodit === null || jodit === void 0 ? void 0 : jodit.basePath) || '') +
                    ')');
            }
            else {
                const svg = jodit.e.fire('getIcon', icon.name, icon, clearName) ||
                    Icon.get(icon.name, '') ||
                    ((_a = jodit.o.extraIcons) === null || _a === void 0 ? void 0 : _a[icon.name]);
                if (svg) {
                    iconElement = jodit.c.fromHTML(svg.trim());
                    if (!/^<svg/i.test(icon.name)) {
                        iconElement.classList.add('jodit-icon_' + clearName);
                    }
                }
            }
        }
        if (iconElement) {
            iconElement.classList.add('jodit-icon');
            iconElement.style.fill = icon.fill;
        }
        return iconElement;
    }
}
Icon.icons = {};


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ css),
/* harmony export */   "b": () => (/* binding */ clearCenterAlign)
/* harmony export */ });
/* harmony import */ var _checker___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _normalize___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _string___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const css = (element, key, value, onlyStyleMode = false) => {
    const numberFieldsReg = /^left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size/i;
    if ((0,_checker___WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .PO)(key) || value !== undefined) {
        const setValue = (elm, _key, _value) => {
            if (!(0,_checker___WEBPACK_IMPORTED_MODULE_0__/* .isVoid */ .nj)(_value) &&
                numberFieldsReg.test(_key) &&
                (0,_checker___WEBPACK_IMPORTED_MODULE_0__/* .isNumeric */ .kE)(_value.toString())) {
                _value = parseInt(_value.toString(), 10) + 'px';
            }
            if (_value !== undefined &&
                (_value == null ||
                    css(elm, _key, undefined, true) !==
                        (0,_normalize___WEBPACK_IMPORTED_MODULE_1__/* .normalizeCssValue */ .Zh)(_key, _value))) {
                elm.style[_key] = _value;
            }
        };
        if ((0,_checker___WEBPACK_IMPORTED_MODULE_0__/* .isPlainObject */ .PO)(key)) {
            const keys = Object.keys(key);
            for (let j = 0; j < keys.length; j += 1) {
                setValue(element, (0,_string___WEBPACK_IMPORTED_MODULE_2__/* .camelCase */ .eV)(keys[j]), key[keys[j]]);
            }
        }
        else {
            setValue(element, (0,_string___WEBPACK_IMPORTED_MODULE_2__/* .camelCase */ .eV)(key), value);
        }
        return '';
    }
    const key2 = (0,_string___WEBPACK_IMPORTED_MODULE_2__/* .kebabCase */ .GL)(key), doc = element.ownerDocument || document, win = doc ? doc.defaultView || doc.parentWindow : false;
    const currentValue = element.style[key];
    let result = '';
    if (currentValue !== undefined && currentValue !== '') {
        result = currentValue;
    }
    else if (win && !onlyStyleMode) {
        result = win.getComputedStyle(element).getPropertyValue(key2);
    }
    if (numberFieldsReg.test(key) &&
        /^[-+]?[0-9.]+px$/.test(result.toString())) {
        result = parseInt(result.toString(), 10);
    }
    return (0,_normalize___WEBPACK_IMPORTED_MODULE_1__/* .normalizeCssValue */ .Zh)(key, result);
};
const clearCenterAlign = (image) => {
    if (css(image, 'display') === 'block') {
        css(image, 'display', '');
    }
    const { style } = image;
    if (style.marginLeft === 'auto' && style.marginRight === 'auto') {
        style.marginLeft = '';
        style.marginRight = '';
    }
};


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ut": () => (/* reexport */ normalizeColor),
  "Zh": () => (/* reexport */ normalizeCssValue),
  "T2": () => (/* reexport */ normalizeKeyAliases),
  "Pd": () => (/* reexport */ normalizeLicense),
  "Tz": () => (/* reexport */ normalizeNode),
  "AH": () => (/* reexport */ normalizePath),
  "Jf": () => (/* reexport */ normalizeRelativePath),
  "aC": () => (/* reexport */ normalizeSize),
  "D5": () => (/* reexport */ normalizeUrl)
});

// EXTERNAL MODULE: ./src/core/helpers/string/index.ts + 5 modules
var string = __webpack_require__(22);
// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);
;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-key-aliases.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function normalizeKeyAliases(keys) {
    const memory = {};
    return keys
        .replace(/\+\+/g, '+add')
        .split(/[\s]*\+[\s]*/)
        .map(key => (0,string/* trim */.fy)(key.toLowerCase()))
        .map(key => constants.KEY_ALIASES[key] || key)
        .sort()
        .filter(key => !memory[key] && key !== '' && (memory[key] = true))
        .join('+');
}

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-license.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeLicense = (license, count = 8) => {
    const parts = [];
    while (license.length) {
        parts.push(license.substr(0, count));
        license = license.substr(count);
    }
    parts[1] = parts[1].replace(/./g, '*');
    parts[2] = parts[2].replace(/./g, '*');
    return parts.join('-');
};

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-node.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const normalizeNode = (node) => {
    if (!node) {
        return;
    }
    if (dom/* Dom.isText */.i.isText(node) && node.nodeValue != null && node.parentNode) {
        while (dom/* Dom.isText */.i.isText(node.nextSibling)) {
            if (node.nextSibling.nodeValue != null) {
                node.nodeValue += node.nextSibling.nodeValue;
            }
            node.nodeValue = node.nodeValue.replace((0,constants.INVISIBLE_SPACE_REG_EXP)(), '');
            dom/* Dom.safeRemove */.i.safeRemove(node.nextSibling);
        }
    }
    else {
        normalizeNode(node.firstChild);
    }
    normalizeNode(node.nextSibling);
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-path.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const normalizePath = (...path) => {
    return path
        .filter(part => (0,string/* trim */.fy)(part).length)
        .map((part, index) => {
        part = part.replace(/([^:])[\\/]+/g, '$1/');
        if (index) {
            part = part.replace(/^\//, '');
        }
        if (index !== path.length - 1) {
            part = part.replace(/\/$/, '');
        }
        return part;
    })
        .join('/');
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-relative-path.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeRelativePath = (path) => {
    const sections = path.split('/'), builder = sections.reduce((builder, section) => {
        switch (section) {
            case '': {
                break;
            }
            case '.': {
                break;
            }
            case '..': {
                builder.pop();
                break;
            }
            default: {
                builder.push(section);
                break;
            }
        }
        return builder;
    }, []);
    return builder.join('/') + (path.endsWith('/') ? '/' : '');
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-size.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeSize = (value) => {
    if (/^[0-9]+$/.test(value.toString())) {
        return value + 'px';
    }
    return value.toString();
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-url.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const normalizeUrl = (...urls) => {
    return urls
        .filter(url => url.length)
        .map(url => url.replace(/\/$/, ''))
        .join('/')
        .replace(/([^:])[\\/]+/g, '$1/');
};

// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 14 modules
var checker = __webpack_require__(15);
// EXTERNAL MODULE: ./src/core/helpers/color/color-to-hex.ts
var color_to_hex = __webpack_require__(21);
;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-css-value.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function normalizeCssValue(key, value) {
    switch ((0,string/* kebabCase */.GL)(key)) {
        case 'font-weight':
            switch (value.toString().toLowerCase()) {
                case '700':
                case 'bold':
                    return 700;
                case '400':
                case 'normal':
                    return 400;
                case '900':
                case 'heavy':
                    return 900;
            }
            return (0,checker/* isNumeric */.kE)(value) ? Number(value) : value;
    }
    if (/color/i.test(key) && /^rgb/i.test(value.toString())) {
        return (0,color_to_hex/* colorToHex */.h)(value.toString()) || value;
    }
    return value;
}

;// CONCATENATED MODULE: ./src/core/helpers/normalize/normalize-color.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const normalizeColor = (colorInput) => {
    const newcolor = ['#'];
    let color = (0,color_to_hex/* colorToHex */.h)(colorInput);
    if (!color) {
        return false;
    }
    color = (0,string/* trim */.fy)(color.toUpperCase());
    color = color.substr(1);
    if (color.length === 3) {
        for (let i = 0; i < 3; i += 1) {
            newcolor.push(color[i]);
            newcolor.push(color[i]);
        }
        return newcolor.join('');
    }
    if (color.length > 6) {
        color = color.substr(0, 6);
    }
    return '#' + color;
};

;// CONCATENATED MODULE: ./src/core/helpers/normalize/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "y3": () => (/* reexport */ UIButton),
  "Yc": () => (/* reexport */ UIButtonState)
});

// UNUSED EXPORTS: UIButtonGroup

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(36);
// EXTERNAL MODULE: ./src/core/ui/element.ts
var ui_element = __webpack_require__(25);
// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
// EXTERNAL MODULE: ./src/core/ui/icon.ts
var icon = __webpack_require__(27);
// EXTERNAL MODULE: ./src/core/ui/list/list.ts + 1 modules
var list = __webpack_require__(31);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 8 modules
var decorators = __webpack_require__(33);
// EXTERNAL MODULE: ./src/core/component/index.ts + 3 modules
var component = __webpack_require__(11);
;// CONCATENATED MODULE: ./src/core/ui/button/button/button.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









const UIButtonState = () => ({
    size: 'middle',
    type: 'button',
    name: '',
    value: '',
    status: '',
    disabled: false,
    activated: false,
    icon: {
        name: 'empty',
        fill: '',
        iconURL: ''
    },
    tooltip: '',
    text: '',
    tabIndex: undefined
});
let UIButton = class UIButton extends ui_element/* UIElement */.u {
    constructor(jodit, state) {
        super(jodit);
        this.isButton = true;
        this.state = UIButtonState();
        this.actionHandlers = [];
        this.updateSize();
        this.onChangeSize();
        this.onChangeStatus();
        if (state) {
            this.hookStatus(component/* STATUSES.ready */.n$.ready, () => {
                this.setState(state);
            });
        }
    }
    className() {
        return 'UIButton';
    }
    setState(state) {
        Object.assign(this.state, state);
        return this;
    }
    onChangeSize() {
        this.setMod('size', this.state.size);
    }
    onChangeType() {
        (0,helpers.attr)(this.container, 'type', this.state.type);
    }
    updateSize() {
        const pe = this.closest(list/* UIList */.b);
        if (pe) {
            this.state.size = pe.buttonSize;
            return;
        }
    }
    onChangeStatus() {
        this.setMod('status', this.state.status);
    }
    onChangeText() {
        this.text.textContent = this.jodit.i18n(this.state.text);
    }
    onChangeTextSetMode() {
        this.setMod('text-icons', Boolean(this.state.text.trim().length));
    }
    onChangeDisabled() {
        (0,helpers.attr)(this.container, 'disabled', this.state.disabled || null);
    }
    onChangeActivated() {
        (0,helpers.attr)(this.container, 'aria-pressed', this.state.activated);
    }
    onChangeName() {
        this.container.classList.add(`${this.componentName}_${this.clearName(this.state.name)}`);
        this.name = this.state.name;
        (0,helpers.attr)(this.container, 'data-ref', this.state.name);
        (0,helpers.attr)(this.container, 'ref', this.state.name);
    }
    onChangeTooltip() {
        if (this.get('j.o.useNativeTooltip')) {
            (0,helpers.attr)(this.container, 'title', this.state.tooltip);
        }
        (0,helpers.attr)(this.container, 'aria-label', this.state.tooltip);
    }
    onChangeTabIndex() {
        (0,helpers.attr)(this.container, 'tabIndex', this.state.tabIndex);
    }
    onChangeIcon() {
        const textIcons = this.get('j.o.textIcons');
        if (textIcons === true ||
            ((0,helpers.isFunction)(textIcons) && textIcons(this.state.name))) {
            return;
        }
        dom/* Dom.detach */.i.detach(this.icon);
        const iconElement = icon/* Icon.makeIcon */.J.makeIcon(this.j, this.state.icon);
        iconElement && this.icon.appendChild(iconElement);
    }
    focus() {
        this.container.focus();
    }
    isFocused() {
        const { activeElement } = this.od;
        return Boolean(activeElement && dom/* Dom.isOrContains */.i.isOrContains(this.container, activeElement));
    }
    createContainer() {
        const cn = this.componentName;
        const button = this.j.c.element('button', {
            class: cn,
            type: 'button',
            role: 'button',
            ariaPressed: false
        });
        this.icon = this.j.c.span(cn + '__icon');
        this.text = this.j.c.span(cn + '__text');
        button.appendChild(this.icon);
        button.appendChild(this.text);
        this.j.e.on(button, 'click', this.onActionFire);
        return button;
    }
    destruct() {
        this.j.e.off(this.container);
        return super.destruct();
    }
    onAction(callback) {
        this.actionHandlers.push(callback);
        return this;
    }
    onActionFire(e) {
        e.buffer = {
            actionTrigger: this
        };
        this.actionHandlers.forEach(callback => callback.call(this, e));
    }
};
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.size')
], UIButton.prototype, "onChangeSize", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.type')
], UIButton.prototype, "onChangeType", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('parentElement')
], UIButton.prototype, "updateSize", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.status')
], UIButton.prototype, "onChangeStatus", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.text')
], UIButton.prototype, "onChangeText", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.text')
], UIButton.prototype, "onChangeTextSetMode", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.disabled')
], UIButton.prototype, "onChangeDisabled", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.activated')
], UIButton.prototype, "onChangeActivated", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.name')
], UIButton.prototype, "onChangeName", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.tooltip')
], UIButton.prototype, "onChangeTooltip", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.tabIndex')
], UIButton.prototype, "onChangeTabIndex", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.icon')
], UIButton.prototype, "onChangeIcon", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], UIButton.prototype, "onActionFire", null);
UIButton = (0,tslib_es6.__decorate)([
    decorators.component
], UIButton);

function Button(jodit, stateOrText, text, status) {
    const button = new UIButton(jodit);
    button.state.tabIndex = jodit.o.allowTabNavigation ? 0 : -1;
    if ((0,helpers.isString)(stateOrText)) {
        button.state.icon.name = stateOrText;
        button.state.name = stateOrText;
        if (status) {
            button.state.status = status;
        }
        if (text) {
            button.state.text = text;
        }
    }
    else {
        button.setState(stateOrText);
    }
    return button;
}

// EXTERNAL MODULE: ./src/core/ui/list/group.ts
var group = __webpack_require__(35);
;// CONCATENATED MODULE: ./src/core/ui/button/group/group.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





let UIButtonGroup = class UIButtonGroup extends group/* UIGroup */.q {
    constructor(jodit, options = {
        radio: true
    }) {
        var _a, _b;
        super(jodit, (_a = options.options) === null || _a === void 0 ? void 0 : _a.map(opt => {
            const btn = new UIButton(jodit, {
                text: opt.text,
                value: opt.value,
                status: 'primary'
            });
            btn.onAction(() => {
                this.select(opt.value);
            });
            return btn;
        }), options);
        this.options = options;
        this.select((_b = options.value) !== null && _b !== void 0 ? _b : 0);
    }
    className() {
        return 'UIButtonGroup';
    }
    render(options) {
        return `<div>
			<div class="&__label">~${options.label}~</div>
			<div class="&__options"></div>
		</div>`;
    }
    appendChildToContainer(childContainer) {
        this.getElm('options').appendChild(childContainer);
    }
    select(indexOrValue) {
        var _a, _b;
        this.elements.forEach((elm, index) => {
            if (index === indexOrValue || elm.state.value === indexOrValue) {
                elm.state.activated = true;
            }
            else if (this.options.radio) {
                elm.state.activated = false;
            }
        });
        const result = this.elements
            .filter(elm => elm.state.activated)
            .map(elm => ({
            text: elm.state.text,
            value: elm.state.value
        }));
        this.jodit.e.fire(this, 'select', result);
        (_b = (_a = this.options).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, result);
    }
};
UIButtonGroup = (0,tslib_es6.__decorate)([
    decorators.component
], UIButtonGroup);


;// CONCATENATED MODULE: ./src/core/ui/button/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ UIList)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(36);
// EXTERNAL MODULE: ./src/core/ui/button/index.ts + 2 modules
var ui_button = __webpack_require__(30);
// EXTERNAL MODULE: ./src/core/ui/helpers/get-control-type.ts
var get_control_type = __webpack_require__(32);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);
// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 14 modules
var checker = __webpack_require__(15);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
;// CONCATENATED MODULE: ./src/core/ui/helpers/get-strong-control-types.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function getStrongControlTypes(items, controls) {
    const elements = (0,checker/* isArray */.kJ)(items)
        ? items
        : (0,helpers.keys)(items, false).map(key => {
            const value = items[key] || {};
            return (0,helpers.ConfigProto)({ name: key }, value);
        });
    return elements.map(item => (0,get_control_type/* getControlType */.Y)(item, controls || config/* Config.defaultOptions.controls */.D.defaultOptions.controls));
}

// EXTERNAL MODULE: ./src/core/decorators/index.ts + 8 modules
var decorators = __webpack_require__(33);
// EXTERNAL MODULE: ./src/core/ui/list/group.ts
var group = __webpack_require__(35);
// EXTERNAL MODULE: ./src/core/ui/separator.ts
var separator = __webpack_require__(37);
// EXTERNAL MODULE: ./src/core/ui/helpers/buttons.ts
var buttons = __webpack_require__(38);
;// CONCATENATED MODULE: ./src/core/ui/list/list.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










let UIList = class UIList extends group/* UIGroup */.q {
    constructor(jodit) {
        super(jodit);
        this.mode = 'horizontal';
        this.removeButtons = [];
        this.onChangeMode();
    }
    className() {
        return 'UIList';
    }
    onChangeMode() {
        this.setMod('mode', this.mode);
    }
    makeGroup() {
        return new group/* UIGroup */.q(this.jodit);
    }
    get buttons() {
        return this.allChildren.filter(elm => elm instanceof ui_button/* UIButton */.y3);
    }
    getButtonsNames() {
        return this.buttons
            .map(a => (a instanceof ui_button/* UIButton */.y3 && a.state.name) || '')
            .filter(a => a !== '');
    }
    setRemoveButtons(removeButtons) {
        this.removeButtons = removeButtons || [];
        return this;
    }
    build(items, target = null) {
        items = (0,helpers.splitArray)(items);
        this.clear();
        let lastBtnSeparator = false;
        let line = this.makeGroup();
        this.append(line);
        let group;
        const addButton = (control) => {
            let elm = null;
            switch (control.name) {
                case '\n':
                    line = this.makeGroup();
                    group = this.makeGroup();
                    line.append(group);
                    this.append(line);
                    break;
                case '|':
                    if (!lastBtnSeparator) {
                        lastBtnSeparator = true;
                        elm = new separator/* UISeparator */.l(this.j);
                    }
                    break;
                default:
                    lastBtnSeparator = false;
                    elm = this.makeButton(control, target);
            }
            if (elm) {
                if (!group) {
                    group = this.makeGroup();
                    line.append(group);
                }
                group.append(elm);
            }
        };
        const isNotRemoved = (b) => !this.removeButtons.includes(b.name);
        items.forEach(item => {
            if ((0,buttons/* isButtonGroup */.A)(item)) {
                const buttons = item.buttons.filter(b => b);
                if (buttons.length) {
                    group = this.makeGroup();
                    line.append(group);
                    group.setMod('separated', true).setMod('group', item.group);
                    getStrongControlTypes(buttons, this.j.o.controls)
                        .filter(isNotRemoved)
                        .forEach(addButton);
                }
            }
            else {
                const control = (0,get_control_type/* getControlType */.Y)(item, this.j.o.controls);
                isNotRemoved(control) && addButton(control);
            }
        });
        this.update();
        return this;
    }
    makeButton(control, target) {
        return new ui_button/* UIButton */.y3(this.j);
    }
};
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('mode')
], UIList.prototype, "onChangeMode", null);
UIList = (0,tslib_es6.__decorate)([
    decorators.component
], UIList);



/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ getControlType),
/* harmony export */   "z": () => (/* binding */ findControlType)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function getControlType(button, controls) {
    let buttonControl;
    if (!controls)
        controls = _config__WEBPACK_IMPORTED_MODULE_1__/* .Config.defaultOptions.controls */ .D.defaultOptions.controls;
    if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(button)) {
        buttonControl = { name: 'empty', ...(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.ConfigFlatten)(button) };
        if (controls[buttonControl.name] !== undefined) {
            buttonControl = {
                ...(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.ConfigFlatten)(controls[buttonControl.name]),
                ...(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.ConfigFlatten)(buttonControl)
            };
        }
    }
    else {
        buttonControl = findControlType(button, controls) || {
            name: button,
            command: button,
            tooltip: button
        };
    }
    return buttonControl;
}
function findControlType(path, controls) {
    let [namespaceOrKey, key] = path.split(/\./);
    let store = controls;
    if (key != null) {
        if (controls[namespaceOrKey] !== undefined) {
            store = controls[namespaceOrKey];
        }
    }
    else {
        key = namespaceOrKey;
    }
    return store[key]
        ? {
            name: key,
            ...(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.ConfigFlatten)(store[key])
        }
        : undefined;
}


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "autobind": () => (/* reexport */ esm/* default */.ZP),
  "cache": () => (/* reexport */ cache),
  "component": () => (/* reexport */ component),
  "debounce": () => (/* reexport */ debounce),
  "getPropertyDescriptor": () => (/* reexport */ getPropertyDescriptor),
  "hook": () => (/* reexport */ hook),
  "nonenumerable": () => (/* reexport */ nonenumerable),
  "persistent": () => (/* reexport */ persistent),
  "throttle": () => (/* reexport */ throttle),
  "wait": () => (/* reexport */ wait),
  "watch": () => (/* reexport */ watch)
});

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
;// CONCATENATED MODULE: ./src/core/decorators/cache.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function cache(target, name, descriptor) {
    const getter = descriptor.get;
    if (!getter) {
        throw (0,helpers.error)('Getter property descriptor expected');
    }
    descriptor.get = function () {
        const value = getter.call(this);
        if (value && value.noCache === true) {
            return value;
        }
        Object.defineProperty(this, name, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            writable: false,
            value
        });
        return value;
    };
}

;// CONCATENATED MODULE: ./src/core/decorators/component.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const cn = (elm) => {
    return (0,helpers.isFunction)(elm.className) ? elm.className() : NaN;
};
function component(constructorFunction) {
    class newConstructorFunction extends constructorFunction {
        constructor(...args) {
            super(...args);
            const isSamePrototype = Object.getPrototypeOf(this) ===
                newConstructorFunction.prototype;
            const isSameClassName = cn(this) ===
                cn(newConstructorFunction.prototype);
            if (false) {}
            if (isSamePrototype || isSameClassName) {
                this.setStatus('ready');
            }
        }
    }
    newConstructorFunction.prototype.constructor = constructorFunction;
    return newConstructorFunction;
}

// EXTERNAL MODULE: ./src/core/component/index.ts + 3 modules
var core_component = __webpack_require__(11);
;// CONCATENATED MODULE: ./src/core/decorators/debounce.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function debounce(timeout, firstCallImmediately = false, method = 'debounce') {
    return (target, propertyKey) => {
        if (!(0,helpers.isFunction)(target[propertyKey])) {
            throw (0,helpers.error)('Handler must be a Function');
        }
        target.hookStatus(core_component/* STATUSES.ready */.n$.ready, (component) => {
            const view = (0,helpers.isViewObject)(component)
                ? component
                : component.jodit;
            const realTimeout = (0,helpers.isFunction)(timeout)
                ? timeout(component)
                : timeout;
            component[propertyKey] = view.async[method](component[propertyKey].bind(component), (0,helpers.isNumber)(realTimeout) || (0,helpers.isPlainObject)(realTimeout)
                ? realTimeout
                : view.defaultTimeout, firstCallImmediately);
        });
    };
}
function throttle(timeout, firstCallImmediately = false) {
    return debounce(timeout, firstCallImmediately, 'throttle');
}

;// CONCATENATED MODULE: ./src/core/decorators/hook.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function hook(status) {
    return (target, propertyKey) => {
        if (!(0,helpers.isFunction)(target[propertyKey])) {
            throw (0,helpers.error)('Handler must be a Function');
        }
        target.hookStatus(status, (component) => {
            target[propertyKey].call(component);
        });
    };
}

;// CONCATENATED MODULE: ./src/core/decorators/nonenumerable.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const nonenumerable = (target, propertyKey) => {
    const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
    if (descriptor.enumerable !== false) {
        Object.defineProperty(target, propertyKey, {
            enumerable: false,
            set(value) {
                Object.defineProperty(this, propertyKey, {
                    enumerable: false,
                    writable: true,
                    value
                });
            }
        });
    }
};

;// CONCATENATED MODULE: ./src/core/decorators/persistent.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function persistent(target, propertyKey) {
    target.hookStatus(core_component/* STATUSES.ready */.n$.ready, (component) => {
        const jodit = (0,helpers.isViewObject)(component)
            ? component
            : component.jodit, storageKey = `${jodit.options.namespace}${component.componentName}_prop_${propertyKey}`, initialValue = component[propertyKey];
        Object.defineProperty(component, propertyKey, {
            get() {
                var _a;
                return (_a = jodit.storage.get(storageKey)) !== null && _a !== void 0 ? _a : initialValue;
            },
            set(value) {
                jodit.storage.set(storageKey, value);
            }
        });
    });
}

;// CONCATENATED MODULE: ./src/core/decorators/wait.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function wait(condition) {
    return (target, propertyKey) => {
        if (!(0,helpers.isFunction)(target[propertyKey])) {
            throw (0,helpers.error)('Handler must be a Function');
        }
        target.hookStatus(core_component/* STATUSES.ready */.n$.ready, (component) => {
            const async = (0,helpers.isViewObject)(component)
                ? component.async
                : component.j.async;
            const realMethod = component[propertyKey];
            let timeout = 0;
            component[propertyKey] = function callProxy(...args) {
                async.clearTimeout(timeout);
                if (condition(component)) {
                    realMethod.apply(component, args);
                }
                else {
                    timeout = async.setTimeout(() => callProxy(...args), 10);
                }
            };
        });
    };
}

// EXTERNAL MODULE: ./src/core/events/index.ts + 3 modules
var events = __webpack_require__(3);
;// CONCATENATED MODULE: ./src/core/decorators/watch.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function getPropertyDescriptor(obj, prop) {
    let desc;
    do {
        desc = Object.getOwnPropertyDescriptor(obj, prop);
        obj = Object.getPrototypeOf(obj);
    } while (!desc && obj);
    return desc;
}
function watch(observeFields, context) {
    return (target, propertyKey) => {
        if (!(0,helpers.isFunction)(target[propertyKey])) {
            throw (0,helpers.error)('Handler must be a Function');
        }
        const process = (component) => {
            const callback = (key, ...args) => {
                if (!component.isInDestruct) {
                    return component[propertyKey](key, ...args);
                }
            };
            (0,helpers.splitArray)(observeFields).forEach(field => {
                if (/:/.test(field)) {
                    const [objectPath, eventName] = field.split(':');
                    const view = (0,helpers.isViewObject)(component)
                        ? component
                        : component.jodit;
                    if (objectPath.length) {
                        context = component.get(objectPath);
                    }
                    if ((0,helpers.isFunction)(context)) {
                        context = context(component);
                    }
                    view.events
                        .on(context || component, eventName, callback)
                        .on(eventName, callback);
                    view.hookStatus('beforeDestruct', () => {
                        view.events
                            .off(context || component, eventName, callback)
                            .off(eventName, callback);
                    });
                    return;
                }
                const parts = field.split('.'), [key] = parts;
                let value = component[key];
                if (value instanceof events/* ObserveObject */.P5) {
                    value.on(`change.${field}`, callback);
                }
                else if ((0,helpers.isPlainObject)(value) && parts.length > 1) {
                    const observe = events/* ObserveObject.create */.P5.create(value, [key]);
                    observe.on(`change.${field}`, callback);
                    component[key] = observe;
                }
                else {
                    const descriptor = getPropertyDescriptor(target, key);
                    Object.defineProperty(component, key, {
                        configurable: true,
                        set(v) {
                            const oldValue = value;
                            if (oldValue === v) {
                                return;
                            }
                            value = v;
                            if (descriptor && descriptor.set) {
                                descriptor.set.call(component, v);
                            }
                            if ((0,helpers.isPlainObject)(value)) {
                                value = events/* ObserveObject.create */.P5.create(value, [key]);
                                value.on('change.' + field, callback);
                            }
                            callback(key, oldValue, value);
                        },
                        get() {
                            if (descriptor && descriptor.get) {
                                return descriptor.get.call(component);
                            }
                            return value;
                        }
                    });
                }
            });
        };
        if ((0,helpers.isFunction)(target.hookStatus)) {
            target.hookStatus(core_component/* STATUSES.ready */.n$.ready, process);
        }
        else {
            process(target);
        }
    };
}
/* harmony default export */ const decorators_watch = ((/* unused pure expression or super */ null && (watch)));

// EXTERNAL MODULE: ./node_modules/autobind-decorator/lib/esm/index.js
var esm = __webpack_require__(34);
;// CONCATENATED MODULE: ./src/core/decorators/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = void 0;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) { return typeof obj; };
}
else {
    _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
} return _typeof(obj); }
function boundMethod(target, key, descriptor) {
    var fn = descriptor.value;
    if (typeof fn !== 'function') {
        throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(_typeof(fn)));
    }
    var definingProperty = false;
    return {
        configurable: true,
        get: function get() {
            if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
                return fn;
            }
            var boundFn = fn.bind(this);
            definingProperty = true;
            Object.defineProperty(this, key, {
                configurable: true,
                get: function get() {
                    return boundFn;
                },
                set: function set(value) {
                    fn = value;
                    delete this[key];
                }
            });
            definingProperty = false;
            return boundFn;
        },
        set: function set(value) {
            fn = value;
        }
    };
}
__webpack_unused_export__ = boundMethod;
function boundClass(target) {
    var keys;
    if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
        keys = Reflect.ownKeys(target.prototype);
    }
    else {
        keys = Object.getOwnPropertyNames(target.prototype);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
        }
    }
    keys.forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (typeof descriptor.value === 'function') {
            Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
        }
    });
    return target;
}
__webpack_unused_export__ = boundClass;
function autobind() {
    if (arguments.length === 1) {
        return boundClass.apply(void 0, arguments);
    }
    return boundMethod.apply(void 0, arguments);
}
exports.ZP = autobind;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ UIGroup)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UIGroup_1;






let UIGroup = UIGroup_1 = class UIGroup extends _element__WEBPACK_IMPORTED_MODULE_0__/* .UIElement */ .u {
    constructor(jodit, elements, options) {
        super(jodit, options);
        this.syncMod = false;
        this.elements = [];
        this.buttonSize = 'middle';
        elements === null || elements === void 0 ? void 0 : elements.forEach(elm => elm && this.append(elm));
        if (options === null || options === void 0 ? void 0 : options.name) {
            this.name = options.name;
        }
    }
    className() {
        return 'UIGroup';
    }
    get allChildren() {
        const result = [];
        const stack = [
            ...this.elements
        ];
        while (stack.length) {
            const elm = stack.shift();
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(elm)) {
                stack.push(...elm);
            }
            else if (elm instanceof UIGroup_1) {
                stack.push(...elm.elements);
            }
            else {
                elm && result.push(elm);
            }
        }
        return result;
    }
    update() {
        this.elements.forEach(elm => elm.update());
        this.setMod('size', this.buttonSize);
    }
    append(elm, distElement) {
        if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(elm)) {
            elm.forEach(item => this.append(item));
            return this;
        }
        this.elements.push(elm);
        if (elm.name) {
            elm.container.classList.add(this.getFullElName(elm.name));
        }
        if (distElement) {
            this.getElm(distElement).appendChild(elm.container);
        }
        else {
            this.appendChildToContainer(elm.container);
        }
        elm.parentElement = this;
        elm.update();
        return this;
    }
    setMod(name, value) {
        if (this.syncMod) {
            this.elements.forEach(elm => elm.setMod(name, value));
        }
        return super.setMod(name, value);
    }
    appendChildToContainer(childContainer) {
        this.container.appendChild(childContainer);
    }
    remove(elm) {
        const index = this.elements.indexOf(elm);
        if (index !== -1) {
            this.elements.splice(index, 1);
            _dom__WEBPACK_IMPORTED_MODULE_3__/* .Dom.safeRemove */ .i.safeRemove(elm.container);
            elm.parentElement = null;
        }
        return this;
    }
    clear() {
        this.elements.forEach(elm => elm.destruct());
        this.elements.length = 0;
        return this;
    }
    destruct() {
        this.clear();
        return super.destruct();
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)('buttonSize')
], UIGroup.prototype, "update", null);
UIGroup = UIGroup_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    _decorators__WEBPACK_IMPORTED_MODULE_1__.component
], UIGroup);



/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.__classPrivateFieldSet = exports.__classPrivateFieldGet = exports.__importDefault = exports.__importStar = exports.__makeTemplateObject = exports.__asyncValues = exports.__asyncDelegator = exports.__asyncGenerator = exports.__await = exports.__spreadArray = exports.__spreadArrays = exports.__spread = exports.__read = exports.__values = exports.__exportStar = exports.__createBinding = exports.__generator = exports.__awaiter = exports.__metadata = exports.__param = exports.__decorate = exports.__rest = exports.__assign = exports.__extends = void 0;
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
var __assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
exports.__assign = __assign;
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
exports.__createBinding = Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
});
function __exportStar(m, o) {
    for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            exports.__createBinding(o, m, p);
}
exports.__exportStar = __exportStar;
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
        return m.call(o);
    if (o && typeof o.length === "number")
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}
exports.__spreadArray = __spreadArray;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
var __setModuleDefault = Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                exports.__createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
exports.__classPrivateFieldGet = __classPrivateFieldGet;
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m")
        throw new TypeError("Private method is not writable");
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}
exports.__classPrivateFieldSet = __classPrivateFieldSet;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ UISeparator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



let UISeparator = class UISeparator extends _element__WEBPACK_IMPORTED_MODULE_0__/* .UIElement */ .u {
    className() {
        return 'UISeparator';
    }
};
UISeparator = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    _decorators__WEBPACK_IMPORTED_MODULE_1__.component
], UISeparator);



/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ isButtonGroup),
/* harmony export */   "q": () => (/* binding */ flatButtonsSet)
/* harmony export */ });
/* harmony import */ var _helpers_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const isButtonGroup = (item) => {
    return (0,_helpers_checker__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .kJ)(item.buttons);
};
const flatButtonsSet = (buttons) => new Set(buttons.reduce((acc, item) => {
    if (isButtonGroup(item)) {
        acc.push(...item.buttons);
    }
    else {
        acc.push(item);
    }
    return acc;
}, []));


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* reexport */ Popup)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(36);
// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(12);
// EXTERNAL MODULE: ./src/core/ui/element.ts
var ui_element = __webpack_require__(25);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 8 modules
var decorators = __webpack_require__(33);
;// CONCATENATED MODULE: ./src/core/ui/popup/popup.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class Popup extends ui_element/* UIElement */.u {
    constructor(jodit, smart = true) {
        super(jodit);
        this.smart = smart;
        this.isOpened = false;
        this.strategy = 'leftBottom';
        this.viewBound = () => ({
            left: 0,
            top: 0,
            width: this.ow.innerWidth,
            height: this.ow.innerHeight
        });
        this.childrenPopups = new Set();
        (0,helpers.attr)(this.container, 'role', 'popup');
    }
    className() {
        return 'Popup';
    }
    updateParentElement(target) {
        if (target !== this && target instanceof Popup) {
            this.childrenPopups.forEach(popup => {
                if (!target.closest(popup) && popup.isOpened) {
                    popup.close();
                }
            });
            if (!this.childrenPopups.has(target)) {
                this.j.e.on(target, 'beforeClose', () => {
                    this.childrenPopups.delete(target);
                });
            }
            this.childrenPopups.add(target);
        }
        return super.updateParentElement(target);
    }
    setContent(content) {
        dom/* Dom.detach */.i.detach(this.container);
        const box = this.j.c.div(`${this.componentName}__content`);
        let elm;
        if (content instanceof ui_element/* UIElement */.u) {
            elm = content.container;
            content.parentElement = this;
        }
        else if ((0,helpers.isString)(content)) {
            elm = this.j.c.fromHTML(content);
        }
        else {
            elm = content;
        }
        box.appendChild(elm);
        this.container.appendChild(box);
        this.updatePosition();
        return this;
    }
    open(getBound, keepPosition = false) {
        (0,helpers.markOwner)(this.jodit, this.container);
        this.isOpened = true;
        this.addGlobalListeners();
        this.targetBound = !keepPosition
            ? getBound
            : this.getKeepBound(getBound);
        const parentContainer = (0,global/* getContainer */.ZO)(this.jodit, Popup);
        if (parentContainer !== this.container.parentElement) {
            parentContainer.appendChild(this.container);
        }
        this.updatePosition();
        this.j.e.fire(this, 'afterOpen');
        return this;
    }
    getKeepBound(getBound) {
        const oldBound = getBound();
        const elmUnderCursor = this.od.elementFromPoint(oldBound.left, oldBound.top);
        if (!elmUnderCursor) {
            return getBound;
        }
        const element = dom/* Dom.isHTMLElement */.i.isHTMLElement(elmUnderCursor, this.ow)
            ? elmUnderCursor
            : elmUnderCursor.parentElement;
        const oldPos = (0,helpers.position)(element, this.j);
        return () => {
            const bound = getBound();
            const newPos = (0,helpers.position)(element, this.j);
            return {
                ...bound,
                top: bound.top + (newPos.top - oldPos.top),
                left: bound.left + (newPos.left - oldPos.left)
            };
        };
    }
    updatePosition() {
        if (!this.isOpened) {
            return this;
        }
        const [pos, strategy] = this.calculatePosition(this.targetBound(), this.viewBound(), (0,helpers.position)(this.container, this.j));
        this.setMod('strategy', strategy);
        (0,helpers.css)(this.container, {
            left: pos.left,
            top: pos.top
        });
        this.childrenPopups.forEach(popup => popup.updatePosition());
        return this;
    }
    calculatePosition(target, view, container, defaultStrategy = this.strategy) {
        const x = {
            left: target.left,
            right: target.left - (container.width - target.width)
        }, y = {
            bottom: target.top + target.height,
            top: target.top - container.height
        };
        const list = Object.keys(x).reduce((keys, xKey) => keys.concat(Object.keys(y).map(yKey => `${xKey}${(0,helpers.ucfirst)(yKey)}`)), []);
        const getPointByStrategy = (strategy) => {
            const [xKey, yKey] = (0,helpers.kebabCase)(strategy).split('-');
            return {
                left: x[xKey],
                top: y[yKey],
                width: container.width,
                height: container.height
            };
        };
        const getMatchStrategy = (inBox) => {
            let strategy = null;
            if (Popup.boxInView(getPointByStrategy(defaultStrategy), inBox)) {
                strategy = defaultStrategy;
            }
            else {
                strategy =
                    list.find((key) => {
                        if (Popup.boxInView(getPointByStrategy(key), inBox)) {
                            return key;
                        }
                        return;
                    }) || null;
            }
            return strategy;
        };
        let strategy = getMatchStrategy((0,helpers.position)(this.j.container, this.j));
        if (!strategy || !Popup.boxInView(getPointByStrategy(strategy), view)) {
            strategy = getMatchStrategy(view) || strategy || defaultStrategy;
        }
        return [getPointByStrategy(strategy), strategy];
    }
    static boxInView(box, view) {
        const accuracy = 2;
        return (box.top - view.top >= -accuracy &&
            box.left - view.left >= -accuracy &&
            view.top + view.height - (box.top + box.height) >= -accuracy &&
            view.left + view.width - (box.left + box.width) >= -accuracy);
    }
    close() {
        if (!this.isOpened) {
            return this;
        }
        this.isOpened = false;
        this.childrenPopups.forEach(popup => popup.close());
        this.j.e.fire(this, 'beforeClose');
        this.j.e.fire('beforePopupClose', this);
        this.removeGlobalListeners();
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
        return this;
    }
    closeOnOutsideClick(e) {
        if (!this.isOpened) {
            return;
        }
        if (!e.target) {
            this.close();
            return;
        }
        const box = ui_element/* UIElement.closestElement */.u.closestElement(e.target, Popup);
        if (box && (this === box || box.closest(this))) {
            return;
        }
        this.close();
    }
    addGlobalListeners() {
        const up = this.updatePosition, ow = this.ow;
        global/* eventEmitter.on */.TB.on('closeAllPopups', this.close);
        if (this.smart) {
            this.j.e
                .on('escape', this.close)
                .on('mousedown touchstart', this.closeOnOutsideClick)
                .on(ow, 'mousedown touchstart', this.closeOnOutsideClick);
        }
        this.j.e
            .on('closeAllPopups', this.close)
            .on('resize', up)
            .on(this.container, 'scroll mousewheel', up)
            .on(ow, 'scroll', up)
            .on(ow, 'resize', up);
    }
    removeGlobalListeners() {
        const up = this.updatePosition, ow = this.ow;
        global/* eventEmitter.off */.TB.off('closeAllPopups', this.close);
        if (this.smart) {
            this.j.e
                .off('escape', this.close)
                .off('mousedown touchstart', this.closeOnOutsideClick)
                .off(ow, 'mousedown touchstart', this.closeOnOutsideClick);
        }
        this.j.e
            .off('closeAllPopups', this.close)
            .off('resize', up)
            .off(this.container, 'scroll mousewheel', up)
            .off(ow, 'scroll', up)
            .off(ow, 'resize', up);
    }
    setZIndex(index) {
        this.container.style.zIndex = index.toString();
    }
    destruct() {
        this.close();
        return super.destruct();
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], Popup.prototype, "updatePosition", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Popup.prototype, "close", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Popup.prototype, "closeOnOutsideClick", null);

;// CONCATENATED MODULE: ./src/core/ui/popup/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eC": () => (/* reexport */ UIBlock),
  "mA": () => (/* reexport */ UICheckbox),
  "Z": () => (/* reexport */ UIFileInput),
  "x4": () => (/* reexport */ UIForm),
  "u3": () => (/* reexport */ UIInput),
  "Cj": () => (/* reexport */ UISelect),
  "GJ": () => (/* reexport */ UITextArea)
});

// NAMESPACE OBJECT: ./src/core/ui/form/validators/input.ts
var input_namespaceObject = {};
__webpack_require__.r(input_namespaceObject);
__webpack_require__.d(input_namespaceObject, {
  "required": () => (required),
  "url": () => (url)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(36);
// EXTERNAL MODULE: ./src/core/ui/list/group.ts
var group = __webpack_require__(35);
// EXTERNAL MODULE: ./src/core/ui/element.ts
var ui_element = __webpack_require__(25);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 8 modules
var decorators = __webpack_require__(33);
// EXTERNAL MODULE: ./src/core/ui/icon.ts
var ui_icon = __webpack_require__(27);
;// CONCATENATED MODULE: ./src/core/ui/form/validators/input.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const required = function (input) {
    if (!(0,helpers.trim)(input.value).length) {
        input.error = 'Please fill out this field';
        return false;
    }
    return true;
};
const url = function (input) {
    if (!(0,helpers.isURL)((0,helpers.trim)(input.value))) {
        input.error = 'Please enter a web address';
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./src/core/ui/form/validators/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const select_required = function (select) {
    if (!(0,helpers.trim)(select.value).length) {
        select.error = 'Please fill out this field';
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./src/core/ui/form/validators/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





;// CONCATENATED MODULE: ./src/core/ui/form/inputs/input/input.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UIInput_1;








let UIInput = UIInput_1 = class UIInput extends ui_element/* UIElement */.u {
    constructor(jodit, options) {
        super(jodit, options);
        this.label = this.j.c.span(this.getFullElName('label'));
        this.icon = this.j.c.span(this.getFullElName('icon'));
        this.clearButton = this.j.c.span(this.getFullElName('clear'), ui_icon/* Icon.get */.J.get('cancel'));
        this.state = { ...UIInput_1.defaultState };
        this.__errorBox = this.j.c.span(this.getFullElName('error'));
        this.validators = new Set([]);
        Object.assign(this.state, options);
        if (this.state.clearButton !== undefined) {
            this.j.e
                .on(this.clearButton, 'click', (e) => {
                e.preventDefault();
                this.nativeInput.value = '';
                this.j.e.fire(this.nativeInput, 'input');
                this.focus();
            })
                .on(this.nativeInput, 'input', () => {
                this.state.clearButton = Boolean(this.value.length);
            });
            this.state.clearButton = Boolean(this.value.length);
        }
        this.j.e
            .on(this.nativeInput, 'focus blur', () => {
            this.onChangeFocus();
        })
            .on(this.nativeInput, 'input change', this.onChangeValue);
        this.onChangeState();
        this.onChangeClassName();
        this.onChangeStateValue();
    }
    className() {
        return 'UIInput';
    }
    onChangeClear() {
        if (this.state.clearButton) {
            dom/* Dom.after */.i.after(this.nativeInput, this.clearButton);
        }
        else {
            dom/* Dom.safeRemove */.i.safeRemove(this.clearButton);
        }
    }
    onChangeClassName(ignore, oldClassName) {
        oldClassName && this.container.classList.remove(oldClassName);
        this.state.className &&
            this.container.classList.add(this.state.className);
    }
    onChangeState() {
        this.name = this.state.name;
        const input = this.nativeInput, { name, icon, type, ref, required, placeholder, autocomplete, label } = this.state;
        (0,helpers.attr)(input, 'name', name);
        (0,helpers.attr)(input, 'type', type);
        (0,helpers.attr)(input, 'data-ref', ref || name);
        (0,helpers.attr)(input, 'ref', ref || name);
        (0,helpers.attr)(input, 'required', required || null);
        (0,helpers.attr)(input, 'autocomplete', !autocomplete ? 'off' : null);
        (0,helpers.attr)(input, 'placeholder', placeholder ? this.j.i18n(placeholder) : '');
        if (icon && ui_icon/* Icon.exists */.J.exists(icon)) {
            dom/* Dom.before */.i.before(input, this.icon);
            this.icon.innerHTML = ui_icon/* Icon.get */.J.get(icon);
        }
        else {
            dom/* Dom.safeRemove */.i.safeRemove(this.icon);
        }
        if (label) {
            dom/* Dom.before */.i.before(this.wrapper, this.label);
            this.label.innerText = this.j.i18n(label);
        }
        else {
            dom/* Dom.safeRemove */.i.safeRemove(this.label);
        }
        this.updateValidators();
    }
    updateValidators() {
        var _a;
        this.validators.clear();
        if (this.state.required) {
            this.validators.add(required);
        }
        (_a = this.state.validators) === null || _a === void 0 ? void 0 : _a.forEach(name => {
            const validator = input_namespaceObject[name];
            validator && this.validators.add(validator);
        });
    }
    set error(value) {
        this.setMod('has-error', Boolean(value));
        if (!value) {
            dom/* Dom.safeRemove */.i.safeRemove(this.__errorBox);
        }
        else {
            this.__errorBox.innerText = this.j.i18n(value, this.j.i18n(this.state.label || ''));
            this.container.appendChild(this.__errorBox);
        }
    }
    get value() {
        return this.nativeInput.value;
    }
    set value(value) {
        if (this.value !== value) {
            this.nativeInput.value = value;
            this.onChangeValue();
        }
    }
    onChangeStateValue() {
        this.value = this.state.value;
    }
    onChangeValue() {
        var _a, _b;
        const { value } = this;
        this.state.value = value;
        this.j.e.fire(this, 'change', value);
        (_b = (_a = this.state).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    }
    validate() {
        this.error = '';
        return (0,helpers.toArray)(this.validators).every(validator => validator(this));
    }
    createContainer(options) {
        const container = super.createContainer();
        this.wrapper = this.j.c.div(this.getFullElName('wrapper'));
        if (!this.nativeInput) {
            this.nativeInput = this.createNativeInput(options);
        }
        const { nativeInput } = this;
        nativeInput.classList.add(this.getFullElName('input'));
        this.wrapper.appendChild(nativeInput);
        container.appendChild(this.wrapper);
        (0,helpers.attr)(nativeInput, 'dir', this.j.o.direction || 'auto');
        return container;
    }
    createNativeInput(options) {
        return this.j.create.element('input');
    }
    focus() {
        this.nativeInput.focus();
    }
    get isFocused() {
        return this.nativeInput === this.j.od.activeElement;
    }
    onChangeFocus() {
        this.setMod('focused', this.isFocused);
    }
};
UIInput.defaultState = {
    className: '',
    autocomplete: true,
    name: '',
    value: '',
    icon: '',
    label: '',
    ref: '',
    type: 'text',
    placeholder: '',
    required: false,
    validators: []
};
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.clearButton')
], UIInput.prototype, "onChangeClear", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.className')
], UIInput.prototype, "onChangeClassName", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)([
        'state.name',
        'state.type',
        'state.label',
        'state.placeholder',
        'state.autocomplete',
        'state.icon'
    ]),
    (0,decorators.debounce)()
], UIInput.prototype, "onChangeState", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.value')
], UIInput.prototype, "onChangeStateValue", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], UIInput.prototype, "onChangeValue", null);
UIInput = UIInput_1 = (0,tslib_es6.__decorate)([
    decorators.component
], UIInput);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/area/area.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




let UITextArea = class UITextArea extends UIInput {
    className() {
        return 'UITextArea';
    }
    createContainer(options) {
        this.nativeInput = this.j.create.element('textarea');
        return super.createContainer(options);
    }
};
UITextArea = (0,tslib_es6.__decorate)([
    decorators.component
], UITextArea);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/checkbox/checkbox.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




let UICheckbox = class UICheckbox extends UIInput {
    className() {
        return 'UICheckbox';
    }
    render(options) {
        return this.j.c.element('label', {
            className: this.componentName
        });
    }
    constructor(jodit, options) {
        super(jodit, { ...options, type: 'checkbox' });
    }
};
UICheckbox = (0,tslib_es6.__decorate)([
    decorators.component
], UICheckbox);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/select/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var UISelect_1;






let UISelect = UISelect_1 = class UISelect extends UIInput {
    constructor(jodit, state) {
        super(jodit, state);
        this.state = { ...UISelect_1.defaultState };
        Object.assign(this.state, state);
    }
    className() {
        return 'UISelect';
    }
    createContainer(state) {
        var _a;
        const container = super.createContainer(state);
        const { j } = this, { nativeInput } = this;
        const opt = () => j.create.element('option');
        if (state.placeholder !== undefined) {
            const option = opt();
            option.value = '';
            option.text = j.i18n(state.placeholder);
            nativeInput.add(option);
        }
        (_a = state.options) === null || _a === void 0 ? void 0 : _a.forEach(element => {
            const option = opt();
            option.value = element.value.toString();
            option.text = j.i18n(element.text);
            nativeInput.add(option);
        });
        if (state.size && state.size > 0) {
            (0,helpers.attr)(nativeInput, 'size', state.size);
        }
        if (state.multiple) {
            (0,helpers.attr)(nativeInput, 'multiple', '');
        }
        return container;
    }
    createNativeInput() {
        return this.j.create.element('select');
    }
    updateValidators() {
        super.updateValidators();
        if (this.state.required) {
            this.validators.delete(required);
            this.validators.add(select_required);
        }
    }
};
UISelect.defaultState = {
    ...UIInput.defaultState,
    options: [],
    size: 1,
    multiple: false
};
UISelect = UISelect_1 = (0,tslib_es6.__decorate)([
    decorators.component
], UISelect);


// EXTERNAL MODULE: ./src/core/ui/button/index.ts + 2 modules
var ui_button = __webpack_require__(30);
;// CONCATENATED MODULE: ./src/core/ui/form/inputs/file/file.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





let UIFileInput = class UIFileInput extends UIInput {
    constructor(jodit, options) {
        super(jodit, {
            type: 'file',
            ...options
        });
        this.state = {
            ...UIInput.defaultState,
            type: 'file',
            onlyImages: true
        };
    }
    className() {
        return 'UIFileInput';
    }
    createContainer(options) {
        this.button = new ui_button/* UIButton */.y3(this.j, {
            icon: {
                name: 'plus'
            }
        });
        const { container } = this.button;
        if (!this.nativeInput) {
            this.nativeInput = this.createNativeInput(options);
        }
        const { nativeInput } = this;
        nativeInput.classList.add(this.getFullElName('input'));
        container.classList.add(this.componentName);
        container.appendChild(nativeInput);
        return container;
    }
    createNativeInput(options) {
        return this.j.create.fromHTML(`<input
			type="file"
			accept="${options.onlyImages ? 'image/*' : '*'}"
			tabindex="-1"
			dir="auto"
			multiple=""
		/>`);
    }
};
UIFileInput = (0,tslib_es6.__decorate)([
    decorators.component
], UIFileInput);


;// CONCATENATED MODULE: ./src/core/ui/form/inputs/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






// EXTERNAL MODULE: ./src/core/helpers/utils/index.ts + 6 modules
var utils = __webpack_require__(9);
;// CONCATENATED MODULE: ./src/core/ui/form/form.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





let UIForm = class UIForm extends group/* UIGroup */.q {
    className() {
        return 'UIForm';
    }
    submit() {
        this.j.e.fire(this.container, 'submit');
    }
    validate() {
        const inputs = this.allChildren.filter(elm => elm instanceof UIInput);
        for (const input of inputs) {
            if (!input.validate()) {
                return false;
            }
        }
        const selects = this.allChildren.filter(elm => elm instanceof UISelect);
        for (const select of selects) {
            if (!select.validate()) {
                return false;
            }
        }
        return true;
    }
    onSubmit(handler) {
        this.j.e.on(this.container, 'submit', () => {
            const inputs = this.allChildren.filter(elm => elm instanceof UIInput);
            if (!this.validate()) {
                return false;
            }
            handler(inputs.reduce((res, item) => {
                res[item.state.name] = item.value;
                return res;
            }, {}));
            return false;
        });
    }
    createContainer() {
        const form = this.j.c.element('form');
        form.classList.add(this.componentName);
        (0,utils/* attr */.Lj)(form, 'dir', this.j.o.direction || 'auto');
        return form;
    }
};
UIForm = (0,tslib_es6.__decorate)([
    decorators.component
], UIForm);


;// CONCATENATED MODULE: ./src/core/ui/form/block/block.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





let UIBlock = class UIBlock extends group/* UIGroup */.q {
    constructor(jodit, elements, options = {
        align: 'left'
    }) {
        super(jodit, elements);
        this.options = options;
        this.setMod('align', this.options.align || 'left');
        this.setMod('width', this.options.width || '');
        this.options.mod && this.setMod(this.options.mod, true);
        (0,utils/* attr */.Lj)(this.container, 'data-ref', options.ref);
        (0,utils/* attr */.Lj)(this.container, 'ref', options.ref);
    }
    className() {
        return 'UIBlock';
    }
};
UIBlock = (0,tslib_es6.__decorate)([
    decorators.component
], UIBlock);


;// CONCATENATED MODULE: ./src/core/ui/form/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





/***/ }),
/* 41 */
/***/ ((module) => {

/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

module.exports = {
	'Type something': 'Start writing...',
	pencil: 'Edit',
	Quadrate: 'Square'
};


/***/ }),
/* 42 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M36 4h-24c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm-24 4h10v16l-5-3-5 3v-16z\"/> </svg>"

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "YW": () => (/* reexport */ ColorPickerWidget),
  "ov": () => (/* reexport */ FileSelectorWidget),
  "IL": () => (/* reexport */ TabsWidget)
});

// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 1 modules
var ui = __webpack_require__(24);
// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
;// CONCATENATED MODULE: ./src/modules/widget/color-picker/color-picker.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const ColorPickerWidget = (editor, callback, coldColor) => {
    const valueHex = (0,helpers.normalizeColor)(coldColor), form = editor.c.div('jodit-color-picker'), iconPalette = editor.o.textIcons
        ? `<span>${editor.i18n('palette')}</span>`
        : ui/* Icon.get */.JO.get('palette'), eachColor = (colors) => {
        const stack = [];
        if ((0,helpers.isPlainObject)(colors)) {
            Object.keys(colors).forEach(key => {
                stack.push('<div class="jodit-color-picker__group jodit-color-picker__group-' +
                    key +
                    '">');
                stack.push(eachColor(colors[key]));
                stack.push('</div>');
            });
        }
        else if ((0,helpers.isArray)(colors)) {
            colors.forEach(color => {
                stack.push('<a ' +
                    (valueHex === color
                        ? ' class="jodit_active" '
                        : '') +
                    ' title="' +
                    color +
                    '" style="background-color:' +
                    color +
                    '" data-color="' +
                    color +
                    '" href="javascript:void(0)"></a>');
            });
        }
        return stack.join('');
    };
    form.appendChild(editor.c.fromHTML('<div class="jodit-color-picker__groups">' +
        eachColor(editor.o.colors) +
        '</div>'));
    form.appendChild(editor.c.fromHTML('<div data-ref="extra" class="jodit-color-picker__extra"></div>'));
    const { extra } = (0,helpers.refs)(form);
    if (editor.o.showBrowserColorPicker && (0,helpers.hasBrowserColorPicker)()) {
        extra.appendChild(editor.c.fromHTML('<div class="jodit-color-picker__native">' +
            iconPalette +
            '<input type="color" value="#ffffff"/>' +
            '</div>'));
        editor.e.on(form, 'change', (e) => {
            e.stopPropagation();
            const target = e.target;
            if (!target || !target.tagName || !dom/* Dom.isTag */.i.isTag(target, 'input')) {
                return;
            }
            const color = target.value || '';
            if ((0,helpers.isFunction)(callback)) {
                callback(color);
            }
            e.preventDefault();
        });
    }
    editor.e.on(form, 'mousedown touchend', (e) => {
        e.stopPropagation();
        let target = e.target;
        if ((!target ||
            !target.tagName ||
            dom/* Dom.isTag */.i.isTag(target, 'svg') ||
            dom/* Dom.isTag */.i.isTag(target, 'path')) &&
            target.parentNode) {
            target = dom/* Dom.closest */.i.closest(target.parentNode, 'a', editor.editor);
        }
        if (!dom/* Dom.isTag */.i.isTag(target, 'a')) {
            return;
        }
        const color = (0,helpers.attr)(target, '-color') || '';
        if (callback && typeof callback === 'function') {
            callback(color);
        }
        e.preventDefault();
    });
    editor.e.fire('afterGenerateColorPicker', form, extra, callback, valueHex);
    return form;
};

;// CONCATENATED MODULE: ./src/modules/widget/tabs/tabs.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const TabsWidget = (editor, tabs, state) => {
    const box = editor.c.div('jodit-tabs'), tabBox = editor.c.div('jodit-tabs__wrapper'), buttons = editor.c.div('jodit-tabs__buttons'), nameToTab = {}, buttonList = [];
    let firstTab = '', tabcount = 0;
    box.appendChild(buttons);
    box.appendChild(tabBox);
    tabs.forEach(({ icon, name, content }) => {
        const tab = editor.c.div('jodit-tab'), button = (0,ui/* Button */.zx)(editor, icon || name, name);
        if (!firstTab) {
            firstTab = name;
        }
        buttons.appendChild(button.container);
        buttonList.push(button);
        button.container.classList.add('jodit-tabs__button', 'jodit-tabs__button_columns_' + tabs.length);
        if (!(0,helpers.isFunction)(content)) {
            tab.appendChild(content);
        }
        else {
            tab.appendChild(editor.c.div('jodit-tab_empty'));
        }
        tabBox.appendChild(tab);
        button.onAction(() => {
            buttonList.forEach(b => {
                b.state.activated = false;
            });
            (0,helpers.$$)('.jodit-tab', tabBox).forEach(a => {
                a.classList.remove('jodit-tab_active');
            });
            button.state.activated = true;
            tab.classList.add('jodit-tab_active');
            if ((0,helpers.isFunction)(content)) {
                content.call(editor);
            }
            if (state) {
                state.__activeTab = name;
            }
            return false;
        });
        nameToTab[name] = {
            button,
            tab
        };
        tabcount += 1;
    });
    if (!tabcount) {
        return box;
    }
    (0,helpers.$$)('a', buttons).forEach(a => {
        a.style.width = (100 / tabcount).toFixed(10) + '%';
    });
    const tab = !state || !state.__activeTab || !nameToTab[state.__activeTab]
        ? firstTab
        : state.__activeTab;
    nameToTab[tab].button.state.activated = true;
    nameToTab[tab].tab.classList.add('jodit-tab_active');
    return box;
};

;// CONCATENATED MODULE: ./src/modules/widget/file-selector/file-selector.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const FileSelectorWidget = (editor, callbacks, elm, close, isImage = true) => {
    let currentImage;
    const tabs = [];
    if (callbacks.upload &&
        editor.o.uploader &&
        (editor.o.uploader.url || editor.o.uploader.insertImageAsBase64URI)) {
        const dragBox = editor.c.fromHTML('<div class="jodit-drag-and-drop__file-box">' +
            `<strong>${editor.i18n(isImage ? 'Drop image' : 'Drop file')}</strong>` +
            `<span><br>${editor.i18n('or click')}</span>` +
            `<input type="file" accept="${isImage ? 'image/*' : '*'}" tabindex="-1" dir="auto" multiple=""/>` +
            '</div>');
        editor.uploader.bind(dragBox, (resp) => {
            const handler = (0,helpers.isFunction)(callbacks.upload)
                ? callbacks.upload
                : editor.o.uploader.defaultHandlerSuccess;
            if ((0,helpers.isFunction)(handler)) {
                handler.call(editor, resp);
            }
            editor.e.fire('closeAllPopups');
        }, (error) => {
            editor.e.fire('errorMessage', error.message);
            editor.e.fire('closeAllPopups');
        });
        tabs.push({
            icon: 'upload',
            name: 'Upload',
            content: dragBox
        });
    }
    if (callbacks.filebrowser) {
        if (editor.o.filebrowser.ajax.url || editor.o.filebrowser.items.url) {
            tabs.push({
                icon: 'folder',
                name: 'Browse',
                content: () => {
                    close && close();
                    if (callbacks.filebrowser) {
                        editor.filebrowser.open(callbacks.filebrowser, isImage);
                    }
                }
            });
        }
    }
    if (callbacks.url) {
        const button = new ui/* UIButton */.y3(editor, {
            type: 'submit',
            status: 'primary',
            text: 'Insert'
        }), form = new ui/* UIForm */.x4(editor, [
            new ui/* UIInput */.u3(editor, {
                required: true,
                label: 'URL',
                name: 'url',
                type: 'url',
                placeholder: 'https://'
            }),
            new ui/* UIInput */.u3(editor, {
                name: 'text',
                label: 'Alternative text'
            }),
            new ui/* UIBlock */.eC(editor, [button])
        ]);
        currentImage = null;
        if (elm &&
            !dom/* Dom.isText */.i.isText(elm) &&
            (dom/* Dom.isTag */.i.isTag(elm, 'img') || (0,helpers.$$)('img', elm).length)) {
            currentImage = elm.tagName === 'IMG' ? elm : (0,helpers.$$)('img', elm)[0];
            (0,helpers.val)(form.container, 'input[name=url]', (0,helpers.attr)(currentImage, 'src'));
            (0,helpers.val)(form.container, 'input[name=text]', (0,helpers.attr)(currentImage, 'alt'));
            button.state.text = 'Update';
        }
        if (elm && dom/* Dom.isTag */.i.isTag(elm, 'a')) {
            (0,helpers.val)(form.container, 'input[name=url]', (0,helpers.attr)(elm, 'href'));
            (0,helpers.val)(form.container, 'input[name=text]', (0,helpers.attr)(elm, 'title'));
            button.state.text = 'Update';
        }
        form.onSubmit(data => {
            if ((0,helpers.isFunction)(callbacks.url)) {
                callbacks.url.call(editor, data.url, data.text);
            }
        });
        tabs.push({
            icon: 'link',
            name: 'URL',
            content: form.container
        });
    }
    return TabsWidget(editor, tabs);
};

;// CONCATENATED MODULE: ./src/modules/widget/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ hAlignElement)
/* harmony export */ });
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const hAlignElement = (image, align) => {
    if (align && align !== 'normal') {
        if (align !== 'center') {
            (0,_core_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(image, 'float', align);
            (0,_core_helpers__WEBPACK_IMPORTED_MODULE_0__.clearCenterAlign)(image);
        }
        else {
            (0,_core_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(image, {
                float: '',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            });
        }
    }
    else {
        if ((0,_core_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(image, 'float') &&
            ['right', 'left'].indexOf((0,_core_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(image, 'float').toString().toLowerCase()) !== -1) {
            (0,_core_helpers__WEBPACK_IMPORTED_MODULE_0__.css)(image, 'float', '');
        }
        (0,_core_helpers__WEBPACK_IMPORTED_MODULE_0__.clearCenterAlign)(image);
    }
};


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: 'eye',
        tooltip: 'Open link',
        exec: (editor, current) => {
            const href = (0,_core_helpers_utils__WEBPACK_IMPORTED_MODULE_0__/* .attr */ .Lj)(current, 'href');
            if (current && href) {
                editor.ow.open(href);
            }
        }
    },
    {
        name: 'link',
        tooltip: 'Edit link',
        icon: 'pencil'
    },
    'unlink',
    'brush',
    'file'
]);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ align),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _core_helpers_checker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _image_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const align = {
    name: 'left',
    childTemplate: (_, __, value) => value,
    list: ['Left', 'Right', 'Center', 'Normal'],
    exec: (editor, elm, { control }) => {
        if (!_core_dom__WEBPACK_IMPORTED_MODULE_0__/* .Dom.isTag */ .i.isTag(elm, ['img', 'jodit', 'jodit-media'])) {
            return;
        }
        const command = (control.args && (0,_core_helpers_checker__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(control.args[0])
            ? control.args[0].toLowerCase()
            : '');
        if (!command) {
            return false;
        }
        (0,_image_helpers__WEBPACK_IMPORTED_MODULE_3__/* .hAlignElement */ .z)(elm, command);
        if (_core_dom__WEBPACK_IMPORTED_MODULE_0__/* .Dom.isTag */ .i.isTag(elm, ['jodit', 'jodit-media']) && elm.firstElementChild) {
            (0,_image_helpers__WEBPACK_IMPORTED_MODULE_3__/* .hAlignElement */ .z)(elm.firstElementChild, command);
        }
        editor.setEditorValue();
        editor.e.fire('recalcPositionPopup');
    },
    tooltip: 'Horizontal align'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: 'delete',
        icon: 'bin',
        tooltip: 'Delete',
        exec: (editor, image) => {
            image && editor.s.removeNode(image);
        }
    },
    {
        name: 'pencil',
        exec(editor, current) {
            const tagName = current.tagName.toLowerCase();
            if (tagName === 'img') {
                editor.e.fire('openImageProperties', current);
            }
        },
        tooltip: 'Edit'
    },
    {
        name: 'valign',
        list: ['Top', 'Middle', 'Bottom', 'Normal'],
        tooltip: 'Vertical align',
        exec: (editor, image, { control }) => {
            if (!_core_dom__WEBPACK_IMPORTED_MODULE_0__/* .Dom.isTag */ .i.isTag(image, 'img')) {
                return;
            }
            const command = control.args && (0,_core_helpers_checker__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(control.args[0])
                ? control.args[0].toLowerCase()
                : '';
            if (!command) {
                return false;
            }
            (0,_core_helpers__WEBPACK_IMPORTED_MODULE_2__.css)(image, 'vertical-align', command === 'normal' ? '' : command);
            editor.e.fire('recalcPositionPopup');
        }
    },
    align
]);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _core_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _modules_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const cmd = (control) => control.args && (0,_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(control.args[0])
    ? control.args[0].toLowerCase()
    : '';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: 'brush',
        popup: (editor) => {
            if (!(0,_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__/* .isJoditObject */ .Zu)(editor)) {
                return;
            }
            const selected = editor
                .getInstance('Table', editor.o)
                .getAllSelectedCells();
            if (!selected.length) {
                return false;
            }
            const color = (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(selected[0], 'color'), bg_color = (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(selected[0], 'background-color'), br_color = (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(selected[0], 'border-color'), $bg = (0,_modules_widget__WEBPACK_IMPORTED_MODULE_2__/* .ColorPickerWidget */ .YW)(editor, (value) => {
                selected.forEach((cell) => {
                    (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(cell, 'background-color', value);
                });
                editor.setEditorValue();
            }, bg_color), $cl = (0,_modules_widget__WEBPACK_IMPORTED_MODULE_2__/* .ColorPickerWidget */ .YW)(editor, (value) => {
                selected.forEach((cell) => {
                    (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(cell, 'color', value);
                });
                editor.setEditorValue();
            }, color);
            const $br = (0,_modules_widget__WEBPACK_IMPORTED_MODULE_2__/* .ColorPickerWidget */ .YW)(editor, (value) => {
                selected.forEach((cell) => {
                    (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(cell, 'border-color', value);
                });
                editor.setEditorValue();
            }, br_color);
            return (0,_modules_widget__WEBPACK_IMPORTED_MODULE_2__/* .TabsWidget */ .IL)(editor, [
                { name: 'Background', content: $bg },
                { name: 'Text', content: $cl },
                { name: 'Border', content: $br }
            ]);
        },
        tooltip: 'Background'
    },
    {
        name: 'valign',
        list: ['Top', 'Middle', 'Bottom', 'Normal'],
        childTemplate: (_, __, value) => value,
        exec: (editor, table, { control }) => {
            const command = cmd(control);
            editor
                .getInstance('Table', editor.o)
                .getAllSelectedCells()
                .forEach((cell) => {
                (0,_core_helpers__WEBPACK_IMPORTED_MODULE_1__.css)(cell, 'vertical-align', command === 'normal' ? '' : command);
            });
        },
        tooltip: 'Vertical align'
    },
    {
        name: 'splitv',
        list: {
            tablesplitv: 'Split vertical',
            tablesplitg: 'Split horizontal'
        },
        tooltip: 'Split'
    },
    {
        name: 'align',
        icon: 'left'
    },
    '\n',
    {
        name: 'merge',
        command: 'tablemerge',
        tooltip: 'Merge'
    },
    {
        name: 'addcolumn',
        list: {
            tableaddcolumnbefore: 'Insert column before',
            tableaddcolumnafter: 'Insert column after'
        },
        exec: (editor, table, { control }) => {
            if (!(0,_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__/* .isJoditObject */ .Zu)(editor)) {
                return;
            }
            const command = cmd(control);
            editor.execCommand(command, false, table);
        },
        tooltip: 'Add column'
    },
    {
        name: 'addrow',
        list: {
            tableaddrowbefore: 'Insert row above',
            tableaddrowafter: 'Insert row below'
        },
        exec: (editor, table, { control }) => {
            if (!(0,_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__/* .isJoditObject */ .Zu)(editor)) {
                return;
            }
            const command = cmd(control);
            editor.execCommand(command, false, table);
        },
        tooltip: 'Add row'
    },
    {
        name: 'delete',
        icon: 'bin',
        list: {
            tablebin: 'Delete table',
            tablebinrow: 'Delete row',
            tablebincolumn: 'Delete column',
            tableempty: 'Empty cell'
        },
        exec: (editor, table, { control }) => {
            if (!(0,_core_helpers_checker__WEBPACK_IMPORTED_MODULE_0__/* .isJoditObject */ .Zu)(editor)) {
                return;
            }
            const command = cmd(control);
            editor.execCommand(command, false, table);
            editor.e.fire('hidePopup');
        },
        tooltip: 'Delete'
    }
]);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: 'bin',
        tooltip: 'Delete',
        exec: (editor, image) => {
            image && editor.s.removeNode(image);
        }
    },
    _img__WEBPACK_IMPORTED_MODULE_0__/* .align */ .A
]);


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z\"/> </svg>"

/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 18.151 18.151\" xmlns=\"http://www.w3.org/2000/svg\"> <g> <path stroke-width=\"0\" d=\"M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z\"/> <path stroke-width=\"0\" d=\"M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z\"/> <polygon stroke-width=\"0\" points=\"11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 \"/> </g> </svg>"

/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 432 432\"> <g> <polygon points=\"203.688,96 0,96 0,144 155.688,144 \"/> <polygon points=\"155.719,288 0,288 0,336 203.719,336 \"/> <path d=\"M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z\"/> <polygon points=\"232,176 232,96 112,216 232,336 232,256 432,256 432,176\"/> </g> </svg>"

/***/ }),
/* 52 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z\"/> </svg>"

/***/ }),
/* 53 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z\"/> </svg>"

/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z\"/> </svg>"

/***/ }),
/* 55 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z\"/> </svg>"

/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z\"/> </svg>"

/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z\"/> </svg>"

/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z\"/> </svg>"

/***/ }),
/* 59 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z\"/> </svg>"

/***/ }),
/* 60 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z\"/> </svg>"

/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z\"/> </svg>"

/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"> <g stroke=\"none\" stroke-width=\"1\"> <path d=\"M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z\"/> </g> </svg>"

/***/ }),
/* 63 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z\"/> </svg>"

/***/ }),
/* 64 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z\"/> </svg>"

/***/ }),
/* 65 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z\"/> </svg>"

/***/ }),
/* 66 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>"

/***/ }),
/* 67 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 10 10\"> <path d=\"M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z\"/> </svg>"

/***/ }),
/* 68 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 16 16\"> <path stroke-width=\"0\" d=\"M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z\"/> </svg>"

/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z\"/> </svg>"

/***/ }),
/* 70 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M24.89,6.61H22.31V4.47A2.47,2.47,0,0,0,19.84,2H6.78A2.47,2.47,0,0,0,4.31,4.47V22.92a2.47,2.47,0,0,0,2.47,2.47H9.69V27.2a2.8,2.8,0,0,0,2.8,2.8h12.4a2.8,2.8,0,0,0,2.8-2.8V9.41A2.8,2.8,0,0,0,24.89,6.61ZM6.78,23.52a.61.61,0,0,1-.61-.6V4.47a.61.61,0,0,1,.61-.6H19.84a.61.61,0,0,1,.61.6V6.61h-8a2.8,2.8,0,0,0-2.8,2.8V23.52Zm19,3.68a.94.94,0,0,1-.94.93H12.49a.94.94,0,0,1-.94-.93V9.41a.94.94,0,0,1,.94-.93h12.4a.94.94,0,0,1,.94.93Z\"/> <path d=\"M23.49,13.53h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z\"/> <path d=\"M23.49,17.37h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z\"/> <path d=\"M23.49,21.22h-9.6a.93.93,0,1,0,0,1.86h9.6a.93.93,0,1,0,0-1.86Z\"/> </svg>"

/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z\"/> </svg>"

/***/ }),
/* 72 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z\"/> </svg>"

/***/ }),
/* 73 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 24 24\" > <circle cx=\"12\" cy=\"12\" r=\"2.2\"/> <circle cx=\"12\" cy=\"5\" r=\"2.2\"/> <circle cx=\"12\" cy=\"19\" r=\"2.2\"/> </svg>"

/***/ }),
/* 74 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 128 128\" xml:space=\"preserve\"> <polygon points=\"112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125\"/> </svg>"

/***/ }),
/* 75 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z\"/> </svg>"

/***/ }),
/* 76 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z\"/> </svg>"

/***/ }),
/* 77 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z\"/> </svg>"

/***/ }),
/* 78 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z\"/> </svg>"

/***/ }),
/* 79 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z\"/> </svg>"

/***/ }),
/* 80 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z\"/> </svg>"

/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 24 24\"> <path stroke-width=\"0\" d=\"M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z\"/> </svg>"

/***/ }),
/* 82 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z\"/> </svg>"

/***/ }),
/* 83 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z\"/> </svg>"

/***/ }),
/* 84 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z\"/> </svg>"

/***/ }),
/* 85 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z\"/> </svg>"

/***/ }),
/* 86 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z\"/> </svg>"

/***/ }),
/* 87 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z\"/> </svg>"

/***/ }),
/* 88 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z\"/> </svg>"

/***/ }),
/* 89 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z\"/> </svg>"

/***/ }),
/* 90 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z\"/></svg>"

/***/ }),
/* 91 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z\"/></svg>"

/***/ }),
/* 92 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 312 312\"> <g transform=\"translate(0.000000,312.000000) scale(0.100000,-0.100000)\" stroke=\"none\"> <path d=\"M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z\"/> <path d=\"M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z\"/> <path d=\"M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z\"/> <path d=\"M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z\"/> </g> </svg>"

/***/ }),
/* 93 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 32 32\"> <path d=\"M27 4l-15 15-7-7-5 5 12 12 20-20z\"/> </svg>"

/***/ }),
/* 94 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path stroke-width=\"0\" d=\"M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/> </svg>"

/***/ }),
/* 95 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 270 270\"> <path d=\"m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z\"/> </svg>"

/***/ }),
/* 96 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z\"/> </svg>"

/***/ }),
/* 97 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' x=\"0px\" y=\"0px\" viewBox=\"0 0 459 459\"> <g> <path d=\"M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5 c-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z\" /> </g> </svg>"

/***/ }),
/* 98 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z\"/></svg>"

/***/ }),
/* 99 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path stroke-width=\"0\" d=\"M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z\"/> </svg>"

/***/ }),
/* 100 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z\"/></svg>"

/***/ }),
/* 101 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"><path d=\"M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z\"/></svg>"

/***/ }),
/* 102 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z\"/> </svg>"

/***/ }),
/* 103 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z\"/> </svg>"

/***/ }),
/* 104 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 24 24\"> <g transform=\"translate(-251.000000, -443.000000)\"> <g transform=\"translate(215.000000, 119.000000)\"/> <path d=\"M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z\"/> </g> </svg>"

/***/ }),
/* 105 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z\"/> </svg>"

/***/ }),
/* 106 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z\"/> </svg>"

/***/ }),
/* 107 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z\"/> </svg>"

/***/ }),
/* 108 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 500 500\" xmlns=\"http://www.w3.org/2000/svg\"> <path clip-rule=\"evenodd\" d=\"M306.39,154.09c19.628,4.543,35.244,21.259,39.787,39.523 c1.551,8.54,8.998,14.989,17.904,14.989c9.991,0,18.168-8.175,18.168-18.17c0-13.083-10.991-32.98-25.985-47.881 c-14.719-14.537-32.252-24.802-46.695-24.802c-9.991,0-18.172,8.45-18.172,18.446C291.396,145.094,297.847,152.546,306.39,154.09z M56.629,392.312c-14.09,14.08-14.09,36.979,0,51.059c14.08,14.092,36.981,14.092,50.965,0l104.392-104.303 c24.347,15.181,53.062,23.991,83.953,23.991c87.857,0,158.995-71.142,158.995-158.999c0-87.854-71.138-158.995-158.995-158.995 c-87.856,0-158.995,71.141-158.995,158.995c0,30.802,8.819,59.606,23.992,83.953L56.629,392.312z M182.371,204.06 c0-62.687,50.875-113.568,113.568-113.568s113.569,50.881,113.569,113.568c0,62.694-50.876,113.569-113.569,113.569 S182.371,266.754,182.371,204.06z\" fill-rule=\"evenodd\"/> </svg>"

/***/ }),
/* 109 */
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"> <path stroke=\"null\" d=\"m42.276011,26.302547c0.098397,-0.76605 0.172194,-1.54407 0.172194,-2.33406s-0.073797,-1.56801 -0.172194,-2.33406l5.202718,-3.961917c0.467384,-0.359086 0.602679,-1.005441 0.29519,-1.532101l-4.919828,-8.29489c-0.307489,-0.51469 -0.947067,-0.730142 -1.500548,-0.51469l-6.125186,2.405877c-1.266856,-0.945594 -2.656707,-1.747553 -4.157255,-2.357999l-0.922468,-6.343855c-0.110696,-0.562568 -0.614979,-1.005441 -1.229957,-1.005441l-9.839656,0c-0.614979,0 -1.119261,0.442873 -1.217657,1.005441l-0.922468,6.343855c-1.500548,0.610446 -2.890399,1.400436 -4.157255,2.357999l-6.125186,-2.405877c-0.553481,-0.203482 -1.193058,0 -1.500548,0.51469l-4.919828,8.29489c-0.307489,0.51469 -0.172194,1.161045 0.29519,1.532101l5.190419,3.961917c-0.098397,0.76605 -0.172194,1.54407 -0.172194,2.33406s0.073797,1.56801 0.172194,2.33406l-5.190419,3.961917c-0.467384,0.359086 -0.602679,1.005441 -0.29519,1.532101l4.919828,8.29489c0.307489,0.51469 0.947067,0.730142 1.500548,0.51469l6.125186,-2.405877c1.266856,0.945594 2.656707,1.747553 4.157255,2.357999l0.922468,6.343855c0.098397,0.562568 0.602679,1.005441 1.217657,1.005441l9.839656,0c0.614979,0 1.119261,-0.442873 1.217657,-1.005441l0.922468,-6.343855c1.500548,-0.610446 2.890399,-1.400436 4.157255,-2.357999l6.125186,2.405877c0.553481,0.203482 1.193058,0 1.500548,-0.51469l4.919828,-8.29489c0.307489,-0.51469 0.172194,-1.161045 -0.29519,-1.532101l-5.190419,-3.961917zm-18.277162,6.044617c-4.759934,0 -8.609699,-3.746465 -8.609699,-8.378677s3.849766,-8.378677 8.609699,-8.378677s8.609699,3.746465 8.609699,8.378677s-3.849766,8.378677 -8.609699,8.378677z\"/> </svg>"

/***/ }),
/* 110 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 18 18\"> <g fill-rule=\"evenodd\" stroke=\"none\" stroke-width=\"1\"> <g transform=\"translate(-381.000000, -381.000000)\"> <g transform=\"translate(381.000000, 381.000000)\"> <path d=\"M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z\"/> </g> </g> </g> </svg>"

/***/ }),
/* 111 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z\"/> </svg>"

/***/ }),
/* 112 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z\"/> </svg>"

/***/ }),
/* 113 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 48 48\"> <path d=\"M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z\"/> <path d=\"M0 0h48v48h-48z\" fill=\"none\"/> </svg>"

/***/ }),
/* 114 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 48 48\"> <path d=\"M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z\"/> <path d=\"M0 0h48v48h-48z\" fill=\"none\"/> </svg>"

/***/ }),
/* 115 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z\"/> </svg>"

/***/ }),
/* 116 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z\"/> </svg>"

/***/ }),
/* 117 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z\"/> </svg>"

/***/ }),
/* 118 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z\"/> </svg>"

/***/ }),
/* 119 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z\"/> </svg>"

/***/ }),
/* 120 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z\"/> </svg>"

/***/ }),
/* 121 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path stroke-width=\"0\" d=\"M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z\"/> </svg>"

/***/ }),
/* 122 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z\"/> </svg>"

/***/ }),
/* 123 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z\"/> </svg>"

/***/ }),
/* 124 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z\"/> </svg>"

/***/ }),
/* 125 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z\"/> </svg>"

/***/ }),
/* 126 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z\"/> </svg>"

/***/ }),
/* 127 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z\"/> </svg>"

/***/ }),
/* 128 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z\"/> </svg>"

/***/ }),
/* 129 */
/***/ ((module) => {

module.exports = "<svg xmlns='http://www.w3.org/2000/svg' viewBox=\"0 0 1792 1792\"> <path d=\"M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z\"/> </svg>"

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Jodit": () => (/* binding */ src_Jodit)
});

// NAMESPACE OBJECT: ./src/modules/index.ts
var modules_namespaceObject = {};
__webpack_require__.r(modules_namespaceObject);
__webpack_require__.d(modules_namespaceObject, {
  "Ajax": () => (Ajax),
  "Alert": () => (Alert),
  "Async": () => (Async),
  "Component": () => (component/* Component */.wA),
  "Confirm": () => (Confirm),
  "ContextMenu": () => (ContextMenu),
  "Create": () => (Create),
  "Dialog": () => (Dialog),
  "Dom": () => (dom/* Dom */.i),
  "EventHandlersStore": () => (events/* EventHandlersStore */.DG),
  "EventsNative": () => (events/* EventsNative */.ng),
  "FileBrowser": () => (FileBrowser),
  "Helpers": () => (helpers),
  "Icon": () => (ui/* Icon */.JO),
  "ImageEditor": () => (ImageEditor),
  "ObserveObject": () => (events/* ObserveObject */.P5),
  "Observer": () => (Observer),
  "Plugin": () => (Plugin),
  "PluginSystem": () => (plugin_system/* PluginSystem */.h),
  "Popup": () => (ui/* Popup */.GI),
  "ProgressBar": () => (ui/* ProgressBar */.ko),
  "Prompt": () => (Prompt),
  "STATUSES": () => (component/* STATUSES */.n$),
  "Select": () => (Select),
  "Snapshot": () => (Snapshot),
  "StatusBar": () => (StatusBar),
  "Style": () => (Style),
  "Table": () => (Table),
  "ToolbarButton": () => (ToolbarButton),
  "ToolbarCollection": () => (ToolbarCollection),
  "ToolbarContent": () => (ToolbarContent),
  "ToolbarEditorCollection": () => (ToolbarEditorCollection),
  "UIBlock": () => (ui/* UIBlock */.eC),
  "UIButton": () => (ui/* UIButton */.y3),
  "UICheckbox": () => (ui/* UICheckbox */.mA),
  "UIElement": () => (ui/* UIElement */.u1),
  "UIForm": () => (ui/* UIForm */.x4),
  "UIGroup": () => (ui/* UIGroup */.qe),
  "UIInput": () => (ui/* UIInput */.u3),
  "UIList": () => (ui/* UIList */.bz),
  "UISeparator": () => (ui/* UISeparator */.lU),
  "UITextArea": () => (ui/* UITextArea */.GJ),
  "Uploader": () => (Uploader),
  "View": () => (View),
  "ViewComponent": () => (component/* ViewComponent */.Hr),
  "ViewWithToolbar": () => (ViewWithToolbar),
  "defaultNameSpace": () => (events/* defaultNameSpace */.rO)
});

// NAMESPACE OBJECT: ./src/plugins/index.ts
var plugins_namespaceObject = {};
__webpack_require__.r(plugins_namespaceObject);
__webpack_require__.d(plugins_namespaceObject, {
  "Delete": () => (Delete),
  "DragAndDrop": () => (DragAndDrop),
  "DragAndDropElement": () => (DragAndDropElement),
  "WrapTextNodes": () => (WrapTextNodes),
  "about": () => (about),
  "addNewLine": () => (addNewLine),
  "bold": () => (bold),
  "classSpan": () => (classSpan),
  "cleanHtml": () => (cleanHtml),
  "clipboard": () => (clipboard),
  "color": () => (color),
  "copyFormat": () => (copyFormat),
  "enter": () => (enter),
  "errorMessages": () => (errorMessages),
  "file": () => (file),
  "focus": () => (focus_focus),
  "font": () => (font),
  "formatBlock": () => (formatBlock),
  "fullsize": () => (fullsize),
  "hotkeys": () => (hotkeys),
  "hr": () => (hr),
  "iframe": () => (iframe),
  "image": () => (image_image),
  "imageProcessor": () => (imageProcessor),
  "imageProperties": () => (imageProperties),
  "indent": () => (indent),
  "inlinePopup": () => (inlinePopup),
  "justify": () => (justify),
  "limit": () => (limit),
  "link": () => (link_link),
  "media": () => (media),
  "mobile": () => (mobile),
  "orderedList": () => (orderedList),
  "paste": () => (paste),
  "pasteStorage": () => (pasteStorage),
  "placeholder": () => (placeholder),
  "preview": () => (preview),
  "print": () => (print),
  "redoUndo": () => (redoUndo),
  "resizeCells": () => (resizeCells),
  "resizeHandler": () => (resizeHandler),
  "resizer": () => (resizer),
  "search": () => (search),
  "select": () => (select_select),
  "selectCells": () => (selectCells),
  "size": () => (size),
  "source": () => (source),
  "stat": () => (stat),
  "sticky": () => (sticky),
  "symbols": () => (symbols),
  "table": () => (table),
  "tableKeyboardNavigation": () => (tableKeyboardNavigation),
  "tooltip": () => (tooltip),
  "video": () => (video),
  "xpath": () => (xpath)
});

// NAMESPACE OBJECT: ./src/styles/icons/index.ts
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, {
  "about": () => (icons_about),
  "addcolumn": () => (addcolumn),
  "addrow": () => (addrow),
  "angle_down": () => (angle_down),
  "angle_left": () => (angle_left),
  "angle_right": () => (angle_right),
  "angle_up": () => (angle_up),
  "arrows_alt": () => (arrows_alt),
  "arrows_h": () => (arrows_h),
  "attachment": () => (attachment),
  "bin": () => (bin),
  "bold": () => (icons_bold),
  "brush": () => (brush),
  "cancel": () => (cancel),
  "center": () => (center),
  "chain_broken": () => (chain_broken),
  "check": () => (check),
  "check_square": () => (check_square),
  "chevron": () => (chevron),
  "copy": () => (copy),
  "copyformat": () => (copyformat),
  "crop": () => (crop),
  "cut": () => (cut),
  "dedent": () => (dedent),
  "dots": () => (dots),
  "enter": () => (icons_enter),
  "eraser": () => (eraser),
  "eye": () => (eye),
  "file": () => (icons_file),
  "folder": () => (folder),
  "font": () => (icons_font),
  "fontsize": () => (fontsize),
  "fullsize": () => (icons_fullsize),
  "hr": () => (icons_hr),
  "image": () => (icons_image),
  "indent": () => (icons_indent),
  "info_circle": () => (info_circle),
  "italic": () => (italic),
  "justify": () => (icons_justify),
  "left": () => (left),
  "link": () => (icons_link),
  "lock": () => (lock),
  "menu": () => (menu),
  "merge": () => (merge),
  "ok": () => (ok),
  "ol": () => (ol),
  "omega": () => (omega),
  "outdent": () => (outdent),
  "palette": () => (palette),
  "paragraph": () => (paragraph),
  "paste": () => (icons_paste),
  "pencil": () => (pencil),
  "plus": () => (plus),
  "print": () => (icons_print),
  "redo": () => (redo),
  "resize": () => (resize),
  "resizer": () => (icons_resizer),
  "right": () => (right),
  "save": () => (save),
  "search": () => (icons_search),
  "select_all": () => (select_all),
  "settings": () => (settings),
  "shrink": () => (shrink),
  "source": () => (icons_source),
  "splitg": () => (splitg),
  "splitv": () => (splitv),
  "strikethrough": () => (strikethrough),
  "subscript": () => (subscript),
  "superscript": () => (superscript),
  "table": () => (icons_table),
  "th": () => (th),
  "th_list": () => (th_list),
  "ul": () => (ul),
  "underline": () => (underline),
  "undo": () => (undo),
  "unlink": () => (unlink),
  "unlock": () => (unlock),
  "update": () => (update),
  "upload": () => (upload),
  "valign": () => (valign),
  "video": () => (icons_video)
});

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(36);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(1);
// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(2);
// EXTERNAL MODULE: ./src/core/events/index.ts + 3 modules
var events = __webpack_require__(3);
// EXTERNAL MODULE: ./src/core/helpers/index.ts + 32 modules
var helpers = __webpack_require__(8);
;// CONCATENATED MODULE: ./src/core/async.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class Async {
    constructor() {
        var _a, _b, _c, _d;
        this.timers = new Map();
        this.promisesRejections = new Set();
        this.requestsIdle = new Set();
        this.requestIdleCallbackNative = (_b = (_a = window['requestIdleCallback']) === null || _a === void 0 ? void 0 : _a.bind(window)) !== null && _b !== void 0 ? _b : ((callback) => {
            const start = Date.now();
            return this.setTimeout(() => {
                callback({
                    didTimeout: false,
                    timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
                });
            }, 1);
        });
        this.cancelIdleCallbackNative = (_d = (_c = window['cancelIdleCallback']) === null || _c === void 0 ? void 0 : _c.bind(window)) !== null && _d !== void 0 ? _d : ((request) => {
            this.clearTimeout(request);
        });
        this.isDestructed = false;
    }
    setTimeout(callback, timeout, ...args) {
        if (this.isDestructed) {
            return 0;
        }
        let options = {};
        if (!(0,helpers.isNumber)(timeout)) {
            options = timeout;
            timeout = options.timeout || 0;
        }
        if (options.label) {
            this.clearLabel(options.label);
        }
        const timer = (0,helpers.setTimeout)(callback, timeout, ...args), key = options.label || timer;
        this.timers.set(key, timer);
        return timer;
    }
    clearLabel(label) {
        if (label && this.timers.has(label)) {
            (0,helpers.clearTimeout)(this.timers.get(label));
            this.timers.delete(label);
        }
    }
    clearTimeout(timerOrLabel) {
        if ((0,helpers.isString)(timerOrLabel)) {
            return this.clearLabel(timerOrLabel);
        }
        (0,helpers.clearTimeout)(timerOrLabel);
        this.timers.delete(timerOrLabel);
    }
    debounce(fn, timeout, firstCallImmediately = false) {
        let timer = 0, fired = false;
        const promises = [];
        const callFn = (...args) => {
            if (!fired) {
                timer = 0;
                const res = fn(...args);
                fired = true;
                if (promises.length) {
                    const runPromises = () => {
                        promises.forEach(res => res());
                        promises.length = 0;
                    };
                    (0,helpers.isPromise)(res) ? res.finally(runPromises) : runPromises();
                }
            }
        };
        const onFire = (...args) => {
            fired = false;
            if (!timeout) {
                callFn(...args);
            }
            else {
                if (!timer && firstCallImmediately) {
                    callFn(...args);
                }
                (0,helpers.clearTimeout)(timer);
                timer = this.setTimeout(() => callFn(...args), (0,helpers.isFunction)(timeout) ? timeout() : timeout);
                this.timers.set(fn, timer);
            }
        };
        return (0,helpers.isPlainObject)(timeout) && timeout.promisify
            ? (...args) => {
                const promise = this.promise(res => {
                    promises.push(res);
                });
                onFire(...args);
                return promise;
            }
            : onFire;
    }
    throttle(fn, timeout, ignore = false) {
        let timer = null, needInvoke, callee, lastArgs;
        return (...args) => {
            needInvoke = true;
            lastArgs = args;
            if (!timeout) {
                fn(...lastArgs);
                return;
            }
            if (!timer) {
                callee = () => {
                    if (needInvoke) {
                        fn(...lastArgs);
                        needInvoke = false;
                        timer = this.setTimeout(callee, (0,helpers.isFunction)(timeout) ? timeout() : timeout);
                        this.timers.set(callee, timer);
                    }
                    else {
                        timer = null;
                    }
                };
                callee();
            }
        };
    }
    promise(executor) {
        let rejectCallback = () => { };
        const promise = new Promise((resolve, reject) => {
            this.promisesRejections.add(reject);
            rejectCallback = reject;
            return executor(resolve, reject);
        });
        if (!promise.finally && "es2018" !== 'es2018') {
            promise.finally = (onfinally) => {
                promise.then(onfinally).catch(onfinally);
                return promise;
            };
        }
        promise.finally(() => {
            this.promisesRejections.delete(rejectCallback);
        });
        promise.rejectCallback = rejectCallback;
        return promise;
    }
    promiseState(p) {
        if (p.status) {
            return p.status;
        }
        if (!Promise.race) {
            return new Promise(resolve => {
                p.then(v => {
                    resolve('fulfilled');
                    return v;
                }, e => {
                    resolve('rejected');
                    throw e;
                });
                this.setTimeout(() => {
                    resolve('pending');
                }, 100);
            });
        }
        const t = {};
        return Promise.race([p, t]).then(v => (v === t ? 'pending' : 'fulfilled'), () => 'rejected');
    }
    requestIdleCallback(callback) {
        const request = this.requestIdleCallbackNative(callback);
        this.requestsIdle.add(request);
        return request;
    }
    requestIdlePromise() {
        return new Promise(res => {
            const request = this.requestIdleCallback(() => res(request));
        });
    }
    cancelIdleCallback(request) {
        this.requestsIdle.delete(request);
        return this.cancelIdleCallbackNative(request);
    }
    clear() {
        this.requestsIdle.forEach(key => {
            this.cancelIdleCallback(key);
        });
        this.timers.forEach(key => {
            (0,helpers.clearTimeout)(this.timers.get(key));
        });
        this.timers.clear();
        this.promisesRejections.forEach(reject => {
            reject();
        });
        this.promisesRejections.clear();
    }
    destruct() {
        this.clear();
        this.isDestructed = true;
    }
}

;// CONCATENATED MODULE: ./src/core/ajax.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config/* Config.prototype.defaultAjaxOptions */.D.prototype.defaultAjaxOptions = {
    dataType: 'json',
    method: 'GET',
    url: '',
    data: null,
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    headers: {
        'X-REQUESTED-WITH': 'XMLHttpRequest'
    },
    withCredentials: false,
    xhr() {
        return new XMLHttpRequest();
    }
};
class Ajax {
    constructor(jodit, options) {
        this.jodit = jodit;
        this.success_response_codes = [200, 201, 202];
        this.resolved = false;
        this.activated = false;
        this.options = (0,helpers.ConfigProto)(options || {}, config/* Config.prototype.defaultAjaxOptions */.D.prototype.defaultAjaxOptions);
        this.xhr = this.o.xhr ? this.o.xhr() : new XMLHttpRequest();
        jodit &&
            jodit.events &&
            jodit.e.on('beforeDestruct', () => {
                this.abort();
            });
    }
    __buildParams(obj, prefix) {
        if ((0,helpers.isFunction)(this.o.queryBuild)) {
            return this.o.queryBuild.call(this, obj, prefix);
        }
        if ((0,helpers.isString)(obj) ||
            (this.j.ow.FormData &&
                obj instanceof this.j.ow.FormData)) {
            return obj;
        }
        return (0,helpers.buildQuery)(obj);
    }
    get o() {
        return this.options;
    }
    get j() {
        return this.jodit;
    }
    abort() {
        try {
            this.xhr.abort();
        }
        catch (_a) { }
        return this;
    }
    send() {
        this.activated = true;
        return new Promise((resolve, reject) => {
            const __parse = (resp) => {
                let result = null;
                if (this.o.dataType === 'json') {
                    result = JSON.parse(resp);
                }
                if (!result) {
                    throw (0,helpers.error)('No JSON format');
                }
                return result;
            };
            this.xhr.onabort = () => {
                reject((0,helpers.error)(this.xhr.statusText));
            };
            this.xhr.onerror = () => {
                reject((0,helpers.error)(this.xhr.statusText));
            };
            this.xhr.ontimeout = () => {
                reject((0,helpers.error)(this.xhr.statusText));
            };
            this.xhr.onload = () => {
                this.response = this.xhr.responseText;
                this.status = this.xhr.status;
                this.resolved = true;
                resolve.call(this.xhr, __parse(this.response) || {});
            };
            this.xhr.onprogress = (e) => {
                var _a, _b;
                let percentComplete = 0;
                if (e.lengthComputable) {
                    percentComplete = (e.loaded / e.total) * 100;
                }
                (_b = (_a = this.options).onProgress) === null || _b === void 0 ? void 0 : _b.call(_a, percentComplete);
            };
            this.xhr.onreadystatechange = () => {
                var _a, _b;
                (_b = (_a = this.options).onProgress) === null || _b === void 0 ? void 0 : _b.call(_a, 10);
                if (this.xhr.readyState === XMLHttpRequest.DONE) {
                    const resp = this.xhr.responseText;
                    this.response = resp;
                    this.status = this.xhr.status;
                    this.resolved = true;
                    if (this.success_response_codes.indexOf(this.xhr.status) > -1) {
                        resolve.call(this.xhr, __parse(resp));
                    }
                    else {
                        reject.call(this.xhr, (0,helpers.error)(this.xhr.statusText ||
                            this.j.i18n('Connection error!')));
                    }
                }
            };
            this.xhr.withCredentials = this.o.withCredentials || false;
            const { url, data, method } = this.prepareRequest();
            this.xhr.open(method, url, true);
            if (this.o.contentType && this.xhr.setRequestHeader) {
                this.xhr.setRequestHeader('Content-type', this.o.contentType);
            }
            if (this.o.headers && this.xhr.setRequestHeader) {
                (0,helpers.each)(this.o.headers, (key, value) => {
                    this.xhr.setRequestHeader(key, value);
                });
            }
            setTimeout(() => {
                this.xhr.send(data ? this.__buildParams(data) : undefined);
            }, 0);
        });
    }
    prepareRequest() {
        if (!this.o.url) {
            throw (0,helpers.error)('Need URL for AJAX request');
        }
        let url = this.o.url;
        const data = this.o.data;
        const method = (this.o.method || 'get').toLowerCase();
        if (method === 'get' && data && (0,helpers.isPlainObject)(data)) {
            const qIndex = url.indexOf('?');
            if (qIndex !== -1) {
                const urlData = (0,helpers.parseQuery)(url);
                url =
                    url.substr(0, qIndex) +
                        '?' +
                        (0,helpers.buildQuery)({ ...urlData, ...data });
            }
            else {
                url += '?' + (0,helpers.buildQuery)(this.o.data);
            }
        }
        const request = {
            url,
            method,
            data
        };
        Ajax.log.splice(100);
        Ajax.log.push(request);
        return request;
    }
    destruct() {
        if (this.activated && !this.resolved) {
            this.abort();
            this.resolved = true;
        }
    }
}
Ajax.log = [];

// EXTERNAL MODULE: ./src/core/component/index.ts + 3 modules
var component = __webpack_require__(11);
// EXTERNAL MODULE: ./src/core/ui/popup/index.ts + 1 modules
var ui_popup = __webpack_require__(39);
// EXTERNAL MODULE: ./src/core/ui/button/index.ts + 2 modules
var ui_button = __webpack_require__(30);
// EXTERNAL MODULE: ./src/core/helpers/checker/index.ts + 14 modules
var checker = __webpack_require__(15);
;// CONCATENATED MODULE: ./src/modules/context-menu/context-menu.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class ContextMenu extends ui_popup/* Popup */.G {
    className() {
        return 'ContextMenu';
    }
    show(x, y, actions) {
        const self = this, content = this.j.c.div('jodit-context-menu__actions');
        if (!(0,checker/* isArray */.kJ)(actions)) {
            return;
        }
        actions.forEach(item => {
            if (!item) {
                return;
            }
            const action = (0,ui_button/* Button */.zx)(this.jodit, item.icon || 'empty', item.title);
            this.jodit && action.setParentView(this.jodit);
            action.setMod('context', 'menu');
            action.onAction((e) => {
                var _a;
                (_a = item.exec) === null || _a === void 0 ? void 0 : _a.call(self, e);
                self.close();
                return false;
            });
            content.appendChild(action.container);
        });
        super
            .setContent(content)
            .open(() => ({ left: x, top: y, width: 0, height: 0 }), true);
    }
}

;// CONCATENATED MODULE: ./src/core/storage/engines/local-storage-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const canUsePersistentStorage = (() => {
    const canUse = () => {
        const tmpKey = '___Jodit___' + Math.random().toString();
        try {
            localStorage.setItem(tmpKey, '1');
            const result = localStorage.getItem(tmpKey) === '1';
            localStorage.removeItem(tmpKey);
            return result;
        }
        catch (_a) { }
        return false;
    };
    let result;
    return () => {
        if (result === undefined) {
            result = canUse();
        }
        return result;
    };
})();
class LocalStorageProvider {
    constructor(rootKey) {
        this.rootKey = rootKey;
    }
    set(key, value) {
        try {
            const buffer = localStorage.getItem(this.rootKey);
            const json = buffer ? JSON.parse(buffer) : {};
            json[key] = value;
            localStorage.setItem(this.rootKey, JSON.stringify(json));
        }
        catch (_a) { }
    }
    delete(key) {
        try {
            localStorage.removeItem(this.rootKey);
        }
        catch (_a) { }
    }
    get(key) {
        try {
            const buffer = localStorage.getItem(this.rootKey);
            const json = buffer ? JSON.parse(buffer) : {};
            return json[key] !== undefined ? json[key] : null;
        }
        catch (_a) { }
    }
    exists(key) {
        return this.get(key) != null;
    }
    clear() {
        try {
            localStorage.removeItem(this.rootKey);
        }
        catch (_a) { }
    }
}

;// CONCATENATED MODULE: ./src/core/storage/engines/memory-storage-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class MemoryStorageProvider {
    constructor() {
        this.data = new Map();
    }
    set(key, value) {
        this.data.set(key, value);
    }
    delete(key) {
        this.data.delete(key);
    }
    get(key) {
        return this.data.get(key);
    }
    exists(key) {
        return this.data.has(key);
    }
    clear() {
        this.data.clear();
    }
}

;// CONCATENATED MODULE: ./src/core/storage/storage.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const StorageKey = 'Jodit_';
class Storage {
    constructor(provider, suffix) {
        this.provider = provider;
        this.prefix = StorageKey;
        if (suffix) {
            this.prefix += suffix;
        }
    }
    set(key, value) {
        this.provider.set((0,helpers.camelCase)(this.prefix + key), value);
    }
    delete(key) {
        this.provider.delete((0,helpers.camelCase)(this.prefix + key));
    }
    get(key) {
        return this.provider.get((0,helpers.camelCase)(this.prefix + key));
    }
    exists(key) {
        return this.provider.exists((0,helpers.camelCase)(this.prefix + key));
    }
    clear() {
        return this.provider.clear();
    }
    static makeStorage(persistent = false, suffix) {
        let provider;
        if (persistent && canUsePersistentStorage()) {
            provider = new LocalStorageProvider(StorageKey + suffix);
        }
        if (!provider) {
            provider = new MemoryStorageProvider();
        }
        return new Storage(provider, suffix);
    }
}

;// CONCATENATED MODULE: ./src/core/storage/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




// EXTERNAL MODULE: ./src/core/global.ts
var global = __webpack_require__(12);
// EXTERNAL MODULE: ./src/core/decorators/index.ts + 8 modules
var decorators = __webpack_require__(33);
// EXTERNAL MODULE: ./src/core/traits/index.ts + 2 modules
var traits = __webpack_require__(26);
;// CONCATENATED MODULE: ./src/core/view/view.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class View extends component/* Component */.wA {
    constructor(options, isJodit = false) {
        super();
        this.isJodit = isJodit;
        this.isView = true;
        this.mods = {};
        this.components = new Set();
        this.version = "3.6.18";
        this.async = new Async();
        this.buffer = Storage.makeStorage();
        this.storage = Storage.makeStorage(true, this.componentName);
        this.OPTIONS = View.defaultOptions;
        this.__isFullSize = false;
        this.__whoLocked = '';
        this.isLockedNotBy = (name) => this.isLocked && this.__whoLocked !== name;
        this.__modulesInstances = new Map();
        this.id = new Date().getTime().toString();
        this.buffer = Storage.makeStorage();
        this.initOptions(options);
        this.initOwners();
        this.events = new events/* EventsNative */.ng(this.od);
        this.create = new Create(this.od);
        this.container = this.c.div();
        this.container.classList.add('jodit');
        this.progressbar = new ui/* ProgressBar */.ko(this);
    }
    setMod(name, value) {
        traits/* Mods.setMod.call */.$.setMod.call(this, name, value);
        return this;
    }
    getMod(name) {
        return traits/* Mods.getMod.call */.$.getMod.call(this, name);
    }
    getElm(elementName) {
        return traits/* Elms.getElm.call */.F.getElm.call(this, elementName);
    }
    getElms(elementName) {
        return traits/* Elms.getElms.call */.F.getElms.call(this, elementName);
    }
    get basePath() {
        if (this.o.basePath) {
            return this.o.basePath;
        }
        return constants.BASE_PATH;
    }
    get defaultTimeout() {
        return (0,helpers.isVoid)(this.o.defaultTimeout) ? 100 : this.o.defaultTimeout;
    }
    get c() {
        return this.create;
    }
    get container() {
        return this.__container;
    }
    set container(container) {
        this.__container = container;
    }
    get e() {
        return this.events;
    }
    get options() {
        return this.__options;
    }
    set options(options) {
        this.__options = options;
    }
    get o() {
        return this.options;
    }
    i18n(text, ...params) {
        return (0,helpers.i18n)(text, params, this.options);
    }
    toggleFullSize(isFullSize) {
        if (isFullSize === undefined) {
            isFullSize = !this.__isFullSize;
        }
        if (isFullSize === this.__isFullSize) {
            return;
        }
        this.__isFullSize = isFullSize;
        if (this.events) {
            this.e.fire('toggleFullSize', isFullSize);
        }
    }
    get isLocked() {
        return this.__whoLocked !== '';
    }
    lock(name = 'any') {
        if (!this.isLocked) {
            this.__whoLocked = name;
            return true;
        }
        return false;
    }
    unlock() {
        if (this.isLocked) {
            this.__whoLocked = '';
            return true;
        }
        return false;
    }
    get isFullSize() {
        return this.__isFullSize;
    }
    getVersion() {
        return "3.6.18";
    }
    static getVersion() {
        return "3.6.18";
    }
    initOptions(options) {
        this.options = (0,helpers.ConfigProto)(options || {}, (0,helpers.ConfigProto)(this.options || {}, View.defaultOptions));
    }
    initOwners() {
        var _a;
        this.ownerWindow = (_a = this.o.ownerWindow) !== null && _a !== void 0 ? _a : window;
    }
    attachEvents(options) {
        if (!options) {
            return;
        }
        const e = options === null || options === void 0 ? void 0 : options.events;
        e && Object.keys(e).forEach((key) => this.e.on(key, e[key]));
    }
    getInstance(moduleName, options) {
        const instance = this.e.fire((0,helpers.camelCase)('getInstance_' + moduleName), options);
        if (instance) {
            return instance;
        }
        const module = global/* modules */.qz[moduleName], mi = this.__modulesInstances;
        if (!(0,helpers.isFunction)(module)) {
            throw (0,helpers.error)('Need real module name');
        }
        if (!mi.has(moduleName)) {
            const instance = module.prototype instanceof component/* ViewComponent */.Hr
                ? new module(this, options)
                : new module(options);
            this.components.add(instance);
            mi.set(moduleName, instance);
        }
        return mi.get(moduleName);
    }
    addDisclaimer(elm) {
        this.container.appendChild(elm);
    }
    beforeDestruct() {
        this.e.fire(component/* STATUSES.beforeDestruct */.n$.beforeDestruct, this);
        this.components.forEach(component => {
            if ((0,helpers.isDestructable)(component) && !component.isInDestruct) {
                component.destruct();
            }
        });
        this.components.clear();
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        if (this.async) {
            this.async.destruct();
        }
        if (this.events) {
            this.e.destruct();
        }
        if (this.buffer) {
            this.buffer.clear();
        }
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
        super.destruct();
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.hook)(component/* STATUSES.beforeDestruct */.n$.beforeDestruct)
], View.prototype, "beforeDestruct", null);
View.defaultOptions = {
    extraButtons: [],
    textIcons: false,
    namespace: '',
    removeButtons: [],
    zIndex: 100002,
    defaultTimeout: 100,
    fullsize: false,
    showTooltip: true,
    useNativeTooltip: false,
    buttons: [],
    globalFullSize: true
};

// EXTERNAL MODULE: ./src/core/dom.ts
var dom = __webpack_require__(14);
// EXTERNAL MODULE: ./src/core/ui/index.ts + 1 modules
var ui = __webpack_require__(24);
;// CONCATENATED MODULE: ./src/modules/toolbar/collection/collection.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let ToolbarCollection = class ToolbarCollection extends ui/* UIList */.bz {
    constructor(jodit) {
        super(jodit);
        this.listenEvents = 'updateToolbar changeStack mousedown mouseup keydown change afterInit readonly afterResize ' +
            'selectionchange changeSelection focus afterSetMode touchstart focus blur';
        this.update = this.j.async.debounce(this.immediateUpdate, () => this.j.defaultTimeout);
        this.initEvents();
    }
    className() {
        return 'ToolbarCollection';
    }
    get firstButton() {
        const [button] = this.buttons;
        return button || null;
    }
    makeButton(control, target = null) {
        return makeButton(this.j, control, target);
    }
    shouldBeActive(button) {
        if ((0,helpers.isJoditObject)(this.j) && !this.j.editorIsActive) {
            return false;
        }
        if ((0,helpers.isFunction)(button.control.isActive)) {
            return button.control.isActive(this.j, button.control, button);
        }
        return undefined;
    }
    shouldBeDisabled(button) {
        if (this.j.o.disabled) {
            return true;
        }
        if (this.j.o.readonly &&
            (!this.j.o.activeButtonsInReadOnly ||
                !this.j.o.activeButtonsInReadOnly.includes(button.control.name))) {
            return true;
        }
        let isDisabled;
        if ((0,helpers.isFunction)(button.control.isDisabled)) {
            isDisabled = button.control.isDisabled(this.j, button.control, button);
        }
        return isDisabled;
    }
    getTarget(button) {
        return button.target || null;
    }
    immediateUpdate() {
        if (this.isDestructed || this.j.isLocked) {
            return;
        }
        super.update();
        this.j.e.fire('afterUpdateToolbar');
    }
    setDirection(direction) {
        this.container.style.direction = direction;
        this.container.setAttribute('dir', direction);
    }
    initEvents() {
        this.j.e
            .on(this.listenEvents, this.update)
            .on('afterSetMode focus', this.immediateUpdate);
    }
    build(items, target = null) {
        const itemsWithGroupps = this.j.e.fire('beforeToolbarBuild', items);
        if (itemsWithGroupps) {
            items = itemsWithGroupps;
        }
        super.build(items, target);
        return this;
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        this.j.e
            .off(this.listenEvents, this.update)
            .off('afterSetMode focus', this.immediateUpdate);
        super.destruct();
    }
};
(0,tslib_es6.__decorate)([
    decorators.autobind
], ToolbarCollection.prototype, "immediateUpdate", null);
ToolbarCollection = (0,tslib_es6.__decorate)([
    decorators.component
], ToolbarCollection);


;// CONCATENATED MODULE: ./src/modules/toolbar/collection/editor-collection.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let ToolbarEditorCollection = class ToolbarEditorCollection extends ToolbarCollection {
    constructor() {
        super(...arguments);
        this.checkActiveStatus = (cssObject, node) => {
            let matches = 0, total = 0;
            Object.keys(cssObject).forEach((cssProperty) => {
                const cssValue = cssObject[cssProperty];
                if ((0,helpers.isFunction)(cssValue)) {
                    if (cssValue(this.j, (0,helpers.css)(node, cssProperty).toString())) {
                        matches += 1;
                    }
                }
                else {
                    if (cssValue.indexOf((0,helpers.css)(node, cssProperty).toString()) !== -1) {
                        matches += 1;
                    }
                }
                total += 1;
            });
            return total === matches;
        };
    }
    className() {
        return 'ToolbarEditorCollection';
    }
    shouldBeDisabled(button) {
        const disabled = super.shouldBeDisabled(button);
        if (disabled !== undefined) {
            return disabled;
        }
        const mode = button.control.mode === undefined
            ? constants.MODE_WYSIWYG
            : button.control.mode;
        return !(mode === constants.MODE_SPLIT || mode === this.j.getRealMode());
    }
    shouldBeActive(button) {
        const active = super.shouldBeActive(button);
        if (active !== undefined) {
            return active;
        }
        const element = this.j.selection ? this.j.s.current() : null;
        if (!element) {
            return false;
        }
        let elm;
        if (button.control.tags) {
            const tags = button.control.tags;
            elm = element;
            if (dom/* Dom.up */.i.up(elm, (node) => {
                if (node &&
                    tags.indexOf(node.nodeName.toLowerCase()) !== -1) {
                    return true;
                }
            }, this.j.editor)) {
                return true;
            }
        }
        if (button.control.css) {
            const css = button.control.css;
            elm = element;
            if (dom/* Dom.up */.i.up(elm, (node) => {
                if (node && !dom/* Dom.isText */.i.isText(node)) {
                    return this.checkActiveStatus(css, node);
                }
            }, this.j.editor)) {
                return true;
            }
        }
        return false;
    }
    getTarget(button) {
        return button.target || this.j.s.current() || null;
    }
};
ToolbarEditorCollection = (0,tslib_es6.__decorate)([
    decorators.component
], ToolbarEditorCollection);


// EXTERNAL MODULE: ./src/core/ui/helpers/get-control-type.ts
var get_control_type = __webpack_require__(32);
;// CONCATENATED MODULE: ./src/modules/toolbar/button/button.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */












let ToolbarButton = class ToolbarButton extends ui_button/* UIButton */.y3 {
    constructor(jodit, control, target = null) {
        super(jodit);
        this.control = control;
        this.target = target;
        this.state = {
            ...(0,ui_button/* UIButtonState */.Yc)(),
            theme: 'toolbar',
            currentValue: '',
            hasTrigger: false
        };
        jodit.e.on([this.button, this.trigger], 'mousedown', (e) => e.preventDefault());
        this.onAction(this.onClick);
        this.hookStatus(component/* STATUSES.ready */.n$.ready, () => {
            this.initFromControl();
            this.initTooltip();
            this.update();
        });
    }
    className() {
        return 'ToolbarButton';
    }
    get toolbar() {
        return this.closest(ToolbarCollection);
    }
    get button() {
        return this.container.querySelector(`button.${this.componentName}__button`);
    }
    update() {
        const { control, state } = this, tc = this.closest(ToolbarCollection);
        if (tc) {
            state.disabled = Boolean(tc.shouldBeDisabled(this));
            state.activated = Boolean(tc.shouldBeActive(this));
        }
        if ((0,helpers.isFunction)(control.update)) {
            control.update(this);
        }
        super.update();
    }
    onChangeActivated() {
        (0,helpers.attr)(this.button, 'aria-pressed', this.state.activated);
        super.onChangeActivated();
    }
    onChangeText() {
        if ((0,helpers.isFunction)(this.control.template)) {
            this.text.innerHTML = this.control.template(this.j, this.control.name, this.j.i18n(this.state.text));
        }
        else {
            super.onChangeText();
        }
        this.setMod('text-icons', Boolean(this.text.innerText.trim().length));
    }
    onChangeTabIndex() {
        (0,helpers.attr)(this.button, 'tabIndex', this.state.tabIndex);
    }
    createContainer() {
        const cn = this.componentName;
        const container = this.j.c.span(cn), button = super.createContainer();
        (0,helpers.attr)(container, 'role', 'listitem');
        button.classList.remove(cn);
        button.classList.add(cn + '__button');
        Object.defineProperty(button, 'component', {
            value: this
        });
        container.appendChild(button);
        this.trigger = this.j.c.fromHTML(`<span role="trigger" class="${cn}__trigger">${ui/* Icon.get */.JO.get('chevron')}</span>`);
        this.j.e.on(this.trigger, 'click', this.onTriggerClick.bind(this));
        return container;
    }
    focus() {
        var _a;
        (_a = this.container.querySelector('button')) === null || _a === void 0 ? void 0 : _a.focus();
    }
    onChangeHasTrigger() {
        if (this.state.hasTrigger) {
            this.container.appendChild(this.trigger);
        }
        else {
            dom/* Dom.safeRemove */.i.safeRemove(this.trigger);
        }
        this.setMod('with-trigger', this.state.hasTrigger || null);
    }
    onChangeDisabled() {
        const dsb = this.state.disabled ? 'disabled' : null;
        (0,helpers.attr)(this.trigger, 'disabled', dsb);
        (0,helpers.attr)(this.button, 'disabled', dsb);
        (0,helpers.attr)(this.container, 'disabled', dsb);
    }
    initTooltip() {
        if (!this.j.o.textIcons &&
            this.j.o.showTooltip &&
            !this.j.o.useNativeTooltip) {
            this.j.e
                .off(this.container, 'mouseenter mouseleave')
                .on(this.container, 'mousemove', (e) => {
                if (!this.state.tooltip) {
                    return;
                }
                !this.state.disabled &&
                    this.j.e.fire('delayShowTooltip', () => ({
                        x: e.clientX + 10,
                        y: e.clientY + 10
                    }), this.state.tooltip);
            })
                .on(this.container, 'mouseleave', () => {
                this.j.e.fire('hideTooltip');
            });
        }
    }
    initFromControl() {
        var _a;
        const { control: ctr, state } = this;
        this.updateSize();
        state.name = ctr.name;
        const { textIcons } = this.j.o;
        if (textIcons === true ||
            ((0,helpers.isFunction)(textIcons) && textIcons(ctr.name)) ||
            ctr.template) {
            state.icon = (0,ui_button/* UIButtonState */.Yc)().icon;
            state.text = ctr.text || ctr.name;
        }
        else {
            if (ctr.iconURL) {
                state.icon.iconURL = ctr.iconURL;
            }
            else {
                const name = ctr.icon || ctr.name;
                state.icon.name =
                    ui/* Icon.exists */.JO.exists(name) || ((_a = this.j.o.extraIcons) === null || _a === void 0 ? void 0 : _a[name])
                        ? name
                        : '';
            }
            if (!ctr.iconURL && !state.icon.name) {
                state.text = ctr.text || ctr.name;
            }
        }
        if (ctr.tooltip) {
            state.tooltip = this.j.i18n((0,helpers.isFunction)(ctr.tooltip)
                ? ctr.tooltip(this.j, ctr, this)
                : ctr.tooltip);
        }
        state.hasTrigger = Boolean(ctr.list || (ctr.popup && ctr.exec));
    }
    onTriggerClick(e) {
        var _a, _b, _c;
        const { control: ctr } = this;
        e.buffer = {
            actionTrigger: this
        };
        if (ctr.list) {
            return this.openControlList(ctr);
        }
        if ((0,helpers.isFunction)(ctr.popup)) {
            const popup = new ui_popup/* Popup */.G(this.j);
            popup.parentElement = this;
            if (this.j.e.fire((0,helpers.camelCase)(`before-${ctr.name}-open-popup`), this.target, ctr, popup) !== false) {
                const target = (_c = (_b = (_a = this.toolbar) === null || _a === void 0 ? void 0 : _a.getTarget(this)) !== null && _b !== void 0 ? _b : this.target) !== null && _c !== void 0 ? _c : null;
                const elm = ctr.popup(this.j, target, ctr, popup.close, this);
                if (elm) {
                    popup
                        .setContent((0,helpers.isString)(elm) ? this.j.c.fromHTML(elm) : elm)
                        .open(() => (0,helpers.position)(this.container));
                }
            }
            this.j.e.fire((0,helpers.camelCase)(`after-${ctr.name}-open-popup`), popup.container);
        }
    }
    openControlList(control) {
        var _a;
        const controls = (_a = this.jodit.options.controls) !== null && _a !== void 0 ? _a : {}, getControl = (key) => (0,get_control_type/* findControlType */.z)(key, controls);
        const list = control.list, menu = new ui_popup/* Popup */.G(this.j), toolbar = makeCollection(this.j);
        menu.parentElement = this;
        toolbar.parentElement = menu;
        toolbar.mode = 'vertical';
        const getButton = (key, value) => {
            if ((0,helpers.isString)(value) && getControl(value)) {
                return {
                    name: value.toString(),
                    ...getControl(value)
                };
            }
            if ((0,helpers.isString)(key) && getControl(key)) {
                return {
                    name: key.toString(),
                    ...getControl(key),
                    ...(typeof value === 'object' ? value : {})
                };
            }
            const childControl = {
                name: key.toString(),
                template: control.childTemplate,
                exec: control.exec,
                data: control.data,
                command: control.command,
                isActive: control.isChildActive,
                isDisabled: control.isChildDisabled,
                mode: control.mode,
                args: [...(control.args ? control.args : []), key, value]
            };
            if ((0,helpers.isString)(value)) {
                childControl.text = value;
            }
            return childControl;
        };
        toolbar.build((0,helpers.isArray)(list)
            ? list.map(getButton)
            : (0,helpers.keys)(list, false).map(key => getButton(key, list[key])), this.target);
        menu.setContent(toolbar.container).open(() => (0,helpers.position)(this.container));
        this.state.activated = true;
        this.j.e.on(menu, 'afterClose', () => {
            this.state.activated = false;
        });
    }
    onClick(originalEvent) {
        var _a, _b, _c, _d, _e, _f, _g;
        const { control: ctr } = this;
        if ((0,helpers.isFunction)(ctr.exec)) {
            const target = (_c = (_b = (_a = this.toolbar) === null || _a === void 0 ? void 0 : _a.getTarget(this)) !== null && _b !== void 0 ? _b : this.target) !== null && _c !== void 0 ? _c : null;
            const result = ctr.exec(this.j, target, {
                control: ctr,
                originalEvent,
                button: this
            });
            if (result !== false) {
                (_e = (_d = this.j) === null || _d === void 0 ? void 0 : _d.e) === null || _e === void 0 ? void 0 : _e.fire('synchro');
                if (this.parentElement) {
                    this.parentElement.update();
                }
                (_g = (_f = this.j) === null || _f === void 0 ? void 0 : _f.e) === null || _g === void 0 ? void 0 : _g.fire('closeAllPopups afterExec');
                return;
            }
        }
        if (ctr.list) {
            return this.openControlList(ctr);
        }
        if ((0,helpers.isFunction)(ctr.popup)) {
            return this.onTriggerClick(originalEvent);
        }
        if (ctr.command || ctr.name) {
            (0,helpers.call)((0,helpers.isJoditObject)(this.j)
                ? this.j.execCommand.bind(this.j)
                : this.j.od.execCommand.bind(this.j.od), ctr.command || ctr.name, false, ctr.args && ctr.args[0]);
            this.j.e.fire('closeAllPopups');
        }
    }
};
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.hasTrigger')
], ToolbarButton.prototype, "onChangeHasTrigger", null);
ToolbarButton = (0,tslib_es6.__decorate)([
    decorators.component
], ToolbarButton);


;// CONCATENATED MODULE: ./src/modules/toolbar/button/content.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






let ToolbarContent = class ToolbarContent extends ui_button/* UIButton */.y3 {
    constructor(jodit, control, target = null) {
        super(jodit);
        this.control = control;
        this.target = target;
        this.container.classList.add(`${this.componentName}_${this.clearName(control.name)}`);
        (0,helpers.attr)(this.container, 'role', 'content');
    }
    className() {
        return 'ToolbarContent';
    }
    update() {
        const content = this.control.getContent(this.j, this.control, this);
        if ((0,helpers.isString)(content) || content.parentNode !== this.container) {
            dom/* Dom.detach */.i.detach(this.container);
            this.container.appendChild((0,helpers.isString)(content) ? this.j.create.fromHTML(content) : content);
        }
        super.update();
    }
    createContainer() {
        return this.j.c.span(this.componentName);
    }
};
ToolbarContent = (0,tslib_es6.__decorate)([
    decorators.component
], ToolbarContent);


;// CONCATENATED MODULE: ./src/modules/toolbar/factory.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function makeCollection(jodit, parentElement) {
    const collection = (0,helpers.isJoditObject)(jodit)
        ? new ToolbarEditorCollection(jodit)
        : new ToolbarCollection(jodit);
    if (jodit.o.textIcons) {
        collection.container.classList.add('jodit_text_icons');
    }
    if (parentElement) {
        collection.parentElement = parentElement;
    }
    if (jodit.o.toolbarButtonSize) {
        collection.buttonSize = jodit.o.toolbarButtonSize;
    }
    return collection;
}
function makeButton(jodit, control, target = null) {
    if ((0,helpers.isFunction)(control.getContent)) {
        return new ToolbarContent(jodit, control, target);
    }
    const button = new ToolbarButton(jodit, control, target);
    button.state.tabIndex = jodit.o.allowTabNavigation ? 0 : -1;
    return button;
}

// EXTERNAL MODULE: ./src/core/ui/helpers/buttons.ts
var helpers_buttons = __webpack_require__(38);
;// CONCATENATED MODULE: ./src/core/view/view-with-toolbar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class ViewWithToolbar extends View {
    constructor(options, isJodit = false) {
        super(options, isJodit);
        this.isJodit = isJodit;
        this.toolbar = makeCollection(this);
        this.defaultToolbarContainer = this.c.div('jodit-toolbar__box');
        this.registeredButtons = new Set();
        this.groupToButtons = {};
        this.e.on('beforeToolbarBuild', this.beforeToolbarBuild);
    }
    get toolbarContainer() {
        if (!this.o.fullsize &&
            ((0,helpers.isString)(this.o.toolbar) ||
                dom/* Dom.isHTMLElement */.i.isHTMLElement(this.o.toolbar, this.ow))) {
            return (0,helpers.resolveElement)(this.o.toolbar, this.o.shadowRoot || this.od);
        }
        this.o.toolbar &&
            dom/* Dom.appendChildFirst */.i.appendChildFirst(this.container, this.defaultToolbarContainer);
        return this.defaultToolbarContainer;
    }
    setPanel(element) {
        this.o.toolbar = element;
        this.buildToolbar();
    }
    buildToolbar() {
        if (!this.o.toolbar) {
            return;
        }
        const buttons = this.o.buttons
            ? (0,helpers.splitArray)(this.o.buttons)
            : [];
        this.toolbar
            .setRemoveButtons(this.o.removeButtons)
            .build(buttons.concat(this.o.extraButtons || []))
            .appendTo(this.toolbarContainer);
    }
    registerButton(btn) {
        var _a;
        this.registeredButtons.add(btn);
        const group = (_a = btn.group) !== null && _a !== void 0 ? _a : 'other';
        if (!this.groupToButtons[group]) {
            this.groupToButtons[group] = [];
        }
        if (btn.position != null) {
            this.groupToButtons[group][btn.position] = btn.name;
        }
        else {
            this.groupToButtons[group].push(btn.name);
        }
        return this;
    }
    unregisterButton(btn) {
        var _a;
        this.registeredButtons.delete(btn);
        const groupName = (_a = btn.group) !== null && _a !== void 0 ? _a : 'other', group = this.groupToButtons[groupName];
        if (group) {
            const index = group.indexOf(btn.name);
            if (index !== -1) {
                group.splice(index, 1);
            }
            if (group.length === 0) {
                delete this.groupToButtons[groupName];
            }
        }
        return this;
    }
    beforeToolbarBuild(items) {
        if (Object.keys(this.groupToButtons).length) {
            return items.map(item => {
                if ((0,helpers_buttons/* isButtonGroup */.A)(item) &&
                    item.group &&
                    this.groupToButtons[item.group]) {
                    return {
                        group: item.group,
                        buttons: [
                            ...item.buttons,
                            ...this.groupToButtons[item.group]
                        ]
                    };
                }
                return item;
            });
        }
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        this.setStatus(component/* STATUSES.beforeDestruct */.n$.beforeDestruct);
        this.e.off('beforeToolbarBuild', this.beforeToolbarBuild);
        this.toolbar.destruct();
        super.destruct();
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], ViewWithToolbar.prototype, "beforeToolbarBuild", null);

;// CONCATENATED MODULE: ./src/modules/dialog/dialog.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











config/* Config.prototype.dialog */.D.prototype.dialog = {
    namespace: '',
    extraButtons: [],
    resizable: true,
    draggable: true,
    buttons: ['dialog.close'],
    removeButtons: []
};
config/* Config.prototype.controls.dialog */.D.prototype.controls.dialog = {
    close: {
        icon: 'cancel',
        exec: dialog => {
            dialog.close();
            dialog.toggleFullSizeBox(false);
        }
    }
};
let Dialog = class Dialog extends ViewWithToolbar {
    constructor(options) {
        super(options);
        this.destroyAfterClose = false;
        this.moved = false;
        this.iSetMaximization = false;
        this.resizable = false;
        this.draggable = false;
        this.startX = 0;
        this.startY = 0;
        this.startPoint = { x: 0, y: 0, w: 0, h: 0 };
        this.lockSelect = () => {
            this.setMod('moved', true);
        };
        this.unlockSelect = () => {
            this.setMod('moved', false);
        };
        this.onResize = () => {
            if (this.options &&
                this.o.resizable &&
                !this.moved &&
                this.isOpened &&
                !this.offsetX &&
                !this.offsetY) {
                this.setPosition();
            }
        };
        this.isModal = false;
        this.isOpened = false;
        const self = this;
        self.options = (0,helpers.ConfigProto)(options !== null && options !== void 0 ? options : {}, (0,helpers.ConfigProto)({
            toolbarButtonSize: 'middle'
        }, (0,helpers.ConfigProto)(config/* Config.prototype.dialog */.D.prototype.dialog, View.defaultOptions)));
        dom/* Dom.safeRemove */.i.safeRemove(self.container);
        const n = this.getFullElName.bind(this);
        self.container = this.c.fromHTML(`<div style="z-index:${self.o.zIndex}" class="jodit jodit-dialog ${this.componentName}">
				<div class="${n('overlay')}"></div>
				<div class="${this.getFullElName('panel')}">
					<div class="${n('header')}">
						<div class="${n('header-title')}"></div>
						<div class="${n('header-toolbar')}"></div>
					</div>
					<div class="${n('content')}"></div>
					<div class="${n('footer')}"></div>
					${self.o.resizable ? `<div class="${n('resizer')}"></div>` : ''}
				</div>
			</div>`);
        (0,helpers.attr)(self.container, 'role', 'dialog');
        Object.defineProperty(self.container, 'component', {
            value: this
        });
        self.setMod('theme', self.o.theme || 'default');
        self.dialog = self.getElm('panel');
        (0,helpers.css)(self.dialog, {
            maxWidth: self.options.maxWidth,
            minHeight: self.options.minHeight,
            minWidth: self.options.minWidth
        });
        self.resizer = self.getElm('resizer');
        self.dialogbox_header = self.getElm('header-title');
        self.dialogbox_content = self.getElm('content');
        self.dialogbox_footer = self.getElm('footer');
        self.dialogbox_toolbar = self.getElm('header-toolbar');
        const headerBox = self.getElm('header');
        headerBox && self.e.on(headerBox, 'mousedown', self.onHeaderMouseDown);
        if (self.o.resizable) {
            self.e.on(self.resizer, 'mousedown', self.onResizerMouseDown);
        }
        const fullSize = global/* pluginSystem.get */.pw.get('fullsize');
        (0,helpers.isFunction)(fullSize) && fullSize(self);
        this.e
            .on(self.container, 'close_dialog', self.close)
            .on(this.ow, 'keydown', this.onEsc)
            .on(this.ow, 'resize', this.onResize);
    }
    className() {
        return 'Dialog';
    }
    get destination() {
        return this.od.body;
    }
    setElements(root, elements) {
        const elements_list = [];
        (0,helpers.asArray)(elements).forEach((elm) => {
            if ((0,helpers.isArray)(elm)) {
                const div = this.c.div(this.getFullElName('column'));
                elements_list.push(div);
                root.appendChild(div);
                return this.setElements(div, elm);
            }
            let element;
            if ((0,helpers.isString)(elm)) {
                element = this.c.fromHTML(elm);
            }
            else {
                element = (0,helpers.hasContainer)(elm) ? elm.container : elm;
            }
            elements_list.push(element);
            if (element.parentNode !== root) {
                root.appendChild(element);
            }
        });
        (0,helpers.toArray)(root.childNodes).forEach((elm) => {
            if (elements_list.indexOf(elm) === -1) {
                root.removeChild(elm);
            }
        });
    }
    onMouseUp() {
        if (this.draggable || this.resizable) {
            this.e.off(this.ow, 'mousemove', this.onMouseMove);
            this.draggable = false;
            this.resizable = false;
            this.unlockSelect();
            if (this.e) {
                this.removeGlobalResizeListeners();
                this.e.fire(this, 'endResize endMove');
            }
        }
    }
    onHeaderMouseDown(e) {
        const target = e.target;
        if (!this.o.draggable ||
            (target && target.nodeName.match(/^(INPUT|SELECT)$/))) {
            return;
        }
        this.draggable = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startPoint.x = (0,helpers.css)(this.dialog, 'left');
        this.startPoint.y = (0,helpers.css)(this.dialog, 'top');
        this.setMaxZIndex();
        e.preventDefault();
        this.lockSelect();
        this.addGlobalResizeListeners();
        if (this.e) {
            this.e.fire(this, 'startMove');
        }
    }
    onMouseMove(e) {
        if (this.draggable && this.o.draggable) {
            this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY);
            if (this.e) {
                this.e.fire(this, 'move', e.clientX - this.startX, e.clientY - this.startY);
            }
            e.stopImmediatePropagation();
        }
        if (this.resizable && this.o.resizable) {
            this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY);
            if (this.e) {
                this.e.fire(this, 'resizeDialog', e.clientX - this.startX, e.clientY - this.startY);
            }
        }
    }
    onEsc(e) {
        if (this.isOpened &&
            e.key === constants.KEY_ESC &&
            this.getMod('static') !== true) {
            const me = this.getMaxZIndexDialog();
            if (me) {
                me.close();
            }
            else {
                this.close();
            }
            e.stopImmediatePropagation();
        }
    }
    onResizerMouseDown(e) {
        this.resizable = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startPoint.w = this.dialog.offsetWidth;
        this.startPoint.h = this.dialog.offsetHeight;
        this.lockSelect();
        this.addGlobalResizeListeners();
        if (this.e) {
            this.e.fire(this, 'startResize');
        }
    }
    addGlobalResizeListeners() {
        const self = this;
        self.e
            .on(self.ow, 'mousemove', self.onMouseMove)
            .on(self.ow, 'mouseup', self.onMouseUp);
    }
    removeGlobalResizeListeners() {
        const self = this;
        self.e
            .off(self.ow, 'mousemove', self.onMouseMove)
            .off(self.ow, 'mouseup', self.onMouseUp);
    }
    setSize(w, h) {
        if (w == null) {
            w = this.dialog.offsetWidth;
        }
        if (h == null) {
            h = this.dialog.offsetHeight;
        }
        (0,helpers.css)(this.dialog, {
            width: w,
            height: h
        });
        return this;
    }
    calcAutoSize() {
        this.setSize('auto', 'auto');
        this.setSize();
        return this;
    }
    setPosition(x, y) {
        const w = this.ow.innerWidth, h = this.ow.innerHeight;
        let left = w / 2 - this.dialog.offsetWidth / 2, top = h / 2 - this.dialog.offsetHeight / 2;
        if (left < 0) {
            left = 0;
        }
        if (top < 0) {
            top = 0;
        }
        if (x !== undefined && y !== undefined) {
            this.offsetX = x;
            this.offsetY = y;
            this.moved = Math.abs(x - left) > 100 || Math.abs(y - top) > 100;
        }
        this.dialog.style.left = (x || left) + 'px';
        this.dialog.style.top = (y || top) + 'px';
        return this;
    }
    setHeader(content) {
        this.setElements(this.dialogbox_header, content);
        return this;
    }
    setContent(content) {
        this.setElements(this.dialogbox_content, content);
        return this;
    }
    setFooter(content) {
        this.setElements(this.dialogbox_footer, content);
        this.setMod('footer', Boolean(content));
        return this;
    }
    getZIndex() {
        return parseInt((0,helpers.css)(this.container, 'zIndex'), 10) || 0;
    }
    getMaxZIndexDialog() {
        let maxZi = 0, dlg, zIndex, res = this;
        (0,helpers.$$)('.jodit-dialog', this.destination).forEach((dialog) => {
            dlg = dialog.component;
            zIndex = parseInt((0,helpers.css)(dialog, 'zIndex'), 10);
            if (dlg.isOpened && !isNaN(zIndex) && zIndex > maxZi) {
                res = dlg;
                maxZi = zIndex;
            }
        });
        return res;
    }
    setMaxZIndex() {
        let maxZIndex = 20000004, zIndex = 0;
        (0,helpers.$$)('.jodit-dialog', this.destination).forEach(dialog => {
            zIndex = parseInt((0,helpers.css)(dialog, 'zIndex'), 10);
            maxZIndex = Math.max(isNaN(zIndex) ? 0 : zIndex, maxZIndex);
        });
        this.container.style.zIndex = (maxZIndex + 1).toString();
    }
    maximization(condition) {
        if ((0,helpers.isVoid)(condition)) {
            condition = !this.getMod('fullsize');
        }
        this.setMod('fullsize', condition);
        this.toggleFullSizeBox(condition);
        this.iSetMaximization = condition;
        return condition;
    }
    toggleFullSizeBox(condition) {
        [this.destination, this.destination.parentNode].forEach(box => {
            box &&
                box.classList &&
                box.classList.toggle('jodit_fullsize-box_true', condition);
        });
    }
    open(contentOrClose, titleOrModal, destroyAfterClose, modal) {
        global/* eventEmitter.fire */.TB.fire('closeAllPopups hideHelpers');
        if (this.e.fire(this, 'beforeOpen') === false) {
            return this;
        }
        if ((0,helpers.isBoolean)(contentOrClose)) {
            destroyAfterClose = contentOrClose;
        }
        if ((0,helpers.isBoolean)(titleOrModal)) {
            modal = titleOrModal;
        }
        this.destroyAfterClose = destroyAfterClose === true;
        const content = (0,helpers.isBoolean)(contentOrClose) ? undefined : contentOrClose;
        const title = (0,helpers.isBoolean)(titleOrModal) ? undefined : titleOrModal;
        if (title !== undefined) {
            this.setHeader(title);
        }
        if (content) {
            this.setContent(content);
        }
        this.setMod('active', true);
        this.isOpened = true;
        this.setModal(modal);
        this.destination.appendChild(this.container);
        this.setPosition(this.offsetX, this.offsetY);
        this.setMaxZIndex();
        if (this.o.fullsize) {
            this.maximization(true);
        }
        this.e.fire('afterOpen', this);
        return this;
    }
    setModal(modal) {
        this.isModal = Boolean(modal);
        this.setMod('modal', this.isModal);
        return this;
    }
    close(e) {
        var _a, _b;
        if (this.isDestructed ||
            !this.isOpened ||
            this.getMod('static') === true) {
            return this;
        }
        if (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
        if (this.e) {
            this.e.fire('beforeClose', this);
        }
        this.setMod('active', false);
        this.isOpened = false;
        this.e.fire('toggleFullSize', false);
        if (this.iSetMaximization) {
            this.maximization(false);
        }
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
        this.removeGlobalResizeListeners();
        if (this.destroyAfterClose) {
            this.destruct();
        }
        (_a = this.e) === null || _a === void 0 ? void 0 : _a.fire(this, 'afterClose');
        (_b = this.e) === null || _b === void 0 ? void 0 : _b.fire(this.ow, 'joditCloseDialog');
        return this;
    }
    buildToolbar() {
        this.o.buttons &&
            this.toolbar
                .build((0,helpers.splitArray)(this.o.buttons))
                .setMod('mode', 'header')
                .appendTo(this.dialogbox_toolbar);
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.setStatus(component/* STATUSES.beforeDestruct */.n$.beforeDestruct);
        if (this.isOpened) {
            this.close();
        }
        if (this.events) {
            this.removeGlobalResizeListeners();
            this.events
                .off(this.container, 'close_dialog', self.close)
                .off(this.ow, 'keydown', this.onEsc)
                .off(this.ow, 'resize', this.onResize);
        }
        super.destruct();
    }
};
(0,tslib_es6.__decorate)([
    decorators.autobind
], Dialog.prototype, "onMouseUp", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Dialog.prototype, "onHeaderMouseDown", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Dialog.prototype, "onMouseMove", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Dialog.prototype, "onEsc", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Dialog.prototype, "onResizerMouseDown", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Dialog.prototype, "close", null);
(0,tslib_es6.__decorate)([
    (0,decorators.hook)('ready')
], Dialog.prototype, "buildToolbar", null);
Dialog = (0,tslib_es6.__decorate)([
    decorators.component
], Dialog);


;// CONCATENATED MODULE: ./src/modules/dialog/alert.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const Alert = (msg, title, callback, className = 'jodit-dialog_alert') => {
    if ((0,helpers.isFunction)(title)) {
        callback = title;
        title = undefined;
    }
    const dialog = new Dialog(), container = dialog.c.div(className), okButton = (0,ui/* Button */.zx)(dialog, 'ok', 'Ok');
    (0,helpers.asArray)(msg).forEach(oneMessage => {
        container.appendChild(dom/* Dom.isNode */.i.isNode(oneMessage, dialog.ow)
            ? oneMessage
            : dialog.c.fromHTML(oneMessage));
    });
    okButton.onAction(() => {
        if (!callback || !(0,helpers.isFunction)(callback) || callback(dialog) !== false) {
            dialog.close();
        }
    });
    dialog.setFooter([okButton]);
    dialog.open(container, title || '&nbsp;', true, true);
    okButton.focus();
    return dialog;
};

;// CONCATENATED MODULE: ./src/modules/dialog/prompt.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const Prompt = (msg, title, callback, placeholder, defaultValue) => {
    const dialog = new Dialog(), cancelButton = (0,ui/* Button */.zx)(dialog, 'cancel', 'Cancel'), okButton = (0,ui/* Button */.zx)(dialog, 'ok', 'Ok'), form = dialog.c.element('form', {
        class: 'jodit-dialog_prompt'
    }), inputElement = dialog.c.element('input', {
        autofocus: true,
        class: 'jodit-input'
    }), labelElement = dialog.c.element('label');
    if ((0,helpers.isFunction)(title)) {
        callback = title;
        title = undefined;
    }
    if (placeholder) {
        (0,helpers.attr)(inputElement, 'placeholder', placeholder);
    }
    labelElement.appendChild(dialog.c.text(msg));
    form.appendChild(labelElement);
    form.appendChild(inputElement);
    cancelButton.onAction(dialog.close);
    const onclick = () => {
        if (!callback ||
            !(0,helpers.isFunction)(callback) ||
            callback(inputElement.value) !== false) {
            dialog.close();
        }
    };
    okButton.onAction(onclick);
    dialog.e.on(form, 'submit', () => {
        onclick();
        return false;
    });
    dialog.setFooter([okButton, cancelButton]);
    dialog.open(form, title || '&nbsp;', true, true);
    inputElement.focus();
    if (defaultValue !== undefined && defaultValue.length) {
        inputElement.value = defaultValue;
        inputElement.select();
    }
    return dialog;
};

;// CONCATENATED MODULE: ./src/modules/dialog/confirm.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const Confirm = (msg, title, callback) => {
    const dialog = new Dialog(), $div = dialog.c.fromHTML('<form class="jodit-dialog_prompt"></form>'), $label = dialog.c.element('label');
    if ((0,helpers.isFunction)(title)) {
        callback = title;
        title = undefined;
    }
    $label.appendChild(dialog.c.fromHTML(msg));
    $div.appendChild($label);
    const action = (yes) => () => {
        if (!callback || callback(yes) !== false) {
            dialog.close();
        }
    };
    const $cancel = (0,ui/* Button */.zx)(dialog, 'cancel', 'Cancel');
    const $ok = (0,ui/* Button */.zx)(dialog, 'ok', 'Yes');
    $cancel.onAction(action(false));
    $ok.onAction(action(true));
    dialog.e.on($div, 'submit', () => {
        action(true)();
        return false;
    });
    dialog.setFooter([$ok, $cancel]);
    dialog.open($div, title || '&nbsp;', true, true);
    $ok.focus();
    return dialog;
};

;// CONCATENATED MODULE: ./src/modules/dialog/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





;// CONCATENATED MODULE: ./src/core/plugin.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




class Plugin extends component/* ViewComponent */.Hr {
    constructor(jodit) {
        super(jodit);
        this.buttons = [];
        this.hasStyle = false;
        jodit.e
            .on('afterPluginSystemInit', () => {
            var _a;
            if ((0,helpers.isJoditObject)(jodit)) {
                (_a = this.buttons) === null || _a === void 0 ? void 0 : _a.forEach(btn => {
                    jodit.registerButton(btn);
                });
            }
        })
            .on('afterInit', () => {
            this.setStatus(component/* STATUSES.ready */.n$.ready);
            this.afterInit(jodit);
        })
            .on('beforeDestruct', this.destruct);
    }
    className() {
        return '';
    }
    init(jodit) {
    }
    destruct() {
        var _a, _b, _c;
        if (!this.isInDestruct) {
            this.setStatus(component/* STATUSES.beforeDestruct */.n$.beforeDestruct);
            const { j } = this;
            if ((0,helpers.isJoditObject)(j)) {
                (_a = this.buttons) === null || _a === void 0 ? void 0 : _a.forEach(btn => {
                    j === null || j === void 0 ? void 0 : j.unregisterButton(btn);
                });
            }
            (_c = (_b = this.j) === null || _b === void 0 ? void 0 : _b.events) === null || _c === void 0 ? void 0 : _c.off('beforeDestruct', this.destruct);
            this.beforeDestruct(this.j);
            super.destruct();
        }
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], Plugin.prototype, "destruct", null);

;// CONCATENATED MODULE: ./src/core/create.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class Create {
    constructor(document, createAttributes) {
        this.document = document;
        this.createAttributes = createAttributes;
        this.applyAttributes = (elm, attrs) => {
            (0,helpers.each)(attrs, (key, value) => {
                if ((0,helpers.isPlainObject)(value) && key === 'style') {
                    (0,helpers.css)(elm, value);
                }
                else {
                    if (key === 'className') {
                        key = 'class';
                    }
                    elm.setAttribute((0,helpers.kebabCase)(key), value.toString());
                }
            });
        };
    }
    get doc() {
        return (0,helpers.isFunction)(this.document) ? this.document() : this.document;
    }
    element(tagName, childrenOrAttributes, children) {
        const elm = this.doc.createElement(tagName.toLowerCase());
        this.applyCreateAttributes(elm);
        if (childrenOrAttributes) {
            if ((0,helpers.isPlainObject)(childrenOrAttributes)) {
                this.applyAttributes(elm, childrenOrAttributes);
            }
            else {
                children = childrenOrAttributes;
            }
        }
        if (children) {
            (0,helpers.asArray)(children).forEach((child) => elm.appendChild(typeof child === 'string' ? this.fromHTML(child) : child));
        }
        return elm;
    }
    div(className, childrenOrAttributes, children) {
        const div = this.element('div', childrenOrAttributes, children);
        if (className) {
            div.className = className;
        }
        return div;
    }
    span(className, childrenOrAttributes, children) {
        const span = this.element('span', childrenOrAttributes, children);
        if (className) {
            span.className = className;
        }
        return span;
    }
    a(className, childrenOrAttributes, children) {
        const a = this.element('a', childrenOrAttributes, children);
        if (className) {
            a.className = className;
        }
        return a;
    }
    text(value) {
        return this.doc.createTextNode(value);
    }
    fake() {
        return this.text(constants.INVISIBLE_SPACE);
    }
    fragment() {
        return this.doc.createDocumentFragment();
    }
    fromHTML(html, refsToggleElement) {
        const div = this.div();
        div.innerHTML = html.toString();
        const child = div.firstChild !== div.lastChild || !div.firstChild
            ? div
            : div.firstChild;
        dom/* Dom.safeRemove */.i.safeRemove(child);
        if (refsToggleElement) {
            const refElements = (0,helpers.refs)(child);
            Object.keys(refsToggleElement).forEach(key => {
                const elm = refElements[key];
                if (elm && refsToggleElement[key] === false) {
                    dom/* Dom.hide */.i.hide(elm);
                }
            });
        }
        return child;
    }
    applyCreateAttributes(elm) {
        if (this.createAttributes) {
            const ca = this.createAttributes;
            if (ca && ca[elm.tagName.toLowerCase()]) {
                const attrs = ca[elm.tagName.toLowerCase()];
                if ((0,helpers.isFunction)(attrs)) {
                    attrs(elm);
                }
                else if ((0,helpers.isPlainObject)(attrs)) {
                    this.applyAttributes(elm, attrs);
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/modules/file-browser/consts.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const F_CLASS = 'jodit-filebrowser';
const ITEM_CLASS = F_CLASS + '__files-item';
const ICON_LOADER = '<i class="jodit-icon_loader"></i>';

;// CONCATENATED MODULE: ./src/modules/file-browser/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.filebrowser */.D.prototype.filebrowser = {
    namespace: '',
    extraButtons: [],
    filter(item, search) {
        search = search.toLowerCase();
        if ((0,helpers.isString)(item)) {
            return item.toLowerCase().indexOf(search) !== -1;
        }
        if ((0,helpers.isString)(item.name)) {
            return item.name.toLowerCase().indexOf(search) !== -1;
        }
        if ((0,helpers.isString)(item.file)) {
            return item.file.toLowerCase().indexOf(search) !== -1;
        }
        return true;
    },
    sortBy: 'changed-desc',
    sort(a, b, sortBy) {
        const [sortAttr, arrow] = sortBy.toLowerCase().split('-'), asc = arrow === 'asc';
        const compareStr = (f, s) => {
            if (f < s) {
                return asc ? -1 : 1;
            }
            if (f > s) {
                return asc ? 1 : -1;
            }
            return 0;
        };
        if ((0,helpers.isString)(a)) {
            return compareStr(a.toLowerCase(), b.toLowerCase());
        }
        if (a[sortAttr] === undefined || sortAttr === 'name') {
            if ((0,helpers.isString)(a.name)) {
                return compareStr(a.name.toLowerCase(), b.name.toLowerCase());
            }
            if ((0,helpers.isString)(a.file)) {
                return compareStr(a.file.toLowerCase(), b.file.toLowerCase());
            }
            return 0;
        }
        switch (sortAttr) {
            case 'changed': {
                const f = new Date(a.changed).getTime(), s = new Date(b.changed).getTime();
                return asc ? f - s : s - f;
            }
            case 'size': {
                const f = (0,helpers.humanSizeToBytes)(a.size), s = (0,helpers.humanSizeToBytes)(b.size);
                return asc ? f - s : s - f;
            }
        }
        return 0;
    },
    editImage: true,
    preview: true,
    showPreviewNavigation: true,
    showSelectButtonInPreview: true,
    contextMenu: true,
    howLongShowMsg: 3000,
    createNewFolder: true,
    deleteFolder: true,
    renameFolder: true,
    moveFolder: true,
    moveFile: true,
    showFoldersPanel: true,
    width: 859,
    height: 400,
    buttons: [
        'filebrowser.upload',
        'filebrowser.remove',
        'filebrowser.update',
        'filebrowser.select',
        'filebrowser.edit',
        '|',
        'filebrowser.tiles',
        'filebrowser.list',
        '|',
        'filebrowser.filter',
        '|',
        'filebrowser.sort'
    ],
    removeButtons: [],
    fullsize: false,
    showTooltip: true,
    view: null,
    isSuccess(resp) {
        return resp.success;
    },
    getMessage(resp) {
        return resp.data.messages !== undefined && (0,helpers.isArray)(resp.data.messages)
            ? resp.data.messages.join(' ')
            : '';
    },
    showFileName: true,
    showFileSize: true,
    showFileChangeTime: true,
    saveStateInStorage: true,
    pixelOffsetLoadNewChunk: 200,
    getThumbTemplate(item, source, source_name) {
        const opt = this.options, showName = opt.showFileName, showSize = opt.showFileSize && item.size, showTime = opt.showFileChangeTime && item.time;
        let name = '';
        if (item.file !== undefined) {
            name = item.file;
        }
        const info = `<div class="${ITEM_CLASS}-info">${showName ? `<span class="${ITEM_CLASS}-info-filename">${name}</span>` : ''}${showSize
            ? `<span class="${ITEM_CLASS}-info-filesize">${item.size}</span>`
            : ''}${showTime
            ? `<span class="${ITEM_CLASS}-info-filechanged">${showTime}</span>`
            : ''}</div>`;
        return `<a
			data-jodit-filebrowser-item="true"
			data-is-file="${item.isImage ? 0 : 1}"
			draggable="true"
			class="${ITEM_CLASS}"
			href="${item.fileURL}"
			data-source="${source_name}"
			data-path="${item.path}"
			data-name="${name}"
			title="${name}"
			data-url="${item.fileURL}">
				<img
					data-is-file="${item.isImage ? 0 : 1}"
					data-src="${item.fileURL}"
					src="${item.imageURL}"
					alt="${name}"
					loading="lazy"
				/>
				${showName || showSize || showTime ? info : ''}
			</a>`;
    },
    ajax: {
        ...config/* Config.prototype.defaultAjaxOptions */.D.prototype.defaultAjaxOptions,
        url: '',
        async: true,
        data: {},
        cache: true,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        method: 'POST',
        processData: true,
        dataType: 'json',
        headers: {},
        prepareData(data) {
            return data;
        },
        process(resp) {
            return resp;
        }
    },
    create: {
        data: { action: 'folderCreate' }
    },
    getLocalFileByUrl: {
        data: { action: 'getLocalFileByUrl' }
    },
    resize: {
        data: { action: 'imageResize' }
    },
    crop: {
        data: { action: 'imageCrop' }
    },
    fileMove: {
        data: { action: 'fileMove' }
    },
    folderMove: {
        data: { action: 'folderMove' }
    },
    fileRename: {
        data: { action: 'fileRename' }
    },
    folderRename: {
        data: { action: 'folderRename' }
    },
    fileRemove: {
        data: { action: 'fileRemove' }
    },
    folderRemove: {
        data: { action: 'folderRemove' }
    },
    items: {
        data: { action: 'files' }
    },
    folder: {
        data: { action: 'folders' }
    },
    permissions: {
        data: { action: 'permissions' }
    }
};
config/* Config.prototype.controls.filebrowser */.D.prototype.controls.filebrowser = {
    upload: {
        icon: 'plus',
        isInput: true,
        isDisabled: (browser) => !browser.dataProvider.canI('FileUpload'),
        getContent: (filebrowser) => {
            const btn = new ui/* UIFileInput */.Z(filebrowser, {
                onlyImages: filebrowser.state.onlyImages
            });
            filebrowser.e.fire('bindUploader.filebrowser', btn.container);
            return btn.container;
        }
    },
    remove: {
        icon: 'bin',
        isDisabled: (browser) => {
            return (!browser.state.activeElements.length ||
                !browser.dataProvider.canI('FileRemove'));
        },
        exec: (editor) => {
            editor.e.fire('fileRemove.filebrowser');
        }
    },
    update: {
        exec: (editor) => {
            editor.e.fire('update.filebrowser');
        }
    },
    select: {
        icon: 'check',
        isDisabled: (browser) => !browser.state.activeElements.length,
        exec: (editor) => {
            editor.e.fire('select.filebrowser');
        }
    },
    edit: {
        icon: 'pencil',
        isDisabled: (browser) => {
            const selected = browser.state.activeElements;
            return (selected.length !== 1 ||
                !selected[0].isImage ||
                !(browser.dataProvider.canI('ImageCrop') ||
                    browser.dataProvider.canI('ImageResize')));
        },
        exec: editor => {
            editor.e.fire('edit.filebrowser');
        }
    },
    tiles: {
        icon: 'th',
        isActive: (filebrowser) => filebrowser.state.view === 'tiles',
        exec: (filebrowser) => {
            filebrowser.e.fire('view.filebrowser', 'tiles');
        }
    },
    list: {
        icon: 'th-list',
        isActive: (filebrowser) => filebrowser.state.view === 'list',
        exec: (filebrowser) => {
            filebrowser.e.fire('view.filebrowser', 'list');
        }
    },
    filter: {
        isInput: true,
        getContent: (filebrowser, _, b) => {
            const oldInput = b.container.querySelector('.jodit-input');
            if (oldInput) {
                return oldInput;
            }
            const input = filebrowser.c.element('input', {
                class: 'jodit-input',
                placeholder: filebrowser.i18n('Filter')
            });
            input.value = filebrowser.state.filterWord;
            filebrowser.e.on(input, 'keydown mousedown', filebrowser.async.debounce(() => {
                filebrowser.e.fire('filter.filebrowser', input.value);
            }, filebrowser.defaultTimeout));
            return input;
        }
    },
    sort: {
        isInput: true,
        getContent: (fb) => {
            const select = fb.c.fromHTML('<select class="jodit-input jodit-select">' +
                `<option value="changed-asc">${fb.i18n('Sort by changed')} (⬆)</option>` +
                `<option value="changed-desc">${fb.i18n('Sort by changed')} (⬇)</option>` +
                `<option value="name-asc">${fb.i18n('Sort by name')} (⬆)</option>` +
                `<option value="name-desc">${fb.i18n('Sort by name')} (⬇)</option>` +
                `<option value="size-asc">${fb.i18n('Sort by size')} (⬆)</option>` +
                `<option value="size-desc">${fb.i18n('Sort by size')} (⬇)</option>` +
                '</select>');
            select.value = fb.state.sortBy;
            fb.e
                .on('sort.filebrowser', (value) => {
                if (select.value !== value) {
                    select.value = value;
                }
            })
                .on(select, 'change', () => {
                fb.e.fire('sort.filebrowser', select.value);
            });
            return select;
        }
    }
};

;// CONCATENATED MODULE: ./src/modules/file-browser/builders/item.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

class FileBrowserItem {
    constructor(data) {
        this.data = data;
        Object.keys(data).forEach(key => {
            this[key] = data[key];
        });
    }
    static create(data) {
        if (data instanceof FileBrowserItem) {
            return data;
        }
        return new FileBrowserItem(data);
    }
    get path() {
        return (0,helpers.normalizePath)(this.data.source.path ? this.data.source.path + '/' : '/');
    }
    get imageURL() {
        const timestamp = new Date().getTime().toString(), { thumbIsAbsolute, source, thumb, file } = this.data, path = thumb || file;
        return thumbIsAbsolute && path
            ? path
            : (0,helpers.normalizeUrl)(source.baseurl, source.path, path || '') +
                '?_tmst=' +
                timestamp;
    }
    get fileURL() {
        let { name } = this.data;
        const { file, fileIsAbsolute, source } = this.data;
        if (file !== undefined) {
            name = file;
        }
        return fileIsAbsolute && name
            ? name
            : (0,helpers.normalizeUrl)(source.baseurl, source.path, name || '');
    }
    get time() {
        const { changed } = this.data;
        return ((changed &&
            (typeof changed === 'number'
                ? new Date(changed).toLocaleString()
                : changed)) ||
            '');
    }
    get uniqueHashKey() {
        const data = this.data;
        let key = [
            data.sourceName,
            data.name,
            data.file,
            this.time,
            data.thumb
        ].join('_');
        key = key.toLowerCase().replace(/[^0-9a-z\-.]/g, '-');
        return key;
    }
    toJSON() {
        return this.data;
    }
}

;// CONCATENATED MODULE: ./src/modules/file-browser/data-provider.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const DEFAULT_SOURCE_NAME = 'default';
const possibleRules = (/* unused pure expression or super */ null && ([
    'allowFiles',
    'allowFileMove',
    'allowFileUpload',
    'allowFileUploadRemote',
    'allowFileRemove',
    'allowFileRename',
    'allowFolders',
    'allowFolderMove',
    'allowFolderCreate',
    'allowFolderRemove',
    'allowFolderRename',
    'allowImageResize',
    'allowImageCrop'
]));
class DataProvider {
    constructor(parent, options) {
        this.parent = parent;
        this.options = options;
        this.__currentPermissions = null;
        this.ajaxInstances = new Map();
        this.progressHandler = (ignore) => { };
    }
    get o() {
        return this.options;
    }
    get(name, success, error) {
        const ai = this.ajaxInstances;
        if (ai.has(name)) {
            const ajax = ai.get(name);
            ajax === null || ajax === void 0 ? void 0 : ajax.abort();
            ai.delete(name);
        }
        const opts = (0,helpers.ConfigProto)(this.options[name] !== undefined
            ? this.options[name]
            : {}, (0,helpers.ConfigProto)({
            onProgress: this.progressHandler
        }, this.o.ajax));
        if (opts.prepareData) {
            opts.data = opts.prepareData.call(this, opts.data);
        }
        const ajax = new Ajax(this.parent, opts);
        let promise = ajax.send();
        ai.set(name, ajax);
        promise = promise.then(resp => {
            if (!this.isSuccess(resp)) {
                throw new Error(this.getMessage(resp));
            }
            return resp;
        });
        if (success) {
            promise = promise.then(success);
        }
        if (error) {
            promise = promise.catch(error);
        }
        return promise.finally(() => {
            ajax.destruct();
            ai.delete(name);
            this.progressHandler(100);
        });
    }
    onProgress(callback) {
        this.progressHandler = callback;
    }
    async permissions(path, source) {
        if (!this.o.permissions) {
            return null;
        }
        this.o.permissions.data.path = path;
        this.o.permissions.data.source = source;
        if (this.o.permissions.url) {
            return this.get('permissions').then(resp => {
                let process = this.o.permissions.process;
                if (!process) {
                    process = this.o.ajax.process;
                }
                if (process) {
                    const respData = process.call(self, resp);
                    if (respData.data.permissions) {
                        this.__currentPermissions = respData.data.permissions;
                    }
                }
                return this.__currentPermissions;
            });
        }
        return null;
    }
    canI(action) {
        const rule = 'allow' + action;
        if (false) {}
        return (this.__currentPermissions == null ||
            this.__currentPermissions[rule] === undefined ||
            this.__currentPermissions[rule]);
    }
    async items(path, source, mods = {}) {
        const opt = this.options;
        if (!opt.items) {
            return Promise.reject('Set Items api options');
        }
        opt.items.data.path = path;
        opt.items.data.source = source;
        opt.items.data.mods = mods;
        return this.get('items').then(resp => {
            let process = this.o.items.process;
            if (!process) {
                process = this.o.ajax.process;
            }
            if (process) {
                resp = process.call(self, resp);
            }
            return this.generateItemsList(resp.data.sources, mods);
        });
    }
    generateItemsList(sources, mods = {}) {
        const elements = [];
        const canBeFile = (item) => !mods.onlyImages || item.isImage === undefined || item.isImage, inFilter = (item) => {
            var _a;
            return !((_a = mods.filterWord) === null || _a === void 0 ? void 0 : _a.length) ||
                this.o.filter === undefined ||
                this.o.filter(item, mods.filterWord);
        };
        sources.forEach(source => {
            if (source.files && source.files.length) {
                const { sort } = this.o;
                if ((0,helpers.isFunction)(sort) && mods.sortBy) {
                    source.files.sort((a, b) => sort(a, b, mods.sortBy));
                }
                source.files.forEach((item) => {
                    if (inFilter(item) && canBeFile(item)) {
                        elements.push(FileBrowserItem.create({
                            ...item,
                            sourceName: source.name,
                            source
                        }));
                    }
                });
            }
        });
        return elements;
    }
    async tree(path, source) {
        path = (0,helpers.normalizeRelativePath)(path);
        await this.permissions(path, source);
        if (!this.o.folder) {
            return Promise.reject('Set Folder Api options');
        }
        this.o.folder.data.path = path;
        this.o.folder.data.source = source;
        return this.get('folder').then(resp => {
            let process = this.o.folder.process;
            if (!process) {
                process = this.o.ajax.process;
            }
            if (process) {
                resp = process.call(self, resp);
            }
            return resp.data.sources;
        });
    }
    getPathByUrl(url) {
        (0,helpers.set)('options.getLocalFileByUrl.data.url', url, this);
        return this.get('getLocalFileByUrl', resp => {
            if (this.isSuccess(resp)) {
                return resp.data;
            }
            throw (0,helpers.error)(this.getMessage(resp));
        });
    }
    createFolder(name, path, source) {
        const { create } = this.o;
        if (!create) {
            throw (0,helpers.error)('Set Create api options');
        }
        create.data.source = source;
        create.data.path = path;
        create.data.name = name;
        return this.get('create').then(resp => {
            if (this.isSuccess(resp)) {
                return true;
            }
            throw (0,helpers.error)(this.getMessage(resp));
        });
    }
    move(filepath, path, source, isFile) {
        const mode = isFile
            ? 'fileMove'
            : 'folderMove';
        const option = this.options[mode];
        if (!option) {
            throw (0,helpers.error)('Set Move api options');
        }
        option.data.from = filepath;
        option.data.path = path;
        option.data.source = source;
        return this.get(mode).then(resp => {
            if (this.isSuccess(resp)) {
                return true;
            }
            throw (0,helpers.error)(this.getMessage(resp));
        });
    }
    remove(action, path, file, source) {
        const fr = this.o[action];
        if (!fr) {
            throw (0,helpers.error)(`Set "${action}" api options`);
        }
        fr.data.path = path;
        fr.data.name = file;
        fr.data.source = source;
        return this.get(action).then(resp => {
            if (fr.process) {
                resp = fr.process.call(this, resp);
            }
            if (!this.isSuccess(resp)) {
                throw (0,helpers.error)(this.getMessage(resp));
            }
            return this.getMessage(resp);
        });
    }
    fileRemove(path, file, source) {
        return this.remove('fileRemove', path, file, source);
    }
    folderRemove(path, file, source) {
        return this.remove('folderRemove', path, file, source);
    }
    rename(action, path, name, newname, source) {
        const fr = this.o[action];
        if (!fr) {
            throw (0,helpers.error)(`Set "${action}" api options`);
        }
        fr.data.path = path;
        fr.data.name = name;
        fr.data.newname = newname;
        fr.data.source = source;
        return this.get(action).then(resp => {
            if (fr.process) {
                resp = fr.process.call(self, resp);
            }
            if (!this.isSuccess(resp)) {
                throw (0,helpers.error)(this.getMessage(resp));
            }
            return this.getMessage(resp);
        });
    }
    folderRename(path, name, newname, source) {
        return this.rename('folderRename', path, name, newname, source);
    }
    fileRename(path, name, newname, source) {
        return this.rename('fileRename', path, name, newname, source);
    }
    changeImage(type, path, source, name, newname, box) {
        if (!this.o[type]) {
            this.o[type] = {
                data: {}
            };
        }
        const query = this.o[type];
        if (query.data === undefined) {
            query.data = {
                action: type
            };
        }
        query.data.newname = newname || name;
        if (box) {
            query.data.box = box;
        }
        query.data.path = path;
        query.data.name = name;
        query.data.source = source;
        return this.get(type).then(resp => {
            if (this.isSuccess(resp)) {
                return true;
            }
            throw (0,helpers.error)(this.getMessage(resp));
        });
    }
    crop(path, source, name, newname, box) {
        return this.changeImage('crop', path, source, name, newname, box);
    }
    resize(path, source, name, newname, box) {
        return this.changeImage('resize', path, source, name, newname, box);
    }
    getMessage(resp) {
        return this.options.getMessage(resp);
    }
    isSuccess(resp) {
        return this.options.isSuccess(resp);
    }
    destruct() {
        this.ajaxInstances.forEach(a => a.destruct());
        this.ajaxInstances.clear();
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], DataProvider.prototype, "isSuccess", null);

;// CONCATENATED MODULE: ./src/modules/file-browser/factories.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


function makeDataProvider(parent, options) {
    return new DataProvider(parent, options);
}
function makeContextMenu(parent) {
    return new ContextMenu(parent);
}

// EXTERNAL MODULE: ./src/core/helpers/normalize/index.ts + 9 modules
var normalize = __webpack_require__(29);
;// CONCATENATED MODULE: ./src/modules/file-browser/listeners/state-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const state_listeners_DEFAULT_SOURCE_NAME = 'default', ITEM_ACTIVE_CLASS = ITEM_CLASS + '_active_true';
function stateListeners() {
    const { state, files, create, options, elementsMap } = this, getDomElement = (item) => {
        const key = item.uniqueHashKey;
        if (elementsMap[key]) {
            return elementsMap[key].elm;
        }
        const elm = create.fromHTML(options.getThumbTemplate.call(this, item, item.source, item.sourceName.toString()));
        elm.dataset.key = key;
        elementsMap[key] = {
            item,
            elm
        };
        return elementsMap[key].elm;
    };
    state
        .on(['change.currentPath', 'change.currentSource'], this.async.debounce(() => {
        this.loadTree();
    }, this.defaultTimeout))
        .on('beforeChange.activeElements', () => {
        state.activeElements.forEach(item => {
            const key = item.uniqueHashKey, { elm } = elementsMap[key];
            elm && elm.classList.remove(ITEM_ACTIVE_CLASS);
        });
    })
        .on('change.activeElements', () => {
        this.e.fire('changeSelection');
        state.activeElements.forEach(item => {
            const key = item.uniqueHashKey, { elm } = elementsMap[key];
            elm && elm.classList.add(ITEM_ACTIVE_CLASS);
        });
    })
        .on('change.view', () => {
        files.classList.remove(F_CLASS + '__files_view_tiles');
        files.classList.remove(F_CLASS + '__files_view_list');
        files.classList.add(F_CLASS + '__files_view_' + state.view);
        this.storage.set(F_CLASS + '_view', state.view);
    })
        .on('change.sortBy', () => {
        this.storage.set(F_CLASS + '_sortby', state.sortBy);
    })
        .on('change.elements', this.async.debounce(() => {
        dom/* Dom.detach */.i.detach(files);
        if (state.elements.length) {
            state.elements.forEach(item => {
                this.files.appendChild(getDomElement(item));
            });
        }
        else {
            files.appendChild(create.div(F_CLASS + '_no_files', this.i18n('There are no files')));
        }
    }, this.defaultTimeout))
        .on('change.sources', this.async.debounce(() => {
        dom/* Dom.detach */.i.detach(this.tree);
        state.sources.forEach(source => {
            const sourceName = source.name;
            if (sourceName && sourceName !== state_listeners_DEFAULT_SOURCE_NAME) {
                this.tree.appendChild(create.div(F_CLASS + '__source-title', sourceName));
            }
            source.folders.forEach((name) => {
                const folderElm = create.a(F_CLASS + '__tree-item', {
                    draggable: 'draggable',
                    href: 'javascript:void(0)',
                    'data-path': (0,normalize/* normalizePath */.AH)(source.path, name + '/'),
                    'data-name': name,
                    'data-source': sourceName,
                    'data-source-path': source.path
                }, create.span(F_CLASS + '__tree-item-title', name));
                const action = (actionName) => (e) => {
                    this.e.fire(`${actionName}.filebrowser`, {
                        name,
                        path: (0,normalize/* normalizePath */.AH)(source.path + '/'),
                        source: sourceName
                    });
                    e.stopPropagation();
                };
                this.e.on(folderElm, 'click', action('openFolder'));
                this.tree.appendChild(folderElm);
                if (name === '..' || name === '.') {
                    return;
                }
                if (options.renameFolder &&
                    this.dataProvider.canI('FolderRename')) {
                    const btn = (0,ui/* Button */.zx)(this, {
                        icon: { name: 'pencil' },
                        name: 'rename',
                        tooltip: 'Rename',
                        size: 'tiny'
                    });
                    btn.onAction(action('renameFolder'));
                    folderElm.appendChild(btn.container);
                }
                if (options.deleteFolder &&
                    this.dataProvider.canI('FolderRemove')) {
                    const btn = (0,ui/* Button */.zx)(this, {
                        icon: { name: 'cancel' },
                        name: 'remove',
                        tooltip: 'Delete',
                        size: 'tiny'
                    });
                    btn.onAction(action('removeFolder'));
                    folderElm.appendChild(btn.container);
                }
            });
            if (options.createNewFolder &&
                this.dataProvider.canI('FolderCreate')) {
                const button = (0,ui/* Button */.zx)(this, 'plus', 'Add folder', 'secondary');
                button.onAction(() => {
                    this.e.fire('addFolder', {
                        path: (0,normalize/* normalizePath */.AH)(source.path + '/'),
                        source: sourceName
                    });
                });
                this.tree.appendChild(button.container);
            }
        });
    }, this.defaultTimeout));
}

;// CONCATENATED MODULE: ./src/modules/image-editor/templates/form.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const jie = 'jodit-image-editor';
const gi = ui/* Icon.get.bind */.JO.get.bind(ui/* Icon */.JO);
const act = (el, className = 'jodti-image-editor_active') => el ? className : '';
const form_form = (editor, o) => {
    const i = editor.i18n.bind(editor);
    const switcher = (label, ref, active = true) => `<div class="jodit-form__group">
			<label>${i(label)}</label>

			<label class='jodi-switcher'>
				<input ${act(active, 'checked')} data-ref="${ref}" type="checkbox"/>
				<span class="jodi-switcher__slider"></span>
			</label>
	</div>`;
    return editor.create.fromHTML(`<form class="${jie} jodit-properties">
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-3-4 jodit_col-sm-5-5">
			${o.resize
        ? `<div class="${jie}__area ${jie}__area_resize ${jie}_active">
							<div data-ref="resizeBox" class="${jie}__box"></div>
							<div class="${jie}__resizer">
								<i class="jodit_bottomright"></i>
							</div>
						</div>`
        : ''}
			${o.crop
        ? `<div class="${jie}__area ${jie}__area_crop ${act(!o.resize)}">
							<div data-ref="cropBox" class="${jie}__box">
								<div class="${jie}__croper">
									<i class="jodit_bottomright"></i>
									<i class="${jie}__sizes"></i>
								</div>
							</div>
						</div>`
        : ''}
			</div>
			<div class="jodit_col-lg-1-4 jodit_col-sm-5-5">
			${o.resize
        ? `<div data-area="resize" class="${jie}__slider ${jie}_active">
							<div class="${jie}__slider-title">
								${gi('resize')}
								${i('Resize')}
							</div>
							<div class="${jie}__slider-content">
								<div class="jodit-form__group">
									<label>
										${i('Width')}
									</label>
									<input type="number" data-ref="widthInput" class="jodit-input"/>
								</div>
								<div class="jodit-form__group">
									<label>
										${i('Height')}
									</label>
									<input type="number" data-ref="heightInput" class="jodit-input"/>
								</div>
								${switcher('Keep Aspect Ratio', 'keepAspectRatioResize')}
							</div>
						</div>`
        : ''}
			${o.crop
        ? `<div data-area="crop" class="${jie}__slider ${act(!o.resize)}'">
							<div class="${jie}__slider-title">
								${gi('crop')}
								${i('Crop')}
							</div>
							<div class="${jie}__slider-content">
								${switcher('Keep Aspect Ratio', 'keepAspectRatioCrop')}
							</div>
						</div>`
        : ''}
			</div>
		</div>
	</form>`);
};

;// CONCATENATED MODULE: ./src/modules/image-editor/image-editor.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ImageEditor_1;










config/* Config.prototype.imageeditor */.D.prototype.imageeditor = {
    min_width: 20,
    min_height: 20,
    closeAfterSave: false,
    width: '85%',
    height: '85%',
    crop: true,
    resize: true,
    resizeUseRatio: true,
    resizeMinWidth: 20,
    resizeMinHeight: 20,
    cropUseRatio: true,
    cropDefaultWidth: '70%',
    cropDefaultHeight: '70%'
};
const image_editor_jie = 'jodit-image-editor';
const TABS = {
    resize: 'resize',
    crop: 'crop'
};
let ImageEditor = ImageEditor_1 = class ImageEditor extends component/* ViewComponent */.Hr {
    constructor(editor) {
        super(editor);
        this.resizeUseRatio = true;
        this.cropUseRatio = true;
        this.clicked = false;
        this.start_x = 0;
        this.start_y = 0;
        this.top_x = 0;
        this.top_y = 0;
        this.width = 0;
        this.height = 0;
        this.activeTab = TABS.resize;
        this.naturalWidth = 0;
        this.naturalHeight = 0;
        this.ratio = 0;
        this.new_h = 0;
        this.new_w = 0;
        this.diff_x = 0;
        this.diff_y = 0;
        this.cropBox = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.resizeBox = {
            w: 0,
            h: 0
        };
        this.calcCropBox = () => {
            const node = this.crop_box.parentNode, w = node.offsetWidth * 0.8, h = node.offsetHeight * 0.8;
            let wn = w, hn = h;
            const { naturalWidth: nw, naturalHeight: nh } = this;
            if (w > nw && h > nh) {
                wn = nw;
                hn = nh;
            }
            else if (this.ratio > w / h) {
                wn = w;
                hn = nh * (w / nw);
            }
            else {
                wn = nw * (h / nh);
                hn = h;
            }
            (0,helpers.css)(this.crop_box, {
                width: wn,
                height: hn
            });
        };
        this.showCrop = () => {
            if (!this.cropImage) {
                return;
            }
            this.calcCropBox();
            const w = this.cropImage.offsetWidth ||
                this.image.offsetWidth ||
                this.image.naturalWidth;
            this.new_w = ImageEditor_1.calcValueByPercent(w, this.o.cropDefaultWidth);
            const h = this.cropImage.offsetHeight ||
                this.image.offsetHeight ||
                this.image.naturalHeight;
            if (this.cropUseRatio) {
                this.new_h = this.new_w / this.ratio;
            }
            else {
                this.new_h = ImageEditor_1.calcValueByPercent(h, this.o.cropDefaultHeight);
            }
            (0,helpers.css)(this.cropHandler, {
                backgroundImage: 'url(' + (0,helpers.attr)(this.cropImage, 'src') + ')',
                width: this.new_w,
                height: this.new_h,
                left: w / 2 - this.new_w / 2,
                top: h / 2 - this.new_h / 2
            });
            this.j.e.fire(this.cropHandler, 'updatesize');
        };
        this.updateCropBox = () => {
            if (!this.cropImage) {
                return;
            }
            const ratioX = this.cropImage.offsetWidth / this.naturalWidth, ratioY = this.cropImage.offsetHeight / this.naturalHeight;
            this.cropBox.x = (0,helpers.css)(this.cropHandler, 'left') / ratioX;
            this.cropBox.y = (0,helpers.css)(this.cropHandler, 'top') / ratioY;
            this.cropBox.w = this.cropHandler.offsetWidth / ratioX;
            this.cropBox.h = this.cropHandler.offsetHeight / ratioY;
            this.sizes.textContent =
                this.cropBox.w.toFixed(0) + 'x' + this.cropBox.h.toFixed(0);
        };
        this.updateResizeBox = () => {
            this.resizeBox.w = this.image.offsetWidth || this.naturalWidth;
            this.resizeBox.h = this.image.offsetHeight || this.naturalHeight;
        };
        this.setHandlers = () => {
            const self = this;
            const { widthInput, heightInput } = (0,helpers.refs)(this.editor);
            self.j.e
                .on([
                self.editor.querySelector('.jodit_bottomright'),
                self.cropHandler
            ], `mousedown.${image_editor_jie}`, this.onResizeHandleMouseDown)
                .on(this.j.ow, `resize.${image_editor_jie}`, () => {
                this.j.e.fire(self.resizeHandler, 'updatesize');
                self.showCrop();
                this.j.e.fire(self.cropHandler, 'updatesize');
            });
            self.j.e
                .on((0,helpers.toArray)(this.editor.querySelectorAll(`.${image_editor_jie}__slider-title`)), 'click', this.onTitleModeClick)
                .on([widthInput, heightInput], 'input', this.onChangeSizeInput);
            const { keepAspectRatioResize, keepAspectRatioCrop } = (0,helpers.refs)(this.editor);
            if (keepAspectRatioResize) {
                keepAspectRatioResize.addEventListener('change', () => {
                    this.resizeUseRatio = keepAspectRatioResize.checked;
                });
            }
            if (keepAspectRatioCrop) {
                keepAspectRatioCrop.addEventListener('change', () => {
                    this.cropUseRatio = keepAspectRatioCrop.checked;
                });
            }
            self.j.e
                .on(self.resizeHandler, 'updatesize', () => {
                (0,helpers.css)(self.resizeHandler, {
                    top: 0,
                    left: 0,
                    width: self.image.offsetWidth || self.naturalWidth,
                    height: self.image.offsetHeight || self.naturalHeight
                });
                this.updateResizeBox();
            })
                .on(self.cropHandler, 'updatesize', () => {
                if (!self.cropImage) {
                    return;
                }
                let new_x = (0,helpers.css)(self.cropHandler, 'left'), new_y = (0,helpers.css)(self.cropHandler, 'top'), new_width = self.cropHandler.offsetWidth, new_height = self.cropHandler.offsetHeight;
                if (new_x < 0) {
                    new_x = 0;
                }
                if (new_y < 0) {
                    new_y = 0;
                }
                if (new_x + new_width > self.cropImage.offsetWidth) {
                    new_width = self.cropImage.offsetWidth - new_x;
                    if (self.cropUseRatio) {
                        new_height = new_width / self.ratio;
                    }
                }
                if (new_y + new_height > self.cropImage.offsetHeight) {
                    new_height = self.cropImage.offsetHeight - new_y;
                    if (self.cropUseRatio) {
                        new_width = new_height * self.ratio;
                    }
                }
                (0,helpers.css)(self.cropHandler, {
                    width: new_width,
                    height: new_height,
                    left: new_x,
                    top: new_y,
                    backgroundPosition: -new_x - 1 + 'px ' + (-new_y - 1) + 'px',
                    backgroundSize: self.cropImage.offsetWidth +
                        'px ' +
                        self.cropImage.offsetHeight +
                        'px'
                });
                self.updateCropBox();
            });
            Object.values(self.buttons).forEach(button => {
                button.onAction(() => {
                    const data = {
                        action: self.activeTab,
                        box: self.activeTab === TABS.resize
                            ? self.resizeBox
                            : self.cropBox
                    };
                    switch (button) {
                        case self.buttons.saveas:
                            Prompt(self.j.i18n('Enter new name'), self.j.i18n('Save in new file'), (name) => {
                                if (!(0,helpers.trim)(name)) {
                                    Alert(self.j.i18n('The name should not be empty')).bindDestruct(this.j);
                                    return false;
                                }
                                self.onSave(name, data, self.hide, (e) => {
                                    Alert(e.message).bindDestruct(self.j);
                                });
                            }).bindDestruct(this.j);
                            break;
                        case self.buttons.save:
                            self.onSave(undefined, data, self.hide, (e) => {
                                Alert(e.message).bindDestruct(self.j);
                            });
                            break;
                        case self.buttons.reset:
                            if (self.activeTab === TABS.resize) {
                                (0,helpers.css)(self.image, {
                                    width: null,
                                    height: null
                                });
                                widthInput.value = self.naturalWidth.toString();
                                heightInput.value = self.naturalHeight.toString();
                                self.j.e.fire(self.resizeHandler, 'updatesize');
                            }
                            else {
                                self.showCrop();
                            }
                            break;
                    }
                });
            });
        };
        this.options =
            editor && editor.o && editor.o.imageeditor
                ? editor.o.imageeditor
                : config/* Config.defaultOptions.imageeditor */.D.defaultOptions.imageeditor;
        const o = this.options;
        this.resizeUseRatio = o.resizeUseRatio;
        this.cropUseRatio = o.cropUseRatio;
        this.buttons = {
            reset: (0,ui_button/* Button */.zx)(this.j, 'update', 'Reset'),
            save: (0,ui_button/* Button */.zx)(this.j, 'save', 'Save'),
            saveas: (0,ui_button/* Button */.zx)(this.j, 'save', 'Save as ...')
        };
        this.activeTab = o.resize ? TABS.resize : TABS.crop;
        this.editor = form_form(this.j, this.options);
        const { resizeBox, cropBox } = (0,helpers.refs)(this.editor);
        this.resize_box = resizeBox;
        this.crop_box = cropBox;
        this.sizes = this.editor.querySelector(`.${image_editor_jie}__area.${image_editor_jie}__area_crop .jodit-image-editor__sizes`);
        this.resizeHandler = this.editor.querySelector(`.${image_editor_jie}__resizer`);
        this.cropHandler = this.editor.querySelector(`.${image_editor_jie}__croper`);
        this.dialog = new Dialog({
            fullsize: this.j.o.fullsize,
            globalFullSize: this.j.o.globalFullSize,
            language: this.j.o.language,
            buttons: ['fullsize', 'dialog.close']
        });
        this.dialog.setContent(this.editor);
        this.dialog.setSize(this.o.width, this.o.height);
        this.dialog.setHeader([
            this.buttons.reset,
            this.buttons.save,
            this.buttons.saveas
        ]);
        this.setHandlers();
    }
    className() {
        return 'ImageEditor';
    }
    onTitleModeClick(e) {
        const self = this, title = e.target;
        const slide = title === null || title === void 0 ? void 0 : title.parentElement;
        if (!slide) {
            return;
        }
        (0,helpers.$$)(`.${image_editor_jie}__slider,.${image_editor_jie}__area`, self.editor).forEach(elm => elm.classList.remove(`${image_editor_jie}_active`));
        slide.classList.add(`${image_editor_jie}_active`);
        self.activeTab = (0,helpers.attr)(slide, '-area') || TABS.resize;
        const tab = self.editor.querySelector(`.${image_editor_jie}__area.${image_editor_jie}__area_` + self.activeTab);
        if (tab) {
            tab.classList.add(`${image_editor_jie}_active`);
        }
        if (self.activeTab === TABS.crop) {
            self.showCrop();
        }
    }
    onChangeSizeInput(e) {
        const self = this, input = e.target, { widthInput, heightInput } = (0,helpers.refs)(this.editor), isWidth = (0,helpers.attr)(input, 'data-ref') === 'widthInput', x = parseInt(input.value, 10), minX = isWidth ? self.o.min_width : self.o.min_height, minY = !isWidth ? self.o.min_width : self.o.min_height;
        let y;
        if (x > minX) {
            (0,helpers.css)(self.image, isWidth ? 'width' : 'height', x);
            if (self.resizeUseRatio) {
                y = isWidth
                    ? Math.round(x / self.ratio)
                    : Math.round(x * self.ratio);
                if (y > minY) {
                    (0,helpers.css)(self.image, !isWidth ? 'width' : 'height', y);
                    if (isWidth) {
                        heightInput.value = y.toString();
                    }
                    else {
                        widthInput.value = y.toString();
                    }
                }
            }
        }
        this.j.e.fire(self.resizeHandler, 'updatesize');
    }
    onResizeHandleMouseDown(e) {
        const self = this;
        self.target = e.target;
        e.preventDefault();
        e.stopImmediatePropagation();
        self.clicked = true;
        self.start_x = e.clientX;
        self.start_y = e.clientY;
        if (self.activeTab === TABS.crop) {
            self.top_x = (0,helpers.css)(self.cropHandler, 'left');
            self.top_y = (0,helpers.css)(self.cropHandler, 'top');
            self.width = self.cropHandler.offsetWidth;
            self.height = self.cropHandler.offsetHeight;
        }
        else {
            self.width = self.image.offsetWidth;
            self.height = self.image.offsetHeight;
        }
        self.j.e
            .on(this.j.ow, 'mousemove', this.onGlobalMouseMove)
            .one(this.j.ow, 'mouseup', this.onGlobalMouseUp);
    }
    onGlobalMouseUp(e) {
        if (this.clicked) {
            this.clicked = false;
            e.stopImmediatePropagation();
            this.j.e.off(this.j.ow, 'mousemove', this.onGlobalMouseMove);
        }
    }
    onGlobalMouseMove(e) {
        const self = this;
        if (!self.clicked) {
            return;
        }
        const { widthInput, heightInput } = (0,helpers.refs)(this.editor);
        self.diff_x = e.clientX - self.start_x;
        self.diff_y = e.clientY - self.start_y;
        if ((self.activeTab === TABS.resize && self.resizeUseRatio) ||
            (self.activeTab === TABS.crop && self.cropUseRatio)) {
            if (self.diff_x) {
                self.new_w = self.width + self.diff_x;
                self.new_h = Math.round(self.new_w / self.ratio);
            }
            else {
                self.new_h = self.height + self.diff_y;
                self.new_w = Math.round(self.new_h * self.ratio);
            }
        }
        else {
            self.new_w = self.width + self.diff_x;
            self.new_h = self.height + self.diff_y;
        }
        if (self.activeTab === TABS.resize) {
            if (self.new_w > self.o.resizeMinWidth) {
                (0,helpers.css)(self.image, 'width', self.new_w + 'px');
                widthInput.value = self.new_w.toString();
            }
            if (self.new_h > self.o.resizeMinHeight) {
                (0,helpers.css)(self.image, 'height', self.new_h + 'px');
                heightInput.value = self.new_h.toString();
            }
            this.j.e.fire(self.resizeHandler, 'updatesize');
        }
        else {
            if (self.target !== self.cropHandler) {
                if (self.top_x + self.new_w > self.cropImage.offsetWidth) {
                    self.new_w = self.cropImage.offsetWidth - self.top_x;
                }
                if (self.top_y + self.new_h > self.cropImage.offsetHeight) {
                    self.new_h = self.cropImage.offsetHeight - self.top_y;
                }
                (0,helpers.css)(self.cropHandler, {
                    width: self.new_w,
                    height: self.new_h
                });
            }
            else {
                if (self.top_x + self.diff_x + self.cropHandler.offsetWidth >
                    self.cropImage.offsetWidth) {
                    self.diff_x =
                        self.cropImage.offsetWidth -
                            self.top_x -
                            self.cropHandler.offsetWidth;
                }
                (0,helpers.css)(self.cropHandler, 'left', self.top_x + self.diff_x);
                if (self.top_y + self.diff_y + self.cropHandler.offsetHeight >
                    self.cropImage.offsetHeight) {
                    self.diff_y =
                        self.cropImage.offsetHeight -
                            self.top_y -
                            self.cropHandler.offsetHeight;
                }
                (0,helpers.css)(self.cropHandler, 'top', self.top_y + self.diff_y);
            }
            this.j.e.fire(self.cropHandler, 'updatesize');
        }
    }
    get o() {
        return this.options;
    }
    hide() {
        this.dialog.close();
    }
    open(url, save) {
        return this.j.async.promise((resolve) => {
            const timestamp = new Date().getTime();
            this.image = this.j.c.element('img');
            (0,helpers.$$)('img,.jodit-icon_loader', this.resize_box).forEach(dom/* Dom.safeRemove */.i.safeRemove);
            (0,helpers.$$)('img,.jodit-icon_loader', this.crop_box).forEach(dom/* Dom.safeRemove */.i.safeRemove);
            (0,helpers.css)(this.cropHandler, 'background', 'transparent');
            this.onSave = save;
            this.resize_box.appendChild(this.j.c.element('i', { class: 'jodit-icon_loader' }));
            this.crop_box.appendChild(this.j.c.element('i', { class: 'jodit-icon_loader' }));
            if (/\?/.test(url)) {
                url += '&_tst=' + timestamp;
            }
            else {
                url += '?_tst=' + timestamp;
            }
            this.image.setAttribute('src', url);
            this.dialog.open();
            const { widthInput, heightInput } = (0,helpers.refs)(this.editor);
            const onload = () => {
                if (this.isDestructed) {
                    return;
                }
                this.image.removeEventListener('load', onload);
                this.naturalWidth = this.image.naturalWidth;
                this.naturalHeight = this.image.naturalHeight;
                widthInput.value = this.naturalWidth.toString();
                heightInput.value = this.naturalHeight.toString();
                this.ratio = this.naturalWidth / this.naturalHeight;
                this.resize_box.appendChild(this.image);
                this.cropImage = this.image.cloneNode(true);
                this.crop_box.appendChild(this.cropImage);
                (0,helpers.$$)('.jodit-icon_loader', this.editor).forEach(dom/* Dom.safeRemove */.i.safeRemove);
                if (this.activeTab === TABS.crop) {
                    this.showCrop();
                }
                this.j.e.fire(this.resizeHandler, 'updatesize');
                this.j.e.fire(this.cropHandler, 'updatesize');
                this.dialog.setPosition();
                this.j.e.fire('afterImageEditor');
                resolve(this.dialog);
            };
            this.image.addEventListener('load', onload);
            if (this.image.complete) {
                onload();
            }
        });
    }
    destruct() {
        if (this.isDestructed) {
            return;
        }
        if (this.dialog && !this.dialog.isInDestruct) {
            this.dialog.destruct();
        }
        dom/* Dom.safeRemove */.i.safeRemove(this.editor);
        if (this.j.e) {
            this.j.e
                .off(this.j.ow, 'mousemove', this.onGlobalMouseMove)
                .off(this.j.ow, 'mouseup', this.onGlobalMouseUp)
                .off(this.ow, `.${image_editor_jie}`)
                .off(`.${image_editor_jie}`);
        }
        super.destruct();
    }
};
ImageEditor.calcValueByPercent = (value, percent) => {
    const percentStr = percent.toString();
    const valueNbr = parseFloat(value.toString());
    let match;
    match = /^[-+]?[0-9]+(px)?$/.exec(percentStr);
    if (match) {
        return parseInt(percentStr, 10);
    }
    match = /^([-+]?[0-9.]+)%$/.exec(percentStr);
    if (match) {
        return Math.round(valueNbr * (parseFloat(match[1]) / 100));
    }
    return valueNbr || 0;
};
(0,tslib_es6.__decorate)([
    decorators.autobind
], ImageEditor.prototype, "onTitleModeClick", null);
(0,tslib_es6.__decorate)([
    (0,decorators.debounce)(),
    decorators.autobind
], ImageEditor.prototype, "onChangeSizeInput", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], ImageEditor.prototype, "onResizeHandleMouseDown", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], ImageEditor.prototype, "onGlobalMouseUp", null);
(0,tslib_es6.__decorate)([
    (0,decorators.throttle)(10)
], ImageEditor.prototype, "onGlobalMouseMove", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], ImageEditor.prototype, "hide", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], ImageEditor.prototype, "open", null);
ImageEditor = ImageEditor_1 = (0,tslib_es6.__decorate)([
    decorators.component
], ImageEditor);

function openImageEditor(href, name, path, source, onSuccess, onFailed) {
    return this.getInstance('ImageEditor', this.o).open(href, (newname, box, success, failed) => {
        let promise;
        if (box.action === 'resize') {
            promise = this.dataProvider.resize(path, source, name, newname, box.box);
        }
        else {
            promise = this.dataProvider.crop(path, source, name, newname, box.box);
        }
        promise
            .then(ok => {
            if (ok) {
                success();
                if (onSuccess) {
                    onSuccess();
                }
            }
        })
            .catch(error => {
            failed(error);
            if (onFailed) {
                onFailed(error);
            }
        });
    });
}

;// CONCATENATED MODULE: ./src/modules/file-browser/builders/context-menu.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








const CLASS_PREVIEW = F_CLASS + '_preview_', preview_tpl_next = (next = 'next', right = 'right') => `<a href="javascript:void(0)" class="${CLASS_PREVIEW}navigation ${CLASS_PREVIEW}navigation-${next}">` +
    '' +
    ui/* Icon.get */.JO.get('angle-' + right) +
    '</a>';
/* harmony default export */ const context_menu = ((self) => {
    if (!self.o.contextMenu) {
        return () => { };
    }
    const contextmenu = makeContextMenu(self);
    return (e) => {
        const a = getItem(e.target, self.dialog.container);
        if (!a) {
            return;
        }
        let item = a;
        const opt = self.options, ga = (key) => (0,helpers.attr)(item, key) || '';
        self.async.setTimeout(() => {
            contextmenu.show(e.clientX, e.clientY, [
                ga('data-is-file') !== '1' &&
                    opt.editImage &&
                    (self.dataProvider.canI('ImageResize') ||
                        self.dataProvider.canI('ImageCrop'))
                    ? {
                        icon: 'pencil',
                        title: 'Edit',
                        exec: () => {
                            return openImageEditor.call(self, ga('href'), ga('data-name'), ga('data-path'), ga('data-source'));
                        }
                    }
                    : false,
                self.dataProvider.canI('FileRename')
                    ? {
                        icon: 'italic',
                        title: 'Rename',
                        exec: async () => {
                            self.e.fire('fileRename.filebrowser', ga('data-name'), ga('data-path'), ga('data-source'));
                        }
                    }
                    : false,
                self.dataProvider.canI('FileRemove')
                    ? {
                        icon: 'bin',
                        title: 'Delete',
                        exec: async () => {
                            await self.deleteFile(ga('data-name'), ga('data-source'));
                            self.state.activeElements = [];
                            return self.loadTree();
                        }
                    }
                    : false,
                opt.preview
                    ? {
                        icon: 'eye',
                        title: 'Preview',
                        exec: () => {
                            const preview = new Dialog({
                                fullsize: self.o.fullsize,
                                language: self.o.language,
                                buttons: ['fullsize', 'dialog.close']
                            }), temp_content = self.c.div(F_CLASS + '_preview', ICON_LOADER), preview_box = self.c.div(F_CLASS + '_preview_box'), next = self.c.fromHTML(preview_tpl_next()), prev = self.c.fromHTML(preview_tpl_next('prev', 'left')), addLoadHandler = (src) => {
                                const image = self.c.element('img');
                                image.setAttribute('src', src);
                                const onload = () => {
                                    var _a;
                                    if (self.isInDestruct) {
                                        return;
                                    }
                                    self.e.off(image, 'load');
                                    dom/* Dom.detach */.i.detach(temp_content);
                                    if (opt.showPreviewNavigation) {
                                        if (dom/* Dom.prevWithClass */.i.prevWithClass(item, ITEM_CLASS)) {
                                            temp_content.appendChild(prev);
                                        }
                                        if (dom/* Dom.nextWithClass */.i.nextWithClass(item, ITEM_CLASS)) {
                                            temp_content.appendChild(next);
                                        }
                                    }
                                    temp_content.appendChild(preview_box);
                                    preview_box.appendChild(image);
                                    preview.setPosition();
                                    (_a = self === null || self === void 0 ? void 0 : self.events) === null || _a === void 0 ? void 0 : _a.fire('previewOpenedAndLoaded');
                                };
                                self.e.on(image, 'load', onload);
                                if (image.complete) {
                                    onload();
                                }
                            };
                            self.e.on([next, prev], 'click', function () {
                                if (this.classList.contains(CLASS_PREVIEW +
                                    'navigation-next')) {
                                    item = dom/* Dom.nextWithClass */.i.nextWithClass(item, ITEM_CLASS);
                                }
                                else {
                                    item = dom/* Dom.prevWithClass */.i.prevWithClass(item, ITEM_CLASS);
                                }
                                if (!item) {
                                    throw (0,helpers.error)('Need element');
                                }
                                dom/* Dom.detach */.i.detach(temp_content);
                                dom/* Dom.detach */.i.detach(preview_box);
                                temp_content.innerHTML = ICON_LOADER;
                                addLoadHandler(ga('href'));
                            });
                            self.e.on('beforeDestruct', () => {
                                preview.destruct();
                            });
                            preview.container.classList.add(F_CLASS + '_preview_dialog');
                            preview.setContent(temp_content);
                            preview.setPosition();
                            preview.open();
                            addLoadHandler(ga('href'));
                            self.events
                                .on('beforeDestruct', () => {
                                preview.destruct();
                            })
                                .fire('previewOpened');
                        }
                    }
                    : false,
                {
                    icon: 'upload',
                    title: 'Download',
                    exec: () => {
                        const url = ga('href');
                        if (url) {
                            self.ow.open(url);
                        }
                    }
                }
            ]);
        }, self.defaultTimeout);
        self === null || self === void 0 ? void 0 : self.e.on('beforeDestruct', () => {
            contextmenu.destruct();
        });
        e.stopPropagation();
        e.preventDefault();
        return false;
    };
});

;// CONCATENATED MODULE: ./src/modules/file-browser/listeners/native-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




const getItem = (node, root, tag = 'a') => dom/* Dom.closest */.i.closest(node, elm => dom/* Dom.isElement */.i.isElement(elm) && dom/* Dom.isTag */.i.isTag(elm, tag), root);
function nativeListeners() {
    let dragElement = false;
    const self = this;
    const elementToItem = (elm) => {
        const { key } = elm.dataset, { item } = self.elementsMap[key || ''];
        return item;
    };
    self.e
        .on(self.tree, 'dragstart', (e) => {
        const a = getItem(e.target, self.dialog.container);
        if (!a) {
            return;
        }
        if (self.o.moveFolder) {
            dragElement = a;
        }
    })
        .on(self.tree, 'drop', (e) => {
        if ((self.o.moveFile || self.o.moveFolder) && dragElement) {
            let path = (0,helpers.attr)(dragElement, '-path') || '';
            if (!self.o.moveFolder &&
                dragElement.classList.contains(F_CLASS + '__tree-item')) {
                return false;
            }
            if (dragElement.classList.contains(ITEM_CLASS)) {
                path += (0,helpers.attr)(dragElement, '-name');
                if (!self.o.moveFile) {
                    return false;
                }
            }
            const a = getItem(e.target, self.dialog.container);
            if (!a) {
                return;
            }
            self.dataProvider
                .move(path, (0,helpers.attr)(a, '-path') || '', (0,helpers.attr)(a, '-source') || '', dragElement.classList.contains(ITEM_CLASS))
                .then(() => {
                self.loadTree();
            }, self.status);
            dragElement = false;
        }
    })
        .on(self.files, 'contextmenu', context_menu(self))
        .on(self.files, 'click', (e) => {
        if (!(0,helpers.ctrlKey)(e)) {
            this.state.activeElements = [];
        }
    })
        .on(self.files, 'click', (e) => {
        const a = getItem(e.target, self.dialog.container);
        if (!a) {
            return;
        }
        const item = elementToItem(a);
        if (!item) {
            return;
        }
        if (!(0,helpers.ctrlKey)(e)) {
            self.state.activeElements = [item];
        }
        else {
            self.state.activeElements = [
                ...self.state.activeElements,
                item
            ];
        }
        e.stopPropagation();
        return false;
    })
        .on(self.files, 'dragstart', (e) => {
        if (self.o.moveFile) {
            const a = getItem(e.target, self.dialog.container);
            if (!a) {
                return;
            }
            dragElement = a;
        }
    })
        .on(self.dialog.container, 'drop', (e) => e.preventDefault());
}

;// CONCATENATED MODULE: ./src/modules/file-browser/listeners/self-listeners.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





function selfListeners() {
    const state = this.state, dp = this.dataProvider, self = this;
    self.e
        .on('view.filebrowser', (view) => {
        if (view !== state.view) {
            state.view = view;
        }
    })
        .on('sort.filebrowser', (value) => {
        if (value !== state.sortBy) {
            state.sortBy = value;
            self.loadItems();
        }
    })
        .on('filter.filebrowser', (value) => {
        if (value !== state.filterWord) {
            state.filterWord = value;
            self.loadItems();
        }
    })
        .on('openFolder.filebrowser', (data) => {
        let path;
        if (data.name === '..') {
            path = data.path
                .split('/')
                .filter((p) => p.length)
                .slice(0, -1)
                .join('/');
        }
        else {
            path = (0,helpers.normalizePath)(data.path, data.name);
        }
        self.state.currentPath = path;
        self.state.currentSource =
            data.name === '.' ? DEFAULT_SOURCE_NAME : data.source;
    })
        .on('removeFolder.filebrowser', (data) => {
        Confirm(self.i18n('Are you sure?'), self.i18n('Delete'), (yes) => {
            if (yes) {
                dp.folderRemove(data.path, data.name, data.source)
                    .then(message => {
                    self.status(message, true);
                    self.loadTree();
                })
                    .catch(self.status);
            }
        }).bindDestruct(self);
    })
        .on('renameFolder.filebrowser', (data) => {
        Prompt(self.i18n('Enter new name'), self.i18n('Rename'), (newName) => {
            if (!(0,checker/* isValidName */.r1)(newName)) {
                self.status(self.i18n('Enter new name'));
                return false;
            }
            dp.folderRename(data.path, data.name, newName, data.source)
                .then(message => {
                self.state.activeElements = [];
                self.status(message, true);
                self.loadTree();
            })
                .catch(self.status);
            return;
        }, self.i18n('type name'), data.name).bindDestruct(self);
    })
        .on('addFolder.filebrowser', (data) => {
        Prompt(self.i18n('Enter Directory name'), self.i18n('Create directory'), (name) => {
            dp.createFolder(name, data.path, data.source).then(() => {
                self.loadTree();
            }, self.status);
        }, self.i18n('type name')).bindDestruct(self);
    })
        .on('fileRemove.filebrowser', () => {
        if (self.state.activeElements.length) {
            Confirm(self.i18n('Are you sure?'), '', (yes) => {
                if (yes) {
                    const promises = [];
                    self.state.activeElements.forEach(item => {
                        promises.push(self.deleteFile(item.file || item.name || '', item.sourceName));
                    });
                    self.state.activeElements = [];
                    Promise.all(promises).then(() => {
                        return self.loadTree();
                    });
                }
            }).bindDestruct(self);
        }
    })
        .on('edit.filebrowser', () => {
        if (self.state.activeElements.length === 1) {
            const [file] = this.state.activeElements;
            openImageEditor.call(self, file.fileURL, file.file || '', file.path, file.sourceName);
        }
    })
        .on('fileRename.filebrowser', (name, path, source) => {
        if (self.state.activeElements.length === 1) {
            Prompt(self.i18n('Enter new name'), self.i18n('Rename'), (newName) => {
                if (!(0,checker/* isValidName */.r1)(newName)) {
                    self.status(self.i18n('Enter new name'));
                    return false;
                }
                dp.fileRename(path, name, newName, source)
                    .then(message => {
                    self.state.activeElements = [];
                    self.status(message, true);
                    self.loadItems();
                })
                    .catch(self.status);
                return;
            }, self.i18n('type name'), name).bindDestruct(this);
        }
    })
        .on('update.filebrowser', () => {
        self.loadTree();
    });
}

;// CONCATENATED MODULE: ./src/modules/file-browser/file-browser.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


















class FileBrowser extends ViewWithToolbar {
    constructor(options) {
        var _a;
        super(options);
        this.loader = this.c.div(F_CLASS + '__loader', ICON_LOADER);
        this.browser = this.c.div(F_CLASS + ' non-selected');
        this.status_line = this.c.div(F_CLASS + '__status');
        this.tree = this.c.div(F_CLASS + '__tree');
        this.files = this.c.div(F_CLASS + '__files');
        this.state = events/* ObserveObject.create */.P5.create({
            currentPath: '',
            currentSource: DEFAULT_SOURCE_NAME,
            currentBaseUrl: '',
            activeElements: [],
            elements: [],
            messages: [],
            sources: [],
            view: 'tiles',
            sortBy: 'changed-desc',
            filterWord: '',
            onlyImages: false
        });
        this.errorHandler = (resp) => {
            if (resp instanceof Error) {
                this.status(this.i18n(resp.message));
            }
            else {
                this.status(this.dataProvider.getMessage(resp));
            }
        };
        this.close = () => {
            this.dialog.close();
        };
        this.elementsMap = {};
        this.attachEvents(options);
        const self = this;
        self.options = (0,helpers.ConfigProto)(options || {}, config/* Config.defaultOptions.filebrowser */.D.defaultOptions.filebrowser);
        self.storage = Storage.makeStorage(this.o.saveStateInStorage);
        self.dataProvider = makeDataProvider(self, self.options);
        self.dialog = new Dialog({
            fullsize: self.o.fullsize,
            ownerWindow: self.ownerWindow,
            theme: self.o.theme,
            globalFullSize: self.o.globalFullSize,
            language: this.o.language,
            minWidth: Math.min(700, screen.width),
            minHeight: 300,
            buttons: (_a = this.o.headerButtons) !== null && _a !== void 0 ? _a : ['fullsize', 'dialog.close']
        });
        ['afterClose', 'beforeOpen'].forEach(proxyEvent => {
            self.dialog.events.on(self.dialog, proxyEvent, () => {
                this.e.fire(proxyEvent);
            });
        });
        if (self.o.showFoldersPanel) {
            self.browser.appendChild(self.tree);
        }
        self.browser.appendChild(self.files);
        self.browser.appendChild(self.status_line);
        selfListeners.call(self);
        nativeListeners.call(self);
        stateListeners.call(self);
        self.dialog.setSize(self.o.width, self.o.height);
        const keys = [
            'getLocalFileByUrl',
            'crop',
            'resize',
            'create',
            'fileMove',
            'folderMove',
            'fileRename',
            'folderRename',
            'fileRemove',
            'folderRemove',
            'folder',
            'items',
            'permissions'
        ];
        keys.forEach(key => {
            if (this.options[key] != null) {
                this.options[key] = (0,helpers.ConfigProto)(this.options[key], this.o.ajax);
            }
        });
        const view = this.storage.get(F_CLASS + '_view');
        if (view && this.o.view == null) {
            self.state.view = view === 'list' ? 'list' : 'tiles';
        }
        else {
            self.state.view = self.o.view === 'list' ? 'list' : 'tiles';
        }
        this.state.fire('change.view');
        const sortBy = self.storage.get(F_CLASS + '_sortby');
        if (sortBy) {
            const parts = sortBy.split('-');
            self.state.sortBy = ['changed', 'name', 'size'].includes(parts[0])
                ? sortBy
                : 'changed-desc';
        }
        else {
            self.state.sortBy = self.o.sortBy || 'changed-desc';
        }
        self.initUploader(self);
    }
    className() {
        return 'FileBrowser';
    }
    async loadItems() {
        this.files.classList.add('jodit-filebrowser_active');
        this.files.appendChild(this.loader.cloneNode(true));
        return this.dataProvider
            .items(this.state.currentPath, this.state.currentSource, {
            sortBy: this.state.sortBy,
            onlyImages: this.state.onlyImages,
            filterWord: this.state.filterWord
        })
            .then(resp => {
            this.state.elements = resp;
            this.state.activeElements = [];
        })
            .catch(this.status);
    }
    async loadTree() {
        const errorUni = (e) => {
            throw e instanceof Error ? e : (0,helpers.error)(e);
        };
        if (this.uploader) {
            this.uploader.setPath(this.state.currentPath);
            this.uploader.setSource(this.state.currentSource);
        }
        this.tree.classList.add('jodit-filebrowser_active');
        dom/* Dom.detach */.i.detach(this.tree);
        this.tree.appendChild(this.loader.cloneNode(true));
        const items = this.loadItems();
        if (this.o.showFoldersPanel) {
            const tree = this.dataProvider
                .tree(this.state.currentPath, this.state.currentSource)
                .then(resp => {
                this.state.sources = resp;
            })
                .catch(e => {
                this.errorHandler(errorUni(this.i18n('Error on load folders')));
                errorUni(e);
            });
            return Promise.all([tree, items]).catch(helpers.error);
        }
        else {
            this.tree.classList.remove('jodit-filebrowser_active');
        }
        return items.catch(helpers.error);
    }
    deleteFile(name, source) {
        return this.dataProvider
            .fileRemove(this.state.currentPath, name, source)
            .then(message => {
            this.status(message || this.i18n('File "%s" was deleted', name), true);
        })
            .catch(this.status);
    }
    onSelect(callback) {
        return () => {
            if (this.state.activeElements.length) {
                const files = [];
                const isImages = [];
                this.state.activeElements.forEach(elm => {
                    const url = elm.fileURL;
                    if (url) {
                        files.push(url);
                        isImages.push(elm.isImage || false);
                    }
                });
                this.close();
                const data = {
                    baseurl: '',
                    files,
                    isImages
                };
                if ((0,helpers.isFunction)(callback)) {
                    callback(data);
                }
                this.close();
            }
            return false;
        };
    }
    get isOpened() {
        return this.dialog.isOpened && this.browser.style.display !== 'none';
    }
    status(message, success) {
        if (!(0,helpers.isString)(message)) {
            message = message.message;
        }
        this.status_line.classList.remove('jodit-filebrowser_success');
        this.status_line.classList.add('jodit-filebrowser_active');
        const messageBox = this.c.div();
        messageBox.textContent = message;
        this.status_line.appendChild(messageBox);
        if (success) {
            this.status_line.classList.add('jodit-filebrowser_success');
        }
        this.async.setTimeout(() => {
            this.status_line.classList.remove('jodit-filebrowser_active');
            dom/* Dom.detach */.i.detach(this.status_line);
        }, {
            timeout: this.o.howLongShowMsg,
            label: 'fileBrowser.status'
        });
    }
    open(callback = this.o
        .defaultCallback, onlyImages = false) {
        this.state.onlyImages = onlyImages;
        return this.async.promise((resolve, reject) => {
            var _a;
            if (!this.o.items || !this.o.items.url) {
                throw (0,helpers.error)('Need set options.filebrowser.ajax.url');
            }
            let localTimeout = 0;
            this.e
                .off(this.files, 'dblclick')
                .on(this.files, 'dblclick', this.onSelect(callback))
                .on(this.files, 'touchstart', () => {
                const now = new Date().getTime();
                if (now - localTimeout < constants.EMULATE_DBLCLICK_TIMEOUT) {
                    this.onSelect(callback)();
                }
                localTimeout = now;
            })
                .off('select.filebrowser')
                .on('select.filebrowser', this.onSelect(callback));
            const header = this.c.div();
            this.toolbar.build((_a = this.o.buttons) !== null && _a !== void 0 ? _a : []).appendTo(header);
            this.dialog.open(this.browser, header);
            this.e.fire('sort.filebrowser', this.state.sortBy);
            this.loadTree().then(resolve, reject);
        });
    }
    initUploader(editor) {
        var _a;
        const self = this, options = (_a = editor === null || editor === void 0 ? void 0 : editor.options) === null || _a === void 0 ? void 0 : _a.uploader, uploaderOptions = (0,helpers.ConfigProto)(options || {}, config/* Config.defaultOptions.uploader */.D.defaultOptions.uploader);
        const uploadHandler = () => {
            return this.loadItems();
        };
        self.uploader = self.getInstance('Uploader', uploaderOptions);
        self.uploader.setPath(self.state.currentPath);
        self.uploader.setSource(self.state.currentSource);
        self.uploader.bind(self.browser, uploadHandler, self.errorHandler);
        self.e.on('bindUploader.filebrowser', (button) => {
            self.uploader.bind(button, uploadHandler, self.errorHandler);
        });
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.dialog.destruct();
        this.events && this.e.off('.filebrowser');
        this.uploader && this.uploader.destruct();
        super.destruct();
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], FileBrowser.prototype, "status", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], FileBrowser.prototype, "open", null);

;// CONCATENATED MODULE: ./src/modules/observer/snapshot.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class Snapshot extends component/* ViewComponent */.Hr {
    constructor() {
        super(...arguments);
        this.isBlocked = false;
    }
    className() {
        return 'Snapshot';
    }
    static equal(first, second) {
        return (first.html === second.html &&
            JSON.stringify(first.range) === JSON.stringify(second.range));
    }
    static countNodesBeforeInParent(elm) {
        if (!elm.parentNode) {
            return 0;
        }
        const elms = elm.parentNode.childNodes;
        let count = 0, last = null, j;
        for (j = 0; j < elms.length; j += 1) {
            if (last &&
                !(dom/* Dom.isText */.i.isText(elms[j]) && elms[j].textContent === '') &&
                !(dom/* Dom.isText */.i.isText(last) && dom/* Dom.isText */.i.isText(elms[j]))) {
                count += 1;
            }
            if (elms[j] === elm) {
                return count;
            }
            last = elms[j];
        }
        return 0;
    }
    static strokeOffset(elm, offset) {
        while (dom/* Dom.isText */.i.isText(elm)) {
            elm = elm.previousSibling;
            if (dom/* Dom.isText */.i.isText(elm) && elm.textContent != null) {
                offset += elm.textContent.length;
            }
        }
        return offset;
    }
    calcHierarchyLadder(elm) {
        const counts = [];
        if (!elm || !elm.parentNode || !dom/* Dom.isOrContains */.i.isOrContains(this.j.editor, elm)) {
            return [];
        }
        while (elm && elm !== this.j.editor) {
            if (elm) {
                counts.push(Snapshot.countNodesBeforeInParent(elm));
            }
            elm = elm.parentNode;
        }
        return counts.reverse();
    }
    getElementByLadder(ladder) {
        let n = this.j.editor, i;
        for (i = 0; n && i < ladder.length; i += 1) {
            n = n.childNodes[ladder[i]];
        }
        return n;
    }
    make() {
        const snapshot = {
            html: '',
            range: {
                startContainer: [],
                startOffset: 0,
                endContainer: [],
                endOffset: 0
            }
        };
        snapshot.html = this.j.getNativeEditorValue();
        const sel = this.j.s.sel;
        if (sel && sel.rangeCount) {
            const range = sel.getRangeAt(0), startContainer = this.calcHierarchyLadder(range.startContainer), endContainer = this.calcHierarchyLadder(range.endContainer);
            let startOffset = Snapshot.strokeOffset(range.startContainer, range.startOffset), endOffset = Snapshot.strokeOffset(range.endContainer, range.endOffset);
            if (!startContainer.length &&
                range.startContainer !== this.j.editor) {
                startOffset = 0;
            }
            if (!endContainer.length && range.endContainer !== this.j.editor) {
                endOffset = 0;
            }
            snapshot.range = {
                startContainer,
                startOffset,
                endContainer,
                endOffset
            };
        }
        return snapshot;
    }
    restore(snapshot) {
        this.isBlocked = true;
        const scroll = this.storeScrollState();
        const value = this.j.getNativeEditorValue();
        if (value !== snapshot.html) {
            this.j.setEditorValue(snapshot.html);
        }
        this.restoreOnlySelection(snapshot);
        this.restoreScrollState(scroll);
        this.isBlocked = false;
    }
    storeScrollState() {
        return [this.j.ow.scrollY, this.j.editor.scrollTop];
    }
    restoreScrollState(scrolls) {
        const { j } = this, { ow } = j;
        ow.scrollTo(ow.scrollX, scrolls[0]);
        j.editor.scrollTop = scrolls[1];
    }
    restoreOnlySelection(snapshot) {
        try {
            if (snapshot.range) {
                const range = this.j.ed.createRange();
                range.setStart(this.getElementByLadder(snapshot.range.startContainer), snapshot.range.startOffset);
                range.setEnd(this.getElementByLadder(snapshot.range.endContainer), snapshot.range.endOffset);
                this.j.s.selectRange(range);
            }
        }
        catch (__ignore) {
            this.j.editor.lastChild &&
                this.j.s.setCursorAfter(this.j.editor.lastChild);
            if (false) {}
        }
    }
    destruct() {
        this.isBlocked = false;
        super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/modules/observer/stack.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Stack {
    constructor(size) {
        this.size = size;
        this.commands = [];
        this.stackPosition = -1;
    }
    get length() {
        return this.commands.length;
    }
    clearRedo() {
        this.commands.length = this.stackPosition + 1;
    }
    clear() {
        this.commands.length = 0;
        this.stackPosition = -1;
    }
    push(command) {
        this.clearRedo();
        this.commands.push(command);
        this.stackPosition += 1;
        if (this.commands.length > this.size) {
            this.commands.shift();
            this.stackPosition -= 1;
        }
    }
    replace(command) {
        this.commands[this.stackPosition] = command;
    }
    current() {
        return this.commands[this.stackPosition];
    }
    undo() {
        if (this.canUndo()) {
            if (this.commands[this.stackPosition]) {
                this.commands[this.stackPosition].undo();
            }
            this.stackPosition -= 1;
            return true;
        }
        return false;
    }
    redo() {
        if (this.canRedo()) {
            this.stackPosition += 1;
            if (this.commands[this.stackPosition]) {
                this.commands[this.stackPosition].redo();
            }
            return true;
        }
        return false;
    }
    canUndo() {
        return this.stackPosition >= 0;
    }
    canRedo() {
        return this.stackPosition < this.commands.length - 1;
    }
}

;// CONCATENATED MODULE: ./src/modules/observer/command.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Command {
    constructor(oldValue, newValue, observer, tick) {
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.observer = observer;
        this.tick = tick;
    }
    undo() {
        this.observer.snapshot.restore(this.oldValue);
    }
    redo() {
        this.observer.snapshot.restore(this.newValue);
    }
}

;// CONCATENATED MODULE: ./src/modules/observer/observer.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







config/* Config.prototype.observer */.D.prototype.observer = {
    maxHistoryLength: Infinity,
    timeout: 100
};
class Observer extends component/* ViewComponent */.Hr {
    constructor(editor) {
        super(editor);
        this.stack = new Stack(this.j.o.observer.maxHistoryLength);
        this.snapshot = new Snapshot(this.j);
        this.updateTick = 0;
        editor.e.on('afterAddPlace.observer', () => {
            if (this.isInDestruct) {
                return;
            }
            this.startValue = this.snapshot.make();
            editor.events
                .on('internalChange', () => {
                this.startValue = this.snapshot.make();
            })
                .on(editor.editor, [
                'changeSelection',
                'selectionstart',
                'selectionchange',
                'mousedown',
                'mouseup',
                'keydown',
                'keyup'
            ]
                .map(f => f + '.observer')
                .join(' '), () => {
                if (this.startValue.html ===
                    this.j.getNativeEditorValue()) {
                    this.startValue = this.snapshot.make();
                }
            })
                .on(this, 'change.observer', this.onChange);
        });
    }
    className() {
        return 'Observer';
    }
    get startValue() {
        return this.__startValue;
    }
    set startValue(value) {
        this.__startValue = value;
    }
    upTick() {
        this.updateTick += 1;
    }
    onChange() {
        if (this.snapshot.isBlocked) {
            return;
        }
        this.updateStack();
    }
    updateStack(replace = false) {
        const newValue = this.snapshot.make();
        if (!Snapshot.equal(newValue, this.startValue)) {
            const newCommand = new Command(this.startValue, newValue, this, this.updateTick);
            if (replace) {
                const command = this.stack.current();
                if (command && this.updateTick === command.tick) {
                    this.stack.replace(newCommand);
                }
            }
            else {
                this.stack.push(newCommand);
            }
            this.startValue = newValue;
            this.fireChangeStack();
        }
    }
    redo() {
        if (this.stack.redo()) {
            this.startValue = this.snapshot.make();
            this.fireChangeStack();
        }
    }
    undo() {
        if (this.stack.undo()) {
            this.startValue = this.snapshot.make();
            this.fireChangeStack();
        }
    }
    clear() {
        this.startValue = this.snapshot.make();
        this.stack.clear();
        this.fireChangeStack();
    }
    replaceSnapshot() {
        this.updateStack(true);
    }
    fireChangeStack() {
        var _a;
        this.j && !this.j.isInDestruct && ((_a = this.j.events) === null || _a === void 0 ? void 0 : _a.fire('changeStack'));
    }
    destruct() {
        if (this.j.events) {
            this.j.e.off('.observer');
        }
        this.snapshot.destruct();
        super.destruct();
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.debounce)()
], Observer.prototype, "onChange", null);

;// CONCATENATED MODULE: ./src/core/selection/style/apply-style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





var mode;
(function (mode) {
    mode["UNWRAP"] = "UNWRAP";
    mode["WRAP"] = "WRAP";
})(mode || (mode = {}));
class ApplyStyle {
    constructor(jodit, style) {
        this.jodit = jodit;
        this.style = style;
    }
    apply() {
        const sel = this.jodit.selection;
        const isCollapsed = sel.isCollapsed();
        if (isCollapsed) {
            const font = this.jodit.createInside.element('font');
            sel.insertNode(font, false, false);
            sel.setCursorIn(font);
            sel.save();
            if (!this.checkSpecialElements(font)) {
                this.applyToElement(font);
            }
            dom/* Dom.unwrap */.i.unwrap(font);
        }
        else {
            sel.save();
            (0,helpers.normalizeNode)(sel.area.firstChild);
            sel.wrapInTag(this.applyToElement);
        }
        sel.restore();
    }
    applyToElement(font) {
        const { area } = this.jodit.selection;
        if (this.checkSpecialElements(font)) {
            return;
        }
        if (this.checkSuitableParent(font) ||
            this.checkSuitableChild(font) ||
            this.checkClosestWrapper(font) ||
            this.unwrapChildren(font)) {
            return;
        }
        if (!this.mode) {
            this.mode = mode.WRAP;
        }
        if (this.mode !== mode.WRAP) {
            return;
        }
        let wrapper = font;
        if (this.style.elementIsBlock) {
            const ulReg = /^(ul|ol|li|td|th|tr|tbody|table)$/i;
            const box = dom/* Dom.up */.i.up(font, node => {
                if (node && dom/* Dom.isBlock */.i.isBlock(node, this.jodit.s.win)) {
                    if (ulReg.test(this.style.element) ||
                        !ulReg.test(node.nodeName)) {
                        return true;
                    }
                }
                return false;
            }, area);
            if (box) {
                wrapper = box;
            }
            else {
                wrapper = this.wrapUnwrappedText(font);
            }
        }
        const newWrapper = dom/* Dom.replace */.i.replace(wrapper, this.style.element, this.jodit.createInside, true);
        (0,helpers.attr)(newWrapper, 'size', null);
        if (this.style.elementIsBlock) {
            this.postProcessListElement(newWrapper);
        }
        if (this.style.options.style && this.style.elementIsDefault) {
            (0,helpers.css)(newWrapper, this.style.options.style);
        }
        if (this.style.options.className) {
            newWrapper.classList.toggle(this.style.options.className);
        }
    }
    checkSpecialElements(font) {
        const { editor } = this.jodit;
        return Boolean(dom/* Dom.closest */.i.closest(font, ['style', 'script'], editor));
    }
    checkSuitableParent(font) {
        const { parentNode } = font;
        if (parentNode &&
            !dom/* Dom.next */.i.next(font, this.isNormalNode, parentNode) &&
            !dom/* Dom.prev */.i.prev(font, this.isNormalNode, parentNode) &&
            this.isSuitableElement(parentNode, false) &&
            parentNode !== this.jodit.s.area &&
            (!dom/* Dom.isBlock */.i.isBlock(parentNode, this.jodit.ew) ||
                this.style.elementIsBlock)) {
            this.toggleStyles(parentNode);
            return true;
        }
        return false;
    }
    checkSuitableChild(font) {
        let { firstChild } = font;
        if (firstChild && this.jodit.s.isMarker(firstChild)) {
            firstChild = firstChild.nextSibling;
        }
        if (firstChild &&
            !dom/* Dom.next */.i.next(firstChild, this.isNormalNode, font) &&
            !dom/* Dom.prev */.i.prev(firstChild, this.isNormalNode, font) &&
            this.isSuitableElement(firstChild, false)) {
            this.toggleStyles(firstChild);
            return true;
        }
        return false;
    }
    checkClosestWrapper(font) {
        const wrapper = dom/* Dom.closest */.i.closest(font, this.isSuitableElement, this.jodit.editor);
        if (wrapper) {
            if (this.style.elementIsBlock) {
                this.toggleStyles(wrapper);
                return true;
            }
            const leftRange = this.jodit.s.createRange();
            leftRange.setStartBefore(wrapper);
            leftRange.setEndBefore(font);
            const leftFragment = leftRange.extractContents();
            if ((!leftFragment.textContent ||
                !(0,helpers.trim)(leftFragment.textContent).length) &&
                leftFragment.firstChild) {
                dom/* Dom.unwrap */.i.unwrap(leftFragment.firstChild);
            }
            if (wrapper.parentNode) {
                wrapper.parentNode.insertBefore(leftFragment, wrapper);
            }
            leftRange.setStartAfter(font);
            leftRange.setEndAfter(wrapper);
            const rightFragment = leftRange.extractContents();
            if ((!rightFragment.textContent ||
                !(0,helpers.trim)(rightFragment.textContent).length) &&
                rightFragment.firstChild) {
                dom/* Dom.unwrap */.i.unwrap(rightFragment.firstChild);
            }
            dom/* Dom.after */.i.after(wrapper, rightFragment);
            this.toggleStyles(wrapper);
            return true;
        }
        return false;
    }
    elementHasSameStyle(elm, rules) {
        return Boolean((0,checker/* isPlainObject */.PO)(rules) &&
            !dom/* Dom.isTag */.i.isTag(elm, 'font') &&
            dom/* Dom.isHTMLElement */.i.isHTMLElement(elm, this.jodit.ew) &&
            (0,helpers.each)(rules, (property, checkValue) => {
                const value = (0,helpers.css)(elm, property, undefined, true);
                return (!(0,checker/* isVoid */.nj)(value) &&
                    value !== '' &&
                    !(0,checker/* isVoid */.nj)(checkValue) &&
                    (0,helpers.normalizeCssValue)(property, checkValue)
                        .toString()
                        .toLowerCase() === value.toString().toLowerCase());
            }));
    }
    isSuitableElement(elm, strict = true) {
        if (!elm) {
            return false;
        }
        const { element, elementIsDefault, options } = this.style;
        const elmHasSameStyle = this.elementHasSameStyle(elm, options.style);
        const elmIsSame = elm.nodeName.toLowerCase() === element;
        return (((!elementIsDefault || !strict) && elmIsSame) ||
            (elmHasSameStyle && this.isNormalNode(elm)));
    }
    isNormalNode(elm) {
        return Boolean(elm != null &&
            !dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(elm) &&
            !this.jodit.s.isMarker(elm));
    }
    toggleStyles(elm) {
        const { style } = this.style.options;
        if (style && elm.nodeName.toLowerCase() === this.style.defaultTag) {
            Object.keys(style).forEach(rule => {
                if (this.mode === mode.UNWRAP ||
                    (0,helpers.css)(elm, rule) ===
                        (0,helpers.normalizeCssValue)(rule, style[rule])) {
                    (0,helpers.css)(elm, rule, '');
                    if (this.mode === undefined) {
                        this.mode = mode.UNWRAP;
                    }
                }
                else {
                    (0,helpers.css)(elm, rule, style[rule]);
                    if (this.mode === undefined) {
                        this.mode = mode.WRAP;
                    }
                }
            });
        }
        const isBlock = dom/* Dom.isBlock */.i.isBlock(elm, this.jodit.ew);
        const isSuitableInline = !isBlock &&
            (!(0,helpers.attr)(elm, 'style') ||
                elm.nodeName.toLowerCase() !== this.style.defaultTag);
        const isSuitableBlock = !isSuitableInline &&
            isBlock &&
            elm.nodeName.toLowerCase() === this.style.element;
        if (isSuitableInline || isSuitableBlock) {
            dom/* Dom.unwrap */.i.unwrap(elm);
            if (this.mode === undefined) {
                this.mode = mode.UNWRAP;
            }
        }
    }
    unwrapChildren(font) {
        const needUnwrap = [];
        let firstElementSuit;
        if (font.firstChild) {
            dom/* Dom.find */.i.find(font.firstChild, (elm) => {
                if (elm && this.isSuitableElement(elm)) {
                    if (firstElementSuit === undefined) {
                        firstElementSuit = true;
                    }
                    needUnwrap.push(elm);
                }
                else {
                    if (firstElementSuit === undefined) {
                        firstElementSuit = false;
                    }
                }
                return false;
            }, font, true);
        }
        needUnwrap.forEach(dom/* Dom.unwrap */.i.unwrap);
        return Boolean(firstElementSuit);
    }
    wrapUnwrappedText(elm) {
        const { area, win } = this.jodit.selection;
        const edge = (n, key = 'previousSibling') => {
            let edgeNode = n, node = n;
            while (node) {
                edgeNode = node;
                if (node[key]) {
                    node = node[key];
                }
                else {
                    node =
                        node.parentNode &&
                            !dom/* Dom.isBlock */.i.isBlock(node.parentNode, win) &&
                            node.parentNode !== area
                            ? node.parentNode
                            : null;
                }
                if (dom/* Dom.isBlock */.i.isBlock(node, win)) {
                    break;
                }
            }
            return edgeNode;
        };
        const start = edge(elm), end = edge(elm, 'nextSibling');
        const range = this.jodit.s.createRange();
        range.setStartBefore(start);
        range.setEndAfter(end);
        const fragment = range.extractContents();
        const wrapper = this.jodit.createInside.element(this.style.element);
        wrapper.appendChild(fragment);
        range.insertNode(wrapper);
        if (this.style.elementIsBlock) {
            this.postProcessListElement(wrapper);
            if (dom/* Dom.isEmpty */.i.isEmpty(wrapper) &&
                !dom/* Dom.isTag */.i.isTag(wrapper.firstElementChild, 'br')) {
                wrapper.appendChild(this.jodit.createInside.element('br'));
            }
        }
        return wrapper;
    }
    postProcessListElement(wrapper) {
        if (/^(OL|UL)$/i.test(this.style.element) &&
            !dom/* Dom.isTag */.i.isTag(wrapper.firstElementChild, 'li')) {
            const ci = this.jodit.createInside;
            const li = dom/* Dom.replace */.i.replace(wrapper, 'li', ci), ul = dom/* Dom.wrap */.i.wrap(li, this.style.element, ci);
            if (ul) {
                wrapper = ul;
            }
        }
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], ApplyStyle.prototype, "applyToElement", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], ApplyStyle.prototype, "isSuitableElement", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], ApplyStyle.prototype, "isNormalNode", null);

;// CONCATENATED MODULE: ./src/core/selection/style/style.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


class Style {
    constructor(options) {
        this.options = options;
    }
    get element() {
        return this.options.element || this.defaultTag;
    }
    get elementIsBlock() {
        return Boolean(this.options.element && constants.IS_BLOCK.test(this.options.element));
    }
    get defaultTag() {
        if (this.options.defaultTag) {
            return this.options.defaultTag;
        }
        return this.elementIsBlock ? 'p' : 'span';
    }
    get elementIsDefault() {
        return this.element === this.defaultTag;
    }
    apply(jodit) {
        const applyStyle = new ApplyStyle(jodit, this);
        applyStyle.apply();
    }
}

;// CONCATENATED MODULE: ./src/core/selection/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class Select {
    constructor(jodit) {
        this.jodit = jodit;
        this.isMarker = (elm) => dom/* Dom.isNode */.i.isNode(elm, this.win) &&
            dom/* Dom.isTag */.i.isTag(elm, 'span') &&
            elm.hasAttribute('data-' + constants.MARKER_CLASS);
        this.eachSelection = (callback) => {
            const sel = this.sel;
            if (sel && sel.rangeCount) {
                const range = sel.getRangeAt(0);
                const nodes = [], startOffset = range.startOffset, length = this.area.childNodes.length, elementOffset = startOffset < length ? startOffset : length - 1, start = range.startContainer === this.area
                    ? this.area.childNodes[elementOffset]
                    : range.startContainer, end = range.endContainer === this.area
                    ? this.area.childNodes[range.endOffset - 1]
                    : range.endContainer;
                dom/* Dom.find */.i.find(start, (node) => {
                    if (node &&
                        node !== this.area &&
                        !dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(node) &&
                        !this.isMarker(node)) {
                        nodes.push(node);
                    }
                    return (node === end ||
                        (node && node.contains && node.contains(end)));
                }, this.area, true, 'nextSibling', false);
                const forEvery = (current) => {
                    if (!dom/* Dom.isOrContains */.i.isOrContains(this.j.editor, current, true)) {
                        return;
                    }
                    if (current.nodeName.match(/^(UL|OL)$/)) {
                        return (0,helpers.toArray)(current.childNodes).forEach(forEvery);
                    }
                    if (dom/* Dom.isTag */.i.isTag(current, 'li')) {
                        if (current.firstChild) {
                            current = current.firstChild;
                        }
                        else {
                            const currentB = this.j.createInside.text(constants.INVISIBLE_SPACE);
                            current.appendChild(currentB);
                            current = currentB;
                        }
                    }
                    callback(current);
                };
                if (nodes.length === 0 && dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(start)) {
                    nodes.push(start);
                }
                nodes.forEach(forEvery);
            }
        };
        jodit.e.on('removeMarkers', () => {
            this.removeMarkers();
        });
    }
    get j() {
        return this.jodit;
    }
    errorNode(node) {
        if (!dom/* Dom.isNode */.i.isNode(node, this.win)) {
            throw (0,helpers.error)('Parameter node must be instance of Node');
        }
    }
    get area() {
        return this.j.editor;
    }
    get win() {
        return this.j.ew;
    }
    get doc() {
        return this.j.ed;
    }
    get sel() {
        if (this.j.o.shadowRoot) {
            return this.j.o.shadowRoot.getSelection();
        }
        return this.win.getSelection();
    }
    get range() {
        const sel = this.sel;
        return sel && sel.rangeCount ? sel.getRangeAt(0) : this.createRange();
    }
    createRange(select = false) {
        const range = this.doc.createRange();
        if (select) {
            this.selectRange(range);
        }
        return range;
    }
    remove() {
        const sel = this.sel, current = this.current();
        if (sel && current) {
            for (let i = 0; i < sel.rangeCount; i += 1) {
                sel.getRangeAt(i).deleteContents();
                sel.getRangeAt(i).collapse(true);
            }
        }
    }
    clear() {
        var _a, _b;
        if ((_a = this.sel) === null || _a === void 0 ? void 0 : _a.rangeCount) {
            (_b = this.sel) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
        }
    }
    removeNode(node) {
        if (!dom/* Dom.isOrContains */.i.isOrContains(this.j.editor, node, true)) {
            throw (0,helpers.error)("Selection.removeNode can remove only editor's children");
        }
        dom/* Dom.safeRemove */.i.safeRemove(node);
        this.j.e.fire('afterRemoveNode', node);
    }
    insertCursorAtPoint(x, y) {
        this.removeMarkers();
        try {
            const rng = this.createRange();
            (() => {
                if (this.doc.caretPositionFromPoint) {
                    const caret = this.doc.caretPositionFromPoint(x, y);
                    if (caret) {
                        rng.setStart(caret.offsetNode, caret.offset);
                        return;
                    }
                }
                if (this.doc.caretRangeFromPoint) {
                    const caret = this.doc.caretRangeFromPoint(x, y);
                    rng.setStart(caret.startContainer, caret.startOffset);
                }
            })();
            rng.collapse(true);
            this.selectRange(rng);
            return true;
        }
        catch (_a) { }
        return false;
    }
    get hasMarkers() {
        return Boolean((0,helpers.$$)('span[data-' + constants.MARKER_CLASS + ']', this.area).length);
    }
    removeMarkers() {
        (0,helpers.$$)('span[data-' + constants.MARKER_CLASS + ']', this.area).forEach(dom/* Dom.safeRemove */.i.safeRemove);
    }
    marker(atStart = false, range) {
        let newRange = null;
        if (range) {
            newRange = range.cloneRange();
            newRange.collapse(atStart);
        }
        const marker = this.j.createInside.span();
        marker.id =
            constants.MARKER_CLASS +
                '_' +
                Number(new Date()) +
                '_' +
                String(Math.random()).slice(2);
        marker.style.lineHeight = '0';
        marker.style.display = 'none';
        marker.setAttribute('data-' + constants.MARKER_CLASS, atStart ? 'start' : 'end');
        marker.appendChild(this.j.createInside.text(constants.INVISIBLE_SPACE));
        if (newRange) {
            if (dom/* Dom.isOrContains */.i.isOrContains(this.area, atStart ? newRange.startContainer : newRange.endContainer)) {
                newRange.insertNode(marker);
            }
        }
        return marker;
    }
    restore() {
        let range = false;
        const markAttr = (start) => `span[data-${constants.MARKER_CLASS}=${start ? 'start' : 'end'}]`;
        const start = this.area.querySelector(markAttr(true)), end = this.area.querySelector(markAttr(false));
        if (!start) {
            return;
        }
        range = this.createRange();
        if (!end) {
            const previousNode = start.previousSibling;
            if (dom/* Dom.isText */.i.isText(previousNode)) {
                range.setStart(previousNode, previousNode.nodeValue ? previousNode.nodeValue.length : 0);
            }
            else {
                range.setStartBefore(start);
            }
            dom/* Dom.safeRemove */.i.safeRemove(start);
            range.collapse(true);
        }
        else {
            range.setStartAfter(start);
            dom/* Dom.safeRemove */.i.safeRemove(start);
            range.setEndBefore(end);
            dom/* Dom.safeRemove */.i.safeRemove(end);
        }
        if (range) {
            this.selectRange(range);
        }
    }
    save(silent = false) {
        if (this.hasMarkers) {
            return [];
        }
        const sel = this.sel;
        if (!sel || !sel.rangeCount) {
            return [];
        }
        const info = [], length = sel.rangeCount, ranges = [];
        for (let i = 0; i < length; i += 1) {
            ranges[i] = sel.getRangeAt(i);
            if (ranges[i].collapsed) {
                const start = this.marker(true, ranges[i]);
                info[i] = {
                    startId: start.id,
                    collapsed: true,
                    startMarker: start.outerHTML
                };
            }
            else {
                const start = this.marker(true, ranges[i]);
                const end = this.marker(false, ranges[i]);
                info[i] = {
                    startId: start.id,
                    endId: end.id,
                    collapsed: false,
                    startMarker: start.outerHTML,
                    endMarker: end.outerHTML
                };
            }
        }
        if (!silent) {
            sel.removeAllRanges();
            for (let i = length - 1; i >= 0; --i) {
                const startElm = this.doc.getElementById(info[i].startId);
                if (startElm) {
                    if (info[i].collapsed) {
                        ranges[i].setStartAfter(startElm);
                        ranges[i].collapse(true);
                    }
                    else {
                        ranges[i].setStartBefore(startElm);
                        if (info[i].endId) {
                            const endElm = this.doc.getElementById(info[i].endId);
                            if (endElm) {
                                ranges[i].setEndAfter(endElm);
                            }
                        }
                    }
                }
                try {
                    sel.addRange(ranges[i].cloneRange());
                }
                catch (_a) { }
            }
        }
        return info;
    }
    focus(options = {
        preventScroll: true
    }) {
        var _a, _b;
        if (!this.isFocused()) {
            if (this.j.iframe) {
                if (this.doc.readyState === 'complete') {
                    this.j.iframe.focus();
                }
            }
            this.win.focus();
            this.area.focus(options);
            const sel = this.sel, range = (sel === null || sel === void 0 ? void 0 : sel.rangeCount) ? sel === null || sel === void 0 ? void 0 : sel.getRangeAt(0) : null;
            if (!range || !dom/* Dom.isOrContains */.i.isOrContains(this.area, range.startContainer)) {
                const range = this.createRange();
                range.setStart(this.area, 0);
                range.collapse(true);
                this.selectRange(range, false);
            }
            if (!this.j.editorIsActive) {
                (_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.fire('focus');
            }
            return true;
        }
        return false;
    }
    isCollapsed() {
        const sel = this.sel;
        for (let r = 0; sel && r < sel.rangeCount; r += 1) {
            if (!sel.getRangeAt(r).collapsed) {
                return false;
            }
        }
        return true;
    }
    isFocused() {
        return (this.doc.hasFocus &&
            this.doc.hasFocus() &&
            this.area === this.doc.activeElement);
    }
    current(checkChild = true) {
        if (this.j.getRealMode() === constants.MODE_WYSIWYG) {
            const sel = this.sel;
            if (!sel || sel.rangeCount === 0) {
                return null;
            }
            const range = sel.getRangeAt(0);
            let node = range.startContainer, rightMode = false;
            const child = (nd) => rightMode ? nd.lastChild : nd.firstChild;
            if (dom/* Dom.isTag */.i.isTag(node, 'br') && sel.isCollapsed) {
                return node;
            }
            if (!dom/* Dom.isText */.i.isText(node)) {
                node = range.startContainer.childNodes[range.startOffset];
                if (!node) {
                    node =
                        range.startContainer.childNodes[range.startOffset - 1];
                    rightMode = true;
                }
                if (node && sel.isCollapsed && !dom/* Dom.isText */.i.isText(node)) {
                    if (!rightMode && dom/* Dom.isText */.i.isText(node.previousSibling)) {
                        node = node.previousSibling;
                    }
                    else if (checkChild) {
                        let current = child(node);
                        while (current) {
                            if (current && dom/* Dom.isText */.i.isText(current)) {
                                node = current;
                                break;
                            }
                            current = child(current);
                        }
                    }
                }
                if (node && !sel.isCollapsed && !dom/* Dom.isText */.i.isText(node)) {
                    let leftChild = node, rightChild = node;
                    do {
                        leftChild = leftChild.firstChild;
                        rightChild = rightChild.lastChild;
                    } while (leftChild && rightChild && !dom/* Dom.isText */.i.isText(leftChild));
                    if (leftChild === rightChild &&
                        leftChild &&
                        dom/* Dom.isText */.i.isText(leftChild)) {
                        node = leftChild;
                    }
                }
            }
            if (node && dom/* Dom.isOrContains */.i.isOrContains(this.area, node)) {
                return node;
            }
        }
        return null;
    }
    insertNode(node, insertCursorAfter = true, fireChange = true) {
        var _a;
        this.errorNode(node);
        if (!this.isFocused() && this.j.isEditorMode()) {
            this.focus();
            this.restore();
        }
        const sel = this.sel;
        if (!this.isCollapsed()) {
            this.j.execCommand('Delete');
        }
        if (sel && sel.rangeCount) {
            const range = sel.getRangeAt(0);
            if (dom/* Dom.isOrContains */.i.isOrContains(this.area, range.commonAncestorContainer)) {
                if (dom/* Dom.isTag */.i.isTag(range.startContainer, constants.INSEPARABLE_TAGS) &&
                    range.collapsed) {
                    (_a = range.startContainer.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(node, range.startContainer);
                }
                else {
                    range.deleteContents();
                    range.insertNode(node);
                }
            }
            else {
                this.area.appendChild(node);
            }
        }
        else {
            this.area.appendChild(node);
        }
        if (insertCursorAfter) {
            if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                node.lastChild && this.setCursorAfter(node.lastChild);
            }
            else {
                this.setCursorAfter(node);
            }
        }
        if (fireChange && this.j.events) {
            this.j.e.fire('synchro');
        }
        if (this.j.events) {
            this.j.e.fire('afterInsertNode', node);
        }
    }
    insertHTML(html) {
        if (html === '') {
            return;
        }
        const node = this.j.createInside.div(), fragment = this.j.createInside.fragment();
        let lastChild;
        if (!this.isFocused() && this.j.isEditorMode()) {
            this.focus();
            this.restore();
        }
        if (!dom/* Dom.isNode */.i.isNode(html, this.win)) {
            node.innerHTML = html.toString();
        }
        else {
            node.appendChild(html);
        }
        if (!this.j.isEditorMode() &&
            this.j.e.fire('insertHTML', node.innerHTML) === false) {
            return;
        }
        lastChild = node.lastChild;
        if (!lastChild) {
            return;
        }
        while (node.firstChild) {
            lastChild = node.firstChild;
            fragment.appendChild(node.firstChild);
        }
        this.insertNode(fragment, false, false);
        if (lastChild) {
            this.setCursorAfter(lastChild);
        }
        else {
            this.setCursorIn(fragment);
        }
        if (this.j.e) {
            this.j.e.fire('synchro');
        }
    }
    insertImage(url, styles = null, defaultWidth = null) {
        const image = (0,helpers.isString)(url) ? this.j.createInside.element('img') : url;
        if ((0,helpers.isString)(url)) {
            image.setAttribute('src', url);
        }
        if (defaultWidth != null) {
            let dw = defaultWidth.toString();
            if (dw &&
                'auto' !== dw &&
                String(dw).indexOf('px') < 0 &&
                String(dw).indexOf('%') < 0) {
                dw += 'px';
            }
            (0,helpers.css)(image, 'width', dw);
        }
        if (styles && typeof styles === 'object') {
            (0,helpers.css)(image, styles);
        }
        const onload = () => {
            if (image.naturalHeight < image.offsetHeight ||
                image.naturalWidth < image.offsetWidth) {
                image.style.width = '';
                image.style.height = '';
            }
            image.removeEventListener('load', onload);
        };
        this.j.e.on(image, 'load', onload);
        if (image.complete) {
            onload();
        }
        this.insertNode(image);
        this.j.e.fire('afterInsertImage', image);
    }
    cursorInTheEdge(start, parentBlock) {
        var _a, _b;
        const end = !start, range = (_a = this.sel) === null || _a === void 0 ? void 0 : _a.getRangeAt(0), current = this.current(false);
        if (!range ||
            !current ||
            !dom/* Dom.isOrContains */.i.isOrContains(parentBlock, current, true)) {
            return null;
        }
        const container = start ? range.startContainer : range.endContainer;
        const offset = start ? range.startOffset : range.endOffset;
        const check = (elm) => elm && !dom/* Dom.isTag */.i.isTag(elm, 'br') && !dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(elm);
        if (dom/* Dom.isText */.i.isText(container)) {
            const text = ((_b = container.nodeValue) === null || _b === void 0 ? void 0 : _b.length) ? container.nodeValue : '';
            if (end && text.replace((0,constants.INVISIBLE_SPACE_REG_EXP_END)(), '').length > offset) {
                return false;
            }
            const inv = (0,constants.INVISIBLE_SPACE_REG_EXP_START)().exec(text);
            if (start &&
                ((inv && inv[0].length < offset) || (!inv && offset > 0))) {
                return false;
            }
        }
        else {
            const children = (0,helpers.toArray)(container.childNodes);
            if (end) {
                if (children.slice(offset).some(check)) {
                    return false;
                }
            }
            else {
                if (children.slice(0, offset).some(check)) {
                    return false;
                }
            }
        }
        return !(0,helpers.call)(start ? dom/* Dom.prev */.i.prev : dom/* Dom.next */.i.next, current, check, parentBlock);
    }
    cursorOnTheLeft(parentBlock) {
        return this.cursorInTheEdge(true, parentBlock);
    }
    cursorOnTheRight(parentBlock) {
        return this.cursorInTheEdge(false, parentBlock);
    }
    setCursorAfter(node) {
        return this.setCursorNearWith(node, false);
    }
    setCursorBefore(node) {
        return this.setCursorNearWith(node, true);
    }
    setCursorNearWith(node, inStart) {
        var _a, _b;
        this.errorNode(node);
        if (!dom/* Dom.up */.i.up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw (0,helpers.error)('Node element must be in editor');
        }
        const range = this.createRange();
        let fakeNode = null;
        if (!dom/* Dom.isText */.i.isText(node)) {
            fakeNode = this.j.createInside.text(constants.INVISIBLE_SPACE);
            inStart ? range.setStartBefore(node) : range.setEndAfter(node);
            range.collapse(inStart);
            range.insertNode(fakeNode);
            range.selectNode(fakeNode);
        }
        else {
            if (inStart) {
                range.setStart(node, 0);
            }
            else {
                range.setEnd(node, (_b = (_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
            }
        }
        range.collapse(inStart);
        this.selectRange(range);
        return fakeNode;
    }
    setCursorIn(node, inStart = false) {
        this.errorNode(node);
        if (!dom/* Dom.up */.i.up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw (0,helpers.error)('Node element must be in editor');
        }
        const range = this.createRange();
        let start = node, last = node;
        do {
            if (dom/* Dom.isText */.i.isText(start)) {
                break;
            }
            last = start;
            start = inStart ? start.firstChild : start.lastChild;
        } while (start);
        if (!start) {
            const fakeNode = this.j.createInside.text(constants.INVISIBLE_SPACE);
            if (!/^(img|br|input)$/i.test(last.nodeName)) {
                last.appendChild(fakeNode);
                last = fakeNode;
            }
            else {
                start = last;
            }
        }
        range.selectNodeContents(start || last);
        range.collapse(inStart);
        this.selectRange(range);
        return last;
    }
    selectRange(range, focus = true) {
        const sel = this.sel;
        if (focus && !this.isFocused()) {
            this.focus();
        }
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
        this.j.e.fire('changeSelection');
    }
    select(node, inward = false) {
        this.errorNode(node);
        if (!dom/* Dom.up */.i.up(node, (elm) => elm === this.area || (elm && elm.parentNode === this.area), this.area)) {
            throw (0,helpers.error)('Node element must be in editor');
        }
        const range = this.createRange();
        range[inward ? 'selectNodeContents' : 'selectNode'](node);
        this.selectRange(range);
    }
    get html() {
        const sel = this.sel;
        if (sel && sel.rangeCount > 0) {
            const range = sel.getRangeAt(0);
            const clonedSelection = range.cloneContents();
            const div = this.j.createInside.div();
            div.appendChild(clonedSelection);
            return div.innerHTML;
        }
        return '';
    }
    wrapInTag(tagOrCallback) {
        (0,helpers.$$)('*[style*=font-size]', this.area).forEach((elm) => {
            elm.style &&
                elm.style.fontSize &&
                elm.setAttribute('data-font-size', elm.style.fontSize.toString());
        });
        if (!this.isCollapsed()) {
            this.j.nativeExecCommand('fontsize', false, '7');
        }
        else {
            const font = this.j.createInside.element('font');
            (0,helpers.attr)(font, 'size', 7);
            this.insertNode(font, false, false);
        }
        (0,helpers.$$)('*[data-font-size]', this.area).forEach((elm) => {
            const fontSize = (0,helpers.attr)(elm, 'data-font-size');
            if (elm.style && fontSize) {
                elm.style.fontSize = fontSize;
                elm.removeAttribute('data-font-size');
            }
        });
        const result = [];
        (0,helpers.$$)('font[size="7"]', this.area).forEach((font) => {
            try {
                if (font.firstChild &&
                    font.firstChild === font.lastChild &&
                    this.isMarker(font.firstChild)) {
                    return;
                }
                if ((0,helpers.isFunction)(tagOrCallback)) {
                    tagOrCallback(font);
                }
                else {
                    result.push(dom/* Dom.replace */.i.replace(font, tagOrCallback, this.j.createInside));
                }
            }
            finally {
                const pn = font.parentNode;
                if (pn) {
                    dom/* Dom.unwrap */.i.unwrap(font);
                    if (dom/* Dom.isEmpty */.i.isEmpty(pn)) {
                        dom/* Dom.unwrap */.i.unwrap(pn);
                    }
                }
            }
        });
        return result;
    }
    applyStyle(style, options = {}) {
        const styleElm = new Style({
            style,
            element: options.element,
            className: options.className,
            defaultTag: options.defaultTag
        });
        styleElm.apply(this.j);
    }
    splitSelection(currentBox) {
        if (!this.isCollapsed()) {
            return null;
        }
        const leftRange = this.createRange();
        const range = this.range;
        leftRange.setStartBefore(currentBox);
        const cursorOnTheRight = this.cursorOnTheRight(currentBox);
        const cursorOnTheLeft = this.cursorOnTheLeft(currentBox);
        const br = this.j.createInside.element('br'), prevFake = this.j.createInside.text(constants.INVISIBLE_SPACE), nextFake = prevFake.cloneNode();
        try {
            if (cursorOnTheRight || cursorOnTheLeft) {
                range.insertNode(br);
                const clearBR = (start, getNext) => {
                    let next = getNext(start);
                    while (next) {
                        const nextSib = getNext(next);
                        if (next &&
                            (dom/* Dom.isTag */.i.isTag(next, 'br') || dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(next))) {
                            dom/* Dom.safeRemove */.i.safeRemove(next);
                        }
                        else {
                            break;
                        }
                        next = nextSib;
                    }
                };
                clearBR(br, (n) => n.nextSibling);
                clearBR(br, (n) => n.previousSibling);
                dom/* Dom.after */.i.after(br, nextFake);
                dom/* Dom.before */.i.before(br, prevFake);
                if (cursorOnTheRight) {
                    leftRange.setEndBefore(br);
                    range.setEndBefore(br);
                }
                else {
                    leftRange.setEndAfter(br);
                    range.setEndAfter(br);
                }
            }
            else {
                leftRange.setEnd(range.startContainer, range.startOffset);
            }
            const fragment = leftRange.extractContents();
            if (currentBox.parentNode) {
                try {
                    currentBox.parentNode.insertBefore(fragment, currentBox);
                    if (cursorOnTheRight && (br === null || br === void 0 ? void 0 : br.parentNode)) {
                        const range = this.createRange();
                        range.setStartBefore(br);
                        this.selectRange(range);
                    }
                }
                catch (e) {
                    if (false) {}
                }
            }
            const fillFakeParent = (fake) => {
                var _a, _b, _c;
                if (((_a = fake === null || fake === void 0 ? void 0 : fake.parentNode) === null || _a === void 0 ? void 0 : _a.firstChild) === ((_b = fake === null || fake === void 0 ? void 0 : fake.parentNode) === null || _b === void 0 ? void 0 : _b.lastChild)) {
                    (_c = fake === null || fake === void 0 ? void 0 : fake.parentNode) === null || _c === void 0 ? void 0 : _c.appendChild(br.cloneNode());
                }
            };
            fillFakeParent(prevFake);
            fillFakeParent(nextFake);
        }
        finally {
            dom/* Dom.safeRemove */.i.safeRemove(prevFake);
            dom/* Dom.safeRemove */.i.safeRemove(nextFake);
        }
        return currentBox.previousElementSibling;
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], Select.prototype, "focus", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Select.prototype, "setCursorAfter", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Select.prototype, "setCursorBefore", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Select.prototype, "setCursorIn", null);

;// CONCATENATED MODULE: ./src/core/selection/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/modules/status-bar/status-bar.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class StatusBar extends component/* ViewComponent */.Hr {
    constructor(jodit, target) {
        super(jodit);
        this.target = target;
        this.container = jodit.c.div('jodit-status-bar');
        target.appendChild(this.container);
        this.hide();
    }
    className() {
        return 'StatusBar';
    }
    hide() {
        this.container.classList.add('jodit_hidden');
    }
    show() {
        this.container.classList.remove('jodit_hidden');
    }
    get isShown() {
        return !this.container.classList.contains('jodit_hidden');
    }
    getHeight() {
        var _a, _b;
        return (_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.offsetHeight) !== null && _b !== void 0 ? _b : 0;
    }
    findEmpty(inTheRight = false) {
        var _a;
        const items = (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.jodit-status-bar__item' +
            (inTheRight ? '.jodit-status-bar__item-right' : ''));
        if (items) {
            for (let i = 0; i < items.length; i += 1) {
                if (!items[i].innerHTML.trim().length) {
                    return items[i];
                }
            }
        }
    }
    append(child, inTheRight = false) {
        var _a;
        const wrapper = this.findEmpty(inTheRight) ||
            this.j.c.div('jodit-status-bar__item');
        if (inTheRight) {
            wrapper.classList.add('jodit-status-bar__item-right');
        }
        wrapper.appendChild(child);
        (_a = this.container) === null || _a === void 0 ? void 0 : _a.appendChild(wrapper);
        if (this.j.o.statusbar) {
            this.show();
        }
        this.j.e.fire('resize');
    }
    destruct() {
        this.setStatus(component/* STATUSES.beforeDestruct */.n$.beforeDestruct);
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
        super.destruct();
    }
}

;// CONCATENATED MODULE: ./src/modules/table.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class Table extends component/* ViewComponent */.Hr {
    constructor() {
        super(...arguments);
        this.selected = new Set();
    }
    className() {
        return 'Table';
    }
    recalculateStyles() {
        const style = (0,global/* getContainer */.ZO)(this.j, Table, 'style', true);
        const selectors = [];
        this.selected.forEach(td => {
            const selector = (0,helpers.cssPath)(td);
            selector && selectors.push(selector);
        });
        style.innerHTML = selectors.length
            ? selectors.join(',') +
                `{${this.jodit.options.table.selectionCellStyle}}`
            : '';
    }
    addSelection(td) {
        this.selected.add(td);
        this.recalculateStyles();
        const table = dom/* Dom.closest */.i.closest(td, 'table', this.j.editor);
        if (table) {
            const cells = Table.selectedByTable.get(table) || new Set();
            cells.add(td);
            Table.selectedByTable.set(table, cells);
        }
    }
    removeSelection(td) {
        this.selected.delete(td);
        this.recalculateStyles();
        const table = dom/* Dom.closest */.i.closest(td, 'table', this.j.editor);
        if (table) {
            const cells = Table.selectedByTable.get(table);
            if (cells) {
                cells.delete(td);
                if (!cells.size) {
                    Table.selectedByTable.delete(table);
                }
            }
        }
    }
    getAllSelectedCells() {
        return (0,helpers.toArray)(this.selected);
    }
    static getSelectedCellsByTable(table) {
        const cells = Table.selectedByTable.get(table);
        return cells ? (0,helpers.toArray)(cells) : [];
    }
    destruct() {
        this.selected.clear();
        return super.destruct();
    }
    static getRowsCount(table) {
        return table.rows.length;
    }
    static getColumnsCount(table) {
        const matrix = Table.formalMatrix(table);
        return matrix.reduce((max_count, cells) => {
            return Math.max(max_count, cells.length);
        }, 0);
    }
    static formalMatrix(table, callback) {
        const matrix = [[]];
        const rows = (0,helpers.toArray)(table.rows);
        const setCell = (cell, i) => {
            if (matrix[i] === undefined) {
                matrix[i] = [];
            }
            const colSpan = cell.colSpan, rowSpan = cell.rowSpan;
            let column, row, currentColumn = 0;
            while (matrix[i][currentColumn]) {
                currentColumn += 1;
            }
            for (row = 0; row < rowSpan; row += 1) {
                for (column = 0; column < colSpan; column += 1) {
                    if (matrix[i + row] === undefined) {
                        matrix[i + row] = [];
                    }
                    if (callback &&
                        callback(cell, i + row, currentColumn + column, colSpan, rowSpan) === false) {
                        return false;
                    }
                    matrix[i + row][currentColumn + column] = cell;
                }
            }
        };
        for (let i = 0; i < rows.length; i += 1) {
            const cells = (0,helpers.toArray)(rows[i].cells);
            for (let j = 0; j < cells.length; j += 1) {
                if (setCell(cells[j], i) === false) {
                    return matrix;
                }
            }
        }
        return matrix;
    }
    static formalCoordinate(table, cell, max = false) {
        let i = 0, j = 0, width = 1, height = 1;
        Table.formalMatrix(table, (td, ii, jj, colSpan, rowSpan) => {
            if (cell === td) {
                i = ii;
                j = jj;
                width = colSpan || 1;
                height = rowSpan || 1;
                if (max) {
                    j += (colSpan || 1) - 1;
                    i += (rowSpan || 1) - 1;
                }
                return false;
            }
        });
        return [i, j, width, height];
    }
    static appendRow(table, line, after, create) {
        let row;
        if (!line) {
            const columnsCount = Table.getColumnsCount(table);
            row = create.element('tr');
            for (let j = 0; j < columnsCount; j += 1) {
                row.appendChild(create.element('td'));
            }
        }
        else {
            row = line.cloneNode(true);
            (0,helpers.$$)('td,th', line).forEach(cell => {
                const rowspan = (0,helpers.attr)(cell, 'rowspan');
                if (rowspan && parseInt(rowspan, 10) > 1) {
                    const newRowSpan = parseInt(rowspan, 10) - 1;
                    (0,helpers.attr)(cell, 'rowspan', newRowSpan > 1 ? newRowSpan : null);
                }
            });
            (0,helpers.$$)('td,th', row).forEach(cell => {
                cell.innerHTML = '';
            });
        }
        if (after && line && line.nextSibling) {
            line.parentNode &&
                line.parentNode.insertBefore(row, line.nextSibling);
        }
        else if (!after && line) {
            line.parentNode && line.parentNode.insertBefore(row, line);
        }
        else {
            ((0,helpers.$$)(':scope>tbody', table)[0] || table).appendChild(row);
        }
    }
    static removeRow(table, rowIndex) {
        const box = Table.formalMatrix(table);
        let dec;
        const row = table.rows[rowIndex];
        (0,helpers.each)(box[rowIndex], (j, cell) => {
            dec = false;
            if (rowIndex - 1 >= 0 && box[rowIndex - 1][j] === cell) {
                dec = true;
            }
            else if (box[rowIndex + 1] && box[rowIndex + 1][j] === cell) {
                if (cell.parentNode === row &&
                    cell.parentNode.nextSibling) {
                    dec = true;
                    let nextCell = j + 1;
                    while (box[rowIndex + 1][nextCell] === cell) {
                        nextCell += 1;
                    }
                    const nextRow = dom/* Dom.next */.i.next(cell.parentNode, (elm) => dom/* Dom.isTag */.i.isTag(elm, 'tr'), table);
                    if (box[rowIndex + 1][nextCell]) {
                        nextRow.insertBefore(cell, box[rowIndex + 1][nextCell]);
                    }
                    else {
                        nextRow.appendChild(cell);
                    }
                }
            }
            else {
                dom/* Dom.safeRemove */.i.safeRemove(cell);
            }
            if (dec &&
                (cell.parentNode === row || cell !== box[rowIndex][j - 1])) {
                const rowSpan = cell.rowSpan;
                (0,helpers.attr)(cell, 'rowspan', rowSpan - 1 > 1 ? (rowSpan - 1).toString() : null);
            }
        });
        dom/* Dom.safeRemove */.i.safeRemove(row);
    }
    static appendColumn(table, j, after, create) {
        const box = Table.formalMatrix(table);
        let i;
        if (j === undefined || j < 0) {
            j = Table.getColumnsCount(table) - 1;
        }
        for (i = 0; i < box.length; i += 1) {
            const cell = create.element('td');
            const td = box[i][j];
            let added = false;
            if (after) {
                if ((box[i] && td && j + 1 >= box[i].length) ||
                    td !== box[i][j + 1]) {
                    if (td.nextSibling) {
                        td.parentNode &&
                            td.parentNode.insertBefore(cell, td.nextSibling);
                    }
                    else {
                        td.parentNode && td.parentNode.appendChild(cell);
                    }
                    added = true;
                }
            }
            else {
                if (j - 1 < 0 ||
                    (box[i][j] !== box[i][j - 1] && box[i][j].parentNode)) {
                    td.parentNode &&
                        td.parentNode.insertBefore(cell, box[i][j]);
                    added = true;
                }
            }
            if (!added) {
                box[i][j].setAttribute('colspan', (parseInt((0,helpers.attr)(box[i][j], 'colspan') || '1', 10) + 1).toString());
            }
        }
    }
    static removeColumn(table, j) {
        const box = Table.formalMatrix(table);
        let dec;
        (0,helpers.each)(box, (i, cells) => {
            const td = cells[j];
            dec = false;
            if (j - 1 >= 0 && box[i][j - 1] === td) {
                dec = true;
            }
            else if (j + 1 < cells.length && box[i][j + 1] === td) {
                dec = true;
            }
            else {
                dom/* Dom.safeRemove */.i.safeRemove(td);
            }
            if (dec && (i - 1 < 0 || td !== box[i - 1][j])) {
                const colSpan = td.colSpan;
                (0,helpers.attr)(td, 'colspan', colSpan - 1 > 1 ? (colSpan - 1).toString() : null);
            }
        });
    }
    static getSelectedBound(table, selectedCells) {
        const bound = [
            [Infinity, Infinity],
            [0, 0]
        ];
        const box = Table.formalMatrix(table);
        let i, j, k;
        for (i = 0; i < box.length; i += 1) {
            for (j = 0; box[i] && j < box[i].length; j += 1) {
                if (selectedCells.includes(box[i][j])) {
                    bound[0][0] = Math.min(i, bound[0][0]);
                    bound[0][1] = Math.min(j, bound[0][1]);
                    bound[1][0] = Math.max(i, bound[1][0]);
                    bound[1][1] = Math.max(j, bound[1][1]);
                }
            }
        }
        for (i = bound[0][0]; i <= bound[1][0]; i += 1) {
            for (k = 1, j = bound[0][1]; j <= bound[1][1]; j += 1) {
                while (box[i] && box[i][j - k] && box[i][j] === box[i][j - k]) {
                    bound[0][1] = Math.min(j - k, bound[0][1]);
                    bound[1][1] = Math.max(j - k, bound[1][1]);
                    k += 1;
                }
                k = 1;
                while (box[i] && box[i][j + k] && box[i][j] === box[i][j + k]) {
                    bound[0][1] = Math.min(j + k, bound[0][1]);
                    bound[1][1] = Math.max(j + k, bound[1][1]);
                    k += 1;
                }
                k = 1;
                while (box[i - k] && box[i][j] === box[i - k][j]) {
                    bound[0][0] = Math.min(i - k, bound[0][0]);
                    bound[1][0] = Math.max(i - k, bound[1][0]);
                    k += 1;
                }
                k = 1;
                while (box[i + k] && box[i][j] === box[i + k][j]) {
                    bound[0][0] = Math.min(i + k, bound[0][0]);
                    bound[1][0] = Math.max(i + k, bound[1][0]);
                    k += 1;
                }
            }
        }
        return bound;
    }
    static normalizeTable(table) {
        let i, j, min, not;
        const __marked = [], box = Table.formalMatrix(table);
        for (j = 0; j < box[0].length; j += 1) {
            min = 1000000;
            not = false;
            for (i = 0; i < box.length; i += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].colSpan < 2) {
                    not = true;
                    break;
                }
                min = Math.min(min, box[i][j].colSpan);
            }
            if (!not) {
                for (i = 0; i < box.length; i += 1) {
                    if (box[i][j] === undefined) {
                        continue;
                    }
                    Table.__mark(box[i][j], 'colspan', box[i][j].colSpan - min + 1, __marked);
                }
            }
        }
        for (i = 0; i < box.length; i += 1) {
            min = 1000000;
            not = false;
            for (j = 0; j < box[i].length; j += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].rowSpan < 2) {
                    not = true;
                    break;
                }
                min = Math.min(min, box[i][j].rowSpan);
            }
            if (!not) {
                for (j = 0; j < box[i].length; j += 1) {
                    if (box[i][j] === undefined) {
                        continue;
                    }
                    Table.__mark(box[i][j], 'rowspan', box[i][j].rowSpan - min + 1, __marked);
                }
            }
        }
        for (i = 0; i < box.length; i += 1) {
            for (j = 0; j < box[i].length; j += 1) {
                if (box[i][j] === undefined) {
                    continue;
                }
                if (box[i][j].hasAttribute('rowspan') &&
                    box[i][j].rowSpan === 1) {
                    box[i][j].removeAttribute('rowspan');
                }
                if (box[i][j].hasAttribute('colspan') &&
                    box[i][j].colSpan === 1) {
                    box[i][j].removeAttribute('colspan');
                }
                if (box[i][j].hasAttribute('class') &&
                    !(0,helpers.attr)(box[i][j], 'class')) {
                    box[i][j].removeAttribute('class');
                }
            }
        }
        Table.__unmark(__marked);
    }
    static mergeSelected(table, jodit) {
        const html = [], bound = Table.getSelectedBound(table, Table.getSelectedCellsByTable(table));
        let w = 0, first = null, first_j = 0, td, cols = 0, rows = 0;
        const __marked = [];
        if (bound && (bound[0][0] - bound[1][0] || bound[0][1] - bound[1][1])) {
            Table.formalMatrix(table, (cell, i, j, cs, rs) => {
                if (i >= bound[0][0] && i <= bound[1][0]) {
                    if (j >= bound[0][1] && j <= bound[1][1]) {
                        td = cell;
                        if (td.__i_am_already_was) {
                            return;
                        }
                        td.__i_am_already_was = true;
                        if (i === bound[0][0] && td.style.width) {
                            w += td.offsetWidth;
                        }
                        if ((0,helpers.trim)(cell.innerHTML.replace(/<br(\/)?>/g, '')) !== '') {
                            html.push(cell.innerHTML);
                        }
                        if (cs > 1) {
                            cols += cs - 1;
                        }
                        if (rs > 1) {
                            rows += rs - 1;
                        }
                        if (!first) {
                            first = cell;
                            first_j = j;
                        }
                        else {
                            Table.__mark(td, 'remove', 1, __marked);
                            instance(jodit).removeSelection(td);
                        }
                    }
                }
            });
            cols = bound[1][1] - bound[0][1] + 1;
            rows = bound[1][0] - bound[0][0] + 1;
            if (first) {
                if (cols > 1) {
                    Table.__mark(first, 'colspan', cols, __marked);
                }
                if (rows > 1) {
                    Table.__mark(first, 'rowspan', rows, __marked);
                }
                if (w) {
                    Table.__mark(first, 'width', ((w / table.offsetWidth) * 100).toFixed(constants.ACCURACY) + '%', __marked);
                    if (first_j) {
                        Table.setColumnWidthByDelta(table, first_j, 0, true, __marked);
                    }
                }
                first.innerHTML = html.join('<br/>');
                instance(jodit).addSelection(first);
                delete first.__i_am_already_was;
                Table.__unmark(__marked);
                Table.normalizeTable(table);
                (0,helpers.each)((0,helpers.toArray)(table.rows), (index, tr) => {
                    if (!tr.cells.length) {
                        dom/* Dom.safeRemove */.i.safeRemove(tr);
                    }
                });
            }
        }
    }
    static splitHorizontal(table, jodit) {
        let coord, td, tr, parent, after;
        const __marked = [];
        Table.getSelectedCellsByTable(table).forEach((cell) => {
            td = jodit.createInside.element('td');
            td.appendChild(jodit.createInside.element('br'));
            tr = jodit.createInside.element('tr');
            coord = Table.formalCoordinate(table, cell);
            if (cell.rowSpan < 2) {
                Table.formalMatrix(table, (tdElm, i, j) => {
                    if (coord[0] === i &&
                        coord[1] !== j &&
                        tdElm !== cell) {
                        Table.__mark(tdElm, 'rowspan', tdElm.rowSpan + 1, __marked);
                    }
                });
                dom/* Dom.after */.i.after(dom/* Dom.closest */.i.closest(cell, 'tr', table), tr);
                tr.appendChild(td);
            }
            else {
                Table.__mark(cell, 'rowspan', cell.rowSpan - 1, __marked);
                Table.formalMatrix(table, (tdElm, i, j) => {
                    if (i > coord[0] &&
                        i < coord[0] + cell.rowSpan &&
                        coord[1] > j &&
                        tdElm.parentNode
                            .rowIndex === i) {
                        after = tdElm;
                    }
                    if (coord[0] < i && tdElm === cell) {
                        parent = table.rows[i];
                    }
                });
                if (after) {
                    dom/* Dom.after */.i.after(after, td);
                }
                else {
                    parent.insertBefore(td, parent.firstChild);
                }
            }
            if (cell.colSpan > 1) {
                Table.__mark(td, 'colspan', cell.colSpan, __marked);
            }
            Table.__unmark(__marked);
            instance(jodit).removeSelection(cell);
        });
        this.normalizeTable(table);
    }
    static splitVertical(table, jodit) {
        let coord, td, percentage;
        const __marked = [];
        Table.getSelectedCellsByTable(table).forEach((cell) => {
            coord = Table.formalCoordinate(table, cell);
            if (cell.colSpan < 2) {
                Table.formalMatrix(table, (tdElm, i, j) => {
                    if (coord[1] === j &&
                        coord[0] !== i &&
                        tdElm !== cell) {
                        Table.__mark(tdElm, 'colspan', tdElm.colSpan + 1, __marked);
                    }
                });
            }
            else {
                Table.__mark(cell, 'colspan', cell.colSpan - 1, __marked);
            }
            td = jodit.createInside.element('td');
            td.appendChild(jodit.createInside.element('br'));
            if (cell.rowSpan > 1) {
                Table.__mark(td, 'rowspan', cell.rowSpan, __marked);
            }
            const oldWidth = cell.offsetWidth;
            dom/* Dom.after */.i.after(cell, td);
            percentage = oldWidth / table.offsetWidth / 2;
            Table.__mark(cell, 'width', (percentage * 100).toFixed(constants.ACCURACY) + '%', __marked);
            Table.__mark(td, 'width', (percentage * 100).toFixed(constants.ACCURACY) + '%', __marked);
            Table.__unmark(__marked);
            instance(jodit).removeSelection(cell);
        });
        Table.normalizeTable(table);
    }
    static setColumnWidthByDelta(table, j, delta, noUnmark, marked) {
        const box = Table.formalMatrix(table);
        let i, w, percent;
        for (i = 0; i < box.length; i += 1) {
            w = box[i][j].offsetWidth;
            percent = ((w + delta) / table.offsetWidth) * 100;
            Table.__mark(box[i][j], 'width', percent.toFixed(constants.ACCURACY) + '%', marked);
        }
        if (!noUnmark) {
            Table.__unmark(marked);
        }
    }
    static __mark(cell, key, value, marked) {
        marked.push(cell);
        if (!cell.__marked_value) {
            cell.__marked_value = {};
        }
        cell.__marked_value[key] = value === undefined ? 1 : value;
    }
    static __unmark(marked) {
        marked.forEach(cell => {
            if (cell.__marked_value) {
                (0,helpers.each)(cell.__marked_value, (key, value) => {
                    switch (key) {
                        case 'remove':
                            dom/* Dom.safeRemove */.i.safeRemove(cell);
                            break;
                        case 'rowspan':
                            if (value > 1) {
                                cell.setAttribute('rowspan', value.toString());
                            }
                            else {
                                cell.removeAttribute('rowspan');
                            }
                            break;
                        case 'colspan':
                            if (value > 1) {
                                cell.setAttribute('colspan', value.toString());
                            }
                            else {
                                cell.removeAttribute('colspan');
                            }
                            break;
                        case 'width':
                            cell.style.width = value.toString();
                            break;
                    }
                    delete cell.__marked_value[key];
                });
                delete cell.__marked_value;
            }
        });
    }
}
Table.selectedByTable = new WeakMap();
(0,tslib_es6.__decorate)([
    (0,decorators.debounce)()
], Table.prototype, "recalculateStyles", null);
const instance = (j) => j.getInstance('Table', j.o);

;// CONCATENATED MODULE: ./src/modules/toolbar/button/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/modules/uploader/uploader.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config/* Config.prototype.enableDragAndDropFileToEditor */.D.prototype.enableDragAndDropFileToEditor = true;
config/* Config.prototype.uploader */.D.prototype.uploader = {
    url: '',
    insertImageAsBase64URI: false,
    imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
    headers: null,
    data: null,
    filesVariableName(i) {
        return `files[${i}]`;
    },
    withCredentials: false,
    pathVariableName: 'path',
    format: 'json',
    method: 'POST',
    prepareData(formData) {
        return formData;
    },
    isSuccess(resp) {
        return resp.success;
    },
    getMessage(resp) {
        return resp.data.messages !== undefined && (0,helpers.isArray)(resp.data.messages)
            ? resp.data.messages.join(' ')
            : '';
    },
    process(resp) {
        return resp.data;
    },
    error(e) {
        this.j.e.fire('errorMessage', e.message, 'error', 4000);
    },
    defaultHandlerSuccess(resp) {
        const j = this.j || this;
        if (!(0,helpers.isJoditObject)(j)) {
            return;
        }
        if (resp.files && resp.files.length) {
            resp.files.forEach((filename, index) => {
                const [tagName, attr] = resp.isImages && resp.isImages[index]
                    ? ['img', 'src']
                    : ['a', 'href'];
                const elm = j.createInside.element(tagName);
                elm.setAttribute(attr, resp.baseurl + filename);
                if (tagName === 'a') {
                    elm.textContent = resp.baseurl + filename;
                }
                if (tagName === 'img') {
                    j.s.insertImage(elm, null, j.o.imageDefaultWidth);
                }
                else {
                    j.s.insertNode(elm);
                }
            });
        }
    },
    defaultHandlerError(e) {
        this.j.e.fire('errorMessage', e.message);
    },
    contentType(requestData) {
        return this.j.ow.FormData !== undefined &&
            typeof requestData !== 'string'
            ? false
            : 'application/x-www-form-urlencoded; charset=UTF-8';
    }
};
class Uploader extends component/* ViewComponent */.Hr {
    constructor(editor, options) {
        super(editor);
        this.path = '';
        this.source = 'default';
        this.ajaxInstances = [];
        this.options = (0,helpers.ConfigProto)(options || {}, (0,helpers.ConfigProto)(config/* Config.defaultOptions.uploader */.D.defaultOptions.uploader, (0,helpers.isJoditObject)(editor) ? editor.o.uploader : {}));
    }
    className() {
        return 'Uploader';
    }
    static dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]), mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0], ab = new ArrayBuffer(byteString.length), ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i += 1) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    }
    get o() {
        return this.options;
    }
    buildData(data) {
        if (this.o.buildData && typeof this.o.buildData === 'function') {
            return this.o.buildData.call(this, data);
        }
        const FD = this.j.ow.FormData;
        if (FD !== undefined) {
            if (data instanceof FD) {
                return data;
            }
            if ((0,helpers.isString)(data)) {
                return data;
            }
            const newdata = new FD();
            Object.keys(data).forEach(key => {
                newdata.append(key, data[key]);
            });
            return newdata;
        }
        return data;
    }
    send(data, success) {
        const requestData = this.buildData(data), sendData = (request) => {
            const ajax = new Ajax(this.j, {
                xhr: () => {
                    const xhr = new XMLHttpRequest();
                    if (this.j.ow.FormData !== undefined &&
                        xhr.upload) {
                        this.j.progressbar.show().progress(10);
                        xhr.upload.addEventListener('progress', evt => {
                            if (evt.lengthComputable) {
                                let percentComplete = evt.loaded / evt.total;
                                percentComplete *= 100;
                                console.log('progress', percentComplete);
                                this.j.progressbar
                                    .show()
                                    .progress(percentComplete);
                                if (percentComplete >= 100) {
                                    this.j.progressbar.hide();
                                }
                            }
                        }, false);
                    }
                    else {
                        this.j.progressbar.hide();
                    }
                    return xhr;
                },
                method: this.o.method || 'POST',
                data: request,
                url: (0,helpers.isFunction)(this.o.url)
                    ? this.o.url(request)
                    : this.o.url,
                headers: this.o.headers,
                queryBuild: this.o.queryBuild,
                contentType: this.o.contentType.call(this, request),
                dataType: this.o.format || 'json',
                withCredentials: this.o.withCredentials || false
            });
            this.ajaxInstances.push(ajax);
            const removeAjaxInstanceFromList = () => {
                const index = this.ajaxInstances.indexOf(ajax);
                if (index !== -1) {
                    this.ajaxInstances.splice(index, 1);
                }
            };
            return ajax
                .send()
                .then(resp => {
                removeAjaxInstanceFromList();
                success.call(this, resp);
            })
                .catch(error => {
                removeAjaxInstanceFromList();
                this.o.error.call(this, error);
            });
        };
        if (requestData instanceof Promise) {
            return requestData.then(sendData).catch(error => {
                this.o.error.call(this, error);
            });
        }
        else {
            return sendData(requestData);
        }
    }
    sendFiles(files, handlerSuccess, handlerError, process) {
        if (!files) {
            return Promise.reject((0,helpers.error)('Need files'));
        }
        const uploader = this;
        let fileList = (0,helpers.toArray)(files);
        if (!fileList.length) {
            return Promise.reject((0,helpers.error)('Need files'));
        }
        const promises = [];
        if (this.o.insertImageAsBase64URI) {
            let file, i;
            for (i = 0; i < fileList.length; i += 1) {
                file = fileList[i];
                if (file && file.type) {
                    const mime = file.type.match(/\/([a-z0-9]+)/i);
                    const extension = mime[1]
                        ? mime[1].toLowerCase()
                        : '';
                    if (this.o.imagesExtensions.includes(extension)) {
                        const reader = new FileReader();
                        promises.push(new Promise((resolve, reject) => {
                            reader.onerror = reject;
                            reader.onloadend = () => {
                                const resp = {
                                    baseurl: '',
                                    files: [reader.result],
                                    isImages: [true]
                                };
                                if (typeof (handlerSuccess ||
                                    uploader.options
                                        .defaultHandlerSuccess) === 'function') {
                                    (handlerSuccess ||
                                        uploader.options
                                            .defaultHandlerSuccess).call(uploader, resp);
                                }
                                resolve(resp);
                            };
                            reader.readAsDataURL(file);
                        }));
                        fileList[i] = null;
                    }
                }
            }
        }
        fileList = fileList.filter(a => a);
        if (fileList.length) {
            const form = new FormData();
            form.append(this.o.pathVariableName, uploader.path);
            form.append('source', uploader.source);
            let file;
            for (let i = 0; i < fileList.length; i += 1) {
                file = fileList[i];
                if (file) {
                    const mime = file.type.match(/\/([a-z0-9]+)/i);
                    const extension = mime && mime[1] ? mime[1].toLowerCase() : '';
                    let newName = fileList[i].name ||
                        Math.random().toString().replace('.', '');
                    if (extension) {
                        let extForReg = extension;
                        if (['jpeg', 'jpg'].includes(extForReg)) {
                            extForReg = 'jpeg|jpg';
                        }
                        const reEnd = new RegExp('.(' + extForReg + ')$', 'i');
                        if (!reEnd.test(newName)) {
                            newName += '.' + extension;
                        }
                    }
                    form.append(this.o.filesVariableName(i), fileList[i], newName);
                }
            }
            if (process) {
                process(form);
            }
            if (uploader.o.data && (0,helpers.isPlainObject)(uploader.o.data)) {
                Object.keys(uploader.o.data).forEach((key) => {
                    form.append(key, uploader.o.data[key]);
                });
            }
            uploader.o.prepareData.call(this, form);
            promises.push(uploader
                .send(form, (resp) => {
                if (this.o.isSuccess.call(uploader, resp)) {
                    if (typeof (handlerSuccess ||
                        uploader.o.defaultHandlerSuccess) === 'function') {
                        (handlerSuccess ||
                            uploader.options
                                .defaultHandlerSuccess).call(uploader, uploader.o.process.call(uploader, resp));
                    }
                }
                else {
                    if ((0,helpers.isFunction)(handlerError ||
                        uploader.o.defaultHandlerError)) {
                        (handlerError ||
                            uploader.options
                                .defaultHandlerError).call(uploader, (0,helpers.error)(uploader.o.getMessage.call(uploader, resp)));
                        return;
                    }
                }
            })
                .then(() => {
                this.j.events && this.j.e.fire('filesWereUploaded');
            }));
        }
        return Promise.all(promises);
    }
    setPath(path) {
        this.path = path;
    }
    setSource(source) {
        this.source = source;
    }
    bind(form, handlerSuccess, handlerError) {
        const self = this, onPaste = (e) => {
            let i, file, extension;
            const cData = e.clipboardData;
            const process = (formdata) => {
                if (file) {
                    formdata.append('extension', extension);
                    formdata.append('mimetype', file.type);
                }
            };
            if (!constants.IS_IE && hasFiles(cData)) {
                this.sendFiles(cData.files, handlerSuccess, handlerError);
                return false;
            }
            if (constants.IS_IE && !true) {
                if (cData &&
                    (!cData.types.length || cData.types[0] !== constants.TEXT_PLAIN)) {
                    const div = this.j.c.div('', {
                        tabindex: -1,
                        style: 'left: -9999px; top: 0; width: 0; height: 100%;line-height: 140%; ' +
                            'overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;',
                        contenteditable: true
                    });
                    (0,global/* getContainer */.ZO)(this.j, Uploader).appendChild(div);
                    const selection = (0,helpers.isJoditObject)(this.j)
                        ? this.j.s.save()
                        : null, restore = () => selection &&
                        (0,helpers.isJoditObject)(this.j) &&
                        this.j.s.restore();
                    div.focus();
                    this.j.async.setTimeout(() => {
                        const child = div.firstChild;
                        dom/* Dom.safeRemove */.i.safeRemove(div);
                        if (child && child.hasAttribute('src')) {
                            const src = (0,helpers.attr)(child, 'src') || '';
                            restore();
                            self.sendFiles([Uploader.dataURItoBlob(src)], handlerSuccess, handlerError);
                        }
                    }, this.j.defaultTimeout);
                }
                return;
            }
            if (cData && cData.items && cData.items.length) {
                const items = cData.items;
                for (i = 0; i < items.length; i += 1) {
                    if (items[i].kind === 'file' &&
                        items[i].type === 'image/png') {
                        file = items[i].getAsFile();
                        if (file) {
                            const mime = file.type.match(/\/([a-z0-9]+)/i);
                            extension = mime[1]
                                ? mime[1].toLowerCase()
                                : '';
                            this.sendFiles([file], handlerSuccess, handlerError, process);
                        }
                        e.preventDefault();
                        break;
                    }
                }
            }
        };
        if (this.j && this.j.editor !== form) {
            self.j.e.on(form, 'paste', onPaste);
        }
        else {
            self.j.e.on('beforePaste', onPaste);
        }
        const hasFiles = (data) => Boolean(data && data.files && data.files.length !== 0);
        self.j.e
            .on(form, 'dragend dragover dragenter dragleave drop', (e) => {
            e.preventDefault();
        })
            .on(form, 'dragover', (event) => {
            if (hasFiles(event.dataTransfer)) {
                form.classList.contains('jodit_draghover') ||
                    form.classList.add('jodit_draghover');
                event.preventDefault();
            }
        })
            .on(form, 'dragend', (event) => {
            if (hasFiles(event.dataTransfer)) {
                form.classList.contains('jodit_draghover') &&
                    form.classList.remove('jodit_draghover');
                event.preventDefault();
            }
        })
            .on(form, 'drop', (event) => {
            form.classList.remove('jodit_draghover');
            if (hasFiles(event.dataTransfer)) {
                event.preventDefault();
                event.stopImmediatePropagation();
                this.sendFiles(event.dataTransfer.files, handlerSuccess, handlerError);
            }
        });
        const inputFile = form.querySelector('input[type=file]');
        if (inputFile) {
            self.j.e.on(inputFile, 'change', function () {
                self.sendFiles(this.files, handlerSuccess, handlerError).then(() => {
                    inputFile.value = '';
                    if (!/safari/i.test(navigator.userAgent)) {
                        inputFile.type = '';
                        inputFile.type = 'file';
                    }
                });
            });
        }
    }
    uploadRemoteImage(url, handlerSuccess, handlerError) {
        const uploader = this;
        uploader.send({
            action: 'fileUploadRemote',
            url
        }, (resp) => {
            if (uploader.o.isSuccess.call(uploader, resp)) {
                if (typeof handlerSuccess === 'function') {
                    handlerSuccess.call(uploader, this.o.process.call(this, resp));
                }
                else {
                    this.o.defaultHandlerSuccess.call(uploader, this.o.process.call(this, resp));
                }
            }
            else {
                if (typeof (handlerError || uploader.o.defaultHandlerError) === 'function') {
                    (handlerError || this.o.defaultHandlerError).call(uploader, (0,helpers.error)(uploader.o.getMessage.call(this, resp)));
                    return;
                }
            }
        });
    }
    destruct() {
        this.setStatus(component/* STATUSES.beforeDestruct */.n$.beforeDestruct);
        this.ajaxInstances.forEach(ajax => {
            try {
                ajax.destruct();
            }
            catch (_a) { }
        });
        super.destruct();
    }
}

// EXTERNAL MODULE: ./src/core/plugin-system.ts
var plugin_system = __webpack_require__(13);
;// CONCATENATED MODULE: ./src/modules/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



























;// CONCATENATED MODULE: ./src/jodit.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class Jodit extends ViewWithToolbar {
    constructor(element, options) {
        super(options, true);
        this.isJodit = true;
        this.__defaultStyleDisplayKey = 'data-jodit-default-style-display';
        this.__defaultClassesKey = 'data-jodit-default-classes';
        this.commands = {};
        this.__selectionLocked = null;
        this.__wasReadOnly = false;
        this.createInside = new Create(() => this.ed, this.o.createAttributes);
        this.editorIsActive = false;
        this.__mode = constants.MODE_WYSIWYG;
        this.__callChangeCount = 0;
        this.isSilentChange = false;
        this.elementToPlace = new Map();
        try {
            (0,helpers.resolveElement)(element, this.o.shadowRoot || this.od);
        }
        catch (e) {
            this.destruct();
            throw e;
        }
        this.setStatus(component/* STATUSES.beforeInit */.n$.beforeInit);
        this.id =
            (0,helpers.attr)((0,helpers.resolveElement)(element, this.o.shadowRoot || this.od), 'id') ||
                new Date().getTime().toString();
        global/* instances */.as[this.id] = this;
        this.storage = Storage.makeStorage(true, this.id);
        this.attachEvents(options);
        this.e.on(this.ow, 'resize', () => {
            if (this.e) {
                this.e.fire('resize');
            }
        });
        this.e.on('prepareWYSIWYGEditor', this.prepareWYSIWYGEditor);
        this.selection = new Select(this);
        const beforeInitHookResult = this.beforeInitHook();
        (0,helpers.callPromise)(beforeInitHookResult, () => {
            this.e.fire('beforeInit', this);
            const initPluginsResult = global/* pluginSystem.init */.pw.init(this);
            (0,helpers.callPromise)(initPluginsResult, () => {
                this.e.fire('afterPluginSystemInit', this);
                this.e.on('changePlace', () => {
                    this.setReadOnly(this.o.readonly);
                    this.setDisabled(this.o.disabled);
                });
                this.places.length = 0;
                const addPlaceResult = this.addPlace(element, options);
                global/* instances */.as[this.id] = this;
                const init = () => {
                    if (this.e) {
                        this.e.fire('afterInit', this);
                    }
                    this.afterInitHook();
                    this.setStatus(component/* STATUSES.ready */.n$.ready);
                    this.e.fire('afterConstructor', this);
                };
                (0,helpers.callPromise)(addPlaceResult, init);
            });
        });
    }
    className() {
        return 'Jodit';
    }
    waitForReady() {
        if (this.isReady) {
            return Promise.resolve(this);
        }
        return this.async.promise(resolve => {
            this.hookStatus('ready', () => resolve(this));
        });
    }
    get text() {
        if (this.editor) {
            return this.editor.innerText || '';
        }
        const div = this.createInside.div();
        div.innerHTML = this.getElementValue();
        return div.innerText || '';
    }
    get value() {
        return this.getEditorValue();
    }
    set value(html) {
        this.setEditorValue(html);
    }
    get defaultTimeout() {
        return this.options && this.o.observer
            ? this.o.observer.timeout
            : config/* Config.defaultOptions.observer.timeout */.D.defaultOptions.observer.timeout;
    }
    static atom(object) {
        return (0,helpers.markAsAtomic)(object);
    }
    static make(element, options) {
        return new Jodit(element, options);
    }
    static get defaultOptions() {
        return config/* Config.defaultOptions */.D.defaultOptions;
    }
    setPlaceField(field, value) {
        if (!this.currentPlace) {
            this.currentPlace = {};
            this.places = [this.currentPlace];
        }
        this.currentPlace[field] = value;
    }
    get element() {
        return this.currentPlace.element;
    }
    get editor() {
        return this.currentPlace.editor;
    }
    set editor(editor) {
        this.setPlaceField('editor', editor);
    }
    get container() {
        return this.currentPlace.container;
    }
    set container(container) {
        this.setPlaceField('container', container);
    }
    get workplace() {
        return this.currentPlace.workplace;
    }
    get statusbar() {
        return this.currentPlace.statusbar;
    }
    get iframe() {
        return this.currentPlace.iframe;
    }
    set iframe(iframe) {
        this.setPlaceField('iframe', iframe);
    }
    get observer() {
        return this.currentPlace.observer;
    }
    get editorWindow() {
        return this.currentPlace.editorWindow;
    }
    set editorWindow(win) {
        this.setPlaceField('editorWindow', win);
    }
    get ew() {
        return this.editorWindow;
    }
    get editorDocument() {
        return this.currentPlace.editorWindow.document;
    }
    get ed() {
        return this.editorDocument;
    }
    get options() {
        return this.currentPlace.options;
    }
    set options(opt) {
        this.setPlaceField('options', opt);
    }
    get s() {
        return this.selection;
    }
    get uploader() {
        return this.getInstance('Uploader', this.o.uploader);
    }
    get filebrowser() {
        const jodit = this;
        const options = (0,helpers.ConfigProto)({
            defaultTimeout: jodit.defaultTimeout,
            uploader: jodit.o.uploader,
            language: jodit.o.language,
            license: jodit.o.license,
            theme: jodit.o.theme,
            defaultCallback(data) {
                if (data.files && data.files.length) {
                    data.files.forEach((file, i) => {
                        const url = data.baseurl + file;
                        const isImage = data.isImages
                            ? data.isImages[i]
                            : false;
                        if (isImage) {
                            jodit.s.insertImage(url, null, jodit.o.imageDefaultWidth);
                        }
                        else {
                            jodit.s.insertNode(jodit.createInside.fromHTML(`<a href='${url}' title='${url}'>${url}</a>`));
                        }
                    });
                }
            }
        }, this.o.filebrowser);
        return jodit.getInstance('FileBrowser', options);
    }
    get mode() {
        return this.__mode;
    }
    set mode(mode) {
        this.setMode(mode);
    }
    getNativeEditorValue() {
        const value = this.e.fire('beforeGetNativeEditorValue');
        if ((0,helpers.isString)(value)) {
            return value;
        }
        if (this.editor) {
            return this.editor.innerHTML;
        }
        return this.getElementValue();
    }
    setNativeEditorValue(value) {
        if (this.e.fire('beforeSetNativeEditorValue', value)) {
            return;
        }
        if (this.editor) {
            this.editor.innerHTML = value;
        }
    }
    getEditorValue(removeSelectionMarkers = true) {
        let value;
        value = this.e.fire('beforeGetValueFromEditor');
        if (value !== undefined) {
            return value;
        }
        value = this.getNativeEditorValue().replace(constants.INVISIBLE_SPACE_REG_EXP(), '');
        if (removeSelectionMarkers) {
            value = value.replace(/<span[^>]+id="jodit-selection_marker_[^>]+><\/span>/g, '');
        }
        if (value === '<br>') {
            value = '';
        }
        const new_value = { value };
        this.e.fire('afterGetValueFromEditor', new_value);
        return new_value.value;
    }
    setEditorValue(value) {
        const newValue = this.e.fire('beforeSetValueToEditor', value);
        if (newValue === false) {
            return;
        }
        if ((0,helpers.isString)(newValue)) {
            value = newValue;
        }
        if (!this.editor) {
            if (value !== undefined) {
                this.setElementValue(value);
            }
            return;
        }
        if (!(0,helpers.isString)(value) && !(0,helpers.isVoid)(value)) {
            throw (0,helpers.error)('value must be string');
        }
        if (value !== undefined && this.getNativeEditorValue() !== value) {
            this.setNativeEditorValue(value);
        }
        this.e.fire('postProcessSetEditorValue');
        const old_value = this.getElementValue(), new_value = this.getEditorValue();
        if (!this.isSilentChange &&
            old_value !== new_value &&
            this.__callChangeCount < constants.SAFE_COUNT_CHANGE_CALL) {
            this.setElementValue(new_value);
            this.__callChangeCount += 1;
            try {
                this.observer.upTick();
                this.e.fire('change', new_value, old_value);
                this.e.fire(this.observer, 'change', new_value, old_value);
            }
            finally {
                this.__callChangeCount = 0;
            }
        }
    }
    getElementValue() {
        return this.element.value !== undefined
            ? this.element.value
            : this.element.innerHTML;
    }
    setElementValue(value) {
        if (!(0,helpers.isString)(value) && value !== undefined) {
            throw (0,helpers.error)('value must be string');
        }
        if (value !== undefined) {
            if (this.element !== this.container) {
                if (this.element.value !== undefined) {
                    this.element.value = value;
                }
                else {
                    this.element.innerHTML = value;
                }
            }
        }
        else {
            value = this.getElementValue();
        }
        if (value !== this.getEditorValue()) {
            this.setEditorValue(value);
        }
    }
    registerCommand(commandNameOriginal, command, options) {
        const commandName = commandNameOriginal.toLowerCase();
        if (this.commands[commandName] === undefined) {
            this.commands[commandName] = [];
        }
        this.commands[commandName].push(command);
        if (!(0,helpers.isFunction)(command)) {
            const hotkeys = this.o.commandToHotkeys[commandName] ||
                this.o.commandToHotkeys[commandNameOriginal] ||
                command.hotkeys;
            if (hotkeys) {
                this.registerHotkeyToCommand(hotkeys, commandName, options === null || options === void 0 ? void 0 : options.stopPropagation);
            }
        }
        return this;
    }
    registerHotkeyToCommand(hotkeys, commandName, shouldStop = true) {
        const shortcuts = (0,helpers.asArray)(hotkeys)
            .map(helpers.normalizeKeyAliases)
            .map(hotkey => hotkey + '.hotkey')
            .join(' ');
        this.e
            .off(shortcuts)
            .on(shortcuts, (type, stop) => {
            stop.shouldStop = shouldStop !== null && shouldStop !== void 0 ? shouldStop : true;
            return this.execCommand(commandName);
        });
    }
    execCommand(command, showUI = false, value = null) {
        if (this.o.readonly && command !== 'selectall') {
            return;
        }
        let result;
        command = command.toLowerCase();
        result = this.e.fire('beforeCommand', command, showUI, value);
        if (result !== false) {
            result = this.execCustomCommands(command, showUI, value);
        }
        if (result !== false) {
            this.s.focus();
            if (command === 'selectall') {
                this.s.select(this.editor, true);
            }
            else {
                try {
                    result = this.nativeExecCommand(command, showUI, value);
                }
                catch (e) {
                    if (false) {}
                }
            }
        }
        this.e.fire('afterCommand', command, showUI, value);
        this.setEditorValue();
        return result;
    }
    nativeExecCommand(command, showUI = false, value = null) {
        this.isSilentChange = true;
        try {
            return this.ed.execCommand(command, showUI, value);
        }
        finally {
            this.isSilentChange = false;
        }
    }
    execCustomCommands(commandName, second = false, third = null) {
        commandName = commandName.toLowerCase();
        if (this.commands[commandName] !== undefined) {
            let result;
            const exec = (command) => {
                let callback;
                if ((0,helpers.isFunction)(command)) {
                    callback = command;
                }
                else {
                    callback = command.exec;
                }
                const resultCurrent = callback.call(this, commandName, second, third);
                if (resultCurrent !== undefined) {
                    result = resultCurrent;
                }
            };
            for (let i = 0; i < this.commands[commandName].length; i += 1) {
                exec(this.commands[commandName][i]);
            }
            return result;
        }
    }
    lock(name = 'any') {
        if (super.lock(name)) {
            this.__selectionLocked = this.s.save();
            this.s.clear();
            this.editor.classList.add('jodit_disabled');
            this.e.fire('lock', true);
            return true;
        }
        return false;
    }
    unlock() {
        if (super.unlock()) {
            this.editor.classList.remove('jodit_disabled');
            if (this.__selectionLocked) {
                this.s.restore();
            }
            this.e.fire('lock', false);
            return true;
        }
        return false;
    }
    getMode() {
        return this.mode;
    }
    isEditorMode() {
        return this.getRealMode() === constants.MODE_WYSIWYG;
    }
    getRealMode() {
        if (this.getMode() !== constants.MODE_SPLIT) {
            return this.getMode();
        }
        const active = this.od.activeElement;
        if (active &&
            (active === this.iframe ||
                dom/* Dom.isOrContains */.i.isOrContains(this.editor, active) ||
                dom/* Dom.isOrContains */.i.isOrContains(this.toolbar.container, active))) {
            return constants.MODE_WYSIWYG;
        }
        return constants.MODE_SOURCE;
    }
    setMode(mode) {
        const oldmode = this.getMode();
        const data = {
            mode: parseInt(mode.toString(), 10)
        }, modeClasses = [
            'jodit-wysiwyg_mode',
            'jodit-source__mode',
            'jodit_split_mode'
        ];
        if (this.e.fire('beforeSetMode', data) === false) {
            return;
        }
        this.__mode = [
            constants.MODE_SOURCE,
            constants.MODE_WYSIWYG,
            constants.MODE_SPLIT
        ].includes(data.mode)
            ? data.mode
            : constants.MODE_WYSIWYG;
        if (this.o.saveModeInStorage) {
            this.storage.set('jodit_default_mode', this.mode);
        }
        modeClasses.forEach(className => {
            this.container.classList.remove(className);
        });
        this.container.classList.add(modeClasses[this.mode - 1]);
        if (oldmode !== this.getMode()) {
            this.e.fire('afterSetMode');
        }
    }
    toggleMode() {
        let mode = this.getMode();
        if ([
            constants.MODE_SOURCE,
            constants.MODE_WYSIWYG,
            this.o.useSplitMode ? constants.MODE_SPLIT : 9
        ].includes(mode + 1)) {
            mode += 1;
        }
        else {
            mode = constants.MODE_WYSIWYG;
        }
        this.setMode(mode);
    }
    setDisabled(isDisabled) {
        this.o.disabled = isDisabled;
        const readOnly = this.__wasReadOnly;
        this.setReadOnly(isDisabled || readOnly);
        this.__wasReadOnly = readOnly;
        if (this.editor) {
            this.editor.setAttribute('aria-disabled', isDisabled.toString());
            this.container.classList.toggle('jodit_disabled', isDisabled);
            this.e.fire('disabled', isDisabled);
        }
    }
    getDisabled() {
        return this.o.disabled;
    }
    setReadOnly(isReadOnly) {
        if (this.__wasReadOnly === isReadOnly) {
            return;
        }
        this.__wasReadOnly = isReadOnly;
        this.o.readonly = isReadOnly;
        if (isReadOnly) {
            this.editor && this.editor.removeAttribute('contenteditable');
        }
        else {
            this.editor && this.editor.setAttribute('contenteditable', 'true');
        }
        this.e && this.e.fire('readonly', isReadOnly);
    }
    getReadOnly() {
        return this.o.readonly;
    }
    beforeInitHook() {
    }
    afterInitHook() {
    }
    initOptions(options) {
        this.options = ((0,helpers.ConfigProto)(options || {}, config/* Config.defaultOptions */.D.defaultOptions));
    }
    initOwners() {
        this.editorWindow = this.o.ownerWindow;
        this.ownerWindow = this.o.ownerWindow;
    }
    addPlace(source, options) {
        const element = (0,helpers.resolveElement)(source, this.o.shadowRoot || this.od);
        this.attachEvents(options);
        if (element.attributes) {
            (0,helpers.toArray)(element.attributes).forEach((attr) => {
                const name = attr.name;
                let value = attr.value;
                if (config/* Config.defaultOptions */.D.defaultOptions[name] !== undefined &&
                    (!options || options[name] === undefined)) {
                    if (['readonly', 'disabled'].indexOf(name) !== -1) {
                        value = value === '' || value === 'true';
                    }
                    if (/^[0-9]+(\.)?([0-9]+)?$/.test(value.toString())) {
                        value = Number(value);
                    }
                    this.options[name] = value;
                }
            });
        }
        let container = this.c.div('jodit-container');
        container.classList.add('jodit');
        container.classList.add('jodit-container');
        container.classList.add(`jodit_theme_${this.o.theme || 'default'}`);
        container.setAttribute('contenteditable', 'false');
        let buffer = null;
        if (this.o.inline) {
            if (['TEXTAREA', 'INPUT'].indexOf(element.nodeName) === -1) {
                container = element;
                element.setAttribute(this.__defaultClassesKey, element.className.toString());
                buffer = container.innerHTML;
                container.innerHTML = '';
            }
            container.classList.add('jodit_inline');
            container.classList.add('jodit-container');
        }
        if (element !== container) {
            if (element.style.display) {
                element.setAttribute(this.__defaultStyleDisplayKey, element.style.display);
            }
            element.style.display = 'none';
        }
        const workplace = this.c.div('jodit-workplace', {
            contenteditable: false
        });
        container.appendChild(workplace);
        const statusbar = new StatusBar(this, container);
        if (element.parentNode && element !== container) {
            element.parentNode.insertBefore(container, element);
        }
        Object.defineProperty(element, 'component', {
            enumerable: false,
            configurable: true,
            value: this
        });
        const editor = this.c.div('jodit-wysiwyg', {
            contenteditable: true,
            'aria-disabled': false,
            tabindex: this.o.tabIndex
        });
        workplace.appendChild(editor);
        const currentPlace = {
            editor,
            element,
            container,
            workplace,
            statusbar,
            options: this.isReady
                ? (0,helpers.ConfigProto)(options || {}, config/* Config.defaultOptions */.D.defaultOptions)
                : this.options,
            observer: new Observer(this),
            editorWindow: this.ow
        };
        this.elementToPlace.set(editor, currentPlace);
        this.setCurrentPlace(currentPlace);
        this.places.push(currentPlace);
        this.setNativeEditorValue(this.getElementValue());
        const initResult = this.initEditor(buffer);
        const opt = this.options;
        const init = () => {
            if (opt.enableDragAndDropFileToEditor &&
                opt.uploader &&
                (opt.uploader.url || opt.uploader.insertImageAsBase64URI)) {
                this.uploader.bind(this.editor);
            }
            if (!this.elementToPlace.get(this.editor)) {
                this.elementToPlace.set(this.editor, currentPlace);
            }
            this.e.fire('afterAddPlace', currentPlace);
        };
        return (0,helpers.callPromise)(initResult, init);
    }
    addDisclaimer(elm) {
        this.workplace.appendChild(elm);
    }
    setCurrentPlace(place) {
        if (this.currentPlace === place) {
            return;
        }
        if (!this.isEditorMode()) {
            this.setMode(constants.MODE_WYSIWYG);
        }
        this.currentPlace = place;
        this.buildToolbar();
        if (this.isReady) {
            this.e.fire('changePlace', place);
        }
    }
    initEditor(buffer) {
        const result = this.createEditor();
        return (0,helpers.callPromise)(result, () => {
            if (this.isInDestruct) {
                return;
            }
            if (this.element !== this.container) {
                this.setElementValue();
            }
            else {
                buffer != null && this.setEditorValue(buffer);
            }
            let mode = this.o.defaultMode;
            if (this.o.saveModeInStorage) {
                const localMode = this.storage.get('jodit_default_mode');
                if (typeof localMode === 'string') {
                    mode = parseInt(localMode, 10);
                }
            }
            this.setMode(mode);
            if (this.o.readonly) {
                this.__wasReadOnly = false;
                this.setReadOnly(true);
            }
            if (this.o.disabled) {
                this.setDisabled(true);
            }
            try {
                this.ed.execCommand('defaultParagraphSeparator', false, this.o.enter.toLowerCase());
            }
            catch (_a) { }
            try {
                this.ed.execCommand('enableObjectResizing', false, 'false');
            }
            catch (_b) { }
            try {
                this.ed.execCommand('enableInlineTableEditing', false, 'false');
            }
            catch (_c) { }
        });
    }
    createEditor() {
        const defaultEditorArea = this.editor;
        const stayDefault = this.e.fire('createEditor', this);
        return (0,helpers.callPromise)(stayDefault, () => {
            if (this.isInDestruct) {
                return;
            }
            if (stayDefault === false || (0,helpers.isPromise)(stayDefault)) {
                dom/* Dom.safeRemove */.i.safeRemove(defaultEditorArea);
            }
            if (this.o.editorCssClass) {
                this.editor.classList.add(this.o.editorCssClass);
            }
            if (this.o.style) {
                (0,helpers.css)(this.editor, this.o.style);
            }
            this.e
                .on('synchro', () => {
                this.setEditorValue();
            })
                .on('focus', () => {
                this.editorIsActive = true;
            })
                .on('blur', () => (this.editorIsActive = false));
            this.prepareWYSIWYGEditor();
            if (this.o.direction) {
                const direction = this.o.direction.toLowerCase() === 'rtl' ? 'rtl' : 'ltr';
                this.container.style.direction = direction;
                this.container.setAttribute('dir', direction);
                this.toolbar.setDirection(direction);
            }
            if (this.o.triggerChangeEvent) {
                this.e.on('change', this.async.debounce(() => {
                    this.e && this.e.fire(this.element, 'change');
                }, this.defaultTimeout));
            }
        });
    }
    prepareWYSIWYGEditor() {
        const { editor } = this;
        if (this.o.spellcheck) {
            this.editor.setAttribute('spellcheck', 'true');
        }
        else {
            this.editor.setAttribute('spellcheck', 'false');
        }
        if (this.o.direction) {
            const direction = this.o.direction.toLowerCase() === 'rtl' ? 'rtl' : 'ltr';
            this.editor.style.direction = direction;
            this.editor.setAttribute('dir', direction);
        }
        this.e
            .on(editor, 'mousedown touchstart focus', () => {
            const place = this.elementToPlace.get(editor);
            if (place) {
                this.setCurrentPlace(place);
            }
        })
            .on(editor, 'compositionend', () => {
            this.setEditorValue();
        })
            .on(editor, 'selectionchange selectionstart keydown keyup input keypress dblclick mousedown mouseup ' +
            'click copy cut dragstart drop dragover paste resize touchstart touchend focus blur', (event) => {
            if (this.o.readonly || this.isSilentChange) {
                return;
            }
            const w = this.ew;
            if (event instanceof w.KeyboardEvent &&
                event.isComposing) {
                return;
            }
            if (this.e && this.e.fire) {
                if (this.e.fire(event.type, event) === false) {
                    return false;
                }
                this.setEditorValue();
            }
        });
    }
    destruct() {
        if (this.isInDestruct) {
            return;
        }
        this.setStatus(component/* STATUSES.beforeDestruct */.n$.beforeDestruct);
        this.elementToPlace.clear();
        if (!this.editor) {
            return;
        }
        const buffer = this.getEditorValue();
        this.storage.clear();
        this.buffer.clear();
        this.commands = {};
        this.__selectionLocked = null;
        this.e.off(this.ow, 'resize');
        this.e.off(this.ow);
        this.e.off(this.od);
        this.e.off(this.od.body);
        this.places.forEach(({ container, workplace, statusbar, element, iframe, editor, observer }) => {
            if (element !== container) {
                if (element.hasAttribute(this.__defaultStyleDisplayKey)) {
                    const display = (0,helpers.attr)(element, this.__defaultStyleDisplayKey);
                    if (display) {
                        element.style.display = display;
                        element.removeAttribute(this.__defaultStyleDisplayKey);
                    }
                }
                else {
                    element.style.display = '';
                }
            }
            else {
                if (element.hasAttribute(this.__defaultClassesKey)) {
                    element.className =
                        (0,helpers.attr)(element, this.__defaultClassesKey) || '';
                    element.removeAttribute(this.__defaultClassesKey);
                }
            }
            if (element.hasAttribute('style') && !(0,helpers.attr)(element, 'style')) {
                element.removeAttribute('style');
            }
            !statusbar.isInDestruct && statusbar.destruct();
            this.e.off(container);
            this.e.off(element);
            this.e.off(editor);
            dom/* Dom.safeRemove */.i.safeRemove(workplace);
            dom/* Dom.safeRemove */.i.safeRemove(editor);
            if (container !== element) {
                dom/* Dom.safeRemove */.i.safeRemove(container);
            }
            Object.defineProperty(element, 'component', {
                enumerable: false,
                configurable: true,
                value: null
            });
            dom/* Dom.safeRemove */.i.safeRemove(iframe);
            if (container === element) {
                element.innerHTML = buffer;
            }
            !observer.isInDestruct && observer.destruct();
        });
        this.places.length = 0;
        this.currentPlace = {};
        delete global/* instances */.as[this.id];
        super.destruct();
    }
}
Jodit.fatMode = false;
Jodit.plugins = global/* pluginSystem */.pw;
Jodit.modules = global/* modules */.qz;
Jodit.ns = global/* modules */.qz;
Jodit.decorators = {};
Jodit.instances = global/* instances */.as;
Jodit.lang = global/* lang */.KQ;
Jodit.core = {
    Plugin: Plugin
};
(0,tslib_es6.__decorate)([
    decorators.cache
], Jodit.prototype, "uploader", null);
(0,tslib_es6.__decorate)([
    decorators.cache
], Jodit.prototype, "filebrowser", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], Jodit.prototype, "prepareWYSIWYGEditor", null);

;// CONCATENATED MODULE: ./src/langs/index.ts

const en = __webpack_require__(41);
let exp = {
    en
};
if (false) {}
const get = (value) => value.default || value, hashLang = {};
if ((0,checker/* isArray */.kJ)(get(en))) {
    get(en).forEach((key, index) => {
        hashLang[index] = key;
    });
}
Object.keys(exp).forEach((lang) => {
    const list = get(exp[lang]);
    if ((0,checker/* isArray */.kJ)(list)) {
        exp[lang] = {};
        list.forEach((value, index) => {
            exp[lang][hashLang[index]] = value;
        });
    }
});
/* harmony default export */ const langs = (exp);

;// CONCATENATED MODULE: ./src/plugins/add-new-line/add-new-line.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.addNewLine */.D.prototype.addNewLine = true;
config/* Config.prototype.addNewLineOnDBLClick */.D.prototype.addNewLineOnDBLClick = true;
config/* Config.prototype.addNewLineTagsTriggers */.D.prototype.addNewLineTagsTriggers = [
    'table',
    'iframe',
    'img',
    'hr',
    'jodit'
];
config/* Config.prototype.addNewLineDeltaShow */.D.prototype.addNewLineDeltaShow = 20;
const ns = 'addnewline';
class addNewLine extends Plugin {
    constructor() {
        super(...arguments);
        this.line = this.j.c.fromHTML(`<div role="button" tabIndex="-1" title="${this.j.i18n('Break')}" class="jodit-add-new-line"><span>${ui/* Icon.get */.JO.get('enter')}</span></div>`);
        this.isMatchedTag = (node) => Boolean(node &&
            this.j.o.addNewLineTagsTriggers.includes(node.nodeName.toLowerCase()));
        this.preview = false;
        this.lineInFocus = false;
        this.isShown = false;
        this.hideForce = () => {
            if (!this.isShown) {
                return;
            }
            this.isShown = false;
            this.j.async.clearTimeout(this.timeout);
            this.lineInFocus = false;
            dom/* Dom.safeRemove */.i.safeRemove(this.line);
        };
        this.hide = () => {
            if (!this.isShown || this.lineInFocus) {
                return;
            }
            this.timeout = this.j.async.setTimeout(this.hideForce, {
                timeout: 500,
                label: 'add-new-line-hide'
            });
        };
        this.canGetFocus = (elm) => {
            return (elm != null &&
                dom/* Dom.isBlock */.i.isBlock(elm, this.j.ew) &&
                !/^(img|table|iframe|hr)$/i.test(elm.nodeName));
        };
        this.onClickLine = (e) => {
            const editor = this.j;
            const p = editor.createInside.element(editor.o.enter);
            if (this.preview && this.current && this.current.parentNode) {
                this.current.parentNode.insertBefore(p, this.current);
            }
            else {
                editor.editor.appendChild(p);
            }
            editor.s.setCursorIn(p);
            (0,helpers.scrollIntoViewIfNeeded)(p, editor.editor, editor.ed);
            editor.e.fire('synchro');
            this.hideForce();
            e.preventDefault();
        };
        this.onDblClickEditor = (e) => {
            const editor = this.j;
            if (!editor.o.readonly &&
                editor.o.addNewLineOnDBLClick &&
                e.target === editor.editor &&
                editor.s.isCollapsed()) {
                const editorBound = (0,helpers.offset)(editor.editor, editor, editor.ed);
                const top = e.pageY - editor.ew.pageYOffset;
                const p = editor.createInside.element(editor.o.enter);
                if (Math.abs(top - editorBound.top) <
                    Math.abs(top - (editorBound.height + editorBound.top)) &&
                    editor.editor.firstChild) {
                    editor.editor.insertBefore(p, editor.editor.firstChild);
                }
                else {
                    editor.editor.appendChild(p);
                }
                editor.s.setCursorIn(p);
                editor.setEditorValue();
                this.hideForce();
                e.preventDefault();
            }
        };
        this.onMouseMove = (e) => {
            const editor = this.j;
            let currentElement = editor.ed.elementFromPoint(e.clientX, e.clientY);
            if (!dom/* Dom.isHTMLElement */.i.isHTMLElement(currentElement, editor.ew) ||
                dom/* Dom.isOrContains */.i.isOrContains(this.line, currentElement)) {
                return;
            }
            if (!dom/* Dom.isOrContains */.i.isOrContains(editor.editor, currentElement)) {
                return;
            }
            if (!this.isMatchedTag(currentElement)) {
                currentElement = dom/* Dom.closest */.i.closest(currentElement, this.isMatchedTag, editor.editor);
            }
            if (!currentElement) {
                this.hide();
                return;
            }
            if (this.isMatchedTag(currentElement)) {
                const parentBox = dom/* Dom.up */.i.up(currentElement, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
                if (parentBox && parentBox !== editor.editor) {
                    currentElement = parentBox;
                }
            }
            const pos = (0,helpers.position)(currentElement, this.j);
            let top = false;
            let { clientY } = e;
            if (this.j.iframe) {
                const { top } = (0,helpers.position)(this.j.iframe, this.j, true);
                clientY += top;
            }
            const delta = this.j.o.addNewLineDeltaShow;
            if (Math.abs(clientY - pos.top) <= delta) {
                top = pos.top;
                this.preview = true;
            }
            if (Math.abs(clientY - (pos.top + pos.height)) <= delta) {
                top = pos.top + pos.height;
                this.preview = false;
            }
            if (top !== false &&
                !(0,helpers.call)(this.preview ? dom/* Dom.prev */.i.prev : dom/* Dom.next */.i.next, currentElement, this.canGetFocus, editor.editor)) {
                this.line.style.top = top + 'px';
                this.current = currentElement;
                this.show();
            }
            else {
                this.current = false;
                this.hide();
            }
        };
    }
    show() {
        if (this.isShown || this.j.o.readonly || this.j.isLocked) {
            return;
        }
        this.isShown = true;
        this.j.async.clearTimeout(this.timeout);
        this.line.classList.toggle('jodit-add-new-line_after', !this.preview);
        this.j.container.appendChild(this.line);
        this.line.style.width = this.j.editor.clientWidth + 'px';
    }
    afterInit(editor) {
        if (!editor.o.addNewLine) {
            return;
        }
        editor.e
            .on(this.line, 'mousemove', (e) => {
            e.stopPropagation();
        })
            .on(this.line, 'mousedown touchstart', this.onClickLine)
            .on('change', this.hideForce)
            .on(this.line, 'mouseenter', () => {
            this.j.async.clearTimeout(this.timeout);
            this.lineInFocus = true;
        })
            .on(this.line, 'mouseleave', () => {
            this.lineInFocus = false;
        })
            .on('changePlace', this.addEventListeners.bind(this));
        this.addEventListeners();
    }
    addEventListeners() {
        const editor = this.j;
        editor.e
            .off(editor.editor, '.' + ns)
            .off(editor.container, '.' + ns)
            .on([editor.ow, editor.ew, editor.editor], 'scroll' + '.' + ns, this.hideForce)
            .on(editor.editor, 'dblclick' + '.' + ns, this.onDblClickEditor)
            .on(editor.editor, 'click' + '.' + ns, this.hide)
            .on(editor.container, 'mouseleave' + '.' + ns, this.hide)
            .on(editor.editor, 'mousemove' + '.' + ns, editor.async.debounce(this.onMouseMove, editor.defaultTimeout * 3));
    }
    beforeDestruct() {
        this.j.async.clearTimeout(this.timeout);
        this.j.e.off(this.line);
        this.j.e.off('changePlace', this.addEventListeners);
        dom/* Dom.safeRemove */.i.safeRemove(this.line);
        this.j.e
            .off([this.j.ow, this.j.ew, this.j.editor], '.' + ns)
            .off(this.j.container, '.' + ns);
    }
}

;// CONCATENATED MODULE: ./src/plugins/about/about.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config/* Config.prototype.controls.about */.D.prototype.controls.about = {
    exec: (editor) => {
        const dialog = new Dialog({
            language: editor.o.language
        }), i18n = editor.i18n.bind(editor);
        dialog.setMod('theme', editor.o.theme);
        dialog.setHeader(i18n('About Jodit'));
        dialog.setContent(`<div class="jodit-about">
					<div>${i18n('Jodit Editor')} v.${editor.getVersion()}</div>
					<div>${i18n('License: %s', !(0,helpers.isLicense)(editor.o.license)
            ? 'MIT'
            : (0,helpers.normalizeLicense)(editor.o.license))}</div>
					<div>
						<a href="${"https://xdsoft.net/jodit/"}" target="_blank">${"https://xdsoft.net/jodit/"}</a>
					</div>
					<div>
						<a href="https://xdsoft.net/jodit/doc/" target="_blank">${i18n("Jodit User's Guide")}</a>
						${i18n('contains detailed help for using')}
					</div>
					<div>${i18n('Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.')}</div>
				</div>`);
        (0,helpers.css)(dialog.dialog, {
            minHeight: 200,
            minWidth: 420
        });
        dialog.open(true);
        dialog.bindDestruct(editor);
    },
    tooltip: 'About Jodit',
    mode: constants.MODE_SOURCE + constants.MODE_WYSIWYG
};
function about(editor) {
    editor.registerButton({
        name: 'about',
        group: 'info'
    });
}

;// CONCATENATED MODULE: ./src/plugins/focus.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config/* Config.prototype.autofocus */.D.prototype.autofocus = false;
config/* Config.prototype.cursorAfterAutofocus */.D.prototype.cursorAfterAutofocus = 'end';
config/* Config.prototype.saveSelectionOnBlur */.D.prototype.saveSelectionOnBlur = true;
function focus_focus(editor) {
    if (editor.o.saveSelectionOnBlur) {
        editor.e
            .on('blur', () => {
            if (editor.isEditorMode()) {
                editor.s.save(true);
            }
        })
            .on('focus', () => {
            editor.s.restore();
        });
    }
    const focus = () => {
        editor.s.focus();
        if (editor.o.cursorAfterAutofocus === 'end') {
            const lastTextNode = dom/* Dom.last */.i.last(editor.editor, node => dom/* Dom.isText */.i.isText(node));
            if (lastTextNode) {
                editor.s.setCursorIn(lastTextNode, false);
            }
        }
    };
    editor.e.on('afterInit', () => {
        if (editor.o.autofocus) {
            if (editor.defaultTimeout) {
                editor.async.setTimeout(focus, 300);
            }
            else {
                focus();
            }
        }
    });
    editor.e.on('afterInit afterAddPlace', () => {
        editor.e
            .off(editor.editor, 'mousedown.autofocus')
            .on(editor.editor, 'mousedown.autofocus', (e) => {
            if (editor.isEditorMode() &&
                e.target &&
                dom/* Dom.isBlock */.i.isBlock(e.target, editor.ew) &&
                !e.target.childNodes.length) {
                if (editor.editor === e.target) {
                    editor.s.focus();
                }
                else {
                    editor.s.setCursorIn(e.target);
                }
            }
        });
    });
}

;// CONCATENATED MODULE: ./src/plugins/class-span/class-span.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.controls.classSpan */.D.prototype.controls.classSpan = {
    command: 'applyClassName',
    icon: __webpack_require__(42),
    exec: helpers.memorizeExec,
    list: [
        'enabled',
        'disabled',
        'activated',
        'text-left',
        'text-center',
        'text-right',
        'warning',
        'error'
    ],
    isChildActive: (editor, control) => {
        const current = editor.s.current();
        if (current) {
            const currentBpx = dom/* Dom.closest */.i.closest(current, elm => {
                return (dom/* Dom.isBlock */.i.isBlock(elm, editor.ew) ||
                    (elm && dom/* Dom.isElement */.i.isElement(elm)));
            }, editor.editor) || editor.editor;
            return Boolean(control.args &&
                currentBpx.classList.contains(control.args[0].toString()));
        }
        return false;
    },
    isActive: (editor, control) => {
        const current = editor.s.current();
        if (current) {
            const currentBpx = dom/* Dom.closest */.i.closest(current, elm => {
                return (dom/* Dom.isBlock */.i.isBlock(elm, editor.ew) ||
                    (elm && dom/* Dom.isElement */.i.isElement(elm)));
            }, editor.editor) || editor.editor;
            let present = false;
            control.list &&
                Object.keys(control.list).forEach((className) => {
                    if (currentBpx.classList.contains(className)) {
                        present = true;
                    }
                });
            return Boolean(currentBpx &&
                currentBpx !== editor.editor &&
                control.list !== undefined &&
                present);
        }
        return false;
    },
    childTemplate: (e, key, value) => `<span class="${key}">${e.i18n(value)}</span>`,
    tooltip: 'Insert className'
};
class classSpan extends Plugin {
    constructor() {
        super(...arguments);
        this.buttons = [
            {
                name: 'classSpan',
                group: 'font'
            }
        ];
    }
    afterInit(jodit) {
        jodit.registerCommand('applyClassName', (command, second, third) => {
            jodit.s.applyStyle(undefined, {
                className: third
            });
            return false;
        });
    }
    beforeDestruct(jodit) { }
}

// EXTERNAL MODULE: ./src/core/helpers/utils/index.ts + 6 modules
var utils = __webpack_require__(9);
// EXTERNAL MODULE: ./src/core/helpers/string/index.ts + 5 modules
var string = __webpack_require__(22);
;// CONCATENATED MODULE: ./src/plugins/keyboard/helpers.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




function getSibling(node, backspace) {
    return backspace ? node.previousSibling : node.nextSibling;
}
function findNotEmptyNeighbor(node, backspace, root) {
    return (0,utils/* call */.RE)(backspace ? dom/* Dom.prev */.i.prev : dom/* Dom.next */.i.next, node, n => Boolean(n && (!dom/* Dom.isText */.i.isText(n) || (0,string/* trim */.fy)((n === null || n === void 0 ? void 0 : n.nodeValue) || '').length)), root);
}
function findNotEmptySibling(node, backspace) {
    return dom/* Dom.findSibling */.i.findSibling(node, backspace, n => {
        var _a;
        return (!dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(n) &&
            Boolean(!dom/* Dom.isText */.i.isText(n) || (((_a = n.nodeValue) === null || _a === void 0 ? void 0 : _a.length) && (0,string/* trim */.fy)(n.nodeValue))));
    });
}
function findMostNestedNeighbor(node, right, root, onlyInlide = false) {
    const nextChild = (node) => right ? node.firstChild : node.lastChild;
    let next = findNotEmptyNeighbor(node, !right, root);
    if (onlyInlide && dom/* Dom.isElement */.i.isElement(next) && !dom/* Dom.isInlineBlock */.i.isInlineBlock(next)) {
        return null;
    }
    if (next) {
        do {
            if (nextChild(next)) {
                next = nextChild(next);
            }
            else {
                return next;
            }
        } while (next);
    }
    return null;
}
function normalizeCursorPosition(node, backspace) {
    let sibling = dom/* Dom.findSibling */.i.findSibling(node, backspace), anotherSibling = dom/* Dom.findSibling */.i.findSibling(node, !backspace);
    while (dom/* Dom.isElement */.i.isElement(sibling) &&
        !dom/* Dom.isTag */.i.isTag(sibling, constants.INSEPARABLE_TAGS) &&
        !anotherSibling) {
        if (backspace || !sibling.firstChild) {
            sibling.appendChild(node);
        }
        else {
            dom/* Dom.before */.i.before(sibling.firstChild, node);
        }
        sibling = getSibling(node, backspace);
        anotherSibling = getSibling(node, !backspace);
    }
}
function getSiblingBox(node, backspace, root) {
    while (node) {
        const isBox = (elm) => dom/* Dom.isElement */.i.isElement(elm) && !dom/* Dom.isTag */.i.isTag(elm, constants.INSEPARABLE_TAGS);
        const getBox = (node) => {
            const child = backspace ? node.lastChild : node.firstChild;
            if (isBox(child)) {
                return getBox(child);
            }
            return isBox(node) ? node : null;
        };
        const sibling = findNotEmptySibling(node, backspace);
        if (sibling) {
            return isBox(sibling) ? getBox(sibling) : null;
        }
        if (node.parentElement && node.parentElement !== root) {
            node = node.parentElement;
        }
    }
    return null;
}

;// CONCATENATED MODULE: ./src/plugins/keyboard/delete.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






config/* Config.prototype.delete */.D.prototype.delete = {
    hotkeys: {
        delete: ['delete', 'cmd+backspace'],
        deleteWord: ['ctrl+delete', 'cmd+alt+backspace', 'ctrl+alt+backspace'],
        backspace: ['backspace'],
        backspaceWord: ['ctrl+backspace']
    }
};
class Delete extends Plugin {
    constructor() {
        super(...arguments);
        this.requires = ['hotkeys'];
    }
    get root() {
        return this.j.editor;
    }
    afterInit(jodit) {
        jodit.e.on('afterCommand.delete', (command) => {
            if (command === 'delete') {
                this.afterDeleteCommand();
            }
        });
        jodit
            .registerCommand('deleteButton', {
            exec: () => this.onDelete(false),
            hotkeys: jodit.o.delete.hotkeys.delete
        }, {
            stopPropagation: false
        })
            .registerCommand('backspaceButton', {
            exec: () => this.onDelete(true),
            hotkeys: jodit.o.delete.hotkeys.backspace
        }, {
            stopPropagation: false
        })
            .registerCommand('deleteWordButton', {
            exec: () => this.onDelete(false, true),
            hotkeys: jodit.o.delete.hotkeys.deleteWord
        })
            .registerCommand('backspaceWordButton', {
            exec: () => this.onDelete(true, true),
            hotkeys: jodit.o.delete.hotkeys.backspaceWord
        });
    }
    beforeDestruct(jodit) {
        jodit.e.off('afterCommand.delete');
    }
    afterDeleteCommand() {
        const jodit = this.j;
        const current = jodit.s.current();
        if (current && dom/* Dom.isTag */.i.isTag(current.firstChild, 'br')) {
            jodit.s.removeNode(current.firstChild);
        }
        if (!(0,helpers.trim)(jodit.editor.textContent || '') &&
            !jodit.editor.querySelector('img') &&
            (!current || !dom/* Dom.closest */.i.closest(current, 'table', jodit.editor))) {
            jodit.editor.innerHTML = '';
            const node = jodit.s.setCursorIn(jodit.editor);
            jodit.s.removeNode(node);
        }
    }
    onDelete(backspace, block = false) {
        var _a;
        const sel = this.j.selection;
        if (!sel.isFocused()) {
            sel.focus();
        }
        if (!((_a = sel.sel) === null || _a === void 0 ? void 0 : _a.rangeCount) || this.checkNotCollapsed()) {
            return false;
        }
        const jodit = this.j;
        const range = sel.range;
        const fakeNode = jodit.createInside.text(constants.INVISIBLE_SPACE);
        try {
            range.insertNode(fakeNode);
            if (!dom/* Dom.isOrContains */.i.isOrContains(jodit.editor, fakeNode)) {
                return;
            }
            normalizeCursorPosition(fakeNode, backspace);
            if (this.checkRemoveInseparableElement(fakeNode, backspace) ||
                this.checkRemoveChar(fakeNode, backspace, block) ||
                this.checkTableCell(fakeNode, backspace) ||
                this.checkRemoveEmptyParent(fakeNode, backspace) ||
                this.checkRemoveEmptyNeighbor(fakeNode, backspace) ||
                this.checkJoinTwoLists(fakeNode, backspace) ||
                this.checkJoinNeighbors(fakeNode, backspace) ||
                this.checkRewrapListItem(fakeNode, backspace)) {
                return false;
            }
        }
        catch (e) {
            if (false) {}
            throw e;
        }
        finally {
            this.safeRemoveEmptyNode(fakeNode);
        }
        return false;
    }
    checkNotCollapsed() {
        const jodit = this.j;
        if (!jodit.s.isCollapsed()) {
            jodit.execCommand('Delete');
            return true;
        }
    }
    checkRemoveChar(fakeNode, backspace, block) {
        var _a, _b, _c;
        const step = backspace ? -1 : 1;
        const anotherSibling = getSibling(fakeNode, !backspace);
        let sibling = getSibling(fakeNode, backspace), removeNeighbor = null;
        let charRemoved = false, removed;
        while (sibling && (dom/* Dom.isText */.i.isText(sibling) || dom/* Dom.isInlineBlock */.i.isInlineBlock(sibling))) {
            while (dom/* Dom.isInlineBlock */.i.isInlineBlock(sibling)) {
                sibling = (backspace ? sibling === null || sibling === void 0 ? void 0 : sibling.lastChild : sibling === null || sibling === void 0 ? void 0 : sibling.firstChild);
            }
            if (!sibling) {
                break;
            }
            if ((_a = sibling.nodeValue) === null || _a === void 0 ? void 0 : _a.length) {
                let value = (0,helpers.toArray)(sibling.nodeValue);
                const length = value.length;
                let index = backspace ? length - 1 : 0;
                if (value[index] === constants.INVISIBLE_SPACE) {
                    while (value[index] === constants.INVISIBLE_SPACE) {
                        index += step;
                    }
                }
                removed = value[index];
                if (value[index + step] === constants.INVISIBLE_SPACE) {
                    index += step;
                    while (value[index] === constants.INVISIBLE_SPACE) {
                        index += step;
                    }
                    index += backspace ? 1 : -1;
                }
                if (backspace && index < 0) {
                    value = [];
                }
                else {
                    value = value.slice(backspace ? 0 : index + 1, backspace ? index : length);
                }
                if (!anotherSibling ||
                    !dom/* Dom.isText */.i.isText(anotherSibling) ||
                    (!backspace ? / $/ : /^ /).test((_b = anotherSibling.nodeValue) !== null && _b !== void 0 ? _b : '') ||
                    !(0,helpers.trimInv)(anotherSibling.nodeValue || '').length) {
                    for (let i = backspace ? value.length - 1 : 0; backspace ? i >= 0 : i < value.length; i += backspace ? -1 : 1) {
                        if (value[i] === ' ') {
                            value[i] = constants.NBSP_SPACE;
                        }
                        else {
                            break;
                        }
                    }
                }
                sibling.nodeValue = value.join('');
            }
            if (!((_c = sibling.nodeValue) === null || _c === void 0 ? void 0 : _c.length)) {
                removeNeighbor = sibling;
            }
            if (!(0,helpers.isVoid)(removed) && removed !== constants.INVISIBLE_SPACE) {
                charRemoved = true;
                (0,helpers.call)(backspace ? dom/* Dom.after */.i.after : dom/* Dom.before */.i.before, sibling, fakeNode);
                if (block) {
                    while (this.checkRemoveChar(fakeNode, backspace, false)) { }
                }
                break;
            }
            let nextSibling = getSibling(sibling, backspace);
            if (!nextSibling &&
                sibling.parentNode &&
                sibling.parentNode !== this.root) {
                nextSibling = findMostNestedNeighbor(sibling, !backspace, this.root, true);
            }
            if (removeNeighbor) {
                dom/* Dom.safeRemove */.i.safeRemove(removeNeighbor);
                removeNeighbor = null;
            }
            sibling = nextSibling;
        }
        if (charRemoved) {
            this.removeEmptyInlineParent(fakeNode);
            this.addBRInsideEmptyBlock(fakeNode);
            this.j.s.setCursorBefore(fakeNode);
        }
        return charRemoved || undefined;
    }
    removeEmptyInlineParent(node) {
        let parent = node.parentElement;
        while (parent && dom/* Dom.isInlineBlock */.i.isInlineBlock(parent)) {
            const p = parent.parentElement;
            if (dom/* Dom.isEmpty */.i.isEmpty(parent)) {
                dom/* Dom.after */.i.after(parent, node);
                dom/* Dom.safeRemove */.i.safeRemove(parent);
            }
            parent = p;
        }
    }
    addBRInsideEmptyBlock(node) {
        if (node.parentElement !== this.root &&
            dom/* Dom.isBlock */.i.isBlock(node.parentElement, this.j.ew) &&
            dom/* Dom.each */.i.each(node.parentElement, dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode)) {
            dom/* Dom.after */.i.after(node, this.j.createInside.element('br'));
        }
    }
    checkRemoveInseparableElement(fakeNode, backspace) {
        const neighbor = dom/* Dom.findSibling */.i.findSibling(fakeNode, backspace);
        if (dom/* Dom.isElement */.i.isElement(neighbor) &&
            (dom/* Dom.isTag */.i.isTag(neighbor, constants.INSEPARABLE_TAGS) ||
                dom/* Dom.isEmpty */.i.isEmpty(neighbor) ||
                (0,helpers.attr)(neighbor, 'contenteditable') === 'false')) {
            dom/* Dom.safeRemove */.i.safeRemove(neighbor);
            this.j.s.setCursorBefore(fakeNode);
            if (dom/* Dom.isTag */.i.isTag(neighbor, 'br')) {
                this.checkRemoveEmptyParent(fakeNode, backspace);
            }
            return true;
        }
    }
    checkTableCell(fakeNode, backspace) {
        const cell = fakeNode.parentElement;
        if (dom/* Dom.isCell */.i.isCell(cell, this.j.ew)) {
            return true;
        }
    }
    checkRemoveEmptyParent(fakeNode, backspace) {
        let found = false;
        const { setCursorBefore, setCursorIn } = this.j.s;
        let prn = dom/* Dom.closest */.i.closest(fakeNode, dom/* Dom.isElement */.i.isElement, this.root);
        if (!prn || !dom/* Dom.isEmpty */.i.isEmpty(prn)) {
            return;
        }
        const neighbor = findNotEmptyNeighbor(fakeNode, backspace, this.root);
        do {
            if (prn && dom/* Dom.isEmpty */.i.isEmpty(prn) && !dom/* Dom.isCell */.i.isCell(prn, this.j.ew)) {
                dom/* Dom.after */.i.after(prn, fakeNode);
                const tmp = dom/* Dom.closest */.i.closest(prn, n => dom/* Dom.isElement */.i.isElement(n) && n !== prn, this.root);
                dom/* Dom.safeRemove */.i.safeRemove(prn);
                found = true;
                prn = tmp;
            }
            else {
                break;
            }
        } while (prn);
        if (found && this.checkJoinTwoLists(fakeNode, backspace)) {
            return true;
        }
        if (neighbor &&
            !dom/* Dom.isText */.i.isText(neighbor) &&
            !dom/* Dom.isTag */.i.isTag(neighbor, constants.INSEPARABLE_TAGS)) {
            setCursorIn(neighbor, !backspace);
        }
        else {
            setCursorBefore(fakeNode);
        }
        return found || undefined;
    }
    checkJoinTwoLists(fakeNode, backspace) {
        const next = dom/* Dom.findSibling */.i.findSibling(fakeNode, backspace), prev = dom/* Dom.findSibling */.i.findSibling(fakeNode, !backspace);
        if (!dom/* Dom.closest */.i.closest(fakeNode, dom/* Dom.isElement */.i.isElement, this.root) &&
            dom/* Dom.isTag */.i.isTag(next, ['ul', 'ol']) &&
            dom/* Dom.isTag */.i.isTag(prev, ['ul', 'ol']) &&
            dom/* Dom.isTag */.i.isTag(next.lastElementChild, 'li') &&
            dom/* Dom.isTag */.i.isTag(prev.firstElementChild, 'li')) {
            const { setCursorBefore, setCursorAfter } = this.j.s;
            const target = next.lastElementChild, second = prev.firstElementChild;
            (0,helpers.call)(!backspace ? dom/* Dom.append */.i.append : dom/* Dom.prepend */.i.prepend, second, fakeNode);
            dom/* Dom.moveContent */.i.moveContent(prev, next, !backspace);
            dom/* Dom.safeRemove */.i.safeRemove(prev);
            (0,helpers.call)(backspace ? dom/* Dom.append */.i.append : dom/* Dom.prepend */.i.prepend, target, fakeNode);
            (0,helpers.call)(backspace ? setCursorBefore : setCursorAfter, fakeNode);
            return true;
        }
    }
    checkRemoveEmptyNeighbor(fakeNode, backspace) {
        const parent = dom/* Dom.closest */.i.closest(fakeNode, dom/* Dom.isElement */.i.isElement, this.root);
        if (!parent) {
            return;
        }
        const neighbor = findNotEmptySibling(parent, backspace);
        if (neighbor && dom/* Dom.isEmpty */.i.isEmpty(neighbor)) {
            dom/* Dom.safeRemove */.i.safeRemove(neighbor);
            this.j.s.setCursorBefore(fakeNode);
            return true;
        }
    }
    checkJoinNeighbors(fakeNode, backspace) {
        const { jodit } = this;
        let nextBox = fakeNode, mainClosestBox = nextBox;
        while (nextBox &&
            !findNotEmptySibling(nextBox, backspace) &&
            nextBox.parentElement !== this.root) {
            nextBox = nextBox.parentElement;
            mainClosestBox = nextBox;
        }
        if (dom/* Dom.isElement */.i.isElement(mainClosestBox)) {
            const sibling = findNotEmptySibling(mainClosestBox, backspace);
            if (sibling &&
                (this.checkMoveListContent(mainClosestBox, sibling, backspace) ||
                    this.moveContentAndRemoveEmpty(mainClosestBox, sibling, backspace))) {
                jodit.s.setCursorBefore(fakeNode);
                return true;
            }
        }
    }
    checkMoveListContent(mainClosestBox, sibling, backspace) {
        const { jodit } = this;
        const siblingIsList = dom/* Dom.isTag */.i.isTag(sibling, ['ol', 'ul']);
        const boxIsList = dom/* Dom.isTag */.i.isTag(mainClosestBox, ['ol', 'ul']);
        const elementChild = (elm, side) => side ? elm.firstElementChild : elm.lastElementChild;
        if (boxIsList) {
            sibling = jodit.createInside.element(jodit.o.enterBlock);
            dom/* Dom.before */.i.before(mainClosestBox, sibling);
            return this.moveContentAndRemoveEmpty(elementChild(mainClosestBox, backspace), sibling, backspace);
        }
        if (sibling && siblingIsList && !boxIsList) {
            return this.moveContentAndRemoveEmpty(mainClosestBox, elementChild(sibling, !backspace), backspace);
        }
        return false;
    }
    moveContentAndRemoveEmpty(mainClosestBox, sibling, backspace) {
        if (mainClosestBox && dom/* Dom.isElement */.i.isElement(sibling)) {
            dom/* Dom.moveContent */.i.moveContent(mainClosestBox, sibling, !backspace);
            let remove = mainClosestBox;
            while (remove && remove !== this.root && dom/* Dom.isEmpty */.i.isEmpty(remove)) {
                const parent = remove.parentElement;
                dom/* Dom.safeRemove */.i.safeRemove(remove);
                remove = parent;
            }
            return true;
        }
        return false;
    }
    checkJoinNeighbors2(fakeNode, backspace) {
        const parent = dom/* Dom.closest */.i.closest(fakeNode, dom/* Dom.isElement */.i.isElement, this.root);
        if (!parent) {
            return;
        }
        let neighbor = getSiblingBox(parent, backspace, this.root);
        if (!neighbor) {
            return;
        }
        const startNeighbor = neighbor;
        this.j.s.setCursorBefore(fakeNode);
        if (!this.j.s.cursorInTheEdge(backspace, parent)) {
            return;
        }
        if (dom/* Dom.isTag */.i.isTag(neighbor, ['ul', 'ol']) &&
            !dom/* Dom.isTag */.i.isTag(parent, ['ul', 'ol'])) {
            neighbor = backspace
                ? neighbor.lastElementChild
                : neighbor.firstElementChild;
        }
        if (parent &&
            neighbor &&
            startNeighbor &&
            dom/* Dom.isElement */.i.isElement(neighbor) &&
            this.j.s.cursorInTheEdge(backspace, parent)) {
            dom/* Dom.moveContent */.i.moveContent(parent, neighbor, !backspace);
            let next;
            do {
                next = findMostNestedNeighbor(startNeighbor, backspace, this.root);
                if (next === parent) {
                    let nextParentNode = next;
                    do {
                        const nextParent = nextParentNode.parentElement;
                        dom/* Dom.safeRemove */.i.safeRemove(nextParentNode);
                        nextParentNode = nextParent;
                    } while (nextParentNode && dom/* Dom.isEmpty */.i.isEmpty(nextParentNode));
                }
                dom/* Dom.safeRemove */.i.safeRemove(next);
            } while (next !== parent);
            this.j.s.setCursorBefore(fakeNode);
            return true;
        }
        if (dom/* Dom.isTag */.i.isTag(parent, 'li') &&
            this.j.s.cursorInTheEdge(backspace, parent)) {
            (0,helpers.call)(backspace ? dom/* Dom.before */.i.before : dom/* Dom.after */.i.after, parent, fakeNode);
            const result = this.checkJoinNeighbors(fakeNode, backspace);
            (0,helpers.call)(!backspace ? dom/* Dom.append */.i.append : dom/* Dom.prepend */.i.prepend, parent, fakeNode);
            this.j.s.setCursorBefore(fakeNode);
            return result;
        }
    }
    checkRewrapListItem(fakeNode, backspace) {
        var _a;
        if (backspace) {
            const li = dom/* Dom.closest */.i.closest(fakeNode, dom/* Dom.isElement */.i.isElement, this.root);
            if (dom/* Dom.isTag */.i.isTag(li, 'li') &&
                ((_a = li === null || li === void 0 ? void 0 : li.parentElement) === null || _a === void 0 ? void 0 : _a.firstElementChild) === li &&
                this.j.s.cursorInTheEdge(true, li)) {
                const ul = li.parentElement;
                const p = this.j.createInside.element(this.j.o.enterBlock);
                dom/* Dom.before */.i.before(ul, p);
                dom/* Dom.moveContent */.i.moveContent(li, p);
                dom/* Dom.safeRemove */.i.safeRemove(li);
                if (dom/* Dom.isEmpty */.i.isEmpty(ul)) {
                    dom/* Dom.safeRemove */.i.safeRemove(ul);
                }
                this.j.s.setCursorBefore(fakeNode);
                return true;
            }
        }
    }
    safeRemoveEmptyNode(fakeNode) {
        var _a, _b;
        const { range } = this.j.s;
        if (range.startContainer === fakeNode) {
            if (fakeNode.previousSibling) {
                if (dom/* Dom.isText */.i.isText(fakeNode.previousSibling)) {
                    range.setStart(fakeNode.previousSibling, (_b = (_a = fakeNode.previousSibling.nodeValue) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
                }
                else {
                    range.setStartAfter(fakeNode.previousSibling);
                }
            }
            else if (fakeNode.nextSibling) {
                if (dom/* Dom.isText */.i.isText(fakeNode.nextSibling)) {
                    range.setStart(fakeNode.nextSibling, 0);
                }
                else {
                    range.setStartBefore(fakeNode.nextSibling);
                }
            }
            range.collapse(true);
            this.j.s.selectRange(range);
        }
        dom/* Dom.safeRemove */.i.safeRemove(fakeNode);
    }
}

;// CONCATENATED MODULE: ./src/plugins/bold.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config/* Config.prototype.controls.subscript */.D.prototype.controls.subscript = {
    tags: ['sub'],
    tooltip: 'subscript'
};
config/* Config.prototype.controls.superscript */.D.prototype.controls.superscript = {
    tags: ['sup'],
    tooltip: 'superscript'
};
config/* Config.prototype.controls.bold */.D.prototype.controls.bold = {
    tagRegExp: /^(strong|b)$/i,
    tags: ['strong', 'b'],
    css: {
        'font-weight': ['bold', '700']
    },
    tooltip: 'Bold'
};
config/* Config.prototype.controls.italic */.D.prototype.controls.italic = {
    tagRegExp: /^(em|i)$/i,
    tags: ['em', 'i'],
    css: {
        'font-style': 'italic'
    },
    tooltip: 'Italic'
};
config/* Config.prototype.controls.underline */.D.prototype.controls.underline = {
    tagRegExp: /^(u)$/i,
    tags: ['u'],
    css: {
        'text-decoration': 'underline'
    },
    tooltip: 'Underline'
};
config/* Config.prototype.controls.strikethrough */.D.prototype.controls.strikethrough = {
    tagRegExp: /^(s)$/i,
    tags: ['s'],
    css: {
        'text-decoration': 'line-through'
    },
    tooltip: 'Strike through'
};
function bold(editor) {
    const callBack = (command) => {
        const control = config/* Config.defaultOptions.controls */.D.defaultOptions.controls[command], cssOptions = {
            ...control.css
        }, cssRules = {};
        Object.keys(cssOptions).forEach((key) => {
            cssRules[key] = (0,helpers.isArray)(cssOptions[key])
                ? cssOptions[key][0]
                : cssOptions[key];
        });
        editor.s.applyStyle(cssRules, {
            element: control.tags ? control.tags[0] : undefined
        });
        editor.e.fire('synchro');
        return false;
    };
    ['bold', 'italic', 'underline', 'strikethrough'].forEach(name => {
        editor.registerButton({
            name,
            group: 'font-style'
        });
    });
    ['superscript', 'subscript'].forEach(name => {
        editor.registerButton({
            name,
            group: 'script'
        });
    });
    editor
        .registerCommand('bold', {
        exec: callBack,
        hotkeys: ['ctrl+b', 'cmd+b']
    })
        .registerCommand('italic', {
        exec: callBack,
        hotkeys: ['ctrl+i', 'cmd+i']
    })
        .registerCommand('underline', {
        exec: callBack,
        hotkeys: ['ctrl+u', 'cmd+u']
    })
        .registerCommand('strikethrough', {
        exec: callBack
    });
}

;// CONCATENATED MODULE: ./src/plugins/fix/clean-html.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config/* Config.prototype.cleanHTML */.D.prototype.cleanHTML = {
    timeout: 300,
    removeEmptyElements: true,
    fillEmptyParagraph: true,
    replaceNBSP: true,
    replaceOldTags: {
        i: 'em',
        b: 'strong'
    },
    allowTags: false,
    denyTags: false
};
config/* Config.prototype.controls.eraser */.D.prototype.controls.eraser = {
    command: 'removeFormat',
    tooltip: 'Clear Formatting'
};
class cleanHtml extends Plugin {
    constructor() {
        super(...arguments);
        this.buttons = [
            {
                name: 'eraser',
                group: 'font-style'
            }
        ];
        this.visitNode = (nodeElm, current, remove) => {
            let work = false;
            if (!nodeElm) {
                return work;
            }
            if (this.isRemovableNode(nodeElm, current)) {
                remove.push(nodeElm);
                return this.visitNode(nodeElm.nextSibling, current, remove);
            }
            if (this.j.o.cleanHTML.fillEmptyParagraph &&
                dom/* Dom.isBlock */.i.isBlock(nodeElm, this.j.ew) &&
                dom/* Dom.isEmpty */.i.isEmpty(nodeElm, /^(img|svg|canvas|input|textarea|form|br)$/)) {
                const br = this.j.createInside.element('br');
                nodeElm.appendChild(br);
                work = true;
            }
            const allow = this.allowTagsHash;
            if (allow && allow[nodeElm.nodeName] !== true) {
                const attrs = nodeElm.attributes;
                if (attrs && attrs.length) {
                    const removeAttrs = [];
                    for (let i = 0; i < attrs.length; i += 1) {
                        const attr = allow[nodeElm.nodeName][attrs[i].name];
                        if (!attr || (attr !== true && attr !== attrs[i].value)) {
                            removeAttrs.push(attrs[i].name);
                        }
                    }
                    if (removeAttrs.length) {
                        work = true;
                    }
                    removeAttrs.forEach(attr => {
                        nodeElm.removeAttribute(attr);
                    });
                }
            }
            work = this.visitNode(nodeElm.firstChild, current, remove) || work;
            work = this.visitNode(nodeElm.nextSibling, current, remove) || work;
            return work;
        };
        this.allowTagsHash = cleanHtml.getHash(this.j.o.cleanHTML.allowTags);
        this.denyTagsHash = cleanHtml.getHash(this.j.o.cleanHTML.denyTags);
        this.onKeyUpCleanUp = () => {
            const editor = this.j;
            if (!this.allowEdit()) {
                return;
            }
            const currentNode = editor.s.current();
            if (currentNode) {
                const currentParagraph = dom/* Dom.up */.i.up(currentNode, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
                if (currentParagraph) {
                    dom/* Dom.all */.i.all(currentParagraph, node => {
                        if (node && dom/* Dom.isText */.i.isText(node)) {
                            if (node.nodeValue != null &&
                                (0,constants.INVISIBLE_SPACE_REG_EXP)().test(node.nodeValue) &&
                                node.nodeValue.replace((0,constants.INVISIBLE_SPACE_REG_EXP)(), '').length !== 0) {
                                node.nodeValue = node.nodeValue.replace((0,constants.INVISIBLE_SPACE_REG_EXP)(), '');
                                if (node === currentNode &&
                                    editor.s.isCollapsed()) {
                                    editor.s.setCursorAfter(node);
                                }
                            }
                        }
                    });
                }
            }
        };
        this.beforeCommand = (command) => {
            if (command.toLowerCase() === 'removeformat') {
                this.onRemoveFormat();
                return false;
            }
        };
    }
    afterInit(jodit) {
        jodit.e
            .off('.cleanHtml')
            .on('change.cleanHtml afterSetMode.cleanHtml afterInit.cleanHtml mousedown.cleanHtml keydown.cleanHtml', this.onChangeCleanHTML)
            .on('keyup.cleanHtml', this.onKeyUpCleanUp)
            .on('beforeCommand.cleanHtml', this.beforeCommand);
    }
    onChangeCleanHTML() {
        if (!this.allowEdit()) {
            return;
        }
        const editor = this.j;
        const current = editor.s.current();
        const replaceOldTags = editor.o.cleanHTML.replaceOldTags;
        if (replaceOldTags && current) {
            const tags = (0,helpers.keys)(replaceOldTags, false);
            if (editor.s.isCollapsed()) {
                const oldParent = dom/* Dom.closest */.i.closest(current, tags, editor.editor);
                if (oldParent) {
                    editor.s.save();
                    const tagName = replaceOldTags[oldParent.nodeName.toLowerCase()] ||
                        replaceOldTags[oldParent.nodeName];
                    dom/* Dom.replace */.i.replace(oldParent, tagName, editor.createInside, true, false);
                    editor.s.restore();
                }
            }
        }
        let node = null;
        if (editor.editor.firstChild) {
            node = editor.editor.firstChild;
        }
        const remove = [];
        const work = this.visitNode(node, current, remove);
        remove.forEach(dom/* Dom.safeRemove */.i.safeRemove);
        if (remove.length || work) {
            editor.events && editor.e.fire('synchro');
        }
    }
    allowEdit() {
        return !(this.j.isInDestruct ||
            !this.j.isEditorMode() ||
            this.j.getReadOnly());
    }
    static getHash(tags) {
        const attributesReg = /([^[]*)\[([^\]]+)]/;
        const seperator = /[\s]*,[\s]*/, attrReg = /^(.*)[\s]*=[\s]*(.*)$/;
        const tagsHash = {};
        if ((0,helpers.isString)(tags)) {
            tags.split(seperator).map((elm) => {
                elm = (0,helpers.trim)(elm);
                const attr = attributesReg.exec(elm), allowAttributes = {}, attributeMap = (attrName) => {
                    attrName = (0,helpers.trim)(attrName);
                    const val = attrReg.exec(attrName);
                    if (val) {
                        allowAttributes[val[1]] = val[2];
                    }
                    else {
                        allowAttributes[attrName] = true;
                    }
                };
                if (attr) {
                    const attr2 = attr[2].split(seperator);
                    if (attr[1]) {
                        attr2.forEach(attributeMap);
                        tagsHash[attr[1].toUpperCase()] = allowAttributes;
                    }
                }
                else {
                    tagsHash[elm.toUpperCase()] = true;
                }
            });
            return tagsHash;
        }
        if (tags) {
            Object.keys(tags).forEach(tagName => {
                tagsHash[tagName.toUpperCase()] = tags[tagName];
            });
            return tagsHash;
        }
        return false;
    }
    onRemoveFormat() {
        if (this.j.s.isCollapsed()) {
            this.removeFormatForCollapsedSelection();
        }
        else {
            this.removeFormatForSelection();
        }
    }
    removeFormatForCollapsedSelection(fake) {
        const { s } = this.j;
        let fakeNode = fake;
        if (!fakeNode) {
            fakeNode = this.j.createInside.fake();
            s.range.insertNode(fakeNode);
            s.range.collapse();
        }
        const mainInline = dom/* Dom.furthest */.i.furthest(fakeNode, this.isInlineBlock, this.j.editor);
        if (mainInline) {
            if (s.cursorOnTheLeft(mainInline)) {
                dom/* Dom.before */.i.before(mainInline, fakeNode);
            }
            else if (s.cursorOnTheRight(mainInline)) {
                dom/* Dom.after */.i.after(mainInline, fakeNode);
            }
            else {
                const leftHand = s.splitSelection(mainInline);
                leftHand && dom/* Dom.after */.i.after(leftHand, fakeNode);
            }
        }
        if (!fake) {
            s.setCursorBefore(fakeNode);
            dom/* Dom.safeRemove */.i.safeRemove(fakeNode);
        }
    }
    isInlineBlock(node) {
        return dom/* Dom.isInlineBlock */.i.isInlineBlock(node) && !dom/* Dom.isTag */.i.isTag(node, constants.INSEPARABLE_TAGS);
    }
    removeFormatForSelection() {
        const { s } = this.j, { range } = s, left = range.cloneRange(), right = range.cloneRange(), fakeLeft = this.j.createInside.fake(), fakeRight = this.j.createInside.fake();
        left.collapse(true);
        right.collapse(false);
        left.insertNode(fakeLeft);
        right.insertNode(fakeRight);
        range.setStartBefore(fakeLeft);
        range.collapse(true);
        s.selectRange(range);
        this.removeFormatForCollapsedSelection(fakeLeft);
        range.setEndAfter(fakeRight);
        range.collapse(false);
        s.selectRange(range);
        this.removeFormatForCollapsedSelection(fakeRight);
        const shouldUnwrap = [];
        dom/* Dom.between */.i.between(fakeLeft, fakeRight, node => {
            if (this.isInlineBlock(node)) {
                shouldUnwrap.push(node);
            }
        });
        shouldUnwrap.forEach(node => dom/* Dom.unwrap */.i.unwrap(node));
        const clearParent = (node, left) => {
            if (!findNotEmptySibling(node, left)) {
                const pn = node.parentNode;
                if (pn && pn !== s.area && pn.getAttribute('style')) {
                    pn.removeAttribute('style');
                    clearParent(pn, left);
                    return true;
                }
            }
        };
        clearParent(fakeLeft, true) && clearParent(fakeRight, false);
        range.setStartAfter(fakeLeft);
        range.setEndBefore(fakeRight);
        s.selectRange(range);
        dom/* Dom.safeRemove */.i.safeRemove(fakeLeft);
        dom/* Dom.safeRemove */.i.safeRemove(fakeRight);
    }
    isRemovableNode(node, current) {
        const allow = this.allowTagsHash;
        if (!dom/* Dom.isText */.i.isText(node) &&
            ((allow && !allow[node.nodeName]) ||
                (this.denyTagsHash && this.denyTagsHash[node.nodeName]))) {
            return true;
        }
        if (current &&
            dom/* Dom.isTag */.i.isTag(node, 'br') &&
            cleanHtml.hasNotEmptyTextSibling(node) &&
            !cleanHtml.hasNotEmptyTextSibling(node, true) &&
            dom/* Dom.up */.i.up(node, node => dom/* Dom.isBlock */.i.isBlock(node, this.j.ew), this.j.editor) !==
                dom/* Dom.up */.i.up(current, node => dom/* Dom.isBlock */.i.isBlock(node, this.j.ew), this.j.editor)) {
            return true;
        }
        return (this.j.o.cleanHTML.removeEmptyElements &&
            current != null &&
            dom/* Dom.isElement */.i.isElement(node) &&
            node.nodeName.match(constants.IS_INLINE) != null &&
            !this.j.s.isMarker(node) &&
            (0,helpers.trim)(node.innerHTML).length === 0 &&
            !dom/* Dom.isOrContains */.i.isOrContains(node, current));
    }
    static hasNotEmptyTextSibling(node, next = false) {
        let prev = next ? node.nextSibling : node.previousSibling;
        while (prev) {
            if (dom/* Dom.isElement */.i.isElement(prev) || !dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(prev)) {
                return true;
            }
            prev = next ? prev.nextSibling : prev.previousSibling;
        }
        return false;
    }
    beforeDestruct() {
        this.j.e.off('.cleanHtml');
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.debounce)(ctx => ctx.jodit.o.cleanHTML.timeout)
], cleanHtml.prototype, "onChangeCleanHTML", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], cleanHtml.prototype, "isInlineBlock", null);

;// CONCATENATED MODULE: ./src/plugins/fix/wrap-text-nodes.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class WrapTextNodes extends Plugin {
    constructor() {
        super(...arguments);
        this.isSuitableStart = (n) => (dom/* Dom.isText */.i.isText(n) && (0,checker/* isString */.HD)(n.nodeValue) && /[^\s]/.test(n.nodeValue)) ||
            (this.isNotClosed(n) && !this.jodit.selection.isMarker(n));
        this.isSuitable = (n) => dom/* Dom.isText */.i.isText(n) || this.isNotClosed(n);
        this.isNotClosed = (n) => dom/* Dom.isElement */.i.isElement(n) &&
            !(dom/* Dom.isBlock */.i.isBlock(n, this.jodit.ew) || dom/* Dom.isTag */.i.isTag(n, ['hr', 'style']));
    }
    afterInit(jodit) {
        if (jodit.o.enter.toLowerCase() === 'br') {
            return;
        }
        jodit.e.on('afterInit.wtn postProcessSetEditorValue.wtn', this.postProcessSetEditorValue);
    }
    beforeDestruct(jodit) {
        jodit.e.off('.wtn');
    }
    postProcessSetEditorValue() {
        const { jodit } = this;
        if (!jodit.isEditorMode()) {
            return;
        }
        let child = jodit.editor.firstChild, isChanged = false;
        while (child) {
            if (this.isSuitableStart(child)) {
                if (!isChanged) {
                    jodit.s.save();
                }
                isChanged = true;
                const box = jodit.createInside.element(jodit.o.enter);
                dom/* Dom.before */.i.before(child, box);
                while (child && this.isSuitable(child)) {
                    const next = child.nextSibling;
                    box.appendChild(child);
                    child = next;
                }
                box.normalize();
            }
            child = child && child.nextSibling;
        }
        if (isChanged) {
            jodit.s.restore();
            if (jodit.e.current === 'afterInit') {
                jodit.e.fire('internalChange');
            }
        }
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], WrapTextNodes.prototype, "postProcessSetEditorValue", null);

;// CONCATENATED MODULE: ./src/plugins/clipboard/paste/helpers.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const getDataTransfer = (event) => {
    if (event.clipboardData) {
        return event.clipboardData;
    }
    try {
        return event.dataTransfer || new DataTransfer();
    }
    catch (_a) {
        return null;
    }
};
function removeExtraFragments(html) {
    html = html.replace(/<meta[^>]+?>/g, '');
    const start = html.search(/<!--StartFragment-->/i);
    if (start !== -1) {
        html = html.substr(start + 20);
    }
    const end = html.search(/<!--EndFragment-->/i);
    if (end !== -1) {
        html = html.substr(0, end);
    }
    return html;
}
function pasteInsertHtml(e, editor, html) {
    if (editor.isInDestruct) {
        return;
    }
    if ((e === null || e === void 0 ? void 0 : e.type) === 'drop') {
        editor.s.insertCursorAtPoint(e.clientX, e.clientY);
    }
    const result = editor.e.fire('beforePasteInsert', html);
    if (!(0,helpers.isVoid)(result) &&
        ((0,helpers.isString)(result) || (0,helpers.isNumber)(result) || dom/* Dom.isNode */.i.isNode(result, editor.ew))) {
        html = result;
    }
    if ((0,helpers.isString)(html)) {
        html = removeExtraFragments(html);
    }
    editor.s.insertHTML(html);
}
function getAllTypes(dt) {
    const types = dt.types;
    let types_str = '';
    if ((0,helpers.isArray)(types) || (0,helpers.type)(types) === 'domstringlist') {
        for (let i = 0; i < types.length; i += 1) {
            types_str += types[i] + ';';
        }
    }
    else {
        types_str = (types || constants.TEXT_PLAIN).toString() + ';';
    }
    return types_str;
}

;// CONCATENATED MODULE: ./src/plugins/clipboard/clipboard.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const pluginKey = 'clipboard';
class clipboard {
    constructor() {
        this.buttons = [
            {
                name: 'cut',
                group: 'clipboard'
            },
            {
                name: 'copy',
                group: 'clipboard'
            },
            {
                name: 'paste',
                group: 'clipboard'
            },
            {
                name: 'selectall',
                group: 'clipboard'
            }
        ];
    }
    init(editor) {
        var _a;
        (_a = this.buttons) === null || _a === void 0 ? void 0 : _a.forEach(btn => editor.registerButton(btn));
        editor.e
            .off(`copy.${pluginKey} cut.${pluginKey}`)
            .on(`copy.${pluginKey} cut.${pluginKey}`, (event) => {
            var _a;
            const selectedText = editor.s.html;
            const clipboardData = getDataTransfer(event) ||
                getDataTransfer(editor.ew) ||
                getDataTransfer(event.originalEvent);
            if (clipboardData) {
                clipboardData.setData(constants.TEXT_PLAIN, (0,helpers.stripTags)(selectedText));
                clipboardData.setData(constants.TEXT_HTML, selectedText);
            }
            editor.buffer.set(pluginKey, selectedText);
            editor.e.fire('pasteStack', {
                html: selectedText,
                action: editor.o.defaultActionOnPaste
            });
            if (event.type === 'cut') {
                editor.s.remove();
                editor.s.focus();
            }
            event.preventDefault();
            (_a = editor === null || editor === void 0 ? void 0 : editor.events) === null || _a === void 0 ? void 0 : _a.fire('afterCopy', selectedText);
        });
    }
    destruct(editor) {
        var _a, _b;
        (_a = editor === null || editor === void 0 ? void 0 : editor.buffer) === null || _a === void 0 ? void 0 : _a.set(pluginKey, '');
        (_b = editor === null || editor === void 0 ? void 0 : editor.events) === null || _b === void 0 ? void 0 : _b.off('.' + pluginKey);
    }
}

;// CONCATENATED MODULE: ./src/plugins/clipboard/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config/* Config.prototype.askBeforePasteHTML */.D.prototype.askBeforePasteHTML = true;
config/* Config.prototype.processPasteHTML */.D.prototype.processPasteHTML = true;
config/* Config.prototype.askBeforePasteFromWord */.D.prototype.askBeforePasteFromWord = true;
config/* Config.prototype.processPasteFromWord */.D.prototype.processPasteFromWord = true;
config/* Config.prototype.nl2brInPlainText */.D.prototype.nl2brInPlainText = true;
config/* Config.prototype.defaultActionOnPaste */.D.prototype.defaultActionOnPaste = constants.INSERT_AS_HTML;
config/* Config.prototype.defaultActionOnPasteFromWord */.D.prototype.defaultActionOnPasteFromWord = null;
config/* Config.prototype.draggableTags */.D.prototype.draggableTags = ['img', 'a', 'jodit-media', 'jodit'];
config/* Config.prototype.controls.cut */.D.prototype.controls.cut = {
    command: 'cut',
    isDisabled: (editor) => editor.s.isCollapsed(),
    tooltip: 'Cut selection'
};
config/* Config.prototype.controls.copy */.D.prototype.controls.copy = {
    command: 'copy',
    isDisabled: (editor) => editor.s.isCollapsed(),
    tooltip: 'Copy selection'
};
const psKey = 'pasteStorage';
config/* Config.prototype.controls.paste */.D.prototype.controls.paste = {
    tooltip: 'Paste from clipboard',
    async exec(editor, _, { control }) {
        if (control.name === psKey) {
            editor.execCommand('showPasteStorage');
            return;
        }
        editor.s.focus();
        let text = '', error = true;
        if (navigator.clipboard) {
            try {
                const items = await navigator.clipboard.read();
                if (items && items.length) {
                    const textBlob = await items[0].getType(constants.TEXT_PLAIN);
                    text = await new Response(textBlob).text();
                }
                error = false;
            }
            catch (e) {
                if (false) {}
            }
            if (error) {
                try {
                    text = await navigator.clipboard.readText();
                    error = false;
                }
                catch (e) {
                    if (false) {}
                }
            }
        }
        if (error) {
            text = editor.buffer.get(pluginKey) || '';
            error = text.length === 0;
        }
        const value = editor.value;
        if (error) {
            editor.ed.execCommand('paste');
            error = value === editor.value;
            !error && editor.e.fire('afterPaste');
        }
        else if (text.length) {
            pasteInsertHtml(null, editor, text);
            editor.e.fire('afterPaste');
        }
        else {
            if (error) {
                Alert(editor.i18n("Your browser doesn't support direct access to the clipboard."), () => {
                    editor.s.focus();
                }).bindDestruct(editor);
            }
        }
    },
    list: {
        [psKey]: 'Paste Storage'
    },
    isChildDisabled(j) {
        return j.e.fire('pasteStorageList') < 2;
    }
};
config/* Config.prototype.controls.selectall */.D.prototype.controls.selectall = {
    icon: 'select-all',
    command: 'selectall',
    tooltip: 'Select all'
};

;// CONCATENATED MODULE: ./src/plugins/clipboard/paste/paste.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










class paste extends Plugin {
    constructor() {
        super(...arguments);
        this.pasteStack = new helpers.LimitedStack(20);
    }
    afterInit(jodit) {
        jodit.e
            .on('paste.paste', this.onPaste)
            .on('pasteStack.paste', (item) => this.pasteStack.push(item));
        if (jodit.o.nl2brInPlainText) {
            this.j.e.on('processPaste.paste', this.onProcessPasteReplaceNl2Br);
        }
    }
    onPaste(e) {
        try {
            if (this.customPasteProcess(e) === false ||
                this.j.e.fire('beforePaste', e) === false) {
                e.preventDefault();
                return false;
            }
            this.defaultPasteProcess(e);
        }
        finally {
            this.j.e.fire('afterPaste', e);
        }
    }
    customPasteProcess(e) {
        if (!this.j.o.processPasteHTML) {
            return;
        }
        const dt = getDataTransfer(e), texts = [dt === null || dt === void 0 ? void 0 : dt.getData(constants.TEXT_HTML), dt === null || dt === void 0 ? void 0 : dt.getData(constants.TEXT_PLAIN)];
        for (const text of texts) {
            if ((0,helpers.isHTML)(text) &&
                (this.processWordHTML(e, text) || this.processHTML(e, text))) {
                return false;
            }
        }
    }
    defaultPasteProcess(e) {
        const dt = getDataTransfer(e);
        let text = (dt === null || dt === void 0 ? void 0 : dt.getData(constants.TEXT_HTML)) || (dt === null || dt === void 0 ? void 0 : dt.getData(constants.TEXT_PLAIN));
        if (dt && text && (0,helpers.trim)(text) !== '') {
            const result = this.j.e.fire('processPaste', e, text, getAllTypes(dt));
            if (result !== undefined) {
                text = result;
            }
            if ((0,helpers.isString)(text) || dom/* Dom.isNode */.i.isNode(text, this.j.ew)) {
                this.insertByType(e, text, this.j.o.defaultActionOnPaste);
            }
            e.preventDefault();
            e.stopPropagation();
        }
    }
    processWordHTML(e, text) {
        if (this.j.o.processPasteFromWord && (0,helpers.isHtmlFromWord)(text)) {
            if (this.j.o.askBeforePasteFromWord) {
                this.askInsertTypeDialog('The pasted content is coming from a Microsoft Word/Excel document. ' +
                    'Do you want to keep the format or clean it up?', 'Word Paste Detected', insertType => {
                    this.insertFromWordByType(e, text, insertType);
                });
            }
            else {
                this.insertFromWordByType(e, text, this.j.o.defaultActionOnPasteFromWord ||
                    this.j.o.defaultActionOnPaste);
            }
            return true;
        }
        return false;
    }
    processHTML(e, html) {
        if (this.j.o.askBeforePasteHTML) {
            const cached = this.pasteStack.find(cachedItem => cachedItem.html === html);
            if (cached) {
                this.insertByType(e, html, cached.action || this.j.o.defaultActionOnPaste);
                return true;
            }
            this.askInsertTypeDialog('Your code is similar to HTML. Keep as HTML?', 'Paste as HTML', (insertType) => {
                this.insertByType(e, html, insertType);
            }, 'Insert as Text');
            return true;
        }
        return false;
    }
    insertFromWordByType(e, html, insertType) {
        var _a;
        switch (insertType) {
            case constants.INSERT_AS_HTML: {
                html = (0,helpers.applyStyles)(html);
                if (this.j.o.beautifyHTML) {
                    const value = (_a = this.j.events) === null || _a === void 0 ? void 0 : _a.fire('beautifyHTML', html);
                    if ((0,helpers.isString)(value)) {
                        html = value;
                    }
                }
                break;
            }
            case constants.INSERT_AS_TEXT: {
                html = (0,helpers.cleanFromWord)(html);
                break;
            }
            case constants.INSERT_ONLY_TEXT: {
                html = (0,helpers.stripTags)((0,helpers.cleanFromWord)(html));
                break;
            }
        }
        pasteInsertHtml(e, this.j, html);
    }
    insertByType(e, html, action) {
        this.pasteStack.push({ html, action });
        if ((0,helpers.isString)(html)) {
            this.j.buffer.set(pluginKey, html);
            switch (action) {
                case constants.INSERT_CLEAR_HTML:
                    html = (0,helpers.cleanFromWord)(html);
                    break;
                case constants.INSERT_ONLY_TEXT:
                    html = (0,helpers.stripTags)(html);
                    break;
                case constants.INSERT_AS_TEXT:
                    html = (0,helpers.htmlspecialchars)(html);
                    break;
                default:
            }
        }
        pasteInsertHtml(e, this.j, html);
    }
    askInsertTypeDialog(msg, title, callback, clearButton = 'Clean', insertText = 'Insert only Text') {
        var _a, _b, _c, _d;
        if (((_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.e) === null || _b === void 0 ? void 0 : _b.fire('beforeOpenPasteDialog', msg, title, callback, clearButton, insertText)) === false) {
            return;
        }
        const dialog = Confirm(`<div style="word-break: normal; white-space: normal">${this.j.i18n(msg)}</div>`, this.j.i18n(title));
        dialog.bindDestruct(this.j);
        (0,helpers.markOwner)(this.j, dialog.container);
        const keep = (0,ui_button/* Button */.zx)(this.j, {
            text: 'Keep',
            name: 'keep',
            status: 'primary',
            tabIndex: 0
        });
        const clear = (0,ui_button/* Button */.zx)(this.j, {
            text: clearButton,
            tabIndex: 0
        });
        const clear2 = (0,ui_button/* Button */.zx)(this.j, {
            text: insertText,
            tabIndex: 0
        });
        const cancel = (0,ui_button/* Button */.zx)(this.j, {
            text: 'Cancel',
            tabIndex: 0
        });
        keep.onAction(() => {
            dialog.close();
            callback && callback(constants.INSERT_AS_HTML);
        });
        clear.onAction(() => {
            dialog.close();
            callback && callback(constants.INSERT_AS_TEXT);
        });
        clear2.onAction(() => {
            dialog.close();
            callback && callback(constants.INSERT_ONLY_TEXT);
        });
        cancel.onAction(() => {
            dialog.close();
        });
        dialog.setFooter([keep, clear, insertText ? clear2 : '', cancel]);
        keep.focus();
        (_d = (_c = this.j) === null || _c === void 0 ? void 0 : _c.e) === null || _d === void 0 ? void 0 : _d.fire('afterOpenPasteDialog', dialog, msg, title, callback, clearButton, insertText);
        return dialog;
    }
    onProcessPasteReplaceNl2Br(event, text, type) {
        if (type === constants.TEXT_PLAIN + ';' && !(0,helpers.isHTML)(text)) {
            return (0,helpers.nl2br)(text);
        }
    }
    useFakeDivBox(event) {
        const div = this.j.c.div('', {
            tabindex: -1,
            contenteditable: true,
            style: {
                left: -9999,
                top: 0,
                width: 0,
                height: '100%',
                lineHeight: '140%',
                overflow: 'hidden',
                position: 'fixed',
                zIndex: 2147483647,
                wordBreak: 'break-all'
            }
        });
        this.j.container.appendChild(div);
        this.j.s.save();
        div.focus();
        let tick = 0;
        const removeFakeFocus = () => {
            dom/* Dom.safeRemove */.i.safeRemove(div);
            this.j.selection && this.j.s.restore();
        };
        const waitData = () => {
            tick += 1;
            if (div.childNodes && div.childNodes.length > 0) {
                const pastedData = div.innerHTML;
                removeFakeFocus();
                this.processHTML(event, pastedData);
                return;
            }
            if (tick < 5) {
                this.j.async.setTimeout(waitData, 20);
            }
            else {
                removeFakeFocus();
            }
        };
        waitData();
    }
    beforeDestruct(jodit) {
        jodit.e.off('paste.paste', this.onPaste);
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], paste.prototype, "onPaste", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], paste.prototype, "onProcessPasteReplaceNl2Br", null);

;// CONCATENATED MODULE: ./src/plugins/clipboard/paste-storage/paste-storage.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






class pasteStorage extends Plugin {
    constructor() {
        super(...arguments);
        this.currentIndex = 0;
        this.list = [];
        this.container = null;
        this.listBox = null;
        this.previewBox = null;
        this.dialog = null;
        this.paste = () => {
            this.j.s.focus();
            this.j.s.insertHTML(this.list[this.currentIndex]);
            if (this.currentIndex !== 0) {
                const buffer = this.list[0];
                this.list[0] = this.list[this.currentIndex];
                this.list[this.currentIndex] = buffer;
            }
            this.dialog && this.dialog.close();
            this.j.setEditorValue();
            this.j.e.fire('afterPaste');
        };
        this.onKeyDown = (e) => {
            let index = this.currentIndex;
            if ([constants.KEY_UP, constants.KEY_DOWN, constants.KEY_ENTER].indexOf(e.key) === -1) {
                return;
            }
            if (e.key === constants.KEY_UP) {
                if (index === 0) {
                    index = this.list.length - 1;
                }
                else {
                    index -= 1;
                }
            }
            if (e.key === constants.KEY_DOWN) {
                if (index === this.list.length - 1) {
                    index = 0;
                }
                else {
                    index += 1;
                }
            }
            if (e.key === constants.KEY_ENTER) {
                this.paste();
                return;
            }
            if (index !== this.currentIndex) {
                this.selectIndex(index);
            }
            e.stopImmediatePropagation();
            e.preventDefault();
        };
        this.selectIndex = (index) => {
            if (this.listBox) {
                (0,helpers.toArray)(this.listBox.childNodes).forEach((a, i) => {
                    a.classList.remove('jodit_active');
                    if (index === i && this.previewBox) {
                        a.classList.add('jodit_active');
                        this.previewBox.innerHTML = this.list[index];
                        a.focus();
                    }
                });
            }
            this.currentIndex = index;
        };
        this.showDialog = () => {
            if (this.list.length < 2) {
                return;
            }
            this.dialog || this.createDialog();
            if (this.listBox) {
                this.listBox.innerHTML = '';
            }
            if (this.previewBox) {
                this.previewBox.innerHTML = '';
            }
            this.list.forEach((html, index) => {
                const a = this.j.c.element('a');
                a.textContent =
                    index + 1 + '. ' + html.replace((0,constants.SPACE_REG_EXP)(), '');
                this.j.e.on(a, 'keydown', this.onKeyDown);
                (0,helpers.attr)(a, 'href', 'javascript:void(0)');
                (0,helpers.attr)(a, 'data-index', index.toString());
                (0,helpers.attr)(a, 'tab-index', '-1');
                this.listBox && this.listBox.appendChild(a);
            });
            this.dialog && this.dialog.open();
            this.j.async.setTimeout(() => {
                this.selectIndex(0);
            }, 100);
        };
    }
    createDialog() {
        this.dialog = new Dialog({
            language: this.j.o.language
        });
        const pasteButton = this.j.c.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit-button">' +
            '<span>' +
            this.j.i18n('Paste') +
            '</span>' +
            '</a>');
        this.j.e.on(pasteButton, 'click', this.paste);
        const cancelButton = this.j.c.fromHTML('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit-button">' +
            '<span>' +
            this.j.i18n('Cancel') +
            '</span>' +
            '</a>');
        this.j.e.on(cancelButton, 'click', this.dialog.close);
        this.container = this.j.c.div();
        this.container.classList.add('jodit-paste-storage');
        this.listBox = this.j.c.div();
        this.previewBox = this.j.c.div();
        this.container.appendChild(this.listBox);
        this.container.appendChild(this.previewBox);
        this.dialog.setHeader(this.j.i18n('Choose Content to Paste'));
        this.dialog.setContent(this.container);
        this.dialog.setFooter([pasteButton, cancelButton]);
        this.j.e.on(this.listBox, 'click dblclick', (e) => {
            const a = e.target;
            if (dom/* Dom.isTag */.i.isTag(a, 'a') && a.hasAttribute('data-index')) {
                this.selectIndex(parseInt((0,helpers.attr)(a, '-index') || '0', 10));
            }
            if (e.type === 'dblclick') {
                this.paste();
            }
            return false;
        });
    }
    afterInit() {
        this.j.e
            .off('afterCopy.paste-storage')
            .on('pasteStorageList.paste-storage', () => this.list.length)
            .on('afterCopy.paste-storage', (html) => {
            if (this.list.indexOf(html) !== -1) {
                this.list.splice(this.list.indexOf(html), 1);
            }
            this.list.unshift(html);
            if (this.list.length > 5) {
                this.list.length = 5;
            }
        });
        this.j.registerCommand('showPasteStorage', {
            exec: this.showDialog,
            hotkeys: ['ctrl+shift+v', 'cmd+shift+v']
        });
    }
    beforeDestruct() {
        this.dialog && this.dialog.destruct();
        this.j.e.off('.paste-storage');
        dom/* Dom.safeRemove */.i.safeRemove(this.previewBox);
        dom/* Dom.safeRemove */.i.safeRemove(this.listBox);
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
        this.container = null;
        this.listBox = null;
        this.previewBox = null;
        this.dialog = null;
        this.list = [];
    }
}

;// CONCATENATED MODULE: ./src/plugins/clipboard/copy-format.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const copy_format_pluginKey = 'copyformat';
const copyStyles = [
    'fontWeight',
    'fontStyle',
    'fontSize',
    'color',
    'margin',
    'padding',
    'borderWidth',
    'borderStyle',
    'borderColor',
    'borderRadius',
    'backgroundColor',
    'textDecorationLine',
    'fontFamily'
];
const getStyle = (editor, key, box, defaultStyles) => {
    let result = (0,helpers.css)(box, key);
    if (result === defaultStyles[key]) {
        if (box.parentNode &&
            box !== editor.editor &&
            box.parentNode !== editor.editor) {
            result = getStyle(editor, key, box.parentNode, defaultStyles);
        }
        else {
            result = undefined;
        }
    }
    return result;
};
const getStyles = (editor, box, defaultStyles) => {
    const result = {};
    if (box) {
        copyStyles.forEach((key) => {
            result[key] = getStyle(editor, key, box, defaultStyles);
            if (key.match(/border(Style|Color)/) && !result.borderWidth) {
                result[key] = undefined;
            }
        });
    }
    return result;
};
config/* Config.prototype.controls.copyformat */.D.prototype.controls.copyformat = {
    exec: (editor, current, { button }) => {
        if (!current) {
            return;
        }
        if (editor.buffer.exists(copy_format_pluginKey)) {
            editor.buffer.delete(copy_format_pluginKey);
            editor.e.off(editor.editor, 'mouseup.' + copy_format_pluginKey);
        }
        else {
            const defaultStyles = {}, box = dom/* Dom.up */.i.up(current, (elm) => elm && !dom/* Dom.isText */.i.isText(elm), editor.editor) || editor.editor;
            const ideal = editor.createInside.span();
            editor.editor.appendChild(ideal);
            copyStyles.forEach((key) => {
                defaultStyles[key] = (0,helpers.css)(ideal, key);
            });
            if (ideal !== editor.editor) {
                dom/* Dom.safeRemove */.i.safeRemove(ideal);
            }
            const format = getStyles(editor, box, defaultStyles);
            const onMouseUp = () => {
                editor.buffer.delete(copy_format_pluginKey);
                const currentNode = editor.s.current();
                if (currentNode) {
                    if (dom/* Dom.isTag */.i.isTag(currentNode, 'img')) {
                        (0,helpers.css)(currentNode, format);
                    }
                    else {
                        editor.s.applyStyle(format);
                    }
                }
                editor.e.off(editor.editor, 'mouseup.' + copy_format_pluginKey);
            };
            editor.e.on(editor.editor, 'mouseup.' + copy_format_pluginKey, onMouseUp);
            editor.buffer.set(copy_format_pluginKey, true);
        }
        button.update();
    },
    isActive: (editor) => editor.buffer.exists(copy_format_pluginKey),
    tooltip: 'Paint format'
};
function copyFormat(editor) {
    editor.registerButton({
        name: 'copyformat',
        group: 'clipboard'
    });
}

;// CONCATENATED MODULE: ./src/plugins/clipboard/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






// EXTERNAL MODULE: ./src/modules/widget/index.ts + 3 modules
var widget = __webpack_require__(43);
;// CONCATENATED MODULE: ./src/plugins/color.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.controls.brush */.D.prototype.controls.brush = {
    update(button) {
        const color = (0,helpers.dataBind)(button, 'color');
        const editor = button.j;
        const update = (key, value) => {
            if (value && value !== (0,helpers.css)(editor.editor, key).toString()) {
                button.state.icon.fill = value;
                return;
            }
        };
        if (color) {
            const mode = (0,helpers.dataBind)(button, 'color');
            update(mode === 'color' ? mode : 'background-color', color);
            return;
        }
        const current = editor.s.current();
        if (current && !button.state.disabled) {
            const currentBpx = dom/* Dom.closest */.i.closest(current, elm => {
                return (dom/* Dom.isBlock */.i.isBlock(elm, editor.ew) ||
                    (elm && dom/* Dom.isElement */.i.isElement(elm)));
            }, editor.editor) || editor.editor;
            update('color', (0,helpers.css)(currentBpx, 'color').toString());
            update('background-color', (0,helpers.css)(currentBpx, 'background-color').toString());
        }
        button.state.icon.fill = '';
        button.state.activated = false;
    },
    popup: (editor, current, self, close, button) => {
        let colorHEX = '', bg_color = '', tabs = [], currentElement = null;
        if (current &&
            current !== editor.editor &&
            dom/* Dom.isNode */.i.isNode(current, editor.ew)) {
            if (dom/* Dom.isElement */.i.isElement(current) &&
                editor.s.isCollapsed() &&
                !dom/* Dom.isTag */.i.isTag(current, ['br', 'hr'])) {
                currentElement = current;
            }
            dom/* Dom.up */.i.up(current, (node) => {
                if (dom/* Dom.isHTMLElement */.i.isHTMLElement(node, editor.ew)) {
                    const color = (0,helpers.css)(node, 'color', undefined, true), background = (0,helpers.css)(node, 'background-color', undefined, true);
                    if (color) {
                        colorHEX = color.toString();
                        return true;
                    }
                    if (background) {
                        bg_color = background.toString();
                        return true;
                    }
                }
            }, editor.editor);
        }
        const backgroundTag = (0,widget/* ColorPickerWidget */.YW)(editor, (value) => {
            if (!currentElement) {
                editor.execCommand('background', false, value);
            }
            else {
                currentElement.style.backgroundColor = value;
            }
            (0,helpers.dataBind)(button, 'color', value);
            (0,helpers.dataBind)(button, 'color-mode', 'background');
            close();
        }, bg_color);
        const colorTab = (0,widget/* ColorPickerWidget */.YW)(editor, (value) => {
            if (!currentElement) {
                editor.execCommand('forecolor', false, value);
            }
            else {
                currentElement.style.color = value;
            }
            (0,helpers.dataBind)(button, 'color', value);
            (0,helpers.dataBind)(button, 'color-mode', 'color');
            close();
        }, colorHEX);
        tabs = [
            {
                name: 'Background',
                content: backgroundTag
            },
            {
                name: 'Text',
                content: colorTab
            }
        ];
        if (editor.o.colorPickerDefaultTab !== 'background') {
            tabs = tabs.reverse();
        }
        return (0,widget/* TabsWidget */.IL)(editor, tabs, currentElement);
    },
    exec(jodit, current, { button }) {
        const mode = (0,helpers.dataBind)(button, 'color-mode'), color = (0,helpers.dataBind)(button, 'color');
        if (!mode) {
            return false;
        }
        if (current &&
            current !== jodit.editor &&
            dom/* Dom.isNode */.i.isNode(current, jodit.ew) &&
            dom/* Dom.isElement */.i.isElement(current)) {
            switch (mode) {
                case 'color':
                    current.style.color = color;
                    break;
                case 'background':
                    current.style.backgroundColor = color;
                    break;
            }
        }
        else {
            jodit.execCommand(mode === 'background' ? mode : 'forecolor', false, color);
        }
    },
    tooltip: 'Fill color or set the text color'
};
function color(editor) {
    editor.registerButton({
        name: 'brush',
        group: 'color'
    });
    const callback = (command, second, third) => {
        const colorHEX = (0,helpers.normalizeColor)(third);
        switch (command) {
            case 'background':
                editor.s.applyStyle({
                    backgroundColor: !colorHEX ? '' : colorHEX
                });
                break;
            case 'forecolor':
                editor.s.applyStyle({
                    color: !colorHEX ? '' : colorHEX
                });
                break;
        }
        editor.setEditorValue();
        return false;
    };
    editor
        .registerCommand('forecolor', callback)
        .registerCommand('background', callback);
}

;// CONCATENATED MODULE: ./src/plugins/clipboard/drag-and-drop.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class DragAndDrop extends Plugin {
    constructor() {
        super(...arguments);
        this.isFragmentFromEditor = false;
        this.isCopyMode = false;
        this.startDragPoint = { x: 0, y: 0 };
        this.draggable = null;
        this.bufferRange = null;
        this.getText = (event) => {
            const dt = getDataTransfer(event);
            return dt ? dt.getData(constants.TEXT_HTML) || dt.getData(constants.TEXT_PLAIN) : null;
        };
    }
    afterInit() {
        this.j.e.on([window, this.j.ed, this.j.editor], 'dragstart.DragAndDrop', this.onDragStart);
    }
    onDragStart(event) {
        let target = event.target;
        this.onDragEnd();
        this.isFragmentFromEditor = dom/* Dom.isOrContains */.i.isOrContains(this.j.editor, target, true);
        this.isCopyMode = this.isFragmentFromEditor ? (0,helpers.ctrlKey)(event) : true;
        if (this.isFragmentFromEditor) {
            const sel = this.j.s.sel;
            const range = sel && sel.rangeCount ? sel.getRangeAt(0) : null;
            if (range) {
                this.bufferRange = range.cloneRange();
            }
        }
        else {
            this.bufferRange = null;
        }
        this.startDragPoint.x = event.clientX;
        this.startDragPoint.y = event.clientY;
        if (dom/* Dom.isElement */.i.isElement(target) &&
            target.classList.contains('jodit-filebrowser__files-item')) {
            target = target.querySelector('img');
        }
        if (dom/* Dom.isTag */.i.isTag(target, 'img')) {
            this.draggable = target.cloneNode(true);
            (0,helpers.dataBind)(this.draggable, 'target', target);
        }
        this.addDragListeners();
    }
    addDragListeners() {
        this.j.e
            .on('dragover', this.onDrag)
            .on('drop.DragAndDrop', this.onDrop)
            .on(window, 'dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop', this.onDragEnd);
    }
    removeDragListeners() {
        this.j.e
            .off('dragover', this.onDrag)
            .off('drop.DragAndDrop', this.onDrop)
            .off(window, 'dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop', this.onDragEnd);
    }
    onDrag(event) {
        if (this.draggable) {
            this.j.e.fire('hidePopup');
            this.j.s.insertCursorAtPoint(event.clientX, event.clientY);
            event.preventDefault();
            event.stopPropagation();
        }
    }
    onDragEnd() {
        if (this.draggable) {
            dom/* Dom.safeRemove */.i.safeRemove(this.draggable);
            this.draggable = null;
        }
        this.isCopyMode = false;
        this.removeDragListeners();
    }
    onDrop(event) {
        if (!event.dataTransfer ||
            !event.dataTransfer.files ||
            !event.dataTransfer.files.length) {
            if (!this.isFragmentFromEditor && !this.draggable) {
                this.j.e.fire('paste', event);
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
            const sel = this.j.s.sel;
            const range = this.bufferRange ||
                (sel && sel.rangeCount ? sel.getRangeAt(0) : null);
            let fragment = null;
            if (!this.draggable && range) {
                fragment = this.isCopyMode
                    ? range.cloneContents()
                    : range.extractContents();
            }
            else if (this.draggable) {
                if (this.isCopyMode) {
                    const [tagName, field] = (0,helpers.attr)(this.draggable, '-is-file') === '1'
                        ? ['a', 'href']
                        : ['img', 'src'];
                    fragment = this.j.createInside.element(tagName);
                    fragment.setAttribute(field, (0,helpers.attr)(this.draggable, 'data-src') ||
                        (0,helpers.attr)(this.draggable, 'src') ||
                        '');
                    if (tagName === 'a') {
                        fragment.textContent = (0,helpers.attr)(fragment, field) || '';
                    }
                }
                else {
                    fragment = (0,helpers.dataBind)(this.draggable, 'target');
                }
            }
            else if (this.getText(event)) {
                fragment = this.j.createInside.fromHTML(this.getText(event));
            }
            sel && sel.removeAllRanges();
            this.j.s.insertCursorAtPoint(event.clientX, event.clientY);
            if (fragment) {
                this.j.s.insertNode(fragment, false, false);
                if (range && fragment.firstChild && fragment.lastChild) {
                    range.setStartBefore(fragment.firstChild);
                    range.setEndAfter(fragment.lastChild);
                    this.j.s.selectRange(range);
                    this.j.e.fire('synchro');
                }
                if (dom/* Dom.isTag */.i.isTag(fragment, 'img') && this.j.events) {
                    this.j.e.fire('afterInsertImage', fragment);
                }
            }
            event.preventDefault();
            event.stopPropagation();
        }
        this.isFragmentFromEditor = false;
        this.removeDragListeners();
    }
    beforeDestruct() {
        this.onDragEnd();
        this.j.e
            .off(window, '.DragAndDrop')
            .off('.DragAndDrop')
            .off([window, this.j.ed, this.j.editor], 'dragstart.DragAndDrop', this.onDragStart);
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], DragAndDrop.prototype, "onDragStart", null);
(0,tslib_es6.__decorate)([
    (0,decorators.throttle)(ctx => ctx.j.defaultTimeout / 10)
], DragAndDrop.prototype, "onDrag", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], DragAndDrop.prototype, "onDragEnd", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], DragAndDrop.prototype, "onDrop", null);

;// CONCATENATED MODULE: ./src/plugins/clipboard/drag-and-drop-element.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






class DragAndDropElement extends Plugin {
    constructor() {
        super(...arguments);
        this.dragList = [];
        this.draggable = null;
        this.wasMoved = false;
        this.isCopyMode = false;
        this.diffStep = 10;
        this.startX = 0;
        this.startY = 0;
    }
    afterInit() {
        this.dragList = this.j.o.draggableTags
            ? (0,helpers.splitArray)(this.j.o.draggableTags)
                .filter(Boolean)
                .map(item => item.toLowerCase())
            : [];
        if (!this.dragList.length) {
            return;
        }
        this.j.e.on('mousedown touchstart dragstart', this.onDragStart);
    }
    onDragStart(event) {
        if (event.type === 'dragstart' && this.draggable) {
            return false;
        }
        const target = event.target;
        if (!this.dragList.length || !target) {
            return;
        }
        const matched = (node) => node && this.dragList.includes(node.nodeName.toLowerCase());
        const lastTarget = dom/* Dom.furthest */.i.furthest(target, matched, this.j.editor) ||
            (matched(target) ? target : null);
        if (!lastTarget) {
            return;
        }
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.isCopyMode = (0,helpers.ctrlKey)(event);
        this.onDragEnd();
        this.draggable = lastTarget.cloneNode(true);
        (0,helpers.dataBind)(this.draggable, 'target', lastTarget);
        this.addDragListeners();
    }
    onDrag(event) {
        var _a, _b;
        if (!this.draggable) {
            return;
        }
        const x = event.clientX, y = event.clientY;
        if (Math.sqrt(Math.pow(x - this.startX, 2) + Math.pow(y - this.startY, 2)) < this.diffStep) {
            return;
        }
        this.wasMoved = true;
        this.j.e.fire('hidePopup hideResizer');
        if (!this.draggable.parentNode) {
            const target = (0,helpers.dataBind)(this.draggable, 'target');
            (0,helpers.css)(this.draggable, {
                zIndex: 10000000000000,
                pointerEvents: 'none',
                pointer: 'drag',
                position: 'fixed',
                opacity: 0.7,
                display: 'inline-block',
                left: event.clientX,
                top: event.clientY,
                width: (_a = target === null || target === void 0 ? void 0 : target.offsetWidth) !== null && _a !== void 0 ? _a : 100,
                height: (_b = target === null || target === void 0 ? void 0 : target.offsetHeight) !== null && _b !== void 0 ? _b : 100
            });
            (0,global/* getContainer */.ZO)(this.j, DragAndDropElement).appendChild(this.draggable);
        }
        (0,helpers.css)(this.draggable, {
            left: event.clientX,
            top: event.clientY
        });
        this.j.s.insertCursorAtPoint(event.clientX, event.clientY);
    }
    onDragEnd() {
        if (this.isInDestruct) {
            return;
        }
        if (this.draggable) {
            dom/* Dom.safeRemove */.i.safeRemove(this.draggable);
            this.draggable = null;
            this.wasMoved = false;
            this.removeDragListeners();
        }
    }
    onDrop() {
        if (!this.draggable || !this.wasMoved) {
            this.onDragEnd();
            return;
        }
        let fragment = (0,helpers.dataBind)(this.draggable, 'target');
        this.onDragEnd();
        if (this.isCopyMode) {
            fragment = fragment.cloneNode(true);
        }
        const { parentElement } = fragment;
        this.j.s.insertNode(fragment, true, false);
        if (parentElement && dom/* Dom.isEmpty */.i.isEmpty(parentElement)) {
            dom/* Dom.safeRemove */.i.safeRemove(parentElement);
        }
        if (dom/* Dom.isTag */.i.isTag(fragment, 'img') && this.j.e) {
            this.j.e.fire('afterInsertImage', fragment);
        }
        this.j.e.fire('synchro');
    }
    addDragListeners() {
        this.j.e
            .on(this.j.editor, 'mousemove touchmove', this.onDrag)
            .on('mouseup touchend', this.onDrop)
            .on([this.j.ew, this.ow], 'mouseup touchend', this.onDragEnd);
    }
    removeDragListeners() {
        this.j.e
            .off(this.j.editor, 'mousemove touchmove', this.onDrag)
            .off('mouseup touchend', this.onDrop)
            .off([this.j.ew, this.ow], 'mouseup touchend', this.onDragEnd);
    }
    beforeDestruct() {
        this.onDragEnd();
        this.j.e.off('mousedown touchstart dragstart', this.onDragStart);
        this.removeDragListeners();
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], DragAndDropElement.prototype, "onDragStart", null);
(0,tslib_es6.__decorate)([
    (0,decorators.throttle)(ctx => ctx.j.defaultTimeout / 10)
], DragAndDropElement.prototype, "onDrag", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], DragAndDropElement.prototype, "onDragEnd", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], DragAndDropElement.prototype, "onDrop", null);

;// CONCATENATED MODULE: ./src/plugins/keyboard/enter.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





const insertParagraph = (editor, fake, wrapperTag, style) => {
    var _a;
    const p = editor.createInside.element(wrapperTag), helper_node = editor.createInside.element('br');
    p.appendChild(helper_node);
    if (style && style.cssText) {
        p.setAttribute('style', style.cssText);
    }
    editor.s.insertNode(p, false, false);
    editor.s.setCursorBefore(helper_node);
    const range = editor.s.createRange();
    range.setStartBefore(wrapperTag.toLowerCase() !== 'br' ? helper_node : p);
    range.collapse(true);
    editor.s.selectRange(range);
    dom/* Dom.safeRemove */.i.safeRemove(fake);
    (0,helpers.scrollIntoViewIfNeeded)(p, editor.editor, editor.ed);
    (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('synchro');
    return p;
};
class enter extends Plugin {
    constructor() {
        super(...arguments);
        this.brMode = false;
        this.defaultTag = constants.PARAGRAPH;
    }
    afterInit(editor) {
        this.defaultTag = editor.o.enter.toLowerCase();
        this.brMode = this.defaultTag === constants.BR.toLowerCase();
        if (!editor.o.enterBlock) {
            editor.o.enterBlock = this.brMode
                ? constants.PARAGRAPH
                : this.defaultTag;
        }
        editor.e.off('.enter').on('keydown.enter', (event) => {
            if (event.key === constants.KEY_ENTER) {
                const beforeEnter = editor.e.fire('beforeEnter', event);
                if (beforeEnter !== undefined) {
                    return beforeEnter;
                }
                if (!editor.s.isCollapsed()) {
                    editor.execCommand('Delete');
                }
                editor.s.focus();
                this.onEnter(event);
                return false;
            }
        });
    }
    onEnter(event) {
        const editor = this.j, sel = editor.selection, defaultTag = this.defaultTag;
        let current = sel.current(false);
        if (!current || current === editor.editor) {
            current = editor.createInside.text(constants.INVISIBLE_SPACE);
            sel.insertNode(current);
            sel.select(current);
        }
        let currentBox = this.getBlockWrapper(current);
        const isLi = dom/* Dom.isTag */.i.isTag(currentBox, 'li');
        if ((!isLi || event.shiftKey) &&
            !this.checkBR(current, event.shiftKey)) {
            return false;
        }
        if (!currentBox && !this.hasPreviousBlock(current)) {
            currentBox = this.wrapText(current);
        }
        if (!currentBox || currentBox === current) {
            insertParagraph(editor, null, isLi ? 'li' : defaultTag);
            return false;
        }
        if (!this.checkUnsplittableBox(currentBox)) {
            return false;
        }
        if (isLi && dom/* Dom.isEmpty */.i.isEmpty(currentBox)) {
            this.enterInsideEmptyLIelement(currentBox);
            return false;
        }
        const canSplit = currentBox.tagName.toLowerCase() === this.defaultTag || isLi;
        const cursorOnTheRight = sel.cursorOnTheRight(currentBox);
        const cursorOnTheLeft = sel.cursorOnTheLeft(currentBox);
        if (!canSplit && (cursorOnTheRight || cursorOnTheLeft)) {
            let fake = null;
            if (cursorOnTheRight) {
                fake = sel.setCursorAfter(currentBox);
            }
            else {
                fake = sel.setCursorBefore(currentBox);
            }
            insertParagraph(editor, fake, this.defaultTag);
            if (cursorOnTheLeft && !cursorOnTheRight) {
                sel.setCursorIn(currentBox, true);
            }
            return;
        }
        sel.splitSelection(currentBox);
    }
    getBlockWrapper(current, tagReg = constants.IS_BLOCK) {
        let node = current;
        const root = this.j.editor;
        do {
            if (!node || node === root) {
                break;
            }
            if (tagReg.test(node.nodeName)) {
                if (dom/* Dom.isTag */.i.isTag(node, 'li')) {
                    return node;
                }
                return (this.getBlockWrapper(node.parentNode, /^li$/i) ||
                    node);
            }
            node = node.parentNode;
        } while (node && node !== root);
        return null;
    }
    checkBR(current, shiftKeyPressed) {
        const isMultiLineBlock = dom/* Dom.closest */.i.closest(current, ['pre', 'blockquote'], this.j.editor);
        if (this.brMode ||
            (shiftKeyPressed && !isMultiLineBlock) ||
            (!shiftKeyPressed && isMultiLineBlock)) {
            const br = this.j.createInside.element('br');
            this.j.s.insertNode(br, true);
            (0,helpers.scrollIntoViewIfNeeded)(br, this.j.editor, this.j.ed);
            return false;
        }
        return true;
    }
    wrapText(current) {
        let needWrap = current;
        dom/* Dom.up */.i.up(needWrap, node => {
            if (node && node.hasChildNodes() && node !== this.j.editor) {
                needWrap = node;
            }
        }, this.j.editor);
        const currentBox = dom/* Dom.wrapInline */.i.wrapInline(needWrap, this.j.o.enter, this.j);
        if (dom/* Dom.isEmpty */.i.isEmpty(currentBox)) {
            const helper_node = this.j.createInside.element('br');
            currentBox.appendChild(helper_node);
            this.j.s.setCursorBefore(helper_node);
        }
        return currentBox;
    }
    hasPreviousBlock(current) {
        const editor = this.j;
        return Boolean(dom/* Dom.prev */.i.prev(current, (elm) => dom/* Dom.isBlock */.i.isBlock(elm, editor.ew) || dom/* Dom.isImage */.i.isImage(elm, editor.ew), editor.editor));
    }
    checkUnsplittableBox(currentBox) {
        const editor = this.j, sel = editor.selection;
        if (!dom/* Dom.canSplitBlock */.i.canSplitBlock(currentBox, editor.ew)) {
            const br = editor.createInside.element('br');
            sel.insertNode(br, false);
            sel.setCursorAfter(br);
            return false;
        }
        return true;
    }
    enterInsideEmptyLIelement(currentBox) {
        let fakeTextNode = null;
        const ul = dom/* Dom.closest */.i.closest(currentBox, ['ol', 'ul'], this.j.editor);
        if (!ul) {
            return;
        }
        if (!dom/* Dom.prev */.i.prev(currentBox, (elm) => dom/* Dom.isTag */.i.isTag(elm, 'li'), ul)) {
            fakeTextNode = this.j.s.setCursorBefore(ul);
        }
        else if (!dom/* Dom.next */.i.next(currentBox, (elm) => dom/* Dom.isTag */.i.isTag(elm, 'li'), ul)) {
            fakeTextNode = this.j.s.setCursorAfter(ul);
        }
        else {
            const leftRange = this.j.s.createRange();
            leftRange.setStartBefore(ul);
            leftRange.setEndAfter(currentBox);
            const fragment = leftRange.extractContents();
            if (ul.parentNode) {
                ul.parentNode.insertBefore(fragment, ul);
            }
            fakeTextNode = this.j.s.setCursorBefore(ul);
        }
        dom/* Dom.safeRemove */.i.safeRemove(currentBox);
        insertParagraph(this.j, fakeTextNode, this.defaultTag);
        if (!(0,helpers.$$)('li', ul).length) {
            dom/* Dom.safeRemove */.i.safeRemove(ul);
        }
    }
    beforeDestruct(editor) {
        editor.e.off('keydown.enter');
    }
}

;// CONCATENATED MODULE: ./src/plugins/error-messages/error-messages.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.showMessageErrors */.D.prototype.showMessageErrors = true;
config/* Config.prototype.showMessageErrorTime */.D.prototype.showMessageErrorTime = 3000;
config/* Config.prototype.showMessageErrorOffsetPx */.D.prototype.showMessageErrorOffsetPx = 3;
function errorMessages(editor) {
    if (editor.o.showMessageErrors) {
        let height;
        const messagesBox = editor.c.div('jodit_error_box_for_messages'), recalcOffsets = () => {
            height = 5;
            (0,helpers.toArray)(messagesBox.childNodes).forEach((elm) => {
                (0,helpers.css)(messagesBox, 'bottom', height + 'px');
                height +=
                    elm.offsetWidth + editor.o.showMessageErrorOffsetPx;
            });
        };
        editor.e
            .on('beforeDestruct', () => {
            dom/* Dom.safeRemove */.i.safeRemove(messagesBox);
        })
            .on('errorMessage', (message, className, timeout) => {
            editor.workplace.appendChild(messagesBox);
            const newmessage = editor.c.div('active ' + (className || ''), message);
            messagesBox.appendChild(newmessage);
            recalcOffsets();
            editor.async.setTimeout(() => {
                newmessage.classList.remove('active');
                editor.async.setTimeout(() => {
                    dom/* Dom.safeRemove */.i.safeRemove(newmessage);
                    recalcOffsets();
                }, 300);
            }, timeout || editor.o.showMessageErrorTime);
        });
    }
}

;// CONCATENATED MODULE: ./src/plugins/font.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.defaultFontSizePoints */.D.prototype.defaultFontSizePoints = 'px';
config/* Config.prototype.controls.fontsize */.D.prototype.controls.fontsize = {
    command: 'fontSize',
    data: {
        cssRule: 'font-size'
    },
    list: [
        '8',
        '9',
        '10',
        '11',
        '12',
        '14',
        '16',
        '18',
        '24',
        '30',
        '36',
        '48',
        '60',
        '72',
        '96'
    ],
    exec: (editor, event, { control }) => (0,helpers.memorizeExec)(editor, event, { control }, (value) => {
        var _a;
        if (((_a = control.command) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'fontsize') {
            return `${value}${editor.o.defaultFontSizePoints}`;
        }
        return value;
    }),
    childTemplate: (editor, key, value) => {
        return `${value}${editor.o.defaultFontSizePoints}`;
    },
    tooltip: 'Font size',
    isChildActive: (editor, control) => {
        var _a, _b;
        const current = editor.s.current(), cssKey = ((_a = control.data) === null || _a === void 0 ? void 0 : _a.cssRule) || 'font-size', normalize = ((_b = control.data) === null || _b === void 0 ? void 0 : _b.normalize) ||
            ((v) => {
                if (/pt$/i.test(v) &&
                    editor.o.defaultFontSizePoints === 'pt') {
                    return v.replace(/pt$/i, '');
                }
                return v;
            });
        if (current) {
            const currentBpx = dom/* Dom.closest */.i.closest(current, elm => {
                return (dom/* Dom.isBlock */.i.isBlock(elm, editor.ew) ||
                    (elm && dom/* Dom.isElement */.i.isElement(elm)));
            }, editor.editor) || editor.editor;
            const value = (0,helpers.css)(currentBpx, cssKey);
            return Boolean(value &&
                control.args &&
                normalize(control.args[0].toString()) ===
                    normalize(value.toString()));
        }
        return false;
    }
};
config/* Config.prototype.controls.font */.D.prototype.controls.font = {
    ...config/* Config.prototype.controls.fontsize */.D.prototype.controls.fontsize,
    command: 'fontname',
    list: {
        '': 'Default',
        'Helvetica,sans-serif': 'Helvetica',
        'Arial,Helvetica,sans-serif': 'Arial',
        'Georgia,serif': 'Georgia',
        'Impact,Charcoal,sans-serif': 'Impact',
        'Tahoma,Geneva,sans-serif': 'Tahoma',
        "'Times New Roman',Times,serif": 'Times New Roman',
        'Verdana,Geneva,sans-serif': 'Verdana'
    },
    childTemplate: (editor, key, value) => {
        return `<span style="font-family: ${key}!important;">${value}</span>`;
    },
    data: {
        cssRule: 'font-family',
        normalize: (v) => {
            return v
                .toLowerCase()
                .replace(/['"]+/g, '')
                .replace(/[^a-z0-9]+/g, ',');
        }
    },
    tooltip: 'Font family'
};
function font(editor) {
    editor
        .registerButton({
        name: 'font',
        group: 'font'
    })
        .registerButton({
        name: 'fontsize',
        group: 'font'
    });
    const callback = (command, second, third) => {
        switch (command) {
            case 'fontsize':
                editor.s.applyStyle({
                    fontSize: (0,helpers.normalizeSize)(third)
                });
                break;
            case 'fontname':
                editor.s.applyStyle({
                    fontFamily: third
                });
                break;
        }
        editor.e.fire('synchro');
        return false;
    };
    editor
        .registerCommand('fontsize', callback)
        .registerCommand('fontname', callback);
}

;// CONCATENATED MODULE: ./src/plugins/format-block.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.controls.paragraph */.D.prototype.controls.paragraph = {
    command: 'formatBlock',
    update(button) {
        const editor = button.j, control = button.control, current = editor.s.current();
        if (current && editor.o.textIcons) {
            const currentBox = dom/* Dom.closest */.i.closest(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor) || editor.editor, currentValue = currentBox.nodeName.toLowerCase(), list = control.list;
            if (button &&
                control.data &&
                control.data.currentValue !== currentValue &&
                list &&
                list[currentValue]) {
                if (editor.o.textIcons) {
                    button.state.text = currentValue;
                }
                else {
                    button.state.icon.name = currentValue;
                }
                control.data.currentValue = currentValue;
            }
        }
        return false;
    },
    exec: helpers.memorizeExec,
    data: {
        currentValue: 'left'
    },
    list: {
        p: 'Normal',
        h1: 'Heading 1',
        h2: 'Heading 2',
        h3: 'Heading 3',
        h4: 'Heading 4',
        blockquote: 'Quote'
    },
    isChildActive: (editor, control) => {
        const current = editor.s.current();
        if (current) {
            const currentBox = dom/* Dom.closest */.i.closest(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
            return Boolean(currentBox &&
                currentBox !== editor.editor &&
                control.args !== undefined &&
                currentBox.nodeName.toLowerCase() === control.args[0]);
        }
        return false;
    },
    isActive: (editor, control) => {
        const current = editor.s.current();
        if (current) {
            const currentBpx = dom/* Dom.closest */.i.closest(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
            return Boolean(currentBpx &&
                currentBpx !== editor.editor &&
                control.list !== undefined &&
                !dom/* Dom.isTag */.i.isTag(currentBpx, 'p') &&
                control.list[currentBpx.nodeName.toLowerCase()] !== undefined);
        }
        return false;
    },
    childTemplate: (e, key, value) => `<${key} style="margin:0;padding:0"><span>${e.i18n(value)}</span></${key}>`,
    tooltip: 'Insert format block'
};
function formatBlock(editor) {
    editor.registerButton({
        name: 'paragraph',
        group: 'font'
    });
    editor.registerCommand('formatblock', (command, second, third) => {
        editor.s.applyStyle(undefined, {
            element: third
        });
        editor.setEditorValue();
        return false;
    });
}

;// CONCATENATED MODULE: ./src/plugins/fullsize/fullsize.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.fullsize */.D.prototype.fullsize = false;
config/* Config.prototype.globalFullSize */.D.prototype.globalFullSize = true;
config/* Config.prototype.controls.fullsize */.D.prototype.controls.fullsize = {
    exec: (editor) => {
        editor.toggleFullSize();
    },
    update(button) {
        const editor = button.j, mode = editor.isFullSize ? 'shrink' : 'fullsize';
        button.state.activated = editor.isFullSize;
        if (editor.o.textIcons) {
            button.state.text = mode;
        }
        else {
            button.state.icon.name = mode;
        }
    },
    tooltip: 'Open editor in fullsize',
    mode: constants.MODE_SOURCE + constants.MODE_WYSIWYG
};
function fullsize(editor) {
    editor.registerButton({
        name: 'fullsize'
    });
    let isEnabled = false, oldHeight = 0, oldWidth = 0, wasToggled = false;
    const resize = () => {
        if (editor.events) {
            if (isEnabled) {
                oldHeight = (0,helpers.css)(editor.container, 'height', undefined, true);
                oldWidth = (0,helpers.css)(editor.container, 'width', undefined, true);
                (0,helpers.css)(editor.container, {
                    height: editor.ow.innerHeight,
                    width: editor.ow.innerWidth
                });
                wasToggled = true;
            }
            else if (wasToggled) {
                (0,helpers.css)(editor.container, {
                    height: oldHeight || 'auto',
                    width: oldWidth || 'auto'
                });
            }
        }
    }, toggle = (enable) => {
        var _a;
        if (!editor.container) {
            return;
        }
        if (enable === undefined) {
            enable = !editor.container.classList.contains('jodit_fullsize');
        }
        editor.setMod('fullsize', enable);
        editor.o.fullsize = enable;
        isEnabled = enable;
        editor.container.classList.toggle('jodit_fullsize', enable);
        if (editor.toolbar) {
            (0,helpers.isJoditObject)(editor) &&
                editor.toolbarContainer.appendChild(editor.toolbar.container);
            (0,helpers.css)(editor.toolbar.container, 'width', 'auto');
        }
        if (editor.o.globalFullSize) {
            let node = editor.container.parentNode;
            while (node && node.nodeType !== Node.DOCUMENT_NODE) {
                node.classList.toggle('jodit_fullsize-box_true', enable);
                node = node.parentNode;
            }
            resize();
        }
        (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('afterResize');
    };
    if (editor.o.globalFullSize) {
        editor.e.on(editor.ow, 'resize', resize);
    }
    editor.e
        .on('afterInit afterOpen', () => {
        var _a;
        editor.toggleFullSize((_a = editor === null || editor === void 0 ? void 0 : editor.options) === null || _a === void 0 ? void 0 : _a.fullsize);
    })
        .on('toggleFullSize', toggle)
        .on('beforeDestruct', () => {
        isEnabled && toggle(false);
    })
        .on('beforeDestruct', () => {
        editor.events && editor.e.off(editor.ow, 'resize', resize);
    });
}

;// CONCATENATED MODULE: ./src/plugins/keyboard/hotkeys.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.commandToHotkeys */.D.prototype.commandToHotkeys = {
    removeFormat: ['ctrl+shift+m', 'cmd+shift+m'],
    insertOrderedList: ['ctrl+shift+7', 'cmd+shift+7'],
    insertUnorderedList: ['ctrl+shift+8, cmd+shift+8'],
    selectall: ['ctrl+a', 'cmd+a']
};
class hotkeys extends Plugin {
    constructor() {
        super(...arguments);
        this.onKeyPress = (event) => {
            const special = this.specialKeys[event.which], character = (event.key || String.fromCharCode(event.which)).toLowerCase();
            const modif = [special || character];
            ['alt', 'ctrl', 'shift', 'meta'].forEach(specialKey => {
                if (event[specialKey + 'Key'] && special !== specialKey) {
                    modif.push(specialKey);
                }
            });
            return (0,helpers.normalizeKeyAliases)(modif.join('+'));
        };
        this.specialKeys = {
            8: 'backspace',
            9: 'tab',
            10: 'return',
            13: 'return',
            16: 'shift',
            17: 'ctrl',
            18: 'alt',
            19: 'pause',
            20: 'capslock',
            27: 'esc',
            32: 'space',
            33: 'pageup',
            34: 'pagedown',
            35: 'end',
            36: 'home',
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            45: 'insert',
            46: 'del',
            59: ';',
            61: '=',
            91: 'meta',
            96: '0',
            97: '1',
            98: '2',
            99: '3',
            100: '4',
            101: '5',
            102: '6',
            103: '7',
            104: '8',
            105: '9',
            106: '*',
            107: '+',
            109: '-',
            110: '.',
            111: '/',
            112: 'f1',
            113: 'f2',
            114: 'f3',
            115: 'f4',
            116: 'f5',
            117: 'f6',
            118: 'f7',
            119: 'f8',
            120: 'f9',
            121: 'f10',
            122: 'f11',
            123: 'f12',
            144: 'numlock',
            145: 'scroll',
            173: '-',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: "'"
        };
    }
    afterInit(editor) {
        (0,helpers.keys)(editor.o.commandToHotkeys, false).forEach((commandName) => {
            const shortcuts = editor.o.commandToHotkeys[commandName];
            if (shortcuts && ((0,helpers.isArray)(shortcuts) || (0,helpers.isString)(shortcuts))) {
                editor.registerHotkeyToCommand(shortcuts, commandName);
            }
        });
        let itIsHotkey = false;
        editor.e
            .off('.hotkeys')
            .on([editor.ow, editor.ew], 'keydown.hotkeys', (e) => {
            if (e.key === constants.KEY_ESC) {
                return this.j.e.fire('escape', e);
            }
        })
            .on('keydown.hotkeys', (event) => {
            const shortcut = this.onKeyPress(event), stop = {
                shouldStop: true
            };
            const resultOfFire = this.j.e.fire(shortcut + '.hotkey', event.type, stop);
            if (resultOfFire === false) {
                if (stop.shouldStop) {
                    itIsHotkey = true;
                    editor.e.stopPropagation('keydown');
                    return false;
                }
                else {
                    event.preventDefault();
                }
            }
        }, undefined, true)
            .on('keyup.hotkeys', () => {
            if (itIsHotkey) {
                itIsHotkey = false;
                editor.e.stopPropagation('keyup');
                return false;
            }
        }, undefined, true);
    }
    beforeDestruct(jodit) {
        if (jodit.events) {
            jodit.e.off('.hotkeys');
        }
    }
}

;// CONCATENATED MODULE: ./src/plugins/iframe.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.iframeBaseUrl */.D.prototype.iframeBaseUrl = '';
config/* Config.prototype.iframeTitle */.D.prototype.iframeTitle = 'Jodit Editor';
config/* Config.prototype.iframeDoctype */.D.prototype.iframeDoctype = '<!DOCTYPE html>';
config/* Config.prototype.iframeDefaultSrc */.D.prototype.iframeDefaultSrc = 'about:blank';
config/* Config.prototype.iframeStyle */.D.prototype.iframeStyle =
    'html{' +
        'margin:0;' +
        'padding:0;' +
        'min-height: 100%;' +
        '}' +
        'body{' +
        'box-sizing:border-box;' +
        'font-size:13px;' +
        'line-height:1.6;' +
        'padding:10px;' +
        'margin:0;' +
        'background:transparent;' +
        'color:#000;' +
        'position:' +
        'relative;' +
        'z-index:2;' +
        'user-select:auto;' +
        'margin:0px;' +
        'overflow:auto;' +
        'outline:none;' +
        '}' +
        'table{' +
        'width:100%;' +
        'border:none;' +
        'border-collapse:collapse;' +
        'empty-cells: show;' +
        'max-width: 100%;' +
        '}' +
        'th,td{' +
        'padding: 2px 5px;' +
        'border:1px solid #ccc;' +
        '-webkit-user-select:text;' +
        '-moz-user-select:text;' +
        '-ms-user-select:text;' +
        'user-select:text' +
        '}' +
        'p{' +
        'margin-top:0;' +
        '}' +
        '.jodit_editor .jodit_iframe_wrapper{' +
        'display: block;' +
        'clear: both;' +
        'user-select: none;' +
        'position: relative;' +
        '}' +
        '.jodit_editor .jodit_iframe_wrapper:after {' +
        'position:absolute;' +
        'content:"";' +
        'z-index:1;' +
        'top:0;' +
        'left:0;' +
        'right: 0;' +
        'bottom: 0;' +
        'cursor: pointer;' +
        'display: block;' +
        'background: rgba(0, 0, 0, 0);' +
        '} ' +
        '.jodit_disabled{' +
        'user-select: none;' +
        '-o-user-select: none;' +
        '-moz-user-select: none;' +
        '-khtml-user-select: none;' +
        '-webkit-user-select: none;' +
        '-ms-user-select: none' +
        '}';
config/* Config.prototype.iframeCSSLinks */.D.prototype.iframeCSSLinks = [];
config/* Config.prototype.editHTMLDocumentMode */.D.prototype.editHTMLDocumentMode = false;
function iframe(editor) {
    const opt = editor.options;
    editor.e
        .on('afterSetMode', () => {
        if (editor.isEditorMode()) {
            editor.s.focus();
        }
    })
        .on('generateDocumentStructure.iframe', (__doc, jodit) => {
        const doc = __doc ||
            jodit.iframe
                .contentWindow.document;
        doc.open();
        doc.write(opt.iframeDoctype +
            `<html dir="${opt.direction}" class="jodit" lang="${(0,helpers.defaultLanguage)(opt.language)}">` +
            '<head>' +
            `<title>${opt.iframeTitle}</title>` +
            (opt.iframeBaseUrl
                ? `<base href="${opt.iframeBaseUrl}"/>`
                : '') +
            '</head>' +
            '<body class="jodit-wysiwyg"></body>' +
            '</html>');
        doc.close();
        if (opt.iframeCSSLinks) {
            opt.iframeCSSLinks.forEach(href => {
                const link = doc.createElement('link');
                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('href', href);
                doc.head && doc.head.appendChild(link);
            });
        }
        if (opt.iframeStyle) {
            const style = doc.createElement('style');
            style.innerHTML = opt.iframeStyle;
            doc.head && doc.head.appendChild(style);
        }
    })
        .on('createEditor', () => {
        if (!opt.iframe) {
            return;
        }
        const iframe = editor.c.element('iframe');
        iframe.style.display = 'block';
        iframe.src = 'about:blank';
        iframe.className = 'jodit-wysiwyg_iframe';
        iframe.setAttribute('allowtransparency', 'true');
        iframe.setAttribute('tabindex', opt.tabIndex.toString());
        iframe.setAttribute('frameborder', '0');
        editor.workplace.appendChild(iframe);
        editor.iframe = iframe;
        const result = editor.e.fire('generateDocumentStructure.iframe', null, editor);
        const init = () => {
            if (!editor.iframe) {
                return;
            }
            const doc = editor.iframe.contentWindow.document;
            editor.editorWindow = editor.iframe.contentWindow;
            const docMode = opt.editHTMLDocumentMode;
            const toggleEditable = () => {
                (0,helpers.attr)(doc.body, 'contenteditable', (editor.getMode() !== constants.MODE_SOURCE &&
                    !editor.getReadOnly()) ||
                    null);
            };
            const clearMarkers = (html) => {
                const bodyReg = /<body.*<\/body>/im, bodyMarker = '{%%BODY%%}', body = bodyReg.exec(html);
                if (body) {
                    html = html
                        .replace(bodyReg, bodyMarker)
                        .replace(/<span([^>]*?)>(.*?)<\/span>/gim, '')
                        .replace(/&lt;span([^&]*?)&gt;(.*?)&lt;\/span&gt;/gim, '')
                        .replace(bodyMarker, body[0]
                        .replace(/(<body[^>]+?)min-height["'\s]*:[\s"']*[0-9]+(px|%)/im, '$1')
                        .replace(/(<body[^>]+?)([\s]*["'])?contenteditable["'\s]*=[\s"']*true["']?/im, '$1')
                        .replace(/<(style|script|span)[^>]+jodit[^>]+>.*?<\/\1>/g, ''))
                        .replace(/(class\s*=\s*)(['"])([^"']*)(jodit-wysiwyg|jodit)([^"']*\2)/g, '$1$2$3$5')
                        .replace(/(<[^<]+?)\sclass="[\s]*"/gim, '$1')
                        .replace(/(<[^<]+?)\sstyle="[\s;]*"/gim, '$1')
                        .replace(/(<[^<]+?)\sdir="[\s]*"/gim, '$1');
                }
                return html;
            };
            if (docMode) {
                const tag = editor.element.tagName;
                if (tag !== 'TEXTAREA' && tag !== 'INPUT') {
                    throw (0,helpers.error)('If enable `editHTMLDocumentMode` - source element should be INPUT or TEXTAREA');
                }
                editor.e
                    .on('beforeGetNativeEditorValue', () => clearMarkers(editor.o.iframeDoctype +
                    doc.documentElement.outerHTML))
                    .on('beforeSetNativeEditorValue', (value) => {
                    if (editor.isLocked) {
                        return false;
                    }
                    if (/<(html|body)/i.test(value)) {
                        const old = doc.documentElement.outerHTML;
                        if (clearMarkers(old) !==
                            clearMarkers(value)) {
                            doc.open();
                            doc.write(editor.o.iframeDoctype +
                                clearMarkers(value));
                            doc.close();
                            editor.editor = doc.body;
                            toggleEditable();
                            editor.e.fire('prepareWYSIWYGEditor');
                        }
                    }
                    else {
                        doc.body.innerHTML = value;
                    }
                    return true;
                });
            }
            editor.editor = doc.body;
            editor.e.on('afterSetMode afterInit afterAddPlace', toggleEditable);
            if (opt.height === 'auto') {
                doc.documentElement &&
                    (doc.documentElement.style.overflowY = 'hidden');
                const resizeIframe = editor.async.throttle(() => {
                    if (editor.editor &&
                        editor.iframe &&
                        opt.height === 'auto') {
                        (0,helpers.css)(editor.iframe, 'height', editor.editor.offsetHeight);
                    }
                }, editor.defaultTimeout / 2);
                editor.e
                    .on('change afterInit afterSetMode resize', resizeIframe)
                    .on([editor.iframe, editor.ew, doc.documentElement], 'load', resizeIframe)
                    .on(doc, 'readystatechange DOMContentLoaded', resizeIframe);
            }
            if (doc.documentElement) {
                editor.e
                    .on(doc.documentElement, 'mousedown touchend', () => {
                    if (!editor.s.isFocused()) {
                        editor.s.focus();
                        if (editor.editor === doc.body) {
                            editor.s.setCursorIn(doc.body);
                        }
                    }
                })
                    .on(editor.ew, 'mousedown touchstart keydown keyup touchend click mouseup mousemove scroll', (e) => {
                    var _a;
                    (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire(editor.ow, e);
                });
            }
            return false;
        };
        return (0,helpers.callPromise)(result, init);
    });
}

;// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/form.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function templates_form_form(editor) {
    const { showPreview, editSize } = editor.o.image, gi = ui/* Icon.get.bind */.JO.get.bind(ui/* Icon */.JO);
    return editor.c.fromHTML(`<form class="jodit-properties">
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-2-5 jodit_col-xs-5-5">
				<div class="jodit-properties_view_box">
					<div style="${!showPreview ? 'display:none' : ''}" class="jodit-properties_image_view">
						<img data-ref="imageViewSrc" src="" alt=""/>
					</div>
					<div style="${!editSize ? 'display:none' : ''}" class="jodit-form__group jodit-properties_image_sizes">
						<input data-ref="imageWidth" type="text" class="jodit-input"/>
						<a data-ref="lockSize" class="jodit-properties__lock">${gi('lock')}</a>
						<input data-ref="imageHeight" type="text" class="imageHeight jodit-input"/>
					</div>
				</div>
			</div>
			<div data-ref="tabsBox" class="jodit_col-lg-3-5 jodit_col-xs-5-5"></div>
		</div>
	</form>`);
}

;// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/mainTab.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function mainTab(editor) {
    const opt = editor.o, i18n = editor.i18n.bind(editor), gi = ui/* Icon.get.bind */.JO.get.bind(ui/* Icon */.JO), hasFbUrl = opt.filebrowser.ajax.url || opt.uploader.url, hasEditor = opt.image.useImageEditor;
    return editor.c.fromHTML(`<div style="${!opt.image.editSrc ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Src')}</label>
			<div class="jodit-input_group">
				<input data-ref="imageSrc" class="jodit-input" type="text"/>
				<div
					class="jodit-input_group-buttons"
					style="${hasFbUrl ? '' : 'display: none'}"
				>
						<a
							data-ref="changeImage"
							class="jodit-button"
						>${gi('image')}</a>
						<a
							data-ref="editImage"
							class="jodit-button"
							style="${hasEditor ? '' : 'display: none'}"
						>${gi('crop')}</a>
				</div>
			</div>
		</div>
		<div style="${!opt.image.editTitle ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Title')}</label>
			<input data-ref="imageTitle" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editAlt ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Alternative')}</label>
			<input data-ref="imageAlt" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editLink ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Link')}</label>
			<input data-ref="imageLink" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editLink ? 'display:none' : ''}" class="jodit-form__group">
			<label class="jodit_vertical_middle">
				<input data-ref="imageLinkOpenInNewTab" type="checkbox" class="jodit-checkbox"/>
				<span>${i18n('Open link in new tab')}</span>
			</label>
		</div>`);
}

;// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/positionTab.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function positionTab(editor) {
    const opt = editor.o, i18n = editor.i18n.bind(editor), gi = ui/* Icon.get.bind */.JO.get.bind(ui/* Icon */.JO);
    return editor.c.fromHTML(`<div style="${!opt.image.editMargins ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Margins')}</label>
			<div class="jodit-grid jodit_vertical_middle">
				<input class="jodit_col-lg-1-5 jodit-input" data-ref="marginTop" type="text" placeholder="${i18n('top')}"/>
				<a style="text-align: center;" data-ref="lockMargin" class="jodit-properties__lock jodit_col-lg-1-5">${gi('lock')}</a>
				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginRight" type="text" placeholder="${i18n('right')}"/>
				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginBottom" type="text" placeholder="${i18n('bottom')}"/>
				<input disabled="true" class="jodit_col-lg-1-5 jodit-input" data-ref="marginLeft" type="text" placeholder="${i18n('left')}"/>
			</div>
		</div>
		<div style="${!opt.image.editStyle ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Styles')}</label>
			<input data-ref="style" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editClass ? 'display:none' : ''}" class="jodit-form__group">
			<label>${i18n('Classes')}</label>
			<input data-ref="classes" type="text" class="jodit-input"/>
		</div>
		<div style="${!opt.image.editId ? 'display:none' : ''}" class="jodit-form__group">
			<label>Id</label>
			<input data-ref="id" type="text" class="jodit-input"/>
		</div>
		<div
			style="${!opt.image.editBorderRadius ? 'display:none' : ''}"
			class="jodit-form__group"
		>
			<label>${i18n('Border radius')}</label>
				<input data-ref="borderRadius" type="number" class="jodit-input"/>
		</div>
		<div
			style="${!opt.image.editAlign ? 'display:none' : ''}"
			class="jodit-form__group"
		>
			<label>${i18n('Align')}</label>
			<select data-ref="align" class="jodit-select">
				<option value="">${i18n('--Not Set--')}</option>
				<option value="left">${i18n('Left')}</option>
				<option value="center">${i18n('Center')}</option>
				<option value="right">${i18n('Right')}</option>
			</select>
		</div>`);
}

;// CONCATENATED MODULE: ./src/plugins/image/image-properties/templates/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




// EXTERNAL MODULE: ./src/plugins/image/helpers.ts
var image_helpers = __webpack_require__(44);
;// CONCATENATED MODULE: ./src/plugins/image/image-properties/image-properties.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */











config/* Config.prototype.image */.D.prototype.image = {
    dialogWidth: 600,
    openOnDblClick: true,
    editSrc: true,
    useImageEditor: true,
    editTitle: true,
    editAlt: true,
    editLink: true,
    editSize: true,
    editBorderRadius: true,
    editMargins: true,
    editClass: true,
    editStyle: true,
    editId: true,
    editAlign: true,
    showPreview: true,
    selectImageAfterClose: true
};
const normalSizeToString = (value) => {
    value = (0,helpers.trim)(value);
    return /^[0-9]+$/.test(value) ? value + 'px' : value;
};
const normalSizeFromString = (value) => {
    return /^[-+]?[0-9.]+px$/.test(value.toString())
        ? parseFloat(value.toString())
        : value;
};
class imageProperties extends Plugin {
    constructor() {
        super(...arguments);
        this.state = {
            image: new Image(),
            get ratio() {
                return this.image.naturalWidth / this.image.naturalHeight || 1;
            },
            sizeIsLocked: true,
            marginIsLocked: true
        };
    }
    onChangeMarginIsLocked() {
        if (!this.form) {
            return;
        }
        const { marginRight, marginBottom, marginLeft, lockMargin } = (0,helpers.refs)(this.form);
        [marginRight, marginBottom, marginLeft].forEach(elm => {
            (0,helpers.attr)(elm, 'disabled', this.state.marginIsLocked || null);
        });
        lockMargin.innerHTML = ui/* Icon.get */.JO.get(this.state.marginIsLocked ? 'lock' : 'unlock');
    }
    onChangeSizeIsLocked() {
        if (!this.form) {
            return;
        }
        const { lockSize, imageWidth } = (0,helpers.refs)(this.form);
        lockSize.innerHTML = ui/* Icon.get */.JO.get(this.state.sizeIsLocked ? 'lock' : 'unlock');
        lockSize.classList.remove('jodit-properties__lock');
        lockSize.classList.remove('jodit-properties__unlock');
        lockSize.classList.add(this.state.sizeIsLocked
            ? 'jodit-properties__lock'
            : 'jodit-properties__unlock');
        this.j.e.fire(imageWidth, 'change');
    }
    open() {
        this.makeForm();
        this.j.e.fire('hidePopup');
        (0,helpers.markOwner)(this.j, this.dialog.container);
        this.state.marginIsLocked = true;
        this.state.sizeIsLocked = true;
        this.updateValues();
        this.dialog.open().setModal(true).setPosition();
        return false;
    }
    makeForm() {
        if (this.dialog) {
            return;
        }
        this.dialog = new Dialog({
            fullsize: this.j.o.fullsize,
            globalFullSize: this.j.o.globalFullSize,
            theme: this.j.o.theme,
            language: this.j.o.language,
            minWidth: Math.min(400, screen.width),
            minHeight: 400,
            buttons: ['fullsize', 'dialog.close']
        });
        const editor = this.j, opt = editor.o, i18n = editor.i18n.bind(editor), buttons = {
            check: (0,ui_button/* Button */.zx)(editor, 'ok', 'Apply'),
            remove: (0,ui_button/* Button */.zx)(editor, 'bin', 'Delete')
        };
        editor.e.on(this.dialog, 'afterClose', () => {
            if (this.state.image.parentNode &&
                opt.image.selectImageAfterClose) {
                editor.s.select(this.state.image);
            }
        });
        buttons.remove.onAction(() => {
            editor.s.removeNode(this.state.image);
            this.dialog.close();
        });
        const { dialog } = this;
        dialog.setHeader(i18n('Image properties'));
        const mainForm = templates_form_form(editor);
        this.form = mainForm;
        dialog.setContent(mainForm);
        const { tabsBox } = (0,helpers.refs)(this.form);
        if (tabsBox) {
            tabsBox.appendChild((0,widget/* TabsWidget */.IL)(editor, [
                { name: 'Image', content: mainTab(editor) },
                { name: 'Advanced', content: positionTab(editor) }
            ]));
        }
        buttons.check.onAction(this.onApply);
        const { changeImage, editImage } = (0,helpers.refs)(this.form);
        editor.e.on(changeImage, 'click', this.openImagePopup);
        if (opt.image.useImageEditor) {
            editor.e.on(editImage, 'click', this.openImageEditor);
        }
        const { lockSize, lockMargin, imageWidth, imageHeight } = (0,helpers.refs)(mainForm);
        if (lockSize) {
            editor.e.on(lockSize, 'click', () => {
                this.state.sizeIsLocked = !this.state.sizeIsLocked;
            });
        }
        editor.e.on(lockMargin, 'click', (e) => {
            this.state.marginIsLocked = !this.state.marginIsLocked;
            e.preventDefault();
        });
        const changeSizes = (event) => {
            if (!(0,helpers.isNumeric)(imageWidth.value) || !(0,helpers.isNumeric)(imageHeight.value)) {
                return;
            }
            const w = parseFloat(imageWidth.value), h = parseFloat(imageHeight.value);
            if (event.target === imageWidth) {
                imageHeight.value = Math.round(w / this.state.ratio).toString();
            }
            else {
                imageWidth.value = Math.round(h * this.state.ratio).toString();
            }
        };
        editor.e.on([imageWidth, imageHeight], 'change keydown mousedown paste', (event) => {
            if (!this.state.sizeIsLocked) {
                return;
            }
            editor.async.setTimeout(changeSizes.bind(this, event), {
                timeout: editor.defaultTimeout,
                label: 'image-properties-changeSize'
            });
        });
        dialog.setFooter([buttons.remove, buttons.check]);
        dialog.setSize(this.j.o.image.dialogWidth);
    }
    updateValues() {
        const opt = this.j.o;
        const { image } = this.state;
        const { marginTop, marginRight, marginBottom, marginLeft, lockMargin, imageSrc, id, classes, align, style, imageTitle, imageAlt, borderRadius, imageLink, imageWidth, imageHeight, imageLinkOpenInNewTab, imageViewSrc, lockSize } = (0,helpers.refs)(this.form);
        const updateLock = () => {
            lockMargin.checked = this.state.marginIsLocked;
            lockSize.checked = this.state.sizeIsLocked;
        }, updateAlign = () => {
            if (image.style.cssFloat &&
                ['left', 'right'].indexOf(image.style.cssFloat.toLowerCase()) !== -1) {
                align.value = (0,helpers.css)(image, 'float');
            }
            else {
                if ((0,helpers.css)(image, 'display') === 'block' &&
                    image.style.marginLeft === 'auto' &&
                    image.style.marginRight === 'auto') {
                    align.value = 'center';
                }
            }
        }, updateBorderRadius = () => {
            borderRadius.value = (parseInt(image.style.borderRadius || '0', 10) || '0').toString();
        }, updateId = () => {
            id.value = (0,helpers.attr)(image, 'id') || '';
        }, updateStyle = () => {
            style.value = (0,helpers.attr)(image, 'style') || '';
        }, updateClasses = () => {
            classes.value = ((0,helpers.attr)(image, 'class') || '').replace(/jodit_focused_image[\s]*/, '');
        }, updateMargins = () => {
            if (!opt.image.editMargins) {
                return;
            }
            let equal = true, wasEmptyField = false;
            [marginTop, marginRight, marginBottom, marginLeft].forEach(elm => {
                const id = (0,helpers.attr)(elm, 'data-ref') || '';
                let value = image.style.getPropertyValue((0,helpers.kebabCase)(id));
                if (!value) {
                    wasEmptyField = true;
                    elm.value = '';
                    return;
                }
                if (/^[0-9]+(px)?$/.test(value)) {
                    value = parseInt(value, 10);
                }
                elm.value = value.toString() || '';
                if ((wasEmptyField && elm.value) ||
                    (equal &&
                        id !== 'marginTop' &&
                        elm.value !== marginTop.value)) {
                    equal = false;
                }
            });
            this.state.marginIsLocked = equal;
        }, updateSizes = () => {
            const width = (0,helpers.attr)(image, 'width') ||
                (0,helpers.css)(image, 'width', undefined, true) ||
                false, height = (0,helpers.attr)(image, 'height') ||
                (0,helpers.css)(image, 'height', undefined, true) ||
                false;
            imageWidth.value =
                width !== false
                    ? normalSizeFromString(width).toString()
                    : image.offsetWidth.toString();
            imageHeight.value =
                height !== false
                    ? normalSizeFromString(height).toString()
                    : image.offsetHeight.toString();
            this.state.sizeIsLocked = (() => {
                if (!(0,helpers.isNumeric)(imageWidth.value) ||
                    !(0,helpers.isNumeric)(imageHeight.value)) {
                    return false;
                }
                const w = parseFloat(imageWidth.value), h = parseFloat(imageHeight.value);
                return Math.abs(w - h * this.state.ratio) < 1;
            })();
        }, updateText = () => {
            imageTitle.value = (0,helpers.attr)(image, 'title') || '';
            imageAlt.value = (0,helpers.attr)(image, 'alt') || '';
            const a = dom/* Dom.closest */.i.closest(image, 'a', this.j.editor);
            if (a) {
                imageLink.value = (0,helpers.attr)(a, 'href') || '';
                imageLinkOpenInNewTab.checked =
                    (0,helpers.attr)(a, 'target') === '_blank';
            }
            else {
                imageLink.value = '';
                imageLinkOpenInNewTab.checked = false;
            }
        }, updateSrc = () => {
            imageSrc.value = (0,helpers.attr)(image, 'src') || '';
            if (imageViewSrc) {
                (0,helpers.attr)(imageViewSrc, 'src', (0,helpers.attr)(image, 'src') || '');
            }
        };
        updateLock();
        updateSrc();
        updateText();
        updateSizes();
        updateMargins();
        updateClasses();
        updateId();
        updateBorderRadius();
        updateAlign();
        updateStyle();
    }
    onApply() {
        const { style, imageSrc, borderRadius, imageTitle, imageAlt, imageLink, imageWidth, imageHeight, marginTop, marginRight, marginBottom, marginLeft, imageLinkOpenInNewTab, align, classes, id } = (0,helpers.refs)(this.form);
        const opt = this.j.o;
        const { image } = this.state;
        if (opt.image.editStyle) {
            (0,helpers.attr)(image, 'style', style.value || null);
        }
        if (imageSrc.value) {
            (0,helpers.attr)(image, 'src', imageSrc.value);
        }
        else {
            dom/* Dom.safeRemove */.i.safeRemove(image);
            this.dialog.close();
            return;
        }
        if (borderRadius.value !== '0' && /^[0-9]+$/.test(borderRadius.value)) {
            image.style.borderRadius = borderRadius.value + 'px';
        }
        else {
            image.style.borderRadius = '';
        }
        (0,helpers.attr)(image, 'title', imageTitle.value || null);
        (0,helpers.attr)(image, 'alt', imageAlt.value || null);
        let link = dom/* Dom.closest */.i.closest(image, 'a', this.j.editor);
        if (imageLink.value) {
            if (!link) {
                link = dom/* Dom.wrap */.i.wrap(image, 'a', this.j.createInside);
            }
            (0,helpers.attr)(link, 'href', imageLink.value);
            (0,helpers.attr)(link, 'target', imageLinkOpenInNewTab.checked ? '_blank' : null);
        }
        else {
            if (link && link.parentNode) {
                link.parentNode.replaceChild(image, link);
            }
        }
        if (imageWidth.value !== image.offsetWidth.toString() ||
            imageHeight.value !== image.offsetHeight.toString()) {
            (0,helpers.css)(image, {
                width: (0,helpers.trim)(imageWidth.value)
                    ? normalSizeToString(imageWidth.value)
                    : null,
                height: (0,helpers.trim)(imageHeight.value)
                    ? normalSizeToString(imageHeight.value)
                    : null
            });
            (0,helpers.attr)(image, 'width', null);
            (0,helpers.attr)(image, 'height', null);
        }
        const margins = [marginTop, marginRight, marginBottom, marginLeft];
        if (opt.image.editMargins) {
            if (!this.state.marginIsLocked) {
                margins.forEach((margin) => {
                    const side = (0,helpers.attr)(margin, 'data-ref') || '';
                    (0,helpers.css)(image, side, normalSizeToString(margin.value));
                });
            }
            else {
                (0,helpers.css)(image, 'margin', normalSizeToString(marginTop.value));
            }
        }
        if (opt.image.editClass) {
            (0,helpers.attr)(image, 'class', classes.value || null);
        }
        if (opt.image.editId) {
            (0,helpers.attr)(image, 'id', id.value || null);
        }
        if (opt.image.editAlign) {
            (0,image_helpers/* hAlignElement */.z)(image, align.value);
        }
        this.j.setEditorValue();
        this.dialog.close();
    }
    openImageEditor() {
        const url = (0,helpers.attr)(this.state.image, 'src') || '', a = this.j.c.element('a'), loadExternal = () => {
            if (a.host !== location.host) {
                Confirm(this.j.i18n('You can only edit your own images. Download this image on the host?'), (yes) => {
                    if (yes && this.j.uploader) {
                        this.j.uploader.uploadRemoteImage(a.href.toString(), (resp) => {
                            Alert(this.j.i18n('The image has been successfully uploaded to the host!'), () => {
                                if ((0,helpers.isString)(resp.newfilename)) {
                                    (0,helpers.attr)(this.state.image, 'src', resp.baseurl +
                                        resp.newfilename);
                                    this.updateValues();
                                }
                            }).bindDestruct(this.j);
                        }, (error) => {
                            Alert(this.j.i18n('There was an error loading %s', error.message)).bindDestruct(this.j);
                        });
                    }
                }).bindDestruct(this.j);
                return;
            }
        };
        a.href = url;
        this.j.filebrowser.dataProvider
            .getPathByUrl(a.href.toString())
            .then(resp => {
            openImageEditor.call(this.j.filebrowser, a.href, resp.name, resp.path, resp.source, () => {
                const timestamp = new Date().getTime();
                (0,helpers.attr)(this.state.image, 'src', url +
                    (url.indexOf('?') !== -1 ? '' : '?') +
                    '&_tmp=' +
                    timestamp.toString());
                this.updateValues();
            }, error => {
                Alert(error.message).bindDestruct(this.j);
            });
        })
            .catch(error => {
            Alert(error.message, loadExternal).bindDestruct(this.j);
        });
    }
    openImagePopup(event) {
        const popup = new ui/* Popup */.GI(this.j), { changeImage } = (0,helpers.refs)(this.form);
        popup.setZIndex(this.dialog.getZIndex() + 1);
        popup
            .setContent((0,widget/* FileSelectorWidget */.ov)(this.j, {
            upload: (data) => {
                if (data.files && data.files.length) {
                    (0,helpers.attr)(this.state.image, 'src', data.baseurl + data.files[0]);
                }
                this.updateValues();
                popup.close();
            },
            filebrowser: (data) => {
                if (data &&
                    (0,helpers.isArray)(data.files) &&
                    data.files.length) {
                    (0,helpers.attr)(this.state.image, 'src', data.files[0]);
                    popup.close();
                    this.updateValues();
                }
            }
        }, this.state.image, popup.close))
            .open(() => (0,helpers.position)(changeImage));
        event.stopPropagation();
    }
    afterInit(editor) {
        const self = this;
        editor.e
            .on('afterConstructor changePlace', () => {
            editor.e
                .off(editor.editor, '.imageproperties')
                .on(editor.editor, 'dblclick.imageproperties', (e) => {
                const image = e.target;
                if (!dom/* Dom.isTag */.i.isTag(image, 'img')) {
                    return;
                }
                if (editor.o.image.openOnDblClick) {
                    self.state.image = image;
                    if (!editor.o.readonly) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                        self.open();
                    }
                }
                else {
                    e.stopImmediatePropagation();
                    editor.s.select(image);
                }
            });
        })
            .on('openImageProperties.imageproperties', (image) => {
            this.state.image = image;
            this.open();
        });
    }
    beforeDestruct(editor) {
        this.dialog && this.dialog.destruct();
        editor.e.off(editor.editor, '.imageproperties').off('.imageproperties');
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.marginIsLocked')
], imageProperties.prototype, "onChangeMarginIsLocked", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('state.sizeIsLocked')
], imageProperties.prototype, "onChangeSizeIsLocked", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], imageProperties.prototype, "onApply", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], imageProperties.prototype, "openImageEditor", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], imageProperties.prototype, "openImagePopup", null);

;// CONCATENATED MODULE: ./src/plugins/image/image-processor.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

const JODIT_IMAGE_PROCESSOR_BINDED = '__jodit_imageprocessor_binded';
function imageProcessor(editor) {
    editor.e.on('change afterInit changePlace', editor.async.debounce(() => {
        if (editor.editor) {
            (0,helpers.$$)('img', editor.editor).forEach((elm) => {
                if (!elm[JODIT_IMAGE_PROCESSOR_BINDED]) {
                    elm[JODIT_IMAGE_PROCESSOR_BINDED] = true;
                    if (!elm.complete) {
                        elm.addEventListener('load', function ElementOnLoad() {
                            var _a;
                            !editor.isInDestruct &&
                                ((_a = editor.e) === null || _a === void 0 ? void 0 : _a.fire('resize'));
                            elm.removeEventListener('load', ElementOnLoad);
                        });
                    }
                    editor.e.on(elm, 'mousedown touchstart', () => {
                        editor.s.select(elm);
                    });
                }
            });
        }
    }, editor.defaultTimeout));
}

;// CONCATENATED MODULE: ./src/plugins/image/image.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.controls.image */.D.prototype.controls.image = {
    popup: (editor, current, self, close) => {
        let sourceImage = null;
        if (current &&
            !dom/* Dom.isText */.i.isText(current) &&
            dom/* Dom.isHTMLElement */.i.isHTMLElement(current, editor.ew) &&
            (dom/* Dom.isTag */.i.isTag(current, 'img') || (0,helpers.$$)('img', current).length)) {
            sourceImage = dom/* Dom.isTag */.i.isTag(current, 'img')
                ? current
                : (0,helpers.$$)('img', current)[0];
        }
        editor.s.save();
        return (0,widget/* FileSelectorWidget */.ov)(editor, {
            filebrowser: (data) => {
                editor.s.restore();
                data.files &&
                    data.files.forEach(file => editor.s.insertImage(data.baseurl + file, null, editor.o.imageDefaultWidth));
                close();
            },
            upload: true,
            url: async (url, text) => {
                editor.s.restore();
                const image = sourceImage || editor.createInside.element('img');
                image.setAttribute('src', url);
                image.setAttribute('alt', text);
                if (!sourceImage) {
                    await editor.s.insertImage(image, null, editor.o.imageDefaultWidth);
                }
                close();
            }
        }, sourceImage, close);
    },
    tags: ['img'],
    tooltip: 'Insert Image'
};
function image_image(editor) {
    editor.registerButton({
        name: 'image',
        group: 'media'
    });
}

;// CONCATENATED MODULE: ./src/plugins/image/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/plugins/indent.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.controls.indent */.D.prototype.controls.indent = {
    tooltip: 'Increase Indent'
};
const getKey = (direction) => direction === 'rtl' ? 'marginRight' : 'marginLeft';
config/* Config.prototype.controls.outdent */.D.prototype.controls.outdent = {
    isDisabled: (editor) => {
        const current = editor.s.current();
        if (current) {
            const currentBox = dom/* Dom.closest */.i.closest(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
            const key = getKey(editor.o.direction);
            if (currentBox && currentBox.style && currentBox.style[key]) {
                return parseInt(currentBox.style[key], 10) <= 0;
            }
        }
        return true;
    },
    tooltip: 'Decrease Indent'
};
config/* Config.prototype.indentMargin */.D.prototype.indentMargin = 10;
function indent(editor) {
    const key = getKey(editor.o.direction);
    editor
        .registerButton({
        name: 'indent',
        group: 'indent'
    })
        .registerButton({
        name: 'outdent',
        group: 'indent'
    });
    const callback = (command) => {
        const indentedBoxes = [];
        editor.s.eachSelection((current) => {
            editor.s.save();
            let currentBox = current
                ? dom/* Dom.up */.i.up(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor)
                : false;
            const enter = editor.o.enter;
            if (!currentBox && current) {
                currentBox = dom/* Dom.wrapInline */.i.wrapInline(current, enter !== constants.BR ? enter : constants.PARAGRAPH, editor);
            }
            if (!currentBox) {
                editor.s.restore();
                return false;
            }
            const alreadyIndented = indentedBoxes.indexOf(currentBox) !== -1;
            if (currentBox && currentBox.style && !alreadyIndented) {
                indentedBoxes.push(currentBox);
                let value = currentBox.style[key]
                    ? parseInt(currentBox.style[key], 10)
                    : 0;
                value +=
                    editor.o.indentMargin * (command === 'outdent' ? -1 : 1);
                currentBox.style[key] = value > 0 ? value + 'px' : '';
                if (!(0,helpers.attr)(currentBox, 'style')) {
                    currentBox.removeAttribute('style');
                }
            }
            editor.s.restore();
        });
        editor.setEditorValue();
        return false;
    };
    editor.registerCommand('indent', {
        exec: callback,
        hotkeys: ['ctrl+]', 'cmd+]']
    });
    editor.registerCommand('outdent', {
        exec: callback,
        hotkeys: ['ctrl+[', 'cmd+[']
    });
}

;// CONCATENATED MODULE: ./src/plugins/insert/hr.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config/* Config.prototype.controls.hr */.D.prototype.controls.hr = {
    command: 'insertHorizontalRule',
    tags: ['hr'],
    tooltip: 'Insert Horizontal Line'
};
function hr(editor) {
    editor.registerButton({
        name: 'hr',
        group: 'insert'
    });
    editor.registerCommand('insertHorizontalRule', () => {
        const elm = editor.createInside.element('hr');
        editor.s.insertNode(elm, false, false);
        const block = dom/* Dom.closest */.i.closest(elm.parentElement, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
        if (block && dom/* Dom.isEmpty */.i.isEmpty(block) && block !== editor.editor) {
            dom/* Dom.after */.i.after(block, elm);
            dom/* Dom.safeRemove */.i.safeRemove(block);
        }
        let p = dom/* Dom.next */.i.next(elm, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor, false);
        if (!p) {
            p = editor.createInside.element(editor.o.enter);
            dom/* Dom.after */.i.after(elm, p);
        }
        editor.s.setCursorIn(p);
        return false;
    });
}

;// CONCATENATED MODULE: ./src/plugins/insert/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


;// CONCATENATED MODULE: ./src/plugins/inline-popup/config/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

config/* Config.prototype.toolbarInline */.D.prototype.toolbarInline = true;
config/* Config.prototype.toolbarInlineForSelection */.D.prototype.toolbarInlineForSelection = false;
config/* Config.prototype.toolbarInlineDisableFor */.D.prototype.toolbarInlineDisableFor = [];
config/* Config.prototype.toolbarInlineDisabledButtons */.D.prototype.toolbarInlineDisabledButtons = ['source'];
config/* Config.prototype.popup */.D.prototype.popup = {
    a: __webpack_require__(45)/* .default */ .Z,
    img: __webpack_require__(46)/* .default */ .Z,
    cells: __webpack_require__(47)/* .default */ .Z,
    jodit: __webpack_require__(48)/* .default */ .Z,
    'jodit-media': __webpack_require__(48)/* .default */ .Z,
    selection: [
        'bold',
        'underline',
        'italic',
        'ul',
        'ol',
        '\n',
        'outdent',
        'indent',
        'fontsize',
        'brush',
        'cut',
        '\n',
        'paragraph',
        'link',
        'align',
        'dots'
    ]
};

;// CONCATENATED MODULE: ./src/plugins/inline-popup/inline-popup.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class inlinePopup extends Plugin {
    constructor() {
        super(...arguments);
        this.requires = ['select'];
        this.type = null;
        this.popup = new ui_popup/* Popup */.G(this.jodit, false);
        this.toolbar = makeCollection(this.jodit, this.popup);
        this.snapRange = null;
        this.elmsList = (0,helpers.keys)(this.j.o.popup, false).filter(s => !this.isExcludedTarget(s));
    }
    onClick(node) {
        const elements = this.elmsList, target = dom/* Dom.isTag */.i.isTag(node, 'img')
            ? node
            : dom/* Dom.closest */.i.closest(node, elements, this.j.editor);
        if (target && this.canShowPopupForType(target.nodeName.toLowerCase())) {
            this.showPopup(() => (0,helpers.position)(target, this.j), target.nodeName.toLowerCase(), target);
            return false;
        }
    }
    showPopup(rect, type, target) {
        type = type.toLowerCase();
        if (!this.canShowPopupForType(type)) {
            return false;
        }
        if (this.type !== type || target !== this.previousTarget) {
            this.previousTarget = target;
            const data = this.j.o.popup[type];
            let content;
            if ((0,helpers.isFunction)(data)) {
                content = data(this.j, target, this.popup.close);
            }
            else {
                content = data;
            }
            if ((0,helpers.isArray)(content)) {
                this.toolbar.build(content, target);
                this.toolbar.buttonSize = this.j.o.toolbarButtonSize;
                content = this.toolbar.container;
            }
            this.popup.setContent(content);
            this.type = type;
        }
        this.popup.open(rect);
        return true;
    }
    hidePopup(type) {
        if (!(0,helpers.isString)(type) || type === this.type) {
            this.popup.close();
        }
    }
    onOutsideClick(e) {
        this.popup.close();
    }
    canShowPopupForType(type) {
        const data = this.j.o.popup[type.toLowerCase()];
        if (this.j.o.readonly || !this.j.o.toolbarInline || !data) {
            return false;
        }
        return !this.isExcludedTarget(type);
    }
    isExcludedTarget(type) {
        return (0,helpers.splitArray)(this.j.o.toolbarInlineDisableFor)
            .map(a => a.toLowerCase())
            .includes(type.toLowerCase());
    }
    afterInit(jodit) {
        this.j.e
            .on('getDiffButtons.mobile', (toolbar) => {
            if (this.toolbar === toolbar) {
                const names = this.toolbar.getButtonsNames();
                return (0,helpers.toArray)(jodit.registeredButtons)
                    .filter(btn => !this.j.o.toolbarInlineDisabledButtons.includes(btn.name))
                    .filter(item => {
                    const name = (0,helpers.isString)(item) ? item : item.name;
                    return (name &&
                        name !== '|' &&
                        name !== '\n' &&
                        !names.includes(name));
                });
            }
        })
            .on('hidePopup', this.hidePopup)
            .on('showPopup', (elm, rect, type) => {
            this.showPopup(rect, type || ((0,helpers.isString)(elm) ? elm : elm.nodeName), (0,helpers.isString)(elm) ? undefined : elm);
        })
            .on('mousedown keydown', this.onSelectionStart)
            .on('change', () => {
            if (this.popup.isOpened &&
                this.previousTarget &&
                !this.previousTarget.parentNode) {
                this.hidePopup();
                this.previousTarget = undefined;
            }
        })
            .on([this.j.ew, this.j.ow], 'mouseup keyup', this.onSelectionEnd);
        this.addListenersForElements();
    }
    onSelectionStart() {
        this.snapRange = this.j.s.range.cloneRange();
    }
    onSelectionEnd(e) {
        if (e &&
            e.target &&
            ui/* UIElement.closestElement */.u1.closestElement(e.target, ui_popup/* Popup */.G)) {
            return;
        }
        const { snapRange } = this, { range } = this.j.s;
        if (!snapRange ||
            range.collapsed ||
            range.startContainer !== snapRange.startContainer ||
            range.startOffset !== snapRange.startOffset ||
            range.endContainer !== snapRange.endContainer ||
            range.endOffset !== snapRange.endOffset) {
            this.onSelectionChange();
        }
    }
    onSelectionChange() {
        if (!this.j.o.toolbarInlineForSelection) {
            return;
        }
        const type = 'selection', sel = this.j.s.sel, range = this.j.s.range;
        if ((sel === null || sel === void 0 ? void 0 : sel.isCollapsed) ||
            this.isSelectedTarget(range) ||
            this.tableModule.getAllSelectedCells().length) {
            if (this.type === type && this.popup.isOpened) {
                this.hidePopup();
            }
            return;
        }
        const node = this.j.s.current();
        if (!node) {
            return;
        }
        this.showPopup(() => range.getBoundingClientRect(), type);
    }
    isSelectedTarget(r) {
        const sc = r.startContainer;
        return (dom/* Dom.isElement */.i.isElement(sc) &&
            sc === r.endContainer &&
            dom/* Dom.isTag */.i.isTag(sc.childNodes[r.startOffset], (0,helpers.keys)(this.j.o.popup, false)) &&
            r.startOffset === r.endOffset - 1);
    }
    get tableModule() {
        return this.j.getInstance('Table', this.j.o);
    }
    beforeDestruct(jodit) {
        jodit.e
            .off('showPopup')
            .off([this.j.ew, this.j.ow], 'mouseup keyup', this.onSelectionEnd);
        this.removeListenersForElements();
    }
    addListenersForElements() {
        this.j.e.on(this.elmsList.map(e => (0,helpers.camelCase)(`click_${e}`)).join(' '), this.onClick);
    }
    removeListenersForElements() {
        this.j.e.off(this.elmsList.map(e => (0,helpers.camelCase)(`click_${e}`)).join(' '), this.onClick);
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], inlinePopup.prototype, "onClick", null);
(0,tslib_es6.__decorate)([
    (0,decorators.wait)((ctx) => !ctx.j.isLocked)
], inlinePopup.prototype, "showPopup", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':clickEditor'),
    decorators.autobind
], inlinePopup.prototype, "hidePopup", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':outsideClick')
], inlinePopup.prototype, "onOutsideClick", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], inlinePopup.prototype, "onSelectionStart", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], inlinePopup.prototype, "onSelectionEnd", null);
(0,tslib_es6.__decorate)([
    (0,decorators.debounce)(ctx => ctx.defaultTimeout)
], inlinePopup.prototype, "onSelectionChange", null);

;// CONCATENATED MODULE: ./src/plugins/justify.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.controls.align */.D.prototype.controls.align = {
    name: 'left',
    tooltip: 'Align',
    update(button) {
        const editor = button.j, control = button.control, current = editor.s.current();
        if (current) {
            const currentBox = dom/* Dom.closest */.i.closest(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor) || editor.editor;
            let currentValue = (0,helpers.css)(currentBox, 'text-align').toString();
            if (control.defaultValue &&
                control.defaultValue.indexOf(currentValue) !== -1) {
                currentValue = 'left';
            }
            if (control.data &&
                control.data.currentValue !== currentValue &&
                control.list &&
                control.list.indexOf(currentValue) !== -1) {
                if (editor.o.textIcons) {
                    button.state.text = currentValue;
                }
                else {
                    button.state.icon.name = currentValue;
                }
                control.data.currentValue = currentValue;
            }
        }
    },
    isActive: (editor, btn) => {
        const current = editor.s.current();
        if (current && btn.defaultValue) {
            const currentBox = dom/* Dom.closest */.i.closest(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor) || editor.editor;
            return (btn.defaultValue.indexOf((0,helpers.css)(currentBox, 'text-align').toString()) === -1);
        }
        return false;
    },
    defaultValue: ['left', 'start', 'inherit'],
    data: {
        currentValue: 'left'
    },
    list: ['center', 'left', 'right', 'justify']
};
config/* Config.prototype.controls.center */.D.prototype.controls.center = {
    command: 'justifyCenter',
    css: {
        'text-align': 'center'
    },
    tooltip: 'Align Center'
};
config/* Config.prototype.controls.justify */.D.prototype.controls.justify = {
    command: 'justifyFull',
    css: {
        'text-align': 'justify'
    },
    tooltip: 'Align Justify'
};
config/* Config.prototype.controls.left */.D.prototype.controls.left = {
    command: 'justifyLeft',
    css: {
        'text-align': 'left'
    },
    tooltip: 'Align Left'
};
config/* Config.prototype.controls.right */.D.prototype.controls.right = {
    command: 'justifyRight',
    css: {
        'text-align': 'right'
    },
    tooltip: 'Align Right'
};
const clearAlign = (node, editor) => {
    dom/* Dom.each */.i.each(node, elm => {
        if (dom/* Dom.isHTMLElement */.i.isHTMLElement(elm, editor.ew)) {
            if (elm.style.textAlign) {
                elm.style.textAlign = '';
                if (!elm.style.cssText.trim().length) {
                    elm.removeAttribute('style');
                }
            }
        }
    });
};
const alignElement = (command, box, editor) => {
    if (dom/* Dom.isNode */.i.isNode(box, editor.ew) && dom/* Dom.isElement */.i.isElement(box)) {
        clearAlign(box, editor);
        switch (command.toLowerCase()) {
            case 'justifyfull':
                box.style.textAlign = 'justify';
                break;
            case 'justifyright':
                box.style.textAlign = 'right';
                break;
            case 'justifyleft':
                box.style.textAlign = 'left';
                break;
            case 'justifycenter':
                box.style.textAlign = 'center';
                break;
        }
    }
};
function justify(editor) {
    editor.registerButton({
        name: 'align',
        group: 'indent'
    });
    const callback = (command) => {
        editor.s.focus();
        editor.s.eachSelection((current) => {
            if (!current) {
                return;
            }
            let currentBox = dom/* Dom.up */.i.up(current, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
            if (!currentBox) {
                currentBox = dom/* Dom.wrapInline */.i.wrapInline(current, editor.o.enterBlock, editor);
            }
            alignElement(command, currentBox, editor);
        });
        return false;
    };
    editor.registerCommand('justifyfull', callback);
    editor.registerCommand('justifyright', callback);
    editor.registerCommand('justifyleft', callback);
    editor.registerCommand('justifycenter', callback);
}

;// CONCATENATED MODULE: ./src/plugins/limit.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






config/* Config.prototype.limitWords */.D.prototype.limitWords = false;
config/* Config.prototype.limitChars */.D.prototype.limitChars = false;
config/* Config.prototype.limitHTML */.D.prototype.limitHTML = false;
class limit extends Plugin {
    afterInit(jodit) {
        const { limitWords, limitChars } = jodit.o;
        if (jodit && (limitWords || limitChars)) {
            let snapshot = null;
            jodit.e
                .off('.limit')
                .on('beforePaste.limit', () => {
                snapshot = jodit.observer.snapshot.make();
            })
                .on('keydown.limit keyup.limit beforeEnter.limit beforePaste.limit', this.checkPreventKeyPressOrPaste)
                .on('change.limit', this.checkPreventChanging)
                .on('afterPaste.limit', () => {
                if (this.shouldPreventInsertHTML() && snapshot) {
                    jodit.observer.snapshot.restore(snapshot);
                    return false;
                }
            });
        }
    }
    shouldPreventInsertHTML(event = null, inputText = '') {
        if (event && constants.COMMAND_KEYS.includes(event.key)) {
            return false;
        }
        const { jodit } = this;
        const { limitWords, limitChars } = jodit.o;
        const text = inputText || (jodit.o.limitHTML ? jodit.value : jodit.text);
        const words = this.splitWords(text);
        if (limitWords && words.length >= limitWords) {
            return true;
        }
        return Boolean(limitChars) && words.join('').length >= limitChars;
    }
    checkPreventKeyPressOrPaste(event) {
        if (this.shouldPreventInsertHTML(event)) {
            return false;
        }
    }
    checkPreventChanging(newValue, oldValue) {
        const { jodit } = this;
        const { limitWords, limitChars } = jodit.o;
        const text = jodit.o.limitHTML ? newValue : (0,helpers.stripTags)(newValue), words = this.splitWords(text);
        if ((limitWords && words.length > limitWords) ||
            (Boolean(limitChars) && words.join('').length > limitChars)) {
            jodit.value = oldValue;
        }
    }
    splitWords(text) {
        return text
            .replace((0,constants.INVISIBLE_SPACE_REG_EXP)(), '')
            .split((0,constants.SPACE_REG_EXP)())
            .filter(e => e.length);
    }
    beforeDestruct(jodit) {
        jodit.e.off('.limit');
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], limit.prototype, "checkPreventKeyPressOrPaste", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], limit.prototype, "checkPreventChanging", null);

// EXTERNAL MODULE: ./src/core/ui/form/index.ts + 11 modules
var ui_form = __webpack_require__(40);
;// CONCATENATED MODULE: ./src/plugins/link/template.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


const formTemplate = (editor) => {
    const { openInNewTabCheckbox, noFollowCheckbox, modeClassName, selectSizeClassName, selectMultipleClassName, selectOptionsClassName } = editor.o.link;
    return new ui_form/* UIForm */.x4(editor, [
        new ui_form/* UIBlock */.eC(editor, [
            new ui_form/* UIInput */.u3(editor, {
                name: 'url',
                type: 'text',
                ref: 'url_input',
                label: 'URL',
                placeholder: 'http://',
                required: true
            })
        ]),
        new ui_form/* UIBlock */.eC(editor, [
            new ui_form/* UIInput */.u3(editor, {
                name: 'content',
                ref: 'content_input',
                label: 'Text'
            })
        ], {
            ref: 'content_input_box'
        }),
        modeClassName
            ? new ui_form/* UIBlock */.eC(editor, [
                (() => {
                    if (modeClassName === 'input') {
                        return new ui_form/* UIInput */.u3(editor, {
                            name: 'className',
                            ref: 'className_input',
                            label: 'Class name'
                        });
                    }
                    if (modeClassName === 'select') {
                        return new ui_form/* UISelect */.Cj(editor, {
                            name: 'className',
                            ref: 'className_select',
                            label: 'Class name',
                            size: selectSizeClassName,
                            multiple: selectMultipleClassName,
                            options: selectOptionsClassName
                        });
                    }
                    return null;
                })()
            ])
            : null,
        openInNewTabCheckbox
            ? new ui_form/* UICheckbox */.mA(editor, {
                name: 'target',
                ref: 'target_checkbox',
                label: 'Open in new tab'
            })
            : null,
        noFollowCheckbox
            ? new ui_form/* UICheckbox */.mA(editor, {
                name: 'nofollow',
                ref: 'nofollow_checkbox',
                label: 'No follow'
            })
            : null,
        new ui_form/* UIBlock */.eC(editor, [
            new ui_button/* UIButton */.y3(editor, {
                name: 'unlink',
                status: 'default',
                text: 'Unlink'
            }),
            new ui_button/* UIButton */.y3(editor, {
                name: 'insert',
                type: 'submit',
                status: 'primary',
                text: 'Insert'
            })
        ], {
            align: 'full'
        })
    ]);
};

;// CONCATENATED MODULE: ./src/plugins/link/link.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config/* Config.prototype.link */.D.prototype.link = {
    formTemplate: formTemplate,
    followOnDblClick: false,
    processVideoLink: true,
    processPastedLink: true,
    noFollowCheckbox: true,
    openInNewTabCheckbox: true,
    modeClassName: 'input',
    selectMultipleClassName: true,
    selectSizeClassName: 3,
    selectOptionsClassName: [],
    hotkeys: ['ctrl+k', 'cmd+k']
};
config/* Config.prototype.controls.unlink */.D.prototype.controls.unlink = {
    exec: (editor, current) => {
        const anchor = dom/* Dom.closest */.i.closest(current, 'a', editor.editor);
        if (anchor) {
            dom/* Dom.unwrap */.i.unwrap(anchor);
        }
        editor.setEditorValue();
        editor.e.fire('hidePopup');
    },
    tooltip: 'Unlink'
};
config/* Config.prototype.controls.link */.D.prototype.controls.link = {
    isActive: (editor) => {
        const current = editor.s.current();
        return Boolean(current && dom/* Dom.closest */.i.closest(current, 'a', editor.editor));
    },
    popup: (editor, current, self, close) => {
        return editor.e.fire('generateLinkForm.link', current, close);
    },
    tags: ['a'],
    tooltip: 'Insert link'
};
class link_link extends Plugin {
    constructor() {
        super(...arguments);
        this.buttons = [
            {
                name: 'link',
                group: 'insert'
            }
        ];
    }
    afterInit(jodit) {
        if (jodit.o.link.followOnDblClick) {
            jodit.e.on('dblclick.link', this.onDblClickOnLink);
        }
        if (jodit.o.link.processPastedLink) {
            jodit.e.on('processPaste.link', this.onProcessPasteLink);
        }
        jodit.e.on('generateLinkForm.link', this.generateForm);
        jodit.registerCommand('openLinkDialog', {
            exec: () => {
                const dialog = new Dialog({
                    resizable: false
                });
                const htmlForm = this.generateForm(jodit.s.current(), () => {
                    dialog.close();
                });
                htmlForm.container.classList.add('jodit-dialog_alert');
                dialog.setContent(htmlForm);
                dialog.open();
                jodit.async.requestIdleCallback(() => {
                    const { url_input } = (0,helpers.refs)(htmlForm.container);
                    url_input === null || url_input === void 0 ? void 0 : url_input.focus();
                });
            },
            hotkeys: jodit.o.link.hotkeys
        });
    }
    onDblClickOnLink(e) {
        if (!dom/* Dom.isTag */.i.isTag(e.target, 'a')) {
            return;
        }
        const href = (0,helpers.attr)(e.target, 'href');
        if (href) {
            location.href = href;
            e.preventDefault();
        }
    }
    onProcessPasteLink(ignore, html) {
        const { jodit } = this;
        if ((0,helpers.isURL)(html)) {
            if (jodit.o.link.processVideoLink) {
                const embed = (0,helpers.convertMediaUrlToVideoEmbed)(html);
                if (embed !== html) {
                    return jodit.createInside.fromHTML(embed);
                }
            }
            const a = jodit.createInside.element('a');
            a.setAttribute('href', html);
            a.textContent = html;
            jodit.e.stopPropagation('processPaste');
            return a;
        }
    }
    generateForm(current, close) {
        const { jodit } = this;
        const i18n = jodit.i18n.bind(jodit), { openInNewTabCheckbox, noFollowCheckbox, formTemplate, formClassName, modeClassName } = jodit.o.link;
        const html = formTemplate(jodit), form = (0,helpers.isString)(html)
            ? jodit.c.fromHTML(html, {
                target_checkbox_box: openInNewTabCheckbox,
                nofollow_checkbox_box: noFollowCheckbox
            })
            : html, htmlForm = dom/* Dom.isElement */.i.isElement(form) ? form : form.container;
        const elements = (0,helpers.refs)(htmlForm), { insert, unlink, content_input_box } = elements, { target_checkbox, nofollow_checkbox, url_input } = elements, currentElement = current, isImageContent = dom/* Dom.isImage */.i.isImage(currentElement, jodit.ew);
        let { content_input } = elements;
        const { className_input } = elements, { className_select } = elements;
        if (!content_input) {
            content_input = jodit.c.element('input', {
                type: 'hidden',
                ref: 'content_input'
            });
        }
        if (formClassName) {
            htmlForm.classList.add(formClassName);
        }
        if (isImageContent) {
            dom/* Dom.hide */.i.hide(content_input_box);
        }
        let link;
        const getSelectionText = () => link
            ? link.innerText
            : (0,helpers.stripTags)(jodit.s.range.cloneContents(), jodit.ed);
        if (current && dom/* Dom.closest */.i.closest(current, 'a', jodit.editor)) {
            link = dom/* Dom.closest */.i.closest(current, 'a', jodit.editor);
        }
        else {
            link = false;
        }
        if (!isImageContent && current) {
            content_input.value = getSelectionText();
        }
        if (link) {
            url_input.value = (0,helpers.attr)(link, 'href') || '';
            if (modeClassName) {
                switch (modeClassName) {
                    case 'input':
                        if (className_input) {
                            className_input.value = (0,helpers.attr)(link, 'class') || '';
                        }
                        break;
                    case 'select':
                        if (className_select) {
                            for (let i = 0; i < className_select.selectedOptions.length; i++) {
                                const option = className_select.options.item(i);
                                if (option) {
                                    option.selected = false;
                                }
                            }
                            const classNames = (0,helpers.attr)(link, 'class') || '';
                            classNames.split(' ').forEach(className => {
                                if (className) {
                                    for (let i = 0; i < className_select.options.length; i++) {
                                        const option = className_select.options.item(i);
                                        if ((option === null || option === void 0 ? void 0 : option.value) &&
                                            option.value === className) {
                                            option.selected = true;
                                        }
                                    }
                                }
                            });
                        }
                        break;
                }
            }
            if (openInNewTabCheckbox && target_checkbox) {
                target_checkbox.checked = (0,helpers.attr)(link, 'target') === '_blank';
            }
            if (noFollowCheckbox && nofollow_checkbox) {
                nofollow_checkbox.checked = (0,helpers.attr)(link, 'rel') === 'nofollow';
            }
            insert.textContent = i18n('Update');
        }
        else {
            dom/* Dom.hide */.i.hide(unlink);
        }
        jodit.editor.normalize();
        const snapshot = jodit.observer.snapshot.make();
        if (unlink) {
            jodit.e.on(unlink, 'click', (e) => {
                jodit.observer.snapshot.restore(snapshot);
                if (link) {
                    dom/* Dom.unwrap */.i.unwrap(link);
                }
                jodit.setEditorValue();
                close();
                e.preventDefault();
            });
        }
        const onSubmit = () => {
            if (!url_input.value.trim().length) {
                url_input.focus();
                url_input.classList.add('jodit_error');
                return false;
            }
            let links;
            jodit.s.removeMarkers();
            jodit.editor.normalize();
            jodit.observer.snapshot.restore(snapshot);
            const textWasChanged = getSelectionText() !== content_input.value.trim();
            const ci = jodit.createInside;
            if (!link) {
                if (!jodit.s.isCollapsed()) {
                    const node = jodit.s.current();
                    if (dom/* Dom.isTag */.i.isTag(node, ['img'])) {
                        links = [dom/* Dom.wrap */.i.wrap(node, 'a', ci)];
                    }
                    else {
                        links = jodit.s.wrapInTag('a');
                    }
                }
                else {
                    const a = ci.element('a');
                    jodit.s.insertNode(a, false, false);
                    links = [a];
                }
            }
            else {
                links = [link];
            }
            links.forEach(a => {
                var _a;
                (0,helpers.attr)(a, 'href', url_input.value);
                if (modeClassName && (className_input !== null && className_input !== void 0 ? className_input : className_select)) {
                    if (modeClassName === 'input') {
                        if (className_input.value === '' &&
                            a.hasAttribute('class')) {
                            (0,helpers.attr)(a, 'class', null);
                        }
                        if (className_input.value !== '') {
                            (0,helpers.attr)(a, 'class', className_input.value);
                        }
                    }
                    else if (modeClassName === 'select') {
                        if (a.hasAttribute('class')) {
                            (0,helpers.attr)(a, 'class', null);
                        }
                        for (let i = 0; i < className_select.selectedOptions.length; i++) {
                            const className = (_a = className_select.selectedOptions.item(i)) === null || _a === void 0 ? void 0 : _a.value;
                            if (className) {
                                a.classList.add(className);
                            }
                        }
                    }
                }
                if (!isImageContent) {
                    if (content_input.value.trim().length) {
                        if (textWasChanged) {
                            a.textContent = content_input.value;
                        }
                    }
                    else {
                        a.textContent = url_input.value;
                    }
                }
                if (openInNewTabCheckbox && target_checkbox) {
                    (0,helpers.attr)(a, 'target', target_checkbox.checked ? '_blank' : null);
                }
                if (noFollowCheckbox && nofollow_checkbox) {
                    (0,helpers.attr)(a, 'rel', nofollow_checkbox.checked ? 'nofollow' : null);
                }
            });
            jodit.setEditorValue();
            close();
            return false;
        };
        if (dom/* Dom.isElement */.i.isElement(form)) {
            jodit.e.on(form, 'submit', (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
                onSubmit();
                return false;
            });
        }
        else {
            form.onSubmit(onSubmit);
        }
        return form;
    }
    beforeDestruct(jodit) {
        jodit.e
            .off('generateLinkForm.link', this.generateForm)
            .off('dblclick.link', this.onDblClickOnLink)
            .off('processPaste.link', this.onProcessPasteLink);
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], link_link.prototype, "onDblClickOnLink", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], link_link.prototype, "onProcessPasteLink", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], link_link.prototype, "generateForm", null);

;// CONCATENATED MODULE: ./src/plugins/media/media.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.mediaFakeTag */.D.prototype.mediaFakeTag = 'jodit-media';
config/* Config.prototype.mediaInFakeBlock */.D.prototype.mediaInFakeBlock = true;
config/* Config.prototype.mediaBlocks */.D.prototype.mediaBlocks = ['video', 'audio'];
function media(editor) {
    const keyFake = 'jodit_fake_wrapper';
    const { mediaFakeTag, mediaBlocks, mediaInFakeBlock } = editor.options;
    const wrap = (element) => {
        if (element.parentNode &&
            (0,helpers.attr)(element.parentNode, 'data-jodit_iframe_wrapper')) {
            element = element.parentNode;
        }
        else {
            const wrapper = editor.createInside.fromHTML(`<${mediaFakeTag} data-jodit-temp="1" contenteditable="false" draggable="true" data-${keyFake}="1"></${mediaFakeTag}>`);
            (0,helpers.attr)(wrapper, 'style', (0,helpers.attr)(element, 'style'));
            wrapper.style.display =
                element.style.display === 'inline-block'
                    ? 'inline-block'
                    : 'block';
            wrapper.style.width = element.offsetWidth + 'px';
            wrapper.style.height = element.offsetHeight + 'px';
            if (element.parentNode) {
                element.parentNode.insertBefore(wrapper, element);
            }
            wrapper.appendChild(element);
            element = wrapper;
        }
        editor.e
            .off(element, 'mousedown.select touchstart.select')
            .on(element, 'mousedown.select touchstart.select', () => {
            editor.s.setCursorAfter(element);
        });
    };
    if (mediaInFakeBlock) {
        editor.e
            .on('afterGetValueFromEditor', (data) => {
            const rxp = new RegExp(`<${mediaFakeTag}[^>]+data-${keyFake}[^>]+>(.+?)</${mediaFakeTag}>`, 'ig');
            if (rxp.test(data.value)) {
                data.value = data.value.replace(rxp, '$1');
            }
        })
            .on('change afterInit afterSetMode changePlace', editor.async.debounce(() => {
            if (!editor.isDestructed &&
                editor.getMode() !== constants.MODE_SOURCE) {
                (0,helpers.$$)(mediaBlocks.join(','), editor.editor).forEach((elm) => {
                    if (!(0,helpers.dataBind)(elm, keyFake)) {
                        (0,helpers.dataBind)(elm, keyFake, true);
                        wrap(elm);
                    }
                });
            }
        }, editor.defaultTimeout));
    }
}

;// CONCATENATED MODULE: ./src/plugins/media/video/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config/* Config.prototype.controls.video */.D.prototype.controls.video = {
    popup: (editor, current, control, close) => {
        const bylink = new ui_form/* UIForm */.x4(editor, [
            new ui_form/* UIBlock */.eC(editor, [
                new ui_form/* UIInput */.u3(editor, {
                    name: 'url',
                    required: true,
                    label: 'URL',
                    placeholder: 'https://',
                    validators: ['url']
                })
            ]),
            new ui_form/* UIBlock */.eC(editor, [
                (0,ui_button/* Button */.zx)(editor, '', 'Insert', 'primary').onAction(() => bylink.submit())
            ])
        ]), bycode = new ui_form/* UIForm */.x4(editor, [
            new ui_form/* UIBlock */.eC(editor, [
                new ui_form/* UITextArea */.GJ(editor, {
                    name: 'code',
                    required: true,
                    label: 'Embed code'
                })
            ]),
            new ui_form/* UIBlock */.eC(editor, [
                (0,ui_button/* Button */.zx)(editor, '', 'Insert', 'primary').onAction(() => bycode.submit())
            ])
        ]), tabs = [], insertCode = (code) => {
            editor.s.restore();
            editor.s.insertHTML(code);
            close();
        };
        editor.s.save();
        tabs.push({
            icon: 'link',
            name: 'Link',
            content: bylink.container
        }, {
            icon: 'source',
            name: 'Code',
            content: bycode.container
        });
        bylink.onSubmit(data => {
            insertCode((0,helpers.convertMediaUrlToVideoEmbed)(data.url));
        });
        bycode.onSubmit(data => {
            insertCode(data.code);
        });
        return (0,widget/* TabsWidget */.IL)(editor, tabs);
    },
    tags: ['iframe'],
    tooltip: 'Insert youtube/vimeo video'
};

;// CONCATENATED MODULE: ./src/plugins/media/video/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function video(editor) {
    editor.registerButton({
        name: 'video',
        group: 'media'
    });
}

;// CONCATENATED MODULE: ./src/plugins/media/file.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.controls.file */.D.prototype.controls.file = {
    popup: (editor, current, self, close) => {
        const insert = (url, title = '') => {
            editor.s.insertNode(editor.createInside.fromHTML(`<a href="${url}" title="${title}">${title || url}</a>`));
        };
        let sourceAnchor = null;
        if (current &&
            (dom/* Dom.isTag */.i.isTag(current, 'a') ||
                dom/* Dom.closest */.i.closest(current, 'a', editor.editor))) {
            sourceAnchor = dom/* Dom.isTag */.i.isTag(current, 'a')
                ? current
                : dom/* Dom.closest */.i.closest(current, 'a', editor.editor);
        }
        return (0,widget/* FileSelectorWidget */.ov)(editor, {
            filebrowser: (data) => {
                data.files &&
                    data.files.forEach(file => insert(data.baseurl + file));
                close();
            },
            upload: true,
            url: (url, text) => {
                if (sourceAnchor) {
                    sourceAnchor.setAttribute('href', url);
                    sourceAnchor.setAttribute('title', text);
                }
                else {
                    insert(url, text);
                }
                close();
            }
        }, sourceAnchor, close, false);
    },
    tags: ['a'],
    tooltip: 'Insert file'
};
function file(editor) {
    editor.registerButton({
        name: 'file',
        group: 'media'
    });
}

;// CONCATENATED MODULE: ./src/plugins/media/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/plugins/mobile.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






config/* Config.prototype.mobileTapTimeout */.D.prototype.mobileTapTimeout = 300;
config/* Config.prototype.toolbarAdaptive */.D.prototype.toolbarAdaptive = true;
config/* Config.prototype.controls.dots */.D.prototype.controls.dots = {
    mode: constants.MODE_SOURCE + constants.MODE_WYSIWYG,
    popup: (editor, current, control, close, button) => {
        let store = control.data;
        if (store === undefined) {
            store = {
                toolbar: makeCollection(editor),
                rebuild: () => {
                    var _a;
                    if (button) {
                        const buttons = editor.e.fire('getDiffButtons.mobile', button.closest(ui/* UIList */.bz));
                        if (buttons && store) {
                            store.toolbar.build((0,helpers.splitArray)(buttons));
                            const w = ((_a = editor.toolbar.firstButton) === null || _a === void 0 ? void 0 : _a.container.offsetWidth) || 36;
                            store.toolbar.container.style.width =
                                (w + 4) * 3 + 'px';
                        }
                    }
                }
            };
            control.data = store;
        }
        store.rebuild();
        return store.toolbar;
    },
    tooltip: 'Show all'
};
function mobile(editor) {
    let timeout = 0, store = (0,helpers.splitArray)(editor.o.buttons);
    if (editor.o.mobileTapTimeout) {
        editor.e.on('touchend', (e) => {
            if (e.changedTouches && e.changedTouches.length) {
                const now = new Date().getTime(), diff = now - timeout;
                if (diff > editor.o.mobileTapTimeout) {
                    timeout = now;
                    if (diff < editor.o.mobileTapTimeout * 1.5) {
                        editor.s.insertCursorAtPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                    }
                }
            }
        });
    }
    editor.e.on('getDiffButtons.mobile', (toolbar) => {
        if (toolbar === editor.toolbar) {
            const buttons = (0,helpers.splitArray)(editor.o.buttons), flatStore = (0,helpers_buttons/* flatButtonsSet */.q)(store);
            return buttons.reduce((acc, item) => {
                if ((0,helpers_buttons/* isButtonGroup */.A)(item)) {
                    acc.push({
                        ...item,
                        buttons: item.buttons.filter(btn => !flatStore.has(btn))
                    });
                }
                else if (!flatStore.has(item)) {
                    acc.push(item);
                }
                return acc;
            }, []);
        }
    });
    if (editor.o.toolbarAdaptive) {
        editor.e
            .on('resize afterInit recalcAdaptive changePlace afterAddPlace', () => {
            if (!editor.o.toolbar) {
                return;
            }
            const width = editor.container.offsetWidth;
            const newStore = (() => {
                if (width >= editor.o.sizeLG) {
                    return (0,helpers.splitArray)(editor.o.buttons);
                }
                if (width >= editor.o.sizeMD) {
                    return (0,helpers.splitArray)(editor.o.buttonsMD);
                }
                if (width >= editor.o.sizeSM) {
                    return (0,helpers.splitArray)(editor.o.buttonsSM);
                }
                return (0,helpers.splitArray)(editor.o.buttonsXS);
            })();
            if (newStore.toString() !== store.toString()) {
                store = newStore;
                editor.e.fire('closeAllPopups');
                editor.toolbar
                    .setRemoveButtons(editor.o.removeButtons)
                    .build(store.concat(editor.o.extraButtons));
            }
        })
            .on(editor.ow, 'load', () => editor.e.fire('recalcAdaptive'));
    }
}

;// CONCATENATED MODULE: ./src/plugins/ordered-list.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



const exec = (jodit, _, { control }) => {
    const key = `button${control.command}`;
    const value = (control.args && control.args[0]) || (0,helpers.dataBind)(jodit, key);
    (0,helpers.dataBind)(jodit, key, value);
    jodit.execCommand(control.command, false, value);
};
config/* Config.prototype.controls.ul */.D.prototype.controls.ul = {
    command: 'insertUnorderedList',
    tags: ['ul'],
    tooltip: 'Insert Unordered List',
    list: {
        default: 'Default',
        circle: 'Circle',
        disc: 'Dot',
        square: 'Quadrate'
    },
    exec
};
config/* Config.prototype.controls.ol */.D.prototype.controls.ol = {
    command: 'insertOrderedList',
    tags: ['ol'],
    tooltip: 'Insert Ordered List',
    list: {
        default: 'Default',
        'lower-alpha': 'Lower Alpha',
        'lower-greek': 'Lower Greek',
        'lower-roman': 'Lower Roman',
        'upper-alpha': 'Upper Alpha',
        'upper-roman': 'Upper Roman'
    },
    exec
};
function orderedList(editor) {
    const isOurCommand = (command) => /insert(un)?orderedlist/i.test(command), getListWrapper = () => dom/* Dom.up */.i.up(editor.s.current(), (tag) => tag && /^UL|OL$/i.test(tag.nodeName), editor.editor), listStyleTypeEqual = (el, listStyleType) => {
        const value = el.style.listStyleType;
        return (value === listStyleType ||
            (!value && listStyleType === 'default'));
    }, setListStyleType = (el, value) => {
        if (value === 'default' || !value) {
            el.style.removeProperty('list-style-type');
        }
        else {
            el.style.setProperty('list-style-type', value);
        }
    };
    editor.e
        .on('beforeCommand', (command, _, listStyleType) => {
        if (isOurCommand(command) && listStyleType) {
            const ul = getListWrapper();
            if (ul && !listStyleTypeEqual(ul, listStyleType)) {
                if ((dom/* Dom.isTag */.i.isTag(ul, 'ul') && /unordered/i.test(command)) ||
                    (dom/* Dom.isTag */.i.isTag(ul, 'ol') && !/unordered/i.test(command))) {
                    setListStyleType(ul, listStyleType);
                    return false;
                }
            }
        }
    })
        .on('afterCommand', (command, _, listStyleType) => {
        if (isOurCommand(command)) {
            const ul = getListWrapper();
            if (ul) {
                setListStyleType(ul, listStyleType);
                editor.createInside.applyCreateAttributes(ul);
                ul.querySelectorAll('li').forEach(li => {
                    editor.createInside.applyCreateAttributes(li);
                });
            }
            const unwrapList = [], shouldUnwrap = (elm) => {
                if (dom/* Dom.isTag */.i.isTag(elm, [
                    'p',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6'
                ])) {
                    unwrapList.push(elm);
                }
            };
            if (ul) {
                shouldUnwrap(ul.parentNode);
                ul.querySelectorAll('li').forEach(li => shouldUnwrap(li.firstChild));
                if (unwrapList.length) {
                    editor.s.save();
                    (0,helpers.toArray)(ul.childNodes).forEach(li => {
                        if (dom/* Dom.isTag */.i.isTag(li.lastChild, 'br')) {
                            dom/* Dom.safeRemove */.i.safeRemove(li.lastChild);
                        }
                    });
                    unwrapList.forEach(elm => dom/* Dom.unwrap */.i.unwrap(elm));
                    editor.s.restore();
                }
            }
            editor.setEditorValue();
        }
    });
}

;// CONCATENATED MODULE: ./src/plugins/placeholder/placeholder.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









config/* Config.prototype.showPlaceholder */.D.prototype.showPlaceholder = true;
config/* Config.prototype.useInputsPlaceholder */.D.prototype.useInputsPlaceholder = true;
config/* Config.prototype.placeholder */.D.prototype.placeholder = 'Type something';
function isEditorEmpty(root) {
    if (!root.firstChild) {
        return true;
    }
    const first = root.firstChild;
    if (constants.MAY_BE_REMOVED_WITH_KEY.test(first.nodeName) ||
        /^(TABLE)$/i.test(first.nodeName)) {
        return false;
    }
    const next = dom/* Dom.next */.i.next(first, node => node && !dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(node), root);
    if (dom/* Dom.isText */.i.isText(first) && !next) {
        return dom/* Dom.isEmptyTextNode */.i.isEmptyTextNode(first);
    }
    return (!next &&
        dom/* Dom.each */.i.each(first, elm => !dom/* Dom.isTag */.i.isTag(elm, ['ul', 'li', 'ol']) &&
            (dom/* Dom.isEmpty */.i.isEmpty(elm) || dom/* Dom.isTag */.i.isTag(elm, 'br'))));
}
class placeholder extends Plugin {
    constructor() {
        super(...arguments);
        this.addNativeListeners = () => {
            this.j.e
                .off(this.j.editor, 'input.placeholder keydown.placeholder')
                .on(this.j.editor, 'input.placeholder keydown.placeholder', this.toggle);
        };
        this.addEvents = () => {
            const editor = this.j;
            if (editor.o.useInputsPlaceholder &&
                editor.element.hasAttribute('placeholder')) {
                this.placeholderElm.innerHTML =
                    (0,helpers.attr)(editor.element, 'placeholder') || '';
            }
            editor.e.fire('placeholder', this.placeholderElm.innerHTML);
            editor.e
                .off('.placeholder')
                .on('changePlace.placeholder', this.addNativeListeners)
                .on('change.placeholder focus.placeholder keyup.placeholder mouseup.placeholder keydown.placeholder ' +
                'mousedown.placeholder afterSetMode.placeholder changePlace.placeholder', this.toggle)
                .on(window, 'load', this.toggle);
            this.addNativeListeners();
            this.toggle();
        };
    }
    afterInit(editor) {
        if (!editor.o.showPlaceholder) {
            return;
        }
        this.placeholderElm = editor.c.fromHTML(`<span data-ref="placeholder" style="display: none;" class="jodit-placeholder">${editor.i18n(editor.o.placeholder)}</span>`);
        if (editor.o.direction === 'rtl') {
            this.placeholderElm.style.right = '0px';
            this.placeholderElm.style.direction = 'rtl';
        }
        editor.e
            .on('readonly', (isReadOnly) => {
            if (isReadOnly) {
                this.hide();
            }
            else {
                this.toggle();
            }
        })
            .on('changePlace', this.addEvents);
        this.addEvents();
    }
    show() {
        const editor = this.j;
        if (editor.o.readonly) {
            return;
        }
        let marginTop = 0, marginLeft = 0;
        const current = editor.s.current(), wrapper = (current &&
            dom/* Dom.closest */.i.closest(current, n => dom/* Dom.isBlock */.i.isBlock(n, editor.ew), editor.editor)) ||
            editor.editor;
        const style = editor.ew.getComputedStyle(wrapper);
        editor.workplace.appendChild(this.placeholderElm);
        if (dom/* Dom.isElement */.i.isElement(editor.editor.firstChild)) {
            const style2 = editor.ew.getComputedStyle(editor.editor.firstChild);
            marginTop = parseInt(style2.getPropertyValue('margin-top'), 10);
            marginLeft = parseInt(style2.getPropertyValue('margin-left'), 10);
            this.placeholderElm.style.fontSize =
                parseInt(style2.getPropertyValue('font-size'), 10) + 'px';
            this.placeholderElm.style.lineHeight =
                style2.getPropertyValue('line-height');
        }
        else {
            this.placeholderElm.style.fontSize =
                parseInt(style.getPropertyValue('font-size'), 10) + 'px';
            this.placeholderElm.style.lineHeight =
                style.getPropertyValue('line-height');
        }
        (0,helpers.css)(this.placeholderElm, {
            display: 'block',
            textAlign: style.getPropertyValue('text-align'),
            marginTop: Math.max(parseInt(style.getPropertyValue('margin-top'), 10), marginTop),
            marginLeft: Math.max(parseInt(style.getPropertyValue('margin-left'), 10), marginLeft)
        });
    }
    hide() {
        dom/* Dom.safeRemove */.i.safeRemove(this.placeholderElm);
    }
    toggle() {
        const editor = this.j;
        if (!editor.editor || editor.isInDestruct) {
            return;
        }
        if (editor.getRealMode() !== constants.MODE_WYSIWYG) {
            this.hide();
            return;
        }
        if (!isEditorEmpty(editor.editor)) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    beforeDestruct(jodit) {
        this.hide();
        jodit.e.off('.placeholder').off(window, 'load', this.toggle);
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.debounce)(ctx => ctx.defaultTimeout / 10, true)
], placeholder.prototype, "toggle", null);

;// CONCATENATED MODULE: ./src/plugins/redo-undo.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.controls.redo */.D.prototype.controls.redo = {
    mode: constants.MODE_SPLIT,
    isDisabled: (editor) => !editor.observer.stack.canRedo(),
    tooltip: 'Redo'
};
config/* Config.prototype.controls.undo */.D.prototype.controls.undo = {
    mode: constants.MODE_SPLIT,
    isDisabled: (editor) => !editor.observer.stack.canUndo(),
    tooltip: 'Undo'
};
class redoUndo extends Plugin {
    constructor() {
        super(...arguments);
        this.buttons = [
            {
                name: 'undo',
                group: 'history'
            },
            {
                name: 'redo',
                group: 'history'
            }
        ];
    }
    beforeDestruct() {
    }
    afterInit(editor) {
        const callback = (command) => {
            editor.observer[command]();
            return false;
        };
        editor.registerCommand('redo', {
            exec: callback,
            hotkeys: ['ctrl+y', 'ctrl+shift+z', 'cmd+y', 'cmd+shift+z']
        });
        editor.registerCommand('undo', {
            exec: callback,
            hotkeys: ['ctrl+z', 'cmd+z']
        });
    }
}

;// CONCATENATED MODULE: ./src/plugins/resizer/resizer.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










config/* Config.prototype.allowResizeTags */.D.prototype.allowResizeTags = ['img', 'iframe', 'table', 'jodit'];
config/* Config.prototype.resizer */.D.prototype.resizer = {
    showSize: true,
    hideSizeTimeout: 1000,
    min_width: 10,
    min_height: 10
};
const keyBInd = '__jodit-resizer_binded';
class resizer extends Plugin {
    constructor() {
        super(...arguments);
        this.LOCK_KEY = 'resizer';
        this.element = null;
        this.isResized = false;
        this.isShown = false;
        this.start_x = 0;
        this.start_y = 0;
        this.width = 0;
        this.height = 0;
        this.ratio = 0;
        this.rect = this.j.c.fromHTML(`<div class="jodit-resizer">
				<i class="jodit-resizer-topleft"></i>
				<i class="jodit-resizer-topright"></i>
				<i class="jodit-resizer-bottomright"></i>
				<i class="jodit-resizer-bottomleft"></i>
				<span>100x100</span>
			</div>`);
        this.sizeViewer = this.rect.getElementsByTagName('span')[0];
        this.onResize = (e) => {
            if (this.isResized) {
                const diff_x = e.clientX - this.start_x, diff_y = e.clientY - this.start_y;
                if (!this.element) {
                    return;
                }
                const className = this.handle.className;
                let new_w = 0, new_h = 0;
                if (dom/* Dom.isTag */.i.isTag(this.element, 'img')) {
                    if (diff_x) {
                        new_w =
                            this.width +
                                (className.match(/left/) ? -1 : 1) * diff_x;
                        new_h = Math.round(new_w / this.ratio);
                    }
                    else {
                        new_h =
                            this.height +
                                (className.match(/top/) ? -1 : 1) * diff_y;
                        new_w = Math.round(new_h * this.ratio);
                    }
                    if (new_w > (0,helpers.innerWidth)(this.j.editor, this.j.ow)) {
                        new_w = (0,helpers.innerWidth)(this.j.editor, this.j.ow);
                        new_h = Math.round(new_w / this.ratio);
                    }
                }
                else {
                    new_w =
                        this.width + (className.match(/left/) ? -1 : 1) * diff_x;
                    new_h =
                        this.height + (className.match(/top/) ? -1 : 1) * diff_y;
                }
                if (new_w > this.j.o.resizer.min_width) {
                    if (new_w < this.rect.parentNode.offsetWidth) {
                        (0,helpers.css)(this.element, 'width', new_w);
                    }
                    else {
                        (0,helpers.css)(this.element, 'width', '100%');
                    }
                }
                if (new_h > this.j.o.resizer.min_height) {
                    (0,helpers.css)(this.element, 'height', new_h);
                }
                this.updateSize();
                this.showSizeViewer(this.element.offsetWidth, this.element.offsetHeight);
                e.stopImmediatePropagation();
            }
        };
        this.onClickOutside = (e) => {
            if (this.isShown) {
                if (this.isResized) {
                    this.j.unlock();
                    this.isResized = false;
                    this.j.setEditorValue();
                    e.stopImmediatePropagation();
                    this.j.e.off(this.j.ow, 'mousemove.resizer touchmove.resizer', this.onResize);
                }
                else {
                    this.hide();
                }
            }
        };
        this.onClickElement = (element, e) => {
            if (this.isResized) {
                return;
            }
            if (this.element !== element || !this.isShown) {
                this.element = element;
                this.show();
                if (dom/* Dom.isTag */.i.isTag(this.element, 'img') && !this.element.complete) {
                    this.j.e.on(this.element, 'load', this.updateSize);
                }
            }
        };
        this.updateSize = () => {
            if (this.isInDestruct || !this.isShown) {
                return;
            }
            if (this.element && this.rect) {
                const workplacePosition = (0,helpers.offset)((this.rect.parentNode ||
                    this.j.od.documentElement), this.j, this.j.od, true), pos = (0,helpers.offset)(this.element, this.j, this.j.ed), left = parseInt(this.rect.style.left || '0', 10), top = parseInt(this.rect.style.top || '0', 10), w = this.rect.offsetWidth, h = this.rect.offsetHeight;
                const newTop = pos.top - 1 - workplacePosition.top, newLeft = pos.left - 1 - workplacePosition.left;
                if (top !== newTop ||
                    left !== newLeft ||
                    w !== this.element.offsetWidth ||
                    h !== this.element.offsetHeight) {
                    (0,helpers.css)(this.rect, {
                        top: newTop,
                        left: newLeft,
                        width: this.element.offsetWidth,
                        height: this.element.offsetHeight
                    });
                    if (this.j.events) {
                        this.j.e.fire(this.element, 'changesize');
                        if (!isNaN(left)) {
                            this.j.e.fire('resize');
                        }
                    }
                }
            }
        };
        this.hideSizeViewer = () => {
            this.sizeViewer.style.opacity = '0';
        };
    }
    afterInit(editor) {
        (0,helpers.$$)('i', this.rect).forEach((resizeHandle) => {
            editor.e.on(resizeHandle, 'mousedown.resizer touchstart.resizer', this.onClickHandle.bind(this, resizeHandle));
        });
        global/* eventEmitter.on */.TB.on('hideHelpers', this.hide);
        editor.e
            .on('readonly', (isReadOnly) => {
            if (isReadOnly) {
                this.hide();
            }
        })
            .on('afterInit changePlace', this.addEventListeners.bind(this))
            .on('afterGetValueFromEditor.resizer', (data) => {
            const rgx = /<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>.*?<\/iframe>.*?)<\/jodit>/gi;
            if (rgx.test(data.value)) {
                data.value = data.value.replace(rgx, '$1');
            }
        })
            .on('hideResizer', this.hide)
            .on('change afterInit afterSetMode', this.onChangeEditor);
        this.addEventListeners();
        this.onChangeEditor();
    }
    onEditorClick(e) {
        let node = e.target;
        const { editor, options: { allowResizeTags } } = this.j;
        while (node && node !== editor) {
            if (dom/* Dom.isTag */.i.isTag(node, allowResizeTags)) {
                this.bind(node);
                this.onClickElement(node, e);
                return;
            }
            node = node.parentNode;
        }
    }
    addEventListeners() {
        const editor = this.j;
        editor.e
            .off(editor.editor, '.resizer')
            .off(editor.ow, '.resizer')
            .on(editor.editor, 'keydown.resizer', (e) => {
            if (this.isShown &&
                e.key === constants.KEY_DELETE &&
                this.element &&
                !dom/* Dom.isTag */.i.isTag(this.element, 'table')) {
                this.onDelete(e);
            }
        })
            .on(editor.ow, 'resize.resizer', this.updateSize)
            .on(editor.ow, 'mouseup.resizer keydown.resizer touchend.resizer', this.onClickOutside)
            .on([editor.ow, editor.editor], 'scroll.resizer', () => {
            if (this.isShown && !this.isResized) {
                this.hide();
            }
        });
    }
    onClickHandle(resizeHandle, e) {
        if (!this.element || !this.element.parentNode) {
            this.hide();
            return false;
        }
        this.handle = resizeHandle;
        e.preventDefault();
        e.stopImmediatePropagation();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.ratio = this.width / this.height;
        this.isResized = true;
        this.start_x = e.clientX;
        this.start_y = e.clientY;
        this.j.e.fire('hidePopup');
        this.j.lock(this.LOCK_KEY);
        this.j.e.on(this.j.ow, 'mousemove.resizer touchmove.resizer', this.onResize);
    }
    onDelete(e) {
        if (!this.element) {
            return;
        }
        if (this.element.tagName !== 'JODIT') {
            this.j.s.select(this.element);
        }
        else {
            dom/* Dom.safeRemove */.i.safeRemove(this.element);
            this.hide();
            e.preventDefault();
        }
    }
    onChangeEditor() {
        if (this.isShown) {
            if (!this.element || !this.element.parentNode) {
                this.hide();
            }
            else {
                this.updateSize();
            }
        }
        (0,helpers.$$)('iframe', this.j.editor).forEach(this.bind);
    }
    bind(element) {
        if (element[keyBInd]) {
            return;
        }
        element[keyBInd] = true;
        let wrapper;
        if (dom/* Dom.isTag */.i.isTag(element, 'iframe')) {
            const iframe = element;
            if ((0,helpers.attr)(element.parentNode, '-jodit_iframe_wrapper')) {
                element = element.parentNode;
            }
            else {
                wrapper = this.j.createInside.fromHTML('<jodit ' +
                    'data-jodit-temp="1" ' +
                    'contenteditable="false" ' +
                    'draggable="true" ' +
                    'data-jodit_iframe_wrapper="1"' +
                    '></jodit>');
                (0,helpers.attr)(wrapper, 'style', (0,helpers.attr)(element, 'style'));
                (0,helpers.css)(wrapper, {
                    display: element.style.display === 'inline-block'
                        ? 'inline-block'
                        : 'block',
                    width: element.offsetWidth,
                    height: element.offsetHeight
                });
                if (element.parentNode) {
                    element.parentNode.insertBefore(wrapper, element);
                }
                wrapper.appendChild(element);
                element = wrapper;
            }
            this.j.e
                .off(element, 'mousedown.select touchstart.select')
                .on(element, 'mousedown.select touchstart.select', () => {
                this.j.s.select(element);
            })
                .off(element, 'changesize')
                .on(element, 'changesize', () => {
                iframe.setAttribute('width', element.offsetWidth + 'px');
                iframe.setAttribute('height', element.offsetHeight + 'px');
            });
        }
        this.j.e.on(element, 'dragstart', this.hide);
        if (false) {}
    }
    showSizeViewer(w, h) {
        if (!this.j.o.resizer.showSize) {
            return;
        }
        if (w < this.sizeViewer.offsetWidth ||
            h < this.sizeViewer.offsetHeight) {
            this.hideSizeViewer();
            return;
        }
        this.sizeViewer.style.opacity = '1';
        this.sizeViewer.textContent = `${w} x ${h}`;
        this.j.async.setTimeout(this.hideSizeViewer, {
            timeout: this.j.o.resizer.hideSizeTimeout,
            label: 'hideSizeViewer'
        });
    }
    show() {
        if (this.j.o.readonly || this.isShown) {
            return;
        }
        this.isShown = true;
        if (!this.rect.parentNode) {
            (0,helpers.markOwner)(this.j, this.rect);
            this.j.workplace.appendChild(this.rect);
        }
        if (this.j.isFullSize) {
            this.rect.style.zIndex = (0,helpers.css)(this.j.container, 'zIndex').toString();
        }
        this.updateSize();
    }
    hide() {
        if (!this.isResized) {
            this.isResized = false;
            this.isShown = false;
            this.element = null;
            dom/* Dom.safeRemove */.i.safeRemove(this.rect);
        }
    }
    beforeDestruct(jodit) {
        this.hide();
        global/* eventEmitter.off */.TB.off('hideHelpers', this.hide);
        jodit.e.off(this.j.ow, '.resizer').off('.resizer');
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':click')
], resizer.prototype, "onEditorClick", null);
(0,tslib_es6.__decorate)([
    (0,decorators.debounce)()
], resizer.prototype, "onChangeEditor", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], resizer.prototype, "bind", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], resizer.prototype, "hide", null);

;// CONCATENATED MODULE: ./src/plugins/search/search.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */










config/* Config.prototype.useSearch */.D.prototype.useSearch = true;
config/* Config.prototype.controls.find */.D.prototype.controls.find = {
    tooltip: 'Find',
    icon: 'search',
    exec(jodit, _, { control }) {
        const value = control.args && control.args[0];
        switch (value) {
            case 'findPrevious':
                jodit.e.fire('searchPrevious');
                break;
            case 'findNext':
                jodit.e.fire('searchNext');
                break;
            case 'replace':
                jodit.execCommand('openReplaceDialog');
                break;
            default:
                jodit.execCommand('openSearchDialog');
        }
    },
    list: {
        search: 'Find',
        findNext: 'Find Next',
        findPrevious: 'Find Previous',
        replace: 'Replace'
    },
    childTemplate: (_, k, v) => v
};
class search extends Plugin {
    constructor() {
        super(...arguments);
        this.buttons = [
            {
                name: 'find',
                group: 'search'
            }
        ];
        this.template = `<div class="jodit-search">
			<div class="jodit-search__box">
				<div class="jodit-search__inputs">
					<input data-ref="query" tabindex="0" placeholder="${this.j.i18n('Search for')}" type="text"/>
					<input data-ref="replace" tabindex="0" placeholder="${this.j.i18n('Replace with')}" type="text"/>
				</div>
				<div class="jodit-search__counts">
					<span data-ref="counter-box">0/0</span>
				</div>
				<div class="jodit-search__buttons">
					<button data-ref="next" tabindex="0" type="button">${ui/* Icon.get */.JO.get('angle-down')}</button>
					<button data-ref="prev" tabindex="0" type="button">${ui/* Icon.get */.JO.get('angle-up')}</button>
					<button data-ref="cancel" tabindex="0" type="button">${ui/* Icon.get */.JO.get('cancel')}</button>
					<button data-ref="replace-btn" tabindex="0" type="button" class="jodit-ui-button">${this.j.i18n('Replace')}</button>
				</div>
			</div>
		</div>`;
        this.isOpened = false;
        this.selInfo = null;
        this.current = null;
        this.eachMap = (node, callback, next) => {
            dom/* Dom.findWithCurrent */.i.findWithCurrent(node, (child) => {
                return Boolean(child && callback(child));
            }, this.j.editor, next ? 'nextSibling' : 'previousSibling', next ? 'firstChild' : 'lastChild');
        };
        this.updateCounters = () => {
            if (!this.isOpened) {
                return;
            }
            this.counterBox.style.display = this.queryInput.value.length
                ? 'inline-block'
                : 'none';
            const range = this.j.s.range, counts = this.calcCounts(this.queryInput.value, range);
            this.counterBox.textContent = counts.join('/');
        };
        this.calcCounts = (query, current = false) => {
            const bounds = [];
            let currentIndex = 0, count = 0, bound = false, start = this.j.editor.firstChild;
            while (start && query.length) {
                bound = this.find(start, query, true, 0, bound || this.j.ed.createRange());
                if (bound) {
                    if (this.boundAlreadyWas(bound, bounds)) {
                        break;
                    }
                    bounds.push(bound);
                    start = bound.startContainer;
                    count += 1;
                    if (current && this.boundAlreadyWas(current, [bound])) {
                        currentIndex = count;
                    }
                }
                else {
                    start = null;
                }
            }
            return [currentIndex, count];
        };
        this.findAndReplace = (start, query) => {
            const range = this.j.s.range, bound = this.find(start, query, true, 0, range);
            if (bound && bound.startContainer && bound.endContainer) {
                const rng = this.j.ed.createRange();
                try {
                    if (bound && bound.startContainer && bound.endContainer) {
                        rng.setStart(bound.startContainer, bound.startOffset);
                        rng.setEnd(bound.endContainer, bound.endOffset);
                        rng.deleteContents();
                        const textNode = this.j.createInside.text(this.replaceInput.value);
                        rng.insertNode(textNode);
                        this.j.s.select(textNode);
                        this.tryScrollToElement(textNode);
                    }
                }
                catch (_a) { }
                return true;
            }
            return false;
        };
        this.findAndSelect = (start, query, next) => {
            const range = this.j.s.range, bound = this.find(start, query, next, 0, range);
            if (bound && bound.startContainer && bound.endContainer) {
                const rng = this.j.ed.createRange();
                try {
                    rng.setStart(bound.startContainer, bound.startOffset);
                    rng.setEnd(bound.endContainer, bound.endOffset);
                    this.j.s.selectRange(rng);
                }
                catch (e) { }
                this.tryScrollToElement(bound.startContainer);
                this.current = bound.startContainer;
                this.updateCounters();
                return true;
            }
            return false;
        };
        this.find = (start, query, next, deep, range) => {
            if (start && query.length) {
                let sentence = '', bound = {
                    startContainer: null,
                    startOffset: null,
                    endContainer: null,
                    endOffset: null
                };
                this.eachMap(start, (elm) => {
                    if (dom/* Dom.isText */.i.isText(elm) &&
                        elm.nodeValue != null &&
                        elm.nodeValue.length) {
                        let value = elm.nodeValue;
                        if (!next && elm === range.startContainer) {
                            value = !deep
                                ? value.substr(0, range.startOffset)
                                : value.substr(range.endOffset);
                        }
                        else if (next && elm === range.endContainer) {
                            value = !deep
                                ? value.substr(range.endOffset)
                                : value.substr(0, range.startOffset);
                        }
                        const tmpSentence = next
                            ? sentence + value
                            : value + sentence;
                        const part = search.findSomePartOfString(query, tmpSentence, next);
                        if (part !== false) {
                            let currentPart = search.findSomePartOfString(query, value, next);
                            if (currentPart === true) {
                                currentPart = (0,helpers.trim)(query);
                            }
                            else if (currentPart === false) {
                                currentPart = search.findSomePartOfString(value, query, next);
                                if (currentPart === true) {
                                    currentPart = (0,helpers.trim)(value);
                                }
                            }
                            let currentPartIndex = search.getSomePartOfStringIndex(query, value, next) || 0;
                            if (((next && !deep) || (!next && deep)) &&
                                elm.nodeValue.length - value.length > 0) {
                                currentPartIndex +=
                                    elm.nodeValue.length - value.length;
                            }
                            if (bound.startContainer == null) {
                                bound.startContainer = elm;
                                bound.startOffset = currentPartIndex;
                            }
                            if (part !== true) {
                                sentence = tmpSentence;
                            }
                            else {
                                bound.endContainer = elm;
                                bound.endOffset = currentPartIndex;
                                bound.endOffset += currentPart.length;
                                return true;
                            }
                        }
                        else {
                            sentence = '';
                            bound = {
                                startContainer: null,
                                startOffset: null,
                                endContainer: null,
                                endOffset: null
                            };
                        }
                    }
                    else if (dom/* Dom.isBlock */.i.isBlock(elm, this.j.ew) && sentence !== '') {
                        sentence = next ? sentence + ' ' : ' ' + sentence;
                    }
                    return false;
                }, next);
                if (bound.startContainer && bound.endContainer) {
                    return bound;
                }
                if (!deep) {
                    this.current = next
                        ? this.j.editor.firstChild
                        : this.j.editor.lastChild;
                    return this.find(this.current, query, next, deep + 1, range);
                }
            }
            return false;
        };
        this.open = (searchAndReplace = false) => {
            if (!this.isOpened) {
                this.searchBox.classList.add('jodit-search_active');
                this.isOpened = true;
            }
            this.calcSticky(this.j.e.fire('getStickyState.sticky') || false);
            this.j.e.fire('hidePopup');
            this.searchBox.classList.toggle('jodit-search_replace', searchAndReplace);
            this.current = this.j.s.current();
            const selStr = (this.j.s.sel || '').toString();
            if (selStr) {
                this.queryInput.value = selStr;
            }
            this.updateCounters();
            if (selStr) {
                this.queryInput.select();
            }
            else {
                this.queryInput.focus();
            }
        };
        this.close = () => {
            if (!this.isOpened) {
                return;
            }
            this.j.s.restore();
            this.searchBox.classList.remove('jodit-search_active');
            this.isOpened = false;
        };
    }
    static getSomePartOfStringIndex(needle, haystack, start = true) {
        return this.findSomePartOfString(needle, haystack, start, true);
    }
    static findSomePartOfString(needle, haystack, start = true, getIndex = false) {
        needle = (0,helpers.trim)(needle.toLowerCase().replace(constants.SPACE_REG_EXP(), ' '));
        haystack = haystack.toLowerCase();
        let i = start ? 0 : haystack.length - 1, needleStart = start ? 0 : needle.length - 1, tmpEqualLength = 0, startAtIndex = null;
        const inc = start ? 1 : -1, tmp = [];
        for (; haystack[i] !== undefined; i += inc) {
            const some = needle[needleStart] === haystack[i];
            if (some ||
                (startAtIndex != null &&
                    constants.SPACE_REG_EXP().test(haystack[i]))) {
                if (startAtIndex == null || !start) {
                    startAtIndex = i;
                }
                tmp.push(haystack[i]);
                if (some) {
                    tmpEqualLength += 1;
                    needleStart += inc;
                }
            }
            else {
                startAtIndex = null;
                tmp.length = 0;
                tmpEqualLength = 0;
                needleStart = start ? 0 : needle.length - 1;
            }
            if (tmpEqualLength === needle.length) {
                return getIndex ? startAtIndex : true;
            }
        }
        if (getIndex) {
            return startAtIndex !== null && startAtIndex !== void 0 ? startAtIndex : false;
        }
        if (tmp.length) {
            return start ? tmp.join('') : tmp.reverse().join('');
        }
        return false;
    }
    boundAlreadyWas(current, bounds) {
        return bounds.some((bound) => {
            return (bound.startContainer === current.startContainer &&
                bound.endContainer === current.endContainer &&
                bound.startOffset === current.startOffset &&
                bound.endOffset === current.endOffset);
        }, false);
    }
    tryScrollToElement(startContainer) {
        let parentBox = dom/* Dom.closest */.i.closest(startContainer, dom/* Dom.isElement */.i.isElement, this.j.editor);
        if (!parentBox) {
            parentBox = dom/* Dom.prev */.i.prev(startContainer, dom/* Dom.isElement */.i.isElement, this.j.editor);
        }
        parentBox && parentBox !== this.j.editor && parentBox.scrollIntoView();
    }
    afterInit(editor) {
        if (editor.o.useSearch) {
            const self = this;
            self.searchBox = editor.c.fromHTML(self.template);
            const { query, replace, cancel, next, prev, replaceBtn, counterBox } = (0,helpers.refs)(self.searchBox);
            self.queryInput = query;
            self.replaceInput = replace;
            self.closeButton = cancel;
            self.nextButton = next;
            self.prevButton = prev;
            self.replaceButton = replaceBtn;
            self.counterBox = counterBox;
            const onInit = () => {
                editor.workplace.appendChild(this.searchBox);
                editor.e
                    .off(this.j.container, 'keydown.search')
                    .on(this.j.container, 'keydown.search', (e) => {
                    if (editor.getRealMode() !== constants.MODE_WYSIWYG) {
                        return;
                    }
                    switch (e.key) {
                        case constants.KEY_ESC:
                            this.close();
                            break;
                        case constants.KEY_F3:
                            if (self.queryInput.value) {
                                editor.e.fire(!e.shiftKey
                                    ? 'searchNext'
                                    : 'searchPrevious');
                                e.preventDefault();
                            }
                            break;
                    }
                });
            };
            onInit();
            editor.e
                .on('changePlace', onInit)
                .on(self.closeButton, 'click', this.close)
                .on(self.queryInput, 'mousedown', () => {
                if (editor.s.isFocused()) {
                    editor.s.removeMarkers();
                    self.selInfo = editor.s.save();
                }
            })
                .on(self.replaceButton, 'click', (e) => {
                self.findAndReplace(editor.s.current() || editor.editor.firstChild, self.queryInput.value);
                this.updateCounters();
                e.preventDefault();
                e.stopImmediatePropagation();
            })
                .on([self.nextButton, self.prevButton], 'click', function (e) {
                editor.e.fire(self.nextButton === this
                    ? 'searchNext'
                    : 'searchPrevious');
                e.preventDefault();
                e.stopImmediatePropagation();
            })
                .on(this.queryInput, 'keydown', this.j.async.debounce((e) => {
                switch (e.key) {
                    case constants.KEY_ENTER:
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        if (editor.e.fire('searchNext')) {
                            this.close();
                        }
                        break;
                    default:
                        this.updateCounters();
                        break;
                }
            }, this.j.defaultTimeout))
                .on('beforeSetMode.search', () => {
                this.close();
            })
                .on('keydown.search mousedown.search', () => {
                if (this.selInfo) {
                    editor.s.removeMarkers();
                    this.selInfo = null;
                }
                if (this.isOpened) {
                    this.current = this.j.s.current();
                    this.updateCounters();
                }
            })
                .on('searchNext.search searchPrevious.search', () => {
                if (!self.isOpened) {
                    return self.open();
                }
                return self.findAndSelect(editor.s.current() || editor.editor.firstChild, self.queryInput.value, editor.e.current === 'searchNext');
            })
                .on('search.search', (value, next = true) => {
                editor.execCommand('search', value, next);
            })
                .on('toggleSticky.search', this.calcSticky);
            editor
                .registerCommand('search', {
                exec: (command, value, next = true) => {
                    self.findAndSelect(editor.s.current() || editor.editor.firstChild, value || '', next);
                    return false;
                }
            })
                .registerCommand('openSearchDialog', {
                exec: () => {
                    self.open();
                    return false;
                },
                hotkeys: ['ctrl+f', 'cmd+f']
            })
                .registerCommand('openReplaceDialog', {
                exec: () => {
                    if (!editor.o.readonly) {
                        self.open(true);
                    }
                    return false;
                },
                hotkeys: ['ctrl+h', 'cmd+h']
            });
        }
    }
    beforeDestruct(jodit) {
        var _a;
        dom/* Dom.safeRemove */.i.safeRemove(this.searchBox);
        (_a = jodit.events) === null || _a === void 0 ? void 0 : _a.off('.search');
    }
    calcSticky(enabled) {
        if (this.isOpened) {
            this.searchBox.classList.toggle('jodit-search_sticky', enabled);
            if (enabled) {
                const pos = (0,helpers.position)(this.j.toolbarContainer);
                (0,helpers.css)(this.searchBox, {
                    top: pos.top + pos.height,
                    left: pos.left + pos.width
                });
            }
            else {
                (0,helpers.css)(this.searchBox, {
                    top: null,
                    left: null
                });
            }
        }
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], search.prototype, "calcSticky", null);

;// CONCATENATED MODULE: ./src/plugins/select.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






class select_select extends Plugin {
    constructor() {
        super(...arguments);
        this.proxyEventsList = [
            'click',
            'mousedown',
            'touchstart',
            'mouseup',
            'touchend'
        ];
    }
    afterInit(jodit) {
        this.proxyEventsList.forEach(eventName => {
            jodit.e.on(eventName + '.select', this.onStartSelection);
        });
    }
    beforeDestruct(jodit) {
        this.proxyEventsList.forEach(eventName => {
            jodit.e.on(eventName + '.select', this.onStartSelection);
        });
    }
    onStartSelection(e) {
        const { j } = this;
        let result, target = e.target;
        while (result === undefined && target && target !== j.editor) {
            result = j.e.fire((0,helpers.camelCase)(e.type + '_' + target.nodeName.toLowerCase()), target, e);
            target = target.parentElement;
        }
        if (e.type === 'click' && result === undefined && target === j.editor) {
            j.e.fire(e.type + 'Editor', target, e);
        }
    }
    onOutsideClick(e) {
        const node = e.target;
        if (dom/* Dom.up */.i.up(node, elm => elm === this.j.editor)) {
            return;
        }
        const box = ui/* UIElement.closestElement */.u1.closestElement(node, ui/* Popup */.GI);
        if (!box) {
            this.j.e.fire('outsideClick', e);
        }
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], select_select.prototype, "onStartSelection", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)('ow:click')
], select_select.prototype, "onOutsideClick", null);

;// CONCATENATED MODULE: ./src/plugins/size/config.ts

config/* Config.prototype.width */.D.prototype.width = 'auto';
config/* Config.prototype.minWidth */.D.prototype.minWidth = 200;
config/* Config.prototype.maxWidth */.D.prototype.maxWidth = '100%';
config/* Config.prototype.allowResizeX */.D.prototype.allowResizeX = false;
config/* Config.prototype.allowResizeY */.D.prototype.allowResizeY = true;
config/* Config.prototype.height */.D.prototype.height = 'auto';
config/* Config.prototype.minHeight */.D.prototype.minHeight = 200;
config/* Config.prototype.maxHeight */.D.prototype.maxHeight = 'auto';
config/* Config.prototype.saveHeightInStorage */.D.prototype.saveHeightInStorage = false;

;// CONCATENATED MODULE: ./src/plugins/size/resize-handler.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




let resizeHandler = class resizeHandler extends Plugin {
    constructor() {
        super(...arguments);
        this.isResized = false;
        this.start = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        this.handle = this.j.c.div('jodit-editor__resize', '<a tabindex="-1" href="javascript:void(0)"></a>');
    }
    afterInit(editor) {
        const { height, width, allowResizeX } = editor.o;
        let { allowResizeY } = editor.o;
        if (height === 'auto' && width !== 'auto') {
            allowResizeY = false;
        }
        if ((height !== 'auto' || width !== 'auto') &&
            (allowResizeX || allowResizeY)) {
            editor.e
                .on('toggleFullSize.resizeHandler', () => {
                this.handle.style.display = editor.isFullSize
                    ? 'none'
                    : 'block';
            })
                .on(this.handle, 'mousedown touchstart', this.onHandleResizeStart)
                .on(editor.ow, 'mouseup touchend', this.onHandleResizeEnd);
            editor.container.appendChild(this.handle);
        }
    }
    onHandleResizeStart(e) {
        this.isResized = true;
        this.start.x = e.clientX;
        this.start.y = e.clientY;
        this.start.w = this.j.container.offsetWidth;
        this.start.h = this.j.container.offsetHeight;
        this.j.lock();
        this.j.e.on(this.j.ow, 'mousemove touchmove', this.onHandleResize);
        e.preventDefault();
    }
    onHandleResize(e) {
        if (!this.isResized) {
            return;
        }
        if (this.j.o.allowResizeY) {
            this.j.e.fire('setHeight', this.start.h + e.clientY - this.start.y);
        }
        if (this.j.o.allowResizeX) {
            this.j.e.fire('setWidth', this.start.w + e.clientX - this.start.x);
        }
        this.j.e.fire('resize');
    }
    onHandleResizeEnd() {
        if (this.isResized) {
            this.isResized = false;
            this.j.e.off(this.j.ow, 'mousemove touchmove', this.onHandleResize);
            this.j.unlock();
        }
    }
    beforeDestruct(editor) {
        dom/* Dom.safeRemove */.i.safeRemove(this.handle);
        this.j.e.off(this.j.ow, 'mouseup touchsend', this.onHandleResizeEnd);
    }
};
resizeHandler.requires = ['size'];
resizeHandler = (0,tslib_es6.__decorate)([
    decorators.autobind
], resizeHandler);


;// CONCATENATED MODULE: ./src/plugins/size/size.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





let size = class size extends Plugin {
    constructor() {
        super(...arguments);
        this.resizeWorkspaces = this.j.async.debounce(this.resizeWorkspaceImd, this.j.defaultTimeout, true);
    }
    afterInit(editor) {
        editor.e
            .on('setHeight.size', this.setHeight)
            .on('setWidth.size', this.setWidth)
            .on('afterInit.size changePlace.size', this.initialize, undefined, true)
            .on(editor.ow, 'load.size', this.resizeWorkspaces)
            .on('afterInit.size resize.size afterUpdateToolbar.size ' +
            'scroll.size afterResize.size toggleFullSize.size', this.resizeWorkspaces);
        this.initialize();
    }
    initialize() {
        const { j } = this;
        if (j.o.inline) {
            return;
        }
        let { height } = j.o;
        if (j.o.saveHeightInStorage && height !== 'auto') {
            const localHeight = j.storage.get('height');
            if (localHeight) {
                height = localHeight;
            }
        }
        (0,helpers.css)(j.editor, {
            minHeight: '100%'
        });
        (0,helpers.css)(j.container, {
            minHeight: j.o.minHeight,
            maxHeight: j.o.maxHeight,
            minWidth: j.o.minWidth,
            maxWidth: j.o.maxWidth
        });
        this.setHeight(height);
        this.setWidth(j.o.width);
    }
    setHeight(height) {
        if ((0,helpers.isNumber)(height)) {
            const { minHeight, maxHeight } = this.j.o;
            if ((0,helpers.isNumber)(minHeight) && minHeight > height) {
                height = minHeight;
            }
            if ((0,helpers.isNumber)(maxHeight) && maxHeight < height) {
                height = maxHeight;
            }
        }
        (0,helpers.css)(this.j.container, 'height', height);
        if (this.j.o.saveHeightInStorage) {
            this.j.storage.set('height', height);
        }
        this.resizeWorkspaceImd();
    }
    setWidth(width) {
        if ((0,helpers.isNumber)(width)) {
            const { minWidth, maxWidth } = this.j.o;
            if ((0,helpers.isNumber)(minWidth) && minWidth > width) {
                width = minWidth;
            }
            if ((0,helpers.isNumber)(maxWidth) && maxWidth < width) {
                width = maxWidth;
            }
        }
        (0,helpers.css)(this.j.container, 'width', width);
        this.resizeWorkspaceImd();
    }
    getNotWorkHeight() {
        var _a, _b;
        return ((((_a = this.j.toolbarContainer) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0) +
            (((_b = this.j.statusbar) === null || _b === void 0 ? void 0 : _b.getHeight()) || 0) +
            2);
    }
    resizeWorkspaceImd() {
        if (!this.j || this.j.isDestructed || !this.j.o || this.j.o.inline) {
            return;
        }
        if (!this.j.container || !this.j.container.parentNode) {
            return;
        }
        const minHeight = ((0,helpers.css)(this.j.container, 'minHeight') || 0) -
            this.getNotWorkHeight();
        if ((0,helpers.isNumber)(minHeight) && minHeight > 0) {
            [this.j.workplace, this.j.iframe, this.j.editor].map(elm => {
                elm && (0,helpers.css)(elm, 'minHeight', minHeight);
            });
            this.j.e.fire('setMinHeight', minHeight);
        }
        if ((0,helpers.isNumber)(this.j.o.maxHeight)) {
            const maxHeight = this.j.o.maxHeight - this.getNotWorkHeight();
            [this.j.workplace, this.j.iframe, this.j.editor].map(elm => {
                elm && (0,helpers.css)(elm, 'maxHeight', maxHeight);
            });
            this.j.e.fire('setMaxHeight', maxHeight);
        }
        if (this.j.container) {
            (0,helpers.css)(this.j.workplace, 'height', this.j.o.height !== 'auto' || this.j.isFullSize
                ? this.j.container.offsetHeight - this.getNotWorkHeight()
                : 'auto');
        }
    }
    beforeDestruct(jodit) {
        this.j.e
            .off(this.j.ow, 'load.size', this.resizeWorkspaces)
            .off('.size');
    }
};
size = (0,tslib_es6.__decorate)([
    decorators.autobind
], size);


;// CONCATENATED MODULE: ./src/plugins/size/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




;// CONCATENATED MODULE: ./src/plugins/source/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.beautifyHTML */.D.prototype.beautifyHTML = !constants.IS_IE;
config/* Config.prototype.sourceEditor */.D.prototype.sourceEditor = 'ace';
config/* Config.prototype.sourceEditorNativeOptions */.D.prototype.sourceEditorNativeOptions = {
    showGutter: true,
    theme: 'ace/theme/idle_fingers',
    mode: 'ace/mode/html',
    wrap: true,
    highlightActiveLine: true
};
config/* Config.prototype.sourceEditorCDNUrlsJS */.D.prototype.sourceEditorCDNUrlsJS = [
    'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js'
];
config/* Config.prototype.beautifyHTMLCDNUrlsJS */.D.prototype.beautifyHTMLCDNUrlsJS = [
    'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.0/beautify-html.min.js'
];
config/* Config.prototype.controls.source */.D.prototype.controls.source = {
    mode: constants.MODE_SPLIT,
    exec: (editor) => {
        editor.toggleMode();
    },
    isActive: (editor) => {
        return editor.getRealMode() === constants.MODE_SOURCE;
    },
    tooltip: 'Change mode'
};

;// CONCATENATED MODULE: ./src/plugins/source/editor/sourceEditor.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class SourceEditor {
    constructor(jodit, container, toWYSIWYG, fromWYSIWYG) {
        this.jodit = jodit;
        this.container = container;
        this.toWYSIWYG = toWYSIWYG;
        this.fromWYSIWYG = fromWYSIWYG;
        this.className = '';
        this.isReady = false;
    }
    get j() {
        return this.jodit;
    }
    onReady() {
        this.replaceUndoManager();
        this.isReady = true;
        this.j.e.fire(this, 'ready');
    }
    onReadyAlways(onReady) {
        var _a;
        if (!this.isReady) {
            (_a = this.j.events) === null || _a === void 0 ? void 0 : _a.on(this, 'ready', onReady);
        }
        else {
            onReady();
        }
    }
}

;// CONCATENATED MODULE: ./src/plugins/source/editor/engines/area.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class TextAreaEditor extends SourceEditor {
    constructor() {
        super(...arguments);
        this.autosize = this.j.async.debounce(() => {
            this.instance.style.height = 'auto';
            this.instance.style.height = this.instance.scrollHeight + 'px';
        }, this.j.defaultTimeout);
    }
    init(editor) {
        this.instance = editor.c.element('textarea', {
            class: 'jodit-source__mirror'
        });
        this.container.appendChild(this.instance);
        editor.e
            .on(this.instance, 'mousedown keydown touchstart input', editor.async.debounce(this.toWYSIWYG, editor.defaultTimeout))
            .on('setMinHeight.source', (minHeightD) => {
            (0,helpers.css)(this.instance, 'minHeight', minHeightD);
        })
            .on(this.instance, 'change keydown mousedown touchstart input', this.autosize)
            .on('afterSetMode.source', this.autosize)
            .on(this.instance, 'mousedown focus', (e) => {
            editor.e.fire(e.type, e);
        });
        this.autosize();
        this.onReady();
    }
    destruct() {
        dom/* Dom.safeRemove */.i.safeRemove(this.instance);
    }
    getValue() {
        return this.instance.value;
    }
    setValue(raw) {
        this.instance.value = raw;
    }
    insertRaw(raw) {
        const value = this.getValue();
        if (this.getSelectionStart() >= 0) {
            const startPos = this.getSelectionStart(), endPos = this.getSelectionEnd();
            this.setValue(value.substring(0, startPos) +
                raw +
                value.substring(endPos, value.length));
        }
        else {
            this.setValue(value + raw);
        }
    }
    getSelectionStart() {
        return this.instance.selectionStart;
    }
    getSelectionEnd() {
        return this.instance.selectionEnd;
    }
    setSelectionRange(start, end = start) {
        this.instance.setSelectionRange(start, end);
    }
    focus() {
        this.instance.focus();
    }
    setPlaceHolder(title) {
        this.instance.setAttribute('placeholder', title);
    }
    setReadOnly(isReadOnly) {
        if (isReadOnly) {
            this.instance.setAttribute('readonly', 'true');
        }
        else {
            this.instance.removeAttribute('readonly');
        }
    }
    selectAll() {
        this.instance.select();
    }
    replaceUndoManager() {
        const { observer } = this.jodit;
        this.j.e.on(this.instance, 'keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                if (e.shiftKey) {
                    observer.redo();
                }
                else {
                    observer.undo();
                }
                this.setSelectionRange(this.getValue().length);
                return false;
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/plugins/source/editor/engines/ace.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



class AceEditor extends SourceEditor {
    constructor() {
        super(...arguments);
        this.className = 'jodit_ace_editor';
        this.proxyOnFocus = (e) => {
            this.j.e.fire('focus', e);
        };
        this.proxyOnMouseDown = (e) => {
            this.j.e.fire('mousedown', e);
        };
    }
    aceExists() {
        return this.j.ow.ace !== undefined;
    }
    getLastColumnIndex(row) {
        return this.instance.session.getLine(row).length;
    }
    getLastColumnIndices() {
        const rows = this.instance.session.getLength();
        const lastColumnIndices = [];
        let lastColIndex = 0;
        for (let i = 0; i < rows; i++) {
            lastColIndex += this.getLastColumnIndex(i);
            if (i > 0) {
                lastColIndex += 1;
            }
            lastColumnIndices[i] = lastColIndex;
        }
        return lastColumnIndices;
    }
    getRowColumnIndices(characterIndex) {
        const lastColumnIndices = this.getLastColumnIndices();
        if (characterIndex <= lastColumnIndices[0]) {
            return { row: 0, column: characterIndex };
        }
        let row = 1;
        for (let i = 1; i < lastColumnIndices.length; i++) {
            if (characterIndex > lastColumnIndices[i]) {
                row = i + 1;
            }
        }
        const column = characterIndex - lastColumnIndices[row - 1] - 1;
        return { row, column };
    }
    setSelectionRangeIndices(start, end) {
        const startRowColumn = this.getRowColumnIndices(start);
        const endRowColumn = this.getRowColumnIndices(end);
        this.instance.getSelection().setSelectionRange({
            start: startRowColumn,
            end: endRowColumn
        });
    }
    getIndexByRowColumn(row, column) {
        const lastColumnIndices = this.getLastColumnIndices();
        return lastColumnIndices[row] - this.getLastColumnIndex(row) + column;
    }
    init(editor) {
        const tryInitAceEditor = () => {
            if (this.instance !== undefined || !this.aceExists()) {
                return;
            }
            const fakeMirror = this.j.c.div('jodit-source__mirror-fake');
            this.container.appendChild(fakeMirror);
            const ace = editor.ow.ace;
            this.instance = ace.edit(fakeMirror);
            this.instance.setTheme(editor.o.sourceEditorNativeOptions.theme);
            this.instance.renderer.setShowGutter(editor.o.sourceEditorNativeOptions.showGutter);
            this.instance
                .getSession()
                .setMode(editor.o.sourceEditorNativeOptions.mode);
            this.instance.setHighlightActiveLine(editor.o.sourceEditorNativeOptions.highlightActiveLine);
            this.instance.getSession().setUseWrapMode(true);
            this.instance.setOption('indentedSoftWrap', false);
            this.instance.setOption('wrap', editor.o.sourceEditorNativeOptions.wrap);
            this.instance.getSession().setUseWorker(false);
            this.instance.$blockScrolling = Infinity;
            this.instance.on('change', this.toWYSIWYG);
            this.instance.on('focus', this.proxyOnFocus);
            this.instance.on('mousedown', this.proxyOnMouseDown);
            if (editor.getRealMode() !== constants.MODE_WYSIWYG) {
                this.setValue(this.getValue());
            }
            const onResize = this.j.async.debounce(() => {
                if (editor.isInDestruct) {
                    return;
                }
                if (editor.o.height !== 'auto') {
                    this.instance.setOption('maxLines', editor.workplace.offsetHeight /
                        this.instance.renderer.lineHeight);
                }
                else {
                    this.instance.setOption('maxLines', Infinity);
                }
                this.instance.resize();
            }, this.j.defaultTimeout * 2);
            editor.e.on('afterResize afterSetMode', onResize);
            onResize();
            this.onReady();
        };
        editor.e.on('afterSetMode', () => {
            if (editor.getRealMode() !== constants.MODE_SOURCE &&
                editor.getMode() !== constants.MODE_SPLIT) {
                return;
            }
            this.fromWYSIWYG();
            tryInitAceEditor();
        });
        tryInitAceEditor();
        if (!this.aceExists()) {
            (0,helpers.loadNext)(editor, editor.o.sourceEditorCDNUrlsJS).then(() => {
                if (!editor.isInDestruct) {
                    tryInitAceEditor();
                }
            });
        }
    }
    destruct() {
        var _a, _b;
        this.instance.off('change', this.toWYSIWYG);
        this.instance.off('focus', this.proxyOnFocus);
        this.instance.off('mousedown', this.proxyOnMouseDown);
        this.instance.destroy();
        (_b = (_a = this.j) === null || _a === void 0 ? void 0 : _a.events) === null || _b === void 0 ? void 0 : _b.off('aceInited.source');
    }
    setValue(value) {
        if (!this.j.o.editHTMLDocumentMode && this.j.o.beautifyHTML) {
            const html = this.j.e.fire('beautifyHTML', value);
            if ((0,helpers.isString)(html)) {
                value = html;
            }
        }
        this.instance.setValue(value);
        this.instance.clearSelection();
    }
    getValue() {
        return this.instance.getValue();
    }
    setReadOnly(isReadOnly) {
        this.instance.setReadOnly(isReadOnly);
    }
    focus() {
        this.instance.focus();
    }
    getSelectionStart() {
        const range = this.instance.selection.getRange();
        return this.getIndexByRowColumn(range.start.row, range.start.column);
    }
    getSelectionEnd() {
        const range = this.instance.selection.getRange();
        return this.getIndexByRowColumn(range.end.row, range.end.column);
    }
    selectAll() {
        this.instance.selection.selectAll();
    }
    insertRaw(html) {
        const start = this.instance.selection.getCursor(), end = this.instance.session.insert(start, html);
        this.instance.selection.setRange({
            start,
            end
        }, false);
    }
    setSelectionRange(start, end) {
        this.setSelectionRangeIndices(start, end);
    }
    setPlaceHolder(title) {
    }
    replaceUndoManager() {
        const { observer } = this.jodit;
        this.instance.commands.addCommand({
            name: 'Undo',
            bindKey: { win: 'Ctrl-Z', mac: 'Command-Z' },
            exec: () => {
                observer.undo();
            }
        });
        this.instance.commands.addCommand({
            name: 'Redo',
            bindKey: { win: 'Ctrl-Shift-Z', mac: 'Command-Shift-Z' },
            exec: () => {
                observer.redo();
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/plugins/source/editor/engines/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/plugins/source/editor/factory.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

function createSourceEditor(type, editor, container, toWYSIWYG, fromWYSIWYG) {
    let sourceEditor;
    switch (type) {
        case 'ace':
            if (!editor.o.shadowRoot) {
                sourceEditor = new AceEditor(editor, container, toWYSIWYG, fromWYSIWYG);
                break;
            }
        default:
            sourceEditor = new TextAreaEditor(editor, container, toWYSIWYG, fromWYSIWYG);
    }
    sourceEditor.init(editor);
    sourceEditor.onReadyAlways(() => {
        sourceEditor.setReadOnly(editor.o.readonly);
    });
    return sourceEditor;
}

;// CONCATENATED MODULE: ./src/plugins/source/source.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */









class source extends Plugin {
    constructor() {
        super(...arguments);
        this.buttons = [
            {
                name: 'source',
                group: 'source'
            }
        ];
        this.__lock = false;
        this.__oldMirrorValue = '';
        this.tempMarkerStart = '{start-jodit-selection}';
        this.tempMarkerStartReg = /{start-jodit-selection}/g;
        this.tempMarkerEnd = '{end-jodit-selection}';
        this.tempMarkerEndReg = /{end-jodit-selection}/g;
        this.getSelectionStart = () => {
            var _a, _b;
            return (_b = (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.getSelectionStart()) !== null && _b !== void 0 ? _b : 0;
        };
        this.getSelectionEnd = () => {
            var _a, _b;
            return (_b = (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.getSelectionEnd()) !== null && _b !== void 0 ? _b : 0;
        };
    }
    onInsertHTML(html) {
        var _a;
        if (!this.j.o.readonly && !this.j.isEditorMode()) {
            (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.insertRaw(html);
            this.toWYSIWYG();
            return false;
        }
    }
    fromWYSIWYG(force = false) {
        if (!this.__lock || force === true) {
            this.__lock = true;
            const new_value = this.j.getEditorValue(false);
            if (new_value !== this.getMirrorValue()) {
                this.setMirrorValue(new_value);
            }
            this.__lock = false;
        }
    }
    toWYSIWYG() {
        if (this.__lock) {
            return;
        }
        const value = this.getMirrorValue();
        if (value === this.__oldMirrorValue) {
            return;
        }
        this.__lock = true;
        this.j.setEditorValue(value);
        this.__lock = false;
        this.__oldMirrorValue = value;
    }
    getNormalPosition(pos, str) {
        let start = pos;
        while (start > 0) {
            start--;
            if (str[start] === '<' &&
                str[start + 1] !== undefined &&
                str[start + 1].match(/[\w/]+/i)) {
                return start;
            }
            if (str[start] === '>') {
                return pos;
            }
        }
        return pos;
    }
    clnInv(str) {
        return str.replace(constants.INVISIBLE_SPACE_REG_EXP(), '');
    }
    onSelectAll(command) {
        var _a;
        if (command.toLowerCase() === 'selectall' &&
            this.j.getRealMode() === constants.MODE_SOURCE) {
            (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.selectAll();
            return false;
        }
    }
    getMirrorValue() {
        var _a;
        return ((_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.getValue()) || '';
    }
    setMirrorValue(value) {
        var _a;
        (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.setValue(value);
    }
    setFocusToMirror() {
        var _a;
        (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.focus();
    }
    saveSelection() {
        if (this.j.getRealMode() === constants.MODE_WYSIWYG) {
            this.j.s.save();
            this.j.setEditorValue();
            this.fromWYSIWYG(true);
        }
        else {
            if (this.j.o.editHTMLDocumentMode) {
                return;
            }
            const value = this.getMirrorValue();
            if (this.getSelectionStart() === this.getSelectionEnd()) {
                const marker = this.j.s.marker(true);
                const selectionStart = this.getNormalPosition(this.getSelectionStart(), this.getMirrorValue());
                this.setMirrorValue(value.substr(0, selectionStart) +
                    this.clnInv(marker.outerHTML) +
                    value.substr(selectionStart));
            }
            else {
                const markerStart = this.j.s.marker(true);
                const markerEnd = this.j.s.marker(false);
                const selectionStart = this.getNormalPosition(this.getSelectionStart(), value);
                const selectionEnd = this.getNormalPosition(this.getSelectionEnd(), value);
                this.setMirrorValue(value.substr(0, selectionStart) +
                    this.clnInv(markerStart.outerHTML) +
                    value.substr(selectionStart, selectionEnd - selectionStart) +
                    this.clnInv(markerEnd.outerHTML) +
                    value.substr(selectionEnd));
            }
            this.toWYSIWYG();
        }
    }
    removeSelection() {
        if (this.j.getRealMode() === constants.MODE_WYSIWYG) {
            this.__lock = true;
            this.j.s.restore();
            this.__lock = false;
            return;
        }
        let value = this.getMirrorValue();
        let selectionStart = 0, selectionEnd = 0;
        try {
            value = value
                .replace(/<span[^>]+data-jodit-selection_marker=(["'])start\1[^>]*>[<>]*?<\/span>/gim, this.tempMarkerStart)
                .replace(/<span[^>]+data-jodit-selection_marker=(["'])end\1[^>]*>[<>]*?<\/span>/gim, this.tempMarkerEnd);
            if (!this.j.o.editHTMLDocumentMode && this.j.o.beautifyHTML) {
                const html = this.j.e.fire('beautifyHTML', value);
                if ((0,helpers.isString)(html)) {
                    value = html;
                }
            }
            selectionStart = value.indexOf(this.tempMarkerStart);
            selectionEnd = selectionStart;
            value = value.replace(this.tempMarkerStartReg, '');
            if (selectionStart !== -1) {
                const selectionEndCursor = value.indexOf(this.tempMarkerEnd);
                if (selectionEndCursor !== -1) {
                    selectionEnd = selectionEndCursor;
                }
            }
            value = value.replace(this.tempMarkerEndReg, '');
        }
        finally {
            value = value
                .replace(this.tempMarkerEndReg, '')
                .replace(this.tempMarkerStartReg, '');
        }
        this.setMirrorValue(value);
        this.setMirrorSelectionRange(selectionStart, selectionEnd);
        this.toWYSIWYG();
        this.setFocusToMirror();
    }
    setMirrorSelectionRange(start, end) {
        var _a;
        (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end);
    }
    onReadonlyReact() {
        var _a;
        (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.setReadOnly(this.j.o.readonly);
    }
    afterInit(editor) {
        this.mirrorContainer = editor.c.div('jodit-source');
        editor.workplace.appendChild(this.mirrorContainer);
        editor.e.on('afterAddPlace changePlace afterInit', () => {
            editor.workplace.appendChild(this.mirrorContainer);
        });
        this.sourceEditor = createSourceEditor('area', editor, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG);
        this.onReadonlyReact();
        editor.e
            .on('placeholder.source', (text) => {
            var _a;
            (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.setPlaceHolder(text);
        })
            .on('change.source', this.fromWYSIWYG)
            .on('beautifyHTML', html => html);
        if (editor.o.beautifyHTML) {
            const addEventListener = () => {
                var _a;
                const html_beautify = editor.ow.html_beautify;
                if (html_beautify && !editor.isInDestruct) {
                    (_a = editor.events) === null || _a === void 0 ? void 0 : _a.off('beautifyHTML').on('beautifyHTML', html => html_beautify(html));
                    return true;
                }
                return false;
            };
            if (!addEventListener()) {
                (0,helpers.loadNext)(editor, editor.o.beautifyHTMLCDNUrlsJS).then(addEventListener);
            }
        }
        this.fromWYSIWYG();
        this.initSourceEditor(editor);
    }
    initSourceEditor(editor) {
        var _a;
        if (editor.o.sourceEditor !== 'area') {
            const sourceEditor = createSourceEditor(editor.o.sourceEditor, editor, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG);
            sourceEditor.onReadyAlways(() => {
                var _a, _b;
                (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.destruct();
                this.sourceEditor = sourceEditor;
                this.fromWYSIWYG(true);
                (_b = editor.events) === null || _b === void 0 ? void 0 : _b.fire('sourceEditorReady', editor);
            });
        }
        else {
            (_a = this.sourceEditor) === null || _a === void 0 ? void 0 : _a.onReadyAlways(() => {
                var _a;
                this.fromWYSIWYG(true);
                (_a = editor.events) === null || _a === void 0 ? void 0 : _a.fire('sourceEditorReady', editor);
            });
        }
    }
    beforeDestruct(jodit) {
        if (this.sourceEditor) {
            this.sourceEditor.destruct();
            delete this.sourceEditor;
        }
        dom/* Dom.safeRemove */.i.safeRemove(this.mirrorContainer);
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':insertHTML.source')
], source.prototype, "onInsertHTML", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], source.prototype, "fromWYSIWYG", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], source.prototype, "toWYSIWYG", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], source.prototype, "getNormalPosition", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':beforeCommand.source')
], source.prototype, "onSelectAll", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':beforeSetMode.source')
], source.prototype, "saveSelection", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':afterSetMode.source')
], source.prototype, "removeSelection", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], source.prototype, "setMirrorSelectionRange", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':readonly.source')
], source.prototype, "onReadonlyReact", null);

;// CONCATENATED MODULE: ./src/plugins/source/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/plugins/stat.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.showCharsCounter */.D.prototype.showCharsCounter = true;
config/* Config.prototype.countHTMLChars */.D.prototype.countHTMLChars = false;
config/* Config.prototype.showWordsCounter */.D.prototype.showWordsCounter = true;
class stat extends Plugin {
    constructor() {
        super(...arguments);
        this.charCounter = null;
        this.wordCounter = null;
        this.reInit = () => {
            if (this.j.o.showCharsCounter && this.charCounter) {
                this.j.statusbar.append(this.charCounter, true);
            }
            if (this.j.o.showWordsCounter && this.wordCounter) {
                this.j.statusbar.append(this.wordCounter, true);
            }
            this.j.e.off('change keyup', this.calc).on('change keyup', this.calc);
            this.calc();
        };
        this.calc = this.j.async.throttle(() => {
            const text = this.j.text;
            if (this.j.o.showCharsCounter && this.charCounter) {
                const chars = this.j.o.countHTMLChars
                    ? this.j.value
                    : text.replace((0,constants.SPACE_REG_EXP)(), '');
                this.charCounter.textContent = this.j.i18n('Chars: %d', chars.length);
            }
            if (this.j.o.showWordsCounter && this.wordCounter) {
                this.wordCounter.textContent = this.j.i18n('Words: %d', text
                    .replace((0,constants.INVISIBLE_SPACE_REG_EXP)(), '')
                    .split((0,constants.SPACE_REG_EXP)())
                    .filter((e) => e.length).length);
            }
        }, this.j.defaultTimeout);
    }
    afterInit() {
        this.charCounter = this.j.c.span();
        this.wordCounter = this.j.c.span();
        this.j.e.on('afterInit changePlace afterAddPlace', this.reInit);
        this.reInit();
    }
    beforeDestruct() {
        dom/* Dom.safeRemove */.i.safeRemove(this.charCounter);
        dom/* Dom.safeRemove */.i.safeRemove(this.wordCounter);
        this.j.e.off('afterInit changePlace afterAddPlace', this.reInit);
        this.charCounter = null;
        this.wordCounter = null;
    }
}

;// CONCATENATED MODULE: ./src/plugins/sticky/sticky.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







config/* Config.prototype.toolbarSticky */.D.prototype.toolbarSticky = true;
config/* Config.prototype.toolbarDisableStickyForMobile */.D.prototype.toolbarDisableStickyForMobile = true;
config/* Config.prototype.toolbarStickyOffset */.D.prototype.toolbarStickyOffset = 0;
class sticky extends Plugin {
    constructor() {
        super(...arguments);
        this.isToolbarSticked = false;
        this.createDummy = (toolbar) => {
            if (false) {}
        };
        this.addSticky = (toolbar) => {
            if (!this.isToolbarSticked) {
                this.createDummy(toolbar);
                this.j.container.classList.add('jodit_sticky');
                this.isToolbarSticked = true;
            }
            (0,helpers.css)(toolbar, {
                top: this.j.o.toolbarStickyOffset || null,
                width: this.j.container.offsetWidth - 2
            });
            if (false) {}
        };
        this.removeSticky = (toolbar) => {
            if (this.isToolbarSticked) {
                (0,helpers.css)(toolbar, {
                    width: '',
                    top: ''
                });
                this.j.container.classList.remove('jodit_sticky');
                this.isToolbarSticked = false;
            }
        };
    }
    afterInit(jodit) {
        jodit.e
            .on(jodit.ow, 'scroll.sticky wheel.sticky mousewheel.sticky resize.sticky', this.onScroll)
            .on('getStickyState.sticky', () => this.isToolbarSticked);
    }
    onScroll() {
        const { jodit } = this;
        const scrollWindowTop = jodit.ow.pageYOffset ||
            (jodit.od.documentElement &&
                jodit.od.documentElement.scrollTop) ||
            0, offsetEditor = (0,helpers.offset)(jodit.container, jodit, jodit.od, true), doSticky = jodit.getMode() === constants.MODE_WYSIWYG &&
            scrollWindowTop + jodit.o.toolbarStickyOffset >
                offsetEditor.top &&
            scrollWindowTop + jodit.o.toolbarStickyOffset <
                offsetEditor.top + offsetEditor.height &&
            !(jodit.o.toolbarDisableStickyForMobile && this.isMobile());
        if (jodit.o.toolbarSticky &&
            jodit.o.toolbar === true &&
            this.isToolbarSticked !== doSticky) {
            const container = jodit.toolbarContainer;
            if (container) {
                doSticky
                    ? this.addSticky(container)
                    : this.removeSticky(container);
            }
            jodit.e.fire('toggleSticky', doSticky);
        }
    }
    isMobile() {
        return (this.j &&
            this.j.options &&
            this.j.container &&
            this.j.o.sizeSM >= this.j.container.offsetWidth);
    }
    beforeDestruct(jodit) {
        this.dummyBox && dom/* Dom.safeRemove */.i.safeRemove(this.dummyBox);
        jodit.e
            .off(jodit.ow, 'scroll.sticky wheel.sticky mousewheel.sticky resize.sticky', this.onScroll)
            .off('.sticky');
    }
}
(0,tslib_es6.__decorate)([
    (0,decorators.throttle)()
], sticky.prototype, "onScroll", null);

;// CONCATENATED MODULE: ./src/plugins/symbols/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */


config/* Config.prototype.usePopupForSpecialCharacters */.D.prototype.usePopupForSpecialCharacters = false;
config/* Config.prototype.specialCharacters */.D.prototype.specialCharacters = [
    '!',
    '&quot;',
    '#',
    '$',
    '%',
    '&amp;',
    "'",
    '(',
    ')',
    '*',
    '+',
    '-',
    '.',
    '/',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ':',
    ';',
    '&lt;',
    '=',
    '&gt;',
    '?',
    '@',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '[',
    ']',
    '^',
    '_',
    '`',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '{',
    '|',
    '}',
    '~',
    '&euro;',
    '&lsquo;',
    '&rsquo;',
    '&ldquo;',
    '&rdquo;',
    '&ndash;',
    '&mdash;',
    '&iexcl;',
    '&cent;',
    '&pound;',
    '&curren;',
    '&yen;',
    '&brvbar;',
    '&sect;',
    '&uml;',
    '&copy;',
    '&ordf;',
    '&laquo;',
    '&raquo;',
    '&not;',
    '&reg;',
    '&macr;',
    '&deg;',
    '&sup2;',
    '&sup3;',
    '&acute;',
    '&micro;',
    '&para;',
    '&middot;',
    '&cedil;',
    '&sup1;',
    '&ordm;',
    '&frac14;',
    '&frac12;',
    '&frac34;',
    '&iquest;',
    '&Agrave;',
    '&Aacute;',
    '&Acirc;',
    '&Atilde;',
    '&Auml;',
    '&Aring;',
    '&AElig;',
    '&Ccedil;',
    '&Egrave;',
    '&Eacute;',
    '&Ecirc;',
    '&Euml;',
    '&Igrave;',
    '&Iacute;',
    '&Icirc;',
    '&Iuml;',
    '&ETH;',
    '&Ntilde;',
    '&Ograve;',
    '&Oacute;',
    '&Ocirc;',
    '&Otilde;',
    '&Ouml;',
    '&times;',
    '&Oslash;',
    '&Ugrave;',
    '&Uacute;',
    '&Ucirc;',
    '&Uuml;',
    '&Yacute;',
    '&THORN;',
    '&szlig;',
    '&agrave;',
    '&aacute;',
    '&acirc;',
    '&atilde;',
    '&auml;',
    '&aring;',
    '&aelig;',
    '&ccedil;',
    '&egrave;',
    '&eacute;',
    '&ecirc;',
    '&euml;',
    '&igrave;',
    '&iacute;',
    '&icirc;',
    '&iuml;',
    '&eth;',
    '&ntilde;',
    '&ograve;',
    '&oacute;',
    '&ocirc;',
    '&otilde;',
    '&ouml;',
    '&divide;',
    '&oslash;',
    '&ugrave;',
    '&uacute;',
    '&ucirc;',
    '&uuml;',
    '&yacute;',
    '&thorn;',
    '&yuml;',
    '&OElig;',
    '&oelig;',
    '&#372;',
    '&#374',
    '&#373',
    '&#375;',
    '&sbquo;',
    '&#8219;',
    '&bdquo;',
    '&hellip;',
    '&trade;',
    '&#9658;',
    '&bull;',
    '&rarr;',
    '&rArr;',
    '&hArr;',
    '&diams;',
    '&asymp;'
];
config/* Config.prototype.controls.symbol */.D.prototype.controls.symbol = {
    icon: 'omega',
    hotkeys: ['ctrl+shift+i', 'cmd+shift+i'],
    tooltip: 'Insert Special Character',
    popup: (editor, current, control, close) => {
        const container = editor.e.fire('generateSpecialCharactersTable.symbols');
        if (container) {
            if (editor.o.usePopupForSpecialCharacters) {
                const box = editor.c.div();
                box.classList.add('jodit-symbols');
                box.appendChild(container);
                editor.e.on(container, 'close_dialog', close);
                return box;
            }
            else {
                Alert(container, editor.i18n('Select Special Character'), undefined, 'jodit-symbols').bindDestruct(editor);
                const a = container.querySelector('a');
                a && a.focus();
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/plugins/symbols/symbols.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





class symbols extends Plugin {
    constructor() {
        super(...arguments);
        this.buttons = [
            {
                name: 'symbol',
                group: 'insert'
            }
        ];
        this.countInRow = 17;
    }
    afterInit(jodit) {
        jodit.e.on('generateSpecialCharactersTable.symbols', () => {
            const container = jodit.c.fromHTML('<div class="jodit-symbols__container">' +
                '<div class="jodit-symbols__container_table"><table><tbody></tbody></table></div>' +
                '<div class="jodit-symbols__container_preview"><div class="jodit-symbols__preview"></div></div>' +
                '</div>'), preview = container.querySelector('.jodit-symbols__preview'), table = container.querySelector('table'), body = table.tBodies[0], chars = [];
            for (let i = 0; i < jodit.o.specialCharacters.length;) {
                const tr = jodit.c.element('tr');
                for (let j = 0; j < this.countInRow && i < jodit.o.specialCharacters.length; j += 1, i += 1) {
                    const td = jodit.c.element('td'), a = jodit.c.fromHTML(`<a
									data-index="${i}"
									data-index-j="${j}"
									href="javascript:void(0)"
									role="option"
									tabindex="-1"
							>${jodit.o.specialCharacters[i]}</a>`);
                    chars.push(a);
                    td.appendChild(a);
                    tr.appendChild(td);
                }
                body.appendChild(tr);
            }
            const self = this;
            jodit.e
                .on(chars, 'focus', function () {
                preview.innerHTML = this.innerHTML;
            })
                .on(chars, 'mousedown', function (e) {
                if (dom/* Dom.isTag */.i.isTag(this, 'a')) {
                    jodit.s.focus();
                    jodit.s.insertHTML(this.innerHTML);
                    jodit.e.fire(this, 'close_dialog');
                    e && e.preventDefault();
                    e && e.stopImmediatePropagation();
                }
            })
                .on(chars, 'mouseenter', function () {
                if (dom/* Dom.isTag */.i.isTag(this, 'a')) {
                    this.focus();
                }
            })
                .on(chars, 'keydown', (e) => {
                const target = e.target;
                if (dom/* Dom.isTag */.i.isTag(target, 'a')) {
                    const index = parseInt((0,utils/* attr */.Lj)(target, '-index') || '0', 10), jIndex = parseInt((0,utils/* attr */.Lj)(target, 'data-index-j') || '0', 10);
                    let newIndex;
                    switch (e.key) {
                        case constants.KEY_UP:
                        case constants.KEY_DOWN:
                            newIndex =
                                e.key === constants.KEY_UP
                                    ? index - self.countInRow
                                    : index + self.countInRow;
                            if (chars[newIndex] === undefined) {
                                newIndex =
                                    e.key === constants.KEY_UP
                                        ? Math.floor(chars.length /
                                            self.countInRow) *
                                            self.countInRow +
                                            jIndex
                                        : jIndex;
                                if (newIndex > chars.length - 1) {
                                    newIndex -= self.countInRow;
                                }
                            }
                            chars[newIndex] && chars[newIndex].focus();
                            break;
                        case constants.KEY_RIGHT:
                        case constants.KEY_LEFT:
                            newIndex =
                                e.key === constants.KEY_LEFT ? index - 1 : index + 1;
                            if (chars[newIndex] === undefined) {
                                newIndex =
                                    e.key === constants.KEY_LEFT
                                        ? chars.length - 1
                                        : 0;
                            }
                            chars[newIndex] && chars[newIndex].focus();
                            break;
                        case constants.KEY_ENTER:
                            jodit.e.fire(target, 'mousedown');
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            break;
                    }
                }
            });
            return container;
        });
    }
    beforeDestruct(jodit) {
        jodit.e.off('generateSpecialCharactersTable.symbols');
    }
}

;// CONCATENATED MODULE: ./src/plugins/table/config.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */




config/* Config.prototype.table */.D.prototype.table = {
    allowCellSelection: true,
    selectionCellStyle: 'border: 1px double #1e88e5 !important;' +
        'background-color: rgba(158, 207, 250, 0.3)!important',
    allowCellResize: true,
    useExtraClassesOptions: false
};
config/* Config.prototype.controls.table */.D.prototype.controls.table = {
    data: {
        cols: 10,
        rows: 10,
        classList: {
            'table table-bordered': 'Bootstrap Bordered',
            'table table-striped': 'Bootstrap Striped',
            'table table-dark': 'Bootstrap Dark'
        }
    },
    popup: (editor, current, control, close, button) => {
        const default_rows_count = control.data && control.data.rows ? control.data.rows : 10, default_cols_count = control.data && control.data.cols ? control.data.cols : 10;
        const generateExtraClasses = () => {
            if (!editor.o.table.useExtraClassesOptions) {
                return '';
            }
            const out = [];
            if (control.data) {
                const classList = control.data.classList;
                Object.keys(classList).forEach((classes) => {
                    out.push(`<label class="jodit_vertical_middle"><input class="jodit-checkbox" value="${classes}" type="checkbox"/>${classList[classes]}</label>`);
                });
            }
            return out.join('');
        };
        const form = editor.c.fromHTML('<form class="jodit-form jodit-form__inserter">' +
            '<div class="jodit-form__table-creator-box">' +
            '<div class="jodit-form__container"></div>' +
            '<div class="jodit-form__options">' +
            generateExtraClasses() +
            '</div>' +
            '</div>' +
            '<label class="jodit-form__center">' +
            '<span>1</span> &times; <span>1</span>' +
            '</label>' +
            '</form>'), rows = form.querySelectorAll('span')[0], cols = form.querySelectorAll('span')[1], blocksContainer = form.querySelector('.jodit-form__container'), options = form.querySelector('.jodit-form__options'), cells = [];
        const cnt = default_rows_count * default_cols_count;
        for (let i = 0; i < cnt; i += 1) {
            if (!cells[i]) {
                cells.push(editor.c.element('span', {
                    dataIndex: i
                }));
            }
        }
        const mouseenter = (e, index) => {
            const dv = e.target;
            if (!dom/* Dom.isTag */.i.isTag(dv, 'span')) {
                return;
            }
            const k = index === undefined || isNaN(index)
                ? parseInt((0,utils/* attr */.Lj)(dv, '-index') || '0', 10)
                : index || 0;
            const rows_count = Math.ceil((k + 1) / default_cols_count), cols_count = (k % default_cols_count) + 1;
            for (let i = 0; i < cells.length; i += 1) {
                if (cols_count >= (i % default_cols_count) + 1 &&
                    rows_count >= Math.ceil((i + 1) / default_cols_count)) {
                    cells[i].className = 'jodit_hovered';
                }
                else {
                    cells[i].className = '';
                }
            }
            cols.textContent = cols_count.toString();
            rows.textContent = rows_count.toString();
        };
        editor.e
            .on(blocksContainer, 'mousemove', mouseenter)
            .on(blocksContainer, 'touchstart mousedown', (e) => {
            const dv = e.target;
            e.preventDefault();
            e.stopImmediatePropagation();
            if (!dom/* Dom.isTag */.i.isTag(dv, 'span')) {
                return;
            }
            const k = parseInt((0,utils/* attr */.Lj)(dv, '-index') || '0', 10);
            const rows_count = Math.ceil((k + 1) / default_cols_count), cols_count = (k % default_cols_count) + 1;
            const crt = editor.createInside, tbody = crt.element('tbody'), table = crt.element('table');
            table.appendChild(tbody);
            table.style.width = '100%';
            let first_td = null, tr, td;
            for (let i = 1; i <= rows_count; i += 1) {
                tr = crt.element('tr');
                for (let j = 1; j <= cols_count; j += 1) {
                    td = crt.element('td');
                    if (!first_td) {
                        first_td = td;
                    }
                    td.appendChild(crt.element('br'));
                    tr.appendChild(crt.text('\n'));
                    tr.appendChild(crt.text('\t'));
                    tr.appendChild(td);
                }
                tbody.appendChild(crt.text('\n'));
                tbody.appendChild(tr);
            }
            const crnt = editor.s.current();
            if (crnt && editor.s.isCollapsed()) {
                const block = dom/* Dom.closest */.i.closest(crnt, node => dom/* Dom.isBlock */.i.isBlock(node, editor.ew), editor.editor);
                if (block &&
                    block !== editor.editor &&
                    !block.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/)) {
                    editor.s.setCursorAfter(block);
                }
            }
            (0,helpers.$$)('input[type=checkbox]:checked', options).forEach((input) => {
                input.value
                    .split(/[\s]+/)
                    .forEach((className) => {
                    table.classList.add(className);
                });
            });
            editor.s.insertNode(crt.text('\n'));
            editor.s.insertNode(table, false);
            if (first_td) {
                editor.s.setCursorIn(first_td);
                (0,helpers.scrollIntoViewIfNeeded)(first_td, editor.editor, editor.ed);
            }
            close();
        });
        if (button && button.parentElement) {
            for (let i = 0; i < default_rows_count; i += 1) {
                const row = editor.c.div();
                for (let j = 0; j < default_cols_count; j += 1) {
                    row.appendChild(cells[i * default_cols_count + j]);
                }
                blocksContainer.appendChild(row);
            }
            if (cells[0]) {
                cells[0].className = 'hovered';
            }
        }
        return form;
    },
    tooltip: 'Insert table'
};

;// CONCATENATED MODULE: ./src/plugins/table/resize-cells.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






const key = 'table_processor_observer-resize';
class resizeCells extends Plugin {
    constructor() {
        super(...arguments);
        this.selectMode = false;
        this.resizeDelta = 0;
        this.createResizeHandle = () => {
            if (!this.resizeHandler) {
                this.resizeHandler = this.j.c.div('jodit-table-resizer');
                this.j.e
                    .on(this.resizeHandler, 'mousedown.table touchstart.table', this.onHandleMouseDown)
                    .on(this.resizeHandler, 'mouseenter.table', () => {
                    this.j.async.clearTimeout(this.hideTimeout);
                });
            }
        };
        this.hideTimeout = 0;
        this.drag = false;
        this.minX = 0;
        this.maxX = 0;
        this.startX = 0;
    }
    get module() {
        return this.j.getInstance('Table', this.j.o);
    }
    get isRTL() {
        return this.j.o.direction === 'rtl';
    }
    showResizeHandle() {
        this.j.async.clearTimeout(this.hideTimeout);
        this.j.workplace.appendChild(this.resizeHandler);
    }
    hideResizeHandle() {
        this.hideTimeout = this.j.async.setTimeout(() => {
            dom/* Dom.safeRemove */.i.safeRemove(this.resizeHandler);
        }, {
            timeout: this.j.defaultTimeout,
            label: 'hideResizer'
        });
    }
    onHandleMouseDown(event) {
        if (this.j.isLocked) {
            return;
        }
        this.drag = true;
        this.j.e
            .on(this.j.ow, 'mouseup.resize-cells touchend.resize-cells', this.onMouseUp)
            .on(this.j.ew, 'mousemove.table touchmove.table', this.onMouseMove);
        this.startX = event.clientX;
        this.j.lock(key);
        this.resizeHandler.classList.add('jodit-table-resizer_moved');
        let box, tableBox = this.workTable.getBoundingClientRect();
        this.minX = 0;
        this.maxX = 1000000;
        if (this.wholeTable != null) {
            tableBox = this.workTable.parentNode.getBoundingClientRect();
            this.minX = tableBox.left;
            this.maxX = this.minX + tableBox.width;
        }
        else {
            const coordinate = Table.formalCoordinate(this.workTable, this.workCell, true);
            Table.formalMatrix(this.workTable, (td, i, j) => {
                if (coordinate[1] === j) {
                    box = td.getBoundingClientRect();
                    this.minX = Math.max(box.left + constants.NEARBY / 2, this.minX);
                }
                if (coordinate[1] + (this.isRTL ? -1 : 1) === j) {
                    box = td.getBoundingClientRect();
                    this.maxX = Math.min(box.left + box.width - constants.NEARBY / 2, this.maxX);
                }
            });
        }
        return false;
    }
    onMouseMove(event) {
        if (!this.drag) {
            return;
        }
        this.j.e.fire('closeAllPopups');
        let x = event.clientX;
        const workplacePosition = (0,helpers.offset)((this.resizeHandler.parentNode ||
            this.j.od.documentElement), this.j, this.j.od, true);
        if (x < this.minX) {
            x = this.minX;
        }
        if (x > this.maxX) {
            x = this.maxX;
        }
        this.resizeDelta =
            x - this.startX + (!this.j.o.iframe ? 0 : workplacePosition.left);
        this.resizeHandler.style.left =
            x - (this.j.o.iframe ? 0 : workplacePosition.left) + 'px';
        const sel = this.j.s.sel;
        sel && sel.removeAllRanges();
    }
    onMouseUp(e) {
        if (this.selectMode || this.drag) {
            this.selectMode = false;
            this.j.unlock();
        }
        if (!this.resizeHandler || !this.drag) {
            return;
        }
        this.drag = false;
        this.j.e.off(this.j.ew, 'mousemove.table touchmove.table', this.onMouseMove);
        this.resizeHandler.classList.remove('jodit-table-resizer_moved');
        if (this.startX !== e.clientX) {
            if (this.wholeTable == null) {
                this.resizeColumns();
            }
            else {
                this.resizeTable();
            }
        }
        this.j.setEditorValue();
        this.j.s.focus();
    }
    resizeColumns() {
        const delta = this.resizeDelta;
        const marked = [];
        Table.setColumnWidthByDelta(this.workTable, Table.formalCoordinate(this.workTable, this.workCell, true)[1], delta, true, marked);
        const nextTD = (0,helpers.call)(this.isRTL ? dom/* Dom.prev */.i.prev : dom/* Dom.next */.i.next, this.workCell, elm => dom/* Dom.isCell */.i.isCell(elm, this.j.ew), this.workCell.parentNode);
        Table.setColumnWidthByDelta(this.workTable, Table.formalCoordinate(this.workTable, nextTD)[1], -delta, false, marked);
    }
    resizeTable() {
        const delta = this.resizeDelta * (this.isRTL ? -1 : 1);
        const width = this.workTable.offsetWidth, parentWidth = (0,helpers.getContentWidth)(this.workTable.parentNode, this.j.ew);
        const rightSide = !this.wholeTable;
        const needChangeWidth = this.isRTL ? !rightSide : rightSide;
        if (needChangeWidth) {
            this.workTable.style.width =
                ((width + delta) / parentWidth) * 100 + '%';
        }
        else {
            const side = this.isRTL ? 'marginRight' : 'marginLeft';
            const margin = parseInt(this.j.ew.getComputedStyle(this.workTable)[side] || '0', 10);
            this.workTable.style.width =
                ((width - delta) / parentWidth) * 100 + '%';
            this.workTable.style[side] =
                ((margin + delta) / parentWidth) * 100 + '%';
        }
    }
    setWorkCell(cell, wholeTable = null) {
        this.wholeTable = wholeTable;
        this.workCell = cell;
        this.workTable = dom/* Dom.up */.i.up(cell, (elm) => dom/* Dom.isTag */.i.isTag(elm, 'table'), this.j.editor);
    }
    calcHandlePosition(table, cell, offsetX = 0, delta = 0) {
        const box = (0,helpers.offset)(cell, this.j, this.j.ed);
        if (offsetX > constants.NEARBY && offsetX < box.width - constants.NEARBY) {
            this.hideResizeHandle();
            return;
        }
        const workplacePosition = (0,helpers.offset)(this.j.workplace, this.j, this.j.od, true), parentBox = (0,helpers.offset)(table, this.j, this.j.ed);
        this.resizeHandler.style.left =
            (offsetX <= constants.NEARBY ? box.left : box.left + box.width) -
                workplacePosition.left +
                delta +
                'px';
        Object.assign(this.resizeHandler.style, {
            height: parentBox.height + 'px',
            top: parentBox.top - workplacePosition.top + 'px'
        });
        this.showResizeHandle();
        if (offsetX <= constants.NEARBY) {
            const prevTD = (0,helpers.call)(this.isRTL ? dom/* Dom.next */.i.next : dom/* Dom.prev */.i.prev, cell, elm => dom/* Dom.isCell */.i.isCell(elm, this.j.ew), cell.parentNode);
            this.setWorkCell(prevTD || cell, prevTD ? null : true);
        }
        else {
            const nextTD = (0,helpers.call)(!this.isRTL ? dom/* Dom.next */.i.next : dom/* Dom.prev */.i.prev, cell, elm => dom/* Dom.isCell */.i.isCell(elm, this.j.ew), cell.parentNode);
            this.setWorkCell(cell, !nextTD ? false : null);
        }
    }
    afterInit(editor) {
        if (!editor.o.table.allowCellResize) {
            return;
        }
        editor.e
            .off(this.j.ow, '.resize-cells')
            .off('.resize-cells')
            .on('change.resize-cells afterCommand.resize-cells afterSetMode.resize-cells', () => {
            (0,helpers.$$)('table', editor.editor).forEach(this.observe);
        })
            .on(this.j.ow, 'scroll.resize-cells', () => {
            if (!this.drag) {
                return;
            }
            const parent = dom/* Dom.up */.i.up(this.workCell, (elm) => dom/* Dom.isTag */.i.isTag(elm, 'table'), editor.editor);
            if (parent) {
                const parentBox = parent.getBoundingClientRect();
                this.resizeHandler.style.top = parentBox.top + 'px';
            }
        })
            .on('beforeSetMode.resize-cells', () => {
            this.module.getAllSelectedCells().forEach(td => {
                this.module.removeSelection(td);
                Table.normalizeTable(dom/* Dom.closest */.i.closest(td, 'table', editor.editor));
            });
        });
    }
    observe(table) {
        if ((0,helpers.dataBind)(table, key)) {
            return;
        }
        (0,helpers.dataBind)(table, key, true);
        this.j.e
            .on(table, 'mouseleave.resize-cells', (e) => {
            if (this.resizeHandler &&
                this.resizeHandler !== e.relatedTarget) {
                this.hideResizeHandle();
            }
        })
            .on(table, 'mousemove.resize-cells touchmove.resize-cells', this.j.async.throttle((event) => {
            if (this.j.isLocked) {
                return;
            }
            const cell = dom/* Dom.up */.i.up(event.target, elm => dom/* Dom.isCell */.i.isCell(elm, this.j.ew), table);
            if (!cell) {
                return;
            }
            this.calcHandlePosition(table, cell, event.offsetX);
        }, {
            timeout: this.j.defaultTimeout
        }));
        this.createResizeHandle();
    }
    beforeDestruct(jodit) {
        if (jodit.events) {
            jodit.e.off(this.j.ow, '.resize-cells');
            jodit.e.off('.resize-cells');
        }
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], resizeCells.prototype, "onHandleMouseDown", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], resizeCells.prototype, "onMouseMove", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], resizeCells.prototype, "onMouseUp", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], resizeCells.prototype, "observe", null);

;// CONCATENATED MODULE: ./src/plugins/table/select-cells.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







const select_cells_key = 'table_processor_observer';
const MOUSE_MOVE_LABEL = 'onMoveTableSelectCell';
class selectCells extends Plugin {
    constructor() {
        super(...arguments);
        this.requires = ['select'];
        this.selectedCell = null;
        this.isSelectionMode = false;
    }
    get module() {
        return this.j.getInstance('Table', this.j.o);
    }
    afterInit(jodit) {
        if (!jodit.o.table.allowCellSelection) {
            return;
        }
        jodit.e
            .on('keydown.select-cells', (event) => {
            if (event.key === constants.KEY_TAB) {
                this.unselectCells();
            }
        })
            .on('beforeCommand.select-cells', this.onExecCommand)
            .on('afterCommand.select-cells', this.onAfterCommand)
            .on([
            'clickEditor',
            'mousedownTd',
            'mousedownTh',
            'touchstartTd',
            'touchstartTh'
        ]
            .map(e => e + '.select-cells')
            .join(' '), this.onStartSelection)
            .on('clickTr clickTbody', () => {
            var _a;
            const cellsCount = this.module.getAllSelectedCells().length;
            if (cellsCount) {
                if (cellsCount > 1) {
                    (_a = this.j.s.sel) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
                }
                return false;
            }
        });
    }
    onStartSelection(cell) {
        if (this.j.o.readonly) {
            return;
        }
        this.unselectCells();
        if (cell === this.j.editor) {
            return;
        }
        const table = dom/* Dom.closest */.i.closest(cell, 'table', this.j.editor);
        if (!cell || !table) {
            return;
        }
        if (!cell.firstChild) {
            cell.appendChild(this.j.createInside.element('br'));
        }
        this.isSelectionMode = true;
        this.selectedCell = cell;
        this.module.addSelection(cell);
        this.j.e
            .on(table, 'mousemove.select-cells touchmove.select-cells', this.j.async.throttle(this.onMove.bind(this, table), {
            label: MOUSE_MOVE_LABEL,
            timeout: this.j.defaultTimeout / 2
        }))
            .on(table, 'mouseup.select-cells touchend.select-cells', this.onStopSelection.bind(this, table));
        return false;
    }
    onOutsideClick() {
        this.selectedCell = null;
        this.onRemoveSelection();
    }
    onChange() {
        if (!this.j.isLocked && !this.isSelectionMode) {
            this.onRemoveSelection();
        }
    }
    onMove(table, e) {
        var _a;
        if (this.j.o.readonly) {
            return;
        }
        if (this.j.isLockedNotBy(select_cells_key)) {
            return;
        }
        const node = this.j.ed.elementFromPoint(e.clientX, e.clientY);
        if (!node) {
            return;
        }
        const cell = dom/* Dom.closest */.i.closest(node, ['td', 'th'], table);
        if (!cell || !this.selectedCell) {
            return;
        }
        if (cell !== this.selectedCell) {
            this.j.lock(select_cells_key);
        }
        this.unselectCells(table);
        const bound = Table.getSelectedBound(table, [cell, this.selectedCell]), box = Table.formalMatrix(table);
        for (let i = bound[0][0]; i <= bound[1][0]; i += 1) {
            for (let j = bound[0][1]; j <= bound[1][1]; j += 1) {
                this.module.addSelection(box[i][j]);
            }
        }
        const cellsCount = this.module.getAllSelectedCells().length;
        if (cellsCount > 1) {
            (_a = this.j.s.sel) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
        }
        this.j.e.fire('hidePopup');
        e.stopPropagation();
        (() => {
            const n = this.j.createInside.fromHTML('<div style="color:rgba(0,0,0,0.01);width:0;height:0">&nbsp;</div>');
            cell.appendChild(n);
            this.j.async.setTimeout(() => {
                var _a;
                (_a = n.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(n);
            }, this.j.defaultTimeout / 5);
        })();
    }
    onRemoveSelection(e) {
        var _a;
        if (!((_a = e === null || e === void 0 ? void 0 : e.buffer) === null || _a === void 0 ? void 0 : _a.actionTrigger) &&
            !this.selectedCell &&
            this.module.getAllSelectedCells().length) {
            this.j.unlock();
            this.unselectCells();
            this.j.e.fire('hidePopup', 'cells');
            return;
        }
        this.isSelectionMode = false;
        this.selectedCell = null;
    }
    onStopSelection(table, e) {
        if (!this.selectedCell) {
            return;
        }
        this.isSelectionMode = false;
        this.j.unlock();
        const node = this.j.ed.elementFromPoint(e.clientX, e.clientY);
        if (!node) {
            return;
        }
        const cell = dom/* Dom.closest */.i.closest(node, ['td', 'th'], table);
        if (!cell) {
            return;
        }
        const ownTable = dom/* Dom.closest */.i.closest(cell, 'table', table);
        if (ownTable && ownTable !== table) {
            return;
        }
        const bound = Table.getSelectedBound(table, [cell, this.selectedCell]), box = Table.formalMatrix(table);
        const max = box[bound[1][0]][bound[1][1]], min = box[bound[0][0]][bound[0][1]];
        this.j.e.fire('showPopup', table, () => {
            const minOffset = (0,helpers.position)(min, this.j), maxOffset = (0,helpers.position)(max, this.j);
            return {
                left: minOffset.left,
                top: minOffset.top,
                width: maxOffset.left - minOffset.left + maxOffset.width,
                height: maxOffset.top - minOffset.top + maxOffset.height
            };
        }, 'cells');
        (0,helpers.$$)('table', this.j.editor).forEach(table => {
            this.j.e.off(table, 'mousemove.select-cells touchmove.select-cells mouseup.select-cells touchend.select-cells');
        });
        this.j.async.clearTimeout(MOUSE_MOVE_LABEL);
    }
    unselectCells(table, currentCell) {
        const module = this.module;
        const cells = module.getAllSelectedCells();
        if (cells.length) {
            cells.forEach(cell => {
                if (!currentCell || currentCell !== cell) {
                    module.removeSelection(cell);
                }
            });
        }
    }
    onExecCommand(command) {
        if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(command)) {
            command = command.replace('table', '');
            const cells = this.module.getAllSelectedCells();
            if (cells.length) {
                const [cell] = cells;
                if (!cell) {
                    return;
                }
                const table = dom/* Dom.closest */.i.closest(cell, 'table', this.j.editor);
                if (!table) {
                    return;
                }
                switch (command) {
                    case 'splitv':
                        Table.splitVertical(table, this.j);
                        break;
                    case 'splitg':
                        Table.splitHorizontal(table, this.j);
                        break;
                    case 'merge':
                        Table.mergeSelected(table, this.j);
                        break;
                    case 'empty':
                        cells.forEach(td => dom/* Dom.detach */.i.detach(td));
                        break;
                    case 'bin':
                        dom/* Dom.safeRemove */.i.safeRemove(table);
                        break;
                    case 'binrow':
                        Table.removeRow(table, cell.parentNode.rowIndex);
                        break;
                    case 'bincolumn':
                        Table.removeColumn(table, cell.cellIndex);
                        break;
                    case 'addcolumnafter':
                    case 'addcolumnbefore':
                        Table.appendColumn(table, cell.cellIndex, command === 'addcolumnafter', this.j.createInside);
                        break;
                    case 'addrowafter':
                    case 'addrowbefore':
                        Table.appendRow(table, cell.parentNode, command === 'addrowafter', this.j.createInside);
                        break;
                }
            }
            return false;
        }
    }
    onAfterCommand(command) {
        if (/^justify/.test(command)) {
            this.module
                .getAllSelectedCells()
                .forEach(elm => alignElement(command, elm, this.j));
        }
    }
    beforeDestruct(jodit) {
        this.onRemoveSelection();
        jodit.e.off('.select-cells');
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], selectCells.prototype, "onStartSelection", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':outsideClick')
], selectCells.prototype, "onOutsideClick", null);
(0,tslib_es6.__decorate)([
    (0,decorators.watch)(':change')
], selectCells.prototype, "onChange", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], selectCells.prototype, "onRemoveSelection", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], selectCells.prototype, "onStopSelection", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], selectCells.prototype, "onExecCommand", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], selectCells.prototype, "onAfterCommand", null);

;// CONCATENATED MODULE: ./src/plugins/table/table-keyboard-navigation.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



function tableKeyboardNavigation(editor) {
    editor.e
        .off('.tableKeyboardNavigation')
        .on('keydown.tableKeyboardNavigation', (event) => {
        let current, block;
        if (event.key === constants.KEY_TAB ||
            event.key === constants.KEY_LEFT ||
            event.key === constants.KEY_RIGHT ||
            event.key === constants.KEY_UP ||
            event.key === constants.KEY_DOWN) {
            current = editor.s.current();
            block = dom/* Dom.up */.i.up(current, (elm) => elm && elm.nodeName && /^td|th$/i.test(elm.nodeName), editor.editor);
            if (!block) {
                return;
            }
            const range = editor.s.range;
            if (event.key !== constants.KEY_TAB && current !== block) {
                if (((event.key === constants.KEY_LEFT ||
                    event.key === constants.KEY_UP) &&
                    (dom/* Dom.prev */.i.prev(current, (elm) => event.key === constants.KEY_UP
                        ? dom/* Dom.isTag */.i.isTag(elm, 'br')
                        : Boolean(elm), block) ||
                        (event.key !== constants.KEY_UP &&
                            dom/* Dom.isText */.i.isText(current) &&
                            range.startOffset !== 0))) ||
                    ((event.key === constants.KEY_RIGHT ||
                        event.key === constants.KEY_DOWN) &&
                        (dom/* Dom.next */.i.next(current, (elm) => event.key === constants.KEY_DOWN
                            ? dom/* Dom.isTag */.i.isTag(elm, 'br')
                            : Boolean(elm), block) ||
                            (event.key !== constants.KEY_DOWN &&
                                dom/* Dom.isText */.i.isText(current) &&
                                current.nodeValue &&
                                range.startOffset !==
                                    current.nodeValue.length)))) {
                    return;
                }
            }
        }
        else {
            return;
        }
        const table = dom/* Dom.up */.i.up(block, (elm) => elm && /^table$/i.test(elm.nodeName), editor.editor);
        let next = null;
        switch (event.key) {
            case constants.KEY_TAB:
            case constants.KEY_LEFT: {
                const sibling = event.key === constants.KEY_LEFT || event.shiftKey
                    ? 'prev'
                    : 'next';
                next = dom/* Dom */.i[sibling](block, (elm) => elm &&
                    /^td|th$/i.test(elm.tagName), table);
                if (!next) {
                    Table.appendRow(table, sibling === 'next'
                        ? false
                        : table.querySelector('tr'), sibling === 'next', editor.createInside);
                    next = dom/* Dom */.i[sibling](block, (elm) => elm && dom/* Dom.isCell */.i.isCell(elm, editor.ew), table);
                }
                break;
            }
            case constants.KEY_UP:
            case constants.KEY_DOWN:
                {
                    let i = 0, j = 0;
                    const matrix = Table.formalMatrix(table, (elm, _i, _j) => {
                        if (elm === block) {
                            i = _i;
                            j = _j;
                        }
                    });
                    if (event.key === constants.KEY_UP) {
                        if (matrix[i - 1] !== undefined) {
                            next = matrix[i - 1][j];
                        }
                    }
                    else {
                        if (matrix[i + 1] !== undefined) {
                            next = matrix[i + 1][j];
                        }
                    }
                }
                break;
        }
        if (next) {
            if (!next.firstChild) {
                const first = editor.createInside.element('br');
                next.appendChild(first);
                editor.s.setCursorBefore(first);
            }
            else {
                if (event.key === constants.KEY_TAB) {
                    editor.s.select(next, true);
                }
                else {
                    editor.s.setCursorIn(next, event.key === constants.KEY_RIGHT ||
                        event.key === constants.KEY_DOWN);
                }
            }
            return false;
        }
    });
}

;// CONCATENATED MODULE: ./src/plugins/table/table.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function table(editor) {
    editor.registerButton({
        name: 'table',
        group: 'insert'
    });
}

;// CONCATENATED MODULE: ./src/plugins/table/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */






;// CONCATENATED MODULE: ./src/plugins/tooltip/tooltip.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */







class tooltip extends Plugin {
    constructor() {
        super(...arguments);
        this.isOpened = false;
        this.delayShowTimeout = 0;
    }
    afterInit(jodit) {
        this.container = jodit.c.div('jodit-tooltip');
        (0,global/* getContainer */.ZO)(this.j, tooltip).appendChild(this.container);
        let timeout = 0;
        jodit.e
            .off('.tooltip')
            .on('showTooltip.tooltip', (getPoint, content) => {
            jodit.async.clearTimeout(timeout);
            this.open(getPoint, content);
        })
            .on('delayShowTooltip.tooltip', this.delayOpen)
            .on('escape.tooltip', this.close)
            .on('hideTooltip.tooltip change.tooltip scroll.tooltip changePlace.tooltip hidePopup.tooltip closeAllPopups.tooltip', () => {
            this.j.async.clearTimeout(this.delayShowTimeout);
            timeout = jodit.async.setTimeout(this.close, this.j.defaultTimeout);
        });
    }
    delayOpen(getPoint, content) {
        const to = this.j.o.showTooltipDelay || this.j.defaultTimeout;
        this.j.async.clearTimeout(this.delayShowTimeout);
        this.delayShowTimeout = this.j.async.setTimeout(() => this.open(getPoint, content), {
            timeout: to,
            label: 'tooltip'
        });
    }
    open(getPoint, content) {
        this.container.classList.add('jodit-tooltip_visible');
        this.container.innerHTML = content;
        this.isOpened = true;
        this.setPosition(getPoint);
    }
    setPosition(getPoint) {
        const point = getPoint();
        (0,helpers.css)(this.container, {
            left: point.x,
            top: point.y
        });
    }
    close() {
        this.j.async.clearTimeout(this.delayShowTimeout);
        if (this.isOpened) {
            this.isOpened = false;
            this.container.classList.remove('jodit-tooltip_visible');
            (0,helpers.css)(this.container, {
                left: -5000
            });
        }
    }
    beforeDestruct(jodit) {
        jodit === null || jodit === void 0 ? void 0 : jodit.e.off('.tooltip');
        this.close();
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
    }
}
(0,tslib_es6.__decorate)([
    decorators.autobind
], tooltip.prototype, "delayOpen", null);
(0,tslib_es6.__decorate)([
    decorators.autobind
], tooltip.prototype, "close", null);

;// CONCATENATED MODULE: ./src/plugins/print/preview.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



config/* Config.prototype.controls.preview */.D.prototype.controls.preview = {
    icon: 'eye',
    exec: (editor) => {
        const dialog = editor.getInstance('Dialog', {
            language: editor.o.language,
            theme: editor.o.theme
        });
        const div = editor.c.div();
        (0,helpers.css)(div, {
            padding: 16
        });
        if (editor.iframe) {
            const iframe = editor.create.element('iframe');
            (0,helpers.css)(iframe, {
                minWidth: 800,
                minHeight: 600,
                border: 0
            });
            div.appendChild(iframe);
            dialog.open(div, editor.i18n('Preview'));
            const mywindow = iframe.contentWindow;
            if (mywindow) {
                editor.e.fire('generateDocumentStructure.iframe', mywindow.document, editor);
                mywindow.document.body.innerHTML = editor.value;
            }
        }
        else {
            (0,helpers.css)(div, {
                minWidth: 1024,
                minHeight: 600,
                border: 0
            });
            div.innerHTML = editor.value;
            dialog.open(div, editor.i18n('Preview'));
        }
        dialog.setModal(true);
    },
    mode: constants.MODE_SOURCE + constants.MODE_WYSIWYG,
    tooltip: 'Preview'
};
function preview(editor) {
    editor.registerButton({
        name: 'preview'
    });
}

;// CONCATENATED MODULE: ./src/plugins/print/print.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */





config/* Config.prototype.controls.print */.D.prototype.controls.print = {
    exec: (editor) => {
        const iframe = editor.create.element('iframe');
        Object.assign(iframe.style, {
            position: 'fixed',
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
            border: 0
        });
        (0,global/* getContainer */.ZO)(editor, config/* Config */.D).appendChild(iframe);
        const afterFinishPrint = () => {
            editor.e.off(editor.ow, 'mousemove', afterFinishPrint);
            dom/* Dom.safeRemove */.i.safeRemove(iframe);
        };
        const mywindow = iframe.contentWindow;
        if (mywindow) {
            editor.e
                .on(mywindow, 'onbeforeunload onafterprint', afterFinishPrint)
                .on(editor.ow, 'mousemove', afterFinishPrint);
            if (editor.o.iframe) {
                editor.e.fire('generateDocumentStructure.iframe', mywindow.document, editor);
                mywindow.document.body.innerHTML = editor.value;
            }
            else {
                mywindow.document.write('<!doctype html><html lang="' +
                    (0,helpers.defaultLanguage)(editor.o.language) +
                    '"><head><title></title></head>' +
                    '<body>' +
                    editor.value +
                    '</body></html>');
                mywindow.document.close();
            }
            mywindow.focus();
            mywindow.print();
        }
    },
    mode: constants.MODE_SOURCE + constants.MODE_WYSIWYG,
    tooltip: 'Print'
};
function print(editor) {
    editor.registerButton({
        name: 'print'
    });
}

;// CONCATENATED MODULE: ./src/plugins/print/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



;// CONCATENATED MODULE: ./src/plugins/xpath/xpath.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */








config/* Config.prototype.showXPathInStatusbar */.D.prototype.showXPathInStatusbar = true;
class xpath extends Plugin {
    constructor() {
        super(...arguments);
        this.onContext = (bindElement, event) => {
            if (!this.menu) {
                this.menu = new ContextMenu(this.j);
            }
            this.menu.show(event.clientX, event.clientY, [
                {
                    icon: 'bin',
                    title: bindElement === this.j.editor ? 'Clear' : 'Remove',
                    exec: () => {
                        if (bindElement !== this.j.editor) {
                            dom/* Dom.safeRemove */.i.safeRemove(bindElement);
                        }
                        else {
                            this.j.value = '';
                        }
                        this.j.setEditorValue();
                    }
                },
                {
                    icon: 'select-all',
                    title: 'Select',
                    exec: () => {
                        this.j.s.select(bindElement);
                    }
                }
            ]);
            return false;
        };
        this.onSelectPath = (bindElement, event) => {
            this.j.s.focus();
            const path = (0,helpers.attr)(event.target, '-path') || '/';
            if (path === '/') {
                this.j.execCommand('selectall');
                return false;
            }
            try {
                const elm = this.j.ed
                    .evaluate(path, this.j.editor, null, XPathResult.ANY_TYPE, null)
                    .iterateNext();
                if (elm) {
                    this.j.s.select(elm);
                    return false;
                }
            }
            catch (_a) { }
            this.j.s.select(bindElement);
            return false;
        };
        this.tpl = (bindElement, path, name, title) => {
            const item = this.j.c.fromHTML(`<span class="jodit-xpath__item"><a role="button" data-path="${path}" href="javascript:void(0)" title="${title}" tabindex="-1"'>${(0,helpers.trim)(name)}</a></span>`);
            const a = item.firstChild;
            this.j.e
                .on(a, 'click', this.onSelectPath.bind(this, bindElement))
                .on(a, 'contextmenu', this.onContext.bind(this, bindElement));
            return item;
        };
        this.removeSelectAll = () => {
            if (this.selectAllButton) {
                this.selectAllButton.destruct();
                delete this.selectAllButton;
            }
        };
        this.appendSelectAll = () => {
            this.removeSelectAll();
            this.selectAllButton = makeButton(this.j, {
                name: 'selectall',
                ...this.j.o.controls.selectall
            });
            this.selectAllButton.state.size = 'tiny';
            this.container &&
                this.container.insertBefore(this.selectAllButton.container, this.container.firstChild);
        };
        this.calcPathImd = () => {
            if (this.isDestructed) {
                return;
            }
            const current = this.j.s.current();
            if (this.container) {
                this.container.innerHTML = constants.INVISIBLE_SPACE;
            }
            if (current) {
                let name, xpth, li;
                dom/* Dom.up */.i.up(current, (elm) => {
                    if (elm && this.j.editor !== elm && !dom/* Dom.isText */.i.isText(elm)) {
                        name = elm.nodeName.toLowerCase();
                        xpth = (0,helpers.getXPathByElement)(elm, this.j.editor).replace(/^\//, '');
                        li = this.tpl(elm, xpth, name, this.j.i18n('Select %s', name));
                        this.container &&
                            this.container.insertBefore(li, this.container.firstChild);
                    }
                }, this.j.editor);
            }
            this.appendSelectAll();
        };
        this.calcPath = this.j.async.debounce(this.calcPathImd, this.j.defaultTimeout * 2);
    }
    afterInit() {
        if (this.j.o.showXPathInStatusbar) {
            this.container = this.j.c.div('jodit-xpath');
            this.j.e
                .off('.xpath')
                .on('mouseup.xpath change.xpath keydown.xpath changeSelection.xpath', this.calcPath)
                .on('afterSetMode.xpath afterInit.xpath changePlace.xpath', () => {
                if (!this.j.o.showXPathInStatusbar || !this.container) {
                    return;
                }
                this.j.statusbar.append(this.container);
                if (this.j.getRealMode() === constants.MODE_WYSIWYG) {
                    this.calcPath();
                }
                else {
                    if (this.container) {
                        this.container.innerHTML = constants.INVISIBLE_SPACE;
                    }
                    this.appendSelectAll();
                }
            });
            this.calcPath();
        }
    }
    beforeDestruct() {
        if (this.j && this.j.events) {
            this.j.e.off('.xpath');
        }
        this.removeSelectAll();
        this.menu && this.menu.destruct();
        dom/* Dom.safeRemove */.i.safeRemove(this.container);
        delete this.menu;
        delete this.container;
    }
}

;// CONCATENATED MODULE: ./src/plugins/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */












































// EXTERNAL MODULE: ./src/styles/icons/about.svg
var icons_about = __webpack_require__(49);
// EXTERNAL MODULE: ./src/styles/icons/addcolumn.svg
var addcolumn = __webpack_require__(50);
// EXTERNAL MODULE: ./src/styles/icons/addrow.svg
var addrow = __webpack_require__(51);
// EXTERNAL MODULE: ./src/styles/icons/angle-down.svg
var angle_down = __webpack_require__(52);
// EXTERNAL MODULE: ./src/styles/icons/angle-left.svg
var angle_left = __webpack_require__(53);
// EXTERNAL MODULE: ./src/styles/icons/angle-right.svg
var angle_right = __webpack_require__(54);
// EXTERNAL MODULE: ./src/styles/icons/angle-up.svg
var angle_up = __webpack_require__(55);
// EXTERNAL MODULE: ./src/styles/icons/arrows-alt.svg
var arrows_alt = __webpack_require__(56);
// EXTERNAL MODULE: ./src/styles/icons/arrows-h.svg
var arrows_h = __webpack_require__(57);
// EXTERNAL MODULE: ./src/styles/icons/attachment.svg
var attachment = __webpack_require__(58);
// EXTERNAL MODULE: ./src/styles/icons/bin.svg
var bin = __webpack_require__(59);
// EXTERNAL MODULE: ./src/styles/icons/bold.svg
var icons_bold = __webpack_require__(60);
// EXTERNAL MODULE: ./src/styles/icons/brush.svg
var brush = __webpack_require__(61);
// EXTERNAL MODULE: ./src/styles/icons/cancel.svg
var cancel = __webpack_require__(62);
// EXTERNAL MODULE: ./src/styles/icons/center.svg
var center = __webpack_require__(63);
// EXTERNAL MODULE: ./src/styles/icons/chain-broken.svg
var chain_broken = __webpack_require__(64);
// EXTERNAL MODULE: ./src/styles/icons/check.svg
var check = __webpack_require__(65);
// EXTERNAL MODULE: ./src/styles/icons/check-square.svg
var check_square = __webpack_require__(66);
// EXTERNAL MODULE: ./src/styles/icons/chevron.svg
var chevron = __webpack_require__(67);
// EXTERNAL MODULE: ./src/styles/icons/copyformat.svg
var copyformat = __webpack_require__(68);
// EXTERNAL MODULE: ./src/styles/icons/crop.svg
var crop = __webpack_require__(69);
// EXTERNAL MODULE: ./src/styles/icons/copy.svg
var copy = __webpack_require__(70);
// EXTERNAL MODULE: ./src/styles/icons/cut.svg
var cut = __webpack_require__(71);
// EXTERNAL MODULE: ./src/styles/icons/dedent.svg
var dedent = __webpack_require__(72);
// EXTERNAL MODULE: ./src/styles/icons/dots.svg
var dots = __webpack_require__(73);
// EXTERNAL MODULE: ./src/styles/icons/enter.svg
var icons_enter = __webpack_require__(74);
// EXTERNAL MODULE: ./src/styles/icons/eraser.svg
var eraser = __webpack_require__(75);
// EXTERNAL MODULE: ./src/styles/icons/eye.svg
var eye = __webpack_require__(76);
// EXTERNAL MODULE: ./src/styles/icons/file.svg
var icons_file = __webpack_require__(77);
// EXTERNAL MODULE: ./src/styles/icons/folder.svg
var folder = __webpack_require__(78);
// EXTERNAL MODULE: ./src/styles/icons/font.svg
var icons_font = __webpack_require__(79);
// EXTERNAL MODULE: ./src/styles/icons/fontsize.svg
var fontsize = __webpack_require__(80);
// EXTERNAL MODULE: ./src/styles/icons/fullsize.svg
var icons_fullsize = __webpack_require__(81);
// EXTERNAL MODULE: ./src/styles/icons/hr.svg
var icons_hr = __webpack_require__(82);
// EXTERNAL MODULE: ./src/styles/icons/image.svg
var icons_image = __webpack_require__(83);
// EXTERNAL MODULE: ./src/styles/icons/indent.svg
var icons_indent = __webpack_require__(84);
// EXTERNAL MODULE: ./src/styles/icons/info-circle.svg
var info_circle = __webpack_require__(85);
// EXTERNAL MODULE: ./src/styles/icons/italic.svg
var italic = __webpack_require__(86);
// EXTERNAL MODULE: ./src/styles/icons/justify.svg
var icons_justify = __webpack_require__(87);
// EXTERNAL MODULE: ./src/styles/icons/left.svg
var left = __webpack_require__(88);
// EXTERNAL MODULE: ./src/styles/icons/link.svg
var icons_link = __webpack_require__(89);
// EXTERNAL MODULE: ./src/styles/icons/lock.svg
var lock = __webpack_require__(90);
// EXTERNAL MODULE: ./src/styles/icons/menu.svg
var menu = __webpack_require__(91);
// EXTERNAL MODULE: ./src/styles/icons/merge.svg
var merge = __webpack_require__(92);
// EXTERNAL MODULE: ./src/styles/icons/ok.svg
var ok = __webpack_require__(93);
// EXTERNAL MODULE: ./src/styles/icons/ol.svg
var ol = __webpack_require__(94);
// EXTERNAL MODULE: ./src/styles/icons/omega.svg
var omega = __webpack_require__(95);
// EXTERNAL MODULE: ./src/styles/icons/outdent.svg
var outdent = __webpack_require__(96);
// EXTERNAL MODULE: ./src/styles/icons/palette.svg
var palette = __webpack_require__(97);
// EXTERNAL MODULE: ./src/styles/icons/paragraph.svg
var paragraph = __webpack_require__(98);
// EXTERNAL MODULE: ./src/styles/icons/paste.svg
var icons_paste = __webpack_require__(99);
// EXTERNAL MODULE: ./src/styles/icons/pencil.svg
var pencil = __webpack_require__(100);
// EXTERNAL MODULE: ./src/styles/icons/plus.svg
var plus = __webpack_require__(101);
// EXTERNAL MODULE: ./src/styles/icons/print.svg
var icons_print = __webpack_require__(102);
// EXTERNAL MODULE: ./src/styles/icons/redo.svg
var redo = __webpack_require__(103);
// EXTERNAL MODULE: ./src/styles/icons/resize.svg
var resize = __webpack_require__(104);
// EXTERNAL MODULE: ./src/styles/icons/resizer.svg
var icons_resizer = __webpack_require__(105);
// EXTERNAL MODULE: ./src/styles/icons/right.svg
var right = __webpack_require__(106);
// EXTERNAL MODULE: ./src/styles/icons/save.svg
var save = __webpack_require__(107);
// EXTERNAL MODULE: ./src/styles/icons/search.svg
var icons_search = __webpack_require__(108);
// EXTERNAL MODULE: ./src/styles/icons/settings.svg
var settings = __webpack_require__(109);
// EXTERNAL MODULE: ./src/styles/icons/select-all.svg
var select_all = __webpack_require__(110);
// EXTERNAL MODULE: ./src/styles/icons/shrink.svg
var shrink = __webpack_require__(111);
// EXTERNAL MODULE: ./src/styles/icons/source.svg
var icons_source = __webpack_require__(112);
// EXTERNAL MODULE: ./src/styles/icons/splitg.svg
var splitg = __webpack_require__(113);
// EXTERNAL MODULE: ./src/styles/icons/splitv.svg
var splitv = __webpack_require__(114);
// EXTERNAL MODULE: ./src/styles/icons/strikethrough.svg
var strikethrough = __webpack_require__(115);
// EXTERNAL MODULE: ./src/styles/icons/subscript.svg
var subscript = __webpack_require__(116);
// EXTERNAL MODULE: ./src/styles/icons/superscript.svg
var superscript = __webpack_require__(117);
// EXTERNAL MODULE: ./src/styles/icons/table.svg
var icons_table = __webpack_require__(118);
// EXTERNAL MODULE: ./src/styles/icons/th.svg
var th = __webpack_require__(119);
// EXTERNAL MODULE: ./src/styles/icons/th-list.svg
var th_list = __webpack_require__(120);
// EXTERNAL MODULE: ./src/styles/icons/ul.svg
var ul = __webpack_require__(121);
// EXTERNAL MODULE: ./src/styles/icons/underline.svg
var underline = __webpack_require__(122);
// EXTERNAL MODULE: ./src/styles/icons/undo.svg
var undo = __webpack_require__(123);
// EXTERNAL MODULE: ./src/styles/icons/unlink.svg
var unlink = __webpack_require__(124);
// EXTERNAL MODULE: ./src/styles/icons/unlock.svg
var unlock = __webpack_require__(125);
// EXTERNAL MODULE: ./src/styles/icons/update.svg
var update = __webpack_require__(126);
// EXTERNAL MODULE: ./src/styles/icons/upload.svg
var upload = __webpack_require__(127);
// EXTERNAL MODULE: ./src/styles/icons/valign.svg
var valign = __webpack_require__(128);
// EXTERNAL MODULE: ./src/styles/icons/video.svg
var icons_video = __webpack_require__(129);
;// CONCATENATED MODULE: ./src/styles/icons/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */



















































































;// CONCATENATED MODULE: ./src/index.ts
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2021 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

if (false) {}







Object.keys(constants).forEach((key) => {
    Jodit[key] = constants[key];
});
const esFilter = (key) => key !== '__esModule';
Object.keys(icons_namespaceObject)
    .filter(esFilter)
    .forEach((key) => {
    ui/* Icon.set */.JO.set(key.replace('_', '-'), icons_namespaceObject[key]);
});
Object.keys(modules_namespaceObject)
    .filter(esFilter)
    .forEach((key) => {
    Jodit.modules[key] = modules_namespaceObject[key];
});
Object.keys(decorators)
    .filter(esFilter)
    .forEach((key) => {
    Jodit.decorators[key] = decorators[key];
});
['Confirm', 'Alert', 'Prompt'].forEach((key) => {
    Jodit[key] = modules_namespaceObject[key];
});
Object.keys(plugins_namespaceObject)
    .filter(esFilter)
    .forEach((key) => {
    Jodit.plugins.add(key, plugins_namespaceObject[key]);
});
Object.keys(langs)
    .filter(esFilter)
    .forEach((key) => {
    Jodit.lang[key] = langs[key];
});
const src_Jodit = Jodit;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});