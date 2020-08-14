import { Router } from 'express'
const router = Router()

import {
    obtenerUsuarios, crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario, loginUsuario, obtenerTipoAmbito,
    obtenerDescripcionAmbito, actualizarPassword, validarPassword, obtenerIdPunto, validarDni, obtenerListaUsuarios, restablecerPassword, obtenerRoles
} from '../controllers/usuario.controller';

router.get('/usuarios', obtenerUsuarios);
router.get('/usuarios/:dni', obtenerUsuario);
router.get('/tipo_ambito/:descripcion_ambito', obtenerTipoAmbito);
router.get('/id_punto/:descripcion_ambito', obtenerIdPunto);
router.post('/register', crearUsuario);
router.post('/login', loginUsuario);
router.post('/validarPassword', validarPassword);
router.post('/validarDni', validarDni);
router.put('/descripcion_ambito', obtenerDescripcionAmbito);
router.put('/lista_usuarios', obtenerListaUsuarios);
router.put('/roles', obtenerRoles);
router.put('/usuarios/:dni', actualizarUsuario);
router.put('/changedPassword/:dni', actualizarPassword);
router.put('/restorePassword/:dni', restablecerPassword);
router.delete('/usuarios/:dni', eliminarUsuario);

export default router