import React from "react"
import { render } from "@testing-library/react"

import { Footer } from "./footer"

describe(`Footer`, () => {
  it(`renders footer`, () => {
    const { getByTestId } = render(<Footer />)

    expect(getByTestId("footer")).toHaveTextContent(
      `Created by Foyez, © ${new Date().getFullYear()}`
    )
  })
})
