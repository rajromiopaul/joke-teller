const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/enable button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing voice to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: 'cd85ea113d0c4f6b85e04ffc5b34305d',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    })
}

// Get joke from hoke API
async function getJoke() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = joke.setup;
        }
        // Text-to-speech
        tellMe(joke);
        // Disable button
        toggleButton();
    } catch {
        // Catch errors here
        console.log('Whoops', error);
    }
}

// Event listeners
button.addEventListener('click', getJoke);
audioElement.addEventListener('ended', toggleButton);