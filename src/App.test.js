import React from "react";
import { shallow } from "enzyme";
import App from "./App";
/**
 * @function checkElement - this function checks the existence of an element
 * @param {String} val - Value of the [data-test] attribute
 * @param {Number} num - the number of elements which the assertion should check exists
 * @returns {Jest Assertion} - Checks the existence of the element
 */
const checkElement = (val, num) => {
  const wrapper = shallow(<App />);
  const element = wrapper.find(`[data-test="${val}"]`);
  expect(element.length).toBe(num);
};

test("renders document wthout errors", () => {
  checkElement("app-component", 1);
});
