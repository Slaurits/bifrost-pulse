const { EmbedBuilder, RichPresenceAssets } = require("discord.js");
const { SlashCommandBuilder } = require('discord.js');

const updateEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`**Update**`)
    .setAuthor({ name: 'The Bifrost Team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp'} )
    .setURL('https://www.indiegogo.com/projects/bifrost-pulse/x/33592445#/updates/all')
    .setDescription(`**We just received the first round of payments from Indiegogo! Injection molds are officially in production with motors and PCBs following shortly!
    \nThank you all for the support during this small delay🙏**`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updates')
        .setDescription('Most recent Bifrost update'),
    async execute(interaction) {
        return interaction.reply({ embeds: [updateEmbed] });
    },
};