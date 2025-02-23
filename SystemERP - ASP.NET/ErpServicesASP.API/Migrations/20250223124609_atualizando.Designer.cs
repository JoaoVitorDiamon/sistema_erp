﻿// <auto-generated />
using System;
using ErpServicesASP.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ErpServicesASP.API.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250223124609_atualizando")]
    partial class atualizando
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            MySqlModelBuilderExtensions.AutoIncrementColumns(modelBuilder);

            modelBuilder.Entity("ErpServicesASP.API.Model.CargoModel", b =>
                {
                    b.Property<int>("idCargo")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("idCargo"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("idCargo");

                    b.ToTable("Cargos");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.EmpresaModel", b =>
                {
                    b.Property<int>("idEmpresa")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("idEmpresa"));

                    b.Property<string>("CNPJ")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("DonoId")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("NomeFantasia")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("TipoDeEmpresaidTipoDeEmpresa")
                        .HasColumnType("int");

                    b.HasKey("idEmpresa");

                    b.HasIndex("DonoId");

                    b.HasIndex("TipoDeEmpresaidTipoDeEmpresa");

                    b.ToTable("Empresas");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.MembroModel", b =>
                {
                    b.Property<int>("idMembro")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("idMembro"));

                    b.Property<string>("AssociacaoPublica")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("CEP")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("CargoidCargo")
                        .HasColumnType("int");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("EmpresaidEmpresa")
                        .HasColumnType("int");

                    b.Property<string>("Genero")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("NaturezaMembro")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("idMembro");

                    b.HasIndex("CargoidCargo");

                    b.HasIndex("EmpresaidEmpresa");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Membros");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.TipoDeEmpresaModel", b =>
                {
                    b.Property<int>("idTipoDeEmpresa")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("idTipoDeEmpresa"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("idTipoDeEmpresa");

                    b.ToTable("TipoDeEmpresa");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.UsuarioModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime>("DataCriacao")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.ValidacaoEmailModel", b =>
                {
                    b.Property<int>("idValidacaoEmail")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    MySqlPropertyBuilderExtensions.UseMySqlIdentityColumn(b.Property<int>("idValidacaoEmail"));

                    b.Property<string>("Codigo")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.Property<bool>("Validado")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("idValidacaoEmail");

                    b.HasIndex("UsuarioId");

                    b.ToTable("ValidacoesDeEmails");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.EmpresaModel", b =>
                {
                    b.HasOne("ErpServicesASP.API.Model.UsuarioModel", "Dono")
                        .WithMany()
                        .HasForeignKey("DonoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ErpServicesASP.API.Model.TipoDeEmpresaModel", "TipoDeEmpresa")
                        .WithMany()
                        .HasForeignKey("TipoDeEmpresaidTipoDeEmpresa")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Dono");

                    b.Navigation("TipoDeEmpresa");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.MembroModel", b =>
                {
                    b.HasOne("ErpServicesASP.API.Model.CargoModel", "Cargo")
                        .WithMany()
                        .HasForeignKey("CargoidCargo")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ErpServicesASP.API.Model.EmpresaModel", "Empresa")
                        .WithMany()
                        .HasForeignKey("EmpresaidEmpresa")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ErpServicesASP.API.Model.UsuarioModel", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cargo");

                    b.Navigation("Empresa");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("ErpServicesASP.API.Model.ValidacaoEmailModel", b =>
                {
                    b.HasOne("ErpServicesASP.API.Model.UsuarioModel", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");
                });
#pragma warning restore 612, 618
        }
    }
}
