package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import model.CursoFaculdade;

public class CursoFaculdadeDao {
	ResultSet rs;
	
	public ArrayList<CursoFaculdade> buscar(int idFaculdade){
		String SQL_BUSCACURSOFACULDADE = "select CF.idCursoFaculdade, CU.nomeCurso, CF.semestres, CF.turno, CF.modalidade from curso_faculdade CF "
				+ "INNER JOIN curso CU on CF.idCurso = CU.idCurso where CF.idFaculdade = " + idFaculdade + " order by CF.idCursoFaculdade;\r\n" + 
				"";
		
		ArrayList<CursoFaculdade> lista = new ArrayList<CursoFaculdade>();
		try(Connection conexao = ConnectionFactory.getConnection();
		    PreparedStatement st = conexao.prepareStatement(SQL_BUSCACURSOFACULDADE)){
			rs = st.executeQuery();
	        
			while (rs.next()) {
				CursoFaculdade linha = new CursoFaculdade();
	            linha.setIdCursoFaculdade(rs.getInt(1));
	            linha.setNomeCurso(rs.getString(2));
	            linha.setSemestres(rs.getInt(3));
	            int turno = rs.getInt(4);
	            if(turno == 1) {
	            	linha.setTurno("Matutino");
	            }else if(turno == 2) {
	            	linha.setTurno("Vespertino");
	            }else {
	            	linha.setTurno("Noturno");
	            }
	            
	            int modalidade = rs.getInt(5);
	            if(modalidade == 1) {
	            	linha.setModalidade("Presencial");
	            }else {
	            	linha.setModalidade("EAD");
	            }
	            
	            
	            lista.add(linha);
	        }
		}catch(SQLException e){
			e.printStackTrace();
		}
		return lista;
              
    }
}
