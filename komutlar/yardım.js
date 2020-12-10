const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**▬▬▬▬▬▬[** ©️<a:elmas:784129709867794472> **» Fearless Bot** ©️ <a:elmas:784129709867794472>]▬▬▬▬▬▬**    **Prefixim: `-`"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** <a:Birleme:784129887015272508>  **Komut Listesi**   <a:Birleme:784129887015272508> **]▬▬▬▬▬▬**

> **<a:yldz:786268751255044116>» -moderasyon :** Moderasyon komudları görüntüler.
> **<a:yldz:786268751255044116>»-kullanıcı :** Userler için açık komudlar...
> **<a:yldz:786268751255044116>»-eğlence :** Sizi biraz eğlendirir.
> **<a:yldz:786268751255044116>» -eğlence2 :** size güzel komudlarımı göstereyim sizi eğlendirecek...
> **<a:yldz:786268751255044116>» -logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> **<a:yldz:786268751255044116>» -logo2 :**logo2 kamutlarıyla sizlerle... 

**▬▬▬▬▬▬▬[** <a:moderasyon:784129535079350303> **Bilgilendirme**  <a:moderasyon:784129535079350303>**]▬▬▬▬▬▬**

> <a:tick:784129780333150218>**Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> <a:unlem:784129534726897695>**Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/3WC4mqjnrX)**
> <a:hyper:784129602724823081>**Komut hakkında detaylı bilgi için: -yardım**
> <a:Legend:784129855050219521>**Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/3WC4mqjnrX)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=783027359577669672&scope=bot&permissions=805314606)** **•** 
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
