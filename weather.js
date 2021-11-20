#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";

import { printHelp, printSucces, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
	if (!token.length) {
		printError("No token provided");
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSucces("Token saved!");
	} catch (e) {
		printError(e.message);
	}
};

const initCli = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}

	if (args.s) {
		console.log("hi");
	}

	if (args.t) {
		return saveToken(args.t);
	}

	getWeather("London");
};

initCli();
