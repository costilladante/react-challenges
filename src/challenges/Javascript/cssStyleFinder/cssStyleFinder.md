# Prompt

Create a function that finds elements in the DOM by a given style. The function should take a CSS property `name` and `value` and return the list of elements in the DOM that match that style. The function signature should look like the following:

```javascript
getElementsByStyle => (property: string, value: string): Array
```

For example, you might call `getElementsByStyle("text-align", "center")` and it would return all the text (inline/inline-block) elements in the DOM that are centered.

## Remember:

- `document.body`: returns the root body node
- `element.children`: returns the immediate children of any node
- `getComputedStyle(element)`: returns an object containing the styles applied to an element where each key is a style property and the value is the CSS value, inherited values are included.

Return signature for `getComputedStyle`:

```javascript
Map<cssProperty: string, cssValue: string>
```

## Criteria

Assume `querySelectorAll` cannot be used in the implementation.

# Solution
