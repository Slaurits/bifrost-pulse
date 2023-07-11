const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js')

const supportedGames = new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: 'The Bifrost team', iconURL: 'https://cdn.discordapp.com/attachments/1114695280470786198/1126487530104160286/xellkat9evd0nnvnd5er.webp'})
    .setTitle(`**Supported Headsets and Games**`)
    .addFields(
        { name: '**Headsets**', value: 'You can use the Quest 1/2/Pro, Valve Index, HTC Vive, Oculus Rift/Rift S, or any Steam VR Compatible Headset with Pulse'},
        { name: '**Games**', value: 'Our goal with this launch is to get Pulse into the hands of developers and enthusiasts, so that future titles can have full integration.\nThat being said, our in-house studio is developing the very first Pulse-compatible game, along with custom drivers that can emulate input and allow you to play on any unsupported titles.'}
    )

    module.exports = {
        data: new SlashCommandBuilder()
            .setName('supported_devices')
            .setDescription('Shows the supported devices and games for the pulse'),
        async execute(interaction) {
            return interaction.reply({ embeds: [supportedGames] });
        },
    };