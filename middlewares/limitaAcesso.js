const jwt = require('jsonwebtoken')

const getUserId = (bearer) => {
    // const token = authHeader.split(' ')[1]
    // const decoded = jwt.verify(token, process.env.APP_KEY)
    const token = bearer.replace('Bearer ', '');
    try {
        // Decodifique o token JWT
        const decodedToken = jwt.decode(token);
      
        if (decodedToken) {
          // O payload do token JWT está disponível em decodedToken
          return decodedToken.usuario.id;
        } else {
            throw new Error(JSON.stringify({
                status: 401,
                erros: "acesso negado"
            }))
        }
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
}

module.exports = getUserId