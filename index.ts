import DiscordJS, { Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
    const guildId = '837266679443619860'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Replies with pong.',
    })
    commands?.create({
        name: 'uwu-voice',
        description: 'Sends a link to an UWU translator'
    })
    commands?.create({
        name: 'donald',
        description: 'There is nothing to see here.'
    })
    commands?.create({
        name: 'intro',
        description: 'Introduction to KFC.'
    })
    commands?.create({
        name: 'helpkfc',
        description: 'About KFC bot'
    })
})



client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    if (commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: false,
        })
    }

    if (commandName === 'uwu-voice') {
        interaction.reply({
            content: 'https://lingojam.com/Englishtouwu',
            ephemeral: false,
        })
    }

    if (commandName === 'donald') {
        interaction.reply({
            content: 'https://nutritiouslimitedprograms.lewiskerr1.repl.co',
            ephemeral: false,
        })
    }
    
    if (commandName === 'intro') {
        interaction.reply({
            content: 'Hey! My name is Ketushi F. Canatano! I come from Tokyo, Japan! I was born and raised in Kentucky in the USA, running my families fried chicken shop. I hope your able to serve me the freshest meat! ;)',
            ephemeral: false,
        })
    }

    if (commandName === 'helpkfc') {
        interaction.reply({
            content: 'About KFC bot; KFC bot is a new early-development bot that is currently limited to text-only commands. In the later stages of development, there will be the ability to play mp3, mp4 files and youtube links.',
            ephemeral: true,
        })
    }
    

})





client.login(process.env.TOKEN)


//SNOOZY IS SEXY FOR MAKE KFC
