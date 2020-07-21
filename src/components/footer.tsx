import React from "react"

export const Footer = () => {
  return (
    <footer>
      <p data-testid="footer">
        Created by Foyez, &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
