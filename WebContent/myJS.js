function doQuery()
{
//alert('doQuery...');	
	if((document.getElementById('tf01').value!='')&&(document.getElementById('tf02').value!='')&&(document.getElementById('tf03').value!='')&&(document.getElementById('tf04').value!='')&&(document.getElementById('tf05').value!='')&&(document.getElementById('tf06').value!='')&&(document.getElementById('tf07').value!='')&&(document.getElementById('tf08').value!='')&&(document.getElementById('tf09').value!=''))
	{
		var q_str = 'reqType=doQuery';

		q_str = q_str+'&param01='+document.getElementById('tf01').value;
		q_str = q_str+'&param02='+document.getElementById('tf02').value;
		q_str = q_str+'&param03='+document.getElementById('tf03').value;
		q_str = q_str+'&param04='+document.getElementById('tf04').value;
		q_str = q_str+'&param05='+document.getElementById('tf05').value;
		q_str = q_str+'&param06='+document.getElementById('tf06').value;
		q_str = q_str+'&param07='+document.getElementById('tf07').value;
		q_str = q_str+'&param08='+document.getElementById('tf08').value;
		q_str = q_str+'&param09='+document.getElementById('tf09').value;
		doAjax('Booking',q_str,'doQuery_back','post',0);
	}else
	{
		alert('Please, fill all the search fields...');
	}
}

function doQuery_back(result)
{
alert('result:'+result);
}





