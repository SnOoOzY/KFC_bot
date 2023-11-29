import DiscordJS, { Client, GatewayIntentBits, Message, TextChannel } from 'discord.js'
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
    commands?.create({
        name: 'image-test',
        description: 'test for sending images'
    })
    commands?.create({
        name: 'video-test',
        description: 'test for sending videos'
    })
    commands?.create({
        name: 'fortnite',
        description: 'secret'
    })
    commands?.create({
        name: '8ball',
        description: 'random response'
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
    
    if (commandName === 'image-test') {
        interaction.reply({
            content: '',
            files: ['C:\\Users\\FiercePC\\Downloads\\sl_243115104_volkswagen-golf-2012-side-view_4x.png'],
            ephemeral: false,
        })
    }

    if (commandName === 'video-test') {
        interaction.reply({
            content: '',
            files: ['C:\\Users\\FiercePC\\Downloads\\haas.mov'],
            ephemeral: false,
        })
    }

    if(commandName === 'fortnite') {
        interaction.reply({
            content: 'Hello petah.',
            files: [{
            attachment:'C:\\Users\\FiercePC\\Downloads\\Snapinsta.app_video_365501201_316707994048736_220244430177569592_n.mp4',
            name: 'SPOILER_NAME.mp4'
        }],
            ephemeral: false,
            
        })
    }

    if(commandName === '8ball') {
        interaction.reply({
            content: 'ITS NOT FINISHED STOP STOP STOP STOP STOP STOP',
            files: ['C:\\Users\\FiercePC\\Downloads\\RPReplay_Final1696355395.mov'],
            ephemeral: false,

            let 8choice = math.random(8),

            switch(8choice) {
                case 0:
                    content: 'WE NUMBER 1!';
                    break;
                case 1:
                    content: 'WE NUMBER 2!';
                    break;
                case 2:
                    content: 'WE NUMBER 3!';
                    break;
                case 3:
                    content: 'WE NUMBER 4!';
                    break;
                case 4:
                    content: 'WE NUMBER 5!';
                    break;
                case 5:
                    content: 'WE NUMBER 6!';
                    break;
                case 6:
                    content: 'WE NUMBER 7!';
                    break;
                case 7:
                    content: 'WE NUMBER 8!';
                    break;
                default: 
                    content: 'WE NOT BALLING!';
                break;
            }
        })
    }
})





client.login(process.env.TOKEN)
