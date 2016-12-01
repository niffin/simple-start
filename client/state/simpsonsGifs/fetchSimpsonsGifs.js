export function fetchSimpsonsGifs () {
  const url = 'https://www.reddit.com/r/gifs/search.json?q=simpsons&restrict_sr=on&sort=relevance&t=all';

  return fetch(url)
          .then(res => res.json())
          .then(json => json.data.children.map(extractURLS));
}

function extractURLS (post) {
  return post.data.url;
}
