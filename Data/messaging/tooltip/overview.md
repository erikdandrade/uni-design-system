
# Overview

---

  
![Tooltip Overview](https://studio-assets.supernova.io/design-systems/145982/d3bd77e3-7850-4b18-a57e-031f5214ce05.png)  
Tooltip Overview  


### Overview

A **Tooltip** is a short, informative message that appears when a user hovers over, focuses on, or taps an element. It provides additional context or information to enhance user understanding without cluttering the interface. Tooltips are typically used to explain the purpose of a web application's buttons, icons, or features.

### Principles

1. **Clarity: **The message conveyed by the tooltip should be concise and easy to understand. Tooltips should focus on communicating one clear message per interaction.

1. **Relevance: **The tooltip should only appear for elements that require additional explanation or context. Avoid overusing tooltips, as it can overwhelm users.

1. **Accessibility: **Tooltips must be accessible for all users, including screen readers or keyboard navigation. Ensure tooltips are triggered not only by hover actions but also by focus events for keyboard users.

### Accessibility Considerations

1. **Keyboard Navigation**
Ensure tooltips are accessible via keyboard. Users should be able to trigger tooltips by focusing on elements using the Tab key.

1. **Screen Readers**
Provide descriptive text for screen readers. Tooltips should be announced when the element receives focus, using ARIA attributes like `aria&hyphen;describedby` or `role="tooltip"`.

1. **Touch Devices**
On touch devices, where hover events do not apply, tooltips should be accessible via tap and should not interfere with the primary action of the element.