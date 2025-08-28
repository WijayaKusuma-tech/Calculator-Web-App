Of course, here is the explanation in the "readme.so" format, translated into English.

---
# 🧮 Simple Web Calculator

This is a simple calculator project created using basic front-end web technologies: HTML, CSS, and JavaScript. The application provides standard calculator functionality with a clean and responsive interface.

This project runs entirely on the client-side, so it does not require a server or a complex build process.



---

## 🎯 Key Features

-   **Basic Arithmetic Operations**: Performs addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
-   **Functional Buttons**:
    -   `C` (Clear): To reset and clear the entire input on the screen.
    -   `DEL` (Delete): To remove the last character from the input.
    -   `=` (Equals): To evaluate the expression and display the result.
-   **Decimal Support**: Allows for decimal number input using the period (`.`) button.
-   **Error Handling**: Displays an "Error" message for invalid mathematical expressions (e.g., `5 * / 2`).
-   **Responsive Interface**: The calculator layout is designed to always be centered on the screen.

---

## 💻 Tech Stack

-   **HTML5**: Used to build the basic structure of the calculator, including the display screen and buttons.
-   **CSS3**: Used for styling the calculator's appearance and layout.
    -   **Flexbox**: To position the calculator in the center of the page.
    -   **Grid Layout**: To arrange the buttons in a neat 4-column format.
-   **JavaScript (Vanilla JS)**: Used to handle all the functional logic of the calculator, such as capturing input, performing calculations, and displaying results.

---

## 📂 File Structure

The project consists of two main files:

-   `index.html`: Contains the HTML structure and all the necessary JavaScript code.
-   `app.css`: Contains all the styling rules for the calculator's interface.

---

## 🚀 Installation and Usage

No installation or dependencies are required. Simply follow these steps:

1.  Download or clone the `index.html` and `app.css` files into the same folder on your computer.
2.  Open the `index.html` file using your preferred web browser (such as Google Chrome, Firefox, or others).
3.  The calculator is ready to use!

---

## 🧠 Code Explanation

### HTML (`index.html`)
The main structure consists of a `div` with the class `.calculator` that wraps an `<input>` element as the screen (`#display`) and another `div` (`.buttons`) containing all the `<button>` elements. Each button has a `value` corresponding to its function.

### CSS (`app.css`)
The button layout is created using `display: grid` with `grid-template-columns: repeat(4, 1fr)` to create four equally wide columns. The `0` and `=` buttons are made wider using the `grid-column: span 2` property. Colors and other visual effects are set to distinguish between number and operator buttons.

### JavaScript (embedded in `index.html`)
The core logic of the application is straightforward:
1.  All buttons are selected and assigned a `click` event listener.
2.  When a button is clicked, its value is read.
3.  **Core Logic**:
    -   If the `C` button is clicked, the display value is cleared.
    -   If the `DEL` button is clicked, the last character of the display string is removed using `display.value.slice(0, -1)`.
    -   If the `=` button is clicked, the `eval()` function is used to evaluate the mathematical string on the display and calculate the result. This process is wrapped in a `try...catch` block to handle invalid expressions.
    -   For all other buttons, their value is appended to the end of the existing string on the display.

---

## ⚖️ License

This project is licensed under the **MIT License**.

---

## 👷 Author

-   **Wijaya Kusuma**
