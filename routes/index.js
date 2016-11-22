var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    post.find({}, function(err, docs) {
        if (err) {
            console.error(err);
            return;
        }
        // docs 是包含了符合条件的多个文档的一个数组
        // console.log(docs);
        res.render('index', { title: '博客首页', name: '博客', content: docs.reverse()});
    });

});

/* POST home page. */
router.post('/', function(req, res) { 
    var content = req.body.content;
    var date = req.body.date;

    if (content && date) {
        var newPost = new post({
            content: content,
            date: date
        });

        newPost.save(function (err, docs) {
            if (err) {
                console.error(err);
                return;
            }
            // newPost is saved!
            console.log('保存成功！');
            // console.log(docs);

            // 传统方式：res.send(200)会发送至前台，前台页面刷新，get重新获取数据库数据
            // res.send(200);

            // 无刷新方式：ajax返回json
            res.json({
                statusCode: 200,
                statusMsg: '成功',
                content: docs.content,
                date: docs.date,
                _id: docs._id
            });
        });
    }

    var deleteId = req.body.deleteId;

    if (deleteId) {
        post.remove({_id: deleteId}, function(err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('删除成功！');

            // 传统方式：res.send(200)会发送至前台，前台页面刷新，get重新获取数据库数据
            // res.send(200);

            // 无刷新方式：ajax返回json
            res.json({
                statusCode: 200,
                statusMsg: '成功'
            });
        });
    }

    var oldContent = req.body.oldContent,
        updateContent = req.body.updateContent;

    if (oldContent && updateContent) {
        post.update({content: oldContent}, {$set: {'content': updateContent}}, {upsert : true}, function(err) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('更新成功！');
            res.send(200);
        });
    }
});

module.exports = router;
