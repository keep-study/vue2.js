<template>
  <div>
    <h1>Tips：关于Vue2.js的一些代码笔记！</h1>
    <ul>
      <li @click="$router.push('/validate')">
        1.表单校验：可以在页面实时反馈校验结果，也可以在提交的时候获取校验结果。
      </li>
      <li @click="$router.push('/v-slot')">
        2.v-slot插槽。
      </li>
       <li @click="$router.push('/emit')">
        3.emit：测试vue一些事件相关问题。
      </li>
    </ul>
  </div>
</template>
<style lang="css" scoped>
div > h1 {
  padding: 30px;
}
div {
  padding: 10px;
}
ul {
  border: 1px solid red;
}
ul > li {
  margin: 10px;
  background-color: rgb(4, 115, 212);
  padding: 10px;
  font-size: 12px;
  color: white;
  cursor: pointer;
}
</style>
