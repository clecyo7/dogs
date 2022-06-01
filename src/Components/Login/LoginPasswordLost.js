import React from 'react'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginPasswordLost = () => {
  return (
    <section>
      <h1 className="title">Perdeu a Senha</h1>
      <Input label="Email / Usuário" type="email" name="email" />
      <Button>Enviar Email</Button>
    </section>
  )
}

export default LoginPasswordLost