const express = require("express")
const app = express();

app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
const Discord = require('discord.js');
const client = new Discord.Client();
let fs = require('fs');

const prefix = "";


client.on('ready', () => {
  console.log(`${client.user.tag} is ready`);
  console.log(`zied: ${client.guilds.cache.size}`);
  client.user.setActivity(`7D Esports`, { type: 'PLAYING' });/////zhelp هيا دية بس الي تقدر تغيرها
});

client.login(process.env.token)
///////////لا تغير اي شيء فوق هنا اخر بروجيكت الي فوق

client.on('message', bader => {
  if (bader.content === "-" || bader.content === "لاين" || bader.content === "line") {
    if (!bader.member.roles.cache.has('1255174529853030440')) return;
    bader.delete()
    8 / bader.channel.send('https://media.discordapp.net/attachments/1161456940921143446/1249874044149436416/Picsart_24-06-11_01-48-38-054.png?ex=667c0129&is=667aafa9&hm=1af322e8e4785529397205c7bf56315dcf96fb1e743b4ba2c1e95bb60145b93c&=&format=webp&quality=lossless&width=989&height=129');
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "profile")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    let uus = message.mentions.users.first() || message.author;

    message.guild.fetchInvites().then(invites => {

      let personalInvites = invites.filter(
        i => i.inviter.id === message.mentions.users.first() || message.author.id
      );

      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);

      var heg;
      if (men) {
        heg = men
      } else {
        heg = message.author
      }
      var mentionned = message.mentions.members.first();
      var h;
      if (mentionned) {
        h = mentionned
      } else {
        h = message.member
      }


      var id = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(`https://api.probot.io/profile/${uus.id}`)
        .setFooter(`${prefix}help`, client.user.avatarURL())
      message.channel.send(id)
    }
    );
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "help")) {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
      return message.channel.send('**لا يوجد عندك خاصية**');
    var embed = new Discord.MessageEmbed()
      .setTitle("**الاوامر بوت**")
      .setAuthor(message.guild, message.guild.iconURL())
      .setThumbnail(message.guild.iconURL())
      .setDescription(`**
 
 ${prefix}profile بروفيل زي بربوت
 ${prefix}server معلومات عن السيرفر
 ${prefix}lock يقفل الروم
 ${prefix}unlock يفتح الروم
 ${prefix}ban يعطي بان
 ${prefix}unban يشيل البان
 ${prefix}ping يعرفك بدج البوت
 ${prefix}hide يخفي الروم
 ${prefix}show يظهر لك الروم
 ${prefix}clear يمسح الشات
 ${prefix}mute اعطاء ميوت 
 ${prefix}unmute يشيل الميوت
${prefix}come 
${prefix}say يكرر كلامك
 **`)
      .setColor("black")
      .setFooter(`prefix bot (z)`)
    message.author.send(embed)

    message.channel.send(`**<@${message.author.id}> تم الارسال على الخاص:white_check_mark:
**`)
    message.react("هنا تضع اي ايموجي ال تبية")
  }
});

client.on("message", russi => {
  if (russi.content === prefix + "server") {


    let embed = new Discord.MessageEmbed()
      .setTitle(`${russi.guild.name}`)///Russi
      .setThumbnail(client.user.avatarURL())
      .setColor('#3a6bff')///Russi
      .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
      .addField('> <:ID:791203015708770304> ID Server :', `${russi.guild.id}`)
      .addField('> :crown: Owner Server :', `${russi.guild.owner}`)
      .addField('> :calendar: Created : ', `${russi.guild.createdAt.toLocaleString()}`)
      .addField('> :busts_in_silhouette: Members : ', `${russi.guild.memberCount}`)
      .addField('> :speech_balloon: Channels : ', `${russi.guild.channels.cache.size}`)
      .addField('> :earth_americas: Region : ', `${russi.guild.region}`)
      .setTimestamp()///Russi
    russi.channel.send(embed);
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'lock')) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
    let channel = message.mentions.channels.first();
    let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
    if (!channel) channel_find = message.channel
    if (!channel_find) return;
    channel_find.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`\`\`\`js\n🔒 | Done Locked ${channel_find.name}\n\`\`\``)
    );
  }
});
client.on('message', async message => {
  if (message.content.startsWith(prefix + 'unlock')) {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MANAGE_CHANNELS\`**`);
    let channel = message.mentions.channels.first();
    let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
    if (!channel) channel_find = message.channel;
    if (!channel_find) return;
    channel_find.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`\`\`\`js\n🔓 | Done Unlocked ${channel_find.name}\n\`\`\``)
    );
  }
});

client.on("message", (message) => {
  if (message.content.toLowerCase().startsWith(prefix + "ban")) {
    var args = message.content.split(' ')
    var member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1]);
    var trueUser = message.guild.member(member);
    var reason = message.content.split(' ').slice(3).join(' ') || 'undefined';
    var time = args[2] || '1y'
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **I Can't Bannd Any Member In This Server Becuse I Don't Have `BAN_MEMBERS` Permission!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **You Need `BAN_MEMBERS` Permission To Use This Command!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
    if (!trueUser) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Mention/ID Same One!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
    if (!reason) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("❌" + " **Please Type Reason!**\n Ex: " + `${prefix}ban @user 4d spam`).setFooter(`Request By ${message.author.tag}`).setTimestamp());
    trueUser.ban({ reason: reason }).then(() => {
      message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription("✅" + ` **<@!${trueUser.user.id}> banned from the server ! :airplane: by:<@${message.author.id}> **`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
      setTimeout(() => {
        message.guild.fetchBans().then(bans => {
          if (bans.size == 0) return;
          bans.forEach(ban => {
            if (ban.user.id == trueUser.user.id) {
              message.guild.members.unban(ban.user.id);
            } else console.log(ban.user.id + " => " + trueUser.user.id)
          });
        });
      }, ms(time))
    })
  }
})

client.on("message", message => {
  if (message.content === (prefix + "ping")) {
    message.channel.send(`**${client.ws.ping} ms**`)
  }
})

client.on('message', message => {
  let user =
    message.mentions.users.first() ||
    client.users.cache.get(message.content.split(' ')[1]);
  if (message.content.startsWith(prefix + 'unban')) {
    if (!message.member.hasPermission('ADMINISTRATOR'))
      return message.channel.send('❌|**`ADMINISTRATOR`لا توجد لديك رتبة`**');
    if (!user)
      return message.channel.send(
        `>>> Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`
      );
    message.guild.unban(user);
    message.guild.owner.send(
      `>>> لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`
    );
    var embed = new Discord.MessaeEmbed()
      .setThumbnail(message.author.avatarURL())
      .setColor('RANDOM')
      .setTitle('**>>> Unban** !')
      .addField('**>>> User Unban :** ', `${user}`, true)
      .addField('**>>> By :**', ` <@${message.author.id}> `, true)
      .setAuthor(message.guild.name);
    message.channel.send(embed);
  }
});

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "clear" || command == "مسح") {
    message.delete({ timeout: 0 })
    if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
    if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`\`\`\`js
i cant delete more than 100 messages 
\`\`\``)
    ).then(messages => messages.delete({ timeout: 5000 }))
    if (!messagecount) messagecount = '100';
    message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
      message.channel.send(
        new Discord.MessageEmbed()
          .setDescription(`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
      ).then(messages =>
        messages.delete({ timeout: 5000 }));
    })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'mute')) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MUTE_MEMBERS\`**`);
    let mention = message.mentions.members.first();
    let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
    if (!role) {
      message.guild.roles.create({
        data: {
          name: 'Muted',
          permissions: [],
          color: 'random'
        }
      })
    }
    if (!mention) return message.channel.send(`**Usage: ${prefix}mute \`<@user>\`**`);
    message.guild.channels.cache.forEach(c => {
      c.updateOverwrite(role, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    mention.roles.add(role)
    message.channel.send(`**✅ - Successfully Muted ${mention.user.tag}**`)
  }
})

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'unmute')) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
    let mention = message.mentions.members.first();
    var args = message.content.split(" ").slice(2).join(" ")
    let member = message.mentions.members.first()
    let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
    if (!mention) return message.channel.send(`**Usage: ${prefix}unmute \`<@user>\` **`);
    if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
    mention.roles.remove(role)
    message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} **`)
    let mens = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setTitle(`You Have Been UnMuted`)
      .setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
      .setColor("GREY")
      .setFooter('Id ' + message.author.id, message.author.avatarURL())
    member.send(mens);
  }
})

client.on('message', hie => {
  if (hie.content.startsWith(prefix + "hide")) {
    if (!hie.channel.guild) return;
    if (!hie.member.hasPermission('ADMINISTRATOR')) return hie.reply('You Dont Have Permission \`ADMINISTRATOR\` :x:');
    hie.channel.createOverwrite(hie.guild.id, {
      VIEW_CHANNEL: false
    })
    hie.channel.send(new Discord.MessageEmbed()
      .setDescription("**Channel is hidden:red_circle:**")
      .setColor('RED'))
  }
});


client.on('message', hie => {
  if (hie.content.startsWith(prefix + "show")) {
    if (!hie.channel.guild) return;
    if (!hie.member.hasPermission('ADMINISTRATOR')) return hie.reply('You Dont Have Permission \`ADMINISTRATOR\` :x:');
    hie.channel.createOverwrite(hie.guild.id, {
      VIEW_CHANNEL: true
    })
    hie.channel.send(new Discord.MessageEmbed()
      .setDescription("**Channel has been unhiden:green_circle:**")
      .setColor('GREEN'))
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "say")) {
    let args = message.content.split(" ").slice(1).join(" ");
    message.channel.send(`${args}`)
  }
});

client.on('message', bader => {
  if (bader.content === "جديد" || bader.content === "لاين" || bader.content === "line") {
    if (!bader.member.roles.cache.has('880349140440211467')) return;
    bader.delete()
    8 / bader.channel.send('https://media.discordapp.net/attachments/854034636040831016/920261701520216084/1639477763936.png?width=1026&height=240');
  }
});

client.on("message", message => {
  if (message.content === "d") {
    message.reply("https://probot.io/daily")
  }
})

client.on("message", message => {
  if (message.content === "v") {
    message.reply("https://top.gg/bot/282859044593598464/vote")
  }
})

const probot = require("probot-tax");
client.on("message", message => {
  if (message.content.startsWith(prefix + 'tax')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.reply(' حط المبلغ ')
    let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .addFields({
        name: "`المبلغ:`",
        value: `**${args}**`

      }, {
          name: "`الضريبه:`",
          value: `**${Number(probot.taxs(args)) - args}**`
        }, {
          name: "`المبلغ مع الضريبه:`",
          value: `**${Number(probot.taxs(args))}**`
        })
      .setFooter(`By  : ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()

    message.channel.send(embed)
  }
})

const Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
  "**تتصل على شرطي تقول له عندكم مطافي**.",
  "**خلاص سامحتك**.",
  "** تصيح في الشارع انا مجنوون**.",
  "** تروح عند شخص تقول له احبك**.",

]
client.on('message', message => {
  if (message.content.startsWith(prefix + "za7f")) {
    if (!message.channel.guild) return message.reply('** This command only for servers **');
    var client = new Discord.MessageEmbed()
      .setTitle("لعبة زحف ..")
      .setColor('RANDOM')
      .setDescription(`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
      .setTimestamp()

    message.channel.send(client);
    message.react("??")
  }
});

const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
  if (message.content.startsWith(prefix + "sara7a")) {
    if (!message.channel.guild) return message.reply('** This command only for servers **');
    var client = new Discord.MessageEmbed()
      .setTitle("لعبة صراحة ..")
      .setColor('RANDOM')
      .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
      .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
      .setTimestamp()

    message.channel.send(client);
    message.react("??")
  }
});

client.on('message', message => {

  if (message.content.startsWith(prefix + "warn")) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
    let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
      .setColor('#0083ff')
      .setTimestamp();

    if (!user) {
      embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
        .setTimestamp();
      return message.channel.send(embed);
    } if (!reason) {
      embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
      return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
      .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
      .setColor('#0083ff')
      .setTimestamp()
      .addField("لقد اخذت انذار", `
 
          السبب : **${reason}**`)
      .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'kill')) {
    let user = message.mentions.users.first();
    if (!user) {
      message.reply(`You've to mention user you want to kill.`)
    }
    let kill = ['https://i.ytimg.com/vi/MDBeR53uIBc/maxresdefault.jpg', 'حط الصورة الي تبغاها', ``];
    message.channel.send({
      embed: new Discord.MessageEmbed()
        .setDescription(`${message.author} killed **${user}**`)
        .setImage(
          kill[Math.floor(Math.random() * kill.length)]
        )
    });
  }
});


client.on('message', msg => {
  if (msg.content === prefix + "bot") {
    const embed = new Discord.MessageEmbed()
      .setColor("bleu")
      .setTitle(` ${client.user.username} `)
      .addField('``My Name``', ` ${client.user.tag}`, true)
      .addField('``servers``', ` ${client.guilds.cache.size} `, true)
      .addField('``channels``', ` ${client.channels.cache.size} `, true)
      .addField('``Users``', ` ${client.users.cache.size} `, true)
      .addField('``My ID``', ` ${client.user.id} `, true)
      .setFooter(`OpX Server`)
    msg.channel.send(embed);
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});

client.on("message", async (message) => {
  if (message.content.startsWith(prefix + "come")) {
    if (message.author.bot) return
    if (!message.member.roles.cache.has('898245987385086063')) // ايدي الرتبة الي تقدر تستعمل الامر
      if (!message.member.hasPermission('ADMINISTRATOR')) return
    let user = message.mentions.members.first()
    if (!user) return message.reply(`**Usage: \`${prefix}come\` @user**`)
    user.send(`**من فضلك تعال هنا <#${message.channel.id}> \nمن ${user}**`)
    let embed = new Discord.MessageEmbed().setColor("GREEN").setDescription(`**✅تم الأسال الى${user}**`).setFooter(message.author.tag, message.author.displayAvatarURL({
      dynamic: true
    }))
    message.channel.send(embed)
  }
})

client.on("ready", () => {
  console.log(`${client.user.tag}`)
  let voice = client.channels.cache.get('1255172552813183031');
  try {
    setInterval(async () => {
      await voice.join()
    }, 1000)
  } catch (err) {
    console.log('Erorr')
  }
})

client.login(ODg1OTUxOTkyNTQxOTAwODEw.GBUwb0.UgVJhWgxeEPy5piQZmo4zJdscGY1RaStuRFiuA);