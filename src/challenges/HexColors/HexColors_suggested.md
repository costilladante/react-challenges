# Suggested Solution

## State Management:

We could have elected to use a single state variable for the button and message like

```javascript
const [showGameOver, setShowGameOver] = useState(false);
```

Generally, it's best to use separate state variables for separate pieces of state. This makes it easier to reason about the state of the component, debug, test, and maintain.

Either answer would've been acceptable in an interview.

### Color Code Storage:

Alternatively to storing the color codes in an array of strings we could store them as an array of objects.

This would allow us to store additional information about the color, such as the name of the color, the hex code, or even if it was the 'correct' color.

You should understand the reasoning why you'd pick one storage mechanism over another in an interview setting. In our solution, we chose to store the hex code as a string as it lends itself to be the most straightforward code solution.

## Color Code Generation:

We use `Math.random()` to generate a random number between `0` and `1` and then multiply it by `0xffffff` to get a random number between `0` and `0xffffff`.

`0xffffff` is the maximum number of colors denoted in hex, so this will give us a random hex color code between our range.

We then convert the number to a string in base 16 (hex) and add a # to the beginning to make it a valid hex color code.

## Color Code Selection:

To pick a correct answer for the current round, we use `Math.random()` to generate a random number between 0 and 1 and then multiply it by 3 to get a random index between 0 and 2.

## useEffect Hook:

We use the useEffect hook to run the generateColors function once when the component is first rendered, this will generate the initial color codes.
Further color code generation will be handled by the playAgain function, which is called when the play again button is clicked.
