<?php

$targetNumber = 13195;
$currentNumber = 1;
$lastPrime = 0;

while($currentNumber<$targetNumber/2){
    if(($targetNumber%$currentNumber == 0)&&($currentNumber%2 !=0)&&($currentNumber%3 !=0)){
        $lastPrime = $currentNumber;
    }
    $currentNumber++;
}

echo $lastPrime;
