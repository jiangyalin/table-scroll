# table-scroll

这是本人开发的一个基于jquery的表格滚动条的插件，目前仅支持横向滑动。该插件可自定义表格可视宽度，自动生成滚动条，也可自定义css调整其位置，按钮略丑，有空再来优化。<br/>


## 引入js、css
首先引入插件，css与js
```html
    <link rel="stylesheet" href="css/table-scroll.css" />
    <script type="text/javascript" src="js/jquery-2.1.0.js"></script>
    <script type="text/javascript" src="js/table-scroll.js"></script>
```
## dom结构
dom的结构很简单粗暴，两层div，一层table，直接上代码：
```html
<div class="table-box">  
    <div class="table-content">
        <table>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
           </tr>
        </table>
    </div>
</div>
```
## 如何实现
首先对需要滚动的table-box的dom节点加一个id `<div class="table-box" id="table">` <br/>
js代码如下：
```js
        /**
         *
         * @param option : object
         *         option.element : selector 目标表格，推荐用id
         *         option.tableWidth? : number 表格可视的宽度,设置.table-content的宽
         *         option.scrollWidth? : number 滚动条宽度,设置.table-scroll-bar的宽
         * 
         */
        tableScroll({
            element:'#table',   //指定table-box的dom节点
            tableWidth:500,     //指定表格的可视宽度, 可空
            scrollWidth:100     //指定滚动条的宽度,可空
        });

```
