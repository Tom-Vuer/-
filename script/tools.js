//工具函数
//将两位字符转10进制
function changeTen(char){
    switch(char)
    {
        case 'a':
        return 10
        case 'b':
        return 11;
        case 'c':
        return 12;
        case 'd':
        return 13;
        case 'e':
        return 14;
        case 'f':
        return 15;
        default:
        return parseInt(char)
    }
}
//计算  每两位求和
function cal(str){
    return changeTen(str[0])*16 + changeTen(str[1])
}
//判断多少位的信号值  index代表位数
function check(str){
    let sum = 0;
    for(let i=0; i<str.length-2; i+=2){
        let nowStr = str[i] + str[i+1]
        sum+=cal(nowStr); 
    }
    sum = sum&cal('ff')
    sum = sum.toString(16)
    let checkStr = str[str.length-2] + str[str.length-1]
    if(sum == checkStr){
        return 1;
    }else{
        return 0;
    }
}
//短信号 判断
function checkShort(str){
    //获取短信号
    let short = str.slice(0,12);
    //短信号判断
    return check(short)
}
//判断长信号
function checkLong(str){
    //获取长信号
    let long = str.slice(12,38);
    return check(long)
}
//摆动函数
function swing(level){
    //控制角度相关（起始位置和结束位置）
    let deg = (level-1)*angle;
    //摆动效果
    timer = setInterval(()=>{
        if(chair.style.transform == `rotate(${-deg}deg)`){
            chair.style.transform = `rotate(${deg}deg)`
        }else{
            chair.style.transform = `rotate(${-deg}deg)`
        }
    },1200)  //设置的时间有待优化    
}

//发送数据函数（封装）
function write(val,callback){
    ble.writeValueForCharacteristic({
        peripheralUUID: myUUID,
        serviceUUID: myServiceUUID[0],
        characteristicUUID: myCharacteristicsUUID, //需要使用特定的特征uuid
        value: val,
        writeType:'withoutResponse'  //苹果手机数据写入需要添加的字段
    }, function(ret){
        if (ret) {
            callback(ret);
        }
    });
}
