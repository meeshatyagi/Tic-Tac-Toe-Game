angular.module("labApp",["ngRoute"])
.config(config)
.controller("labCtrl",labCtrl)
.controller("labCtrls",labCtrls)
.factory("Detail",Detail)
.factory("Detail1",Detail1)
function Detail()
{
  return [];
}
function Detail1()
{
  return [];
}


function config($routeProvider){
  
      $routeProvider
        .when("/",{
            templateUrl : "view/six.html"
        })
        .when("/sixth",{
            templateUrl : "view/sixth.html"
        })
        .otherwise(
            {redirectTo : "/six"}
        )
  
  }

function labCtrl($scope,$timeout,$interval,Detail)
{
  console.log("he")
   var lab=this;
   lab.pic=false;
   lab.pic1=false;
   $scope.currentPlayer='X'
    $scope.face1=Detail;
   lab.flag=false;
   lab.show=true;
   lab.digit=true;
   lab.check;
   lab.result=false;
   lab.result1=false;
   
   
   var stop;
    var a=[
    [ { "value":'' }, { "value": ''}, { "value": ''} ],
    [ {"value": '' }, {"value": '' }, {"value": '' } ],
    [ {"value": '' }, {"value": '' }, {"value": '' } ]
    ];
    lab.a=a;
    lab.add=function(b1)
    {
      $scope.currentPlayer = $scope.currentPlayer === 'X' ? 'O' : 'X';

      b1.value=$scope.currentPlayer;
      //console.log(a[2][0])
    
   stop= $interval(function()
    {
      if(a[0][0].value && a[0][0].value == a[0][1].value && a[0][2].value==a[0][1].value )
      {
              //clickToOpen();
              if(a[0][0].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
               lab.show=true;
              lab.flag=true;
              $interval.cancel(stop);
            // console.log("match")

      }
      else if(a[1][0].value && a[1][0].value == a[1][1].value && a[1][2].value==a[1][1].value )
      {
             // clickToOpen();
             if(a[1][0].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
              lab.show=true;
              lab.flag=true;
              $interval.cancel(stop);
             //console.log("match")


      }
      else if(a[2][0].value && a[2][0].value == a[2][1].value && a[2][2].value==a[2][1].value )
      {
             // clickToOpen();
             if(a[2][0].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
              lab.show=true;
              lab.flag=true;
              $interval.cancel(stop);
             //console.log("match")


      }
      else if(a[0][0].value && a[0][0].value == a[1][0].value && a[2][0].value==a[1][0].value )
      {
              // clickToOpen();
              if(a[0][0].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
               lab.show=true;
               lab.flag=true;
              $interval.cancel(stop);
             // console.log("match")


      }
      else if(a[0][1].value && a[0][1].value == a[1][1].value && a[2][1].value==a[1][1].value )
      {
               // clickToOpen();
               if(a[0][1].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
                lab.show=true;
                lab.flag=true;
              $interval.cancel(stop);
             //console.log("match")

      }
      else if(a[0][2].value && a[0][2].value == a[1][2].value && a[2][2].value==a[1][2].value )
      {
              // clickToOpen();
              if(a[0][2].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
               lab.show=true;
               lab.flag=true;
              $interval.cancel(stop);
             //console.log("match")
      }
      else if(a[2][0].value && a[2][0].value == a[1][1].value && a[0][2].value==a[1][1].value )
      {
             // clickToOpen();
             if(a[2][0].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
              lab.show=true;
               lab.flag=true;
              $interval.cancel(stop);
              //console.log("match")

      }
      else if(a[0][0].value && a[0][0].value == a[1][1].value && a[2][2].value==a[1][1].value )
      {
               //clickToOpen();
               if(a[0][0].value=='O')
              {
                lab.check=lab.enter;
                lab.result=true;
              }
              else
              {
                lab.check=lab.enter1;
                lab.result=true;
              }
               lab.show=true;
               lab.flag=true;
              $interval.cancel(stop);
             //console.log("match")
      }
      else if(a[0][0].value!='' && a[0][1].value!='' && a[0][2].value!='' && a[1][0].value!='' && a[1][1].value!='' && a[1][2].value!=''
       && a[2][0].value!='' && a[2][1].value!='' && a[2][2].value!='')
      {
        lab.show=true;
         lab.flag=true;
        lab.result1=true;
        lab.check="This is a Tie."
        $interval.cancel(stop);
      
      }
      
    },1000)
}
    var count=0;
   lab.value=function(a)
   {

     lab.pic=true;
     lab.pic1=true;
    var call=this;
    if(count<2)
    {
    count++;
    $scope.face1.push({"name":a});
    }
    else 
      {
        alert("Click on start or click on restart to reset");
      }
   }
   lab.show1=function()
   {

     if(lab.enter!=null && count==2 && lab.enter1!=null)
   {
     lab.digit=false;
     lab.show=false;
   }
   else if(lab.enter==null || lab.enter1==null)
   {
     alert("Enter Name!!!");
   }
   else if(face1==[])
    {
      alert("Select Character!!!");
    }
    
   } 
 lab.restart=function()
  {
    $scope.currentPlayer='X'
    lab.flag=false;
    count=0;
    lab.enter=null;
    lab.enter1=null;
   // $scope.face1=[];
    lab.digit=true;
    lab.result=false;
    lab.result1=false;
    lab.show=true;
     a[0][0].value='';
    a[0][1].value='';
     a[0][2].value=''; 
      a[1][0].value=''; 
       a[1][1].value='';
        a[1][2].value='';
        a[2][0].value='';
         a[2][1].value=''; 
          a[2][2].value='';
          lab.pic=false;
          lab.pic1=false;
         
    console.log(lab.flag);
  }  
  lab.replay=function()
  {
    $scope.currentPlayer='X'
    lab.flag=false;
    lab.result=false;
    lab.result1=false;
    lab.show=false;
    

    a[0][0].value='';
    a[0][1].value='';
     a[0][2].value=''; 
      a[1][0].value=''; 
       a[1][1].value='';
        a[1][2].value='';
        a[2][0].value='';
         a[2][1].value=''; 
          a[2][2].value='';
          
  }
        console.log(lab.flag)
}
     
    


function labCtrls($scope,$timeout,$interval,Detail)
{
  console.log("in second controller")
   var lab=this;
   lab.pic=false;
     lab.pic1=false;
    lab.instructions=true;
    $scope.face=Detail;
   lab.flag=false;
   lab.show=true;
   lab.digit=false;
   lab.check;
   lab.result=false;
   lab.result1=false;
   lab.count1=0;
   lab.count2=0;
   lab.define=false;
   lab.done=true;
  lab.assign1
  var count3=0;
  var count=0;
  lab.time1=false
  lab.time2=false;
  lab.visible=true;
  
   //console.log(lab.flag)
   
   var stop;
    var a=[
    [ { "value":'c.png',"id":false,}, { "value": 'b.png',"id":false}, { "value": 'c.png',"id":false},{ "value": 'b.png',"id":false}],
    [ {"value": 'b.png',"id":false}, {"value": 'c.png',"id":false}, {"value": 'b.png',"id":false},{ "value": 'b.png',"id":false} ],
    [ {"value": 'a.png',"id":false}, {"value": 'b.png',"id":false}, {"value": 'c.png',"id":false},{ "value": 'b.png',"id":false}],
    [ {"value": 'c.png',"id":false}, {"value": 'b.png',"id":false}, {"value": 'a.png',"id":false},{ "value": 'a.png',"id":false}]
    ];
    lab.a=a;
    function shuffle() 
    {  
     for (var i = a.length - 1; i > 0; i--) 
      {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
       // console.log(a[0][0].value)
    }

  }
  shuffle();
  shuffle();
 lab.set=function(x)
      {
        console.log("fvv")
        console.log($scope.face)
        if(count3<=2)
          {
        if(lab.done==true)
          {
        lab.assign1=x;
        lab.done=false;
          }
      else
        {
          lab.assign2=x;
        }
          }
      count3++;
      }
    lab.add=function(b1)
    {
  
      b1.id=true;
      lab.define=!lab.define;
      
      if(lab.assign1== 'a.png' && b1.value=='a.png' && lab.define==true)
        {
          lab.count1+=1;
        }
        if(lab.assign1== 'a.png' && b1.value=='c.png' && lab.define==true)
        {
          lab.count1-=1;
        }
        if(lab.assign1== 'a.png' && b1.value=='b.png' && lab.define==true)
        {
          
        }
         if(lab.assign1== 'b.png' && b1.value=='b.png' && lab.define==true)
        {
          lab.count1+=1;
        }
        if(lab.assign1== 'b.png' && b1.value=='a.png' && lab.define==true)
        {
          
        }
        if(lab.assign1== 'b.png' && b1.value=='c.png' && lab.define==true)
        {
          lab.count1-=1;
        }
        if(lab.assign2== 'b.png' && b1.value=='b.png' && lab.define==false)
        {
          lab.count2+=1;
        }
        if(lab.assign2== 'b.png' && b1.value=='c.png' && lab.define==false)
        {
          lab.count2-=1;
        }
        if(lab.assign2== 'b.png' && b1.value=='a.png' && lab.define==false)
        {
          
        }
        if(lab.assign2== 'a.png' && b1.value=='a.png' && lab.define==true)
        {
          lab.count2+=1;
        }
        if(lab.assign2== 'a.png' && b1.value=='c.png' && lab.define==true)
        {
          lab.count2-=1;
        }
        if(lab.assign2== 'a.png' && b1.value=='b.png' && lab.define==true)
        {
          
        }

console.log(lab.count1,lab.count2)


stop= $interval(function()
{
  console.log(Detail[0])
  console.log("hello")
  if(a[0][0].id ==true && a[0][1].id ==true && a[0][2].id ==true && a[0][3].id ==true && a[1][0].id ==true && a[1][1].id ==true && a[1][2].id ==true && a[1][3].id ==true
    && a[2][0].id ==true && a[2][1].id ==true && a[2][2].id ==true && a[2][3].id ==true && a[3][0].id ==true && a[3][1].id ==true && a[3][2].id ==true && a[3][3].id ==true )
    {
      lab.show=true;
      lab.flag=true;
      if(lab.count1>lab.count2)
        {
          lab.result=true;
          lab.check=lab.enter;
          $interval.cancel(stop);
        }
        else if(lab.count1<lab.count2)
          {
            lab.result=true;
            lab.check=lab.enter1;
            $interval.cancel(stop);
          }
          else
          {
            lab.result1=true;
            lab.result1="This is a Tie."
            $interval.cancel(stop);
          }
    }

},1000)
    }
    
  /* lab.value=function(a)
   {
     lab.pic=true;
     lab.pic1=true;
    var call=this;
    if(count<2)
    {
    count++;
    lab.face1.push({"name":a});
    }
    //call.face2=b;
    console.log(lab.face1[0].name)
   }
*/
   lab.show1=function()
   {
     console.log("so true")
     
     lab.visible=true;
     lab.digit=false;
     //lab.show=false;
   
   } 
  
  lab.show2=function()
  {
    
    if(lab.assign1!=null && lab.assign2!=null)
      {
        lab.visible=false;
        lab.show=false;
        console.log($scope.face)
        console.log(Detail)
      }
      else{
        alert("Enter Name!!!")
      }
  }
 lab.restart=function()
  {
    lab.flag=false;
    count=0;
    lab.enter=null;
    lab.enter1=null;
    //$scope.face=[];
    //lab.digit=true;
    lab.result=false;
    lab.result1=false;
    lab.visible=true;
    lab.enter=null;
    lab.enter1=null;
   //lab.show=true;
    a[0][0].id=false;
    a[0][1].id=false;
     a[0][2].id=false; 
     a[0][3].id=false; 
      a[1][0].id =false; 
       a[1][1].id=false;
        a[1][2].id =false;
        a[1][3].id =false; 
        a[2][0].id =false;
         a[2][1].id =false; 
          a[2][2].id =false;
          a[2][3].id =false;
          a[3][0].id =false;
          a[3][1].id =false; 
           a[3][2].id =false;
           a[3][3].id =false;
           shuffle();
           shuffle();
           lab.count1=0;
           lab.count2=0;
          lab.pic=false;
          lab.pic1=false;
         
    console.log(lab.flag);
  }  

  lab.replay=function()
  {
   // $scope.currentPlayer='a.png'
    lab.flag=false;
    lab.result=false;
    lab.result1=false;
    lab.show=false;
    shuffle();
    shuffle();
    a[0][0].id=false;
    a[0][1].id=false;
     a[0][2].id=false; 
     a[0][3].id=false; 
      a[1][0].id =false; 
       a[1][1].id=false;
        a[1][2].id =false;
        a[1][3].id =false; 
        a[2][0].id =false;
         a[2][1].id =false; 
          a[2][2].id =false;
          a[2][3].id =false;
          a[3][0].id =false;
          a[3][1].id =false; 
           a[3][2].id =false;
           a[3][3].id =false;
             lab.count1=0;
            lab.count2=0;
         
  }
        
}
     
    
