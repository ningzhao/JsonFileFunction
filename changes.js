// sample change files
// add a new playlist
db.collection.update(
  {},
  {
    $addToSet:
    {
      "playlists":
      {
        id : "4",
        user_id: "7",
        song_ids:
        [
          "8"
        ]
      }
    }
  }
);

// remove a playlist.
db.collection.update(
  {},
  {
    $pull:
    {
        "playlists" : { "id" : "3"}
    }
  }
);

// add an existing song to an existing playlist.
db.collection.update(
  {
    "playlists.id": "1"
  },
  {
    "$addToSet":
    {
      "playlists.$.song_ids" : "6"
    }
  }
)
