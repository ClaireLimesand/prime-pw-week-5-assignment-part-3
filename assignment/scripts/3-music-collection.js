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

console.log(addToCollection( 'Either/Or', 'Elliott Smith', '1997' ));
console.log(addToCollection( 'Elliott Smith', 'Elliott Smith', '1998' ));
console.log(addToCollection( 'Tigermilk', 'Belle and Sebastian', '1996' ));
console.log(addToCollection( 'On Avery Island', 'Neutral Milk Hotel', '1996' ));
console.log(addToCollection( 'Post', 'Bjork', '1995' ) );
console.log(addToCollection( 'Ys', 'Joanna Newsom', '2006' ));

console.log(collection);
