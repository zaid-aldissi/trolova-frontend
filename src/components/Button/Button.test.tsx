import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children as label text", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("has type='button' by default", () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("accepts type='submit'", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("calls onClick when clicked", async () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click me</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledOnce();
  });

  it("does not call onClick when disabled", async () => {
    const handler = vi.fn();
    render(<Button disabled onClick={handler}>Click me</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handler).not.toHaveBeenCalled();
  });

  it("has native disabled attribute when disabled prop is true", () => {
    render(<Button disabled>Save</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("forwards additional className", () => {
    const { container } = render(<Button className="custom">Save</Button>);
    const btn = container.querySelector("button");
    expect(btn?.className).toContain("custom");
  });

  it("forwards additional HTML attributes", () => {
    render(<Button aria-label="Save record">Save</Button>);
    expect(
      screen.getByRole("button", { name: "Save record" })
    ).toBeInTheDocument();
  });

  it("renders as a <button> element", () => {
    const { container } = render(<Button>Save</Button>);
    expect(container.querySelector("button")).toBeInTheDocument();
    expect(container.querySelector("div")).not.toBeInTheDocument();
  });
});
