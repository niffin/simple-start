export async function fetchSimpsonsGifs () {
  const url = 'https://www.reddit.com/r/gifs/search.json?q=simpsons&restrict_sr=on&sort=relevance&t=all';

  const result = await fetch(url),
        json   = await result.json();

  return json.data.children.map(extractURLS);
}

function extractURLS (post) {
  return post.data.url;
}
