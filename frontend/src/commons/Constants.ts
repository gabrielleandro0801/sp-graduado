export default {
  GRADUATE: {
    MAX_INCOME_FAMILY: 3636,
    MIN_INCOME_FAMILY: 1,
  },
  REGEX: {
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    PHONE: /^[0-9]{8,11}$/,
    DATE: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    FLOAT: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
    DOCUMENT: {
      CPF: /^[0-9]{11,11}/,
      CNPJ: /^[0-9]{14,14}/,
    },
  },
  DATE: {
    ISO8601: 'yyyy-MM-ddTHH:mm:ss.SSS',
    BRAZILIAN: 'dd/MM/yyyy',
    US: 'yyyy-MM-dd',
    SP_TIMEZONE: 'America/Sao_Paulo',
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
      EMAIL: 'O formato do email informado é inválido. Exemplo: email@provider.com',
      PASSWORD: 'A senha deve conter ao menos 8 caracteres e pelo menos um caracter especial e uma letra maiúscula',
      CONFIRMATION_PASSWORD: 'A senha e a senha de confirmação devem ser idênticas',
      TYPE: 'Selecione pelo menos um tipo de registro para prosseguir',
      NAME: 'O nome informado é inválido. Deve conter pelo menos 10 caracteres',
      DOCUMENT_NUMBER: {
        CPF: 'O CPF informado é inválido. Ele é obrigatório para o cadastro',
        CNPJ: 'O CNPJ informado é inválido. Ele é obrigatório para o cadastro',
      },
      BIRTH_DATE: 'A data de nascimento é obrigatória. Selecione uma data',
      CONTACTS: {
        PHONE_NUMBER: 'O número de telefone é obrigatório e deve ser um telefone válido',
      },
      TERMS_AND_CONDITIONS: 'O aceite nos termos e condições deve ser feito para prosseguir com o cadastro',
      INCOME_FAMILY: 'Informe uma renda familiar válida',
      ABOUT:
        'A descrição sobre você é obrigatória e deve conter pelo menos 250 caracteres para prosseguir com o cadastro',
      COURSE: 'Selecione um curso para efetuar o cadastro',
      COLLEGE: 'Selecione uma faculdade para efetuar o cadastro',
    },
  },
  THEMES: {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  },
  ROUTING: {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    MENU: {
      GODFATHER: '/menu/godfather',
    },
  },
  TERMS_CONDITIONS: {
    GRADUATE:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    GODFATHER:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  },
  REGISTER_TYPE: {
    GRADUATE: 'Aluno',
    GODFATHER: 'Padrinho',
  },
  REGISTRATION_STEPS: [
    'Escolha o tipo de cadastro',
    'Informe alguns dados',
    'Termos e Condições',
    'Confirme seus dados',
  ],
};
