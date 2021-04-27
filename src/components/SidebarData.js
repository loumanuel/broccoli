import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'INICIO',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'MI PERFIL',
        path: '/overview/user',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'AMIGOS/AGREGAR',
        path: '/overview/agregar',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'INFORMACIÓN',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'PRUEBAS VOCACIONALES',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'PRRUEBAS VOCACIONALES',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'EXÁMENES ESPECÍFICOS',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'HISTORIA USAC',
    path: '/historia',
    icon: <FaIcons.FaPaperclip />
  },
  {
    title: 'ESTUDIANTES DESTACADOS',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'MESSAGES',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'MESSAGE USERS',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'MESSAGE GROUPS',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'CRÉDITOS',
    path: '/creditos',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
