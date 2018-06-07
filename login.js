const prompt = require("prompt")
prompt.message = ""

const login_schema = {
    properties: {
        email: {
            description: "EMAIL",
            hidden: false,
            required: true,
        },
        password: {
            description: "PASSWORD",
            hidden: true,
            replace: "*",
            required: true,
        }
    }
}

function login(client) {

	console.log("Log in to Discord")

	prompt.start()
	prompt.get(login_schema, function(error, credentials) {
        try {
            client.login(credentials.email, credentials.password);
        } catch (_) {
            login(client)
        }
    });
}

module.exports = login
