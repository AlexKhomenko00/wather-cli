#!/usr/bin/env node

import { getArgs, getIcon } from "./helpers/args.js";

import {
	printHelp,
	printSuccess,
	printError,
	printWeather,
} from "./services/log.service.js";
import {
	saveKeyValue,
	TOKEN_DICTIONARY,
	getKeyValue,
} from "./services/storage.service.js";
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

const saveCity = async (city) => {
	if (!city.length) {
		printError("Не передан город");
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess("Город сохранён");
	} catch (e) {
		printError(e.message);
	}
};

const getForecast = async () => {
	try {
		const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
		const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
	} catch (e) {
		if (e?.response?.status == 404) {
			printError("Неверно указан город");
		} else if (e?.response?.status == 401) {
			printError("Неверно указан токен");
		} else {
			printError(e.message);
		}
	}
};

const initCli = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}

	if (args.s) {
		return saveCity(args.s);
	}

	if (args.t) {
		return saveToken(args.t);
	}

	getForecast();
};

initCli();
