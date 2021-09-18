---
typora-root-url: ..\des-img
---

# Responsive Website Delivery 🚚
## [Watch it on youtube](https://youtu.be/xOQU3YNHxJc)
### Responsive Website Delivery

- Website Delivery, using HTML, Sass and JavaScript.
- Includes a dark and light mode.
- Color customization.
- Developed first with the Mobile First methodology, then for desktop.
- Compatible with all mobile devices and with a beautiful and pleasant user interface.

Join the channel to see more videos like this. [Bedimcode](https://www.youtube.com/c/Bedimcode)

![Delivery website](/preview.png)





## Igotitspark

### 什么是Boxicons

> high quality web Icon
>
> simple vector icons carefully crafted for designer & developers
>
> url: https://boxicons.com/
>
> github: https://github.com/atisawd/boxicons

- how to use it ?

  去github看文档，这种情况下肯定用link引入

  ```
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
  ```

  

### 什么是Google Fonts？

>一个谷歌浏览器提供的在线字体吧
>
>url: https://fonts.google.com/

- how to use it?

  其实可以自己摸索，很简单，给自己做个笔记吧

  1. 在搜索框搜索想要的字体，比如该项目需要的 `popp`

     ![img01](/01.png)

  2. Select styles add you favour style

     注意是import模式 body-font需要 font-family那里 注意啊！！！！！

     注意variables.css文件里的--body-font: 'Poppins', sans-serif;

     ![img02](/02.png)

### 什么是live Sass Compiler？

> vscode的插件 检测和编译 sass or scss文件
>
> 注意 vscode底部栏的 watching状态 判断文件是否success
>
> 我也是第一次接触这个，我觉得用法是把sass和scss文件打包编译成一个css文件，
>
> 注意要设置目录
>
> 需要配置savePath > https://www.cnblogs.com/ZerlinM/p/13632254.html

把`asssets/scss/styles.scss` 集成文件打包到`assets/css/style.css` 而index.html引用的是后者



### 什么是hsl?

> url: https://www.w3schools.com/colors/colors_hsl.asp
>
> css hsl()函数 使用色相、饱和度、亮度来定义颜色。
>
> HSL 即色相、饱和度、亮度（英语：Hue, Saturation, Lightness）。
>
> 这挺考验前端和UI是否经常交流学习获得对颜色的利用。 第一次接触
>
> https://colors.dopely.top/  一个color better select 查看hsl

### 需要掌握的是display:gird





