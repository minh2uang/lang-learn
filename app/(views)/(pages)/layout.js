'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const navigation_1 = require("next/navigation");
const UserProvider_1 = __importDefault(require("@/app/setup/UserProvider"));
const Layout = ({ children }) => {
    const router = (0, navigation_1.useRouter)();
    return (<UserProvider_1.default>
      <>
        <material_1.AppBar sx={{ boxShadow: 0 }} position="absolute">
          <material_1.Toolbar disableGutters>
            <material_1.Box ml={2}>
              <material_1.Typography variant="h6">Lang Learn</material_1.Typography>
            </material_1.Box>
            <material_1.Box ml={5}/>
            <material_1.Button onClick={() => router.push('/learningView')} variant="text" sx={{ color: 'white' }}>
              Study Zone
            </material_1.Button>
            <material_1.Button onClick={() => router.push('/addCard')} variant="text" sx={{ color: 'white' }}>
              Add Card
            </material_1.Button>

            <material_1.Button onClick={() => router.push('/aprendizaje/tarjetaGrupoList')} variant="text" sx={{ color: 'white' }}>
              Aprendizaje
            </material_1.Button>
          </material_1.Toolbar>
        </material_1.AppBar>
        <material_1.Grid container mt={10}>
          <material_1.Grid lg={3} xs={1} item/>
          <material_1.Grid lg={6} xs={10} item>
            {children}
          </material_1.Grid>
          <material_1.Grid item lg={3} xs={1}/>
        </material_1.Grid>
      </>
    </UserProvider_1.default>);
};
exports.default = Layout;
