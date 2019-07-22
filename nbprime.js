function nbprime(nb)
{
	if (nb == 1)
		return 0;
	for (var i = 2;  i < nb/2; i++) {

      if (nb % i == 0 ) {
              return 0;
	  }
	  return 1;
	}
	var flag = nbprime(nb);
	if (flag ==1)
		alert("prime");
	else
		
		alert("Not prime");
}
	