
export default async function handler(req, res) {
    const url = 'https://xphn-bot.glitch.me/'; 
    try {
        const response = await fetch(url);
        const data = await response.text();
        res.status(200).send(data); 
    } catch (error) {
        res.status(500).send('Error pinging the URL');
    }
}
