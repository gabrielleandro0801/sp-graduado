package model;

public class CursoFaculdade {
	private int idCursoFaculdade;
	private String nomeCurso;
	private int idFaculdade;
	private int semestres;
	private String turno;
	private String modalidade;
	
	public int getIdCursoFaculdade() {
		return idCursoFaculdade;
	}
	public void setIdCursoFaculdade(int idCursoFaculdade) {
		this.idCursoFaculdade = idCursoFaculdade;
	}
		
	public int getIdFaculdade() {
		return idFaculdade;
	}
	public void setIdFaculdade(int idFaculdade) {
		this.idFaculdade = idFaculdade;
	}
	
	public int getSemestres() {
		return semestres;
	}
	public void setSemestres(int semestres) {
		this.semestres = semestres;
	}
	
	public String getTurno() {
		return turno;
	}
	public void setTurno(String turno) {
		this.turno = turno;
	}
	
	public String getModalidade() {
		return modalidade;
	}
	public void setModalidade(String modalidade) {
		this.modalidade = modalidade;
	}
	
	public String getNomeCurso() {
		return nomeCurso;
	}
	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	
	@Override
	public String toString() {
		return idCursoFaculdade + " | " + nomeCurso + " | " + semestres + " semestres | " + turno + " | " + modalidade;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CursoFaculdade other = (CursoFaculdade) obj;
		if (idCursoFaculdade != other.idCursoFaculdade)
			return false;
		if (idFaculdade != other.idFaculdade)
			return false;
		if (modalidade != other.modalidade)
			return false;
		if (nomeCurso == null) {
			if (other.nomeCurso != null)
				return false;
		} else if (!nomeCurso.equals(other.nomeCurso))
			return false;
		if (semestres != other.semestres)
			return false;
		if (turno != other.turno)
			return false;
		return true;
	}
	
}
