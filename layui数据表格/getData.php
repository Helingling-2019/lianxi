<?php
   $connect = @mysqli_connect("localhost","root","") or die("连接数据库失败"); // $:定义变量 mysqli_connect()php连接数据库方法 or:或者 @:去除连接数据库失败的一些表格提示
   $choose_db = mysqli_select_db($connect,"data") or die("没有成功选择到数据库"); //mysqli_select_db()选择数据库的方法
   mysqli_query($connect,"set names utf8"); // 设置编码格式
   $page = $_GET["page"]; // $_GET[]接收get传递的数据
   $limit = $_GET["limit"];
   $cal = ($page-1)*$limit; //数学运算
   $sql = "select * from datatable limit $cal,$limit"; // 将字符串存储到$sql变量当中 $limit限定条数:截取数据的开始处 截取多少条数据
   $result = mysqli_query($connect,$sql); // mysqli_query():执行sql语句
   $arr = array(); // 声明一个数据 new Array()
   while($info = mysqli_fetch_array($result)){ //循环语句  mysqli_fetch_array():匹配当前循环项
	   // echo $info['username'];
	   array_push($arr,$info); // array_push(哪一个，成员) $arr.push($info)
   };
   $newsql = "select ID from datatable"; 
   $newresult = mysqli_query($connect,$newsql); 
   $count = mysqli_num_rows($newresult); //mysqli_num_rows()获取条数
   $newArr = array("code"=>0,"count"=>$count,"data"=>$arr); // $newArr = new Array("code":0,"count":$count,"data":$arr);
   $dat = json_encode($newArr); //json_encode() php转json数据的一个内置方法
   echo $dat; // echo输出这个变量
?>