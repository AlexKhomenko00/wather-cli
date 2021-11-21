import chalk from "chalk";
import dedent from "dedent-js";

const { bgRed, bgGreen, bgCyan } = chalk;

const printError = (error) => {
	console.log(bgRed(" ERROR ") + " " + error);
};

const printSuccess = (message) => {
	console.log(bgGreen(" SUCCESS ") + " " + message);
};

const printHelp = () => {
	console.log(
		dedent`${bgCyan(" HELP ")}
         No params - weather output 
         -s [CITY] for setting the city
         -h [CITY] for showing the help
         -t [API_KEY] for setting the token
        `
	);
};

const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.bgYellow(" WEATHER ")} The weather in the city ${res.name}
		${icon}  ${res.weather[0].description}
		Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
		Humidity: ${res.main.humidity}%
		Wind's speed: ${res.wind.speed}
		`
	);
};

export { printError, printSuccess, printHelp, printWeather };
