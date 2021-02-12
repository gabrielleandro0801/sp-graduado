package model;

public class Padrinho extends Pessoa{
	private int idPadrinho;
	private String motivos;
	
	public int getIdPadrinho() {
		return idPadrinho;
	}
	public void setIdPadrinho(int idPadrinho) {
		this.idPadrinho = idPadrinho;
	}
	
	public String getMotivos() {
		return motivos;
	}
	public void setMotivos(String motivos) {
		this.motivos = motivos;
	}
	
	public Padrinho(String nome, String email, String senha, double rendaMensal, long telCelular,
			String docCpfOuCnpj, int tipoPessoa, String dataNascimento, String motivos) {
		super(nome, email, senha, rendaMensal, telCelular, docCpfOuCnpj, tipoPessoa, dataNascimento);
		this.motivos = motivos;
	}
	
	public Padrinho() {}
	
	@Override
	public String toString() {
		return "Padrinho [idPadrinho=" + idPadrinho + ", motivos=" + motivos + ", idPessoa=" + idPessoa + ", nome="
				+ nome + ", email=" + email + ", senha=" + senha + ", rendaMensal=" + rendaMensal + ", telCelular="
				+ telCelular + ", docCpfOuCnpj=" + docCpfOuCnpj + ", tipoPessoa=" + tipoPessoa + ", dataNascimento="
				+ dataNascimento + "]";
	}
	
}
