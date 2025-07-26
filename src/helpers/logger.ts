export const logger = (text: string) =>
	process.env.NODE_ENV !== "test" && console.log(text);

export const errorLogger = (error: string) =>
	process.env.NODE_ENV !== "test" && console.error(error);
