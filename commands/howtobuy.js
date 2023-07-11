const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

const buyEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: 'The Bifrost Team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp'} )
	.setTitle('**How can I buy?**')
	.setDescription(`As of right now there is no way to purchase the Bifrost Pulse.\nYou will be able to purchase the Pulse after all the pre-orders have been shipped.`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howtobuy')
		.setDescription('Puchasing status'),
	async execute(interaction) {
		return interaction.reply({ embeds: [buyEmbed] });
	},
};