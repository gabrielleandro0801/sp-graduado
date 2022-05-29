export default {
  MINIMUM_AGE: 17,
  GRADUATE: {
    MAX_INCOME_FAMILY: 3636,
    MIN_INCOME_FAMILY: 1,
  },
  GODFATHER: {
    MIN_INCOME_MONTHLY: 15000,
  },
  REGEX: {
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    PHONE: /^[0-9]{8,11}$/,
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
  METHOD: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
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
    BACKEND: 'SpGraduadoBackendException',
    UNEXPECTED: 'SpGraduadoUnexpectedException',
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
        CPF_CNPJ: 'O CPF/CNPJ informado é inválido. Ele é obrigatório para o cadastro',
      },
      BIRTH_DATE: 'Selecione uma data de nascimento válida',
      CONTACTS: {
        PHONE_NUMBER: 'O número de telefone é obrigatório e deve ser um telefone válido',
      },
      TERMS_AND_CONDITIONS: 'O aceite nos termos e condições deve ser feito para prosseguir com o cadastro',
      INCOME_FAMILY: 'Informe uma renda familiar válida',
      MONTHLY_INCOME: 'Informe uma renda mensal válida',
      ABOUT:
        'A descrição sobre você é obrigatória e deve conter no máximo 200 caracteres para prosseguir com o cadastro',
      COURSE: 'Selecione um curso para efetuar o cadastro',
      COLLEGE: 'Selecione uma faculdade para efetuar o cadastro',
    },
    BACKEND: {
      REGISTER: {
        DEFAULT: 'Não foi possível concluir o registro. Verifique os dados e tente novamente!',
      },
      PATRONIZE: {
        DEFAULT: 'Nào foi possível apadrinhar o graduando selecionado!',
        SUCCESS: 'Graduando apadrinhado com sucesso! Obrigado por colaborar com a causa!',
      },
      UNPATRONIZE: {
        DEFAULT: 'Nào foi possível desapadrinhar o graduando selecionado!',
        SUCCESS: 'Graduando desapadrinhado com sucesso! Esperamos tê-lo como padinho novamente!',
      },
      DELETE_ACCOUNT: {
        SUCCESS: 'Conta deletada com sucesso! Esperamos em breve, tê-lo como padrinho novamente!',
      },
    },
  },
  THEMES: {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  },
  ROUTING: {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: {
      SUCCESS: '/register/success',
      CREATE: '/register',
    },
    CONTACT: '/contact-us',
    MENU: {
      GODFATHER: '/menu/godfather',
    },
    PROFILE: {
      GODFATHER: '/profile/godfather',
    },
    FORGOT_PASSWORD: '/forgot-password',
  },
  TERMS_CONDITIONS: {
    GRADUATE:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
    GODFATHER:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  },
  REGISTER_TYPE: {
    GRADUATE: 'Graduando',
    GODFATHER: 'Padrinho',
  },
  REGISTRATION_STEPS: [
    'Escolha o tipo de cadastro',
    'Informe alguns dados',
    'Termos e Condições',
    'Confirme seus dados',
  ],
  PATH: {
    STUDENDS: {
      POST: '/v1/students',
      GET: '/v1/students',
      GET_BY_ID: '/v1/students/{studentId}',
      DELETE: '/v1/students/{studentId}',
      PUT: ' /v1/students/{studentId}',
    },
    SPONSORS: {
      POST: '/v1/sponsors',
      DELETE: '/v1/sponsors/{sponsorId}',
      PUT: '/v1/sponsors/{sponsorId}/sponsorize',
    },
    CATEGORIES: {
      GET: '/v1/categories',
    },
    COLLEGES: {
      GET: '/v1/colleges',
      GET_BY_ID: '/v1/colleges/{collegeId}',
    },
    LOGIN: {
      POST: '/v1/login',
    },
  },
  CONTACTS: [
    {
      email: 'alexandre.rocha3@fatec.sp.gov.br',
      name: 'Alexandre Souza Rocha',
    },
    {
      email: 'gabriel.santos231@fatec.sp.gov.br',
      name: 'Gabriel Espanhol Santos',
    },
    {
      email: 'gabriel.sousa17@fatec.sp.gov.br',
      name: 'Gabriel Leandro Santos Sousa',
    },
    {
      email: 'gabrielle.santana@fatec.sp.gov.br',
      name: 'Gabrielle Nunes de Santana',
    },
    {
      email: 'luiz.silva284@fatec.sp.gov.br',
      name: 'Luiz Guilherme da Silva',
    },
    {
      email: 'matheus.silva263@fatec.sp.gov.br',
      name: 'Matheus Carpeggiane Montenegro da Silva',
    },
  ],
};
