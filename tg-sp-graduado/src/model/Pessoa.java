package model;

public class Pessoa {
	protected int idPessoa;
	protected String nome;
	protected String email;
	protected String senha;
	protected double rendaMensal;
	protected long telCelular;
	protected String docCpfOuCnpj;
	protected int tipoPessoa; //1 - Padrinho | 2 - Aluno
	protected String dataNascimento;
	
	public int getIdPessoa() {
		return idPessoa;
	}
	public void setIdPessoa(int idPessoa) {
		this.idPessoa = idPessoa;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSenha() {
		return senha;
	}	
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public double getRendaMensal() {
		return rendaMensal;
	}
	public void setRendaMensal(double rendaMensal) {
		this.rendaMensal = rendaMensal;
	}
	
	public long getTelCelular() {
		return telCelular;
	}
	public void setTelCelular(long telCelular) {
		this.telCelular = telCelular;
	}
	
	public String getDocCpfOuCnpj() {
		return docCpfOuCnpj;
	}
	public void setDocCpfOuCnpj(String docCpfOuCnpj) {
		this.docCpfOuCnpj = docCpfOuCnpj;
	}
	
	public int getTipoPessoa() {
		return tipoPessoa;
	}
	public void setTipoPessoa(int tipoPessoa) {
		this.tipoPessoa = tipoPessoa;
	}
	
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	
	public Pessoa(String nome, String email, String senha, double rendaMensal, long telCelular,
			String docCpfOuCnpj, int tipoPessoa, String dataNascimento) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.rendaMensal = rendaMensal;
		this.telCelular = telCelular;
		this.docCpfOuCnpj = docCpfOuCnpj;
		this.tipoPessoa = tipoPessoa;
		this.dataNascimento = dataNascimento;
	}
	
	public Pessoa() {
		super();
	}
	
	
	
}
