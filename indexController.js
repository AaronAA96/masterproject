

exports.post = function(req, res, next)
{
    var newService = req.body;

    Service.create(newService)
    .then(function(service)
    { 
      res.redirect('/api/serviceviewer');
    }, 
    function(err)
    {
        next(err);
    });
} 