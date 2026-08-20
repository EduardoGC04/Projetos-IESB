function validarLogin(usuario, senha) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      usuario === "aluno" && senha === "1234"
        ? resolve({ id: 1, nome: "Aluno Teste" })
        : reject(new Error("Usuário ou senha inválidos"));
    }, 800);
  });
}

function buscarPerfil(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ curso: "Mobile", turma: "A" }), 600);
  });
}
function buscarNotificacoes(usuarioId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Bem-vindo!", "Nova aula disponível"]), 500);
  });
}
async function entrar(usuario, senha) {
  try {
    console.log("Validando login...");
    const conta = await validarLogin(usuario, senha);
    console.log(`Login OK: ${conta.nome}`);
    const [perfil, notificacoes] = await Promise.all([
      buscarPerfil(conta.id),
      buscarNotificacoes(conta.id),
    ]);
    console.log("Perfil:", perfil);
    console.log("Notificações:", notificacoes);
  } catch (erro) {
    console.error("Não foi possível entrar:", erro.message);
  }
}
entrar("aluno", "1234");
