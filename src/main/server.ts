import { app } from './config/app';

const port = process.env.APP_PORT;

app.listen(port, () => {
	console.log(`Back-end started on localhost:${port}! 🚀`);
});

export { app };
