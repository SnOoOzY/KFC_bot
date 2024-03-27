import DiscordJS, { ApplicationCommandType, Client, ClientUser, GatewayIntentBits, Guild, GuildBan, GuildBanManager, GuildChannel, GuildMember, GuildMessageManager, InteractionCollector, InteractionResponse, Message, MessageCollector, MessageReaction, Options, TextChannel, TextChannelResolvable, User, UserManager, channelMention, time, userMention } from 'discord.js'
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
        description: 'Tell a random joke'
    })
    commands?.create({
        name: 'spammy',
        description: 'spemspem'
    })
    commands?.create({
        name: 'guessTheNumber',
        description: 'ur deaf'
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
        if(commandName === 'joke') {

            const jokes = [
                'Why did the chicken cross the road? Chicken butt.',
                'I shit!',
                'What do you call a shit that shitting? A shitter!',
                'Jillian!!! :3',
                'Knock knock. Whos there? The door.',
                'Whats brown and sticky? Raphs mums pussy',
                'What do you call two ducks and a cow? Quackers and milk.',
                'Why did the whale blush? It saw the oceans bottom',
                'Shut up!',
                'What is Jack? A fucking retard.',
                'Why did gyatt.',
                'How did gyatt grow? With skibidi.',
                'Why did I shit? To get to the other side.',
                'According to all known laws of skibidi, there is no way toto is a talking toilet. Its brain level is too high for the average human to comprehend the average level of skibidi syndrome.',
                'pee',
                'poo'
            ];

            const randomIndexJokes = Math.floor(Math.random() * jokes.length);
            const responseJokes = jokes[randomIndexJokes];

            await interaction.reply({
                content: `${responseJokes}`,
                ephemeral: false,
            });
    }

    if(commandName === 'spammy') {
        let i = 5000;
        for(i = 5000; i < 100000; i++) {
            interaction.reply({
                content: 'salad',
                ephemeral: false,
            })
        }
    }

    if(commandName === 'guessTheNumber') {
        let initialBoom = interaction.reply({
            content: 'You have to guess a number between 1 and 100 within the next 15 seconds. Good luck!',
            ephemeral: false,
        })

        const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

        const randomIndexGuess = Math.floor(Math.random() * numberArray.length);
        const responseGuess = numberArray[randomIndexGuess];

        let counter = 15;

        let timerArray = setInterval(() => {
            counter = counter - 1;
            if(counter = 0) clearInterval(timerArray);
        }, 1000)

        let listener = TextChannel.arguments;

        if (counter = 0) {
            interaction.reply({
                content: 'Better luck next time! The number was: ' + responseGuess,
                ephemeral: false
            })
        } else if (listener = responseGuess && counter > 0) {
            interaction.reply({
                content: 'Congrats! You guessed the number with' + counter + ' seconds remaining! The number was: ' + responseGuess,
                ephemeral: false
            })
        }
    }
})






client.login(process.env.TOKEN)


