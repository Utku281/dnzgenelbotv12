const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedPinCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**▬▬▬▬▬▬[** ©️ **» <a:elmas:784129709867794472>Fearless Bot<a:elmas:784129709867794472>** ©️ **]▬▬▬▬▬▬**")
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/3WC4mqjnrX)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=783027359577669672&scope=bot&permissions=805314606)** **•** **[:beginner:]( )**
Bir komut hakkında detaylı __yardım için__: **-yardım**

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları **-istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **-bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
<a:tick:784129780333150218>> [-moderasyon](https://discord.gg/3WC4mqjnrX) → Moderasyon komudları görüntüler.
<a:tick:784129780333150218>> [-kullanıcı](https://discord.gg/3WC4mqjnrX) → Kullanıcı komutları.
<a:tick:784129780333150218>> [-eğlence](https://discord.gg/3WC4mqjnrX) → eğlence komutları.
<a:tick:784129780333150218>> [-eğlence2](https://discord.gg/3WC4mqjnrX) → eğlence komutları.
<a:tick:784129780333150218>> [-logo](https://discord.gg/3WC4mqjnrX) → Logo komutları.
<a:tick:784129780333150218>> [-logo2](https://discord.gg/3WC4mqjnrX) → logo komutları.

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2020 Fearless | Tüm hakları saklıdır.
:flag_az: @!   ƑɪᏒΞ ✯乡๖ۣۜ𝐋𝐨𝐫𝐞'𝐗☬ᴬˡᵖʰᵃ#4634 :flag_tr: 
`);

  return message.channel.send(EmbedPinCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardımv2",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
