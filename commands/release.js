const { EmbedBuilder, RichPresenceAssets } = require("discord.js");
const { SlashCommandBuilder } = require('discord.js');

const releaseEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`**Release date**`)
    .setAuthor({ name: 'The Bifrost Team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp'} )
    .setDescription(`We dont have an official release date, but we will begin shipping in october`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('release_date')
        .setDescription('Most recent Bifrost update'),
    async execute(interaction) {
        return interaction.reply({ embeds: [releaseEmbed] });
    },
};