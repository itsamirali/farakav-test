import { render } from "@testing-library/react";
import Register from "./Register"

describe("InputAndLable Component Test", () => {
  it("rendered Input", () => {
    const {getByTestId} = render(<Register />);
    const input = getByTestId("buttonTestId")
    expect(input).toBeTruthy()
  });
});
