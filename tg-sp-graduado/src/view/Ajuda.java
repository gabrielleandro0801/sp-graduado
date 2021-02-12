package view;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import java.awt.Font;
import javax.swing.SwingConstants;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.ImageIcon;
import java.awt.Color;

public class Ajuda extends JFrame {

	private JPanel contentPane;

	public Ajuda() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 540, 678);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JLabel lblTitulo = new JLabel("Ajuda");
		lblTitulo.setForeground(new Color(255, 255, 255));
		lblTitulo.setHorizontalAlignment(SwingConstants.RIGHT);
		lblTitulo.setFont(new Font("Tahoma", Font.BOLD, 16));
		lblTitulo.setBounds(314, 11, 165, 23);
		contentPane.add(lblTitulo);
		
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
		btnVoltar.setBounds(122, 564, 117, 43);
		contentPane.add(btnVoltar);
		
		JLabel lblQuemSomos = new JLabel("Quem somos?");
		lblQuemSomos.setHorizontalAlignment(SwingConstants.CENTER);
		lblQuemSomos.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblQuemSomos.setBounds(34, 158, 461, 30);
		contentPane.add(lblQuemSomos);
		
		JTextArea txtrQuemSomos = new JTextArea();
		txtrQuemSomos.setText("Somos uma organiza\u00E7\u00E3o n\u00E3o governamental com o objetivo de propocionar o \r\nencontro entre pessoas com o desejo de cursar o ensino superior em uma \r\ninstitui\u00E7\u00E3o privada e pessoas filantr\u00F3picas (os padrinhos), que se responsabilizam a pagar a mensalidade do aluno.");
		txtrQuemSomos.setEditable(false);
		txtrQuemSomos.setLineWrap(true);
		txtrQuemSomos.setTabSize(2);
		txtrQuemSomos.setFont(new Font("Tahoma", Font.PLAIN, 12));
		txtrQuemSomos.setBackground(new Color(160, 196, 154));
		txtrQuemSomos.setBounds(44, 185, 451, 72);
		contentPane.add(txtrQuemSomos);
		
		JLabel lblComoFunciona = new JLabel("Como funciona?");
		lblComoFunciona.setHorizontalAlignment(SwingConstants.CENTER);
		lblComoFunciona.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblComoFunciona.setBounds(34, 250, 461, 30);
		contentPane.add(lblComoFunciona);
		
		JTextArea txtrComoFunciona = new JTextArea();
		txtrComoFunciona.setText("Voc\u00EA escolhe se ir\u00E1 fazer o cadastro como aluno ou padrinho. Se for aluno, \u00E9\r\ns\u00F3 preencher o cadastro com todos os seus dados e uma breve descri\u00E7\u00E3o e seu perfil ficar\u00E1 vis\u00EDvel para que os padrinhos possam escolhar se ir\u00E3o contribuir para pagar sua mensalidade. Se escolheu se cadastrar como padrinho, depois de\r\ncadastrar todos os seus dados e os motivos que te levaram a querer ajudar\r\nalgu\u00E9m, poder\u00E1 visualizar o perfil dos alunos e escolher quais gostaria de ajudar.");
		txtrComoFunciona.setEditable(false);
		txtrComoFunciona.setLineWrap(true);
		txtrComoFunciona.setTabSize(2);
		txtrComoFunciona.setFont(new Font("Tahoma", Font.PLAIN, 12));
		txtrComoFunciona.setBackground(new Color(160, 196, 154));
		txtrComoFunciona.setBounds(44, 277, 451, 114);
		contentPane.add(txtrComoFunciona);
		
		JLabel img = new JLabel("");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\ajuda.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		img.setBounds(0, 0, 530, 638);
		contentPane.add(img);
	}

}
