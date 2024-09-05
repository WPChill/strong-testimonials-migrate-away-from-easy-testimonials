const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const pluginSlug = 'strong-testimonials-migrate-away-from-easy-testimonials';
const version = require('../package.json').version;

const output = fs.createWriteStream(path.join(__dirname, `../${pluginSlug}-${version}.zip`));
const archive = archiver('zip', {
    zlib: { level: 9 }
});

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('Archive has been finalized and the output file descriptor has closed.');
});
archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);
archive.directory('build/assets/', `${pluginSlug}/assets`);
archive.directory('build/includes/', `${pluginSlug}/includes`);
archive.file('build/strong-testimonials-migrate-away-from-easy-testimonials.php', { name: `${pluginSlug}/strong-testimonials-migrate-away-from-easy-testimonials.php` });
archive.file('build/changelog.txt', { name: `${pluginSlug}/changelog.txt` });
archive.file('build/readme.txt', { name: `${pluginSlug}/readme.txt` });

archive.finalize();