/**
 * Created by i on 2016/03/06.
 */

var Data = require('./dataType').Data;
var data = [];

generateRandomData(true);

/**
 * 生成固定数据
 * @param enable 是否启用该方法
 */
function generateRandomData(enable) {
    if(!enable) return;
    for( var i = 0; i < 10 ; i ++) {
        var object = {title: "hello world", content: "nice to meet U", time: "2016-04-22", author: "none"};
        data[i] = object;
    }
}


function getData(index,size,callback) {

    // 数据起始点 超出可用数据范围
    // 报错
    if(index >= data.length) {
        callback("size is to much", []);

    // 数据起始点在可用范围内, 但所需数据量超出可用数据范围
    // 返回部分数据
    }else if( index + size > data.length) {
        var result = [];
        for( var i = index, j = 0, l = data.length; i < l; i++,j++) {
            result[j] = data[i];
            if( i ==  l -1)
                callback(null, result);
        }

    // 数据可用
    // 正常返回数据
    }else{
        var result = [];
        if(size<=0) {
            callback(null, result);return;}
        for( var i = index, j = 0; j < size; i++,j++) {
            result[j] = data[i];
            if( j == size - 1) {
                callback(null, result);
                return ;
            }
        }
    }
}

function updateData(newdata,callback) {
    var title = newdata.title;
    for( var i = 0; i < data.length; i++) {
        if(title == data[i].title) {
            console.log("update data from ((" + JSON.stringify(data[i]) + ")) to ((" + JSON.stringify(newdata) + "))");
            data[i] = newdata;
            callback(null, true);
            return;
        }
        if( i == data.length -1) {
            callback(null, false);
        }
    }
}


exports.data = data;
exports.getData = getData;
exports.updateData = updateData;
exports.Data = Data;