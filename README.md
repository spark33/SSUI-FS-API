# PlaylistAPI
Main API to manage all playlist data

## Schema

##### Playlist

```
{
	"title": String,
    "live": Boolean,
    "tags": [String],
    "posts": [
    	{
          "title": String,
        }
    ]
}
```

## List of Endpoints

### /playlists

##### GET

Gets list of all playlists.

| Parameter     | Type          | Description																								 	 |
| ------------- | ------------- | ------------------------------------------------------------ |
| `title`       | String				| Specifies the title by which playlists should be selected by |
| `live`        | Boolean				| Indicates whether only live playlists should be returned	 	 |
| `tags`        | [String]			| Specifies the tags by which playlists should be selected by  |

##### POST

Adds new playlist to database.

| Parameter     | Type          | Description																								 	 |
| ------------- | ------------- | ------------------------------------------------------------ |
| `title`       | String				| Specifies the title by which playlists should be selected by |