import React from "react";
import { render, shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import Message from "../Message";
import Loading from "../../loading";

describe("Message", () => {
  const message = "This is a test messgae";
  const prefixCls = Message.defaultProps.prefixCls;

  it("renders basic Message correctly", () => {
    const wrapper = shallow(<Message message={message}></Message>);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.text().indexOf(message)).not.toBe(-1);
  });

  it("trigger event correctly", () => {
    const mouseEnter = jest.fn();
    const mouseLeave = jest.fn();
    const click = jest.fn();
    const wrapper = mount(
      <Message
        message={message}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={click}
      ></Message>
    );
    wrapper
      .find("div")
      .at(0)
      .simulate("mouseenter")
      .simulate("mouseleave");
    wrapper.find("." + prefixCls + "__content").simulate("click");
    expect(mouseEnter).toHaveBeenCalledTimes(1);
    expect(mouseLeave).toHaveBeenCalledTimes(1);
    expect(click).toHaveBeenCalledTimes(1);
  });

  it("render custom icon correctly", () => {
    const wrapper = mount(
      <Message message={message} icon={<i>?</i>}></Message>
    );
    expect(
      wrapper
        .find("." + prefixCls + "__icon")
        .find("i")
        .text()
    ).toBe("?");
  });

  it("render loading correctly", () => {
    const wrapper = mount(<Message message={message} icon="loading"></Message>);
    expect(wrapper.find("." + Loading.defaultProps.prefixCls)).toHaveLength(1);
  });

  it("render unknow icon correctly", () => {
    const wrapper = mount(
      <Message message={message} icon="unknown-icon"></Message>
    );
    expect(wrapper.find("." + prefixCls + "__icon")).toHaveLength(0);
  });
});
