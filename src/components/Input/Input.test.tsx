import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders a native input element", () => {
    const { container } = render(<Input />);
    expect(container.querySelector("input")).toBeInTheDocument();
  });

  it("renders no element other than a native input", () => {
    const { container } = render(<Input />);
    expect(container.querySelector("div")).not.toBeInTheDocument();
  });

  it("forwards placeholder", () => {
    render(<Input placeholder="Enter value" />);
    expect(screen.getByPlaceholderText("Enter value")).toBeInTheDocument();
  });

  it("forwards name", () => {
    render(<Input name="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "email");
  });

  it("forwards type", () => {
    render(<Input type="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");
  });

  it("forwards defaultValue as native input behavior", () => {
    render(<Input defaultValue="hello" />);
    expect(screen.getByRole("textbox")).toHaveValue("hello");
  });

  it("forwards value as a controlled input", () => {
    render(<Input value="controlled" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("controlled");
  });

  it("forwards disabled", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("forwards readOnly", () => {
    render(<Input readOnly />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("preserves consumer className", () => {
    const { container } = render(<Input className="custom" />);
    expect(container.querySelector("input")?.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Input aria-label="Search" />);
    expect(screen.getByRole("textbox", { name: "Search" })).toBeInTheDocument();
  });

  it("calls onChange when the user types", async () => {
    const handler = vi.fn();
    render(<Input onChange={handler} />);
    await userEvent.type(screen.getByRole("textbox"), "a");
    expect(handler).toHaveBeenCalled();
  });

  it("does not call onChange when disabled", async () => {
    const handler = vi.fn();
    render(<Input disabled onChange={handler} />);
    await userEvent.type(screen.getByRole("textbox"), "a");
    expect(handler).not.toHaveBeenCalled();
  });
});
