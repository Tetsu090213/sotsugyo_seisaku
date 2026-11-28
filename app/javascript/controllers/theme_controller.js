import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sunIcon", "moonIcon"]

  connect() {
    this.updateTheme()
  }

  toggle() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light"
    } else {
      localStorage.theme = "dark"
    }
    this.updateTheme()
  }

  updateTheme() {
    const isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (isDark) {
      document.documentElement.classList.add("dark")
      this.sunIconTarget.classList.remove("hidden")
      this.moonIconTarget.classList.add("hidden")
    } else {
      document.documentElement.classList.remove("dark")
      this.sunIconTarget.classList.add("hidden")
      this.moonIconTarget.classList.remove("hidden")
    }
  }
}
