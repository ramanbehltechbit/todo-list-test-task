import React from "react";
import { render } from "@testing-library/react-native";
import TodoItem from "../src/components/TodoItem";

describe("TodoItem Component", () => {
  it("renders todo text correctly", () => {
    const mockTodo = {
      id: 1,
      text: "Test Todo",
      completed: false,
    };

    const { getByText } = render(
      <TodoItem
        item={mockTodo}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );

    // Assert the UI text is present
    expect(getByText("Test Todo")).toBeTruthy();
  });
});
