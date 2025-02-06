const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/save', async (req, res) => {
    const { name, email, age } = req.body;

    // Prepare the content for the file
    const content = `Name: ${name}\nEmail: ${email}\nAge: ${age}\n`;

    // GitHub API URL to create a file
    const url = 'https://github.com/MRLIGHT02/Velentine-Day-Animation/blob/main/data.txt';

    // GitHub API request
    try {
        const response = await axios.put(url, {
            message: 'Add user data',
            content: Buffer.from(content).toString('base64'), // Encode content to base64
            branch: 'main' // Specify the branch
        }, {
            headers: {
                'Authorization': `token YOUR_GITHUB_TOKEN`, // Use a personal access token
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving data to GitHub');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
