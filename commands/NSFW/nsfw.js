const { get } = require('axios')
const Discord = require("discord.js")

module.exports = {
    name: "nsfw",
    aliases: [],
    usage: '.nsfw <tür>',
    category: "Bot",
    description: "",
    run: async (client, message, args) => {

        if (!message.channel.nsfw) return message.channel.send('NSFW Kanalı değil.')
        let sex = args.join(' ');
        if(!sex) return message.reply(`Kullanım: .nsfw [**4K, anal, ass, pussy, pgif, boobs, hanal, hass, hentai**]`)

        get(`https://nekobot.xyz/api/image?type=${sex}`)
        .then(res => {
            message.delete();
            const embed = new Discord.MessageEmbed()
                .setImage(res.data.message);
            message.channel.send({ embeds: [embed] })
            })
        }
    }
