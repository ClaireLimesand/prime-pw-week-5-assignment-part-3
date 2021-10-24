console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished ) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}

console.log(addToCollection( 'Elliott Smith', 'Elliott Smith', 1995 ));
console.log(addToCollection( 'Post', 'Bjork', 1995 ));
console.log(addToCollection( 'Tigermilk', 'Belle and Sebastian', 1996 ));
console.log(addToCollection( 'Either/Or', 'Elliott Smith', 1997 ));
console.log(addToCollection( 'Ys', 'Joanna Newsom', 2006 ));
console.log(addToCollection( 'Dragging a Dead Deer Up a Hill', 'Grouper', 2008 ));

console.log('Album Collection:', collection);

console.log('***** Showing Collection *****')
function showCollection( array ) {
  console.log( 'Number of albums in collection:', array.length )
  for ( let i=0 ; i < array.length; i++){
    console.log( `${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}` );
  }
}
showCollection( collection );

console.log('***** Artist Search *****')
function findByArtist( artist ){
  let results = [];
  for ( let i=0 ; i < collection.length; i++ ) {
    if ( artist === collection[i].artist ) {
      results.push( collection[i] )
    }
  }
  return results;
}
console.log('Search Results:', findByArtist( 'Pixies' ));
console.log('Search Results:', findByArtist( 'Elliott Smith' ));

//  function search( object ){
//    let searchResults = [];
//    for ( let i=0 ; i < collection.length; i++ ) {
//      if ( object.yearPublished === collection[i].yearPublished && object.artist === collection[i].artist ){
//      object.push }
// }
// }
