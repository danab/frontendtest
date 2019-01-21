<template>
  <div id="sidebar">
    <h3>History</h3>
    <div class="toolbar-wrapper">
      <div class="history-wrapper">
        <div
          v-for="(square, idx) in history"
          class="sidebar-square"
          :key="`${square}-${idx}`"
        >
          <span class="square-idx">{{ idx + 1 }}.</span>
          <span class="square-coords">{{ getCoords(square) }}</span>
        </div>
      </div>
      <div class="button-wrapper">
        <div @click="handleReset" class="button"><a>Reset</a></div>
        <div @click="handleFlip" class="button"><a>Flip</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    handleFlip: Function,
    handleReset: Function,
    history: Array
  },
  methods: {
    getCoords: function(n) {
      const idx = n - 1;
      const alpha = "abcdefgh";
      const file = alpha[idx % 8];
      const rank = 8 - Math.floor(idx / 8);
      return file + rank;
    }
  }
};
</script>

<style scoped>
#sidebar {
  background: white;
  border-radius: 0.4rem;
  grid-area: sidebar;
  margin: 1.6rem 0.8rem;
  min-height: 16rem;
}

.toolbar-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* This should be rethought for sure, very brittle, height - header height - margin  */
  height: calc(70vmin - 5rem - 3.2rem);
}

.history-wrapper {
  overflow: auto;
  padding: 0.8rem;
  text-align: left;
}
h3 {
  background: #f1f1f1;
  border-radius: 0.4rem 0.4rem 0 0;
  color: #666463;
  font-size: 1.6rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
}

.sidebar-square {
  display: inline-block;
  font-size: 1.6rem;
  margin: 0.3rem 0.2rem;
}

.sidebar-square .square-idx {
  display: inline-block;
  text-align: center;
  width: 2.1rem;
}
.sidebar-square .square-coords {
  display: inline-block;
  margin-left: 0.1rem;
  text-align: center;
  padding: 0.3rem;
  width: 2.9rem;
  height: 2.9rem;
  line-height: 3.2rem;
  background: #666;
  color: white;
}

.button {
  background: #e6912c;
  border-bottom: 0.1rem solid #a7a6a2;
  border-radius: 0.3rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
  margin: 0.8rem;
  padding: 0.8rem;
  text-align: center;
  vertical-align: middle;
}
</style>
