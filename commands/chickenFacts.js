const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chickenfacts')
    .setDescription('Provides a random chicken fact'),

  async execute(interaction) {
    try {
      // Read the chicken facts from the JSON file
      const factsPath = path.join(__dirname, '..', 'chickenfacts.json');
      const factsData = fs.readFileSync(factsPath);
      const facts = JSON.parse(factsData);

      // Select a random fact from the array
      const randomFact = facts[Math.floor(Math.random() * facts.length)];

      // Create an embed with the random fact
      const embed = {
        color: 0xFFD700, // Gold color
        title: '🐔 Random Chicken Fact 🐔',
        description: `**${randomFact}**`,
      };

      // Reply to the user with the embed
      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'An error occurred.', ephemeral: true });
    }
  },
};