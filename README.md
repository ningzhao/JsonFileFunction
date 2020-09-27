# JsonFileFunction
In this mongo shell script sample test.sh, it contains three parts:
1. import the sample mixtape-data json file,
2. run changes.js to add a new playlist, remove a playlist, and add an existing song to an existing playlist
3. export the modified json file as output.json

Keep it simple, it does not contain any parameters, such as host, db, collection, auth, etc. It just shows how mongo shell script works.

Further thinking:
mixtape-data scheme is not scalable. And if there are many mixtape-data files, many duplicate data will be saved across in different documents. I will like to split data to three metadata tables - users, playlists, songs.

For more details
Design requirements
1. highly available, highly reliable, low/acceptable latency, Eventual consistent is fine here.
2. can CRUD user, songs, playlists metadata info (may need object storage for songs content, which depends on the requirement).

Capacity Estimation and Constraints
1. 10 billion songs, 100 million total users, playlists could be history list, favorite list, etc. 500 million total playlists. One user has five playlist on average.
2. Storage Estimation:
  each song metadata 200 bytes -> 200 bytes * 10 billion = 2 TB
  each user metadata 200 bytes -> 200 bytes * 100 million = 20 GB
  each playlists metadata 1 KB -> 1 KB * 500 million = 500 GB
  // each song content 5 MB -> 5 MB * 10 billion = 50 PB


System APIs
addPlaylist(user_id, playlist_id)
removePlaylist(user_id, playlist_id)
addItemToPlaylist(user_id, playlist_id, song_id)
removeItemToPlaylist(user_id, playlist_id, song_id)

Database Schema
users
  UserId (partitionKey):   
  Name:
  Email:
  CreationTimestamp:
  LastLoginTimestamp:
  UserLocation:
  Playlists: []

songs
  SongID (partitionKey):
  Name:
  ArtistName:
  ArtistID:
  AlbumName:

playlists
  PlaylistID :
  PlaylistName:
  UserID :
  Song_IDs:[]
  CreationTimestamp:
  LastModifiedTimestamp:

High Level System Design
  read and write heavy (e.g. daily history or favorite playlist)

Would like to learn more context and discuss more about the design. Thanks.
