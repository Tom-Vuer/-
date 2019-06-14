(function(w,undefined){
    //音量加减相关的对象    
    w.voice = {
        reduceVoice:function(){
            if(ifCan){
                if(switch_control){
                    //初始为5 
                    indexVoice--;
                    if(indexVoice < 1){
                        indexVoice = 1;
                        api.toast({
                            msg: `最小音量`,
                            duration: 1000,
                            location: 'middle'
                        });
                        return;
                    }
                    let checkIndex = '';
                    switch(indexVoice)
                    {
                        case 1:
                        checkIndex = '68';
                        break;
                        case 2:
                        checkIndex = '69';
                        break;
                        case 3:
                        checkIndex = '6A';
                        break;
                        case 4:
                        checkIndex = '6B';
                        break;
                        case 5:
                        checkIndex = '6C';
                        break;
                        case 6:
                        checkIndex = '6D';
                        break;
                        case 7:
                        checkIndex = '6E';
                        break;
                    }
                    api.toast({
                        msg: `音量${indexVoice-1}`,
                        duration: 1000,
                        location: 'middle'
                    });
                    //增加音量
                    write(`A0050CC700000000000${indexVoice}00EF${checkIndex}`,function(ret){
                        //A0050CC700000100  00    00   00EF68  （0-8）
                    })
                }else{
                    alert('设备还未开机')
                }
            }else{
                alert('请先连接设备')
            }
        },
        addVoice:function(){
            if(ifCan){
                if(switch_control){
                    //初始为5 
                    indexVoice++;
                    if(indexVoice > 8){
                        indexVoice = 8;
                        api.toast({
                            msg: `最大音量`,
                            duration: 1000,
                            location: 'middle'
                        });
                        return;
                    }
                    let checkIndex = '';
                    switch(indexVoice)
                    {
                        case 2:
                        checkIndex = '69';
                        break;
                        case 3:
                        checkIndex = '6A';
                        break;
                        case 4:
                        checkIndex = '6B';
                        break;
                        case 5:
                        checkIndex = '6C';
                        break;
                        case 6:
                        checkIndex = '6D';
                        break;
                        case 7:
                        checkIndex = '6E';
                        break;
                        case 8:
                        checkIndex = '6F';
                        break;
                    }
                    api.toast({
                        msg: `音量${indexVoice-1}`,
                        duration: 1000,
                        location: 'middle'
                    });
                    //增加音量
                    write(`A0050CC700000000000${indexVoice}00EF${checkIndex}`,function(ret){
                        //A0050CC700000100  00    00   00EF68  （0-8）
                    })
            }else{
                alert('设备还未开机')
            } 
            }else{
            alert('请先连接设备')
        }
    }
    }
})(window)
