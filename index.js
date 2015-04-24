module.exports = require('browserify-transform-tools').makeStringTransform('replace-moduleid', {
}, function(content, opts, done) { 
    done(null, content.replace(/module\.id/g, '"'+opts.file.replace(process.cwd(), '')+'"'));
});
