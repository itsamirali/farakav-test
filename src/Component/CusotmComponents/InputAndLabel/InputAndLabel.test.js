import { act, fireEvent, queryByTestId, render, screen } from "@testing-library/react";
import InputAndLabel from "./InputAndLabel";

describe("InputAndLable Component Test", () => {
  it("rendered Input", () => {
    const { getByTestId } = render(
      <InputAndLabel
        inputId="test"
        label="test"
        placeholder="test"
        setValue={() => {}}
        value="test"
        type="text"
      />
    );
    const input = getByTestId("inputTestId");
    expect(input).toBeTruthy();
  });

  it("check input value", () => {
    act(() => {
    //   const { getByTestId } = render(
    //     <InputAndLabel
    //       inputId="amirali"
    //       label="fullname"
    //       placeholder="enter your name"
    //       setValue={(e) => {
    //         console.log(e?.target?.value);
    //       }}
    //       value="amirali"
    //       type="text"
    //     />
    //   );
      const input = screen.queryByTestId("inputTestId");
      const span = screen.queryByTestId("hiddenLabelForTest");
      const fullName = "amirali";
      fireEvent.change(input, { target: { value: fullName } });
      expect(span.innerText).toBe(fullName);
    });
  });
});
