"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {

    if (k2 === undefined) k2 = k;

    var desc = Object.getOwnPropertyDescriptor(m, k);

    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {

      desc = { enumerable: true, get: function() { return m[k]; } };

    }

    Object.defineProperty(o, k2, desc);

}) : (function(o, m, k, k2) {

    if (k2 === undefined) k2 = k;

    o[k2] = m[k];

}));

var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {

    Object.defineProperty(o, "default", { enumerable: true, value: v });

}) : function(o, v) {

    o["default"] = v;

});

var __importStar = (this && this.__importStar) || function (mod) {

    if (mod && mod.__esModule) return mod;

    var result = {};

    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

    __setModuleDefault(result, mod);

    return result;

};

Object.defineProperty(exports, "__esModule", { value: true });

exports.deactivate = exports.activate = void 0;

const vscode = __importStar(require("vscode"));

function activate(context) {

    const provider = vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'plaintext' }, // Trigger for plaintext files

    {

        provideCompletionItems(document, position) {

            // List of keywords, which can include personal names or custom terms

            const keywords = [

                'hello',

                'world',

                'test',

                'debug',

                'function',

                'variable',

                'return',

                'const',

                'let',

                'if',

                'else',

                'for',

                'while',

                'continue',

                'break',

                'class',

                'object',

                'array',

                'map',

                'filter',

                'reduce',

                'promise',

                'async',

                'await',

                'try',

                'catch',

                'finally',

                'import',

                'export',

                'module',

                'require',

                'new',

                'null',

                'undefined',

                'true',

                'false',

                'is',

                'this',

                'super',

                'event',

                'on',

                'click',

                'change',

                'submit',

                'input',

                'output',

                'error',

                'warning',

                'info',

                'alert',

                'console',

                'log',

                'warn',

                'dir',

                'json',

                'parse',

                'stringify',

                'localStorage',

                'sessionStorage',

                'cookies',

                'timeout',

                'interval',

                'setTimeout',

                'setInterval',

                'clearTimeout',

                'clearInterval',

                'document',

                'body',

                'head',

                'title',

                'meta',

                'div',

                'span',

                'button',

                'input',

                'label',

                'header',

                'footer',

                'nav',

                'article',

                'section',

                'form',

                'ul',

                'ol',

                'li',

                'a',

                'href',

                'src',

                'alt',

                'style',

                'className',

                'id',

                'textContent',

                'innerHTML',

                'outerHTML',

                'addEventListener',

                'removeEventListener',

                'dispatchEvent',

                'fetch',

                'axios',

                'http',

                'https',

                'url',

                'header',

                'status',

                'response',

                'request',

                'query',

                'filter',

                'map',

                'reduce',

                'every',

                'some',

                'concat',

                'join',

                'split',

                'toLowerCase',

                'toUpperCase',

                'substring',

                'slice',

                'replace',

                'trim',

                'parseInt',

                'parseFloat',

                'isNaN',

                'isFinite',

                'Date',

                'String',

                'Number',

                'Boolean',

                'Object',

                'Array',

                'Function',

                'RegExp',

                'Math',

                'Error',

                'TypeError',

                'ReferenceError',

                'SyntaxError',

                'RangeError',

                'eval',

                'evalError',

                'evalFunction',

                'namespace',

                'module.exports',

                'require',

                'exports',

                'import',

                'default',

                'git',

                'github',

                'gitHubActions',

                'npm',

                'yarn',

                'webpack',

                'babel',

                'node',

                'express',

                'react',

                'angular',

                'vue',

                'typescript',

                'python',

                'java',

                'rust',

                'go',

                'ruby',

                'swift',

                'kotlin',

                'docker',

                'kubernetes',

                'aws',

                'gcp',

                'azure',

                'firebase',

                'graphql',

                'sql',

                'mongodb',

                'sequelize',

                'mongoose',

                'redis',

                'socket.io',

                'postgresql',

                'sqlite',

                'jwt',

                'cors',

                'httpServer',

                'httpsServer',

                'errorHandler',

                'app',

                'server',

                'config',

                'env',

                'dotenv',

                'utils',

                'helper',

                'middleware',

                'controller',

                'model',

                'route',

                'view',

                'template',

                'admin',

                'user',

                'login',

                'signup',

                'authentication',

                'authorization',

                'session',

                'cookie',

                'csrf',

                'rateLimit',

                'logger',

                'monitoring',

                'ci/cd',

                'pipeline',

                'deployment',

                'build',

                'test',

                'linter',

                'formatter',

                'coverage',

                'errorHandler',

                'api',

                'urlParams',

                'bodyParser'

            ];

            return keywords.map((keyword) => {

                const item = new vscode.CompletionItem(keyword, vscode.CompletionItemKind.Keyword);

                item.detail = 'Custom Keyword';

                item.documentation = new vscode.MarkdownString(`Inserts **${keyword}**`); // Description of each keyword

                return item;

            });

        }

    }, '' // Trigger on every character

    );

    context.subscriptions.push(provider);

}

exports.activate = activate;

function deactivate() { }

exports.deactivate = deactivate;

//# sourceMappingURL=extension.js.map
