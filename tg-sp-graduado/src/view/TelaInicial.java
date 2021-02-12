package view;

import java.awt.EventQueue;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JLabel;
import java.awt.Font;
import java.awt.Color;
import javax.swing.SwingConstants;
import javax.swing.ImageIcon;

import util.Estilo;

public class TelaInicial extends JFrame {

	private JPanel contentPane;

	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					TelaInicial frame = new TelaInicial();
					frame.setLocationRelativeTo(null);
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
	
	public TelaInicial() {
		//Coloca o estilo Windows nos Frames
		Estilo.setaEstilo();

		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 600, 480);
		contentPane = new JPanel();
		contentPane.setForeground(new Color(102, 102, 102));
		contentPane.setBackground(new Color(0, 0, 0));
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JButton btnLogin = new JButton("LOGIN");
		btnLogin.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnLogin.setForeground(Color.BLACK);
		btnLogin.setIcon(null);
		btnLogin.setBackground(Color.WHITE);
		btnLogin.setContentAreaFilled(false);
		btnLogin.setOpaque(true);
		btnLogin.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				Login login = new Login();
				dispose();
				login.setLocationRelativeTo(null);
				login.setVisible(true);
			}
		});
		btnLogin.setBounds(167, 272, 110, 40);
		contentPane.add(btnLogin);
		
		JButton btnEntrar = new JButton("CADASTRO");
		btnEntrar.setForeground(new Color(0, 0, 0));
		btnEntrar.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnEntrar.setContentAreaFilled(false);
		btnEntrar.setOpaque(true);
		btnEntrar.setBackground(Color.WHITE);
		btnEntrar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Cadastro cadastro = new Cadastro();
				cadastro.setLocationRelativeTo(null);
				dispose();
				cadastro.setVisible(true);
			}
		});
		btnEntrar.setBounds(315, 272, 110, 40);
		contentPane.add(btnEntrar);
		
		JButton btnAjuda = new JButton("AJUDA");
		btnAjuda.setBackground(Color.WHITE);
		btnAjuda.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnAjuda.setForeground(new Color(0, 0, 0));
		btnAjuda.setIcon(null);
		btnAjuda.setContentAreaFilled(false);
		btnAjuda.setOpaque(true);
		btnAjuda.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				Ajuda ajuda = new Ajuda();
				ajuda.setLocationRelativeTo(null);
				dispose();
				ajuda.setVisible(true);
			}
		});
		btnAjuda.setBounds(241, 338, 110, 40);
		contentPane.add(btnAjuda);
		
		JLabel img = new JLabel("");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\inicio.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		img.setBounds(0, 0, 600, 450);
		contentPane.add(img);
		
	}
}
