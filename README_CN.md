# Leaflet 笔记八：marker高亮显示

这个plugin主要是为了方便实现marker的高亮显示。

## 安装

该库已经发布到npmjs上，所以安装非常简单。

```
npm install leaflet.marker.highlight --save
```

## 原理

突出marker的原理非常简单，在marker附近突出动态显示放大的圆形。只需将一个新的`div`插入到marker的底下，用css3实现marker的高亮特效。

整个使用的过程分为两种情况，一种是临时高亮显示，另一种是永久高亮显示。临时高亮即是当你鼠标移到marker附近才出现高亮，永久高亮就是你鼠标不需要与marker交互，它也能完成高亮显示。

### 临时高亮显示

在鼠标移动到marker上时显示。在初始化时，可以针对某个该marker设置`highlight`的属性。

```
var marker1 = L.marker([51.5, -0.09], {highlight: 'temporary'}).addTo(map);
```

#### 使用方法

使用`enableTemporaryHighlight`设置打开针对某个marker临时高亮，使用`disbaleTemporaryHighlight`设置取消临时高亮。

```
marker1.enableTemporaryHighlight();
```

```
marker1.disableTemporaryHighlight();
```

### 永久高亮显示

在初始化时，固定显示marker的位置，设置`highlight`的属性。

```
var marker1 = L.marker([51.5, -0.09], {highlight: 'permanent'}).addTo(map);
```

#### 使用方法

或者你也可以不在初始化的情况下设置，通过`enablePermanentHighlight`去设置其永久高亮特效，或者通过`disablePermanentHighlight`去取消高亮特效。
```
marker1.enablePermanentHighlight();
```

```
marker1.disablePermanentHighlight();
```


## 例子

[DEMO](https://brandonxiang.github.io/leaflet.marker.highlight/examples/)

## License

License [MIT](https://github.com/brandonxiang/leaflet.marker.highlight/blob/master/LICENSE)，欢迎来fork和contribute。

转载，请表明出处。[总目录Awesome GIS](http://www.jianshu.com/p/3b3efa92dd6d)
