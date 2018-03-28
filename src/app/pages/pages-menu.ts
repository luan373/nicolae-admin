import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Aluno',
    icon: 'ion-person-stalker',
    children: [
      {
        title: 'Cadastrar Aluno',
        link: '/pages/aluno/cadastro',
      },
      {
        title: 'Pesquisar Aluno',
        link: '/auth/login',
      },
      {
        title: 'Excluir Aluno',
        link: '/auth/login',
      },
    ]
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
