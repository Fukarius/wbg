
var canvas = document.getElementsByTagName( 'canvas' )[ 0 ];
var ctx = canvas.getContext( '2d' ); 

var W = 300, H = 600;  
var blockW = W / COLS, blockH = H / ROWS;  

var score = 0;



function render() {
	ctx.clearRect( 0, 0, W, H );  
	ctx.strokeStyle = 'black';  
	//drawScore();
	
	
	for ( var x = 0; x < COLS; ++x ) {
		
		for ( var y = 0; y < ROWS; ++y ) {
			
			if ( board[ y ][ x ] ) { 
				ctx.fillStyle = colors[ board[ y ][ x ] - 1 ]; 
				drawBlock( x, y ); 
				
			}
  		}
	} 
	
	for ( var y = 0; y < 4; ++y ) {
		
		for ( var x = 0; x < 4; ++x ) {
			
			if ( current[ y ][ x ] ) {
				
				ctx.fillStyle = colors[ current[ y ][ x ] - 1 ];  
				drawBlock( currentX + x, currentY + y );  
				
			}
    	}
  	}
}

	
setInterval( render, 30 );

function drawBlock( x, y ) {
	
	ctx.fillRect( blockW * x, blockH * y, blockW - 1 , blockH - 1 );
	ctx.strokeRect( blockW * x, blockH * y, blockW - 1 , blockH - 1 );
	
}

function drawScore() {
	
	ctx.font = "16px Arial";
	ctx.fillStyle = "#ffffff";
	ctx.fillText("Pontos: " + score, 8, 20);
	
}