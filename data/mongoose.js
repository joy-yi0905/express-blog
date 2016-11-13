var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/blog');
mongoose.connect('mongodb://joy-yi:65a4321@ds031607.mlab.com:31607/blog');

var blogSchema = new mongoose.Schema({
    content: String, // 可设置 unique 保证数据的唯一
    date: String
}, {collection: 'post'});

var post = mongoose.model('post', blogSchema);

module.exports = post;