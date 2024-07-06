export enum messages {
  Unauthorized = 'Email ou palavra-passe errada!',
  Unauthenticated = 'Você precisa estar autenticado!',
  NotFoundUser = 'Usuário não encontrado',
  InternalServerError = "Ocorreu um erro interno. Por favor, tente novamente mais tarde.",
  BadRequestError = "Ups, este usuário já existe!",
  AlreadyFollowing = "Ups, você já esta seguindo este usuário",
  userNameAlreadyExists = "ops, nome do usuário já existe.",
  userNameNotfound = "ops, usuário não encontrado.",
  userAldreadyExists = "ops, usuário já existe.",
  InsufficientPermissions = "Permissões insuficientes para acessar este recurso.",
  invalidEmail = 'Email inválido',
  postNotfound = 'Artigo não encontrado',
  commentNotFound ="Comentário não encontrado."
}
