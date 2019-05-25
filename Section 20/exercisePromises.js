

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 4000, 'success');
});

// #2) Run the above promise and make it console.log "success"
promise1.then(result => console.log(result))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(
  setTimeout(console.log, 4000, 'success')
);


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() => console.log('Ooops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise
  .all(urls.map(url => {
    return fetch(url).then(resp => resp.json());
  }))
  .then(resp => {
    console.log('1', resp[0])
    console.log('2', resp[1])
    console.log('3', resp[2])
    console.log('4', resp[3])
  })
  .catch(() => console.log('Error'));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?