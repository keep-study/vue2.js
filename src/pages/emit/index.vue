<template>
  <div>
    <sub-demo @testevent='doit'></sub-demo>
  </div>
</template>
<script>
import sub from "./sub.vue";

// 可以考虑把这个稍微优化一下用于组件之间的交互

export default {
  components: {
    subDemo: sub
  },
  methods: {
    doit(data) {
      console.error(data);
    }
  }
};
</script>
