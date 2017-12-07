var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var blogSchema = new mongoose.Schema({
    content: String, // 可设置 unique 保证数据的唯一
    date: String
}, {collection: 'post'});

var post = mongoose.model('post', blogSchema);

module.exports = post;