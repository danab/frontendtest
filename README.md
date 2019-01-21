# Chess.com - Front End Programming Challenge

Welcome to the [Chess.com](https://chess.com) front end programming challenge!

# Instructions
1. ✅ Fork this repository.
2. ✅ Create a VueJS application that satisfies the requirements detailed below.
3. Provide links to your fork of this repository and a live demo of your application.

# Application Requirements
1. ✅ Create a page with a chessboard and a sidebar.
2. ✅ On desktop devices the sidebar should be positioned to the right of the sidebar.
3. ✅ On mobile devices the sidebar should be positioned below the chessboard.
4. ✅ The chessboard should resize responsively to consume available space.
5. ✅ Clicking a chessboard square should highlight the square.
6. ✅ Keep track of which squares are clicked and the order in which they're clicked.
7. ✅ Display the information collected from step 6 in the sidebar.

# Questions & Feedback
Please contact Chuck Haines (chaines@chess.com) with any questions or feedback regarding this challenge.

# Demo Site

_TBD_

# Notes

- This was a fun project, which was trickier than I expected. I went for Grid for the overall layout and flexbox for the board (which is a grid, I realize the irony).
- There are a few `calc()` functions in the css, which are not as elegant as I would have liked
- The bulk of my time was spent playing with the CSS. The overall functionality was not that difficult despite being pretty new to Vue.
- I blatantly ripped off the Chess.com default styling.
- Being new to Vue, I'm not sure of the testing best practices. Therefore I just added some simple snapshot testings with Jest. I've found snapshots to be a good first pass at testing when you have small simple components. If this was more involved I might have tried cypress.io

# Goodies

With those caveats aside, make sure to note the fun stuff.

- Board can be flipped, which just involves adding a single `flipped` class!
- Board numbers are handled completely with pseudo elements and counters!
- History page automatically scrolls if necessary
- History can be reset
- Cleverly named, "Square Clicker"

