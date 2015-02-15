<?PHP

	function writeFeelings($f, $f, $d) {
	
		$filename = '../templates/feelings.html';
		$feeling = "<div class='feeling " . $f . "' data-feeling='" . $f . "' data-date='" . $d . "'></div>\n";
		
		$file = file_get_contents($filename);
		$content = $feeling . $file;
		$fp = fopen($filename, 'w+');
		fwrite($fp, $content);
		fclose($fp);
	}
	
	$feeling =  $_POST['feeling'];

	date_default_timezone_set('America/Boston');
	$date = date('d/m/y g:i a');
	
	if($feeling) {
		writeFeelings($feeling, $feeling, $date);
	}
	
?>