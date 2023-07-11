const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const { apiKey } = require('../config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dog')
    .setDescription('Posts a random dog picture'),

  async execute(interaction) {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search?', {
        headers: {
          'x-api-key': apiKey
        }
      });
      const imageUrl = response.data[0].url;

      const embed = {
        title: 'Random Dog Picture',
        image: { url: imageUrl },
        color: 0x0000FF,
      };

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'Failed to fetch a dog picture.', ephemeral: true });
    }
  },
};
