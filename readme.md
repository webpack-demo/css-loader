# css-loader

```bash
$ cnpm i css-loader style-loader less-loader less -D
```

如果需要将 css 作为模块在 webpack 中使用，首先必须使用 [css-loader](https://github.com/webpack-contrib/css-loader)

官网描述 css-loader 的作用：

> The `css-loader` interprets `@import` and `url()` like `import/require()` and will resolve them.

css-loader 会解释 `@import` 和 `url()` 里的内容，然后用合适的 loader 处理它们（比如 url(xxx) 里是图片地址，那么我们就要用 file-loader 或者 url-loader 处理它，不然会报错，然后 build 的时候，如果用了 file-loader，便会 emits the file into the output directory）

css-loader 可以选择开启 [css-modules](https://github.com/webpack-contrib/css-loader#modules)，关于 css-modules 的更多内容可以查阅 [官网](https://github.com/css-modules/css-modules) 或者阮一峰老师的 [入门教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)。使用 css-modules 样式表必须用 class 定义，**然后它会被替换成一个独一无二的样式名**，使用标签或者 id 是不行的，不会被替换

> 产生局部作用域的唯一方法，就是使用一个独一无二的 class 的名字，不会与其他选择器重名。这就是 CSS Modules 的做法

然后是 [style-loader](https://github.com/webpack-contrib/style-loader)，它可以将经过 css-loader 解析后的 css 字符串插入到 dom 中（使用 style 标签内联插入）

当然，通过 css-loader 解析后，我们也可以用其他 loader 或者 plugin 处理，从而外联形式引用样式

总结下：

* **css-loader 是解析 css 模块必须的 loader**，它主要解析 @import 和 url()，然后传给下一个 loader
* style-loader 可以将 css-loader 解析后的结果传入，作为内联样式插入 dom

---

demo 一共三个样式文件，css-module.css，b.css 以及 a.less

对于 css 文件我们启用了 modules，所以 css 样式会被替换成独一无二的样式名，可以看 head 中引入的 style css，所以 b.css 文件没生效（因为打包的样式名和使用的样式名不一致），而要用 css-module.css 的使用方式（`import styles from './css-module.css'`）

