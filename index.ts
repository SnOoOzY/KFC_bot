import DiscordJS, { ApplicationCommandType, Client, ClientUser, GatewayIntentBits, InteractionResponse, Message, MessageReaction, Options, TextChannel, TextChannelResolvable, channelMention, userMention } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent
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
        description: 'Get a random response',
        type: ApplicationCommandType.ChatInput
    })
    commands?.create({
        name: 'joke',
        descrption: 'Tell a random joke'
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


    if (commandName === '8ball') {
        try{

        await interaction.reply('Ask me a question!');

        const userQuestion = options.get('question');

        if (!userQuestion) {
            await interaction.followUp({
                content: "Please ask a question!",
                ephemeral: false,
            });
        } else {

        const responses = [
          'Yes!',
          'No!',
          'Figure it out yourself idiot!',
          'Are you stupid?!',
          'I dont know',
          'Are you mentally challenged?!',
          'You are banned.',
          'Nuh uh.',
        ];

        const randomIndex = Math.floor(Math.random() * responses.length);
        const response = responses[randomIndex];

        await interaction.followUp({
            content: `You asked: ${userQuestion}\n\n🎱 ${response}`,
            ephemeral: false,
        });
    }
} catch(error) {
        console.error('Error processing 8ball command:', error)
    }
}
        if(commandName === 'jokes') {

            const jokes = [
                'What falls, but never needs a bandage? The rain.',
                
            ];
    }
})






client.login(process.env.TOKEN)


