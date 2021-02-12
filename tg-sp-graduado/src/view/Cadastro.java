package view;

import java.awt.Color;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import java.awt.Font;
import javax.swing.SwingConstants;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class Cadastro extends JFrame {
	
	private JPanel contentPane;
	
	public Cadastro() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 600, 490);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JButton btnCadPadrinho = new JButton("PADRINHO");
		btnCadPadrinho.setBackground(Color.WHITE);
		btnCadPadrinho.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnCadPadrinho.setForeground(new Color(0, 0, 0));
		btnCadPadrinho.setIcon(null);
		btnCadPadrinho.setContentAreaFilled(false);
		btnCadPadrinho.setOpaque(true);
		btnCadPadrinho.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				CadastroPadrinho cadastroPadrinho = new CadastroPadrinho();
				cadastroPadrinho.setLocationRelativeTo(null);
				dispose();
				cadastroPadrinho.setVisible(true);
			}
		});
		btnCadPadrinho.setBounds(315, 221, 110, 40);
		contentPane.add(btnCadPadrinho);
		
		JButton btnCadAluno = new JButton("ALUNO");
		btnCadAluno.setBackground(Color.WHITE);
		btnCadAluno.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnCadAluno.setForeground(new Color(0, 0, 0));
		btnCadAluno.setIcon(null);
		btnCadAluno.setContentAreaFilled(false);
		btnCadAluno.setOpaque(true);
		btnCadAluno.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				CadastroAluno cadastroAluno = new CadastroAluno();
				cadastroAluno.setLocationRelativeTo(null);
				dispose();
				cadastroAluno.setVisible(true);
			}
		});
		btnCadAluno.setBounds(167, 221, 110, 40);
		contentPane.add(btnCadAluno);
		
		JLabel lblCadastrarComo = new JLabel("CADASTRAR COMO");
		lblCadastrarComo.setFont(new Font("Tahoma", Font.BOLD, 21));
		lblCadastrarComo.setHorizontalAlignment(SwingConstants.CENTER);
		lblCadastrarComo.setForeground(Color.WHITE);
		lblCadastrarComo.setBounds(167, 173, 258, 40);
		contentPane.add(lblCadastrarComo);
		
		JButton btnVoltar = new JButton("VOLTAR");
		btnVoltar.setBackground(Color.WHITE);
		btnVoltar.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnVoltar.setForeground(new Color(0, 0, 0));
		btnVoltar.setIcon(null);
		btnVoltar.setContentAreaFilled(false);
		btnVoltar.setOpaque(true);
		btnVoltar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				TelaInicial telaInicial = new TelaInicial();
				telaInicial.setLocationRelativeTo(null);
				dispose();
				telaInicial.setVisible(true);
			}
		});
		btnVoltar.setBounds(241, 287, 110, 40);
		contentPane.add(btnVoltar);
		
		JLabel img = new JLabel("");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\cad.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		img.setBounds(0, 0, 600, 450);
		contentPane.add(img);
			
	}

}
