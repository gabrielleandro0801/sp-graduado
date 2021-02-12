package model;

public class AlunoCompleto {
	private int idAluno; 
	private String nome; 
	private Long telCelular; 
	private String descricao;  
	private String nomeCurso;
	private String nomeFaculdade;
	private String turno; 
	private int semestres; 
	private String modalidade;
	
	public int getIdAluno() {
		return idAluno;
	}
	public void setIdAluno(int idAluno) {
		this.idAluno = idAluno;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Long getTelCelular() {
		return telCelular;
	}
	public void setTelCelular(Long telCelular) {
		this.telCelular = telCelular;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getNomeCurso() {
		return nomeCurso;
	}
	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	public String getNomeFaculdade() {
		return nomeFaculdade;
	}
	public void setNomeFaculdade(String nomeFaculdade) {
		this.nomeFaculdade = nomeFaculdade;
	}
	public String getTurno() {
		return turno;
	}
	public void setTurno(String turno) {
		this.turno = turno;
	}
	public int getSemestres() {
		return semestres;
	}
	public void setSemestres(int semestres) {
		this.semestres = semestres;
	}
	public String getModalidade() {
		return modalidade;
	}
	public void setModalidade(String modalidade) {
		this.modalidade = modalidade;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
		result = prime * result + idAluno;
		result = prime * result + ((modalidade == null) ? 0 : modalidade.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((nomeCurso == null) ? 0 : nomeCurso.hashCode());
		result = prime * result + ((nomeFaculdade == null) ? 0 : nomeFaculdade.hashCode());
		result = prime * result + semestres;
		result = prime * result + ((telCelular == null) ? 0 : telCelular.hashCode());
		result = prime * result + ((turno == null) ? 0 : turno.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AlunoCompleto other = (AlunoCompleto) obj;
		if (descricao == null) {
			if (other.descricao != null)
				return false;
		} else if (!descricao.equals(other.descricao))
			return false;
		if (idAluno != other.idAluno)
			return false;
		if (modalidade == null) {
			if (other.modalidade != null)
				return false;
		} else if (!modalidade.equals(other.modalidade))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (nomeCurso == null) {
			if (other.nomeCurso != null)
				return false;
		} else if (!nomeCurso.equals(other.nomeCurso))
			return false;
		if (nomeFaculdade == null) {
			if (other.nomeFaculdade != null)
				return false;
		} else if (!nomeFaculdade.equals(other.nomeFaculdade))
			return false;
		if (semestres != other.semestres)
			return false;
		if (telCelular == null) {
			if (other.telCelular != null)
				return false;
		} else if (!telCelular.equals(other.telCelular))
			return false;
		if (turno == null) {
			if (other.turno != null)
				return false;
		} else if (!turno.equals(other.turno))
			return false;
		return true;
	}
	
	
}
