const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require('./config.json');

const client = new Client({
   partials: [
      "MESSAGE",
      "CHANNEL",
      "REACTION",
      "GUILD_MEMBER",
      "USER",
      "VOICE"
   ],
   intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS]
});

client.once('ready', () => {
   console.log('Ready!');
});

// Commands
client.on("messageCreate", async (message) => {
   if (message.author.bot) return

   try {

      if (message.content.includes(`${config.prefix}cheese`)) {
         message.channel.send({ content: `https://cdn.discordapp.com/attachments/845224020248494093/979218806675230720/top_29_quintillion_cheese.mp4` })
      }

      if (message.content.includes(`${config.prefix}mature`)) {
         mes
         sage.channel.send({ content: `This type of cheddar is matured for 6 months to 1 year. Perhaps more commonly known as 'Tasty' cheddar, this cheddar is a little crumbly in texture, saltier in flavour, which lingers on the palette on the finish. As well as this, mature cheddars are often drier in texture and will be a darker yellow.` })
      }

      if (message.content.includes(`${config.prefix}chez`)) {
         message.channel.send({ content: `https://cdn.discordapp.com/attachments/979516965980893217/979561835332251658/James_Mays_Cheese_Song_for_Denise_Remix_saycheese.mp4` })
      }

      if (message.content.includes(`${config.prefix}slap`)) {
         const member = message.mentions.members.first()
         if (!member) {
            message.channel.send({ content: `Please ping a member.` })
         }
         message.channel.send(`${member.user.username} You were slapped by ${message.author.username} with CHEESE! \n https://cdn.discordapp.com/attachments/785977886607278130/998054509676875776/cheese-challenge-cat.gif`)
      }

      if (message.content.includes(`${config.prefix}cassidy`)) {
         const Cassiddy = new MessageEmbed()
            .setColor("DARK_VIVID_PINK")
            .setTitle("Cassidy")
            .setImage("https://cdn.discordapp.com/attachments/950870645825232986/1002257121519353886/madcat-ygzcat.gif")
            .addField(`📱Sorry! But the person you dialed is currently unavailable!📱`, [
               `Please try again later! `,
               `OR aditionally please leave a message and we will call you back within the next 1-6 business years.`,
               `If still failing to do that, please contact tech support.`,
            ].join("\n"))
         message.channel.send({ embeds: [Cassiddy] })
      }

      // Embeds
      if (message.content.includes(`${config.prefix}Cheese`)) {
         const Let_me_tell_you_about_cheese = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setImage("https://cdn.discordapp.com/attachments/968331235594240050/979560335579164712/grilled-cheese-sandwich.gif")
            .setTitle("🧀Yummy Cheese 🧀")
            .addField(`Lets teach you about cheese!`, [
               `There are multiple types of cheese. By some estimates, there are more than 1,800 different types of cheese in the world.`,
               `Here are some cheese types!`,
               `> Hard Cheese`,
               `> Semi Hard Cheese`,
               `> Blue Mould Cheese`,
               `> White Mould Cheese`,
               `> Fresh Cheese`,
               `> Goat Cheese`,
               `Other types of cheese include the following ;`,
               `> Fresh`,
               `> Aged Fresh Cheese`,
               `> Soft White Rind`,
               `> Semi-Soft`,
               `> Hard`,
               `> Blue`,
               `> Flavour Added`
            ].join("\n"))
         message.channel.send({ embeds: [Let_me_tell_you_about_cheese] })
      }

      if (message.content.includes(`${config.prefix}commands`)) {
         const Commands = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setTitle("🧀The Cheesy Commands 🧀")
            .addField(`What are some of these *Cheesy Commands* You say? Here are the following available commands!`, [
               `> ;Cheese = This gives you the different types of cheese`,
               `> ;cheese = This gives you a video about 29 quintillion cheeses`,
               `> ;mature = Tells you about mature cheddar cheese!`,
               `> ;slap (user) = Will slap a user with  cheese!`,
               `> ;chez = Will send a funny cheese video!`,
               `> ;ghost (user) = This would bring up an embed staying you ghosted someone`,
               `> ;welcome (user) = This sends a cool embed to welcome thing pinged person!`,
               `> ;hamster (user) = This command will send a attack hamster with a knife to the selected person!`,
               `MORE COMMANDS TO FOLLOW CHEESE LORDS`,
               `typed as shown`,
            ].join("\n"))
         message.channel.send({ embeds: [Commands] })
      }

      if (message.content.includes(`${config.prefix}ghost`)) {
         const member = message.mentions.members.first()

         if (!member) {
            message.channel.send({ content: `Please ping a member.` })
         }

         const ghost = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setImage("https://cdn.discordapp.com/attachments/979516965980893217/979866320931799050/ghosted-ignored.gif")
            .setTitle("👻Get Ghosted Bitch!👻")
            .addField('Yikes!', [
               `Yikers dude! ${member.user.username} You were ghosted by ${message.author.username}! must really suck for you </3`
            ].join("\n"))
         message.channel.send({ embeds: [ghost] })
      }

      if (message.content.includes(`${config.prefix}welcome`)) {
         const member = message.mentions.members.first()

         if (!member) {
            message.channel.send({ content: `Please ping a member.` })
         }

         const welcome = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setImage("https://cdn.discordapp.com/attachments/968331235594240050/980608578375278622/marching-band-drums.gif")
            .setTitle("🎉Welcome to the server!🎉")
            .addField('Welcome!', [
               `Welcome to the server! ${member.user.username} I'm glad you joined this small community!`,
               `I hope you stay and enjoy the server! if not then i will be sad 😭`,
               `P.S Yes bots have feelings too ya know.. sent by ${message.author.username}`,
               `Also one last thing, This gif is the server welcoming you!`,
            ].join("\n"))
         message.channel.send({ embeds: [welcome] })
      }

      if (message.content.includes(`${config.prefix}hamster`)) {
         const member = message.mentions.members.first()

         if (!member) {
            message.channel.send({ content: `Please ping a member.` })
         }

         const hamster = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setImage("https://cdn.discordapp.com/attachments/974350237944651796/983389247954386974/hamsters-knife.gif")
            .setTitle("🔪ATTACK HAMSTER!🔪")
            .addField('UH OH! RUN FOR YOUR LIFES', [
               `${member.user.username} RUN FOR YOUR LIFE! THIS HAMSTER IS CHARGING!`,
               `THE HAMSTER HAS A FUCKING KNIFE!`,
               `Hamster Owner is : ${message.author.username}`,
            ].join("\n"))
         message.channel.send({ embeds: [hamster] })
      }

      if (message.content.includes(`${config.prefix}ban`)) {
         const member = message.mentions.members.first()

         if (!member) {
            return message.channel.send({ content: `Seems you have used this command incorectly please add the user id you wanna ban` })
         }

         member.ban()

         await message.channel.send(`You have banned ${member.user.tag} | ${member.user.id}`)
      }
      if (message.content.includes(`${config.prefix}kick`)) {
        const member = message.mentions.members.first()

        if (!member) {
           return message.channel.send({ content: `Seems you have used this command incorectly please add the user id you wanna kick` })
        }

        member.kick()

        await message.channel.send(`You have kicked ${member.user.tag} | ${member.user.id}`)
     } 
   } catch (error) {
      console.log(error.stack)
      message.channel.send(`\`\`\`js\n${error.stack}\`\`\``)
   }
})

client.login(config.token)