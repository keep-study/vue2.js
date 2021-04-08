<template>
  <div class='doc-view'>
    <h2>
      1.表单校验
    </h2>
    <form
      novalidate
      autocomplete="off"
      ref='myform'
    >

      <!-- 姓名 -->
      <div>
        <label>姓名</label>
        <input
          type="text"
          name='姓名'
          v-model='name'
          v-input-check='[name,"required"]'
        >
      </div>

      <!-- 号码 -->
      <div>
        <label>号码</label>
        <input
          type="text"
          name='号码'
          v-model='phone'
          v-input-check='[phone,"required|phone"]'
        >
      </div>

      <!-- 备注 -->
      <div>
        <label>备注</label>
        <input
          type="text"
          name='备注'
          v-model='mask'
        >
      </div>

      <button @click.prevent="doSubmit">提交</button>

    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      mask: ""
    };
  },
  methods: {
    doSubmit() {
      // 提交前js里面判断表单是否合法
      //   如果非法，给出具体提示
      this.$validateCheck(
        this.$refs.myform,
        () => {
          alert("校验通过");
        },
        error => {
          // 提示错误内容
          alert(error.$error);

          // 聚焦在错误的输入框
          error.$el.focus();
        }
      );
    }
  }
};
</script>
<style scoped>
input {
  outline: none;
}

button {
  color: white;
  padding: 10px 30px;
  cursor: pointer;
  user-select: none;
}

/* 表单是否合法使用按钮的颜色来试试提示 */
form.v-invalid button {
  background-color: gray;
}

form.v-valid button {
  background-color: green;
}

/* 输入框是否合法使用输入框的边框颜色来提示 */
input.v-invalid {
  border: 1px solid red;
}
</style>
