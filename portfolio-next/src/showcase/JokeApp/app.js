const jokes =document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
const jokeText = await getDadjokes()
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
} 

const getDadjokes = async () => {
    try {
           const config = { headers: { Accept: 'application/json' }}
            const res = await axios.get('https://icanhazdadjoke.com/', config);
            return res.data.joke; 
    } catch (error) {
        return "No jokes available! Sorry :("
    }

}

button.addEventListener('click', addNewJoke)