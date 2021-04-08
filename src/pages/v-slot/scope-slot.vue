<template>
  <div>
    <slot v-bind:message='message'></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "来自子组件中的数据"
    };
  }
};
</script>
