<?php 

	function get_multimedia()
	{
		$directory = "./multimedia";
		$multimedia = glob($directory . "/*");
		$result = [];
		foreach($multimedia as $media)
		{
			$result[] = pathinfo($media);
		}
		header('Content-Type: application/json');
		echo json_encode($result);
	}
	get_multimedia();
	
?>