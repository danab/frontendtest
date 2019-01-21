<template>
  <div id="app">
    <header><h1>Square Clicker</h1></header>
    <Board :selected="selected" :handleClick="handleClick" :flipped="flipped" />
    <Sidebar
      :history="history"
      :handleReset="handleReset"
      :handleFlip="handleFlip"
    />
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: { Board, Sidebar },
  // Let's use this component as a source of truth
  data: function() {
    return {
      flipped: false,
      history: [],
      selected: null
    };
  },
  methods: {
    handleClick: function(n) {
      this.history.push(n);
      this.selected = n;
      this.$nextTick(function() {
        const wrap = document.querySelectorAll(".history-wrapper")[0];
        console.log(wrap.scrollHeight);
        wrap.scrollTop = wrap.scrollHeight;
      });
    },
    handleFlip: function() {
      this.flipped = !this.flipped;
    },
    handleReset: function() {
      this.history = [];
      this.selected = null;
    }
  }
};
</script>

<style scoped>
#app {
  display: grid;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  grid-template-areas:
    "header"
    "board"
    "sidebar";
  margin: 5vmin auto;
  width: 100%;
}

header {
  align-self: center;
  color: white;
  grid-area: header;
  text-align: center;
}

h1 {
  font-size: 3.2rem;
}

@media (min-width: 600px) {
  #app {
    grid-template-areas:
      "header header"
      "board sidebar";
    /* Don't love this calc, consider smarter ways of doing this*/
    grid-template-rows: 10vmin minmax(calc(25 / 95 * 40rem), 70vmin);
    grid-template-columns: 70fr 25fr;
    width: 95vmin;
    min-height: 40rem;
    min-width: 40rem;
  }
}

/* Make it look reasonable-ish on landscape mode */
@media (max-height: 600px) AND (min-width: 600px) {
  #app {
    grid-template-columns: 70fr 40fr;
    width: 60vw;
    min-height: 40rem;
    max-width: 120rem;
    margin: auto;
  }
}
</style>
