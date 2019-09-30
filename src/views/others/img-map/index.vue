<template>
    <div class="app-container">
        <canvas id="cvs"></canvas>
    </div>
</template>
<script>
export default {
    mounted() {
        var mapimage, width, height
        var canvas = document.querySelector('#cvs')
        var ctx = canvas.getContext('2d')
        var data
        var imageData //getImageData获得的数据
        var beginPos
        var inpath = []

        var rgbr = 250
        var rgbg = 23
        var rgbb = 23


        var clearr = 255
        var clearg = 255
        var clearb = 255

        //点位顺序如下图
        //  0  1  2
        //  7  a  3
        //  6  5  4
        var checklist = [
            [-1, -1],
            [0, -1],
            [1, -1],
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
        ]

        //主程序，将在图片加载完成后被调用
        function main() {
            setCanvas()
            setimageData()
            var paths = getAllPaths()
            drawPath(paths)
            addEvent(paths)
        }
        // 加载图片
        // 加载完成后调用main
        function loadImage(cb) {
            mapimage = new Image()
            mapimage.crossOrigin = ''
            // mapimage.src = 'https://image-static.segmentfault.com/200/664/2006640996-5a17f03053122_articlex'
            mapimage.src = '/maps/timg.jpg'
            mapimage.onload = function () {
                width = this.width
                height = this.height
                main()
            }
        }

        function addEvent(paths) {
            canvas.addEventListener('mousemove', function (e) {
                var path = paths[0]
                var x = e.offsetX
                var y = e.offsetY

                ctx.beginPath()
                for (var i = 0, l = path.length; i < l; i++) {
                    ctx.lineTo(path[i][0], path[i][1])
                }

                if (ctx.isPointInPath(x, y)) {
                    for (var i = 1, l = paths.length; i < l; i++) {
                        path = paths[i]
                        ctx.beginPath()
                        for (var j = 0, lj = path.length; j < lj; j++) {
                            ctx.lineTo(path[j][0], path[j][1])
                        }
                        if (ctx.isPointInPath(x, y)) {
                            ctx.fillStyle = 'red'
                        } else {
                            ctx.fillStyle = 'green'
                        }
                        ctx.fill()
                    }
                }
            })
        }
        // 设置canvas
        function setCanvas() {
            canvas.height = mapimage.height
            canvas.width = mapimage.width
            canvas.style.height = height + 'px'
            canvas.style.width = width + 'px'
        }

        function checkcolor(index, r, g, b) {
            return data[index * 4] === r &&
                data[index * 4 + 1] === g &&
                data[index * 4 + 2] === b
        }
        // 处理通过canvas获取的数据
        function setimageData() {
            ctx.drawImage(mapimage, 0, 0)
            imageData = ctx.getImageData(0, 0, width, height)
            ctx.clearRect(0, 0, width, height)
            data = imageData.data
            // 描边，将边线设置为纯黑 rgba(0, 0, 0, 255)
            // canvas获取的rgba数据 a通道值的范围是0~255
            for (var i = 0, l = data.length / 4; i < l; i++) {
                var gray = Math.floor((data[i * 4] + data[i * 4 + 1] + data[i * 4 + 2]) / 3)
                if (gray < 170) {
                    data[i * 4] = 0
                    data[i * 4 + 1] = 0
                    data[i * 4 + 2] = 0
                } else {
                    if (checkcolor(i, rgbr, rgbg, rgbb)) {
                        data[i * 4] = rgbr + 1
                        data[i * 4 + 1] = rgbg + 1
                        data[i * 4 + 2] = rgbb + 1
                    }
                }
                data[i * 4 + 3] = 255
            }
            // 将边线即纯黑色像素周围的所有点设置为制定颜色（rgbr, rgbg, rgbb）
            // 路径将通过检测制定颜色读取
            // 所以上一次遍历需要将制定颜色的点设为其他颜色
            for (var i = 0, l = data.length / 4; i < l; i++) {
                if (checkcolor(i, 0, 0, 0)) {
                    for (var j = 0, jl = checklist.length; j < jl; j++) {
                        var checkp = i + checklist[j][0] + checklist[j][1] * width
                        if (!checkcolor(checkp, 0, 0, 0)) {
                            data[checkp * 4] = rgbr
                            data[checkp * 4 + 1] = rgbg
                            data[checkp * 4 + 2] = rgbb
                        }
                    }
                }
            }
        }
        // 遍历所有像素
        // 获取路径的起始点
        function getBegin() {
            for (var i = 0, l = data.length / 4; i < l; i++) {
                if (data[i * 4] === rgbr && data[i * 4 + 1] === rgbg && data[i * 4 + 2] === rgbb) {
                    return i
                }
            }
        }
        // 绘制获取到的路径
        // 转换坐标
        function drawPath(paths) {
            for (var j = 0, lj = paths.length; j < lj; j++) {
                var path = paths[j]
                ctx.beginPath()
                for (var i = 0, l = path.length; i < l; i++) {
                    path[i] = [path[i][0] % width, Math.floor(path[i][0] / width)]
                    ctx.lineTo(path[i][0], path[i][1])
                }

                if (j !== 0) {
                    ctx.fillStyle = 'green'
                    ctx.fill()
                }
            }
        }
        // 获取路径，直到所有路径获取完毕
        function getAllPaths() {
            var path
            var paths = []
            do {
                path = getOnePath()
                if (path) {
                    paths.push(path)
                }
            } while (path)
            return paths
        }
        // 获取下一个点
        // 按照checklist的顺序查看点周围的8个点，以‘上一个点’的‘下一个点’为起点，不检查上一个点
        // 没有指定颜色的点，则返回false
        function getClose(index) {
            //这里图片上没有靠近边缘的点，所以不做边界检查了
            if (index.length === 1) {
                //第一个点没有上一个点，需要检查所有相邻点
                //(i + 4) % 8  点相对遍历到的点的位置
                for (var i = 0, l = checklist.length; i < l; i++) {
                    var checkp = index[0] + checklist[i][0] + checklist[i][1] * width
                    if (checkcolor(checkp, rgbr, rgbg, rgbb)) {
                        return [checkp, (i + 4) % 8]
                    }
                }
            } else {
                //已经获取的路径设置成其他颜色
                //从上个点的位置开始，顺时针遍历所有点，不包括上个点
                for (var i = index[1] + 1; i < index[1] + 1 + 7; i++) {
                    var checkp = index[0] + checklist[i % 8][0] + checklist[i % 8][1] * width
                    if (checkcolor(checkp, rgbr, rgbg, rgbb)) {
                        return [checkp, (i + 4) % 8]
                    }
                }
            }
            return false
        }
        // 获取一条路径
        // 遍历所有元素，遍历到的第一个指定颜色的点作为路径的起始点
        // 按顺时针方向查看该点周围的点是否是制定颜色
        // 查看到的第一个制定颜色的点作为下一个点
        // 重复检查，直到返回false则clear这条路径 重新遍历
        // 或返回的下一个点与起始点相同，则这条路径是有效的
        // 将检查过的的路径上的点的颜色设置为clear color
        // 防止重复检查
        function getOnePath() {
            var fail = true
            var begin
            var last
            var path
            do {
                try {
                    begin = getBegin()
                    if (begin === undefined) {
                        return false
                    }
                    last = [begin]
                    path = [last]
                    do {
                        last = getClose(last)
                        if (!last) {
                            throw new Error(1212)
                        }
                        path.push(last)
                    } while (last && last[0] !== begin)
                    fail = false
                } catch (e) {
                    clearPath(path)
                }
            } while (fail)
            clearPath(path)
            return path
        }
        //清楚遍历到的路径
        function clearPath(path) {
            for (var i = 0, l = path.length; i < l; i++) {
                var index = path[i][0]
                data[index * 4] = clearr
                data[index * 4 + 1] = clearg
                data[index * 4 + 2] = clearb
            }
        }


        loadImage()
    }
}
</script>

<style scoped>
html,
body,
canvas {
    padding: 0;
    margin: 0;
    display: block;
}

#mapimage {
    display: none;
}
</style>

