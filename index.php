<?php
    
    $weather = "";
    $error = "";
    
    if ($_GET['city']) {
        
        $urlContents = file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=".urlencode($_GET['city'])."&appid=782c1f9743daf061013cd4910c6b5f61");
        
        $weatherArray = json_decode($urlContents, true);
        
        if ($weatherArray['cod'] == 200) {
        
            $weather = "The weather in ".$_GET['city']." is currently '".$weatherArray['weather'][0]['description']."'. ";

            $tempInCelcius = intval($weatherArray['main']['temp'] - 273);

            $weather .= " The temperature is ".$tempInCelcius."&deg;C and the wind speed is ".$weatherArray['wind']['speed']."m/s.";
            
        } else {
            
            $error = "Could not find city - please try again.";
            
        }
        
    }


?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  </head>
	<style>
		html,body {
			margin:0;
			padding:0;
			 height: 100%;
			 width: 100%;
		}
		body {
			font-family: 'Open Sans', sans-serif;
			background: url("BackGround.png") fixed;
			background-size: cover;

		}
		
		
	</style>  
  <body>

	<section class="h-100 col-md-12">
	  <header class="container h-100 col-md-12">
	    <div class="d-flex align-items-center justify-content-center h-100 text-white col-md-12 no-wrap">
		     <div class="d-flex flex-column col-md-10">
		     	<h1 class=" align-self-center display-4">Hello.</h1>
			<form id="form">	
				<div class="form-group   ">
					<label for="city">Enter City Name:</label>
					<input class=" form-control form-control-lg p-3 " placeholder="e.g Cairo, Paris ..." id="city" name="city" type="text" value = "<?php echo $_GET['city']; ?>">
				</div>
			    </form >
			<button form="form" type="submit" value="submit" class="btn btn-info align-self-center p-2">Get Weather!!</button>   
			  <div id="weather"><?php 
              
				      if ($weather) {
					  
					  echo '<div class=" align-self-center d-flex flex-column alert alert-success col-md-8 " role="alert">'.$weather.'</div>';
					  
				      } else if ($error) {
					  
					  echo '<div class=" align-self-center d-flex flex-column alert alert-danger col-md-3 " role="alert">'.$error.'</div>';
					  
				      }
				      
				      ?>
				      </div>
     
	      </div>
	    </div>
	  </header>
	</section>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>
