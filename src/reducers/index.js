const songsReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Teen Spirit', duration: '5:22' },
    { title: 'Hypnotize', duration: '4: 20' },
    { title: 'One', duration: '6:33' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};