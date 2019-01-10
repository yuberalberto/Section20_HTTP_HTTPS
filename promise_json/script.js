const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.conm/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
}))
.then(results => results.map(result => console.log(result)))
.catch(err => console.log(err))