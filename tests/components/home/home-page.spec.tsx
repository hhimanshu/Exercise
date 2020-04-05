import thunk from "redux-thunk";
import React from "react";
import { Provider } from "react-redux";
import { mount, configure, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import HomePage from "../../../src/components/home/home-page";
import { initialState } from "../../../src/reducers/instructionsReducer";
configure({ adapter: new Adapter() });

describe("Home Page", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let wrapper: ReactWrapper;
  beforeEach(async () => {
    const store = mockStore({ instructions: initialState });
    wrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  });

  it("Renders instructions in Home Page", async () => {
    expect(wrapper.find("ReactMarkdown").length).toBeGreaterThan(0);
  });
});
