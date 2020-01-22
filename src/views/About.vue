<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <h2 v-if="count == 0">没人给你点赞~</h2>
    <h2 v-else-if="count < 0">被人Diss了 {{ count }}~</h2>
    <h2 v-else>{{ readableCount }}人给你点赞了哦！</h2>
    <button @click="increment">+1</button>
    <button @click="descrment">-1</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapState(["count"]),
    readableCount() {
      return this.$store.getters.filterState;
    },
    msg() {
      if (this.count == 0) {
        return "没有人给你点赞啊!";
      } else if (this.count < 1) {
        return "被人Diss了啊！！！！！";
      }

      return this.count + "人给你点赞了哦";
    }
  },
  methods: {
    increment() {
      this.$store.dispatch("addAction");
    },
    descrment() {
      this.$store.commit("desc");
    }
  }
};
</script>
