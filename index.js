const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("to you say a!help!", {
    type: "LISTENING",
    
  });
    });

//client.on('guildMemberAdd', member=>{
   // const channel = member.guild.channels.find(channel => channel.name === "welcome");
    //if(!channel) return;
    //channel.send(`Welcome to the Juice WRLD FanMade Memory Club, ${member}.  Be sure to check out #rules!`)
//});


client.on('message', msg => {
  if (msg.content === 'a!help') {
    msg.reply('You can say something like a!Joke for a joke, just because I am a bot, that does not mean that I cannot crack a joke!  You can also say something like a!hi and I will say Hi back.  I am still a work in progress, and as I improve, I will get more commands.');
  }
});
client.on('message', msg => {
    if (msg.content === 'a!hi') {
      msg.reply('ello there!');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'a!Joke') {
      msg.reply('Why does a duck have tail feathers?  To cover its butt quack! :rofl:');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'a!joke') {
      msg.reply('What kind of plates do they use on Venus?  Flying saucers!');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'a!jOke') {
      msg.reply('What did the pen say to the pencil? So, whats your point!');
    }
  });
  client.on('message', msg => {
    if (msg.content === '-?BootUpt0.2') {
      msg.reply('I just came from an update! I will have the Update bot tell you more.');
    }
  });

client.login('NzMzMDcyNjI3MzE2NTU1Nzk3.Xw91fw._AJAmZVWmXvAjqrL1lq4BUsHogI');
