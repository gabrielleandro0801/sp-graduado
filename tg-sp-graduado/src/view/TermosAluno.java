package view;

import java.awt.Color;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.awt.Font;
import javax.swing.SwingConstants;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JTextArea;
import javax.swing.JCheckBox;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import dao.AlunoDao;
import model.Aluno;
import util.Estilo;

public class TermosAluno extends JFrame {
	private JPanel contentPane;
	
	public TermosAluno(Aluno aluno) {
		Estilo.setaEstilo();
		
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 540, 678);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblTermosPad = new JLabel("Termos para o Padrinho");
		lblTermosPad.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblTermosPad.setHorizontalAlignment(SwingConstants.CENTER);
		lblTermosPad.setBounds(34, 310, 461, 30);
		contentPane.add(lblTermosPad);
		
		JTextArea txtrTermosPad = new JTextArea();
		txtrTermosPad.setText("\tAo concordar com os termos, o padrinho consente que:\r\n\t- N\u00E3o poder\u00E1 desistir de apadrinhar qualquer aluno que escolher.\r\n\t- Seu nome e e-mail ser\u00E3o vis\u00EDveis para os alunos que escolher apadrinhar.");
		txtrTermosPad.setTabSize(2);
		txtrTermosPad.setLineWrap(true);
		txtrTermosPad.setFont(new Font("Tahoma", Font.PLAIN, 12));
		txtrTermosPad.setEditable(false);
		txtrTermosPad.setBackground(new Color(160, 196, 154));
		txtrTermosPad.setBounds(50, 337, 438, 105);
		contentPane.add(txtrTermosPad);
		
		JTextArea txtrTermosAluno = new JTextArea();
		txtrTermosAluno.setEditable(false);
		txtrTermosAluno.setLineWrap(true);
		txtrTermosAluno.setTabSize(2);
		txtrTermosAluno.setFont(new Font("Tahoma", Font.PLAIN, 12));
		txtrTermosAluno.setText("\tPara ser apadrinhado, o aluno deve ter:\r\n\t- Ensino m\u00E9dio completo ou matriculado no terceiro ano do ensino m\u00E9dio.\r\n\t- Renda familiar menor ou igual a tres sal\u00E1rios m\u00EDnimos.\r\n\tAo concordar com os termos, o apadrinhado consente que:\r\n\t- N\u00E3o poder\u00E1 desistir do curso.\r\n\t- O pagamento das depend\u00EAncias ser\u00E1 de sua responsabilidade.\r\n\t- Seu nome, sua data de nascimento e descri\u00E7\u00E3o ser\u00E3o vis\u00EDveis para os \r\npadrinhos.");
		txtrTermosAluno.setBackground(new Color(160, 196, 154));
		txtrTermosAluno.setBounds(50, 183, 440, 149);
		contentPane.add(txtrTermosAluno);
		
		JLabel lblTermosAluno = new JLabel("Termos para o Aluno");
		lblTermosAluno.setHorizontalAlignment(SwingConstants.CENTER);
		lblTermosAluno.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblTermosAluno.setBounds(34, 158, 461, 30);
		contentPane.add(lblTermosAluno);		
		
		JButton btnFinalCadastro = new JButton("CADASTRAR");
		btnFinalCadastro.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				AlunoDao alunoDao = new AlunoDao();
				int resultado = alunoDao.inserirAluno(aluno);
				if(resultado == 1) {
					JOptionPane.showMessageDialog(null, "Cadastro efetuado com sucesso!", "Sucesso", JOptionPane.INFORMATION_MESSAGE);
					TelaInicial telaInicial = new TelaInicial();
					telaInicial.setLocationRelativeTo(null);
					dispose();
					telaInicial.setVisible(true);
				}
			}
		});
		btnFinalCadastro.setEnabled(false);
		btnFinalCadastro.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnFinalCadastro.setContentAreaFilled(false);
		btnFinalCadastro.setOpaque(true);
		btnFinalCadastro.setBackground(Color.WHITE);
		btnFinalCadastro.setBorderPainted(false);
		btnFinalCadastro.setBounds(280, 564, 117, 43);
		contentPane.add(btnFinalCadastro);
		
		JCheckBox chckbxTermos = new JCheckBox("Eu li e concordo com os termos acima.");
		chckbxTermos.addMouseListener(new MouseAdapter() {
			@Override
			public void mouseClicked(MouseEvent arg0) {
			if(chckbxTermos.isSelected()) {
					btnFinalCadastro.setEnabled(true);
				}
			}
		});
		chckbxTermos.setHorizontalAlignment(SwingConstants.CENTER);
		chckbxTermos.setBackground(new Color(160, 196, 154));
		chckbxTermos.setBounds(122, 513, 275, 23);
		contentPane.add(chckbxTermos);
		
		JButton btnVoltar = new JButton("VOLTAR");
		btnVoltar.setBackground(Color.WHITE);
		btnVoltar.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnVoltar.setForeground(new Color(0, 0, 0));
		btnVoltar.setIcon(null);
		btnVoltar.setContentAreaFilled(false);
		btnVoltar.setOpaque(true);
		btnVoltar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				dispose();
			}
		});
		btnVoltar.setBounds(122, 564, 117, 43);
		contentPane.add(btnVoltar);
		
		JLabel img = new JLabel("");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\termos.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		img.setBounds(0, 0, 530, 638);
		contentPane.add(img);			
	}
}
