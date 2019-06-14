//定时功能
(function(w,undefined){
    w.setTimeObj = {
        setTime:function(){
            if(ifCan && switch_control){
                if(level != 1){
                    api.actionSheet({
                    title: '请设置定时时间',
                    cancelTitle: '取消',
                    buttons: ['10分钟', '20分钟', '30分钟','取消定时']
                    }, function(ret, err) {
                        let arr =['10分钟', '20分钟', '30分钟','无']
                        let intArr = [1,2,3,4];
                        var index = ret.buttonIndex;
                        if(index >= 1 && index <=4){
                            let checkWord = '';
                            switch(index)
                            {
                                case 1:
                                checkWord = 68;
                                break;
                                case 2:
                                checkWord = 69;
                                break;
                                case 3:
                                checkWord = '6A';
                                break;
                                case 4:
                                checkWord = '6B';
                            }
                            document.getElementsByClassName('timing')[0].innerHTML = arr[index-1];
                            //定时器功能
                            write(`A0050CC70000000000000${intArr[index-1]}EF${checkWord}`,function(ret){
                                //document.getElementsByClassName('timing')[0].innerHTML = arr[index-1];
                            })
                        }
                    });
                }else{
                    alert('椅子无档位，无法设置定时')
                }
            }else{
                alert('椅子无档位，无法设置定时')
            }
        }
    }
})(window)