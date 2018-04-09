'use strict';

module.exports = {
    env: {
        'browser': true,
        'node': true,
        'jest': true,
        'jquery': true,
        'mongo': true,
        'es6': true,
        'mocha': true,
    },
    parserOptions: {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    rules: {
        // 死循环报错
        'for-direction': 'error',
        //  循环中不得出现await
        'no-await-in-loop': 'error',
        //  禁止与-0比较
        'no-compare-neg-zero': 'error',
        // 禁止在比较表达式中出现赋值操作符
        'no-cond-assign': 'error',
        // 禁止除console.error和console.warn以外的console语句
        'no-console': [
            'error',
            {
                allow:['warn','error']
            },
        ],
        // 正则表达式中禁止使用控制字符
        'no-control-regex': 'error',
        // 禁止使用debugger语句
        'no-debugger': 'error',
        // 禁止声明函数时出现重名参数
        'no-dupe-args': 'error',
        // 禁止对象字面量中出现重复的键名
        'no-duplicate-case': 'error',
        // 禁止出现空语句块
        'no-empty': 'error',
        // 禁止在正则中使用空字符。如'/123[]/'
        'no-empty-character-class': 'error',
        // 禁止对catch的参数赋值
        'no-ex-assign': 'error',
        // 可以进行额外的bool转换，如if(!!a)
        'no-extra-boolean-cast': 'off',
        // 禁止多余的分号
        'no-extra-semi': 'error',
        // 禁止对函数变量重复赋值
        'no-func-assign': 'error',
        // 禁止嵌套块中出现函数声明
        'no-inner-declarations': 'error',
        // 禁止出现无效的正则声明
        'no-invalid-regexp': 'error',
        // 对除空格和tab以外的空白字符发出警告
        'no-irregular-whitespace': 'warn',
        // 不得将Math、JSON等全局对象当作函数调用
        'no-obj-calls': 'error',
        // 禁止在正则中出现连续多个空格，应该使用'{n}'来指定空格的个数
        'no-regex-spaces': 'error',
        // 对稀疏数组发出警告，如'[1,2,,3,,4]'。这可能是开发者多写了逗号。
        'no-sparse-arrays': 'warn',
        // 对可能是错误的模板字符串发出警告。比如'${abc}'可能是误写。
        'no-template-curly-in-string': 'warn',
        // 禁止在必要的换行时省略分号
        'no-unexpected-multiline': 'error',
        // 禁止在return等返回语句后出现不可达代码
        'no-unreachable': 'error',
        /* 
        * 由于finally中的返回值会比try语句块的返回值返回得要早，
        * 所以为了保证正确接收到try的返回值，
        * 禁止在finally块中出现return等返回语句
        */ 
        'no-unsafe-finally': 'error',
        // 对可能是错误的布尔表达式发出警告。比如'!(key in obj)'错写成'!key in obj'
        'no-unsafe-negation': 'warn',
        // 禁止直接与NaN进行比较，应该使用Number.isNaN()
        'use-isnan': 'error',
        // 禁止将typeof操作符返回的结果与未知的类型比较
        'valid-typeof': 'error',
        // 禁止Array原型方法的回调函数缺少return返回值
        'array-callback-return': 'error',
        // 禁止出现跨块级调用变量
        'block-scoped-var': 'error',
        // 对缺少大括号的语句发出警告
        'curly': 'warn',
        // 禁止switch语句中缺少default分支
        'default-case': 'error',
        // 禁止使用==和!=
        'eqeqeq': 'error',
        // 对缺少if(obj.hasOwnProperty())判断的for...in循环发出警告
        'guard-for-in': 'warn',
        // 禁止使用eval()
        'no-eval': 'error',
        // 禁止扩展原生类型
        'no-extend-native': 'error',
        // 对没有break的case语句发出警告
        'no-fallthrough': 'warn',
        // 禁止对原生全局变量赋值
        'no-global-assign': 'error',
        // 禁止使用隐式eval()
        'no-implied-eval': 'error',
        // 禁止在对象外出现this
        'no-invalid-this': 'error',
        // 禁止使用__iterator__属性
        'no-iterator': 'error',
        // 禁止在循环中出现函数声明
        'no-loop-func': 'error',
        // 对重复使用的数字发出警告
        'no-magic-numbers': 'warn',
        // 禁止出现换行符'\'
        'no-multi-str': 'error',
        // 禁止出现不使用变量接收new操作符返回值的情况
        'no-new': 'error',
        // 禁止对函数的参数进行赋值，保证纯函数，无副作用
        'no-param-reassign': 'error',
        // 禁止使用__proto__属性
        'no-proto': 'error',
        // 禁止使用var重复声明同名变量
        'no-redeclare': 'error',
        // 禁止使用javascript:url格式，避免出现eval()类似的问题
        'no-script-url': 'error',
        // 禁止出现自我赋值的情况
        'no-self-assign': 'error',
        // 禁止抛出除Error对象外的值
        'no-throw-literal': 'error',
        // 禁用未使用过的标签
        'no-unused-labels': 'error',
        // 禁止不必要的转义
        'no-useless-escape': 'error',
        // 禁用 with 语句
        'no-with': 'error',
        // 禁止Promise.reject使用非Error对象的参数
        'prefer-promise-reject-errors': 'error',
        // 禁止省略parseInt的第二个参数
        'radix': 'error',
        // 禁止出现async函数中没有await的情况
        'require-await': 'error',
        // 禁止catch语句的参数与上层作用域变量同名
        'no-catch-shadow': 'error',
        // 禁止删除变量
        'no-delete-var': 'error',
        // 禁止使用与变量同名的标签
        'no-label-var': 'error',
        // 禁止局部变量覆盖外层作用域同名变量，除'resolve'、'reject'和'done'
        'no-shadow': [
            'error',
            {
               'allow': ['resolve','reject','done'] 
            },
        ],
        // 禁止对关键字赋值
        'no-shadow-restricted-names': 'error',
        // 禁止使用未声明的变量，除特定环境中的全局变量
        'no-undef': 'error',
        // 禁止显示声明变量值为undefined
        'no-undef-init': 'error',
        // 禁止声明但未使用过的变量
        'no-unused-vars': 'error',
        // 禁止依赖于变量提升而在变量声明前使用它
        'no-use-before-define': 'error',
        // 禁止在除顶层作用域外调用require()方法
        'global-require': 'error',
        // 禁止使用Buffer构造函数，使用Buffer.from方法代替
        'no-buffer-constructor': 'error',
        // 禁止对require调用new操作符
        'no-new-require': 'error',
        // 禁止对__dirname等直接使用字符串拼接。应该用path模块处理文件路径
        'no-path-concat': 'error',
        // 禁止在代码中对process.env赋值
        'no-process-env': 'error',
        // 禁止使用process.exit()，这是一个危险的方法。使用抛出错误代替
        'no-process-exit': 'error',
        /* section4: 代码风格相关*/
        // off; 允许单行数组
        'array-bracket-newline': 0,
        // error; 数组的括号前后禁止有空格
        'array-bracket-spacing': [2, 'never'],
        // off; 允许单行数组
        'array-element-newline': 0,
        // error; 单行代码大括号内的首尾必须有空格
        'block-spacing': [2, 'always'],
        // error; 允许在else if行之上加入注释
        'brace-style': [2, 'stroustrup'],
        // off; 不要求强制驼峰
        'camelcase': 0,
        // off; 对注释不做要求
        'capitalized-comments': 0,
        //在多行中使用拖尾逗号（IE8及以下会报错）
        'comma-dangle': [2, 'only-multiline'],
        // error; 逗号后面强制要求加空格
        'comma-spacing': 2,
        // error; 逗号必须在最后面
        'comma-style': [2, 'last'],
        // error; 文件尾要求换行
        'eol-last': [2, 'always'],
        // error; 函数名和参数列表之间禁止有空格
        'func-call-spacing': [2, 'never'],
        // off; 函数赋值给变量时对变量名不做要求
        'func-name-matching': 0,
        // off; 不限制匿名函数命名
        'func-names': 0,
        // off; 不限制函数声明或函数表达式
        'func-style': 0,
        // error; 如果在函数括号内任意参数有换行，要求全部换行
        'function-paren-newline': 2,
        // off; 不限制变量名
        'id-blacklist': 0,
        // off; 不限制变量名长度
        'id-length': 0,
        // off; 不限制变量名
        'id-match': 0,
        // error; 箭头函数函数体之前禁止换行
        'implicit-arrow-linebreak': 2,
        // error; 一个缩进必须用4个空格，switch语句里面的case用2个空格，三元表达式不能有缩进
        'indent': [
            2,
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            },
        ],
        // error; jsx 中的属性必须用双引号
        'jsx-quotes': [2, 'prefer-double'],
        // error; 对象字面量中冒号前面禁止有空格，后面必须有空格
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
        ],
        // error; 关键字前后必须要加上空格
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true
            },
        ],
        // error; 行注释必须在代码上方，单独成行
        'line-comment-position': [
            2,
            {
                position: 'above'
            },
        ],
        // off; 不限制换行符
        'linebreak-style': 0,
        // off; 不限注释前后空行
        'lines-around-comment': 0,
        // error; 要求类成员之后有空行
        'lines-between-class-members': [2, 'always'],
        // error; 代码块嵌套的深度禁止超过 5 层
        'max-depth': [2, 5],
        // error; 单行最多允许150个字符, 对包含url的行不进行此限制
        'max-len': [
            2,
            {
                code: 150,
                tabWidth: 2,
                ignoreUrls: true,
            },
        ],
        // off; 不限制文件最大代码行数
        'max-lines': 0,
        // error; 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
        'max-nested-callbacks': [2, 3],
        // error; 函数的参数禁止超过 10 个
        'max-params': [2, 10],
        // off; 不限制函数长度
        'max-statements': 0,
        // off; 不限制单行语句数
        'max-statements-per-line': 0,
        // error; 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *
        'multiline-comment-style': 2,
        // off; 不限制三元操作数换行
        'multiline-ternary': 0,
        // error; 构造函数首字母大写
        'new-cap': 2,
        // error; 要求调用无参构造函数时有圆括号
        'new-parens': 2,
        // error; 要求方法链中每个调用单独一行
        'newline-per-chained-call': 2,
        // error; 禁止使用 Array 构造函数
        'no-array-constructor': 2,
        // off; 不限制位运算
        'no-bitwise': 0,
        // off; 允许使用continue
        'no-continue': 0,
        // error; 禁止使用内联注释
        'no-inline-comments': 2,
        // error; else语句块中只出现if请用 else if 替代
        'no-lonely-if': 2,
        // error; 禁止混用不同的操作符
        'no-mixed-operators': 2,
        // error; 禁止混用空格和缩进
        'no-mixed-spaces-and-tabs': 2,
        // error; 禁止连续赋值
        'no-multi-assign': 2,
        // error; 禁止连续空行
        'no-multiple-empty-lines': 2,
        // off; 允许出现否定表达式
        'no-negated-condition': 0,
        // off; 允许三元表达式的嵌套使用
        'no-nested-ternary': 0,
        // off; 禁用 Object 的构造函数
        'no-new-object': 2,
        // off; 允许使用 ++ 或 --
        'no-plusplus': 0,
        // off; 不对语法进行限制
        'no-restricted-syntax': 0,
        // off; 允许使用tab
        'no-tabs': 0,
        // off; 允许使用三元表达式
        'no-ternary': 0,
        // error; 禁止行尾部有空格
        'no-trailing-spaces': 2,
        // off; 允许变量名中出现下划线
        'no-underscore-dangle': 0,
        // error; 能约减三元表达式时提示
        'no-unneeded-ternary': 2,
        // error; 禁止属性前有空格
        'no-whitespace-before-property': 2,
        // error; 强制单个语句在一行（不建议使用单个语句）
        'nonblock-statement-body-position': 2,
        // error; 大括号内的首尾必须有换行
        'object-curly-newline': [
            2,
            {
                multiline: true,
                consistent: true,
            },
        ],
        // error; 大括号前后必须有空格
        'object-curly-spacing': [2, 'always'],
        // error; 对象属性必须在不同行
        'object-property-newline': 2,
        // off; 允许在函数中分散声明变量
        'one-var': 0,
        // error; 一行只能声明一个变量
        'one-var-declaration-per-line': [2, 'always'],
        // error; 要求简化赋值操作
        'operator-assignment': 2,
        // error; 要求多行语句中操作符在行首
        'operator-linebreak': [2, 'before'],
        // error: 禁止块内填充
        'padded-blocks': [2, 'never'],
        // off; 不要求语句间空行
        'padding-line-between-statements': 0,
        // error; 要求对象字面量属性名称使用一致的引号
        'quote-props': [2, 'consistent'],
        // error; 必须使用单引号
        'quotes': [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        // off; 不要求JSDoc注释
        'require-jsdoc': 0,
        // error; 结尾必须有分号
        'semi': 2,
        // error; 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
        'semi-spacing': [
            2,
            {
                before: false,
                after: true,
            },
        ],
        // error; 分号必须写在行尾，禁止在行首出现
        'semi-style': [2, 'last'],
        // off; 不要求对象属性排序
        'sort-keys': 0,
        // off; 不要求变量排序
        'sort-vars': 0,
        // error; 大括号之前必须要有空格
        'space-before-blocks': [2, 'always'],
        // off; 小括号前面不要求空格
        'space-before-function-paren': 0,
        // error; 小括号内的首尾禁止有空格
        'space-in-parens': [2, 'never'],
        // error; 操作符左右必须有空格
        'space-infix-ops': 2,
        // error; 一元操作符words要求后空格，nonwords要求无空格
        'space-unary-ops': [
            2,
            {
                words: true,
                nonwords: false,
            },
        ],
        // error; 要求注释后带有空格
        'spaced-comment': 2,
        // error; case 子句冒号前禁止有空格，冒号后必须有空格
        'switch-colon-spacing': [
            2,
            {
                after: true,
                before: false,
            },
        ],
        // error; 禁止在模板标记和它们的字面量之间有空格
        'template-tag-spacing': 2,
        // error; 文件不能以 Unicode BOM 开头
        'unicode-bom': 2,
        // error; 要求正则表达式被包裹起来
        'wrap-regex': 2,
        // 禁止省略箭头函数的箭头前后空格
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            }
        ],
        // 禁止省略派生类中的super方法
        'constructor-super': 'error',
        // 禁止省略generator的星号前后空格
        'generator-star-spacing': [
            'error',
            {
                'before': true,
                'after': true,
            }
        ],
        // 禁止声明与已有类同名的变量并赋值
        'no-class-assign': 'error',
        // 禁止出现容易混淆箭头函数用途的场景
        'no-confusing-arrow': 'error',
        // 禁止修改const声明的常量
        'no-const-assign': 'error',
        // 禁止在一个类中声明多个同名变量
        'no-dupe-class-members': 'error',
        // 禁止重复导入同一模块
        'no-duplicate-imports': 'error',
        // 禁止将new和Symbol同时调用
        'no-new-symbol': 'error',
        // 禁止在super()调用前使用this或super
        'no-this-before-super': 'error',
        // 禁止在导入导出模块时出现无意义的重命名
        'no-useless-rename': 'error',
        // 对使用var的行为发出警告
        'no-var': 'warn',
        // 禁止出现对象字面量的属性简写写法
        'object-shorthand': ['error','never'],
        // 禁止对常量使用var或let赋值
        'prefer-const': 'error',
        // 对使用arguments的行为发出警告
        'prefer-rest-params': 'warn',
        // 对使用Function.prototype.apply方法的行为发出警告
        'prefer-spread': 'warn',
        // 禁止省略generator函数中的yield
        'require-yield': 'error',
        // 禁止在扩展运算符两边出现空格
        'rest-spread-spacing': ['error', 'never'],
        // 禁止在创建Symbol变量时省略描述
        'symbol-description': 'error',
        // 禁止在模板字符串的花括号内出现空格
        'template-curly-spacing': ['error', 'never'],
    }
};