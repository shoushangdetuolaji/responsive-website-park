## cdn font样式
> cdnjs.com
> search-key: font awesome
> https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css

## 字体
> fonts.google.com/specimen/Poppins
- Thin 100
- Light 300
- Regular 400
- Medium 500
- Semi-bold 600

## clip-path
> mdn https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path
利用图形路径显示，是个好办法结合transition
```css
// hide
clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
// show
clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
```

## 地图的使用
使用Google map / baidu map
然后 iframe引入就好

## 你学到了什么
我学到了，使得页面都有个过渡效果
```css
* {
   transition: .2s linear;
}
```