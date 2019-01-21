<template>
  <div id="board" :class="{ flipped: flipped }">
    <ol>
      <li
        v-for="n in 64"
        :key="n"
        :class="calcClasses(n)"
        @click="handleClick(n)"
      ></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Board",
  props: {
    handleClick: Function,
    handleFlip: Function,
    flipped: Boolean,
    selected: Number
  },
  methods: {
    calcClasses: function(n) {
      const idx = n - 1;
      const row = Math.floor(idx / 8);
      const col = idx % 8;
      const dark = row % 2 === col % 2;
      return {
        square: true,
        dark,
        light: !dark,
        selected: n === this.selected
      };
    }
  }
};
</script>

<style scoped>
#board {
  grid-area: board;
  margin: 1.6rem;
}

ol {
  counter-reset: ranks 9 files;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

/* Admittedly, I chose to use flex box largely because it would be elegant to flip things over */
#board.flipped ol {
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
}
.square {
  /* Default to dark background */
  background: #b2895c;
  /* I have to look up the aspect ratio trick on CSS-tricks everytime... */
  padding-top: 12.5%;
  position: relative;
  width: 12.5%;
}

.square::before,
.square::after {
  color: #fff;
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif;
  font-size: 1.6rem;
  opacity: 0.5;
  text-shadow: 1px 1px #312e2b;
}

.square:first-child,
.flipped .square:last-child {
  border-radius: 0.4rem 0 0 0;
}
.square:nth-child(8),
.flipped .square:nth-child(57) {
  border-radius: 0 0.4rem 0 0;
}
.square:nth-child(57),
.flipped .square:nth-child(8) {
  border-radius: 0 0 0 0.4rem;
}
.square:last-child,
.flipped .square:first-child {
  border-radius: 0 0 0.4rem 0;
}
.square:nth-last-child(8n)::after {
  content: counter(ranks);
  counter-increment: ranks -1;
  height: 4rem;
  left: -2.2rem;
  line-height: 4rem;
  margin-top: -2rem;
  position: absolute;
  top: 50%;
}

.square:nth-child(n + 57)::before {
  bottom: -2.2rem;
  content: counter(files, lower-alpha);
  counter-increment: files;
  left: 50%;
  margin-left: -2rem;
  position: absolute;
  text-align: center;
  width: 4rem;
}

.flipped .square:nth-child(n + 57)::before {
  top: -2.2rem;
}
.flipped .square:nth-last-child(8n)::after {
  left: auto;
  right: -1.3rem;
}

.light {
  background: #eedab5;
}

.square.selected {
  background: red;
}
</style>
