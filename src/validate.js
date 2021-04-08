import Vue from 'vue';

// https://www.npmjs.com/package/vue-input-check
import inputCheck from 'vue-input-check';

// 安装
Vue.use(inputCheck, {

    // 自定义校验规则
    validate: [

        // 自定义一个规则例子
        {
            // 规则的名称
            name: "phone",

            // 校验方法
            test: (el, val) => {
                return !val || /^\d{11}$/.test((val + "").trim());
            },

            // 错误提示
            message: (el, name) => {
                return name + "输入非法，应该是一个11位的手机号码";
            }
        }

    ]

});
