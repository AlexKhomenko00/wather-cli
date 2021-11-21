const getArgs = (args) => {
	const res = {};

	const [executer, file, ...rest] = args;

	rest.forEach((value, index, array) => {
		if (value.charAt(0) === "-") {
			if (index === array.length - 1) {
				res[value.substring(1)] = true;
			} else if (array[index + 1].charAt(0) !== "-") {
				res[value.substring(1)] = array[index + 1];
			} else {
				res[value.substring(1)] = true;
			}
		}
	});

	return res;
};

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case "01":
			return "☀️";
		case "02":
			return "🌤️";
		case "03":
			return "☁️";
		case "04":
			return "☁️";
		case "09":
			return "🌧️";
		case "10":
			return "🌦️";
		case "11":
			return "🌩️";
		case "13":
			return "❄️";
		case "50":
			return "🌫️";
	}
};

export { getArgs, getIcon };
