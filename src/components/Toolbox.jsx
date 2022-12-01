import * as React from 'react';

import {
  Avatar,
  Box,
  createTheme,
  Tooltip,
  ThemeProvider
} from '@mui/material';

import Apollo from '../assets/img/toolbox/apollo.png';
import Babel from '../assets/img/toolbox/babel.png';
import Bootstrap from '../assets/img/toolbox/bootstrap.png';
import CSS3_icon from '../assets/img/toolbox/css3.png';
import ESLint from '../assets/img/toolbox/eslint.png';
import Git from '../assets/img/toolbox/git.png';
import GitHub from '../assets/img/toolbox/github.png';
import GitLab from '../assets/img/toolbox/gitlab.png';
import GraphQL from '../assets/img/toolbox/graphql.png';
import Handlebars from '../assets/img/toolbox/handlebars.png';
import Heroku from '../assets/img/toolbox/heroku.png';
import HTML5_icon from '../assets/img/toolbox/html5.png';
import JavaScript from '../assets/img/toolbox/javascript.png';
import Jest from '../assets/img/toolbox/jest.png';
import JQuery from '../assets/img/toolbox/jquery.png';
import JSON_icon from '../assets/img/toolbox/json.png';
import MomentJS from '../assets/img/toolbox/momentjs.png';
import MongoDB from '../assets/img/toolbox/mongodb.png';
import MySQL from '../assets/img/toolbox/mysql.png';
import NodeJS from '../assets/img/toolbox/nodejs.png';
import Nodemon from '../assets/img/toolbox/nodemon.png';
import NPM_icon from '../assets/img/toolbox/npm.png';
import ReactJS from '../assets/img/toolbox/react.png';
import Redux from '../assets/img/toolbox/redux.png';
import Sequelize from '../assets/img/toolbox/sequelize.png';
import Slack from '../assets/img/toolbox/slack.png';
import VSCode from '../assets/img/toolbox/vscode.png';
import WebPack from '../assets/img/toolbox/webpack.png';

const theme = createTheme({
  breakpoints: {
    values: {
      // Breakpoints below use vertical layout
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 768,
      // Breakpoints below change to horizontal layout
      lg: 1024,
      xl: 1440,
      xxl: 1620
    }
  }
});

const icons = [
  {
    name: 'Apollo',
    picture: Apollo
  },
  {
    name: 'Babel',
    picture: Babel
  },
  {
    name: 'Bootstrap',
    picture: Bootstrap
  },
  {
    name: 'CSS3',
    picture: CSS3_icon
  },
  {
    name: 'ESLint',
    picture: ESLint
  },
  {
    name: 'Git',
    picture: Git
  },
  {
    name: 'GitHub',
    picture: GitHub
  },
  {
    name: 'GitLab',
    picture: GitLab
  },
  {
    name: 'GraphQL',
    picture: GraphQL
  },
  {
    name: 'Handlebars',
    picture: Handlebars
  },
  {
    name: 'Heroku',
    picture: Heroku
  },
  {
    name: 'HTML5',
    picture: HTML5_icon
  },
  {
    name: 'JavaScript',
    picture: JavaScript
  },
  {
    name: 'Jest',
    picture: Jest
  },
  {
    name: 'JQuery',
    picture: JQuery
  },
  {
    name: 'JSON',
    picture: JSON_icon
  },
  {
    name: 'MomentJS',
    picture: MomentJS
  },
  {
    name: 'MongoDB',
    picture: MongoDB
  },
  {
    name: 'MySQL',
    picture: MySQL
  },
  {
    name: 'NodeJS',
    picture: NodeJS
  },
  {
    name: 'Nodemon',
    picture: Nodemon
  },
  {
    name: 'NPM',
    picture: NPM_icon
  },
  {
    name: 'ReactJS',
    picture: ReactJS
  },
  {
    name: 'Redux',
    picture: Redux
  },
  {
    name: 'Sequelize',
    picture: Sequelize
  },
  {
    name: 'Slack',
    picture: Slack
  },
  {
    name: 'VSCode',
    picture: VSCode
  },
  {
    name: 'WebPack',
    picture: WebPack
  }
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignContent: 'center'
        }}
      >
        {icons.map((icon) => (
          <Tooltip
            title={icon.name}
            arrow
            followCursor
            placement='top'
          >
            <Avatar
              src={icon.picture}
              sx={{
                height: 'auto',
                background: 'transparent',
                width: {
                  xxs: '17.5%',
                  xs: '17.5%',
                  sm: '17.5%',
                  md: '10.85%',
                  lg: '10.85%',
                  xl: '10.85%',
                  xxl: '10.85%',
                },
                padding: {
                  xxs: '2.75%',
                  xs: '2.75%',
                  sm: '2.75%',
                  md: '2%',
                  lg: '2%',
                  xl: '2%',
                  xxl: '2%'
                },
                marginX: {
                  xxs: '1.75%',
                  xs: '1.75%',
                  sm: '1.75%',
                  md: '1%',
                  lg: '1%',
                  xl: '1%',
                  xxl: '1%'
                }
              }}>
            </Avatar>
          </Tooltip>
        ))}
      </Box>
    </ThemeProvider>
  )
};