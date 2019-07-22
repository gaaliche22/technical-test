<?php 
function nbprime($nb){ 
    if ($nb == 1) 
    return 0; 
    for ($i = 2; $i <= $nb/2; $i++){ 
        if ($nb % $i == 0) 
            return 0; 
    } 
    return 1; 
} 

$flag = nbprime($nb); 
if ($flag == 1) 
    echo "Prime"; 
else
    echo "Not Prime";
?> 