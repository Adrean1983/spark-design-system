import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkHighlightBoard from './SprkHighlightBoard';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });
var stub;

beforeEach(() => {
  stub = sinon.stub(console, 'error');
});

afterEach(() => {
  stub.restore();
});

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkHighlightBoard />);
  expect(wrapper.find('div.sprk-c-HighlightBoard').length).toBe(1);
});

it('should not render an image if imgSrc is not provided', () => {
  const wrapper = shallow(<SprkHighlightBoard/>);
  const img = wrapper.find('img');

  expect(img.length).toBe(0);
});

it('should render an image if an imgSrc is provided', () => {
  const wrapper = shallow(<SprkHighlightBoard imgSrc='foo' imgAlt='bar'/>);
  const img = wrapper.find('img');

  expect(img.length).toBe(1);
  expect(img.hasClass('sprk-c-HighlightBoard__image')).toBe(true);
});

it('should render both ctas when provided text for both', () => {
  const wrapper = shallow(<SprkHighlightBoard ctaText='this is a test' ctaText2='so is this'/>);
  const contentDiv = wrapper.find('div.sprk-c-HighlightBoard__cta');

  expect(contentDiv.length).toBe(2);
});

it ('should error if imgSrc is provided without imgAlt', () => {
  const wrapper = shallow(<SprkHighlightBoard imgSrc='foo'/>);
  const actual = stub.getCall(0).args[0];

  expect(actual.includes('If imgSrc is provided, then imgAlt is required')).toBe(true);
});

it ('should error if imgAlt is provided without imgSrc', () => {
  const wrapper = shallow(<SprkHighlightBoard imgAlt='foo'/>);
  const actual = stub.getCall(0).args[0];

  expect(actual.includes('If imgSrc is provided, then imgAlt is required')).toBe(true);
});