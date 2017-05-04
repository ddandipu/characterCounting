var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

//var printPlaylists = function () {
function printPlaylists() {
  for(var playlistId in library.playlists) {
    var moons = library.playlists[playlistId];
    console.log(moons.id + " : " + moons.name + " - " + moons.tracks.length + " tracks");
  }
}


printPlaylists();
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//var printTracks = function () {
function printTracks() {
  for(var tracksId in library.tracks) {
    var moot = library.tracks[tracksId];
    console.log(moot.id + ": " + moot.name + " by " + moot.artist + " (" + moot.album + ")")
  }
}
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

function printPlayList(playlistId) {
  console.log(playlistId.id + ": " + playlistId.name + " - " + playlistId.tracks.length + "tracks" );
  for (var i=0; i < playlistId.tracks.length; i++) {
  var tracking = playlistId.tracks[i];
  var tracked = library.tracks[tracking];
  console.log(tracked.id + ": " + tracked.name + " by " + tracked.artist + "( " + tracked.album+ ")" );
  }
}

printPlayList(library.playlists.p01);

// adds an existing track to an existing playlist

function addTrackToPlaylist(trackId, playlistId) {
playlistId.tracks.push(trackId);

}
addTrackToPlaylist(library.tracks.t03.id, library.playlists.p01)
printPlayList(library.playlists.p01);
// generates a unique id
// (use this for addTrack and addPlaylist)

function uid() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name1, artist1, album1) {
var id1 = uid();
var newObj = {
  id : id1,
  name : name1,
  artist : artist1,
  album : album1
  };
 library.tracks[id1] = newObj ;
}

addTrack("Dont speak", "No doubt", "Tragic Kingdom");
addTrack("Bohemian Rhapsody", "Queen", "Night at the opera");
printTracks();
// adds a playlist to the library

var addPlaylist = function (name2) {
  var id2 = uid();
  var newObject = {
  id : id2,
  name : name2,
  tracks : ["t01", "t02", "t03"]
  };
  library.playlists[id2] = newObject;
}
addPlaylist("Code Ninja");
addPlaylist("Gym Music")
addPlaylist("Gaming Music")
printPlaylists();

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}