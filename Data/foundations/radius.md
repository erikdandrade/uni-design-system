
# Radius

---

  
![Radius Overview](https://studio-assets.supernova.io/design-systems/145982/4bdccb7c-7693-4b13-a7f9-6c1692f5e03c.png)  
Radius Overview  


## Overview

Border radius is a key element in the UNI design system, contributing to the overall visual language and user experience of our interfaces. This guide outlines our approach to border radius, including our scale, usage guidelines, and best practices.

## Radius Scale

UNI uses a consistent radius scale that provides a range of options from subtle rounding to more pronounced curves. This scale ensures flexibility while maintaining a cohesive look across all components and layouts.

Examples:

  
| Column 1 | Column 2 | Column 3 |  
| --- | --- | --- |  
| Token | Value | Usage |  
| `$radius&hyphen;0` | 0px | No rounding, sharp corners |  
| `$radius&hyphen;025` | 2px |  |  
| `$radius&hyphen;050` | 4px |  |  
| `$radius&hyphen;075` | 6px |  |  
| `$radius&hyphen;100` | 8px |  |  
| `$radius&hyphen;150` | 12px |  |  


## Usage Guidelines

### 1. Component Radius

- Apply consistent radius within related components to ensure visual harmony.

- Use appropriate radius sizes based on the component's size and importance in the interface.

- Maintain consistent radius application across states (default, hover, active, etc.).

### 2. Layout Considerations

- Consider how radius affects the relationship between nested or adjacent elements.

- Adjust radius for responsive designs, potentially using larger radii on larger screens and smaller on mobile devices.

### 3. Hierarchy and Emphasis

- Use radius to create visual hierarchies and emphasize important elements.

- Apply larger radii to floating elements (like modals or popovers) to distinguish them from the background.

## Best Practices

1. **Consistency**: Adhere to the defined radius scale to maintain a cohesive look across the entire system.

1. **Accessibility**: Ensure that radius doesn't interfere with the legibility of text or the usability of interactive elements.

1. **Nesting**: When nesting components, consider how different radii interact and adjust accordingly to avoid awkward shapes.

1. **Flexibility**: While consistency is key, allow for exceptions when necessary to address specific design needs or brand requirements.

1. **Documentation**: Always document any custom radius used outside the standard scale, explaining the rationale.