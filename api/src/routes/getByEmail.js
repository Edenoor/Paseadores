const { Router } = require('express');
const { User } = require('../db')
const bcryptjs = require ('bcryptjs')

const router = Router();

router.get("/", async (req, res) => {
    const {email, password} = req.body

    try{  
            const datos = await User.findOne({
                where: {
                    email: email
                }
            })
            const detallesDatos = {email : datos.email, password: datos.password} 

            let compare = await bcryptjs.compare(password, detallesDatos.password )

            console.log(password, detallesDatos.password)
            
            if(compare){

                return res.status(200).send(true);
            }else{
               return res.status(404).send(false);
            }
        }
    catch {
        res.status(500).send("Ecurrió un error");
      }
    });

    module.exports = router;