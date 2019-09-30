//酷我音乐，音乐路径抓取
//网址：http://www.kuwo.cn
var http = require('http');
var url=require('url');
var reg1=/<mp3dl>/;
var reg2=/<\/mp3dl>/;
var reg3=/<mp3path>/;
var reg4=/<\/mp3path>/;
 
 
http.createServer(function(req,res1){
    if(req.url!='/favicon.ico'){
        //音乐的id,先进入歌曲详情播放页，在地址栏中http://www.kuwo.cn/yinyue/40425292?catalog=yueku2016   在yinyue/ 后方 ？ 前方的数字, 如 40425292
        var musicId=req.url.split('=');
        musicId=musicId[1];
        var url = 'http://player.kuwo.cn/webmusic/st/getNewMuiseByRid?rid=MUSIC_'+musicId;
        http.get(url, function(res) {
            var html = '';
            // 获取页面数据
            res.on('data', function(data) {
                html += data;
            });
            // 数据获取结束
            res.on('end', function() {
                var mp3dl=html.split(reg1);
                mp3dl=mp3dl[1].split(reg2);
                var mp3path=html.split(reg3);
                mp3path=mp3path[1].split(reg4);
                var outPut='http://'+mp3dl[0]+'/resource/'+mp3path[0];
                res1.end(outPut);
            });
        }).on('error', function() {
            console.log('获取数据出错！');
        });
    }
}).listen(8001);
