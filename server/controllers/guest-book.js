const { Book } = require('../models')

const { Op } = require('sequelize')

class Guest{
    static Create( req, res ){
        console.log(req);
        
        Book.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            address:req.body.address
        })
        .then(function(guest){
            res.json(guest)
        })
        .catch(function(err){
            res.json(err)
        })
    }
    static List( req, res ){
        Book.findAll()
        .then(function(listguest){
            res.json(listguest)
        })
        .catch(function(err){
            res.json(err)
        })
    }
    static Search( req, res ){
        Book.findAll({
            where: {
                [Op.or]: [
                    {
                        firstName: {
                            [Op.like]: `%${req.query.q}%` 
                        }
                    },
                    {
                        lastName: {
                            [Op.like]: `%${req.query.q}%` 
                        }
                    },
                    {
                        address: {
                            [Op.like]: `%${req.query.q}%` 
                        }
                    }                  
                ]
            }
        })
        .then(function(search){
            res.json(search)
        })
        .catch(function(err){
            res.json(err)
        })
    }
    static Update( req, res ){
        console.log("masuk update", req.body);
        
        Book.update({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            address:req.body.address
        },{
            where:{
                id: req.params.id
            }
        })
        .then(function(updateGuest){
            res.json(updateGuest)
        })
        .catch(function(err){
            res.json(err)
        })
    }
    static Delete( req, res ){
        Book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(deleteGuest){
            res.json(deleteGuest)
        })
        .catch(function(err){
            res.json(err)
        })
    }
}

module.exports = Guest