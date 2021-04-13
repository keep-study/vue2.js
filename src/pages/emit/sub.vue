<template>
  <div @click='doit'>
    点击我
  </div>
</template>
<script>
export default {
  methods: {
    doit() {
    //   this.$emit.call(this,"testevent", "数据");
      this.$emit('testevent','数据2');
    }
  },
  created() {
    this.$on("testevent", data => {
      console.log(data);
    });
  }
};
</script>
