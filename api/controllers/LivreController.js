/**
 * LivreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  'new': function (req,rep) {
    rep.view();
  },
  'details': function(req,rep){
    livre.findone(req.param('id'),function retouveLivre (err,content) {
    if(err) return next(err);
    if(!livre) return next();
    rep.view({content});
    });
  }
};

