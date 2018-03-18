<?php 
$num = 1;
$sum = 0;
    while($num < 10){
        // global $sum;
        if(($num%3 == 0)||($num%5 == 0)){
            $sum+=$num;
            $num++;
        } else {
            $num++;
        }
    }
    echo $sum;
    