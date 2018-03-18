<?php 
$secondLastFib = 0;
$holder;
$lastFib = 1;
$fibs = [];
$sum = 0;

 while($lastFib<4000000){
    $holder = $lastFib;
    $lastFib = $secondLastFib + $lastFib;
    $secondLastFib = $holder;
    $fibs [] = $lastFib;
    
 }

//  print_r($fibs);

 for ($i=0; $i < count($fibs); $i++) { 
     if($fibs[$i]%2==0){
        $sum += $fibs[$i];
     }
 }

 echo $sum;
