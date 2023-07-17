Below are the answers to the CSS-related questions and the layout tasks:

💡 **Q.1 What’s Box Model in CSS?**
The CSS Box Model is a concept that defines how elements on a web page are represented as rectangular boxes. It consists of four parts: content, padding, border, and margin. These parts are represented as layers around the content of an element. The box model affects the layout and sizing of elements on the page.

💡 **Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?**
CSS Selectors are patterns used to select and style HTML elements. There are different types of selectors:

1. Element selectors: Select elements based on their tag name.
2. Class selectors: Select elements based on their class attribute.
3. ID selectors: Select a single element based on its ID attribute.
4. Descendant selectors: Select elements that are descendants of another element.
5. Child selectors: Select elements that are direct children of another element.
6. Attribute selectors: Select elements based on their attributes and attribute values.
7. Pseudo-class selectors: Select elements based on their state or position.

Advantages:
- Element selectors are simple and easy to use.
- Class selectors allow for easy reusability and help in maintaining consistent styles.
- ID selectors are efficient for targeting specific elements.
- Descendant and child selectors provide fine-grained control over element selection.
- Attribute selectors allow for dynamic styling based on element attributes.
- Pseudo-class selectors enable styling based on element state or user interaction.

💡 **Q.3 What is VW/VH?**
VW (Viewport Width) and VH (Viewport Height) are CSS units that represent a percentage of the viewport's width and height, respectively. 1 VW is equal to 1% of the viewport width, and 1 VH is equal to 1% of the viewport height. These units are useful for creating responsive designs that adapt to different screen sizes.

💡 **Q.4 What's the difference between Inline, Inline Block, and Block?**
- Inline elements: Do not start on a new line and only take up the width of their content. They do not accept height or width properties.
- Inline-block elements: Do not start on a new line but can have width and height properties. They flow inline with other elements but can have block-level properties.
- Block elements: Start on a new line and take up the full width available. They can have height and width properties and create a block-level formatting context.

💡 **Q.5 How is Border-box different from Content Box?**
- Content-box is the default box-sizing behavior in CSS. It means that the width and height properties of an element apply only to the content area, excluding padding, border, and margin.
- Border-box is an alternative box-sizing behavior. It means that the width and height properties of an element include the content, padding, and border, but not the margin.

💡 **Q.6 What’s z-index and How does it Function?**
z-index is a CSS property that controls the stacking order of positioned elements on a webpage. It works in combination with the position property (e.g., position: relative, absolute, fixed) to determine which elements appear in front or behind other elements. Elements with higher z-index values appear in front of elements with lower z-index values. The stacking context of an element is established by the nearest ancestor with a position value other than static.

💡 **Q.7 What’s Grid & Flex, and the difference between them?**
- CSS Grid is a layout system that allows you to create two-dimensional layouts with rows and columns. It provides precise control over the placement of elements in both the row and column directions, making it ideal for complex layouts.
- Flexbox (Flexible Box Layout) is a layout system that works in one dimension (either rows or columns) and is designed for simpler one-dimensional layouts. It is best suited for arranging elements in a single row or column and controlling their alignment and distribution.

💡 **Q.8 Difference between absolute and relative and sticky and fixed position explain with example.**
- Relative: The element is positioned relative to its normal position. It can be moved using top, right, bottom, or left properties, but its original space is preserved, and other elements flow around it.

- Absolute: The element is positioned relative to its nearest positioned ancestor (parent) instead of its normal position. It is completely removed from the normal document flow, and other elements ignore its space.

- Fixed: The element is positioned relative to the viewport (the browser window). It stays fixed at a specific position even when the user scrolls the page.

- Sticky: The element is positioned based on the user's scroll position. It behaves like relative positioning until it reaches a specified threshold, after which it becomes fixed.

💡 **Q.9 Build Periodic Table as shown in the below image**



💡 **Q.10 Build Responsive Layout both desktop and mobile and Tablet**

