package view;

import java.awt.Color;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import java.awt.Font;
import javax.swing.SwingConstants;
import javax.swing.JTextField;
import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JPasswordField;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JRadioButton;

import dao.AlunoDao;
import dao.PadrinhoDao;
import model.Aluno;
import model.Padrinho;

public class Login extends JFrame {

	private JPanel contentPane;
	private JTextField txtLogin;
	private JPasswordField txtSenha;

	public Login() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 600, 490);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblNewLabel = new JLabel("LOGAR COMO");
		lblNewLabel.setForeground(Color.WHITE);
		lblNewLabel.setBounds(167, 162, 80, 20);
		contentPane.add(lblNewLabel);
		
		JRadioButton rdbtnAluno = new JRadioButton("Aluno");
		rdbtnAluno.setVerticalAlignment(SwingConstants.TOP);
		rdbtnAluno.setHorizontalAlignment(SwingConstants.RIGHT);
		rdbtnAluno.setForeground(Color.WHITE);
		rdbtnAluno.setOpaque(false);
		rdbtnAluno.setBounds(326, 162, 109, 23);
		contentPane.add(rdbtnAluno);
		
		JRadioButton rdbtnPadrinho = new JRadioButton("Padrinho");
		rdbtnPadrinho.setVerticalAlignment(SwingConstants.TOP);
		rdbtnPadrinho.setHorizontalAlignment(SwingConstants.RIGHT);
		rdbtnPadrinho.setContentAreaFilled(false);
		rdbtnPadrinho.setForeground(Color.WHITE);
		rdbtnPadrinho.setBounds(215, 162, 109, 23);
		contentPane.add(rdbtnPadrinho);
		
		ButtonGroup group = new ButtonGroup();
		group.add(rdbtnAluno);
		group.add(rdbtnPadrinho);		
		
		txtLogin = new JTextField();
		txtLogin.setBackground(Color.WHITE);
		txtLogin.setColumns(10);
		txtLogin.setBounds(254, 192, 181, 20);
		contentPane.add(txtLogin);
		
		JButton btnLogar = new JButton("LOGAR");
		btnLogar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String login = txtLogin.getText();
				String senha = new String(txtSenha.getPassword());	
				senha = senha.toLowerCase();
				
				if(rdbtnPadrinho.isSelected()) {
					Padrinho padrinho = new Padrinho();
					PadrinhoDao padrinhoDao = new PadrinhoDao();
					padrinho = padrinhoDao.logar(login, senha);
					
					if (padrinho.getIdPessoa() != 0) {
						JOptionPane.showMessageDialog(null, "Bem vindo(a), " + padrinho.getNome().toUpperCase() + "!", "Sucesso", JOptionPane.INFORMATION_MESSAGE);
						LadoPadrinho ladoPadrinho = new LadoPadrinho(padrinho);
						ladoPadrinho.setLocationRelativeTo(null);
						dispose();
						ladoPadrinho.setVisible(true);
						
					}else {
						JOptionPane.showMessageDialog(null, "Conta não cadastrada!", "Erro", JOptionPane.ERROR_MESSAGE);
						txtSenha.setText("");
						txtLogin.setText("");
					}
					
				}else if (rdbtnAluno.isSelected()){
					Aluno aluno = new Aluno();
					AlunoDao alunoDao = new AlunoDao();
					aluno = alunoDao.logar(login, senha);
					
					if (aluno.getIdPessoa() != 0) {
						JOptionPane.showMessageDialog(null, "Bem vindo(a), " + aluno.getNome().toUpperCase() + "!", "Sucesso", JOptionPane.INFORMATION_MESSAGE);
						LadoAluno ladoAluno = new LadoAluno(aluno);
						ladoAluno.setLocationRelativeTo(null);
						dispose();
						ladoAluno.setVisible(true);
					}else {
						JOptionPane.showMessageDialog(null, "Conta não cadastrada!", "Erro", JOptionPane.ERROR_MESSAGE);
						txtSenha.setText("");
						txtLogin.setText("");
					}
				}
			}
		});
		btnLogar.setBackground(Color.WHITE);
		btnLogar.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnLogar.setForeground(new Color(0, 0, 0));
		btnLogar.setIcon(null);
		btnLogar.setContentAreaFilled(false);
		btnLogar.setOpaque(true);
		btnLogar.setBounds(315, 312, 110, 40);
		contentPane.add(btnLogar);
		
		txtSenha = new JPasswordField();
		txtSenha.setBackground(Color.WHITE);
		txtSenha.setBounds(254, 238, 181, 20);
		contentPane.add(txtSenha);
		
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
				dispose();
				telaInicial.setLocationRelativeTo(null);
				telaInicial.setVisible(true);
			}
		});
		btnVoltar.setBounds(167, 312, 110, 40);
		contentPane.add(btnVoltar);
		
		JLabel lblLoginemail = new JLabel("LOGIN (e-mail)");
		lblLoginemail.setForeground(Color.WHITE);
		lblLoginemail.setHorizontalAlignment(SwingConstants.LEFT);
		lblLoginemail.setBounds(167, 192, 80, 20);
		contentPane.add(lblLoginemail);
		
		JLabel lblSenha = new JLabel("SENHA");
		lblSenha.setHorizontalAlignment(SwingConstants.LEFT);
		lblSenha.setForeground(Color.WHITE);
		lblSenha.setBounds(167, 238, 80, 20);
		contentPane.add(lblSenha);
		
		JLabel img = new JLabel("");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\login.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		img.setBounds(0, 0, 600, 450);
		contentPane.add(img);
		
		
	}
}
