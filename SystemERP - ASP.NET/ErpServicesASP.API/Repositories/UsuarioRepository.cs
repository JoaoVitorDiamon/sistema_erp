﻿using ErpServicesASP.API.Data;
using ErpServicesASP.API.Dto;
using ErpServicesASP.API.Model;
using ErpServicesASP.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ErpServicesASP.API.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly AppDbContext _context;
        public UsuarioRepository(AppDbContext context) { _context = context; }
        public async Task<UsuarioModel?> CriarUsuario(UsuarioCreateDto novoUsuario)
        {
            var usuario = new UsuarioModel(
                novoUsuario.Name,
                novoUsuario.CPF,
                novoUsuario.Telefone,
                novoUsuario.Email,
                novoUsuario.Genero,
                novoUsuario.Senha,
                novoUsuario.CEP,
                novoUsuario.Endereco,
                novoUsuario.DataNascimento,
                novoUsuario.AssociacaoPublica
                );
            await _context.Usuarios.AddAsync(usuario);
            await _context.SaveChangesAsync();
            return usuario;
        }

        public async Task<bool> UsuarioJaExiste(UsuarioCreateDto novoUsuario)
        {
            var emailCadastrado = await _context.Usuarios.FirstOrDefaultAsync(usuario => novoUsuario.Email == usuario.Email);
            var cpfCadastrado = await _context.Usuarios.FirstOrDefaultAsync(usuario => novoUsuario.CPF == usuario.CPF);
            if(emailCadastrado != null || cpfCadastrado != null)
            {
                return true;
            }
            return false;
        }

        public async Task<List<UsuarioModel>> DeletarUsuario(UsuarioModel usuario)
        {
            _context.Remove(usuario);
            await _context.SaveChangesAsync();
            return await ListarUsuarios();
        }

        public async Task<UsuarioModel?> GetUsuarioPorId(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            return usuario;
        }

        public async Task<List<UsuarioModel>> ListarUsuarios()
        {
            var lista = await _context.Usuarios.Join(
                _context.ValidacoesDeEmails.Where(val => val.Validado == true),
                usuario => usuario,
                validacoes => validacoes.Usuario,
                (usuario, validacoes) => usuario).ToListAsync();
            return lista;
        }
    }
}
