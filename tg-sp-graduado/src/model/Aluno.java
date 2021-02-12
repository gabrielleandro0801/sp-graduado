package model;

public class Aluno extends Pessoa{
	private int idAluno;
	private int idPadrinho;
	private int idCursoFaculdade;
	private String descricao;
	
	public int getIdAluno() {
		return idAluno;
	}
	public void setIdAluno(int idAluno) {
		this.idAluno = idAluno;
	}
	
	public int getIdPadrinho() {
		return idPadrinho;
	}
	public void setIdPadrinho(int idPadrinho) {
		this.idPadrinho = idPadrinho;
	}
	
	public int getIdCursoFaculdade() {
		return idCursoFaculdade;
	}
	public void setIdCursoFaculdade(int idCursoFaculdade) {
		this.idCursoFaculdade = idCursoFaculdade;
	}
	
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public Aluno(String nome, String email, String senha, double rendaMensal, long telCelular, String docCpfOuCnpj,
			int tipoPessoa, String dataNascimento, String descricao) {
		super(nome, email, senha, rendaMensal, telCelular, docCpfOuCnpj, tipoPessoa, dataNascimento);
		this.descricao = descricao;
	}
	
	public Aluno(){}
	
	@Override
	public String toString() {
		return idAluno + " | " + nome + " | " + telCelular ;
	}

}
