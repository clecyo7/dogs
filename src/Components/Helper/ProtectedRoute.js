import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext'

const ProtectedRoute = ({ children }) => {
    const { login } = React.useContext(UserContext); // recuperar os dados do login do usuario
    return login ? children : <Navigate to="/login" />; // caso esteja logado irá redireciona para página especifica.
}

export default ProtectedRoute