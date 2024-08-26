# Counter App

## Description

The "Counter App" is a simple web application that allows users to increment or decrement a counter with a reset button. The interface is designed to be intuitive and easy to use, with buttons to increase or decrease the displayed counter value. The layout is centered, with a clean, modern design that is suitable for various uses.

## Project Structure

### `index.html`

The `index.html` file is the backbone of the application, defining the basic structure of the webpage. It includes:

- **Meta Tags**: These are used for character encoding, viewport settings for responsive design, and the title of the page.
- **Favicon and Stylesheet Linking**: The file references a favicon and links to the external CSS file (`style.css`).
- **Main Container**: The `div` with the id `counter-app` is the primary container where the JavaScript dynamically inserts the user interface for the counter.
- **JavaScript Inclusion**: The `script.js` file is linked at the bottom of the body, ensuring that the DOM is fully loaded before the script runs.

### `style.css`

The `style.css` file handles the visual styling and layout of the application. Key components include:

- **Global Styles**: The body uses Flexbox to center the content, with a neutral background color, a sans-serif font family, and zero margins to ensure the content fills the viewport.
- **#counter-app**: This selector styles the main container of the counter, adding padding, a background color, rounded corners, and a shadow effect to create a card-like appearance.
- **Buttons**: Buttons are styled with vibrant colors, padding, rounded corners, and a hover effect to enhance interactivity. Different classes are used for the standard buttons and the reset button to differentiate them.
- **Responsiveness**: Media queries are used to adjust the layout on smaller screens, ensuring that the app remains user-friendly on mobile devices.

### `script.js`

The `script.js` file contains all the logic needed to create the user interface and handle user interactions. This is where the dynamic creation of elements and the functionality of the counter are defined.

#### Key Functions

1. **`createElement(tag, className, innerHTML)`**:
   - **Purpose**: Simplifies the creation of HTML elements by abstracting repetitive tasks.
   - **Parameters**:
     - `tag`: Specifies the type of element to create (e.g., `div`, `button`).
     - `className` (optional): Adds a CSS class to the element for styling.
     - `innerHTML` (optional): Sets the inner HTML or text content of the element.
   - **Functionality**: This utility function creates a new HTML element, optionally assigns it a CSS class and inner HTML content, and returns the element for further manipulation or insertion into the DOM.

2. **`createCounterUI()`**:
   - **Purpose**: Builds the entire counter interface dynamically and inserts it into the `counter-app` container.
   - **Steps**:
     - Creates and appends the title (`h1`), the counter display (`span`), and a container for the buttons (`div`).
     - Iterates through an array of button configurations to create and append each button to the button container.
     - Adds a click event listener to the button container to handle all button clicks in a single event handler.

3. **`updateCounterDisplay()`**:
   - **Purpose**: Updates the displayed value of the counter in the user interface.
   - **Functionality**: This function retrieves the current value of the counter from the global variable and updates the text content of the counter display element (`span`).

4. **`handleButtonClick(event)`**:
   - **Purpose**: Handles click events on the buttons and triggers the appropriate action based on the button's dataset action attribute.
   - **Functionality**: Depending on whether the clicked button's action is 'increment', 'decrement', or 'reset', this function calls the corresponding counter manipulation function.

5. **`incrementCounter()`**:
   - **Purpose**: Increases the counter value by one.
   - **Functionality**: Increments the global `counterValue` variable and then updates the display to reflect the new value.

6. **`decrementCounter()`**:
   - **Purpose**: Decreases the counter value by one.
   - **Functionality**: Decrements the global `counterValue` variable and updates the display with the new value.

7. **`resetCounter()`**:
   - **Purpose**: Resets the counter value to zero.
   - **Functionality**: Sets the global `counterValue` variable to zero and updates the display accordingly.

8. **Document Event Listener**:
   - **Purpose**: Ensures the counter UI is created as soon as the DOM content is fully loaded.
   - **Functionality**: The `DOMContentLoaded` event is used to call `createCounterUI()` right after the HTML document has been completely loaded and parsed.

## Features

- **Increment/Decrement**: Users can increase or decrease the counter using the "+" and "-" buttons.
- **Reset Button**: Users can reset the counter to zero without reloading the page.
- **Dynamic Update**: The counter value is updated dynamically on the page as buttons are pressed.