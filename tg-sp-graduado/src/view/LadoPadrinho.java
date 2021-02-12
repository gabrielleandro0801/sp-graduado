package view;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import java.util.ArrayList;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JTextField;
import java.awt.Color;
import java.awt.Font;
import javax.swing.JComboBox;
import javax.swing.SwingConstants;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Component;

import dao.AlunoDao;
import dao.PadrinhoDao;
import model.Aluno;
import model.AlunoCompleto;
import model.Padrinho;

public class LadoPadrinho extends JFrame {

	private JPanel contentPane;
	private JTextField txtIdAluno;
	private JTextField txtNome;
	private JTextField txtNomeFaculdade;
	private JTextField txtNomeCurso;
	private JTextField txtID;
	private JTextField txtTelCelular;
	private JTextField txtTurno;
	private JTextField txtSemestres;
	private JTextField txtModalidade;
	private JTextField txtDescricao;

	public LadoPadrinho(Padrinho padrinho) {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 715, 600);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JComboBox<Aluno> cbAlunos = new JComboBox<Aluno>();
		cbAlunos.setFont(new Font("Tahoma", Font.PLAIN, 13));
		ArrayList<Aluno> lista = buscaAlunos();
		for (Aluno a : lista) {
			cbAlunos.addItem(a);
		}
		cbAlunos.setBounds(403, 187, 275, 22);
		contentPane.add(cbAlunos);
		
		JComboBox<Aluno> cbMeusAlunos = new JComboBox<Aluno>();
		cbMeusAlunos.setFont(new Font("Tahoma", Font.PLAIN, 13));
		ArrayList<Aluno> l = buscaMeusAlunos(padrinho.getIdPadrinho());
		for(Aluno a : l) {
			cbMeusAlunos.addItem(a);
		}
		cbMeusAlunos.setBounds(403, 251, 275, 22);
		contentPane.add(cbMeusAlunos);
		
		JButton btnApadrinhar = new JButton("REALIZAR APADRINHAMENTO");
		btnApadrinhar.setFont(new Font("Tahoma", Font.BOLD, 11));
		btnApadrinhar.setBackground(Color.WHITE);
		btnApadrinhar.setContentAreaFilled(false);
		btnApadrinhar.setOpaque(true);
		btnApadrinhar.setAlignmentY(Component.TOP_ALIGNMENT);
		btnApadrinhar.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				PadrinhoDao padrinhoDao = new PadrinhoDao();
				
				int resultado = padrinhoDao.realizarApadrinhamento(padrinho.getIdPadrinho(), Integer.parseInt(txtIdAluno.getText()));
				if(resultado == 1) {
					JOptionPane.showMessageDialog(null, "Apadrinhamento realizado com sucesso!\nEntre em contato com o(a) aluno(a)", "Sucesso", JOptionPane.INFORMATION_MESSAGE);
				}else {
					JOptionPane.showMessageDialog(null, "Erro ao realizar apadrinhamento", "Erro", JOptionPane.ERROR_MESSAGE);
				}
				
				limpar();
				cbAlunos.removeAllItems();
				ArrayList<Aluno> lista = buscaAlunos();
				for (Aluno a : lista) {
					cbAlunos.addItem(a);
				}
				
				cbMeusAlunos.removeAllItems();
				ArrayList<Aluno> l = buscaMeusAlunos(padrinho.getIdPadrinho());
				for(Aluno a : l) {
					cbMeusAlunos.addItem(a);
				}				
			}
		});
		btnApadrinhar.setBounds(258, 500, 197, 40);
		contentPane.add(btnApadrinhar);
		
		JLabel lblNewLabel = new JLabel("NOME");
		lblNewLabel.setForeground(Color.WHITE);
		lblNewLabel.setBounds(51, 218, 67, 20);
		contentPane.add(lblNewLabel);
		
		JLabel lblNewLabel_1 = new JLabel("DESCRI\u00C7\u00C3O");
		lblNewLabel_1.setForeground(Color.WHITE);
		lblNewLabel_1.setBounds(51, 435, 67, 20);
		contentPane.add(lblNewLabel_1);
		
		JLabel lblNewLabel_2 = new JLabel("FACULDADE DESEJADA");
		lblNewLabel_2.setForeground(Color.WHITE);
		lblNewLabel_2.setBounds(10, 280, 114, 20);
		contentPane.add(lblNewLabel_2);
		
		JLabel lblNewLabel_3 = new JLabel("ALUNOS A APADRINHAR");
		lblNewLabel_3.setHorizontalTextPosition(SwingConstants.CENTER);
		lblNewLabel_3.setHorizontalAlignment(SwingConstants.RIGHT);
		lblNewLabel_3.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblNewLabel_3.setForeground(new Color(255, 255, 255));
		lblNewLabel_3.setBounds(473, 156, 205, 20);
		contentPane.add(lblNewLabel_3);
		
		txtIdAluno = new JTextField();
		txtIdAluno.setBounds(128, 156, 86, 20);
		contentPane.add(txtIdAluno);
		txtIdAluno.setColumns(10);
				
		JButton btnBuscarId = new JButton("Buscar por ID");
		btnBuscarId.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnBuscarId.setBackground(Color.WHITE);
		btnBuscarId.setContentAreaFilled(false);
		btnBuscarId.setOpaque(true);
		btnBuscarId.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try {
					
					if(txtIdAluno.getText().equals("")) {
						JOptionPane.showMessageDialog(null, "Digite o ID do Aluno.", "Erro", JOptionPane.ERROR_MESSAGE);
						limpar();
						
					}else if(Integer.parseInt(txtIdAluno.getText()) <= 0){
						JOptionPane.showMessageDialog(null, "Digite um ID valido.", "Erro", JOptionPane.ERROR_MESSAGE); 
						limpar();
						
					}else {
						AlunoCompleto aluno = new AlunoCompleto();
						AlunoDao alunoDao = new AlunoDao();
						aluno = alunoDao.buscarAluno(Integer.parseInt(txtIdAluno.getText()));
						
						txtID.setText(Integer.toString(aluno.getIdAluno()));
						txtNome.setText(aluno.getNome());
						txtTelCelular.setText(Long.toString(aluno.getTelCelular()));
						txtDescricao.setText(aluno.getDescricao());
						txtNomeCurso.setText(aluno.getNomeCurso());
						txtNomeFaculdade.setText(aluno.getNomeFaculdade());
						txtTurno.setText(aluno.getTurno());
						txtSemestres.setText(Integer.toString(aluno.getSemestres()));
						txtModalidade.setText(aluno.getModalidade());
					}
				}catch(NullPointerException n){
					limpar();
					JOptionPane.showMessageDialog(null, "ID invalido!", "Erro", JOptionPane.ERROR_MESSAGE);
				}
				
			}
		});
		btnBuscarId.setBounds(228, 156, 132, 40);
		contentPane.add(btnBuscarId);
		
		txtNome = new JTextField();
		txtNome.setEditable(false);
		txtNome.setBounds(128, 218, 168, 20);
		contentPane.add(txtNome);
		txtNome.setColumns(10);
		
		txtNomeFaculdade = new JTextField();
		txtNomeFaculdade.setEditable(false);
		txtNomeFaculdade.setBounds(128, 280, 261, 20);
		contentPane.add(txtNomeFaculdade);
		txtNomeFaculdade.setColumns(10);
		
		JLabel lblNewLabel_5 = new JLabel("CURSO");
		lblNewLabel_5.setForeground(Color.WHITE);
		lblNewLabel_5.setBounds(51, 311, 58, 20);
		contentPane.add(lblNewLabel_5);
		
		txtNomeCurso = new JTextField();
		txtNomeCurso.setEditable(false);
		txtNomeCurso.setColumns(10);
		txtNomeCurso.setBounds(128, 311, 168, 20);
		contentPane.add(txtNomeCurso);
		
		txtID = new JTextField();
		txtID.setEditable(false);
		txtID.setColumns(10);
		txtID.setBounds(128, 187, 86, 20);
		contentPane.add(txtID);
		
		JLabel lblId = new JLabel("ID");
		lblId.setForeground(Color.WHITE);
		lblId.setBounds(51, 187, 67, 20);
		contentPane.add(lblId);
		
		txtTelCelular = new JTextField();
		txtTelCelular.setEditable(false);
		txtTelCelular.setColumns(10);
		txtTelCelular.setBounds(128, 249, 205, 20);
		contentPane.add(txtTelCelular);
		
		JLabel lblNewLabel_4 = new JLabel("CONTATO");
		lblNewLabel_4.setForeground(Color.WHITE);
		lblNewLabel_4.setBounds(51, 249, 67, 20);
		contentPane.add(lblNewLabel_4);
		
		txtTurno = new JTextField();
		txtTurno.setEditable(false);
		txtTurno.setColumns(10);
		txtTurno.setBounds(128, 342, 168, 20);
		contentPane.add(txtTurno);
		
		JLabel lblTurno = new JLabel("TURNO");
		lblTurno.setForeground(Color.WHITE);
		lblTurno.setBounds(51, 342, 67, 20);
		contentPane.add(lblTurno);
		
		txtSemestres = new JTextField();
		txtSemestres.setEditable(false);
		txtSemestres.setColumns(10);
		txtSemestres.setBounds(128, 373, 168, 20);
		contentPane.add(txtSemestres);
		
		JLabel lblSemestres = new JLabel("SEMESTRES");
		lblSemestres.setForeground(Color.WHITE);
		lblSemestres.setBounds(51, 373, 67, 20);
		contentPane.add(lblSemestres);
		
		txtModalidade = new JTextField();
		txtModalidade.setEditable(false);
		txtModalidade.setColumns(10);
		txtModalidade.setBounds(128, 404, 168, 20);
		contentPane.add(txtModalidade);
		
		JLabel lblModalidade = new JLabel("MODALIDADE");
		lblModalidade.setForeground(Color.WHITE);
		lblModalidade.setBounds(51, 404, 73, 20);
		contentPane.add(lblModalidade);
		
		txtDescricao = new JTextField();
		txtDescricao.setEditable(false);
		txtDescricao.setColumns(10);
		txtDescricao.setBounds(128, 435, 168, 61);
		contentPane.add(txtDescricao);
		
		JLabel lblNewLabel_6 = new JLabel("DIGITE O ID");
		lblNewLabel_6.setForeground(Color.WHITE);
		lblNewLabel_6.setBounds(51, 156, 67, 20);
		contentPane.add(lblNewLabel_6);
		
		JLabel lblNewLabel_7 = new JLabel("MEUS ALUNOS");
		lblNewLabel_7.setHorizontalTextPosition(SwingConstants.CENTER);
		lblNewLabel_7.setHorizontalAlignment(SwingConstants.RIGHT);
		lblNewLabel_7.setAlignmentY(Component.TOP_ALIGNMENT);
		lblNewLabel_7.setForeground(new Color(255, 255, 255));
		lblNewLabel_7.setFont(new Font("Tahoma", Font.BOLD, 14));
		lblNewLabel_7.setBounds(524, 220, 154, 20);
		contentPane.add(lblNewLabel_7);
		
		JButton btnSair = new JButton("SAIR");
		btnSair.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnSair.setBackground(Color.WHITE);
		btnSair.setContentAreaFilled(false);
		btnSair.setOpaque(true);
		btnSair.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				TelaInicial telaInicial = new TelaInicial();
				telaInicial.setLocationRelativeTo(null);
				dispose();
				telaInicial.setVisible(true);
			}
		});
		btnSair.setBounds(563, 499, 115, 40);
		contentPane.add(btnSair);
		
		JLabel img = new JLabel("");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\tela_lado.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		img.setBounds(0, 0, 715, 565);
		contentPane.add(img);
		
	}
	
	public void limpar() {
		this.txtID.setText("");
		this.txtIdAluno.setText("");
		this.txtNome.setText("");
		this.txtNomeFaculdade.setText("");
		this.txtNomeCurso.setText("");
		this.txtDescricao.setText("");
		this.txtTelCelular.setText("");
		this.txtModalidade.setText("");
		this.txtSemestres.setText("");
		this.txtTurno.setText("");
	}
	
	public ArrayList<Aluno> buscaAlunos(){
        AlunoDao dao = new AlunoDao();
        ArrayList<Aluno> lista = new ArrayList<>();
        try{
        	lista = dao.buscar();
        	return lista;
        } catch (Exception ex) {
           ex.printStackTrace();
           JOptionPane.showMessageDialog(null, "Erro ao tentar buscar os Alunos");
        }
        return lista;
    }
	
	public ArrayList<Aluno> buscaMeusAlunos(int idPadrinho){
        AlunoDao dao = new AlunoDao();
        ArrayList<Aluno> lista = new ArrayList<>();
        
        try{
        	lista = dao.buscarMeusAlunos(idPadrinho);
        	return lista;
        	
        } catch (Exception ex) {
        	ex.printStackTrace();
            JOptionPane.showMessageDialog(null, "Erro ao tentar buscar os seus Alunos");
        }
        return lista;
    }
}
