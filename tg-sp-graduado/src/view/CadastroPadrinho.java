package view;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.text.MaskFormatter;
import javax.swing.ButtonGroup;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.text.ParseException;
import java.awt.event.ActionEvent;
import javax.swing.JTextField;
import javax.swing.JPasswordField;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import java.awt.Font;
import javax.swing.SwingConstants;
import javax.swing.JFormattedTextField;
import javax.swing.JRadioButton;
import java.awt.Color;
import javax.swing.JTextArea;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

import model.Padrinho;
import util.Estilo;
import util.ValidaCNPJ;
import util.ValidaCPF;

public class CadastroPadrinho extends JFrame {

	private JPanel contentPane;
	private JTextField txtEmail;
	private JPasswordField txtSenha;
	private JTextField txtNome;
	MaskFormatter cpf, nasc, tel, cnpj;
	private boolean pessoaFisica = false;
	private JTextField txtRenda;

	public CadastroPadrinho() {
		Estilo.setaEstilo();
		
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 505, 634);
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
			
			cnpj = new MaskFormatter("##.###.###/####-##");
			cnpj.setValidCharacters("0123456789");
		}catch(ParseException e) {
			e.printStackTrace();
		}
		
		JLabel lblDadosPessoais = new JLabel("Dados Pessoais");
		lblDadosPessoais.setForeground(Color.WHITE);
		lblDadosPessoais.setHorizontalAlignment(SwingConstants.CENTER);
		lblDadosPessoais.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblDadosPessoais.setBounds(160, 153, 165, 23);
		contentPane.add(lblDadosPessoais);
		
		JLabel lblDadosLogin = new JLabel("Dados para Login");
		lblDadosLogin.setForeground(Color.WHITE);
		lblDadosLogin.setHorizontalAlignment(SwingConstants.CENTER);
		lblDadosLogin.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblDadosLogin.setBounds(160, 438, 165, 23);
		contentPane.add(lblDadosLogin);
		
		JLabel lblNome = new JLabel("NOME");
		lblNome.setForeground(Color.WHITE);
		lblNome.setBounds(67, 187, 86, 20);
		contentPane.add(lblNome);
		
		JLabel lblNomeObri = new JLabel("*");
		lblNomeObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblNomeObri.setForeground(Color.RED);
		lblNomeObri.setBounds(45, 187, 20, 20);
		contentPane.add(lblNomeObri);
		
		JLabel lblCpf = new JLabel("CPF");
		lblCpf.setForeground(Color.WHITE);
		lblCpf.setBounds(67, 235, 86, 20);
		contentPane.add(lblCpf);
				
		JLabel lblCnpj = new JLabel("CNPJ");
		lblCnpj.setForeground(Color.WHITE);
		lblCnpj.setBounds(67, 266, 86, 20);
		contentPane.add(lblCnpj);
		
		JLabel lblCelular = new JLabel("TEL. CELULAR");
		lblCelular.setForeground(Color.WHITE);
		lblCelular.setBounds(67, 297, 86, 20);
		contentPane.add(lblCelular);
		
		JLabel lblNascimento = new JLabel("DATA NASC.");
		lblNascimento.setForeground(Color.WHITE);
		lblNascimento.setBounds(67, 328, 86, 20);
		contentPane.add(lblNascimento);
		
		JLabel lblNascObri = new JLabel("*");
		lblNascObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblNascObri.setForeground(Color.RED);
		lblNascObri.setBounds(45, 328, 20, 20);
		contentPane.add(lblNascObri);
		
		txtNome = new JTextField();
		txtNome.setColumns(10);
		txtNome.setBounds(160, 187, 165, 20);
		contentPane.add(txtNome);
				
		JFormattedTextField txtDataNasc = new JFormattedTextField(nasc);
		txtDataNasc.setHorizontalAlignment(SwingConstants.LEFT);
		txtDataNasc.setBounds(160, 328, 165, 20);
		contentPane.add(txtDataNasc);
		
		JFormattedTextField txtTelefone = new JFormattedTextField(tel);
		txtTelefone.setBounds(160, 297, 165, 20);
		contentPane.add(txtTelefone);
		
		JLabel lblTelObri = new JLabel("*");
		lblTelObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblTelObri.setForeground(Color.RED);
		lblTelObri.setBounds(45, 297, 20, 20);
		contentPane.add(lblTelObri);
		
		JFormattedTextField txtCpf = new JFormattedTextField(cpf);
		txtCpf.setEnabled(false);
		txtCpf.setBounds(160, 235, 165, 20);
		contentPane.add(txtCpf);
		
		JFormattedTextField txtCnpj = new JFormattedTextField(cnpj);
		txtCnpj.setEnabled(false);
		txtCnpj.setBounds(160, 266, 165, 20);
		contentPane.add(txtCnpj);
		
		JRadioButton rdbtnFisica = new JRadioButton("Pessoa F\u00EDsica");
		rdbtnFisica.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent arg0) {
				if (rdbtnFisica.isSelected()) {
					txtCpf.setEnabled(true);
					txtCnpj.setEnabled(false);
					txtCnpj.setText(null);
					pessoaFisica = true;
				}				
			}
		});
		rdbtnFisica.setBackground(Color.BLACK);
		rdbtnFisica.setOpaque(false);
		rdbtnFisica.setForeground(Color.WHITE);
		rdbtnFisica.setBounds(67, 210, 99, 23);
		contentPane.add(rdbtnFisica);
		
		JRadioButton rdbtnJuridica = new JRadioButton("Pessoa Jur\u00EDdica");
		rdbtnJuridica.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent e) {
				if(rdbtnJuridica.isSelected()) {
					txtCnpj.setEnabled(true);
					txtCpf.setEnabled(false);
					txtCpf.setText(null);
					pessoaFisica = false;
				}
			}
		});
		rdbtnJuridica.setBackground(Color.BLACK);
		rdbtnJuridica.setOpaque(false);
		rdbtnJuridica.setForeground(Color.WHITE);
		rdbtnJuridica.setBounds(168, 210, 99, 23);
		contentPane.add(rdbtnJuridica);
		
		ButtonGroup group = new ButtonGroup();
		group.add(rdbtnJuridica);
		group.add(rdbtnFisica);		
		
		JLabel lblPessoaObri = new JLabel("*");
		lblPessoaObri.setForeground(Color.RED);
		lblPessoaObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblPessoaObri.setBounds(45, 210, 20, 20);
		contentPane.add(lblPessoaObri);
		
		JLabel lblTitulo = new JLabel("Cadastro Padrinho");
		lblTitulo.setForeground(Color.WHITE);
		lblTitulo.setHorizontalAlignment(SwingConstants.CENTER);
		lblTitulo.setFont(new Font("Tahoma", Font.BOLD, 16));
		lblTitulo.setBounds(309, 11, 165, 23);
		contentPane.add(lblTitulo);
		
		JLabel lblEmail = new JLabel("E-MAIL");
		lblEmail.setForeground(Color.WHITE);
		lblEmail.setBounds(105, 464, 46, 14);
		contentPane.add(lblEmail);
		
		JLabel lblEmailObri = new JLabel("*");
		lblEmailObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblEmailObri.setForeground(Color.RED);
		lblEmailObri.setBounds(80, 460, 20, 20);
		contentPane.add(lblEmailObri);
		
		JLabel lblSenha = new JLabel("SENHA");
		lblSenha.setForeground(Color.WHITE);
		lblSenha.setBounds(104, 492, 46, 14);
		contentPane.add(lblSenha);
		
		JLabel lblTelObri_1 = new JLabel("*");
		lblTelObri_1.setHorizontalAlignment(SwingConstants.CENTER);
		lblTelObri_1.setForeground(Color.RED);
		lblTelObri_1.setBounds(80, 487, 20, 20);
		contentPane.add(lblTelObri_1);
		
		txtEmail = new JTextField();
		txtEmail.setColumns(10);
		txtEmail.setBounds(160, 461, 165, 20);
		contentPane.add(txtEmail);
		
		txtSenha = new JPasswordField();
		txtSenha.setBounds(160, 489, 165, 20);
		contentPane.add(txtSenha);
		
		JLabel lblMotivos = new JLabel("MOTIVOS");
		lblMotivos.setForeground(Color.WHITE);
		lblMotivos.setBounds(67, 356, 86, 20);
		contentPane.add(lblMotivos);
		
		JTextArea txtMotivos = new JTextArea();
		txtMotivos.setLineWrap(true);
		txtMotivos.setFont(new Font("Tahoma", Font.PLAIN, 11));
		txtMotivos.setColumns(10);
		txtMotivos.setBounds(160, 359, 165, 46);
		contentPane.add(txtMotivos);
		
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
		btnVoltar.setBounds(107, 534, 110, 40);
		contentPane.add(btnVoltar);		
		
		JButton btnProximo = new JButton("PR\u00D3XIMO");
		btnProximo.setContentAreaFilled(false);
		btnProximo.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnProximo.setOpaque(true);
		btnProximo.setBackground(Color.WHITE);
		btnProximo.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String docCpfOuCnpj = null;
				
				if(rdbtnFisica.isSelected()) {
					docCpfOuCnpj = txtCpf.getText();
					docCpfOuCnpj = docCpfOuCnpj.replace(".", "").replace("-", "").replace("/", "");
					if(!ValidaCPF.isCPF(docCpfOuCnpj)) {
						JOptionPane.showMessageDialog(null, "CPF invalido!", "Erro", JOptionPane.ERROR_MESSAGE);
						return;
					}
				}else {
					docCpfOuCnpj = txtCnpj.getText();
					docCpfOuCnpj = docCpfOuCnpj.replace(".", "").replace("-", "").replace("/", "");
					if(!ValidaCNPJ.isCNPJ(docCpfOuCnpj)) {
						JOptionPane.showMessageDialog(null, "CNPJ invalido!", "Erro", JOptionPane.ERROR_MESSAGE);
						return;
					}
				}
				
				if (txtNome.getText().equals("")     || docCpfOuCnpj == null          || txtTelefone.getText().equals("") || 
					txtDataNasc.getText().equals("") || txtRenda.getText().equals("") || txtEmail.getText().equals("")    ||
					(new String (txtSenha.getPassword())).equals("")) {
					JOptionPane.showMessageDialog(null, "Preencha todos os campos!", "Erro", JOptionPane.ERROR_MESSAGE);
					return;
				}
				
				if(Double.parseDouble(txtRenda.getText()) < 10000) {
					JOptionPane.showMessageDialog(null, "Para ser padrinho sua renda deve ser de no minimo R$10000!", "Erro", JOptionPane.ERROR_MESSAGE);
					return;
				}
				
				
				Padrinho padrinho = new Padrinho(txtNome.getText(), 
						txtEmail.getText(), 
						new String(txtSenha.getPassword()), 
						Double.parseDouble(txtRenda.getText()), 
						Long.parseLong(txtTelefone.getText().replace("(", "").replace(")", "").replace("-", "")), 
						docCpfOuCnpj, 
						2, 
						txtDataNasc.getText(), 
						txtMotivos.getText()
				);
				TermosPadrinho termos = new TermosPadrinho(padrinho);
				termos.setLocationRelativeTo(null);
				dispose();
				termos.setVisible(true);
			}
		});
		btnProximo.setBounds(256, 534, 110, 40);
		contentPane.add(btnProximo);
		
		txtRenda = new JTextField();
		txtRenda.setBounds(160, 415, 165, 20);
		contentPane.add(txtRenda);
		txtRenda.setColumns(10);
		
		JLabel lblRenda = new JLabel("RENDA (R$)");
		lblRenda.setForeground(Color.WHITE);
		lblRenda.setBounds(67, 415, 86, 20);
		contentPane.add(lblRenda);
		
		JLabel lblRendaObri = new JLabel("*");
		lblRendaObri.setHorizontalAlignment(SwingConstants.CENTER);
		lblRendaObri.setForeground(Color.RED);
		lblRendaObri.setBounds(45, 415, 20, 20);
		contentPane.add(lblRendaObri);
		
		JLabel img = new JLabel("New label");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\cad_pad.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setBounds(0, 0, 500, 602);
		contentPane.add(img);
		
	}
}
