import { Router } from 'express'
import * as controlador from '../controlador/disciplina-controlador.js'

const router = Router()

router.get('/disciplinas', controlador.listar)
router.get('/disciplinas/:id', controlador.buscarPorId)
router.post('/disciplinas', controlador.criar)
router.put('/disciplinas/:id', controlador.editar)
router.delete('/disciplinas/:id', controlador.deletar)

export const disciplinasRoutes = router