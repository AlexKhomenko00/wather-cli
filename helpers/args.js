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
			return "âī¸";
		case "02":
			return "đ¤ī¸";
		case "03":
			return "âī¸";
		case "04":
			return "âī¸";
		case "09":
			return "đ§ī¸";
		case "10":
			return "đĻī¸";
		case "11":
			return "đŠī¸";
		case "13":
			return "âī¸";
		case "50":
			return "đĢī¸";
	}
};

export { getArgs, getIcon };
