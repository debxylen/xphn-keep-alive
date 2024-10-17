import fetch from 'node-fetch';

export default async function handler(req, res) {
  fetch(pingUrl, { mode: 'no-cors' })
    .then(response => {
        console.log('Ping sent!');
        res.status(200).send("Pinged!");
    })
    .catch(error => {
        console.error('Ping failed:', error);
        res.status(500).send('Failed.');
    });
}
