//         $(function(){
//         })
//         function openDialog(){
//             document.getElementById('light').style.display='block';
//             document.getElementById('fade').style.display='block'
//         }
//         function closeDialog(){
//             document.getElementById('light').style.display='none';
//             document.getElementById('fade').style.display='none'
//         }
// 		
		///给页面中所有img对象添加onclick事件
     //author:aganar
     ///
    function AddImgClickEvent()
    {
      var objs = document.getElementsByTagName("img");
      for(var i=0;i<objs.length;i++)
      {
        objs[i].onclick=function()
        {
          window.open(this.src);
        }
        objs[i].style.cursor = "pointer";
      }
    }
    AddImgClickEvent();