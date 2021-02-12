package model;

public class Faculdade {
	private int idFaculdade;
	private String nomeFaculdade;
	private String cidade;
	
	public int getIdFaculdade() {
		return idFaculdade;
	}
	public void setIdFaculdade(int idFaculdade) {
		this.idFaculdade = idFaculdade;
	}
	
	public String getNomeFaculdade() {
		return nomeFaculdade;
	}
	public void setNomeFaculdade(String nomeFaculdade) {
		this.nomeFaculdade = nomeFaculdade;
	}
	
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	@Override
	public String toString() {
		return idFaculdade + " | " + nomeFaculdade + " | " + cidade;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Faculdade other = (Faculdade) obj;
		if (cidade == null) {
			if (other.cidade != null)
				return false;
		} else if (!cidade.equals(other.cidade))
			return false;
		if (idFaculdade != other.idFaculdade)
			return false;
		if (nomeFaculdade == null) {
			if (other.nomeFaculdade != null)
				return false;
		} else if (!nomeFaculdade.equals(other.nomeFaculdade))
			return false;
		return true;
	}
	
	
}
