package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.Aluno;
import model.Faculdade;

public class FaculdadeDao {
	ResultSet rs;
	
	public ArrayList<Faculdade> buscar(){
		String SQL_BUSCAFACULDADES = "select * from faculdade;";
		
		ArrayList<Faculdade> lista = new ArrayList<Faculdade>();
		try(Connection conexao = ConnectionFactory.getConnection();
		    PreparedStatement st = conexao.prepareStatement(SQL_BUSCAFACULDADES)){
			rs = st.executeQuery();
	        
			while (rs.next()) {
				Faculdade linha = new Faculdade();
	            linha.setIdFaculdade(rs.getInt(1));
	            linha.setNomeFaculdade(rs.getString(2));
	            linha.setCidade(rs.getString(3));
	            
	            lista.add(linha);
	        }
		}catch(SQLException e){
			e.printStackTrace();
		}
		return lista;
              
    }
}
