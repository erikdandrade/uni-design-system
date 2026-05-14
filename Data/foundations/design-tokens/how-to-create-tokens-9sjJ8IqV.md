
# How to Create Tokens

---

  
![Tokens Creation](https://studio-assets.supernova.io/design-systems/145982/a1b8ce8a-c557-4ec1-93be-2c3556bc7a78.png)  
Tokens Creation  


## Design Tokens Creation

### **1. Collect Raw Values**

The first step in creating design tokens is to gather all base values, such as colors in HEX format, typography styles, and spacing units.

- **Example**:

These raw values will serve as the foundation for the design tokens.

---

### **2. Organize Values into Categories**

Design tokens should be grouped into meaningful categories for clarity and ease of use. Common categories include:

- **Colors**: Backgrounds, text, borders.

- **Typography**: Font sizes, font weights, line heights.

- **Spacing**: Padding, margins, gaps.

- **Shadows**

- **Border Radius**

---

### **3. Create Scales**

For values like colors and spacing, it is recommended to create scales ranging from light to dark (for colors) or small to large (for spacing). Scales ensure flexibility in the design system by offering multiple variations of a base value.

  
| Column 1 | Column 2 |  
| --- | --- |  
| Token Name | HEX Value |  
| `gray&hyphen;100` | `&num;EFEFEF` |  
| `gray&hyphen;200` | `&num;E0E0E0` |  
| `gray&hyphen;300` | `&num;C2C2C2` |  
| `gray&hyphen;400` | `&num;A3A3A3` |  
| `gray&hyphen;500` | `&num;898989` |  
| `gray&hyphen;600` | `&num;6B6B6B` |  
| `gray&hyphen;700` | `&num;474747` |  
| `gray&hyphen;800` | `&num;333333` |  
| `gray&hyphen;900` | `&num;171717` |  


Scales provide flexibility for use across various UI elements, ensuring that colors and spacing can be applied consistently across different contexts.

---

### **4. Define a Consistent Naming Convention**

Tokens should be named based on **purpose** and **usage** rather than raw values. This ensures that tokens are understandable, scalable, and maintainable.

**Pattern**:
`[Category]`&hyphen;`[Subcategory]`&hyphen;`[Element]`&hyphen;`[State]` (optional)

- **Category**: Represents the type of token (e.g., `color`, `surface`, `spacing`).

- **Subcategory**: Further defines the token’s use case (e.g., `background`, `text`, `icon`, `border`).

- **Element**: Describes the specific UI element or function (e.g., `primary`, `neutral`, `subtle`).

- **State** (Optional): Denotes interaction states such as `hover`, `active`, or `disabled`.

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Token Name | Description | HEX Value |  
| `color&hyphen;background&hyphen;neutral&hyphen;subtle` | Neutral background color for UI | `&num;C2C2C2` |  
| `color&hyphen;surface&hyphen;default` | Primary background color for UI | `&num;FFFFFF` |  
| `color&hyphen;icon&hyphen;boldest` | Primary background color when clicked | `&num;171717` |  
| `color&hyphen;divider&hyphen;warning` | Warning state of the border | `&num;C99300` |  
| `color&hyphen;text&hyphen;primary` | Primary text color | `&num;171717` |  
| `color&hyphen;text&hyphen;inverse` | Text color on dark backgrounds | `&num;FFFFFF` |  


  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Token Name | Description | Value |  
| `spacing&hyphen;100` | Regular spacing value | `8px` |  
| `spacing&hyphen;300` | Large spacing value | `24px` |  


---

### **5. Interaction States**

For tokens that represent interactive elements (e.g., buttons), it is essential to account for different states of interaction, such as:

- **Hover**: When a user hovers over an element.

- **Pressed**: When an element is actively clicked or selected.

- **Disabled**: When an element is unavailable for interaction.

These states can be reflected in the token name by adding a state modifier.

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Token Name | Description | HEX Value |  
| `color&hyphen;background&hyphen;brand&hyphen;bold` | Default background color for primary button | `&num;1AD678` |  
| `color&hyphen;background&hyphen;brand&hyphen;bold&hyphen;hover` | Background color for primary button on hover | `&num;18C36D` |  
| `color&hyphen;background&hyphen;brand&hyphen;bold&hyphen;pressed` | Background color for primary button when clicked | `&num;16B163` |  
| `color&hyphen;background&hyphen;disabled` | Background color for disabled primary button | `&num;F7F6F6` |  


---

### **6. Documentation of Tokens**

To ensure consistency across teams, all design tokens should be thoroughly documented. This documentation should include the following:

1. **Token Name**: A unique, descriptive name for the token.

1. **Value**: The raw value of the token (e.g., HEX, pixel values).

1. **Usage Guidelines**: Clear instructions on how and where the token should be used in the UI.

---

### **7. Expand and Maintain Tokens**

As the design system evolves, new tokens may need to be added or existing tokens updated. Ensure that all new tokens follow the same naming conventions and documentation format to maintain consistency.

- `&num;474747` (dark gray)

- `&num;F7F6F6` (light gray)

- `8px` (regular padding)