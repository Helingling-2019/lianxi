<?php
   $connect =@mysqli_connect("127.0.0.1","root","") or die("没有成功连接到数据库");
   $select = mysqli_select_db($connect,"prize");
   mysqli_query($connect,"set names utf8");
   $ran = mt_rand(0,10000);
   if($ran>=0 && $ran <=9000){
	   $ran = 1;
   }else if($ran >9000 && $ran <=9600){
	  $sql = "select shengyu from prizechild where kinds = 2";
	  $result = mysqli_query($connect,$sql);
	  while($info = mysqli_fetch_array($result)){
	  		   $str = $info["shengyu"];   
	  }
	  if($str==0){
		  $ran=1;
	  }else{
		$str = $str - 1;
		$newsql = "UPDATE `prizechild` SET `shengyu` =$str  WHERE `prizechild`.`ID` = 2";
		mysqli_query($connect,$newsql);
		$ran = 2;  
	  }
	   
   }else if($ran > 9600){
	   $sql = "select shengyu from prizechild where kinds = 3";
	   $result = mysqli_query($connect,$sql);
	   while($info = mysqli_fetch_array($result)){
	   		   $str = $info["shengyu"];   
	   }
	   if($str==0){
	   		  $ran=1;
	   }else{
	   		$str = $str - 1;
	   		$newsql = "UPDATE `prizechild` SET `shengyu` =$str  WHERE `prizechild`.`ID` = 3";
	   		mysqli_query($connect,$newsql);
	   		$ran = 3;  
	   }
   }
   echo $ran;
?>