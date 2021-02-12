package view;

import java.awt.Color;
import java.text.ParseException;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.text.MaskFormatter;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.swing.JFormattedTextField;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import java.awt.Font;
import javax.swing.SwingConstants;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JPasswordField;
import javax.swing.JTextArea;

import model.Aluno;
import util.ValidaCPF;

public class CadastroAluno extends JFrame {

	private JPanel contentPane;
	private JTextField txtNome;
	MaskFormatter cpf, nasc, tel, renda;
	private JTextField txtEmail;
	private JPasswordField txtSenha;
	private JTextField txtRenda;

	public CadastroAluno() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 499, 635);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		try {
			cpf = new MaskFormatter("###.###.###-##");
			cpf.setValidCharacters("0123456789");
			
			nasc = new MaskFormatter("##/##/####");
			nasc.setValidCharacters("0123456789");
			
			tel = new MaskFormatter("(##)#####-####");
			tel.setValidCharacters("0123456789");	
		}catch(ParseException e) {
			e.printStackTrace();
		}
		
		JLabel lblNome = new JLabel("NOME");
		lblNome.setHorizontalAlignment(SwingConstants.LEFT);
		lblNome.setForeground(Color.WHITE);
		lblNome.setBounds(62, 187, 86, 20);
		contentPane.add(lblNome);
		
		JLabel lblNomeObri = new JLabel("*");
		lblNomeObri.setForeground(Color.RED);
		lblNomeObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblNomeObri.setBounds(40, 187, 20, 20);
		contentPane.add(lblNomeObri);
		
		txtNome = new JTextField();
		txtNome.setBounds(153, 187, 181, 20);
		contentPane.add(txtNome);
		txtNome.setColumns(10);
		
		JLabel lblCpf = new JLabel("CPF");
		lblCpf.setForeground(new Color(255, 255, 255));
		lblCpf.setBounds(62, 217, 86, 20);
		contentPane.add(lblCpf);
		
		JLabel lblCpfObri = new JLabel("*");
		lblCpfObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblCpfObri.setForeground(Color.RED);
		lblCpfObri.setBounds(40, 220, 20, 20);
		contentPane.add(lblCpfObri);
		
		JFormattedTextField txtCpf = new JFormattedTextField(cpf);
		txtCpf.setBounds(153, 218, 181, 20);
		contentPane.add(txtCpf);
		
		JLabel lblTelefone = new JLabel("TEL. CELULAR");
		lblTelefone.setForeground(new Color(255, 255, 255));
		lblTelefone.setBounds(62, 248, 86, 20);
		contentPane.add(lblTelefone);
		
		JLabel lblTelObri = new JLabel("*");
		lblTelObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblTelObri.setForeground(Color.RED);
		lblTelObri.setBounds(40, 248, 20, 20);
		contentPane.add(lblTelObri);
		
		JFormattedTextField txtTelefone = new JFormattedTextField(tel);
		txtTelefone.setBounds(153, 249, 181, 20);
		contentPane.add(txtTelefone);
		
		JLabel lblNascimento = new JLabel("DATA NASC.");
		lblNascimento.setForeground(new Color(255, 255, 255));
		lblNascimento.setBounds(62, 279, 86, 20);
		contentPane.add(lblNascimento);
		
		JLabel lblNascObri = new JLabel("*");
		lblNascObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblNascObri.setForeground(Color.RED);
		lblNascObri.setBounds(40, 279, 20, 20);
		contentPane.add(lblNascObri);
		
		JFormattedTextField txtDataNasc = new JFormattedTextField(nasc);
		txtDataNasc.setHorizontalAlignment(SwingConstants.LEFT);
		txtDataNasc.setBounds(153, 280, 181, 20);
		contentPane.add(txtDataNasc);
		
		JLabel lblRendaFamiliar = new JLabel("RENDA (R$)");
		lblRendaFamiliar.setForeground(new Color(255, 255, 255));
		lblRendaFamiliar.setBounds(62, 310, 86, 20);
		contentPane.add(lblRendaFamiliar);
		
		JLabel lblRendaObri = new JLabel("*");
		lblRendaObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblRendaObri.setForeground(Color.RED);
		lblRendaObri.setBounds(40, 310, 20, 20);
		contentPane.add(lblRendaObri);
		
		JFormattedTextField txtRenda = new JFormattedTextField();
		txtRenda.setHorizontalAlignment(SwingConstants.LEFT);
		txtRenda.setColumns(10);
		txtRenda.setBounds(153, 311, 181, 20);
		contentPane.add(txtRenda);
		
		JLabel lblCadAluno = new JLabel("Cadastro Aluno");
		lblCadAluno.setForeground(new Color(255, 255, 255));
		lblCadAluno.setHorizontalAlignment(SwingConstants.CENTER);
		lblCadAluno.setFont(new Font("Tahoma", Font.BOLD, 16));
		lblCadAluno.setBounds(314, 11, 165, 23);
		contentPane.add(lblCadAluno);
		
		txtEmail = new JTextField();
		txtEmail.setColumns(10);
		txtEmail.setBounds(153, 460, 181, 20);
		contentPane.add(txtEmail);
		
		JLabel lblDadosPessoais = new JLabel("Dados Pessoais");
		lblDadosPessoais.setForeground(new Color(255, 255, 255));
		lblDadosPessoais.setHorizontalAlignment(SwingConstants.CENTER);
		lblDadosPessoais.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblDadosPessoais.setBounds(153, 160, 165, 23);
		contentPane.add(lblDadosPessoais);
		
		JLabel lblDadosLogin = new JLabel("Dados para Login");
		lblDadosLogin.setForeground(new Color(255, 255, 255));
		lblDadosLogin.setHorizontalAlignment(SwingConstants.CENTER);
		lblDadosLogin.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblDadosLogin.setBounds(152, 434, 165, 23);
		contentPane.add(lblDadosLogin);
		
		JTextArea txtDescricao = new JTextArea();
		txtDescricao.setLineWrap(true);
		txtDescricao.setFont(new Font("Tahoma", Font.PLAIN, 10));
		txtDescricao.setBounds(153, 341, 181, 80);
		contentPane.add(txtDescricao);
		
		JButton btnProximo = new JButton("PR\u00D3XIMO");
		btnProximo.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnProximo.setIcon(null);
		btnProximo.setBackground(Color.WHITE);
		btnProximo.setContentAreaFilled(false);
		btnProximo.setOpaque(true);
		btnProximo.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String cpf = txtCpf.getText().replace(".", "").replace("-", "").replace("/", "");
				
				if (txtNome.getText().equals("")     || cpf == null                   || txtTelefone.getText().equals("") || 
					txtDataNasc.getText().equals("") || txtRenda.getText().equals("") || txtEmail.getText().equals("")    ||
					(new String (txtSenha.getPassword())).equals("")) {
						JOptionPane.showMessageDialog(null, "Preencha todos os campos!", "Erro", JOptionPane.ERROR_MESSAGE);
					return;
				}
				
				boolean cpfValido = ValidaCPF.isCPF(cpf.replace(".", "").replace("-", "").replace("/", ""));
				if(!cpfValido) {
					JOptionPane.showMessageDialog(null, "CPF inválido!", "Erro", JOptionPane.ERROR_MESSAGE);
					return;
				}
				
				if(Double.parseDouble(txtRenda.getText()) > 3135) {
					JOptionPane.showMessageDialog(null, "Sua renda é muito alta para ser apadrinhado(a)!", "Erro", JOptionPane.ERROR_MESSAGE);
					return;
				}
				
				String senha = new String (txtSenha.getPassword());
				Aluno aluno = new Aluno(txtNome.getText(),
						txtEmail.getText(),
						senha.toLowerCase(),
						Double.parseDouble(txtRenda.getText()),
						Long.parseLong(txtTelefone.getText().replace("(", "").replace(")", "").replace("-", "")),
						cpf,
						1,
						txtDataNasc.getText(),
						txtDescricao.getText());
				TermosAluno termos = new TermosAluno(aluno);
				termos.setLocationRelativeTo(null);
				dispose();
				termos.setVisible(true);
			}
		});
		btnProximo.setBounds(250, 534, 110, 40);
		contentPane.add(btnProximo);
		
		JLabel lblEmail = new JLabel("E-MAIL");
		lblEmail.setHorizontalAlignment(SwingConstants.LEFT);
		lblEmail.setForeground(Color.WHITE);
		lblEmail.setBounds(101, 460, 45, 20);
		contentPane.add(lblEmail);
		
		JLabel lblEmailObri = new JLabel("*");
		lblEmailObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblEmailObri.setForeground(Color.RED);
		lblEmailObri.setBounds(80, 458, 20, 20);
		contentPane.add(lblEmailObri);
		
		JLabel lblSenha = new JLabel("SENHA");
		lblSenha.setHorizontalAlignment(SwingConstants.LEFT);
		lblSenha.setForeground(Color.WHITE);
		lblSenha.setBounds(101, 488, 45, 20);
		contentPane.add(lblSenha);
		
		JButton btnVoltar = new JButton("VOLTAR");
		btnVoltar.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnVoltar.setIcon(null);
		btnVoltar.setBackground(Color.WHITE);
		btnVoltar.setContentAreaFilled(false);
		btnVoltar.setOpaque(true);
		btnVoltar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Cadastro cadastro = new Cadastro();
				cadastro.setLocationRelativeTo(null);
				dispose();
				cadastro.setVisible(true);
			}
		});
		
		JLabel lblSenhaObri = new JLabel("*");
		lblSenhaObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblSenhaObri.setForeground(Color.RED);
		lblSenhaObri.setBounds(80, 486, 20, 20);
		contentPane.add(lblSenhaObri);
		
		txtSenha = new JPasswordField();
		txtSenha.setBounds(153, 488, 181, 20);
		contentPane.add(txtSenha);
		btnVoltar.setBounds(101, 534, 110, 40);
		contentPane.add(btnVoltar);
	
		JLabel lblDescricao = new JLabel("DESCRI\u00C7\u00C3O");
		lblDescricao.setForeground(Color.WHITE);
		lblDescricao.setHorizontalAlignment(SwingConstants.LEFT);
		lblDescricao.setBounds(62, 343, 86, 20);
		contentPane.add(lblDescricao);
		
		JLabel img = new JLabel("");
		img.setBounds(0, 0, 500, 602);
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\aluno_cadastro.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		contentPane.add(img);
		
	}
}
