const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

const buyEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: 'The Bifrost Team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp'} )
	.setTitle('**How can I buy?**')
	.setDescription(`As of right now you can only pre-order it via our site at [bifrostvr.com](https://bifrostvr.com), there is no other way to purchase the Bifrost Pulse. After all the backers have had their orders shipped, we will begin to ship to everybody else.`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('howtobuy')
		.setDescription('Puchasing status'),
	async execute(interaction) {
		return interaction.reply({ embeds: [buyEmbed] });
	},
};