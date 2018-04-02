'use strict';

module.exports = {
    rules: {
        //死循环报错
        "for-direction": "error",
        //循环中不得出现await
        "no-await-in-loop": "error",
        //禁止与-0比较
        "no-compare-neg-zero": "error",
        //禁止在比较表达式中出现赋值操作符
        "no-cond-assign": "error",
        //禁止除console.error和console.warn以外的语句
        "no-console": ["error", {
            "allow":["warn","error"]
        }],
        //正则表达式中禁止使用控制字符
        "no-control-regex": "error",
        //禁止使用debugger语句
        "no-debugger": "error",
        //禁止声明函数时出现重名参数
        "no-dupe-args": "error",
        //禁止对象字面量中出现重复的键名
        "no-duplicate-case": "error",
        //禁止出现空语句块
        "no-empty": "error",
        //禁止在正则中使用空字符。如'/123[]/'
        "no-empty-character-class": "error",
        //禁止对catch的参数赋值
        "no-ex-assign": "error",
        //可以进行额外的bool转换，如if(!!a)
        "no-extra-boolean-cast": "off",
        //禁止多余的分号
        "no-extra-semi": "error",
        //禁止对函数变量重复赋值
        "no-func-assign": "error",
        //禁止嵌套块中出现函数声明
        "no-inner-declarations": "error",
        //禁止出现无效的正则声明
        "no-invalid-regexp": "error",
        //对除空格和tab以外的空白字符发出警告
        "no-irregular-whitespace": "warning",
        //不得将Math、JSON等全局对象当作函数调用
        "no-obj-calls": "error",
        //禁止在正则中出现连续多个空格，应该使用'{n}'来指定空格的个数
        "no-regex-spaces": "error",
        //对稀疏数组发出警告，如"[1,2,,3,,4]"。这可能是开发者多写了逗号。
        "no-sparse-arrays": "warning",
    }
};