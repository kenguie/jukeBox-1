$(document).ready(function(){

	function Jukebox()
	{
		this.songs=[];
		this.playing;

		//addSong
		this.addSong = function(obj){this.songs.push(obj);}

		//whats playing
		this.currentlyPlaying = function()
		{ 
			$('body').append("<h4>Currently Playing:</h4>"); 
			$('body').append("<p>"+this.playing.fileName+"</p>"); 	 
		}				
						
		//switch
		this.switchRandom = function()
		{
			$('body').append("<h4>switching...</h4>");
			this.playing = this.songs[Math.floor(Math.random()*this.songs.length)];
			console.log(this.playing)
			$('body').append("<p>"+this.playing.name+" is now playing.</p>")
			this.playSong();
		}

		this.playSong = function()
		{
			document.getElementById(this.playing.id).play();
		}

		this.stopSong = function()
		{
			document.getElementById(this.playing.id).currentTime = 0;
			document.getElementById(this.playing.id).pause();
		}

		this.pauseSong = function()
		{
			document.getElementById(this.playing.id).pause(); 
		} 
 
	}								
 
	function Song(fileName,id)
	{
		this.name=fileName;
		this.id="#" + id; 
  
		$('body').append("<audio id='"+this.id+"' src='music/"+fileName+".mp3'></audio>");
 
	}

	$('#play').click(function(){
		if(myJukeBox.playing==null)
		{
			myJukeBox.playing = myJukeBox.songs[0]; 	
		} 
		myJukeBox.playSong(); 
	});

	$('#switch').click(function(){
		myJukeBox.stopSong();
		myJukeBox.switchRandom();
	});

	$('#pause').click(function(){
		myJukeBox.pauseSong(); 
	});


	var myJukeBox = new Jukebox();

	var s1 = new Song("Duran Duran - Hungry Like the Wolf","hungry");
	var s2 = new Song("Heart - These Dreams","dreams");
	var s3 = new Song("Modern English - I Melt With You","melt");
	var s4 = new Song("Survivor - Eye of the Tiger","tiger");
	var s5 = new Song("Tina Turner - The Best","best"); 

	myJukeBox.addSong(s1);
	myJukeBox.addSong(s2);
	myJukeBox.addSong(s3);
	myJukeBox.addSong(s4);
	myJukeBox.addSong(s5);
 

  
}); 	 