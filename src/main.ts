import { GatewayIntentBits, Client, Partials, Message } from "discord.js";
import dotenv from 'dotenv'

dotenv.config()

const client = new  Client({
    intents : [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel],
})

client.once('ready', () =>{
    console.log('ready')
    if(client.user){
        console.log(client.user.tag)
    }
})

client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return
    if (message.content === '!time') {
        const date1 = new Date();
        message.channel.send(date1.toLocaleString());
    }
})

client.login(process.env.TOKEN)