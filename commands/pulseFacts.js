const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pulsefacts')
    .setDescription('Provides a random fact about pulse'),

  async execute(interaction) {
    try {
      // Read the facts from the JSON file
      const factsPath = path.join(__dirname, '../json', 'pulsefacts.json');
      const factsData = fs.readFileSync(factsPath);
      const facts = JSON.parse(factsData);

      // Select a random fact from the array
      const randomFact = facts[Math.floor(Math.random() * facts.length)];

      // Create an embed with said random fact
      const embed = {
        color: 0x00FFFF, // Cyan color
        title: 'Random Pulse Fact',
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