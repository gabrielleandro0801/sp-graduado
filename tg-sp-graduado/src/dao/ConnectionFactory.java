package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class ConnectionFactory {
	public static Connection getConnection() {
		try {
			return DriverManager.getConnection("jdbc:sqlite:sp_graduado.db");
		}
		catch(SQLException e){
			throw new RuntimeException(e);
		}
	}
	
	public static boolean executaSql(String sql) {
		try (Connection conn = getConnection();
             Statement stmt = conn.createStatement()) {
            return stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
            return false;
        }
	}
}
