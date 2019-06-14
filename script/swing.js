(function(w){
    w.swingObj = {
        addAngle:function(){
            if(ifCan){
                if(switch_control){
                    //安抚模式下不允许换档操作   档位初始为1
                    if(!isquiet){
                        level++;
                        if(level == 5 || level == 6 ){
                            level = 5;
                            api.toast( {
                                msg: '当前已经是最高档',
                                duration: 1000,
                                location: 'middle'
                            } );
                            //alert('当前已经是最高档')
                            return
                        }
                        let checkNum;
                        switch(level)
                        {
                            case 2:
                            checkNum = 'B';
                            break;
                            case 3:
                            checkNum = 'C';
                            break;
                            case 4:
                            checkNum = 'D';
                            break;
                            default:
                            checkNum = 'A';
                        }
                        write(`A0050CC7020${level}0000000000EF6${checkNum}`,function(){
                            //code
                        })
                    }else{
                        api.toast({
                                msg: '当前是安抚模式，不允许换档',
                                duration: 1000,
                                location: 'middle'
                            });
                        //alert('当前是安抚模式，不允许换档')
                    }
                }else{
                    alert('设备还未开机')
                }
            }else{
                alert('请先连接蓝牙')
                return
            }
        },
        reduceAngle:function(){
            if(ifCan){
                if(switch_control){
                    if(!isquiet){
                    if(level == 5){
                        level = 3;
                    }else{
                        level--;
                    } 
                    if(level == 1 || level == 0){
                        level = 1;
                        api.toast({
                            msg: '当前已关闭',
                            duration: 1000,
                            location: 'middle'
                        });
                        //alert('当前已关闭')
                    }
                    let checkNum;
                    switch(level)
                    {
                        case 2:
                        checkNum = 'B';
                        break;
                        case 3:
                        checkNum = 'C';
                        break;
                        case 4:
                        checkNum = 'D';
                        break;
                        default:
                        checkNum = 'A';
                        break;
                    }
                    write(`A0050CC7020${level}0000000000EF6${checkNum}`,function(){
                       //code  
                    }) 
                    }else{
                        api.toast({
                                msg: '当前是安抚模式，不允许换档',
                                duration: 1000,
                                location: 'middle'
                        });
                        //alert('当前是安抚模式，不允许换档')
                    }
                }else{
                    alert('设备还未开机')
                }
            }else{
                alert('请先连接蓝牙')
                return
            }  
        }
    }
})(window)




   