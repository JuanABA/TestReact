import { render, screen, fireEvent } from "@testing-library/react";
import ParentComponent from "./ParentComponent";

describe("<ParentComponent />", () => {
  test("updates the parent component text when the child component is clicked", () => {
    render(<ParentComponent />);

    const inputElement = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    fireEvent.change(inputElement, { target: { value: "Hello world" } });
    fireEvent.click(submitButton);

    const updateText = screen.getByText(/Text: Hello World/i);
    expect(updateText).toBeInTheDocument();
  });
});

//este es un test de integracion que se basa  en revisar si dos componentes si se conectan
