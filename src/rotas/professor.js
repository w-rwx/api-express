import { Router } from 'express'
import * as controlador from '../controlador/professor-controlador.js'

const router = Router()

router.get('/professores', controlador.listar)
router.get('/professores/:id', controlador.buscarPorId)
router.post('/professores', controlador.criar)
router.put('/professores/:id', controlador.editar)
router.delete('/professores/:id', controlador.deletar)

export const professoresRoutes = router