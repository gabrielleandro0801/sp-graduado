package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import model.Padrinho;

public class PadrinhoDao {
	ResultSet rs, rs2;
	
	public int inserirPadrinho(Padrinho padrinho) {
		int resultado = 0;
		String SQL_INSERE_PESSOA_PADRINHO = "INSERT INTO pessoa (nome, email, senha, telCelular, docCpfOuCnpj, rendaMensal, tipoPessoa, dataNascimento) "
				+ "VALUES (?, ?, ?, ?, ?, ?, 2, ?);";
		try(Connection conexao = ConnectionFactory.getConnection();
				PreparedStatement st = conexao.prepareStatement(SQL_INSERE_PESSOA_PADRINHO)){
			st.setString(1, padrinho.getNome());
			st.setString(2, padrinho.getEmail());
			st.setString(3, padrinho.getSenha());
			st.setLong(4, padrinho.getTelCelular());
			st.setString(5, padrinho.getDocCpfOuCnpj());
			st.setDouble(6, padrinho.getRendaMensal());
			st.setString(7, padrinho.getDataNascimento());
			resultado = st.executeUpdate();
		}catch(SQLException e) {
			e.printStackTrace();
		}
		
		String SQL_INSERE_PADRINHO = "INSERT INTO padrinho (motivos, idPessoa) "
				+ "VALUES (?, (SELECT MAX(idPessoa) FROM pessoa));";
		try(Connection conexao = ConnectionFactory.getConnection();
				PreparedStatement st = conexao.prepareStatement(SQL_INSERE_PADRINHO)){
			st.setString(1, padrinho.getMotivos());
			resultado = st.executeUpdate();	
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return resultado;
	}
	
	public Padrinho logar(String login, String senha) {
		String SQL_BUSCA_PADRINHO = "select P.idPessoa, P.nome, P.email, P.senha, P.telCelular, P.docCpfOuCnpj, P.rendaMensal, P.tipoPessoa, P.dataNascimento, PA.idPadrinho, PA.motivos " + 
				"from pessoa P INNER JOIN padrinho PA on P.idPessoa = PA.idPessoa where P.email = '" + login + "' and P.senha = '" + senha + "' and P.tipoPessoa = 2;";
		Padrinho padrinho = new Padrinho();
		try(Connection conexao = ConnectionFactory.getConnection();
			PreparedStatement st = conexao.prepareStatement(SQL_BUSCA_PADRINHO)){
			rs = st.executeQuery();
			if(rs.next()){
				padrinho.setIdPessoa(rs.getInt(1));
				padrinho.setNome(rs.getString(2));
				padrinho.setEmail(rs.getString(3));
				padrinho.setSenha(rs.getString(4));
				padrinho.setTelCelular(rs.getLong(5));
				padrinho.setDocCpfOuCnpj(rs.getString(6));
				padrinho.setRendaMensal(rs.getDouble(7));
				padrinho.setTipoPessoa(rs.getInt(8));
				padrinho.setDataNascimento(rs.getString(9));
				padrinho.setIdPadrinho(rs.getInt(10));
				padrinho.setMotivos(rs.getString(11));
			}
		}catch(SQLException e){
			e.printStackTrace();
		}
		
		return padrinho;
	}

	public int realizarApadrinhamento(int idPadrinho, int idAluno) {
		int resultado = 0;
		String SQL_REALIZA_APADRINHAMENTO = "UPDATE aluno SET idPadrinho = ? where idAluno = ?;";
		try(Connection conexao = ConnectionFactory.getConnection();
			PreparedStatement st = conexao.prepareStatement(SQL_REALIZA_APADRINHAMENTO)){
			System.out.println("PADRINHO:" + idPadrinho + " ALUNO: " + idAluno);
			st.setInt(1, idPadrinho);
			st.setInt(2, idAluno);
			resultado = st.executeUpdate();
			return resultado;
		}catch(SQLException e) {
			e.printStackTrace();
		}
		return resultado;
	}
}
