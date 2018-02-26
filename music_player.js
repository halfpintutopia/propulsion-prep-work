function Track(artist, title, album) {
  this.artist = artist;
  this.title = title;
  this.album = album;
}

var driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');

function Player() {
  this.tracks = [];
  this.trackIndex = 0;
}

Player.prototype.add = function(track) {
  this.tracks.push(track);
};

Player.prototype.play = function() {
  // Playing: Drive by Incubus
  console.log("Playing: " + this.tracks[this.trackIndex].title + " by " + this.tracks[this.trackIndex].artist);
}

Player.prototype.next = function() {
  if(this.trackIndex !== this.tracks.length - 1) {
    this.trackIndex += 1;
  } else {
    this.trackIndex = 0;
  }
};

Player.prototype.previous = function() {
  if(this.trackIndex !== 0) {
    this.trackIndex -= 1;
  } else {
    this.trackIndex = this.tracks.length -1;
  }
};

var player = new Player();
var stahDaTrack = new Track('Phenomden', 'Stah Da', 'Gangdalang');
var jeinTrack = new Track('Fettes Brot', 'Jein', 'Aussen Top Hits, innen Geschmack');
var iDareYouTrack = new Track('The xx', 'I Dare You', 'I See You');
var loveOfMyLifeTrack = new Track('Queen', 'Love Of My Life', 'A Night at the Opera');
var allesGuteTrack = new Track('Faber', 'Alles Gute', 'Sei ein Faber im Wind');

player.add(stahDaTrack);
player.add(jeinTrack);
player.add(iDareYouTrack);
player.add(loveOfMyLifeTrack);
player.add(allesGuteTrack);
player.play()
