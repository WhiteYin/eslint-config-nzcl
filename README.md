# eslint-config-nzcl
[![npm package](https://img.shields.io/npm/v/eslint-config-nzcl.svg?style=flat-square)](https://www.npmjs.org/package/eslint-config-nzcl)
[![NPM downloads](http://img.shields.io/npm/dt/eslint-config-nzcl.svg?style=flat-square)](https://npmjs.org/package/eslint-config-nzcl)  

My personal ESLint shareable config.

# 安装
`$ npm install --save-dev eslint eslint-config-nzcl`

# 支持的环境
```js
env: {
    'browser': true,
    'node': true,
    'jest': true,
    'jquery': true,
    'mongo': true,
    'es6': true,
}
```

# 使用
尽管单独使用本规范配置不会有任何副作用  
```js
{
  "extends": "nzcl",
  "rules": {
    //自定义规则
  }
}
```
但仍然建议您基于eslint-config-recommended的配置使用本规范。  
```js
{
  "extends": ["eslint:recommended", "nzcl"],
  "rules": {
    //自定义规则
  }
}
```

# 参与
由于本规范规则较多，测试用例不全，所以如果您在使用中发现问题，欢迎提issue。  

# License
## The MIT License (MIT)
Copyright (c) 2018 White Yin <yinoo0@163.com> & [wzyJerry](https://github.com/wzyjerry)

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.