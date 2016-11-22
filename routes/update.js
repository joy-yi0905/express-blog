var express = require('express');
var router = express.Router();

/* GET update page. */
router.get('/update/:id', function(req, res, next) {
    var id = req.params.id;

    post.findById(id, function(err, docs) {
        if (err) {
            console.error(err);
            return;
        }
        // docs 是包含了符合条件的一个文档

        if (docs) {
            res.render('update', { title: '博客更新页', name: '博客更新', postContent: docs.content});
        } else {
            res.send(404);
        }

    });
});

module.exports = router;
