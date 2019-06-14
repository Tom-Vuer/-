(function(w,undefined){
    //开关对象
    w.switchObj = {
        quiet:function(){
            if(ifCan){
                //开
                if(!switch_control){
                    write(`A0050CC702010000000000EF6A`,function(ret){
                        //A0050CC700000100  00 00 00EF68
                    })
                }else{
                    //关
                    write(`A0050CC701010000000000EF69`,function(ret){
                        //A0050CC700000100  00 00 00EF68
                    })
                }
            }else{
                alert('请先连接设备')
            }
        }
    }
})(window)









//安抚模式代码 后期需要再添加
/*if(ifCan){
    if(!isquiet){
        write('A0050CC703020000000000EF6C',function(){
            document.getElementsByClassName('quiet')[0].src = '../image/quiet.png'
            api.toast( {
                msg: '已切换到安抚模式',
                duration: 1000,
                location: 'middle'
            } );
            isquiet = !isquiet;
        })
    }else{
        write('A0050CC702010000000000EF6A',function(){
            api.toast({
                msg: '已切换到手动模式',
                duration: 1000,
                location: 'middle'
            });
            document.getElementsByClassName('quiet')[0].src = '../image/quiet1.png'
            isquiet = !isquiet;
        })
    } 
}else{
    alert('请先连接设备')
} */