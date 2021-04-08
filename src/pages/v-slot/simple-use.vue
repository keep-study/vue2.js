<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: "我来自子组件"
    };
  }
};
</script>
