export default {
	HTTP: {
		STATUS: {
			OK: 200,
			CREATED: 201,
			BAD_REQUEST: 400,
			UNAUTHORIZED: 401,
			FORBIDDEN: 403,
			NOT_FOUND: 404,
			CONFLICT: 409,
			INTERNAL_SERVER_ERROR: 500,
			GATEWAY_TIME_OUT: 504,
		},
	},
	EXCEPTIONS: {
		DEFAULT: 'SpGraduadoException',
	},
	MESSAGES: {
		DEFAULT: {
			500: 'Erro ao processar solicitação, tente novamente alguns minutos',
			503: 'O serviço está passando por instabilidades, tente novamente em alguns minutos',
			504: 'Tempo de resposta excedido. Tente novamente, se não obtiver sucesso contate um administrador',
		},
	},
};
