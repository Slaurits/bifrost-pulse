const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const { apiKey } = require('../config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Posts a random cat picture'),

  async execute(interaction) {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?', {
        headers: {
          'x-api-key': apiKey
        }
      });
      const imageUrl = response.data[0].url;

      const embed = {
        title: 'Random Cat Picture',
        image: { url: imageUrl },
        color: 0xFF0000, // Use the integer representation of the color
      };

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'Failed to fetch a cat picture.', ephemeral: true });
    }
  },
};
