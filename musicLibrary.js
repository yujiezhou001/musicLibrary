class Library {
    constructor(name, creator) {
        this.name = name;
        this.creator = creator;
        this.playlist = [];
    };

    set addPlaylist(eachPlaylist) {
        this.playlist.push(eachPlaylist)
    };
    
}


class EachPlaylist{
    constructor(name){
        this.name = name;
        this.track = [];
    };
    set addTrack(eachTrack) {
        this.track.push(eachTrack);
    };

    get overallRating() {
        let overAllRating = 0;
        let numberOftracks = this.track.length;
        for (let i = 0; i < this.track.length; i++) {
            overAllRating += this.track[i].rating;
        }
        return overAllRating/numberOftracks;
    };
    
    get totalDuration() {
        let duration = 0;
        for (let i = 0; i < this.track.length; i++) {
            duration += this.track[i].length;
        }
        return duration;
    };
    
}

class EachTrack {
    constructor(title, rating, length){
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
   
}
// Create my library
myLibrary = new Library ("myLibrary", "Yujie");
console.log("My Library:", myLibrary);

// Create my playlist
myPlaylist = new EachPlaylist ("myFavoritePlaylist");
console.log("My Playlist:", myPlaylist);

// Create my tracks
track1 = new EachTrack ("I will survive", 4, 260);
track2 = new EachTrack ("Be Happy", 5, 200);
console.log("My Tracks:", track1, track2);

// Add a track to my playlist
myPlaylist.addTrack = track1;
/////////////////////////////////////////////////////////
//(if it's not a setter, then myPlaylist.addTrack(track1)

// Add another track to my playlist
myPlaylist.addTrack = track2;
console.log("My Updated Playlist:", myPlaylist);

//Calculate overall rating of my playlist
console.log("The overall rating of my playlist is:", myPlaylist.overallRating);
/////////////////////////////////////////////////////////
//(if it's not a getter, then myPlaylist.overallRating()

//Calculate the overall duration of my playlist
console.log("The overall duration of my playlist is:", myPlaylist.totalDuration);