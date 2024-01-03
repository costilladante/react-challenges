# Validate Markup

In this exercise, you will be refactoring an otherwise malformed component.
This component has several issues ranging from not using correct semantic HTML elements to more glaring issues such as invalid HTML tree structure due to missing implementation details.
Try to implement the changes without relying on the tests as they can give the needed changes away. If you find that you are struggling or believe you've completed the assignment feel free to run the tests 🤩

# Solution

## Semantic Changes

### Heading Tag vs Generic Paragraphs

The `"Validate Markup"` text is serving as a heading on the page. It even has a className denoting it as a "header". When elements have specific purposes we should aim to use the correct semantic elements to denote them for accessibility purposes. Any heading tag would work here like h1, h2, etc.,

Even though the semantic changes aren't included in the tests because they're not necessarily incorrect, it's advised as best practices to use the correct elements so screen readers can pick up portions of your page correctly.
Learn more about semantic HTML tags [here](https://www.w3schools.com/html/html5_semantic_elements.asp).

### Form Element

Rather than using a div, use a form element to wrap the checkbox and button. This will allow the user to submit the form by pressing the enter key as well as clicking the button.

### Accompanying Labels

Accompanying checkboxes with a label element is a good practice that allows the user to click on the label to toggle the checkbox and also provide a more accessible experience for screen readers. Don't take my word for it, try it out for yourself!

## Invalid HTML5 Markup

The Table element was missing the required accompanying thead and tbody tags. This results in invalid HTML markup and failed W3 validation.

If you fail to validate your website's pages based on W3C standards, your site's SEO can suffer as search engine crawlers take accessibility into account when looking at your content.
Learn more about [W3C standards](https://www.w3.org/standards/) and [SEO](https://moz.com/beginners-guide-to-seo).
