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

export { printError, printSucces, printHelp };
