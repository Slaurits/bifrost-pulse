const { EmbedBuilder, RichPresenceAssets } = require("discord.js");
const { SlashCommandBuilder } = require('discord.js');

const priceEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`**What's the price?**`)
    .setAuthor({ name: 'The Bifrost Team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp'} )
    .setDescription(`The price to pre-order it is $274.99 when the backers have had their orders shipped, then we will begin to ship yours`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('price')
        .setDescription('Price for Pulse'),
    async execute(interaction) {
        return interaction.reply({ embeds: [priceEmbed] });
    },
};