import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import Todo from "./Todo";

afterEach(() => {
  cleanup();
});

describe("Todo", () => {
  const todo = {
    _id: "1",
    text: "Learn Docker",
    done: false,
  };

  test("renders todo text and action buttons for an unfinished todo", () => {
    const deleteTodo = vi.fn();
    const completeTodo = vi.fn();

    render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />,
    );

    expect(screen.getByText("Learn Docker")).toBeTruthy();
    expect(screen.getByText("This todo is not done")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    fireEvent.click(screen.getByRole("button", { name: "Set as done" }));

    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith(todo);
    expect(completeTodo).toHaveBeenCalledTimes(1);
    expect(completeTodo).toHaveBeenCalledWith(todo);
  });

  test("renders done state without complete button", () => {
    const deleteTodo = vi.fn();
    const completeTodo = vi.fn();

    render(
      <Todo
        todo={{ ...todo, done: true }}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />,
    );

    expect(screen.getByText("This todo is done")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Set as done" })).toBeNull();
  });
});
