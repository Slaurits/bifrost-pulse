const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

const faqEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: 'The Bifrost Team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp' })
	.setTitle(`**FAQ**`)
	.setDescription(`**What headsets can I use with Pulse?**\nYou can use the Quest 1/2/Pro, Valve Index, HTC Vive, Oculus Rift/Rift S, or any Steam VR Compatible Headset.\n**What games are supported?**\nOur goal with this launch is to get Pulse into the hands of developers and enthusiasts, so that future titles can have full integration. That being said, our in-house studio is developing the very first Pulse-compatible game, along with custom drivers that can emulate input for any unsupported titles.\n**I have small/large hands. Will it fit me?**\nPulse is designed to dynamically adapt to all shapes and sizes of hands so that shouldn't be an issue!\n**How will I move around in game?**\nOur drivers can emulate input of any device you are using. This means you can still have full control over the game using just your fingers!\n**Does it use hand tracking?**\nNo, Pulse has its own built-in sensors for hand tracking, which allows for a more precise tracking solution compared to relying on external sensors or cameras.\n**How is it tracked in the play space?**\nCurrently, Pulse requires the use of controllers or trackers for positional tracking. However, we are working on a built-in standalone tracking solution for future versions of Pulse!\n**When can I expect to receive my unit?**\nWe aim to start shipping units as soon as possible, with a target delivery date of October. However, please keep in mind that unexpected issues may arise during manufacturing or shipping, which could potentially delay the delivery date. We will keep our backers updated on any changes to the delivery timeline and ensure that everyone receives their unit as soon as possible. Thank you for your support and patience!\n\n**I missed the Indiegogo campaign. When can I order a developer kit?**\n\nRight now you can pre-order the headset via our [site](https://bifrostvr.com), but we want to focus on our backers first, so orders will remain as pre-orders until all backer units are shipped. As soon as that happens, we are going to ship and open orders permanently! For more questions and answers check the <#1111055549228925009> forum`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('faq')
		.setDescription('Replies with the FAQ'),
	async execute(interaction) {
		return interaction.reply({ embeds: [faqEmbed] });
	},
};