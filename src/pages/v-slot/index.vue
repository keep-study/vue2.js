<template>
  <div class='doc-view'>
    <h2>
      2.插槽
    </h2>
    <h3>
      作用域问题
    </h3>
    <simple-use>
      info:{{info}}
    </simple-use>
    <h3>
      作用域插槽
    </h3>
    <scope-slot>
      <template v-slot:default='sub_scope'>
        {{sub_scope.message}}
      </template>
    </scope-slot>
  </div>
</template>
<script>
import simpleUse from "./simple-use.vue";
import scopeSlot from "./scope-slot.vue";
export default {
  data() {
    return {
      info: "我来自父组件"
    };
  },
  components: {
    simpleUse,
    scopeSlot
  }
};
</script>
