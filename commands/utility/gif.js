const {SlashCommandBuilder} = require('discord.js');
const { request } = require('undici');
const { giphyKey } = require('../../config.json');


module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Replies with a random gif from giphy.'),
    async execute(interaction) {
        const gifResult = await request(`https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}`)
		const { data } = await gifResult.body.json();
		interaction.reply(`${data.images.downsized.url}`);
    },
};