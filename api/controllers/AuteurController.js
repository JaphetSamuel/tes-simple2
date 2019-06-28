/**
 * AuteurController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  'inscription': function (req,rep) {
    rep.view();
  },
  'nouveau': function (req,rep) {
    console.log("reussir a entrez");
    if(req.params["nom"]==""){
      console.log('faux');
      Auteur.create(req.params['nom'],req.params['prenom'],req.params['motDePasse']);
    }
  }

};

