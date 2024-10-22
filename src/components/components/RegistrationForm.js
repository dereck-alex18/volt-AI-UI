import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="flex items-center mb-8">
        <FontAwesomeIcon icon={faUser} size="2x" className="text-white mr-3" />
        <h1 className="text-4xl font-bold" style={{ fontFamily: 'Lexend Deca' }}>
          <span className="text-green-400">Volt</span>
          <span className="text-white">AI</span>
        </h1>
      </div>

      <form className="w-80 bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="text-white block mb-2">Email</label>
        <div className="flex items-center bg-white rounded-md p-2 mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
          <input type="email" placeholder="First Text Value" className="w-full outline-none" />
        </div>

        <label className="text-white block mb-2">CPF</label>
        <div className="flex items-center bg-white rounded-md p-2 mb-4">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
          <input type="text" placeholder="First Text Value" className="w-full outline-none" />
        </div>

        <label className="text-white block mb-2">Telefone</label>
        <div className="flex items-center bg-white rounded-md p-2 mb-4">
          <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
          <input type="tel" placeholder="First Text Value" className="w-full outline-none" />
        </div>

        <label className="text-white block mb-2">Senha</label>
        <div className="flex items-center bg-white rounded-md p-2 mb-4">
          <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
          <input type="password" placeholder="Senha" className="w-full outline-none" />
        </div>

        <label className="text-white block mb-2">Repita Senha</label>
        <div className="flex items-center bg-white rounded-md p-2 mb-4">
          <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
          <input type="password" placeholder="senha" className="w-full outline-none" />
        </div>

        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <label className="text-white">Termos de Uso</label>
        </div>

        <button className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-500">
          Criar
        </button>

        <div className="text-center mt-4">
          <p className="text-white">Já possui conta?</p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
