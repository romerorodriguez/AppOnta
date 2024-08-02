export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Inicio: { nombre: string };
  RecuperarContrasena: undefined;
  Perfil: undefined;
  CrearArticulo: undefined;
  CrearCategoria: { nombre: string };
  CambiarContrasena: undefined;
  ListaCategorias: undefined;
  CategoriaSeleccionada: {
    categoryId: string;
    categoryTitle: string;
    categoryColor: string;
  };
  Buscar: undefined;
};

export interface Category  {
  id: string;
  title: string;
  icon: string;
  color: string;
  articlesCount: number;
}