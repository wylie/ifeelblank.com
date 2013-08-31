<?PHP

function writeFeelings($f, $f, $d) {

	$filename = 'feelings.html';
	$feeling = "<div class='feeling " . $f . "' data-feeling='" . $f . "' data-date='" . $d . "'></div>\n";
	$fp = fopen($filename, 'a+');
	fwrite($fp, $feeling);
	fclose($fp);
	
}

$feeling =  $_POST['feeling'];
$date = $_POST['date'];
$newDate = strtotime($date);
$newerDate = date("d/m/y g:i a", $newDate);

if($feeling) {
	writeFeelings($feeling, $feeling, $newerDate);
	//echo date_format($date, 'Y-m-d H:i:s', $feeling);
}

?>