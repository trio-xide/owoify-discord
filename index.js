const Discord = require("discord.js")
const client = new Discord.Client()

const login = require("./login")
const owoify = require("./owoify")

login(client)

client.on("ready", () => {
	console.log("Owoify is running..")
})

client.on("message", message => {
	if (message.author.id === client.user.id) {
		const owoified_message = owoify(message.content)
		if (message.content !== owoified_message) {
			message.edit(owoified_message)
		}
	}
})