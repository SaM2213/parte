const express = require("express");

const router= express.Router();

router.get('/',(req,res) => {
  res.json([
    {
      nombre : "Categoria001",
      precio : 35
    },
    {
      nombre : "Categoria002",
      precio : 15
    }
  ]);
});

router.get('/:id',(req,res) => {
  const { id }= req.params;
  res.json(
    {
      id: id,
      nombre : "Categoria001",
      precio : 35
    }
  );
});

router.get('/:idcat/productos/:idprod',(req,res) => {
  const { idcat, idprod }= req.params;
  res.json(
    {
      idProducto: idprod,
      nombre : "Categoria001",
      precio : 35,
      idCategoria: idcat
    }
  );
});

module.exports=router;
