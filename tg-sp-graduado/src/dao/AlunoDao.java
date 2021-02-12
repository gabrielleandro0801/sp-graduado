package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Aluno;
import model.AlunoCompleto;

public class AlunoDao {
	ResultSet rs;
	
	public int inserirAluno(Aluno aluno) {
		int resultado = 0;
		String SQL_INSERE_PESSOA_ALUNO = "INSERT INTO pessoa (nome, email, senha, telCelular, docCpfOuCnpj, rendaMensal, tipoPessoa, dataNascimento) "
				+ "VALUES (?, ?, ?, ?, ?, ?, 1, ?);";
		try(Connection conexao = ConnectionFactory.getConnection();
				PreparedStatement st = conexao.prepareStatement(SQL_INSERE_PESSOA_ALUNO)){
			st.setString(1, aluno.getNome());
			st.setString(2, aluno.getEmail());
			st.setString(3, aluno.getSenha());
			st.setLong(4, aluno.getTelCelular());
			st.setString(5, aluno.getDocCpfOuCnpj());
			st.setDouble(6, aluno.getRendaMensal());
			st.setString(7, aluno.getDataNascimento());
			resultado = st.executeUpdate();
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		String SQL_INSERE_aluno = "INSERT INTO aluno (idPadrinho, idCursoFaculdade, descricao, idPessoa) "
				+ "VALUES (0, 0, ?, (SELECT MAX(idPessoa) FROM pessoa));";
		try(Connection conexao = ConnectionFactory.getConnection();
				PreparedStatement st = conexao.prepareStatement(SQL_INSERE_aluno)){
			st.setString(1, aluno.getDescricao());
			resultado = st.executeUpdate();	
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return resultado;
	}
	
	public Aluno logar(String login, String senha) {
		String SQL_BUSCAPESSOA = "select P.idPessoa, P.nome, P.email, P.senha, P.telCelular, P.docCpfOuCnpj, P.rendaMensal, P.tipoPessoa, P.dataNascimento, A.idAluno, A.idPadrinho, A.idCursoFaculdade, " +
		" A.descricao from pessoa P INNER JOIN aluno A on P.idPessoa = A.idPessoa where P.email = '" + login + "' and P.senha = '" + senha + "' and P.tipoPessoa = 1;";
		Aluno aluno = new Aluno();
		try(Connection conexao = ConnectionFactory.getConnection();
			PreparedStatement st = conexao.prepareStatement(SQL_BUSCAPESSOA)){
			rs = st.executeQuery();
			
			if(rs.next()){		
				aluno.setIdPessoa(rs.getInt(1));
				aluno.setNome(rs.getString(2));
				aluno.setEmail(rs.getString(3));
				aluno.setSenha(rs.getString(4));
				aluno.setTelCelular(rs.getLong(5));
				aluno.setDocCpfOuCnpj(rs.getString(6));
				aluno.setRendaMensal(rs.getFloat(7));
				aluno.setTipoPessoa(rs.getInt(8));
				aluno.setDataNascimento(rs.getString(9));
				aluno.setIdAluno(rs.getInt(10));
				aluno.setIdPadrinho(rs.getInt(11));
				aluno.setIdCursoFaculdade(rs.getInt(12));
			}			
		}catch(SQLException e){
			e.printStackTrace();
		}
		return aluno;
	}

	public int atribuiCurso(int idAluno, int idCursoFaculdade) {
		int resultado = 0;
		String SQL_ATRIBUI_CURSO = "update aluno set idCursoFaculdade = ?  where idAluno = ?;";
		try(Connection conexao = ConnectionFactory.getConnection();
			PreparedStatement st = conexao.prepareStatement(SQL_ATRIBUI_CURSO)){
			st.setInt(1, idCursoFaculdade);
			st.setInt(2, idAluno);
			resultado = st.executeUpdate();
		}catch(SQLException e) {
			e.printStackTrace();
		}
	
	return resultado;
	}

	public ArrayList<Aluno> buscar(){
		String SQL_BUSCAALUNOS = "select A.idAluno, P.nome, P.telCelular " +
				"from pessoa P INNER JOIN aluno A on A.idPessoa = P.idPessoa where A.idPadrinho = 0 and A.idCursoFaculdade != 0;";
		
		ArrayList<Aluno> lista = new ArrayList<Aluno>();
		try(Connection conexao = ConnectionFactory.getConnection();
		    PreparedStatement st = conexao.prepareStatement(SQL_BUSCAALUNOS)){
			rs = st.executeQuery();
	        
			while(rs.next()) {
	        	Aluno linha = new Aluno();
	            linha.setIdAluno(rs.getInt(1));
	            linha.setNome(rs.getString(2));
	            linha.setTelCelular(rs.getLong(3));
	        	
	        	lista.add(linha);
	        }
		}catch(SQLException e){
			e.printStackTrace();
		}
		return lista;     
    }
	
	public ArrayList<Aluno> buscarMeusAlunos(int idPadrinho){
		String SQL_BUSCA_MEUS_ALUNOS = "select A.idAluno, P.nome, P.telCelular " +
				"from pessoa P INNER JOIN aluno A on A.idPessoa = P.idPessoa where A.idPadrinho = " + idPadrinho + " and A.idCursoFaculdade != 0;";
		
		ArrayList<Aluno> lista = new ArrayList<Aluno>();
		try(Connection conexao = ConnectionFactory.getConnection();
		    PreparedStatement st = conexao.prepareStatement(SQL_BUSCA_MEUS_ALUNOS)){
			rs = st.executeQuery();
	        
			while(rs.next()) {
	        	Aluno linha = new Aluno();
	            linha.setIdAluno(rs.getInt(1));
	            linha.setNome(rs.getString(2));
	            linha.setTelCelular(rs.getLong(3));
	        	
	        	lista.add(linha);
	        }
		}catch(SQLException e){
			e.printStackTrace();
		}
		return lista;     
    }
	
	public AlunoCompleto buscarAluno(int idAluno){
			String SQL_BUSCA_ALUNO = "select A.idAluno, P.nome, P.telCelular, A.descricao, C. nomeCurso, F.nomeFaculdade, CF.turno, CF.semestres, CF.modalidade\r\n" + 
					"from pessoa P INNER JOIN aluno A  INNER JOIN curso_faculdade CF INNER JOIN faculdade F INNER JOIN curso C  on A.idPessoa = P.idPessoa\r\n" + 
					"where A.idPadrinho = 0 and CF.idCursoFaculdade = A.idCursoFaculdade and CF.idFaculdade = F.idFaculdade and CF.idCurso = C.idCurso and idAluno = " + idAluno + "; ";
		
		AlunoCompleto aluno = new AlunoCompleto();
		try(Connection conexao = ConnectionFactory.getConnection();
		    PreparedStatement st = conexao.prepareStatement(SQL_BUSCA_ALUNO)){
			rs = st.executeQuery();
	        
			if (rs.next()) {
				aluno.setIdAluno((rs.getInt(1)));
				aluno.setNome(rs.getString(2));
				aluno.setTelCelular(rs.getLong(3));
				aluno.setDescricao(rs.getString(4));
				aluno.setNomeCurso(rs.getString(5));
				aluno.setNomeFaculdade(rs.getString(6));
				
				int turno = rs.getInt(7);
	            if(turno == 1) {
	            	aluno.setTurno("Matutino");
	            }else if(turno == 2) {
	            	aluno.setTurno("Vespertino");
	            }else {
	            	aluno.setTurno("Noturno");
	            }
	            
	            aluno.setSemestres((rs.getInt(8)));
	            
	            int modalidade = rs.getInt(9);
	            if(modalidade == 1) {
	            	aluno.setModalidade("Presencial");
	            }else {
	            	aluno.setModalidade("EAD");
	            }
				
				
				return aluno;
	        }
		}catch(SQLException e){
			e.printStackTrace();
		}
		return aluno;     
    }

}
