import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(express.json());  
app.use(cors());         

app.get('/api/getImages/:id', (req, res) => {
    const folderPath = `./public/MEDIA/FOLDER ${req.params.id}`;
    try {
        const files = fs.readdirSync(folderPath); 
        const images = files.filter(file => file.endsWith('.jpg')); 
        res.json({ imageNames: images });
    } catch (err) {
        console.error('Error reading the directory:', err);
        res.status(500).json({ error: 'Failed to read the directory' });  
    }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
