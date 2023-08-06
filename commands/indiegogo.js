const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

const indieEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: 'The Bifrost Team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp' })
	.setTitle(`**Indiegogo**`)
	.setDescription('[https://www.indiegogo.com/projects/bifrost-pulse](Click Here to go to the indiegogo page)')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('indiegogo')
		.setDescription('Link to indiegogo'),
	async execute(interaction) {
		return interaction.reply({ embeds: [indieEmbed] });
	},
};