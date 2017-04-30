import jsdom from 'jsdom';
import 'jsdom-global/register'
import React from 'react';
import ReactDOM from 'react-dom';
import _$ from 'jquery';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TestUtils from 'react-dom/test-utils';

const rerequire = jsdom.rerequire;

const $ = _$(window);
chai.use(chaiEnzyme());
