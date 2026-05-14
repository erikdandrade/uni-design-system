
# Shadows

---

  
![Shadows Overview](https://studio-assets.supernova.io/design-systems/145982/a41be734-fe7f-4234-a61c-bb3ff01ddf39.png)  
Shadows Overview  


## Overview

Shadows add depth, dimension, and hierarchy to UI elements, helping to create a sense of layering and guiding the user’s attention. In the UNI Design System, shadows are used to give prominence to key elements such as cards, modals, and interactive components, while maintaining a clean and modern look.

## Shadow System

Shadows in the UNI Design System follow a well&hyphen;defined scale that provides consistency across all products. The system is designed to ensure that shadows are subtle yet effective in enhancing the user interface without being overwhelming or distracting. The shadows are categorized based on depth, ensuring that the higher an element is in the hierarchy, the more prominent its shadow.

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Token | Values | Usage |  
| `$shadow&hyphen;xs` | 0px 1px 2px 0px rgba(0, 0, 0, 0.05); | Subtle shadow for small elements |  
| `$shadow&hyphen;sm` | 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06); | Light shadow for slightly elevated elements |  
| `$shadow&hyphen;md` | 0px 4px 6px &hyphen;1px rgba(0, 0, 0, 0.08), 0px 2px 4px &hyphen;1px rgba(0, 0, 0, 0.06); | Medium shadow for elevated components |  
| `$shadow&hyphen;lg` | 0px 10px 15px &hyphen;3px rgba(0, 0, 0, 0.08), 0px 4px 6px &hyphen;2px rgba(0, 0, 0, 0.05); | Large shadow for prominently elevated items |  
| `$shadow&hyphen;xl` | 0px 20px 25px &hyphen;5px rgba(0, 0, 0, 0.10), 0px 10px 10px &hyphen;5px rgba(0, 0, 0, 0.04); | Extra large shadow for floating elements |  
| `$shadow&hyphen;2xl` | 0px 25px 50px &hyphen;12px rgba(0, 0, 0, 0.25); | Highest elevation, use sparingly |  
| `$shadow&hyphen;overlay` | 0px 0px 0px 1px rgba(0, 0, 0, 0.10), 0px 24px 48px 0px rgba(0, 0, 0, 0.03), 0px 10px 18px 0px rgba(0, 0, 0, 0.03), 0px 5px 8px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.04); | For modals and dialogues that live on top of all content |  


## Shadow Transitions and States

Shadows can also be used to indicate interaction states:

- **Hover States:** Increase the shadow size on hover to visually indicate interactivity.

- **Active States:** On press or click, reduce the shadow’s spread or opacity to simulate the effect of the element being “pressed.”

### Example Transition:

- **Default Widget Shadow:** shadow&hyphen;xs

- **Hover Widget Shadow:** Increased to sahdow&hyphen;md

## No&hyphen;Shadow Elements

For certain minimal components or elements that should blend into the background, like dividers or simple text blocks, no shadows should be applied. This ensures a clear visual distinction between interactive elements and static content.

## Best Practices for Shadows

1. **Subtlety is Key:** Shadows should always be subtle, used to guide attention without overpowering the design. Heavy or overly dark shadows can create visual clutter and reduce clarity.

1. **Maintain Consistency:** Use the predefined shadow levels to maintain consistency across all components. Avoid customizing shadows for individual elements, as this can create an inconsistent visual experience.

1. **Apply Shadows Sparingly:** Not every element needs a shadow. Reserve shadows for components that need to stand out or indicate interaction, such as buttons, cards, modals, and popups.

1. **Focus on Elevation:** Shadows should communicate hierarchy. The higher an element appears in the visual hierarchy, the more pronounced its shadow should be. For example, a modal should have a stronger shadow than a button to indicate its elevated importance.

1. **Use Light Sources Wisely:** The direction of the shadow should remain consistent throughout the interface, typically implying a light source from the top. This creates a natural, cohesive visual flow.