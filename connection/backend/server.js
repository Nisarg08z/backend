import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1, 
            title: 'Why was the math book sad?', 
            content:'Because it had too many problems.'
        },
        {
            id: 2,
            title: 'Why did the scarecrow win an award?',
            content: 'Because he was outstanding in his field.'
        },
        {
            id: 3, 
            title: 'Why don\'t scientists trust atoms?', 
            content: 'Because they make up everything.'
        }
    ];
    res.send(jokes);
});


const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});