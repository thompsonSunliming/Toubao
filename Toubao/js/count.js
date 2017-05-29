var count={
     //乘法运算
     'accMul':function(a,b) 
     { 
          var m=0,s1=a.toString(),s2=b.toString(); 
          try{m+=s1.split(".")[1].length}catch(e){} 
          try{m+=s2.split(".")[1].length}catch(e){} 
          return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m) 
     },
     //除法运算
     'accDiv':function(a,b){ 
          var t1=0,t2=0,r1,r2; 
          try{t1=a.toString().split(".")[1].length}catch(e){} 
          try{t2=b.toString().split(".")[1].length}catch(e){} 
          with(Math){ 
               r1=Number(a.toString().replace(".","")) 
               r2=Number(b.toString().replace(".","")) 
               return (r1/r2)*pow(10,t2-t1); 
          }
     },
     //加法运算
     'accAdd':function(a,b){ 
          var r1,r2,m; 
          try{r1=a.toString().split(".")[1].length}catch(e){r1=0} 
          try{r2=b.toString().split(".")[1].length}catch(e){r2=0} 
          m=Math.pow(10,Math.max(r1,r2)) 
          return (a*m+b*m)/m;
     },
     //减法运算
     'accSub':function(a,b){
          var r1,r2,m,n;
          try{r1=a.toString().split(".")[1].length}catch(e){r1=0}
          try{r2=b.toString().split(".")[1].length}catch(e){r2=0}
          m=Math.pow(10,Math.max(r1,r2));
          n=(r1>=r2)?r1:r2;
          return ((a*m-b*m)/m).toFixed(n);
     } 
}