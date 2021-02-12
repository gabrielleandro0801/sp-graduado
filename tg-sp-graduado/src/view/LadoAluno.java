package view;

import java.awt.Color;
import java.util.ArrayList;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.SwingConstants;
import javax.swing.JComboBox;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Font;

import dao.AlunoDao;
import dao.CursoFaculdadeDao;
import dao.FaculdadeDao;
import model.Aluno;
import model.CursoFaculdade;
import model.Faculdade;

public class LadoAluno extends JFrame {

	private JPanel contentPane;
	private JTextField txtIdFaculdade;
	private JTextField txtIdCurso;

	public LadoAluno(Aluno aluno) {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 715, 450);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JButton btnEscolherCurso = new JButton("Escolher Curso para Gradua\u00E7\u00E3o");
		btnEscolherCurso.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnEscolherCurso.setBackground(Color.WHITE);
		btnEscolherCurso.setContentAreaFilled(false);
		btnEscolherCurso.setOpaque(true);
		btnEscolherCurso.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(txtIdCurso.getText().equals("")) {
					JOptionPane.showMessageDialog(null, "Digite o ID do Curso", "Erro", JOptionPane.ERROR_MESSAGE);
					
				}else if(Integer.parseInt(txtIdCurso.getText()) <= 0){
					JOptionPane.showMessageDialog(null, "Digite o um ID valido", "Erro", JOptionPane.ERROR_MESSAGE); 
					
				}else {
					AlunoDao alunoDao = new AlunoDao();
					
					int resultado = alunoDao.atribuiCurso(aluno.getIdAluno(), Integer.parseInt(txtIdCurso.getText()));
					if(resultado == 1) {
						JOptionPane.showMessageDialog(null, "Curso escolhido com sucesso!", "Sucesso", JOptionPane.INFORMATION_MESSAGE);
					}else {
						JOptionPane.showMessageDialog(null, "Erro ao escolher o curso", "Erro", JOptionPane.ERROR_MESSAGE); 
					}
				}
			}
		});
		btnEscolherCurso.setBounds(143, 310, 244, 35);
		contentPane.add(btnEscolherCurso);		
		
		JLabel lblNewLabel_1 = new JLabel("FACULDADES ASSOCIADAS");
		lblNewLabel_1.setForeground(new Color(255, 255, 255));
		lblNewLabel_1.setBounds(8, 136, 134, 20);
		contentPane.add(lblNewLabel_1);
		
		JLabel lblNewLabel_2 = new JLabel("CURSOS");
		lblNewLabel_2.setForeground(new Color(255, 255, 255));
		lblNewLabel_2.setBounds(21, 246, 46, 20);
		contentPane.add(lblNewLabel_2);
		
		JLabel lblNewLabel_3 = new JLabel("ID da Faculdade Desejada:");
		lblNewLabel_3.setForeground(new Color(255, 250, 250));
		lblNewLabel_3.setBounds(10, 169, 138, 20);
		contentPane.add(lblNewLabel_3);
		
		JComboBox<Faculdade> cbFaculdades = new JComboBox<Faculdade>();
		cbFaculdades.setFont(new Font("Tahoma", Font.PLAIN, 13));
		ArrayList<Faculdade> lista = buscaFaculdades();
		for (Faculdade f : lista) {
			cbFaculdades.addItem(f);
		}
		cbFaculdades.setBounds(143, 136, 467, 22);
		contentPane.add(cbFaculdades);
		
		JComboBox<CursoFaculdade> cbCursos = new JComboBox<CursoFaculdade>();
		cbCursos.setFont(new Font("Tahoma", Font.PLAIN, 13));

		cbCursos.setBounds(143, 246, 543, 22);
		contentPane.add(cbCursos);
		
		txtIdCurso = new JTextField();
		txtIdCurso.setColumns(10);
		txtIdCurso.setBounds(143, 279, 101, 20);
		contentPane.add(txtIdCurso);

		txtIdFaculdade = new JTextField();
		txtIdFaculdade.setBounds(143, 169, 101, 20);
		contentPane.add(txtIdFaculdade);
		txtIdFaculdade.setColumns(10);
		
		JButton btnBuscarCursos = new JButton("Buscar Cursos");
		btnBuscarCursos.setFont(new Font("Tahoma", Font.BOLD, 12));
		btnBuscarCursos.setBackground(Color.WHITE);
		btnBuscarCursos.setContentAreaFilled(false);
		btnBuscarCursos.setOpaque(true);
		btnBuscarCursos.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				if(txtIdFaculdade.getText().equals("")) {
					JOptionPane.showMessageDialog(null, "Digite o ID da Faculdade", "Erro", JOptionPane.ERROR_MESSAGE);
					
				}else if(Integer.parseInt(txtIdFaculdade.getText()) > cbFaculdades.getItemCount() || Integer.parseInt(txtIdFaculdade.getText()) <= 0){
					JOptionPane.showMessageDialog(null, "Digite o um ID valido", "Erro", JOptionPane.ERROR_MESSAGE); 
					
				}else {
					ArrayList<CursoFaculdade> lista2 = buscaCursoFaculdade(Integer.parseInt(txtIdFaculdade.getText()));
					cbCursos.removeAllItems();
					for (CursoFaculdade f : lista2) {
						cbCursos.addItem(f);
					}
				}
			}

			protected ArrayList<CursoFaculdade> buscaCursoFaculdade(int idFaculdade){
				CursoFaculdade cf = new CursoFaculdade();
		        CursoFaculdadeDao dao = new CursoFaculdadeDao();
		        ArrayList<CursoFaculdade> lista = new ArrayList<>();
				try{
		           lista = dao.buscar(idFaculdade);
		           return lista;
		           
		        } catch (Exception ex) {
		           ex.printStackTrace();
		           JOptionPane.showMessageDialog(null, "Erro ao buscar os Cursos", "Erro", JOptionPane.ERROR_MESSAGE);
		        }
		        return lista;
			}
		});
		btnBuscarCursos.setBounds(143, 200, 126, 35);
		contentPane.add(btnBuscarCursos);
		
		if(aluno.getIdPadrinho() != 0) {
			btnEscolherCurso.setEnabled(false);
		}
		
		JLabel lblStatus = new JLabel("STATUS");
		lblStatus.setForeground(Color.WHITE);
		lblStatus.setFont(new Font("Tahoma", Font.BOLD, 13));
		lblStatus.setBounds(8, 103, 587, 22);
		lblStatus.setText(criaStatus(aluno.getNome(), aluno.getIdPadrinho()));
		contentPane.add(lblStatus);
		
		JLabel lblNewLabel_4 = new JLabel("ID do Curso Desejado:");
		lblNewLabel_4.setForeground(new Color(255, 255, 255));
		lblNewLabel_4.setBounds(21, 279, 112, 20);
		contentPane.add(lblNewLabel_4);
		
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
		btnSair.setBounds(26, 357, 115, 40);
		contentPane.add(btnSair);
		
		JLabel img = new JLabel("");
		img.setIcon(new ImageIcon("C:\\Users\\gabri\\Documents\\RepositoriosGitHub\\sp-graduado\\tg-sp-graduado\\imagens\\tela_aluno.png"));
		img.setBackground(new Color(51, 255, 51));
		img.setHorizontalAlignment(SwingConstants.CENTER);
		img.setLabelFor(this);
		img.setForeground(new Color(204, 0, 204));
		img.setFont(new Font("Varsity", Font.BOLD, 28));
		img.setBounds(0, 0, 700, 430);
		contentPane.add(img);
		
	}
	
	public ArrayList<Faculdade> buscaFaculdades(){
       Faculdade f = new Faculdade();
       FaculdadeDao dao = new FaculdadeDao();
       ArrayList<Faculdade> lista = new ArrayList<>();
       
		try{
           lista = dao.buscar();
           return lista;
       } catch (Exception ex) {
           ex.printStackTrace();
           JOptionPane.showMessageDialog(null, "Erro ao buscar as Faculdades");
       }
        return lista;
	}
	
	public String criaStatus(String nome, int idPadrinho) {
		String padrinho = "";
		if(idPadrinho == 0) {
			padrinho = "sem apadrinhamento. Por enquanto é só aguardar!";
		}else {
			padrinho = "apadrinhado(a)! Bons estudos!";
		}
		
		String retorno = "Olá, " + nome + "! No momento você está: " + padrinho;
		return retorno;
	}
	
}
