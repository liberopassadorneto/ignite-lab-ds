import { SignIn } from "./SignIn";
import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

export default {
  title: "Pages/SingIn",
  component: SignIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login realizado!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "libero@gmail.com"
    );

    userEvent.type(canvas.getByPlaceholderText("********"), "987456");

    userEvent.click(canvas.getByRole("button"));

    await waitFor(
      () => {
        return expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
      },
      {
        timeout: 3000,
      }
    );
  },
};
