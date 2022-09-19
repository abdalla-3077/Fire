const express = require('express');
const app = express();
const port = 3000;
const ms = require('ms')

app.get('/', (req, res) => res.send('Golden Bot Is Here 🪙'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//=============
require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;


 //process.on("unhandledRejection", error => {
  //return console.log(error)
//});


//=====================================

const Discord = require('discord.js');

const client = new Discord.Client({intents:32767});

client.once('ready', () => {
	console.log(`🟢 I AM Work And MY Name is ${client.user.tag}
===========================
👤 Users: ${client.users.cache.size}
📊 Channels: ${client.channels.cache.size}
⚓ Servers: ${client.guilds.cache.size}
===========================
`);
});

client.on("ready", () => {
    client.user.setActivity(`Sinv Server Is The Best`, { type: "PLAYING"})
})
//=======================================


const prefix = "+"


//==========================
client.on("message", basel => { 
 if(basel.content.startsWith(prefix + "help")) { 
  basel.channel.send("**Check your Dm 🔒-شوف خاصك**").then(messages => { 
   
let embed = new Discord.MessageEmbed() 
.setDescription(`**Golden Bot Help Menu 📕**`)
 .addField(
        "**📶│+ping**•",
        "```لاظهار البنج الخاص بالبوت```" ,
      )
   .addField(
        "• **🔒│+قفل**",
        "```لقفل الكتابه في الروم``` "
      )
     .addField(
        "• **🔓│+فتح**",
        "```لفتح الكتابه في الروم``` "
      )
      .addField(
        "• **🗑️│+مسح**",
        "```لمسح اي رساله مكتوبه الحد الاقصي 100 و الافتراضي 5``` "
      )
      .addField(
        "• **🔴│+اخفاء**",
        "```تستخدم لاخفاء الروم ``` "
      )
     .addField(
        "• **🔴│+اظهار**",
        "```تستخدم لاظهار الروم ``` "
      )
  .addField(
        "• **👤│+nick**",
        "```تستخدم لتغيير اسمك المستعار ``` "
      ).addField(
        "• **🖼️│+avatar**",
        "```للصوره الشخصيه ``` "
      )
  .addField(
        "• **🪙│+mybadges**",
        "```HypeSquad لاظهار شاره ``` "
      )
  .addField(
        "• **❗│+info**",
        "```معلومات عن البوت ``` "
      )
  .addField(
        "• **➕│+invite**",
        "```لاضافه البوت ``` "
      ).addField(
        "• **📢│+هير**",
        "```منشن هير ``` "
      )
  .addField(
        "• **📢│+للكل**",
        "```منشن افري ون ``` "
      )
  .addField(
        "• **⚖️│+ban**",
        "```لاعطاء بان للعضو``` "
      ).addField(
        "• **⚖️│+unban**",
        "```لازاله البان``` "
      ).addField(
        "• **⚖️│+unban all**",
        "```لازاله البان من كل الاعضاء ``` "
      ).addField(
        "• **❌🖼️│+منع-صور**",
        "```لمنع نشر الصور في الروم ``` "
      ).addField(
        "• **✅🖼️│+السماح-للصور**",
        "```للسماح بنشر الصور``` "
      ).addField(
        "• **➕│+role**",
        "```لاعطاء شخص رتبه ⭐ +role <@mention or iD> role``` "
    
      ).addField(
        "• **🔗│+inv**",
        "```عدد الاشخاص الئي قمت بدعوتهم``` "
      ).addField(
        "• **🔇│+mute**",
        "```لاسكات العضو``` "
      ).addField(
        "• **🔉│+unmute**",
        "```لازاله الاسكات``` "
      ).addField(
        "• **💺│+say**",
        "```يكتب البوت الكلام الذس تريده``` "
      )
.setFooter(`Golden Bot 🪙`)
.setTimestamp() 
basel.author.send(embed).catch(error => basel.reply('**Open Your Dm 🔓- افتح خاصك 🔓**'))  
     console.log(`📕Help Command Used `);
    
  })
}
});
//============PING
client.on("message", basel => { 
 if(basel.content.startsWith(prefix + "ping")) { 
  basel.channel.send("**Wait ⏲️ انتظر**").then(messages => { 
    messages.delete()
let pingembed = new Discord.MessageEmbed() 
.setDescription(`**Pong - ${client.ws.ping}ms**`)
 .setThumbnail("https://media.discordapp.net/attachments/982847922414702662/983110963614089236/295a36bd5dc3639ea9e5bb427bd0fc88.png")
    .setColor("RANDOM")
   
.setFooter(`Golden Bot Ping 📶`)

basel.channel.send(pingembed).catch(error => basel.reply('**There Is A Problem 🔴- 🔴 هناك مشكله **'))  
    console.log(`📶Ping Command Used`);
     
  })
}
});
//======================================

  client.on('message', message => {
    if (message.content.startsWith("+قفل")) {
        if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply("** 🤔 You don't have permissions Required permissions (`MANAGE_CHANNELS`)**"); 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            SEND_MESSAGES: false,
        })
        message.channel.send("**🔒 تم قفل الروم** ");
    }
 }); //lock

client.on('message', message => {
    if (message.content.startsWith("+فتح")) {
        if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply("** 🤔 You don't have permissions Required permissions (`MANAGE_CHANNELS`)**"); 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            SEND_MESSAGES: true,
        })
        message.channel.send(" **🔓 تم فتح الروم**  ")
    }
}); //unlock

   //clear
client.on("message",async message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}clear` || command == `${prefix}مسح` || command == `${prefix}cr`) { 
message.delete({timeout: 0})
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
 
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '5';
    message.channel.messages.fetch({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
    message.channel.send(`\`\`\`js
${msgs.size} عدد الرسائل التي تم مسحها
\`\`\``).then(messages => 
messages.delete({timeout:3000}));
    })
  }    
});


client.on('message', message => {
    if (message.content.startsWith("+اخفاء")) {
        if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply("** 🤔 You don't have permissions Required permissions (`MANAGE_CHANNELS`)**"); 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            VIEW_CHANNEL: false,
        })
        message.channel.send("**تم اخفاء الروم 🔴** ");
    }
 }); //lock

client.on('message', message => {
    if (message.content.startsWith("+اظهار")) {
       if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply("** 🤔 You don't have permissions Required permissions (`MANAGE_CHANNELS`)**"); 
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            VIEW_CHANNEL: true,
        })
        message.channel.send(" **تم اظهار الروم 🔴**  ")
    }
});
//=======================================
client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply("** 🤔 You don't have permissions Required permissions (`MANAGE_NICKNAMES`)**");
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args) return message.channel.send(`**• | Usage:** ${prefix}nick \`\`@Name\`\` nickname`);
    message.guild.member(user.user).setNickname(`${nick}`);
    message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
  }
}); 

//=======================
client.on('message' , msg => {
 if(msg.content === "<@!1009871303563546764>" || msg.content === "<@1009871303563546764>")
 msg.channel.send("**My prefix is `+` 💠 To Help Menu `+help`**")//تقدر تغير الرد طبعا
});
//=============
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;if(message.author.bot || !message.guild) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 'avatar') {
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
      if(!member) return  message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag,message.author.displayAvatarURL())
        .setImage(message.author.displayAvatarURL({size: 2048,dynamic : true})))
      if(member) {
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(member.user.tag,member.user.displayAvatarURL())
        .setImage(member.user.displayAvatarURL({size: 2048,dynamic : true})))
      }
    }
});


//=========================
const badges = require("discord-badges");
client.on("message", async (message) => {
  if (message.content === "+mybadges") {
    const user = client.users.cache.get(message.author.id); 
    badges
      .badges(user) 
      .then((response) => {
        let result = "";
        for (let i = 0; i < response.length; i++) {
          result += `**${response[i].name} :** ${response[i].url}\n`;
        }
        return message.channel.send(result);
      })
      .catch((e) => {
        console.log(e);
        return message.channel.send("ليس لديك أي شارات ديسكورد");
      });
  }
});
//============
client.on('message', async ans => {
if(ans.content === prefix +"info"){
const embed = new Discord.MessageEmbed()
.setTitle(`Info`)
.setColor("RANDOM")
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`Hi,  read that at the bottom`)
.addField('**⺁Owner⺄ 👑**',`**Abdalla Ahmed 👑#5697**`, true)//حط اسمك
.addField('**⺁Servers⺄ 🌐**',`**${client.guilds.cache.size}**`, true)
.addField('**⺁Users⺄ 👥**',`**${client.users.cache.size}**`, true)
.setTimestamp()
.setFooter(`Request By ${ans.author.username}`, ans.author.avatarURL());
ans.channel.send(embed);
  }
});
//============
client.on('message', msg => {
if(msg.content == (prefix + "invite")) {
let embed = new Discord.MessageEmbed()
.setAuthor(`Requested by : ${msg.author.tag}` , msg.author.avatarURL({dynamic:true}))
.setTitle(`:arrow_right: Invite Me`)
.setURL(`https://discord.com/api/oauth2/authorize?client_id=${client. user.id}&permissions=0&scope=bot`)
.setTimestamp()
msg.channel.send(embed)
msg.react(`☑`)
}
});
//===============
client.on('ready', async() => {
        client.channels.cache.get('1005571282433224855').send("The Bot Is Online 🟢")
        client.channels.cache.get('1005571733710974986').join()
        
});


//============
process.on("unhandledRejection", error => {
  return console.log(error)
});
//=====================
client.on('message', nibo => {
  if (nibo.content === prefix + "ver") {
    const embed = new Discord.MessageEmbed()
.setColor("black")//اللون
.setTitle(`Verified Bot`)
.setDescription(`75 of ${client.guilds.cache.size} Not Much Left For Verification`)
.setFooter(`${client.user.username}`)
nibo.channel.send(embed);
}});

//========
client.on('message', message => {
    if (message.content.startsWith(prefix + 'هير')) {
               if(message.author.bot || !message.guild) return;

      if (!message.member.hasPermission('ADMINISTRATOR')) return
        if (message.author.bot) return
        message.channel.send(`@here`)
}
})
client.on('message', message => {
    if (message.content.startsWith(prefix + 'للكل')) {
              if(message.author.bot || !message.guild) return;

      if (!message.member.hasPermission('ADMINISTRATOR')) return
        message.channel.send(`@everyone`)
}
})

//========


//===
var _0x36bc=['200311RHuJLs','bot','MessageEmbed','ban\x20@user\x204d\x20spam','setFooter','BAN_MEMBERS','24759DkdSTY','type','\x20**Please\x20Mention/ID\x20Same\x20One!**\x0a\x20Ex:\x20','split','then','reply','fetchBans','cache','302710mFzEeO','unban','forEach','guild','first','245100djXlpX','undefined','message','startsWith','users','content','1rTecXf','size','141pGdeQh','setDescription','user','\x20**Please\x20Type\x20Reason!**\x0a\x20Ex:\x20','```js\x0a','member','94207iwtKyM','\x20**I\x20Can\x27t\x20Bannd\x20Any\x20Member\x20In\x20This\x20Server\x20Becuse\x20I\x20Don\x27t\x20Have\x20`BAN_MEMBERS`\x20Permission!**\x0a\x20Ex:\x20','1AjzZuG','channel','Request\x20By\x20','members','1865LXMtBJ','ban','author','tag','join','mentions','send','log','\x20**You\x20Need\x20`BAN_MEMBERS`\x20Permission\x20To\x20Use\x20This\x20Command!**','>\x20**','\x20**<@!','RED','hasPermission','setColor','190448AjBLvc','setTimestamp','**❌\x20|\x20Thare\x20Is\x20No\x20Bannded\x20Members!**','**✅\x20|\x20Done\x20Unbaned\x20'];var _0x1eb24c=_0x3620;function _0x3620(_0x5acecb,_0x5a148a){return _0x3620=function(_0x36bc77,_0x36206c){_0x36bc77=_0x36bc77-0xa4;var _0x13dfd9=_0x36bc[_0x36bc77];return _0x13dfd9;},_0x3620(_0x5acecb,_0x5a148a);}(function(_0x1dba2c,_0x31b1b1){var _0x38396b=_0x3620;while(!![]){try{var _0x48cb9a=parseInt(_0x38396b(0xd1))+parseInt(_0x38396b(0xd9))*-parseInt(_0x38396b(0xac))+parseInt(_0x38396b(0xba))+-parseInt(_0x38396b(0xa6))*parseInt(_0x38396b(0xa8))+parseInt(_0x38396b(0xcc))*parseInt(_0x38396b(0xd7))+-parseInt(_0x38396b(0xc4))+-parseInt(_0x38396b(0xbe));if(_0x48cb9a===_0x31b1b1)break;else _0x1dba2c['push'](_0x1dba2c['shift']());}catch(_0x1acc5b){_0x1dba2c['push'](_0x1dba2c['shift']());}}}(_0x36bc,0x26170),client['on']('message',_0x5d5311=>{var _0x2bec67=_0x3620;if(_0x5d5311[_0x2bec67(0xd6)][_0x2bec67(0xd4)](prefix+'unban')){if(_0x5d5311['channel'][_0x2bec67(0xc5)]=='dm')return;if(_0x5d5311[_0x2bec67(0xae)][_0x2bec67(0xbf)])return;try{if(!_0x5d5311[_0x2bec67(0xa5)][_0x2bec67(0xb8)](_0x2bec67(0xc3)))return _0x5d5311[_0x2bec67(0xa9)]['send'](new Discord[(_0x2bec67(0xc0))]()[_0x2bec67(0xb9)](_0x2bec67(0xb7))['setDescription']('❌'+_0x2bec67(0xb4)));_0x5d5311['guild'][_0x2bec67(0xca)]()[_0x2bec67(0xc8)](_0xa95dbb=>{var _0x514b57=_0x2bec67;_0xa95dbb['size']==0x0&&_0x5d5311[_0x514b57(0xc9)](new Discord[(_0x514b57(0xc0))]()[_0x514b57(0xb9)](_0x514b57(0xb7))[_0x514b57(0xda)](_0x514b57(0xbc)));;_0xa95dbb[_0x514b57(0xce)](_0x215919=>{var _0x380f50=_0x514b57;_0x5d5311[_0x380f50(0xcf)][_0x380f50(0xab)][_0x380f50(0xcd)](_0x215919[_0x380f50(0xdb)]['id']);let _0x1571ed=_0xa95dbb[_0x380f50(0xd8)];_0x5d5311[_0x380f50(0xa9)]['send'](new Discord[(_0x380f50(0xc0))]()[_0x380f50(0xb9)]('GREEN')[_0x380f50(0xda)](_0x380f50(0xbd)+_0x1571ed+'\x20Members!**'));});});}catch(_0xd5de63){_0x5d5311[_0x2bec67(0xa9)][_0x2bec67(0xb2)](_0x2bec67(0xa4)+_0xd5de63+'\x0a```'),console[_0x2bec67(0xb3)]();}}}),client['on'](_0x1eb24c(0xd3),_0x2b9a66=>{var _0xc65564=_0x1eb24c;if(_0x2b9a66[_0xc65564(0xd6)]['toLowerCase']()[_0xc65564(0xd4)](prefix+_0xc65564(0xad))){var _0x1f6486=_0x2b9a66[_0xc65564(0xd6)][_0xc65564(0xc7)]('\x20'),_0x19baff=_0x2b9a66[_0xc65564(0xb1)][_0xc65564(0xd5)][_0xc65564(0xd0)]()||client[_0xc65564(0xd5)][_0xc65564(0xcb)]['get'](_0x2b9a66['content']['split']('\x20')[0x1]),_0x777880=_0x2b9a66['guild'][_0xc65564(0xa5)](_0x19baff),_0x159850=_0x2b9a66[_0xc65564(0xd6)][_0xc65564(0xc7)]('\x20')['slice'](0x3)[_0xc65564(0xb0)]('\x20')||_0xc65564(0xd2),_0x24c0a6=_0x1f6486[0x2]||'1y';if(!_0x2b9a66['guild']['me'][_0xc65564(0xb8)](_0xc65564(0xc3)))return _0x2b9a66['channel'][_0xc65564(0xb2)](new Discord[(_0xc65564(0xc0))]()[_0xc65564(0xb9)](_0xc65564(0xb7))[_0xc65564(0xda)]('❌'+_0xc65564(0xa7)+(prefix+_0xc65564(0xc1)))[_0xc65564(0xc2)](_0xc65564(0xaa)+_0x2b9a66[_0xc65564(0xae)][_0xc65564(0xaf)])[_0xc65564(0xbb)]());if(!_0x2b9a66['member']['hasPermission'](_0xc65564(0xc3)))return _0x2b9a66[_0xc65564(0xa9)]['send'](new Discord[(_0xc65564(0xc0))]()[_0xc65564(0xb9)](_0xc65564(0xb7))[_0xc65564(0xda)]('❌'+'\x20**You\x20Need\x20`BAN_MEMBERS`\x20Permission\x20To\x20Use\x20This\x20Command!**\x0a\x20Ex:\x20'+(prefix+'ban\x20@user\x204d\x20spam'))[_0xc65564(0xc2)](_0xc65564(0xaa)+_0x2b9a66['author'][_0xc65564(0xaf)])[_0xc65564(0xbb)]());if(!_0x777880)return _0x2b9a66[_0xc65564(0xa9)][_0xc65564(0xb2)](new Discord[(_0xc65564(0xc0))]()[_0xc65564(0xb9)](_0xc65564(0xb7))[_0xc65564(0xda)]('❌'+_0xc65564(0xc6)+(prefix+'ban\x20@user\x204d\x20spam'))[_0xc65564(0xc2)](_0xc65564(0xaa)+_0x2b9a66['author'][_0xc65564(0xaf)])[_0xc65564(0xbb)]());if(!_0x159850)return _0x2b9a66[_0xc65564(0xa9)]['send'](new Discord[(_0xc65564(0xc0))]()[_0xc65564(0xb9)](_0xc65564(0xb7))[_0xc65564(0xda)]('❌'+_0xc65564(0xdc)+(prefix+_0xc65564(0xc1)))[_0xc65564(0xc2)]('Request\x20By\x20'+_0x2b9a66[_0xc65564(0xae)][_0xc65564(0xaf)])[_0xc65564(0xbb)]());_0x777880[_0xc65564(0xad)]({'reason':_0x159850})[_0xc65564(0xc8)](()=>{var _0xfbab2a=_0xc65564;_0x2b9a66[_0xfbab2a(0xa9)]['send'](new Discord[(_0xfbab2a(0xc0))]()[_0xfbab2a(0xb9)]('GREEN')[_0xfbab2a(0xda)]('✅'+(_0xfbab2a(0xb6)+_0x777880[_0xfbab2a(0xdb)]['id']+'>\x20banned\x20from\x20the\x20server\x20!\x20:airplane:\x20by:<@'+_0x2b9a66[_0xfbab2a(0xae)]['id']+_0xfbab2a(0xb5)))['setFooter']('Request\x20By\x20'+_0x2b9a66['author'][_0xfbab2a(0xaf)])[_0xfbab2a(0xbb)]()),setTimeout(()=>{var _0x5ed758=_0xfbab2a;_0x2b9a66[_0x5ed758(0xcf)][_0x5ed758(0xca)]()[_0x5ed758(0xc8)](_0x448cca=>{if(_0x448cca['size']==0x0)return;_0x448cca['forEach'](_0x442a35=>{var _0x54838c=_0x3620;if(_0x442a35[_0x54838c(0xdb)]['id']==_0x777880[_0x54838c(0xdb)]['id'])_0x2b9a66['guild'][_0x54838c(0xab)][_0x54838c(0xcd)](_0x442a35[_0x54838c(0xdb)]['id']);else console['log'](_0x442a35['user']['id']+'\x20=>\x20'+_0x777880[_0x54838c(0xdb)]['id']);});});},ms(_0x24c0a6));});}}));

//======
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.cache.size}\`\``);
   } 
});
//======
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'منع-الصور')) {
        if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply("** 🤔 You don't have permissions Required permissions (`MANAGE_CHANNELS`)**"); 
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            ATTACH_FILES: false
        });
        message.channel.send(`\n🌌 | تم منع الصور بـ <#${channel_find.id}>\n`);
      
    }
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'السماح-للصور')) {
        if(message.author.bot || !message.guild) return;
if(!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply("** 🤔 You don't have permissions Required permissions (`MANAGE_CHANNELS`)**"); 
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel;
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            ATTACH_FILES: true
        });
        message.channel.send(`\n🌌 | تم سماح الصور بـ <#${channel_find.id}>\n`);
    }
});

//======
client.on('message', async message => {
    if(message.author.bot || !message.guild) return;
 if (message.content.startsWith("+kick")){
 if (message.member.hasPermission("BAN_MEMBERS")) {
 let member = message.mentions.members.first()
  let mention = new Discord.MessageEmbed()
 .setDescription("منشن لواحد تعطيه كيك ❌")
   .setColor("RED")
.setFooter(`Golden Bot Security 🔫`)
 if (!member) message.channel.send(mention)
 else {
 member.kick().then(mem => {
    let kicked = new Discord.MessageEmbed()
 .setDescription(`Successfully Kicked ✅ ${mem.user.username}!`)
   .setColor("GREEN")
.setFooter(`Golden Bot Security 🔫`)

 message.channel.send(kicked)
 })
 }
 } else {
      let permission = new Discord.MessageEmbed()
 .setDescription(" تلا يمكنك فعل ذلك ❌!")
   .setColor("RED")
.setFooter(`Golden Bot Security 🔫`)
 message.reply(permission)
 }
 }
})

//======

client.on("message", message => {
  let cmd = message.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "role") {
    if (!message.channel.guild || message.author.bot) return;
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.channel.send(`:x: **I Need Permissions !!**`);
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!user) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (!role1) return message.channel.send(`**✅ ${prefix}role <@mention or iD> role**`);
    if (user.roles.cache.find(c => c.id === role1.id))
      return user.roles.remove(role1).then(() => {
message.channel.send(`**✅ Changed roles for ${user.user}  removed ${role1.name}**`);
}).catch(err => message.channel.send("Error: **" + err.message + "**"));
user.roles.add(role1).then(() => {
        message.channel.send(
          `**✅ Changed roles for ${user.user} ${role1.name}**`
        );
      })
      .catch(err => message.channel.send("Error: **" + err.message + "**"));
  }
});
//================
client.on("message", msg => {
  let cmd = msg.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "inv") {
    if (!msg.channel.guild || msg.author.bot) return;
    let guild = msg.guild
    var codes = [""]
    var nul = 0


    
    guild.fetchInvites()
      .then(invites => {
        invites.forEach(invite => {
          if (invite.inviter === msg.author) {
            nul += invite.uses
            codes.push(`discord.gg/${invite.code}`)
          }

        })
        if (nul > 0) {
          const e = new Discord.MessageEmbed()
            .addField(`${msg.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
            .setColor('#7CFC00')
                      .setFooter("Invite System 🤖")
        .setTimestamp()

          msg.channel.send(e)
        } else {
          var embed = new Discord.MessageEmbed()
            .setColor("#000000")
            .addField(`${msg.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)
            .setFooter("Invite System 🤖")
        .setTimestamp()

          msg.channel.send({ embed: embed });
          return;
        }
      })
  }
})
//==========================

client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith(prefix + "mute")) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **You Need `MANAGE_ROLES` Permission To Use This Command!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **I Can't Mute Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        let member = message.mentions.users.first() || client.users.cache.get(message.content.split(' ')[1])
        var user = message.guild.member(member)
        if (!user) return message.channel.send(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **Please Mention/ID Same One!**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (user.id === message.author.id) return message.reply(
            new Discord.MessageEmbed().setColor("YELLOW")
            .setDescription("⚠" + " **What Are You Doing ??**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (user.id === client.user.id) return message.channel.send(
            new Discord.MessageEmbed().setColor("YELLOW")
            .setDescription("⚠" + " **What Are You Doing ??**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        if (!message.guild.member(user).bannable) return message.reply(
            new Discord.MessageEmbed().setColor("RED")
            .setDescription("❌" + " **I Can't Mute Same One High Than Me >_<**")
            .setFooter(`Request By ${message.author.tag}`).setTimestamp()
        )
        let muteRole = message.guild.roles.cache.find(n => n.name === 'Muted🔇')
        if (!muteRole) {
            message.guild.roles.create({
                data: {
                    name: "Muted🔇",
                  color: "#000000",
                }
            }).then(async(role) => {
                await message.guild.channels.cache.forEach(channel => {
                    channel.overwritePermissions([{
                        id: role.id,
                        deny: ["SEND_MESSAGES"]
                    }]);
                })
            })
        }
        user.roles.add(muteRole)
        var time = message.content.split(' ')[2]
        if (!time) time = '24h'
        message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription("✅" + ` **${user} Has Ben Muted By <@!${message.author.id}>, For a ${ms(ms(time))}**`).setFooter(`Request By ${message.author.tag}`).setTimestamp())
        setTimeout(() => {
            user.roles.remove(muteRole);
        }, ms(time));
        return;
    }
})
client.on('message', msg => {
const error = "❌";
const timeing = "⏱";
const success = "✅";
const lodeing = "🤔";
  let args = msg.content.split(" ");
  if (args[0] === prefix + 'unmute') {
    if (msg.author.bot) return;
    if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **You Need `MANAGE_ROLES` Permission To Use This Command!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.guild.me.hasPermission('MANAGE_ROLES')) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **I Can't Kick Any Member In This Server Becuse I Don't Have `MANAGE_ROLES` Permission!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    let user = msg.mentions.members.first()
    if (!user) return msg.channel.send(new Discord.MessageEmbed().setDescription(error + " **Please Mention Same One!**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (user.id === msg.author.id) return msg.reply(new Discord.MessageEmbed().setDescription(lodeing + " **What Are You Doing ??**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    if (!msg.guild.member(user).bannable) return msg.reply(new Discord.MessageEmbed().setDescription(error + " **I Can't Unmute one high than me >_<**").setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    var muteRole = msg.guild.roles.cache.find(n => n.name === 'Muted🔇')
    if (!muteRole) return msg.channel.send(new Discord.MessageEmbed().setDescription(lodeing + ` **What Is That ?? [ Super Error ]**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
    user.roles.remove(muteRole)
    msg.channel.send(lodeing + " **Processing The Unmute Function**").then((m) => {
      m.edit(success + " **Processing is complete**")
    })
    msg.channel.send(new Discord.MessageEmbed().setDescription(success + ` **${user} Has Been Unmuted By <@!${msg.author.id}>**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
  }
})
//=============
client.on('message' , message => {
    var args = message.content.split(" ").slice(1);
    var msg = args.join(" ");
  if(message.content.startsWith(prefix + "say" )){
 
     message.channel.send(`${msg}`);
  }
})

//=============
client.login(process.env.TOKEN);
