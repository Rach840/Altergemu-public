const baseUrl =
	"https://api.telegram.org/bot7283357509:AAHvXh4r-wiBSTrRJGsIKgDgTlZkIX_orC8/";

export const sendMessageTelegram = async (message: string): Promise<void> => {
	const url: string = `${baseUrl}sendMessage?chat_id=-4681956722&text=${message}`;
	const responce: Response = await fetch(url);
};
