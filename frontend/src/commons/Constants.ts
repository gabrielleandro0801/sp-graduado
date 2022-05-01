export default {
  REGEX: {
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
  },
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
    VALIDATION: {
      EMAIL: 'O formato email informado é inválido!',
      PASSWORD: 'A senha deve conter ao menos 8 caracteres e pelomenos um caracter especial e uma letra maiúscula',
    },
  },
  THEMES: {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  },
};